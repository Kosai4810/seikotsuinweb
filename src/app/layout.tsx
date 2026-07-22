import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ["整骨院web制作", "整骨院 ホームページ制作", "整骨院開業のしかた", "整骨院 集客の仕方", "接骨院 ホームページ制作", "鍼灸院 ホームページ制作", "整体院 ホームページ制作", "整骨院 開業準備", "整骨院 Web制作", "治療院 ホームページ制作 費用"],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/logo.webp", width: 1200, height: 1200, alt: "整骨院web" }],
  },
  twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.description, images: ["/logo.webp"] },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen pb-14 lg:pb-0">{children}</body>
    </html>
  );
}
