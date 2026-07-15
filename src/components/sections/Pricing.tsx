import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAGroup } from "@/components/ui/CTAGroup";

const plans = [
  { name: "スターター制作プラン", tagline: "院の魅力や詳細を十分に伝えたい人向け", price: "98,000円（税込）〜", regularPrice: "128,000円（税込）〜", monitor: true, features: ["5ページ程度のホームページ", "スマートフォン対応", { label: "問い合わせフォーム", highlight: true }, "メール・電話・Googleマップへの導線", "基本的なSEO設定", "修正2回", { label: "公開後1か月サポート", highlight: true }], conditions: ["先着3院に達した時点で受付終了", "撮影費、ドメイン費、有料機能、追加ページは別途見積り", "内容に応じて必要なページ数・導線を個別に整理します"] },
  { name: "集客スタートプラン", tagline: "Webサイトからの集客を本格的に考える人向け", price: "198,000円（税込）〜", recommended: true, features: [{ label: "スターター制作プランの内容すべて", highlight: true }, { label: "Googleビジネスプロフィール初期整備", highlight: true }, { label: "SEO対策", highlight: true }, { label: "公式LINE・予約システム構築", highlight: true }, "公開後2か月サポート"] },
  { name: "開業フルサポートプラン", tagline: "Webサイトだけでなく、その他SNS・名刺で動線をさらに強固にしたい人向け", price: "298,000円（税込）〜", features: [{ label: "集客スタートプランの内容すべて", highlight: true }, "Instagram初期設計", { label: "広告運用代行", highlight: true }, "ロゴまたは簡易ビジュアル制作", "チラシまたは名刺デザイン", "開業前の集客導線設計", "公開後3か月サポート"] },
];

const supports = [
  { name: "Web保守サポート", price: "月額9,800円（税込）〜", features: ["文章や写真の軽微な変更", "営業時間・休診日の更新", "サーバー・ドメイン管理", "月1回のお知らせ更新", "メールでの相談対応"] },
  { name: "集客運用サポート", price: "月額39,800円（税込）〜", features: ["Googleマップ投稿", "お知らせ文作成", "Instagram投稿サポート", { label: "公式LINE運用", highlight: true }, { label: "広告代行", highlight: true }, "口コミ返信文作成", "アクセス数・問い合わせ数の簡易レポート", "集客導線の改善提案"] },
];

const priceReasons = [
  ["治療院向けに構成を整理済み", "患者さんが知りたい情報、予約導線、Googleマップ連携など、必要な型をあらかじめ絞っています。"],
  ["制作範囲を標準化しているため", "治療院に必要な基本構成と導線をあらかじめ整理し、初期設計の無駄を抑えています。"],
  ["必要なものから始める設計", "最初から大規模に作り込まず、公開後の反応を見ながらLINE・広告・SNSへ拡張できます。"],
] as const;

type Feature = string | { label: string; highlight?: boolean };

const FeatureList = ({ features }: { features: readonly Feature[] }) => <ul className="space-y-3">{features.map((feature) => {
  const label = typeof feature === "string" ? feature : feature.label;
  const highlight = typeof feature !== "string" && feature.highlight;
  return <li key={label} className={`flex gap-3 text-sm ${highlight ? "font-bold text-[#806334]" : "text-[var(--sumi-nezumi)]"}`}><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${highlight ? "bg-[#b58b45]" : "bg-[var(--fukai-ai)]"}`} />{label}</li>;
})}</ul>;

const PriceText = ({ price, monitor }: { price: string; monitor?: boolean }) => {
  const [main, suffix = ""] = price.split("（税込）");
  return (
    <p className={`mb-8 font-serif leading-none tracking-tight font-medium ${monitor ? "text-[#806334]" : "text-[var(--sumi)]"}`}>
      <span className="inline-flex items-baseline whitespace-nowrap">
        <span className="text-3xl md:text-4xl lg:text-[2.15rem] xl:text-[2.55rem]">{main}</span>
        <span className="ml-1 text-lg md:text-2xl lg:text-xl xl:text-2xl">（税込）</span>
        <span className="ml-1 text-2xl md:text-3xl lg:text-2xl xl:text-3xl">{suffix}</span>
      </span>
    </p>
  );
};

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-16 md:py-20 bg-[var(--kinari)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="02" label="料金" />
        <h2 className="heading-lg mb-4 whitespace-nowrap text-[clamp(1.35rem,3.1vw,1.9rem)]">治療院のWeb導線スターターパックを、98,000円から。</h2>
        <p className="text-[var(--sumi-nezumi)] mb-8 md:mb-10">ホームページ単体ではなく、患者さんが見つけて、比較して、相談するまでの導線を必要な範囲で整えます。</p>
        <div className="mb-10 grid grid-cols-1 gap-px border border-[#d8c8aa] bg-[#d8c8aa] md:grid-cols-3">
          {priceReasons.map(([title, description]) => (
            <article key={title} className="bg-[#fbf7ef] p-5 md:p-6">
              <h3 className="text-base font-bold leading-snug text-[var(--sumi)]">{title}</h3>
              <p className="mt-3 text-xs leading-6 text-[var(--sumi-nezumi)]">{description}</p>
            </article>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => <article id={plan.monitor ? "monitor-plan" : undefined} key={plan.name} className={`relative scroll-mt-32 border-2 bg-white p-8 lg:p-10 ${plan.monitor ? "z-10 border-[#a88750] bg-[#fcf8ef] shadow-[0_18px_50px_rgba(83,63,30,0.12)] lg:scale-[1.035]" : plan.recommended ? "border-[var(--fukai-ai)]" : "border-[#cfc4b0]"}`}>
            {plan.monitor && <span className="inline-flex items-baseline bg-[#a88750] text-white text-xs px-4 py-2 mb-5 tracking-wide">先着<strong className="mx-1 font-serif text-3xl leading-none tracking-tight">3</strong>院限定</span>}
            {plan.monitor && <div className="campaign-badge absolute top-3 right-3 md:top-4 md:right-4 w-28 md:w-32 aspect-square grid place-content-center px-2 text-center text-[#5f4922]" aria-label="今だけキャンペーン実施中"><span className="relative z-10 block text-[9px] md:text-[10px] font-medium tracking-[0.16em]">＼ 今だけ ／</span><strong className="relative z-10 block mt-1 whitespace-nowrap text-[10px] md:text-xs leading-tight tracking-normal">キャンペーン実施中</strong></div>}
            {plan.recommended && <span className="absolute top-0 right-0 bg-[var(--fukai-ai)] text-white text-xs px-4 py-2">おすすめ</span>}
            <h3 className={`heading-md mb-4 whitespace-nowrap text-[clamp(1.02rem,1.75vw,1.45rem)] ${plan.monitor ? "pr-24 md:pr-28" : "pr-16"}`}>{plan.name}</h3>
            <p className="mb-6 border-l-2 border-[#b58b45] pl-3 text-sm md:text-base font-bold leading-relaxed text-[#6f5528]">{plan.tagline}</p>
            {plan.regularPrice && <p className="mb-1 text-xs tracking-wide text-[var(--nibi)]">通常 <span className="line-through decoration-[#a88750] decoration-2">{plan.regularPrice}</span></p>}<PriceText price={plan.price} monitor={plan.monitor} /><FeatureList features={plan.features} />
            {plan.conditions && <div className="mt-8 pt-6 border-t border-[#d8c8aa]"><p className="text-sm font-medium mb-4">プラン条件</p><FeatureList features={plan.conditions} /></div>}
            <p className="mt-8 pt-6 border-t text-xs leading-relaxed text-[var(--nibi)]">院の規模、ページ数、撮影の有無、機能によって料金は変動します。</p>
            {plan.monitor && <a href="#contact-form" className="mt-7 w-full inline-flex justify-center bg-[#a88750] text-white px-5 py-4 text-sm hover:bg-[#947442] transition-colors">制作について相談する</a>}
          </article>)}
        </div>
        <div className="mt-14 md:mt-16 mb-8"><h2 className="heading-lg text-2xl md:text-3xl mb-4">公開後の月額サポート</h2><p className="text-[var(--sumi-nezumi)]">公開後の更新と改善も、必要な範囲で支援します。</p></div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">{supports.map((s) => <article key={s.name} className="border-2 border-[#cfc4b0] bg-white p-8 md:p-12"><h3 className="heading-md mb-3 whitespace-nowrap text-[clamp(1.05rem,2.1vw,1.35rem)]">{s.name}</h3><p className="text-xl font-medium mb-8">{s.price}</p><FeatureList features={s.features} /></article>)}</div>
        <p className="text-sm text-[var(--sumi-nezumi)] mt-6">※ 広告費、撮影費、大幅なページ追加は別途となります。</p>
        <div className="mt-12"><CTAGroup /></div>
      </div>
    </section>
  );
}
