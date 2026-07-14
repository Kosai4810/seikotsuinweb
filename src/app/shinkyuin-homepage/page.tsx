import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/common/SeoLandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "鍼灸院のホームページ制作｜不安を減らす情報設計",
  description: "鍼灸院のホームページ制作。初めての方に向けて、施術の流れ、料金、対応できる相談、予約導線、Googleマップ、基本SEOまで整理します。",
  alternates: { canonical: "/shinkyuin-homepage" },
  openGraph: { title: "鍼灸院のホームページ制作｜整骨院web", description: "鍼灸が初めての方にも安心して相談してもらえる情報設計を行います。", url: `${siteConfig.url}/shinkyuin-homepage`, images: ["/clinic-interior.jpg"] },
};

const sections = [
  { title: "鍼灸が初めての方の不安を先回りして整理", text: "鍼灸院では、施術内容そのものよりも、痛くないか、どんな服装で行くのか、どれくらい時間がかかるのか、料金はいくらかといった来院前の不安が問い合わせに影響します。初めての方が安心して相談できる流れを作ります。", items: ["初回の流れ", "服装・持ち物", "施術時間", "料金", "相談できる悩み", "予約方法"] },
  { title: "美容・自律神経・慢性不調など、強みを分かりやすく", text: "鍼灸院の強みは院によって大きく異なります。美容鍼、慢性的な不調、スポーツ、女性向けの相談など、院の得意分野を患者さんの言葉へ翻訳し、トップページや施術案内へ反映します。" },
  { title: "誇大表現を避けながら、魅力を伝える", text: "鍼灸領域は表現に注意が必要です。断定的な効果表現に頼らず、施術方針、相談の流れ、院内の雰囲気、患者さんが判断するための情報を丁寧に見せることで信頼感を高めます。" },
  { title: "スマホ・Googleマップ・問い合わせ導線まで標準対応", text: "ホームページ単体ではなく、スマートフォンで見つけて、比較して、予約・問い合わせへ進むまでの導線を整えます。開業前でも既存サイトの改善でも相談できます。" },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: "鍼灸院のホームページ制作", serviceType: "ホームページ制作", provider: { "@type": "Organization", name: siteConfig.businessName }, areaServed: "JP", url: `${siteConfig.url}/shinkyuin-homepage`, offers: { "@type": "Offer", price: "98000", priceCurrency: "JPY" } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SeoLandingPage eyebrow="SHINKYUIN WEBSITE DESIGN" title="鍼灸院のホームページ制作を、安心して相談できる導線へ。" lead="初めての方の不安を減らし、施術方針・料金・予約方法が自然に伝わるサイトを制作します。" image="/clinic-interior.jpg" imageAlt="自然光の入る落ち着いた鍼灸院・治療院の院内イメージ" sections={sections} relatedHref="/#contact-form" relatedLabel="無料HP診断を受ける" /></>;
}
