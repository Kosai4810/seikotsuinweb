import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "建設WEBのプライバシーポリシーです。",
};

const sections = [
  {
    title: "個人情報の取得",
    text: "当サイトでは、お問い合わせ時にお名前、会社名・屋号、電話番号、メールアドレス、相談内容などを取得する場合があります。",
  },
  {
    title: "利用目的",
    text: "取得した個人情報は、お問い合わせへの回答、サービスのご案内、見積もり、契約手続き、制作業務の連絡のために利用します。",
  },
  {
    title: "第三者提供",
    text: "法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "安全管理",
    text: "取得した個人情報について、漏えい、紛失、改ざんなどを防ぐため、適切な管理に努めます。",
  },
  {
    title: "開示・訂正・削除",
    text: "本人から個人情報の開示、訂正、削除を求められた場合、適切に本人確認を行ったうえで対応します。",
  },
  {
    title: "お問い合わせ窓口",
    text: "個人情報の取り扱いに関するお問い合わせは、サイト内のお問い合わせフォームよりご連絡ください。",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="construction-grid bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading label="個人情報保護方針" title="プライバシーポリシー" />
        </div>
      </section>
      <section className="bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-4">
            {sections.map((section) => (
              <article key={section.title} className="border border-zinc-200 bg-white p-6">
                <h2 className="text-2xl font-black text-zinc-950">{section.title}</h2>
                <p className="mt-3 text-base leading-7 text-zinc-700">{section.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm font-bold leading-6 text-zinc-600">
            公開前に、実際の運営者情報や利用するアクセス解析、広告、フォームサービスに合わせて内容を確認してください。
          </p>
        </div>
      </section>
    </>
  );
}
