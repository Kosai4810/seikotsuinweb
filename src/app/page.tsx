import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Hero, MobileHeroVisuals } from "@/components/sections/Hero";
import { WhySpecialized } from "@/components/sections/WhySpecialized";
import { Flow } from "@/components/sections/Flow";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { MobileCTA } from "@/components/common/MobileCTA";
import { ValueComparison } from "@/components/sections/ValueComparison";
import { siteConfig } from "@/config/site";
import { PageGuide } from "@/components/common/PageGuide";
import { EngagementLayer } from "@/components/common/EngagementLayer";

export default function Home() {
  const faqItems = [
    ["無料HP診断だけ受けても大丈夫ですか？", "はい、大丈夫です。診断結果だけ受け取りたい段階でも問題ありません。今のホームページや開業準備で優先して直すべき点を整理します。"],
    ["医療広告ガイドラインに配慮した文章にできますか？", "はい。効果を断定する表現や誇大に見えやすい表現を避けながら、院の方針、対応できる相談、来院までの流れが伝わる文章へ整えます。"],
    ["98,000円のスターター制作には何が含まれますか？", "5ページ程度、スマートフォン対応、問い合わせフォーム、メール・電話・Googleマップ導線、基本SEO設定、修正2回、公開後1か月サポートを含みます。"],
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, url: siteConfig.url, name: siteConfig.name, inLanguage: "ja" },
      { "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: siteConfig.businessName, url: siteConfig.url, email: siteConfig.email, telephone: siteConfig.phoneDisplay, brand: { "@type": "Brand", name: siteConfig.name }, description: siteConfig.businessDescription },
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/#service`,
        name: "整骨院・接骨院・鍼灸院・整体院専門のホームページ制作・開業Web支援",
        serviceType: "ホームページ制作・開業Web支援",
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: "JP",
        audience: { "@type": "Audience", audienceType: "整骨院・接骨院・鍼灸院・整体院の院長・開業予定者" },
        offers: {
          "@type": "OfferCatalog",
          name: "整骨院web 料金プラン",
          itemListElement: [
            { "@type": "Offer", name: "スターター制作プラン", priceCurrency: "JPY", price: "98000", description: "先着3院限定スターター制作プラン。条件・追加費用は料金欄をご確認ください。" },
            { "@type": "Offer", name: "集客スタートプラン", priceCurrency: "JPY", price: "198000", description: "ホームページ制作にGoogleビジネスプロフィール初期整備、SEO対策、公開後2か月サポートを加えたプラン。" },
            { "@type": "Offer", name: "開業フルサポートプラン", priceCurrency: "JPY", price: "298000", description: "開業前のWebサイト、SNS、名刺・チラシ、集客導線設計まで支援するプラン。" },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        itemListElement: [{ "@type": "ListItem", position: 1, name: "整骨院web", item: siteConfig.url }],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main>
        <Hero />
        <PageGuide />
        <MobileHeroVisuals />
        <ValueComparison />
        <Pricing />
        <CaseStudies />
        <Services />
        <WhySpecialized />
        <Flow />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
      <EngagementLayer />
    </>
  );
}
