export const siteConfig = {
  name: "整骨院web",
  title: "整骨院のホームページ制作・開業準備を支援｜整骨院web",
  description:
    "整骨院・接骨院専門のホームページ制作と開業準備支援。Googleマップ整備、問い合わせ導線、基本SEO設定まで98,000円からまとめてサポートします。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://seikotsuinweb.com",
  businessName: "WEBBRIO",
  businessDescription: "整骨院・接骨院向けのホームページ制作、Web集客導線の設計、開業時のWeb環境整備、公開後の運用支援",
  phone: "07076155231",
  phoneDisplay: "070-7615-5231",
  phoneHref: "tel:07076155231",
  email: "contact@seikotsuinweb.com",
  emailHref: "mailto:contact@seikotsuinweb.com",
  zoomGuide: "お問い合わせ内容を確認後、メールまたはお電話でご連絡し、Zoom相談の日程を調整いたします。",
  demos: {
    community: "/demo/community",
    sports: "/demo/sports",
    opening: "/demo/opening",
  },
} as const;
