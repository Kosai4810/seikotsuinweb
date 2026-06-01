import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { areaPages, industries } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areaPages.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areaPages.find((item) => item.slug === slug);
  if (!area) return {};
  return {
    title: `${area.name}の建設業ホームページ制作`,
    description: `${area.keyword}なら建設WEB。対応エリア、施工実績、電話・LINE導線を整理し、地域から直接問い合わせが来るホームページを制作します。`,
  };
}

export default async function AreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = areaPages.find((item) => item.slug === slug);
  if (!area) notFound();

  return (
    <>
      <section className="construction-grid bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label={area.keyword}
            title={`${area.name}の建設業者向けホームページ制作`}
            text={area.lead}
          />
        </div>
      </section>
      <section className="bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 lg:grid-cols-3">
          <article className="border border-zinc-200 bg-white p-6">
            <h2 className="text-2xl font-black text-zinc-950">地域名検索に対応</h2>
            <p className="mt-3 text-base leading-7 text-zinc-700">
              対応市区町村、施工可能エリア、近隣実績をページ内に整理し、地域のお客様が安心して相談できる状態を作ります。
            </p>
          </article>
          <article className="border border-zinc-200 bg-white p-6">
            <h2 className="text-2xl font-black text-zinc-950">施工実績を見せる</h2>
            <p className="mt-3 text-base leading-7 text-zinc-700">
              写真、工事内容、地域、期間を掲載し、初めてのお客様に技術力と対応力を伝えます。
            </p>
          </article>
          <article className="border border-zinc-200 bg-white p-6">
            <h2 className="text-2xl font-black text-zinc-950">電話・LINEに誘導</h2>
            <p className="mt-3 text-base leading-7 text-zinc-700">
              スマホ閲覧を前提に、電話、LINE、フォームへの導線を各ページに配置します。
            </p>
          </article>
        </div>
        <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <div key={industry} className="border border-zinc-200 bg-white px-3 py-3 text-center text-base font-black">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
