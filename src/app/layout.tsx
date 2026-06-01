import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { faqs, plans, siteConfig } from "@/lib/site-data";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "整骨院ウェブ | 整骨院・接骨院専門の格安ホームページ制作",
    template: "%s | 整骨院ウェブ",
  },
  description:
    "整骨院・接骨院・鍼灸院専門の格安ホームページ制作。地域で選ばれる院になるための集客に強いホームページを低価格で制作します。",
  keywords: [
    "整骨院 ホームページ制作",
    "接骨院 ホームページ制作",
    "鍼灸院 ホームページ制作",
    "整体院 ホームページ制作",
    "整骨院 集客",
    "整骨院 Web制作",
    "整骨院 格安 ホームページ",
    "柔道整復師 ホームページ",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "整骨院ウェブ | 整骨院・接骨院専門の格安ホームページ制作",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "ja_JP",
    images: ["/images/seikotsuin-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "整骨院ウェブ | 整骨院・接骨院専門の格安ホームページ制作",
    description: siteConfig.description,
    images: ["/images/seikotsuin-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
      },
      {
        "@type": "LocalBusiness",
        name: siteConfig.name,
        alternateName: siteConfig.company,
        url: siteConfig.url,
        image: `${siteConfig.url}/images/seikotsuin-hero.jpg`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: {
          "@type": "Country",
          name: "JP",
        },
        description: siteConfig.description,
        priceRange: "¥39,800〜",
      },
      {
        "@type": "Service",
        name: "整骨院専門ホームページ制作",
        provider: {
          "@type": "LocalBusiness",
          name: siteConfig.name,
        },
        description:
          "整骨院、接骨院、鍼灸院、整体院向けのホームページ制作・集客導線設計サービス。",
        areaServed: {
          "@type": "Country",
          name: "JP",
        },
        offers: plans.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          priceCurrency: "JPY",
          description: plan.summary,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
