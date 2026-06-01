import type { Metadata } from "next";
import { CtaBand } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { IndustryGrid } from "@/components/ui-blocks";
import { industryPages } from "@/lib/site-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "対応業種",
  description:
    "外壁塗装、リフォーム、電気工事、水道工事、内装工事、解体工事、大工、一人親方、小規模工務店などに対応。",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="construction-grid bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="対応業種"
            title="現場仕事の強みが伝わる見せ方に整えます。"
            text="施工内容、対応エリア、実績写真、問い合わせ方法を業種に合わせて組み立てます。"
          />
        </div>
      </section>
      <section className="bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <IndustryGrid />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {industryPages.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="technical-frame border border-zinc-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="font-ui text-sm font-black text-yellow-600">{industry.keyword}</p>
                <h2 className="mt-2 text-2xl font-black text-zinc-950">{industry.name}のホームページ制作</h2>
                <p className="mt-3 text-base leading-7 text-zinc-700">{industry.lead}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
