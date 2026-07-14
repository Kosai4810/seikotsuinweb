import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/common/SeoLandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "接骨院のホームページ制作｜予約導線・Googleマップまで対応",
  description: "接骨院専門のホームページ制作。施術内容、料金、保険施術の案内、予約・問い合わせ導線、Googleマップ、基本SEOまで患者目線で整理します。",
  alternates: { canonical: "/sekotsuin-homepage" },
  openGraph: { title: "接骨院のホームページ制作｜整骨院web", description: "接骨院の強みと患者さんの予約導線を、スマホで分かりやすく設計します。", url: `${siteConfig.url}/sekotsuin-homepage`, images: ["/generated-sample-sports.jpg"] },
};

const sections = [
  { title: "接骨院の強みを、初めての患者さんに伝わる順番へ", text: "接骨院のホームページでは、施術内容だけでなく、保険施術・自費施術の考え方、料金、受付時間、予約方法、通いやすさを整理することが重要です。専門用語を並べるのではなく、患者さんが来院前に不安を減らせる順番で構成します。", items: ["施術方針", "保険施術・自費施術の案内", "料金の目安", "受付時間", "アクセス・駐車場", "電話・フォーム導線"] },
  { title: "スポーツ・外傷・地域密着など、院ごとの特徴を言語化", text: "接骨院ごとに、スポーツ対応、交通事故相談、地域の高齢者対応、学生向けの相談など、選ばれる理由は違います。ヒアリングを通じて、院の特徴が一般的な説明に埋もれないよう、トップページや各セクションへ反映します。" },
  { title: "医療広告表現に配慮した文章設計", text: "効果を断定する表現や誇大に見えやすい表現を避けながら、院の方針、相談できる内容、施術までの流れを分かりやすく整理します。必要に応じて、最終掲載前に専門家や関係機関へ確認しやすい形で文章を整えます。" },
  { title: "98,000円から必要な導線をまとめて整備", text: "5ページ程度のホームページ、スマートフォン対応、問い合わせフォーム、電話・メール・Googleマップ導線、基本SEO設定、公開後1か月サポートまで、開業時やリニューアル時に必要な土台をまとめて整えます。" },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: "接骨院のホームページ制作", serviceType: "ホームページ制作", provider: { "@type": "Organization", name: siteConfig.businessName }, areaServed: "JP", url: `${siteConfig.url}/sekotsuin-homepage`, offers: { "@type": "Offer", price: "98000", priceCurrency: "JPY" } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SeoLandingPage eyebrow="SEKOTSUIN WEBSITE DESIGN" title="接骨院のホームページ制作を、予約導線まで分かりやすく。" lead="施術内容、料金、アクセス、予約方法を患者目線で整理し、相談につながるスマホ対応サイトを制作します。" image="/generated-sample-sports.jpg" imageAlt="日本人の施術者がランナーの動きを確認する接骨院のイメージ" sections={sections} relatedHref="/seikotsuin-homepage" relatedLabel="整骨院のホームページ制作も見る" /></>;
}
