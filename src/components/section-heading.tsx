type SectionHeadingProps = {
  label?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  text,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center" : ""} animate-fade-up`}>
      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-black leading-snug text-white"
      >
        {title}
      </h2>

      {/* Divider */}
      <div
        className={`mt-5 h-1 w-16 rounded-full ${isCenter ? "mx-auto" : ""} bg-gradient-to-r from-amber-400 to-amber-500`}
      />

      {/* Description */}
      {text && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed max-w-3xl text-gray-400
            ${isCenter ? "mx-auto" : ""}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
