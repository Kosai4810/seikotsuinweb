import { siteConfig } from "@/config/site";

export function MobileCTA() {
  return (
    <nav
      aria-label="スマートフォン用お問い合わ"
      className="fixed bottom-0 inset-x-0 z-50 grid grid-cols-3 lg:hidden bg-paper border-t-2 border-line-warm shadow-[0_-4px_20px_rgba(107,84,58,0.10)]"
    >
      <a href="#contact-form" className="py-4 text-center text-xs font-extrabold bg-[#C67C08] text-white">無料診断</a>
      <a href={siteConfig.phoneHref} className="py-4 text-center text-xs font-bold text-brown border-r border-line-warm">
        電話
      </a>
      <a href={siteConfig.emailHref} className="py-4 text-center text-xs font-bold text-brown">メール</a>
    </nav>
  );
}
