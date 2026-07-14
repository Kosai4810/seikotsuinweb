import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAGroup } from "@/components/ui/CTAGroup";

const services = [
  {
    number: "01",
    title: "ホームページ制作",
    description:
      "院の強み、施術内容、料金、アクセス、予約方法を整理し、患者目線で分かりやすいホームページを制作します。",
  },
  {
    number: "02",
    title: "予約・問い合わせ導線",
    description:
      "問い合わせフォーム、メール、電話、アクセス情報へ迷わず進める導線を、スマートフォン優先で構築します。",
  },
  {
    number: "03",
    title: "Googleマップ・口コミ導線整備",
    description:
      "Googleビジネスプロフィールの情報整理、写真や文章の設定、検索から来院までの導線を整えます。",
  },
  {
    number: "04",
    title: "公式LINE・予約導線設計",
    description:
      "LINEへの案内、予約前の不安を減らす文言、問い合わせ後の流れを整理し、離脱しにくい導線を作ります。",
  },
  {
    number: "05",
    title: "Instagram・広告運用の初期設計",
    description:
      "必要に応じて、Instagram投稿の方向性、Google広告の受け皿、キャンペーン導線まで設計します。",
  },
  {
    number: "06",
    title: "アクセス流入・改善管理",
    description:
      "公開後のアクセス数、問い合わせ数、見られているページを確認し、次に直すべき箇所を提案します。",
  },
  {
    number: "07",
    title: "開業Webサポート",
    description:
      "新規開業時に必要なホームページ、Googleマップ、Instagram、チラシなどをまとめて準備します。",
  },
];

const routeSteps = [
  ["01", "見つける", "Google検索・Googleマップ・Instagramから院を知る"],
  ["02", "比較する", "HPで施術内容、料金、院の雰囲気、アクセスを確認する"],
  ["03", "相談する", "電話・メール・フォーム・LINEへ迷わず進む"],
  ["04", "改善する", "アクセスや問い合わせを見ながら、必要な施策を足していく"],
] as const;

const seoLinks = [
  ["整骨院のホームページ制作", "/seikotsuin-homepage"],
  ["接骨院のホームページ制作", "/sekotsuin-homepage"],
  ["鍼灸院のホームページ制作", "/shinkyuin-homepage"],
  ["整体院のホームページ制作", "/seitai-homepage"],
  ["治療院ホームページ制作の費用", "/seikotsuin-homepage-cost"],
  ["整骨院の開業準備・Web集客", "/seikotsuin-opening"],
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="03" label="Services" />
        <div className="max-w-3xl mb-9 md:mb-12">
          <h2 className="heading-lg text-2xl md:text-3xl text-[var(--sumi)] mb-4">提供サービス</h2>
          <p className="text-[var(--sumi-nezumi)] leading-relaxed">
            ホームページを作って終わりではなく、患者さんが知り、比較し、相談するまでの流れをまとめて整えます。
          </p>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-px border border-[#d8c8aa] bg-[#d8c8aa] lg:grid-cols-4">
          {routeSteps.map(([number, title, description]) => (
            <article key={number} className="bg-[#fbf8f1] p-5">
              <span className="font-inter text-[10px] font-bold tracking-[.18em] text-[#96733d]">{number}</span>
              <h3 className="mt-2 text-base font-bold text-[var(--sumi)]">{title}</h3>
              <p className="mt-2 text-xs leading-6 text-[var(--sumi-nezumi)]">{description}</p>
            </article>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--usuzumi-line)] mb-8 border border-[var(--usuzumi-line)]">
          {services.map((service) => (
            <article key={service.number} className="bg-white p-5 md:p-7">
              <div className="flex items-center gap-3 mb-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--fukai-ai)] font-inter text-[11px] text-white">{service.number}</span><h3 className="heading-md text-base md:text-lg leading-snug">{service.title}</h3></div>
              <p className="pl-11 text-sm text-[var(--sumi-nezumi)] leading-6">{service.description}</p>
            </article>
          ))}
        </div>
        <div className="mb-8 rounded-lg border border-[#d8c8aa] bg-[#fbf8f1] p-5 md:p-6">
          <h3 className="heading-md mb-4 text-base text-[var(--sumi)]">業態・目的別に詳しく見る</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {seoLinks.map(([label, href]) => (
              <a key={href} href={href} className="text-sm underline underline-offset-4">{label}</a>
            ))}
          </div>
        </div>
        <CTAGroup />
      </div>
    </section>
  );
}
