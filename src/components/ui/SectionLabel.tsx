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
      className={`flex items-center gap-4 mb-8 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      {number && (
        <span className={`font-inter text-xs tracking-widest ${textColor}`}>
          {number}
        </span>
      )}
      <span className="w-12 h-px bg-[var(--usuzumi-line)]" />
    </div>
  );
}
