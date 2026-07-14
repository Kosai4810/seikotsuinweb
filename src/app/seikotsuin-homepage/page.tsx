import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/common/SeoLandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "整骨院のホームページ制作｜98,000円から・スマホ対応",
  description: "整骨院・接骨院専門のホームページ制作。5ページ程度、スマホ対応、問い合わせフォーム、メール・電話・Googleマップ導線、基本SEO設定、公開後サポートまで98,000円（税込）から。",
  alternates: { canonical: "/seikotsuin-homepage" },
  openGraph: { title: "整骨院のホームページ制作｜整骨院web", description: "整骨院専門。患者目線の情報設計と問い合わせ導線をまとめて制作します。", url: `${siteConfig.url}/seikotsuin-homepage`, images: ["/generated-hero.jpg"] },
};

const sections = [
  { title: "整骨院のホームページに必要な情報を整理します", text: "初めて来院を検討する患者さんは、施術内容だけでなく、料金、施術者、院内の雰囲気、アクセス、予約方法まで確認します。整骨院・接骨院のホームページ制作に必要な情報を患者目線で並べ、迷わず相談できる構成を設計します。", items: ["院の特徴と施術方針", "施術内容・対応症状", "料金・保険適用の案内", "院長・スタッフ紹介", "アクセス・営業時間", "予約・問い合わせ方法"] },
  { title: "98,000円からの制作内容", text: "先着3院限定のスターター制作プランでは、開院直後や既存サイトの見直しに必要な基本機能をまとめて提供します。必要なページと導線を絞ることで、低価格でも相談につながる土台を整えます。", items: ["5ページ程度のサイト制作", "スマートフォン対応", "問い合わせフォーム", "メール・電話導線", "Googleマップ導線", "基本SEO設定", "修正2回", "公開後1か月サポート"] },
  { title: "整骨院専門の基本SEO設定", text: "ページタイトル、検索結果に表示される説明文、見出し構造、画像の代替テキスト、サイトマップなどを整備します。検索順位を保証するものではありませんが、Googleがページ内容を理解しやすく、患者さんにも読みやすい土台を作ります。" },
  { title: "制作から公開までの流れ", text: "無料相談の後、院の強みや掲載内容をヒアリングし、構成・文章・デザインを制作します。確認と修正を経て公開し、その後1か月間は軽微な修正や運用相談に対応します。", items: ["無料相談", "ヒアリング・情報整理", "構成とデザイン制作", "確認・修正", "公開・初期設定", "公開後サポート"] },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: "整骨院・接骨院専門のホームページ制作", serviceType: "ホームページ制作", areaServed: "JP", url: `${siteConfig.url}/seikotsuin-homepage`, offers: { "@type": "Offer", price: "98000", priceCurrency: "JPY" } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SeoLandingPage eyebrow="SEIKOTSUIN WEBSITE DESIGN" title="整骨院のホームページ制作を、患者目線の情報設計から。" lead="院の強みを言葉とデザインにし、電話・メール・問い合わせフォームにつながるWeb導線までまとめて整えます。" image="/generated-hero.jpg" imageAlt="整骨院で日本人の施術者が患者の相談を聞く様子" sections={sections} relatedHref="/seikotsuin-opening" relatedLabel="整骨院の開業準備・Web集客支援を見る" /></>;
}
