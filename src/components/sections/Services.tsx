import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAGroup } from "@/components/ui/CTAGroup";

const services = [
  {
    number: "01",
    title: "ホームページ制作",
    lead: "院の魅力と必要情報を、スマホで見やすい形に整理します。",
    description:
      "施術内容、料金、アクセス、予約方法、院の考え方まで。初めての患者さんが比較しやすく、問い合わせまで進みやすいホームページを制作します。",
    image: "/service-01-website.png",
    alt: "ホームページ制作の打ち合わせをする治療院オーナーと制作者のリアルなイラスト",
  },
  {
    number: "02",
    title: "予約・問い合わせ導線",
    lead: "見た人が迷わず相談できる道筋を作ります。",
    description:
      "電話、メール、問い合わせフォーム、アクセス情報への導線をスマートフォン優先で設計。営業時間外に見た人も次の行動へ進みやすい構成にします。",
    image: "/service-02-contact.png",
    alt: "問い合わせメールとスマートフォンのフォームを確認するスタッフのリアルなイラスト",
  },
  {
    number: "03",
    title: "Googleマップ・口コミ導線整備",
    lead: "近くで探している患者さんに、選ばれやすい状態へ。",
    description:
      "Googleビジネスプロフィールの情報、写真、口コミ導線、ホームページへのリンクを整理し、検索から来院までを自然につなげます。",
    image: "/service-03-map.png",
    alt: "スマートフォンで地図と口コミ情報を確認する治療院オーナーのリアルなイラスト",
  },
  {
    number: "04",
    title: "公式LINE・予約導線設計",
    lead: "電話しにくい人も、相談しやすい入口を用意します。",
    description:
      "公式LINE、予約フォーム、電話、メールの役割を整理。症状・料金・初回の流れを確認したあと、無理なく相談できる導線を設計します。",
    image: "/service-04-line.png",
    alt: "チャット予約導線をスマートフォンで案内する受付スタッフのリアルなイラスト",
  },
  {
    number: "05",
    title: "Instagram・広告運用の初期設計",
    lead: "投稿や広告を、ホームページへの流れに変えます。",
    description:
      "Instagram投稿の方向性、Google広告の受け皿、キャンペーン導線まで設計。見られて終わりではなく、比較・相談につながる形にします。",
    image: "/service-05-instagram.png",
    alt: "SNS投稿と広告クリエイティブをスマートフォンで確認する治療院スタッフのリアルなイラスト",
  },
  {
    number: "06",
    title: "アクセス流入・改善管理",
    lead: "公開後の数字を見て、次に直す場所を判断します。",
    description:
      "アクセス数、問い合わせ数、見られているページを確認し、必要な改善を提案します。作って終わりではなく、運用しながら整えます。",
    image: "/service-06-analytics.png",
    alt: "アクセスデータのグラフを見ながら改善方針を相談するリアルなイラスト",
  },
  {
    number: "07",
    title: "開業Webサポート",
    lead: "開業前に必要なWebまわりをまとめて準備します。",
    description:
      "ホームページ、Googleマップ、Instagram、チラシ・名刺など、開業時に必要な情報と集客導線を一緒に整理します。",
    image: "/service-07-opening.png",
    alt: "開業した治療院オーナーが完成したホームページを見て満足しているリアルなイラスト",
  },
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
    <section id="services" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionLabel number="03" label="サービス" />
        <div className="mb-9 max-w-3xl md:mb-12">
          <h2 className="heading-lg mb-4 text-2xl text-[var(--sumi)] md:text-3xl">提供サービス</h2>
          <p className="leading-relaxed text-[var(--sumi-nezumi)]">
            ホームページを作って終わりではなく、患者さんが知り、比較し、相談するまでのWeb導線をまとめて整えます。
          </p>
        </div>

        <div className="mb-8 grid gap-px border border-[#d8c8aa] bg-[#d8c8aa] md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group bg-white p-5 transition-colors hover:bg-[#fbf8f1] md:p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--fukai-ai)] font-inter text-[11px] text-white">
                      {service.number}
                    </span>
                    <h3 className="heading-md text-base leading-snug text-[var(--sumi)] md:text-lg">{service.title}</h3>
                  </div>
                  <p className="text-sm font-bold leading-7 text-[var(--sumi)]">{service.lead}</p>
                </div>
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl border border-[#e4d9c7] bg-[#f7f3eb] shadow-sm md:h-24 md:w-28">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 768px) 112px, 96px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--sumi-nezumi)]">{service.description}</p>
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
