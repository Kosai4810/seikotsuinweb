import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { legalBusinessRows } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "建設WEBの特定商取引法に基づく表記です。",
};

export default function TokushohoPage() {
  return (
    <>
      <section className="construction-grid bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading label="法務表記" title="特定商取引法に基づく表記" />
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="overflow-hidden border border-zinc-200">
            {legalBusinessRows.map(([label, value]) => (
              <div key={label} className="grid border-b border-zinc-200 last:border-b-0 md:grid-cols-[220px_1fr]">
                <div className="bg-zinc-50 p-4 text-base font-black text-zinc-950">{label}</div>
                <div className="p-4 text-base leading-7 text-zinc-700">{value}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm font-bold leading-6 text-zinc-600">
            公開前に、実際の屋号、所在地、連絡先、価格表示、キャンセル条件などを確認して差し替えてください。
          </p>
        </div>
      </section>
    </>
  );
}
