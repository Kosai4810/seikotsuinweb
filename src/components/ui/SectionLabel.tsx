interface SectionLabelProps {
  number?: string;
  label: string;
  align?: "left" | "right";
  tone?: "default" | "light";
}

export function SectionLabel({
  number,
  label,
  align = "left",
  tone = "default",
}: SectionLabelProps) {
  const textColor = tone === "light" ? "text-white/70" : "text-[var(--nibi)]";
  const lineColor = tone === "light" ? "bg-white/25" : "bg-[var(--usuzumi-line)]";
  const ghostColor = tone === "light" ? "text-white/[0.06]" : "text-[#aa936c]/[0.13]";
  return (
    <div
      className={`relative flex items-center gap-4 mb-5 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      {number && (
        <span
          aria-hidden="true"
          data-section-number={number}
          className={`section-label-ghost pointer-events-none absolute -top-9 font-inter text-6xl font-medium leading-none ${ghostColor} ${
            align === "right" ? "right-0" : "left-0"
          }`}
        />
      )}
      <div className="relative z-10 flex items-center gap-3">
        {number && (
          <span className={`font-inter text-xs font-bold tracking-widest ${textColor}`}>
            {number}
          </span>
        )}
        <span className={`h-px w-12 ${lineColor}`} />
        <span className={`text-xs font-bold tracking-[0.22em] ${textColor}`}>
          {label}
        </span>
      </div>
    </div>
  );
}
