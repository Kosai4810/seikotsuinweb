import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { areaPages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "地域別の建設業ホームページ制作",
  description:
    "東京、大阪、名古屋、福岡など、地域密着の建設業者向けホームページ制作ページです。対応エリアと施工実績を整理して問い合わせにつなげます。",
};

export default function AreasPage() {
  return (
    <>
      <section className="construction-grid bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="地域ページ戦略"
            title="地域名で探すお客様に、見つけてもらうページを作ります。"
            text="「地域名 + 工事内容」で探すお客様に向けて、対応エリア、施工実績、問い合わせ導線を整理します。"
          />
        </div>
      </section>
      <section className="bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-2">
          {areaPages.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="technical-frame border border-zinc-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="font-ui text-sm font-black text-yellow-600">{area.keyword}</p>
              <h2 className="mt-2 text-2xl font-black text-zinc-950">{area.name}の建設業ホームページ制作</h2>
              <p className="mt-3 text-base leading-7 text-zinc-700">{area.lead}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
