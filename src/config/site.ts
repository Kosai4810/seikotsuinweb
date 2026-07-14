export const siteConfig = {
  name: "整骨院web",
  title: "整骨院・接骨院・鍼灸院・整体院のホームページ制作｜整骨院web",
  description:
    "整骨院・接骨院・鍼灸院・整体院専門。ホームページ制作、Googleマップ、LINE、SNS、広告導線まで必要なWeb環境を98,000円から。無料HP診断にも対応します。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://seikotsuinweb.com",
  businessName: "WEBBRIO",
  businessDescription: "整骨院・接骨院・鍼灸院・整体院向けのホームページ制作、Web集客導線の設計、開業時のWeb環境整備、公開後の運用支援",
  phone: "07076155231",
  phoneDisplay: "070-7615-5231",
  phoneHref: "tel:07076155231",
  email: "contact@seikotsuinweb.com",
  emailHref: "mailto:contact@seikotsuinweb.com",
  zoomGuide: "お問い合わせ内容を確認後、メールまたはお電話でご連絡し、Zoom相談の日程を調整いたします。",
} as const;
