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
        className={`${base} inline-flex items-center justify-center bg-[var(--fukai-ai)] text-white font-medium tracking-wide hover:bg-[#152d4a] transition-colors`}
      >
        無料HP診断を受ける
      </a>
      <a href={siteConfig.emailHref} className={`${base} inline-flex items-center justify-center border tracking-wide transition-colors ${dark ? "border-white/40 text-white hover:bg-white hover:text-[var(--sumi)]" : "border-[var(--sumi)] text-[var(--sumi)] hover:bg-[var(--sumi)] hover:text-white"}`}>メールで相談する</a>
      <a
        href={siteConfig.phoneHref}
        className={`${base} inline-flex items-center justify-center border tracking-wide transition-colors ${
          dark
            ? "border-white/40 text-white hover:bg-white hover:text-[var(--sumi)]"
            : "border-[var(--usuzumi-line)] text-[var(--sumi)] hover:border-[var(--sumi)]"
        }`}
      >
        電話で相談
      </a>
    </div>
  );
}
