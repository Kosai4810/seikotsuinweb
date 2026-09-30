import { siteConfig } from "@/config/site";

type CTAGroupProps = {
  dark?: boolean;
  compact?: boolean;
};

export function CTAGroup({ dark = false, compact = false }: CTAGroupProps) {
  const base = compact ? "px-5 py-3 text-xs" : "px-6 py-4 text-sm";
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="#contact-form"
        className={`${base} wm-pulse inline-flex items-center justify-center rounded-full bg-[#C67C08] text-white font-extrabold tracking-wide hover:bg-[#a96806] transition-colors`}
      >
        無料HP診断を受ける
      </a>
      <a href={siteConfig.emailHref} className={`${base} inline-flex items-center justify-center rounded-full border-2 font-bold tracking-wide transition-colors ${dark ? "border-white/40 text-white hover:bg-white hover:text-brown" : "border-brown text-brown hover:bg-brown hover:text-white"}`}>メールで相談する</a>
      <a
        href={siteConfig.phoneHref}
        className={`${base} inline-flex items-center justify-center rounded-full border-2 font-bold tracking-wide transition-colors ${
          dark
            ? "border-white/40 text-white hover:bg-white hover:text-brown"
            : "border-line-warm text-brown hover:border-brown"
        }`}
      >
        電話で相談
      </a>
    </div>
  );
}
