import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhySpecialized } from "@/components/sections/WhySpecialized";
import { Works } from "@/components/sections/Works";
import { Flow } from "@/components/sections/Flow";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Services } from "@/components/sections/Services";
import { MobileCTA } from "@/components/common/MobileCTA";
import { ValueComparison } from "@/components/sections/ValueComparison";
import { siteConfig } from "@/config/site";
import { PageGuide } from "@/components/common/PageGuide";
import { EngagementLayer } from "@/components/common/EngagementLayer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, url: siteConfig.url, name: siteConfig.name, inLanguage: "ja" },
      { "@type": "Service", "@id": `${siteConfig.url}/#service`, name: "整骨院・接骨院・鍼灸院・整体院専門のホームページ制作・開業Web支援", serviceType: "ホームページ制作・開業Web支援", areaServed: "JP", offers: { "@type": "Offer", priceCurrency: "JPY", price: "98000", description: "先着3院限定モニター制作プラン。条件・追加費用は料金欄をご確認ください。" } },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main>
        <Hero />
        <PageGuide />
        <ValueComparison />
        <Works />
        <Pricing />
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
