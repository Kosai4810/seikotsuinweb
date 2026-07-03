"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const navItems = [
  { label: "TOP", href: "/" },
  { label: "HP制作", href: "/seikotsuin-homepage" },
  { label: "開業準備", href: "/seikotsuin-opening" },
  { label: "読みもの", href: "/articles" },
  { label: "サービス", href: "/#services" },
  { label: "料金", href: "/#pricing" },
  { label: "よくある質問", href: "/#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[var(--usuzumi-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24 lg:h-28">
          {/* Logo */}
          <Link
            href="/"
            className="relative block h-20 w-20 lg:h-24 lg:w-24 shrink-0"
            aria-label="整骨院web ホーム"
          >
            <Image
              src="/logo.webp"
              alt="整骨院web"
              fill
              sizes="(min-width: 1024px) 96px, 80px"
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="メインナビゲーション">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--sumi-nezumi)] hover:text-[var(--sumi)] transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="/#contact-form"
            className="hidden lg:inline-flex items-center px-6 py-3 text-sm bg-[var(--fukai-ai)] text-white tracking-wide hover:bg-[#152d4a] transition-colors duration-300"
          >
            無料相談を申し込む
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="メニューを開く"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-px bg-[var(--sumi)] transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-px bg-[var(--sumi)] transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-px bg-[var(--sumi)] transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[var(--usuzumi-line)] transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="px-6 py-8 space-y-6" aria-label="モバイルナビゲーション">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-base text-[var(--sumi-nezumi)] hover:text-[var(--sumi)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact-form"
            className="block w-full text-center py-4 bg-[var(--fukai-ai)] text-white tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            無料相談を申し込む
          </a>
        </nav>
      </div>
    </header>
  );
}
