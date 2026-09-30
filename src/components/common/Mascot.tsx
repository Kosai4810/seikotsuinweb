import Image from "next/image";

/**
 * まるっと — 整骨院web のマスコット
 *
 * ▼ 本物イラストへの差し替え方法
 *   public/mascot/ に透過PNG（例: marutto-wave.png）を置き、
 *   <Mascot src="/mascot/marutto-wave.png" /> のように src を渡すだけ。
 *   src 未指定のときは下のSVG（v1たたき台）にフォールバックします。
 */

type MascotProps = {
  /** 本物イラスト画像のパス（例: "/mascot/marutto-wave.png"）。指定時はSVGの代わりに画像を表示 */
  src?: string;
  /** 描画サイズ(px)。正方形 */
  size?: number;
  /** ふわふわ浮遊アニメを付ける */
  float?: boolean;
  /** 手を振るポーズにする（SVGフォールバック時のみ有効） */
  wave?: boolean;
  className?: string;
  /** アクセシビリティ用ラベル。装飾なら "" を渡す */
  label?: string;
  /** 画像読み込みを優先（Heroなどファーストビュー用） */
  priority?: boolean;
};

export function Mascot({
  src,
  size = 160,
  float = true,
  wave = true,
  className = "",
  label = "整骨院webのマスコット まるっと",
  priority = false,
}: MascotProps) {
  if (src) {
    return (
      <span
        className={`inline-block ${float ? "wm-floaty" : ""} ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={label}
          width={size}
          height={size}
          priority={priority}
          className="h-full w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-block ${float ? "wm-floaty" : ""} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 240 240"
        width={size}
        height={size}
        role={label ? "img" : "presentation"}
        aria-label={label || undefined}
        aria-hidden={label ? undefined : true}
      >
        {/* 接地影 */}
        <ellipse cx="120" cy="218" rx="60" ry="10" fill="#6B543A" opacity="0.13" />

        {/* 足 */}
        <g stroke="#5B4630" strokeWidth="4.5" strokeLinejoin="round" fill="#EFC38C">
          <ellipse cx="98" cy="200" rx="17" ry="13" />
          <ellipse cx="146" cy="200" rx="17" ry="13" />
          <ellipse cx="98" cy="202" rx="8" ry="5" fill="#E0AE72" stroke="none" />
          <ellipse cx="146" cy="202" rx="8" ry="5" fill="#E0AE72" stroke="none" />
        </g>

        {/* 左手（添える） */}
        <g stroke="#5B4630" strokeWidth="4.5" strokeLinejoin="round">
          <path d="M52 176c-12-2-20-12-18-24 2-9 12-13 20-9 6 3 9 9 9 16" fill="#EFC38C" />
        </g>

        {/* 耳（外→内） */}
        <g stroke="#5B4630" strokeWidth="4.5" strokeLinejoin="round">
          <path d="M62 78C48 58 46 40 55 34c11-7 27 4 33 27 2 8 1 15-2 21Z" fill="#EDC084" />
          <path d="M178 78c14-20 16-38 7-44-11-7-27 4-33 27-2 8-1 15 2 21Z" fill="#EDC084" />
        </g>
        <path d="M66 68C57 54 55 42 61 40c7-3 17 6 21 21Z" fill="#F2B3A6" opacity="0.9" />
        <path d="M174 68c9-14 11-26 5-28-7-3-17 6-21 21Z" fill="#F2B3A6" opacity="0.9" />

        {/* 体（ふっくら・やや卵形／毛のゆらぎ） */}
        <path
          d="M120 40
             c34 0 55 15 66 39
             c6 13 8 27 6 41
             c-3 26-22 47-49 53
             c-15 3-31 3-46 0
             c-27-6-46-27-49-53
             c-2-14 0-28 6-41
             C65 55 86 40 120 40 Z"
          fill="#FBE7C6"
          stroke="#5B4630"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {/* 陰影（下側）と ハイライト（左上）で立体に */}
        <path d="M58 132c8 40 34 60 62 60s54-20 62-60c-10 34-34 52-62 52s-52-18-62-52Z" fill="#EBCF9E" opacity="0.55" />
        <ellipse cx="92" cy="82" rx="30" ry="22" fill="#FFFFFF" opacity="0.35" />

        {/* おでこの差し毛（キャラ付け） */}
        <path d="M120 46c-9 6-15 15-16 27 10-5 22-5 32 0-1-12-7-21-16-27Z" fill="#F4D6A4" />

        {/* お腹の明るい面 */}
        <path d="M120 104c26 0 44 17 44 41 0 22-19 39-44 39s-44-17-44-39c0-24 18-41 44-41Z" fill="#FFF8EE" />

        {/* ほっぺ（2層でやわらかく） */}
        <g>
          <circle cx="76" cy="120" r="13" fill="#F49C93" opacity="0.35" />
          <circle cx="76" cy="120" r="8.5" fill="#F28C82" opacity="0.55" />
          <circle cx="164" cy="120" r="13" fill="#F49C93" opacity="0.35" />
          <circle cx="164" cy="120" r="8.5" fill="#F28C82" opacity="0.55" />
        </g>

        {/* 眉（ちょこん） */}
        <path d="M84 88c5-3 11-3 15 0" fill="none" stroke="#5B4630" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
        <path d="M141 88c4-3 10-3 15 0" fill="none" stroke="#5B4630" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />

        {/* 目（まばたき＋ハイライト2つ） */}
        <g>
          <g className="wm-eye" style={{ transformOrigin: "97px 104px" }}>
            <ellipse cx="97" cy="104" rx="8" ry="10.5" fill="#43301F" />
            <circle cx="100" cy="100" r="3" fill="#FFFDF9" />
            <circle cx="94.5" cy="107" r="1.6" fill="#FFFDF9" opacity="0.8" />
          </g>
          <g className="wm-eye wm-eye-2" style={{ transformOrigin: "143px 104px" }}>
            <ellipse cx="143" cy="104" rx="8" ry="10.5" fill="#43301F" />
            <circle cx="146" cy="100" r="3" fill="#FFFDF9" />
            <circle cx="140.5" cy="107" r="1.6" fill="#FFFDF9" opacity="0.8" />
          </g>
        </g>

        {/* 鼻と口（にっこり／舌のニュアンス） */}
        <ellipse cx="120" cy="120" rx="5" ry="3.6" fill="#5B4630" />
        <path d="M120 124v5" stroke="#5B4630" strokeWidth="3" strokeLinecap="round" />
        <path d="M108 129c4 6 20 6 24 0" fill="none" stroke="#5B4630" strokeWidth="4" strokeLinecap="round" />
        <path d="M116 133c2 3 6 3 8 0Z" fill="#F28C82" />

        {/* タオル（首もと・折り目と垂れ） */}
        <g stroke="#5B4630" strokeWidth="4.5" strokeLinejoin="round">
          <path d="M80 150c14 10 66 10 80 0l6 14c-24 14-72 14-92 0Z" fill="#F5A623" />
          <path d="M150 158l16 6-4 20-14-6Z" fill="#EF9C12" />
        </g>
        <path d="M92 156c14 6 42 6 56 0" fill="none" stroke="#E08E12" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

        {/* 右手（振る） */}
        <g className={wave ? "wm-bob" : ""} style={{ transformOrigin: "192px 150px" }}>
          <g stroke="#5B4630" strokeWidth="4.5" strokeLinejoin="round">
            <path d="M186 168c14 0 24-10 22-23-1-9-10-15-19-12-7 2-11 8-11 15" fill="#EFC38C" />
            <ellipse cx="192" cy="140" rx="13" ry="15" fill="#EFC38C" />
          </g>
          <ellipse cx="192" cy="142" rx="6" ry="4" fill="#E0AE72" />
        </g>

        {/* きらめき */}
        <g fill="#FFD98A">
          <path d="M54 108l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" />
          <path d="M182 96l1.5 4.5 4.5 1.5-4.5 1.5L182 109l-1.5-4.5-4.5-1.5 4.5-1.5Z" />
        </g>
      </svg>
    </span>
  );
}
