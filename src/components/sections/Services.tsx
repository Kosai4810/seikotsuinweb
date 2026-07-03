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
      "無料相談フォーム、メール、電話、アクセス情報へ迷わず進める導線を、スマートフォン優先で構築します。",
  },
  {
    number: "03",
    title: "Googleマップ・口コミ導線整備",
    description:
      "Googleビジネスプロフィールの情報整理、写真や文章の設定、口コミページへ案内するQRコードや院内掲示物を制作します。",
  },
  {
    number: "04",
    title: "開業Webサポート",
    description:
      "新規開業時に必要なホームページ、Googleマップ、Instagram、チラシなどをまとめて準備します。",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-[var(--kinari)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="02" label="Services" />
        <div className="max-w-3xl mb-9 md:mb-12">
          <h2 className="heading-lg text-2xl md:text-3xl text-[var(--sumi)] mb-4">
            ホームページだけではありません。<br className="hidden sm:block" />予約につながるWeb環境を、まとめて整えます。
          </h2>
          <p className="text-[var(--sumi-nezumi)] leading-relaxed">
            ツールを個別に用意するだけでなく、患者さんが知り、比較し、相談するまでの導線を一緒に整えます。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--usuzumi-line)] mb-8 border border-[var(--usuzumi-line)]">
          {services.map((service) => (
            <article key={service.number} className="bg-white p-5 md:p-7">
              <div className="flex items-center gap-3 mb-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--fukai-ai)] font-inter text-[11px] text-white">{service.number}</span><h3 className="heading-md text-base md:text-lg leading-snug">{service.title}</h3></div>
              <p className="pl-11 text-sm text-[var(--sumi-nezumi)] leading-6">{service.description}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <a href="/seikotsuin-homepage" className="text-sm underline underline-offset-4">整骨院のホームページ制作について詳しく見る</a>
          <a href="/seikotsuin-opening" className="text-sm underline underline-offset-4">整骨院の開業準備・Web集客について詳しく見る</a>
        </div>
        <CTAGroup />
      </div>
    </section>
  );
}
