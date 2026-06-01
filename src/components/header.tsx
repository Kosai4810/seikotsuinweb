"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ArrowRight, Heart } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site-data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Heart size={28} className="text-teal-600" fill="currentColor" />
          <span className="text-xl sm:text-2xl font-black text-slate-800">
            整骨院<span className="text-teal-600">ウェブ</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-bold text-slate-600 rounded-full hover:text-teal-600 hover:bg-teal-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-600 hover:text-teal-600 transition-colors"
          >
            <Phone size={18} className="text-teal-600" />
            <span>{siteConfig.phone}</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
          >
            無料相談
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold rounded-full shadow-lg shadow-amber-500/25"
          >
            相談
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="メニュー"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-3 text-base font-bold text-slate-700 rounded-xl hover:bg-teal-50 hover:text-teal-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-bold text-teal-600 bg-teal-50 rounded-xl"
              >
                <Phone size={20} />
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
