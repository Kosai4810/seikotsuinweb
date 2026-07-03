interface SectionLabelProps {
  number?: string;
  label: string;
  align?: "left" | "right";
  tone?: "default" | "light";
}

export function SectionLabel({
  number,
  align = "left",
  tone = "default",
}: SectionLabelProps) {
  const textColor = tone === "light" ? "text-white/70" : "text-[var(--nibi)]";
  return (
    <div
      className={`relative flex items-center gap-4 mb-5 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      {number && (
        <><span aria-hidden="true" className={`pointer-events-none absolute -top-9 left-0 font-inter text-6xl font-medium leading-none ${tone === "light" ? "text-white/[0.06]" : "text-[#aa936c]/[0.13]"}`}>{number}</span><span className={`relative font-inter text-xs tracking-widest ${textColor}`}>{number}</span></>
      )}
      <span className="w-12 h-px bg-[var(--usuzumi-line)]" />
    </div>
  );
}
