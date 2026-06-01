import Link from "next/link";
import { Phone, Mail, Heart } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Heart size={32} className="text-teal-400" fill="currentColor" />
              <span className="text-2xl font-black text-white">
                整骨院<span className="text-teal-400">ウェブ</span>
              </span>
            </Link>
            <p className="mt-6 text-base leading-relaxed text-slate-400 max-w-sm">
              整骨院・接骨院・鍼灸院専門のホームページ制作。地域で選ばれる院になるための集客に強いサイトを低価格で制作します。
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10">
                  <Phone size={18} className="text-teal-400" />
                </div>
                <span className="font-bold">{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10">
                  <Mail size={18} className="text-teal-400" />
                </div>
                <span className="font-bold">{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
              ページ一覧
            </h3>
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-400 hover:text-teal-400 hover:translate-x-1 transition-all font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
              法的情報
            </h3>
            <nav className="grid gap-2">
              <Link
                href="/legal/tokushoho"
                className="text-slate-400 hover:text-teal-400 hover:translate-x-1 transition-all font-medium"
              >
                特定商取引法に基づく表記
              </Link>
              <Link
                href="/legal/privacy"
                className="text-slate-400 hover:text-teal-400 hover:translate-x-1 transition-all font-medium"
              >
                プライバシーポリシー
              </Link>
            </nav>

            {/* CTA in Footer */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-teal-600/20 to-teal-600/5 border border-teal-500/20">
              <p className="text-sm font-bold text-teal-400 mb-2">まずは無料相談</p>
              <p className="text-sm text-slate-400 mb-4">
                ホームページについてのご質問、お気軽にどうぞ。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500 text-center">
            © 2026 整骨院ウェブ / CraftLead. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
