import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAGroup } from "@/components/ui/CTAGroup";

const plans = [
  { name: "モニター制作プラン", price: "98,000円（税込）〜", monitor: true, features: ["5ページ程度のホームページ", "スマートフォン対応", "問い合わせフォーム", "メール・電話・Googleマップへの導線", "基本的なSEO設定", "修正2回", "公開後1か月サポート"], conditions: ["制作したホームページを整骨院webの制作事例として掲載可能な院", "公開後の感想または簡単なインタビューに協力いただける院", "ホームページ上に「お客様の声」として感想を掲載可能な院", "先着3院に達した時点で受付終了", "撮影費、ドメイン費、有料機能、追加ページは別途見積り"] },
  { name: "集客スタートプラン", price: "198,000円（税込）〜", recommended: true, features: ["ホームページ制作", "問い合わせ導線設計", "Googleビジネスプロフィール初期整備", "口コミ案内用QRコード", "症状別ページ3ページ", "公開後2か月サポート"] },
  { name: "開業フルサポートプラン", price: "298,000円（税込）〜", features: ["ホームページ制作", "問い合わせフォーム構築", "Googleマップ初期整備", "Instagram初期設計", "ロゴまたは簡易ビジュアル制作", "チラシまたは名刺デザイン", "開業前の集客導線設計", "公開後3か月サポート"] },
];

const supports = [
  { name: "Web保守サポート", price: "月額9,800円（税込）〜", features: ["文章や写真の軽微な変更", "営業時間・休診日の更新", "サーバー・ドメイン管理", "月1回のお知らせ更新", "メールでの相談対応"] },
  { name: "集客運用サポート", price: "月額29,800円（税込）〜", features: ["Googleマップ投稿", "お知らせ文作成", "Instagram投稿サポート", "口コミ返信文作成", "アクセス数・問い合わせ数の簡易レポート", "集客導線の改善提案"] },
];

const FeatureList = ({ features }: { features: readonly string[] }) => <ul className="space-y-3">{features.map((f) => <li key={f} className="flex gap-3 text-sm text-[var(--sumi-nezumi)]"><span className="mt-2 w-1 h-1 rounded-full bg-[var(--fukai-ai)] shrink-0" />{f}</li>)}</ul>;

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-16 md:py-20 bg-[var(--kinari)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="07" label="Pricing" />
        <h2 className="heading-lg text-2xl md:text-3xl mb-4">必要な制作をまとめて、<br />98,000円から。</h2>
        <p className="text-[var(--sumi-nezumi)] mb-8 md:mb-10">院の現在地と必要な導線に合わせてお選びいただけます。</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => <article id={plan.monitor ? "monitor-plan" : undefined} key={plan.name} className={`bg-white p-8 lg:p-10 relative border scroll-mt-32 ${plan.monitor ? "border-[#a88750] bg-[#fcf8ef] lg:scale-[1.035] z-10 shadow-[0_18px_50px_rgba(83,63,30,0.12)]" : plan.recommended ? "border-[var(--fukai-ai)]" : "border-[var(--usuzumi-line)]"}`}>
            {plan.monitor && <span className="inline-block bg-[#a88750] text-white text-xs px-4 py-2 mb-5 tracking-wide">先着3院限定</span>}
            {plan.recommended && <span className="absolute top-0 right-0 bg-[var(--fukai-ai)] text-white text-xs px-4 py-2">おすすめ</span>}
            <h3 className="heading-md text-lg mb-5 pr-16">{plan.name}</h3><p className={`${plan.monitor ? "text-3xl text-[#806334]" : "text-2xl"} font-medium mb-8`}>{plan.price}</p><FeatureList features={plan.features} />
            {plan.conditions && <div className="mt-8 pt-6 border-t border-[#d8c8aa]"><p className="text-sm font-medium mb-4">モニター条件</p><FeatureList features={plan.conditions} /></div>}
            <p className="mt-8 pt-6 border-t text-xs leading-relaxed text-[var(--nibi)]">院の規模、ページ数、撮影の有無、機能によって料金は変動します。</p>
            {plan.monitor && <a href="#contact-form" className="mt-7 w-full inline-flex justify-center bg-[#a88750] text-white px-5 py-4 text-sm hover:bg-[#947442] transition-colors">モニター制作について相談する</a>}
          </article>)}
        </div>
        <div className="mt-14 md:mt-16 mb-8"><h2 className="heading-lg text-2xl md:text-3xl mb-4">公開後の月額サポート</h2><p className="text-[var(--sumi-nezumi)]">公開後の更新と改善も、必要な範囲で支援します。</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--usuzumi-line)]">{supports.map((s) => <article key={s.name} className="bg-white p-8 md:p-12"><h3 className="heading-md text-lg mb-3">{s.name}</h3><p className="text-xl font-medium mb-8">{s.price}</p><FeatureList features={s.features} /></article>)}</div>
        <p className="text-sm text-[var(--sumi-nezumi)] mt-6">※ 広告費、撮影費、大幅なページ追加は別途となります。</p>
        <div className="mt-12"><CTAGroup /></div>
      </div>
    </section>
  );
}
