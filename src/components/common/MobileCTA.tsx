import { siteConfig } from "@/config/site";

export function MobileCTA() {
  return (
    <nav
      aria-label="スマートフォン用お問い合わ"
      className="fixed bottom-0 inset-x-0 z-50 grid grid-cols-3 lg:hidden bg-white border-t border-[var(--usuzumi-line)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <a href="#contact-form" className="py-4 text-center text-xs font-medium bg-[var(--fukai-ai)] text-white">無料診断</a>
      <a href={siteConfig.phoneHref} className="py-4 text-center text-xs text-[var(--sumi)] border-r border-[var(--usuzumi-line)]">
        電話
      </a>
      <a href={siteConfig.emailHref} className="py-4 text-center text-xs text-[var(--sumi)]">メール</a>
    </nav>
  );
}
