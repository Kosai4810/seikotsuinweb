"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { siteConfig } from "@/config/site";

const inputClass = "w-full px-4 py-3.5 border border-[var(--usuzumi-line)] bg-white text-[var(--sumi)] focus:border-[var(--fukai-ai)] focus:outline-none transition-colors";

export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [startedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    if (!payload.phone && !payload.email) {
      setState("error");
      setMessage("電話番号またはメールアドレスはどちらか一方は必ずご入力ください。");
      return;
    }
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, startedAt }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "送信できませんでした。");
      setState("success");
      localStorage.setItem("seikotsuin-contact-submitted", String(Date.now()));
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "送信に失敗しました。時間をおいてお試しください。");
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-[var(--sumi)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="col-span-1 lg:col-span-5 min-w-0">
          <SectionLabel number="08" label="お問い合わせ" tone="light" />
          <h2 className="heading-lg text-2xl md:text-3xl text-white mb-6">先着3院のスターター制作と、無料HP診断を受付中です。</h2>
          <p className="text-white/70 leading-loose mb-10">
            既存HPがある院は、予約導線・料金表記・スマホ表示を中心に改善点を3つ整理します。HPがない院は、開業・集客に必要な導線から一緒に整理します。診断結果だけ受け取りたい場合も歓迎です。
          </p>
          <CTAGroup dark />
          <div className="mt-10 pt-8 border-t border-white/20 space-y-2 text-sm text-white/70">
            <p>電話：<a className="text-white" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a></p>
            {siteConfig.email && <p>メール：{siteConfig.email}</p>}
          </div>
        </div>
        <div id="contact-form" className="col-span-1 lg:col-span-6 lg:col-start-7 scroll-mt-32 min-w-0">
          <div className="bg-white p-7 md:p-10 lg:p-12">
            {state === "success" ? (
              <div role="status" className="py-16 text-center">
                <h3 className="heading-md text-xl mb-4">送信が完了しました</h3>
                <p className="text-sm text-[var(--sumi-nezumi)] leading-relaxed">お問い合わせありがとうございます。内容を確認後、メールまたはお電話でご連絡し、Zoom相談の日程を調整いたします。</p>
                <button className="mt-8 text-sm underline" onClick={() => setState("idle")}>別の内容を送信する</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 min-w-0" noValidate>
                <h3 className="heading-md text-lg mb-3">無料HP診断・相談フォーム</h3>
                <p className="text-sm text-[var(--sumi-nezumi)] leading-relaxed mb-5">まだ依頼内容が決まっていなくても問題ありません。現在のホームページや開業準備の状況をお聞きし、優先して整えるべき内容をご提案します。</p>
                <div className="mb-8 grid gap-2 rounded-sm bg-[#f4f0e8] p-4 text-xs leading-6 text-[var(--sumi-nezumi)]">
                  <p className="font-bold text-[var(--sumi)]">無料診断で見るポイント</p>
                  <p>1. 初めての患者さんが必要な情報へ迷わず進めるか</p>
                  <p>2. 料金・施術内容・予約方法がスマホで分かりやすいか</p>
                  <p>3. Googleマップ・電話・フォームへの導線が機能しているか</p>
                </div>
                <Field label="お名前" name="name" required className={inputClass} />
                <Field label="院名または開業予定の院名" name="clinic" className={inputClass} />
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="電話番号" name="phone" type="tel" className={inputClass} />
                  <Field label="メールアドレス" name="email" type="email" className={inputClass} />
                </div>
                <p className="-mt-3 rounded-sm bg-[#f4f0e8] px-3 py-2 text-xs font-medium text-[var(--sumi-nezumi)]">※ 電話番号またはメールアドレスはどちらか一方は必ずご入力ください。</p>
                <div><label htmlFor="consultation" className="block text-sm mb-2">相談内容 <Required /></label><textarea id="consultation" name="consultation" required rows={6} className={`${inputClass} resize-y`} /></div>
                <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
                <label className="flex items-start gap-3 text-sm text-[var(--sumi-nezumi)]"><input type="checkbox" name="privacy" value="agreed" required className="mt-1" /><span><Link href="/privacy" className="underline">プライバシーポリシー</Link>に同意する <Required /></span></label>
                {state === "error" && <p role="alert" className="p-4 bg-red-50 text-red-800 text-sm">{message}</p>}
                <button type="submit" disabled={state === "sending"} className="w-full py-4 bg-[var(--fukai-ai)] text-white text-sm tracking-wider hover:bg-[#152d4a] disabled:opacity-50">
                  {state === "sending" ? "送信中…" : "無料HP診断を受ける"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Required() { return <span className="text-[var(--enji)]">*</span>; }
function Field({ label, name, type = "text", required, className }: { label: string; name: string; type?: string; required?: boolean; className: string }) { return <div><label htmlFor={name} className="block text-sm mb-2">{label} {required && <Required />}</label><input id={name} name={name} type={type} required={required} className={className} /></div>; }
