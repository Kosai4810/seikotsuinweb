import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

const rateLimit = new Map<string, number[]>();

function text(value: unknown, max = 1000) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function escapeHtml(value: string) { return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char] || char); }
function validEmail(value: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254; }

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Resend error: ${response.status}`);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const phone = text(body.phone, 30);
    const email = text(body.email, 254);
    const name = text(body.name, 120);
    const clinic = text(body.clinic, 200);
    const consultation = text(body.consultation, 5000);
    const website = text(body.website, 200);
    const startedAt = Number(body.startedAt);

    if (website) return NextResponse.json({ ok: true });
    if (!startedAt || Date.now() - startedAt < 3000 || Date.now() - startedAt > 86_400_000) return NextResponse.json({ error: "送信内容を確認し、もう一度お試しください。" }, { status: 400 });
    if (!phone && !email) return NextResponse.json({ error: "電話番号またはメールアドレスはどちらか一方は必ずご入力ください。" }, { status: 400 });
    if (!name || !consultation || (email && !validEmail(email)) || body.privacy !== "agreed") {
      return NextResponse.json({ error: "必須項目を正しく入力してください。" }, { status: 400 });
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();
    const recent = (rateLimit.get(ip) || []).filter((time) => now - time < 3_600_000);
    if (recent.length >= 5) return NextResponse.json({ error: "送信回数が上限に達しました。時間をおいてお試しください。" }, { status: 429 });
    rateLimit.set(ip, [...recent, now]);

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !from) {
      console.error("Contact email environment variables are not configured.");
      return NextResponse.json({ error: `現在フォームの送信設定中です。${siteConfig.email}または電話でお問い合わせください。` }, { status: 503 });
    }

    const rows = [["お名前", name], ["院名または開業予定の院名", clinic || "未入力"], ["電話番号", phone || "未入力"], ["メール", email || "未入力"], ["相談内容", consultation]];
    const adminHtml = `<h1>新しいお問い合わせ</h1>${rows.map(([label, value]) => `<p><strong>${label}</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`).join("")}`;
    await sendEmail(apiKey, { from, to: [to], ...(email ? { reply_to: email } : {}), subject: "【整骨院web】無料相談のお申し込み", html: adminHtml });
    if (email) await sendEmail(apiKey, { from, to: [email], subject: "【整骨院web】お問い合わせを受け付けました", html: `<p>お問い合わせありがとうございます。内容を確認後、メールまたはお電話でご連絡し、Zoom相談の日程を調整いたします。</p><hr>${adminHtml}<p>※このメールは自動送信です。</p>` });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ error: "送信に失敗しました。時間をおいてお試しください。" }, { status: 500 });
  }
}
