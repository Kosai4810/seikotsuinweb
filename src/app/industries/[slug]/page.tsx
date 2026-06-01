import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { areaPages, industryPages } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryPages.find((item) => item.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.name}のホームページ制作`,
    description: `${industry.keyword}なら建設WEB。施工実績、対応エリア、電話・LINE導線を整理し、問い合わせにつながるホームページを制作します。`,
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industryPages.find((item) => item.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <section className="construction-grid bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label={industry.keyword}
            title={`${industry.name}専門のホームページ制作`}
            text={industry.lead}
          />
        </div>
      </section>
      <section className="bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 lg:grid-cols-3">
          <article className="technical-frame border border-zinc-200 bg-white p-6">
            <h2 className="text-2xl font-black text-zinc-950">施工実績を整理</h2>
            <p className="mt-3 text-base leading-7 text-zinc-700">
              写真、地域、工事内容、対応範囲を見やすく掲載し、初めてのお客様に安心感を伝えます。
            </p>
          </article>
          <article className="technical-frame border border-zinc-200 bg-white p-6">
            <h2 className="text-2xl font-black text-zinc-950">問い合わせ導線を設計</h2>
            <p className="mt-3 text-base leading-7 text-zinc-700">
              スマホで見たお客様が、電話、LINE、フォームへ迷わず進めるように導線を配置します。
            </p>
          </article>
          <article className="technical-frame border border-zinc-200 bg-white p-6">
            <h2 className="text-2xl font-black text-zinc-950">地域SEOに対応</h2>
            <p className="mt-3 text-base leading-7 text-zinc-700">
              「地域名 + {industry.name}」で探すお客様に向けて、対応エリアや事例をページ内に整理します。
            </p>
          </article>
        </div>
        <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-black text-zinc-950">地域ページとの組み合わせ</h2>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {areaPages.map((area) => (
              <div key={area.slug} className="border border-zinc-200 bg-white p-4">
                <p className="font-ui text-sm font-black text-yellow-600">{area.keyword}</p>
                <p className="mt-2 text-lg font-black text-zinc-950">{area.name} × {industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
