import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/common/SeoLandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "治療院ホームページ制作の費用｜98,000円からの内容",
  description: "整骨院・接骨院・鍼灸院・整体院のホームページ制作費用を解説。98,000円のスターター制作に含まれる内容、追加費用、比較ポイントを整理します。",
  alternates: { canonical: "/seikotsuin-homepage-cost" },
  openGraph: { title: "治療院ホームページ制作の費用｜整骨院web", description: "ホームページ制作費用の見方と、98,000円から始められる内容を整理します。", url: `${siteConfig.url}/seikotsuin-homepage-cost`, images: ["/generated-detail.jpg"] },
};

const sections = [
  { title: "制作費用は、何が含まれるかで大きく変わります", text: "ホームページ制作は、ページ数だけでなく、ヒアリング、文章整理、写真、問い合わせフォーム、Googleマップ導線、公開後サポートまで含むかで金額が変わります。総額だけでなく、院長側の準備負担も含めて比較することが大切です。", items: ["ページ数", "文章作成の範囲", "写真撮影", "問い合わせフォーム", "Googleマップ導線", "公開後サポート"] },
  { title: "98,000円のスターター制作で含める内容", text: "整骨院webのスターター制作プランでは、5ページ程度、スマートフォン対応、問い合わせフォーム、メール・電話・Googleマップへの導線、基本SEO設定、修正2回、公開後1か月サポートを含めています。治療院に必要な基本構成を標準化することで、低価格でも必要な導線を外さずに制作します。" },
  { title: "追加費用が発生しやすいもの", text: "撮影、ドメイン・サーバー、有料予約システム、ページ追加、ロゴ制作、大幅な文章追加などは、内容に応じて別途見積りになります。最初の相談時に、必要なものと後から追加できるものを分けて整理します。", items: ["写真撮影", "ドメイン・サーバー", "有料予約システム", "追加ページ", "ロゴ・チラシ", "広告運用費"] },
  { title: "安くするために、必要な導線は削りません", text: "低価格でも問い合わせフォーム、電話・メール導線、Googleマップ導線、基本SEOは重要です。見た目だけ整えて問い合わせまで進めないサイトにならないよう、最初から患者さんの行動を前提に設計します。" },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: "治療院ホームページ制作の費用相談", serviceType: "ホームページ制作", provider: { "@type": "Organization", name: siteConfig.businessName }, areaServed: "JP", url: `${siteConfig.url}/seikotsuin-homepage-cost`, offers: { "@type": "Offer", price: "98000", priceCurrency: "JPY" } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SeoLandingPage eyebrow="WEBSITE COST" title="治療院ホームページ制作の費用を、含まれる内容から整理。" lead="98,000円のスターター制作で何ができるか、追加費用が出やすいものは何かを分かりやすく整理します。" image="/generated-detail.jpg" imageAlt="整骨院の施術スペースでWeb制作の準備をするイメージ" sections={sections} relatedHref="/#pricing" relatedLabel="料金プランを見る" /></>;
}
