import { Mascot } from "@/components/common/Mascot";

const trustPills = [
  "治療院に特化",
  "Web集客まるっと相談",
  "医療広告ガイドライン配慮",
  "開業前も既存院もOK",
] as const;

const included = [
  "HP制作",
  "スマホ対応",
  "問い合わせフォーム",
  "Googleマップ導線",
  "基本SEO",
  "公式LINE",
  "Instagram",
  "広告運用",
] as const;

/** マスコットの周りをふわふわ漂うサービスチップ */
const floatChips = [
  { label: "症状別ページ", cls: "left-[-6%] top-[14%]", depth: 26, delay: "wm-floaty" },
  { label: "料金表", cls: "right-[-4%] top-[6%]", depth: 18, delay: "wm-floaty-slow" },
  { label: "予約導線", cls: "right-[-8%] bottom-[24%]", depth: 30, delay: "wm-floaty wm-floaty-delay" },
  { label: "Googleマップ", cls: "left-[-10%] bottom-[16%]", depth: 22, delay: "wm-floaty-slow wm-floaty-delay" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-24 pb-16 text-ink-warm lg:pt-28">
      {/* 背景：ふわふわ漂う雲 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="wm-drift absolute left-0 top-[16%] h-40 w-64 rounded-full bg-orange-pale/50 blur-2xl" />
        <div className="wm-drift-2 absolute left-0 top-[58%] h-52 w-80 rounded-full bg-[#FFE9C4]/50 blur-2xl" />
        <div className="absolute right-[-4rem] top-[-3rem] h-72 w-72 rounded-full bg-[#FFEFD2]/70 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-12">
        {/* 左：コピー */}
        <div className="wm-reveal">
          <span className="wm-pill wm-bob">
            <span className="text-orange-deep">◍</span>
            整骨院・接骨院・鍼灸院・整体院 専門
          </span>

          <h1 className="mt-6 text-[clamp(2.1rem,7vw,3.6rem)] font-extrabold leading-[1.3] tracking-tight text-ink-warm">
            院長の「施術以外」は、
            <br />
            <span className="wm-marker">まるっと</span> おまかせ。
          </h1>

          <p className="mt-6 max-w-xl text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.9] text-brown">
            ホームページ制作だけで終わらせず、Googleマップ・公式LINE・Instagram・広告・アクセス改善まで。
            バラバラに外注するより低コストで、院の世界観もブレません。
          </p>

          {/* 価格 */}
          <div className="mt-7 inline-flex flex-wrap items-end gap-x-4 gap-y-2 rounded-3xl border-2 border-line-warm bg-paper px-6 py-4 shadow-[0_8px_0_rgba(107,84,58,0.08)]">
            <span className="wm-pill !border-orange !bg-orange-pale !text-orange-deep">先着3院 限定</span>
            <div>
              <p className="text-xs text-brown-sub">
                通常 <span className="line-through decoration-orange decoration-2">128,000円〜</span>
              </p>
              <p className="leading-none">
                <strong className="text-[clamp(2.6rem,6vw,4rem)] font-extrabold tracking-tight text-orange-deep">98,000</strong>
                <span className="ml-1 text-lg font-bold text-brown">円（税込）〜</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#contact-form"
              className="wm-pulse inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-extrabold text-white transition-transform hover:scale-[1.03]"
            >
              無料で相談する →
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full border-2 border-brown bg-paper px-7 py-3.5 text-sm font-bold text-brown transition-colors hover:bg-brown hover:text-white"
            >
              料金を見る
            </a>
          </div>

          {/* 信頼pill */}
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {trustPills.map((t, i) => (
              <li key={t} className={`wm-pill ${i % 2 ? "wm-floaty-slow" : "wm-floaty"}`}>
                <span className="text-teal">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* 右：マスコット＋漂うチップ（カーソル追従） */}
        <div className="wm-reveal relative mx-auto aspect-square w-full max-w-[440px]" data-parallax-scope>
          {/* 後光 */}
          <div className="absolute inset-[8%] rounded-full bg-gradient-to-b from-[#FFEFD2] to-orange-pale/60" />
          <div
            className="absolute inset-0 flex items-center justify-center"
            data-parallax="18"
          >
            <Mascot size={340} label="整骨院webのマスコット まるっと" />
          </div>

          {floatChips.map((c) => (
            <span
              key={c.label}
              data-parallax={c.depth}
              className={`wm-pill absolute ${c.cls} ${c.delay} !text-xs shadow-[0_6px_0_rgba(107,84,58,0.10)]`}
            >
              {c.label}
            </span>
          ))}
        </div>
      </div>

      {/* 下部：やることを無限マーキーで流す */}
      <div className="relative mt-12 overflow-hidden border-y-2 border-line-warm bg-paper py-4">
        <div className="wm-marquee-track gap-3">
          {[...included, ...included].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cream px-5 py-2 text-sm font-bold text-brown"
            >
              <span className="text-orange-deep">●</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
