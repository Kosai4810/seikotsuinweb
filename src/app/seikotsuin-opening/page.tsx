import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/common/SeoLandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "整骨院の開業準備｜ホームページ・Googleマップ支援",
  description: "整骨院・接骨院の開業準備をWeb面から支援。ホームページ、Googleマップ、Instagram、チラシなど、開業前に必要な集客導線をまとめて整えます。",
  alternates: { canonical: "/seikotsuin-opening" },
  openGraph: { title: "整骨院の開業準備・Web集客支援｜整骨院web", description: "開業前に必要なホームページ、問い合わせ導線、Googleマップなどをまとめて準備。", url: `${siteConfig.url}/seikotsuin-opening`, images: ["/generated-sample-opening.jpg"] },
};

const sections = [
  { title: "整骨院の開業準備で、Webは早めの着手が重要です", text: "院名やコンセプト、施術内容、料金、営業時間、予約方法が決まると、ホームページやGoogleマップの準備を進められます。公開直前に慌てないよう、内装や各種手続きと並行して情報と素材を整理します。" },
  { title: "開業前に整えるWeb集客のチェックリスト", text: "患者さんが院を見つけ、内容を確認し、予約・問い合わせできる状態を開業前に作ります。必要なものだけを選ぶことも、まとめて依頼することも可能です。", items: ["ホームページ", "独自ドメイン", "問い合わせフォーム", "Googleビジネスプロフィール", "電話・メール導線", "Instagram初期設計", "院内・外観写真", "チラシ・名刺"] },
  { title: "ホームページ制作の期間", text: "制作期間は通常6週間程度です。原稿・写真の準備状況、ご確認や修正の進行状況により前後する場合があります。", items: ["ヒアリング・構成整理：1週間程度", "デザイン制作：1〜2週間程度", "コーディング・実装：2〜3週間程度", "確認・修正・公開準備：1週間程度"] },
  { title: "開業フルサポートプラン", text: "ホームページ制作、問い合わせフォーム、Googleマップ初期整備、Instagram初期設計、簡易ビジュアル、チラシまたは名刺、開業前の集客導線設計、公開後3か月サポートを298,000円（税込）から提供します。撮影や追加機能などは内容に応じてお見積りします。" },
  { title: "開業後も更新と改善を支援します", text: "営業時間や休診日のお知らせ、Googleマップ投稿、アクセス数・問い合わせ数の確認など、公開後の運用も月額サポートで支援します。必要な内容を相談したうえで選べます。" },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: "整骨院・接骨院の開業Webサポート", serviceType: "整骨院の開業準備・Web集客支援", areaServed: "JP", url: `${siteConfig.url}/seikotsuin-opening` };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SeoLandingPage eyebrow="SEIKOTSUIN OPENING SUPPORT" title="整骨院の開業準備に必要なWeb環境を、まとめて。" lead="ホームページ、問い合わせフォーム、Googleマップ、Instagram、チラシまで。開業前に必要な情報と問い合わせ導線を整理します。" image="/generated-sample-opening.jpg" imageAlt="新規開業を想定した整骨院の受付" sections={sections} relatedHref="/seikotsuin-homepage" relatedLabel="整骨院のホームページ制作を見る" /></>;
}
