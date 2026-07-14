import Link from "next/link";

const footerLinks = [
  { title: "サービス", links: [{ label: "整骨院のホームページ制作", href: "/seikotsuin-homepage" }, { label: "接骨院のホームページ制作", href: "/sekotsuin-homepage" }, { label: "鍼灸院のホームページ制作", href: "/shinkyuin-homepage" }, { label: "整体院のホームページ制作", href: "/seitai-homepage" }, { label: "整骨院の開業準備", href: "/seikotsuin-opening" }] },
  { title: "料金・相談", links: [{ label: "治療院ホームページ制作の費用", href: "/seikotsuin-homepage-cost" }, { label: "料金プラン", href: "/#pricing" }, { label: "無料HP診断", href: "/#contact-form" }, { label: "制作の流れ", href: "/#flow" }] },
  { title: "読みもの・サポート", links: [{ label: "開業・Webの読みもの", href: "/articles" }, { label: "よくある質問", href: "/#faq" }, { label: "お問い合わせ", href: "/#contact" }] },
  { title: "運営情報", links: [{ label: "運営者情報", href: "/company" }, { label: "プライバシーポリシー", href: "/privacy" }] },
];

export function Footer() {
  return <footer className="bg-[var(--sumi)] text-white"><div className="max-w-7xl mx-auto px-6 lg:px-12 py-20"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"><div><Link href="/" className="text-xl tracking-wider font-medium block mb-6">整骨院web</Link><p className="text-sm text-white/60 leading-relaxed">整骨院・接骨院・鍼灸院・整体院の<br />開業と集客に必要なWeb環境をまとめて支援</p></div>{footerLinks.map((group) => <div key={group.title}><h2 className="text-sm font-medium tracking-wide mb-6">{group.title}</h2><ul className="space-y-4">{group.links.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</Link></li>)}</ul></div>)}</div><div className="mt-16 pt-8 border-t border-white/10"><p className="text-xs text-white/40 text-center">© {new Date().getFullYear()} 整骨院web. All rights reserved.</p></div></div></footer>;
}
