interface ImagePlaceholderProps {
  description: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function ImagePlaceholder({
  description,
  aspectRatio = "video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative bg-[var(--usuzumi)] ${aspectRatioClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={description}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diagonal-lines"
              patternUnits="userSpaceOnUse"
              width="8"
              height="8"
            >
              <path
                d="M0,8 L8,0"
                stroke="var(--usuzumi-line)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      {/* Description */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <p className="text-center text-sm text-[var(--nibi)] leading-relaxed max-w-xs">
          {description}
        </p>
      </div>

      {/* Frame decoration */}
      <div className="absolute inset-4 border border-[var(--usuzumi-line)] pointer-events-none" />
    </div>
  );
}
