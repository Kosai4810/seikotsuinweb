import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/common/SeoLandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "整体院のホームページ制作｜強みと予約導線を整理",
  description: "整体院のホームページ制作。院のコンセプト、施術メニュー、料金、初回の流れ、予約導線、Googleマップ、基本SEOまでまとめて整えます。",
  alternates: { canonical: "/seitai-homepage" },
  openGraph: { title: "整体院のホームページ制作｜整骨院web", description: "整体院の強みと予約導線を、患者さんが比較しやすい順番で設計します。", url: `${siteConfig.url}/seitai-homepage`, images: ["/generated-reception.jpg"] },
};

const sections = [
  { title: "整体院の違いが伝わるホームページへ", text: "整体院は競合が多く、どの院も似た表現になりやすい業態です。施術メニューだけでなく、院の考え方、得意な相談、初回の流れ、料金、通いやすさを整理し、患者さんが比較しやすいサイトにします。", items: ["院のコンセプト", "施術メニュー", "初回の流れ", "料金", "予約方法", "アクセス"] },
  { title: "安さではなく、相談しやすさで選ばれる導線", text: "整体院のサイトでは、価格だけでなく、誰が担当するのか、どんな雰囲気なのか、自分の悩みを相談してよいのかが重要です。写真、文章、ボタン配置をスマートフォン前提で設計します。" },
  { title: "Googleマップ・Instagram・LINEへの展開も考慮", text: "整体院はGoogleマップやInstagramから見られることも多いため、ホームページを受け皿として整えたうえで、必要に応じてLINE、SNS、広告の導線へ拡張できます。" },
  { title: "無料診断で、今のサイトの改善点も整理", text: "既存サイトがある場合は、予約導線、料金表記、スマートフォンでの見やすさを中心に改善点を3つ整理します。すぐに制作を依頼する前提でなくても相談できます。" },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: "整体院のホームページ制作", serviceType: "ホームページ制作", provider: { "@type": "Organization", name: siteConfig.businessName }, areaServed: "JP", url: `${siteConfig.url}/seitai-homepage`, offers: { "@type": "Offer", price: "98000", priceCurrency: "JPY" } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SeoLandingPage eyebrow="SEITAI WEBSITE DESIGN" title="整体院のホームページ制作を、強みと予約導線から。" lead="院のコンセプト、施術メニュー、料金、初回の流れを整理し、相談につながるサイトを制作します。" image="/generated-reception.jpg" imageAlt="自然光が入る整体院・治療院の受付イメージ" sections={sections} relatedHref="/#pricing" relatedLabel="料金プランを見る" /></>;
}
