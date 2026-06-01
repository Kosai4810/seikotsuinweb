import type { Metadata } from "next";
import { Plus, Minus } from "lucide-react";
import { CtaBand } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "建設WEBのよくある質問。写真がない場合、スマホ対応、LINE問い合わせ、月額費用、制作期間など。",
};

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-16 sm:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="よくある質問"
            title="ホームページ制作が初めての方へ。"
            text="申し込み前に気になりやすい点をまとめました。"
            align="center"
          />
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-open:bg-teal-100 transition-colors">
                    <Plus
                      size={18}
                      className="text-slate-500 group-open:hidden"
                    />
                    <Minus
                      size={18}
                      className="text-teal-600 hidden group-open:block"
                    />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
