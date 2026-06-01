import type { Metadata } from "next";
import { CtaBand } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { PlanCards } from "@/components/ui-blocks";
import { lowPriceReasons } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "料金",
  description:
    "建設WEBの料金ページ。ライトプラン49,800円〜、スタンダードプラン98,000円〜、保守プラン月額5,500円〜。",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-16 sm:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="料金"
            title="建設業のホームページを、始めやすい価格で。"
            text="名刺代わりの1ページから、本格的な集客向け5ページ構成まで対応します。"
            align="center"
          />
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PlanCards />
          <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-base font-medium text-slate-700 leading-relaxed">
              表示価格は目安です。写真撮影、原稿作成量、ページ追加、ドメイン・サーバー費用などにより変動する場合があります。
            </p>
          </div>
        </div>
      </section>

      {/* Low Price Reasons */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="なぜ低価格なのか？"
            title="必要な内容に絞るから、始めやすい価格にできます。"
            text="建設業で問い合わせにつながりやすい構成をもとに作るため、無駄な企画費や過剰な機能を抑えられます。"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {lowPriceReasons.map((reason, index) => (
              <article
                key={reason.title}
                className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-amber-500/20">
                    {index + 1}
                  </div>
                  <h2 className="text-xl font-black text-slate-900">
                    {reason.title}
                  </h2>
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {reason.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
