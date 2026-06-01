import type { Metadata } from "next";
import { CtaBand } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { columnCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "建設業ホームページ集客コラム",
  description:
    "建設業のホームページ制作、施工実績ページ、GoogleマップやSNSに頼りすぎない集客導線について解説します。",
};

export default function ColumnsPage() {
  return (
    <>
      <section className="construction-grid bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="集客コラム"
            title="建設業の問い合わせを増やすための考え方。"
            text="ほうかんWEBのブログ戦略を参考に、建設業でも検索されやすい悩み・業種・地域のテーマを整理します。"
          />
        </div>
      </section>
      <section className="bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3">
          {columnCards.map((card) => (
            <article key={card.title} className="border border-zinc-200 bg-white p-6">
              <p className="font-ui text-sm font-black text-yellow-600">SEO記事テーマ</p>
              <h2 className="mt-2 text-2xl font-black text-zinc-950">{card.title}</h2>
              <p className="mt-3 text-base leading-7 text-zinc-700">{card.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
