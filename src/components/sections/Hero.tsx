import Image from "next/image";

const included = ["HP制作", "スマホ対応", "問い合わせフォーム", "Googleマップ導線", "基本SEO", "公式LINE", "Instagram", "広告運用"];
const trustPoints = [
  "整骨院・治療院に特化",
  "Web集客をまるっと相談",
  "医療広告ガイドラインに配慮",
  "開業前・既存院どちらも対応",
] as const;
const slides = [
  ["/generated-hero.jpg", "日本人の施術者が患者の相談を聞く整骨院の様子"],
  ["/clinic-interior.jpg", "自然光の入る落ち着いた整骨院の院内"],
  ["/staff.jpg", "日本人の施術者が笑顔で迎える治療院のイメージ"],
] as const;
const phoneFeatures = ["症状別ページ", "料金表", "予約導線", "Googleマップ"] as const;

function PhonePreview({ className = "" }: { className?: string }) {
  return (
    <div className={`[container-type:inline-size] rounded-[clamp(1rem,13cqw,1.7rem)] border border-[#1d2430] bg-[#10151f] p-[clamp(2px,1.8cqw,4px)] shadow-[0_28px_80px_rgba(16,24,40,0.24)] ${className}`}>
      <div className="relative overflow-hidden rounded-[clamp(0.8rem,10cqw,1.35rem)] bg-white">
        <div className="absolute left-1/2 top-[4cqw] z-20 h-[1.8cqw] w-[18cqw] -translate-x-1/2 rounded-full bg-[#10151f]/75" />
        <div className="aspect-[9/16] overflow-hidden bg-white">
          <div className="phone-site-track">
            <div className="relative h-[76cqw] overflow-hidden bg-[#f4efe5]">
              <Image src="/generated-reception.jpg" alt="" fill sizes="220px" className="object-cover opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
              <div className="absolute inset-x-[7%] bottom-[8%]">
                <p className="text-[clamp(6px,4.3cqw,9px)] font-bold tracking-[.18em] text-[#806334]">整骨院サイト制作例</p>
                <p className="mt-1 font-serif text-[clamp(12px,7.4cqw,18px)] leading-snug text-[var(--sumi)]">初めてでも安心して相談できる整骨院へ。</p>
              </div>
            </div>
            <div className="space-y-[clamp(0.38rem,3cqw,0.75rem)] p-[7%]">
              <div className="grid grid-cols-2 gap-[4cqw]">
                {phoneFeatures.map((feature) => (
                  <div key={feature} className="border border-[#e1d7c5] bg-[#fbf8f1] px-[4cqw] py-[3.6cqw] text-[clamp(7px,4.7cqw,10px)] font-bold leading-snug text-[#594a35]">{feature}</div>
                ))}
              </div>
              <div className="phone-site-cta rounded-sm bg-[#1e3a5f] px-3 py-[6%] text-center text-[clamp(8px,5.2cqw,12px)] font-bold tracking-wide text-white">Web予約・LINE相談</div>
              <div className="grid gap-[4cqw]">
                <div className="phone-site-card border-l-2 border-[#a88750] bg-white px-[5cqw] py-[4cqw] shadow-sm"><p className="text-[clamp(7px,4.7cqw,10px)] font-bold text-[var(--sumi)]">施術メニュー</p><p className="mt-1 text-[clamp(6px,4.2cqw,9px)] leading-[1.55] text-[var(--sumi-nezumi)]">症状・料金・初回の流れを整理</p></div>
                <div className="phone-site-card border-l-2 border-[#1e3a5f] bg-white px-[5cqw] py-[4cqw] shadow-sm"><p className="text-[clamp(7px,4.7cqw,10px)] font-bold text-[var(--sumi)]">アクセス</p><p className="mt-1 text-[clamp(6px,4.2cqw,9px)] leading-[1.55] text-[var(--sumi-nezumi)]">Googleマップと電話へすぐ誘導</p></div>
              </div>
            </div>
            <div className="bg-[#f7f5f0] p-[7%]">
              <p className="text-[clamp(6px,4.3cqw,9px)] font-bold tracking-[.18em] text-[#806334]">料金プラン</p>
              <p className="mt-1 font-serif text-[clamp(16px,10cqw,24px)] leading-none text-[#806334]">98,000円〜</p>
              <div className="mt-3 space-y-2">
                <div className="h-2 w-full rounded-full bg-[#d8c8aa]" />
                <div className="h-2 w-5/6 rounded-full bg-[#d8c8aa]" />
                <div className="h-2 w-2/3 rounded-full bg-[#d8c8aa]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroMotionStory() {
  return (
    <div className="relative overflow-hidden bg-[#f4efe5]">
      <div className="relative min-h-[clamp(620px,76svh,760px)] overflow-hidden md:min-h-[clamp(590px,68svh,760px)]">
        {slides.map(([src, alt], index) => (
          <Image
            key={src}
            src={src}
            alt={index === 0 ? alt : ""}
            aria-hidden={index > 0}
            fill
            sizes="(min-width: 1024px) 820px, 92vw"
            priority={index === 0}
            className={`hero-story-frame object-cover ${index === 0 ? "object-[56%_center]" : "object-center"}`}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.84)_34%,rgba(255,255,255,0.32)_64%,rgba(255,255,255,0.06)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#fbf8f1] via-[#fbf8f1]/74 to-transparent" />
        <div className="absolute right-[clamp(1rem,3.6vw,3rem)] top-1/2 z-20 hidden w-[clamp(116px,16vw,230px)] -translate-y-[38%] rotate-[2.5deg] md:block">
          <PhonePreview />
        </div>
        <div className="relative z-10 flex min-h-[clamp(560px,72svh,700px)] items-end px-[clamp(1.05rem,4vw,3.5rem)] pb-[clamp(1.15rem,3.4vw,3.2rem)] pt-[clamp(2.4rem,6vw,5.2rem)] md:min-h-[clamp(590px,68svh,760px)] md:items-center md:pr-[clamp(12rem,26vw,24rem)]">
          <div className="hero-reveal max-w-3xl">
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-[#806334] md:text-xs">
              <span className="h-px w-8 bg-[#b99a62]" />整骨院・接骨院・鍼灸院・整体院専門
            </p>
            <p className="mt-4 inline-flex border border-[#d8c8aa] bg-white/86 px-3 py-1 text-[11px] font-bold tracking-wide text-[#6f5528] shadow-sm backdrop-blur">
              院長の「施術以外」を、Webからまるっと支えます
            </p>
            <h1 className="mt-5 font-serif text-[clamp(2rem,8.4vw,2.7rem)] leading-[1.34] tracking-[0.035em] text-[var(--sumi)] md:text-[clamp(2.55rem,4.6vw,4rem)] md:leading-[1.38]">
              <span className="hero-title-mask"><span className="hero-title-line md:whitespace-nowrap">治療院専門のWebパートナー。</span></span>
              <span className="hero-title-mask"><span className="hero-title-line hero-title-line-delay">HPから集客強化まで、</span></span>
              <span className="hero-title-mask"><span className="hero-title-line hero-title-line-delay">まるっと伴走。</span></span>
            </h1>
            <div className="mt-5 max-w-2xl border-l border-[#b99a62] bg-white/64 px-[clamp(0.9rem,2vw,1.45rem)] py-[clamp(0.78rem,1.7vw,1.25rem)] shadow-[0_18px_55px_rgba(83,63,30,0.12)] backdrop-blur-[5px]">
              <p className="text-[clamp(0.86rem,1.55vw,1.12rem)] leading-[1.75] text-[var(--sumi-nezumi)] md:leading-[1.9]">
                ホームページ制作だけで終わらせず、Googleマップ、公式LINE、Instagram、広告、アクセス改善まで。バラバラに外注するより低コストで、院の世界観もブレません。
              </p>
              <div className="mt-4 flex flex-wrap items-end gap-x-5 gap-y-3 md:mt-5">
                <span className="inline-flex items-baseline bg-[#a88750] px-3 py-1 text-xs font-medium tracking-wide text-white md:text-base">先着<strong className="mx-1 font-serif text-2xl leading-none tracking-tight md:text-4xl">3</strong>院限定</span>
                <div>
                  <p className="mb-1 text-xs tracking-wide text-[var(--nibi)]">通常 <span className="line-through decoration-[#a88750] decoration-2">128,000円（税込）〜</span></p>
                  <p className="font-serif leading-none"><strong className="text-[clamp(2.65rem,5.7vw,4.5rem)] font-medium tracking-tight text-[#806334]">98,000</strong><span className="ml-1 text-lg md:text-2xl">円（税込）〜</span></p>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href="#contact-form" className="inline-flex justify-center bg-[#a88750] px-6 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#947442]">無料で相談する</a>
                <a href="#pricing" className="inline-flex justify-center border border-[var(--sumi)] bg-white/72 px-6 py-3.5 text-sm tracking-wide text-[var(--sumi)] transition-colors hover:bg-[var(--sumi)] hover:text-white">料金を見る</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 text-[var(--sumi)] lg:pt-28">
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#f4efe5] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#eee8dc] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-8 lg:px-12 lg:py-10">
        <div className="relative overflow-hidden border border-[#d8c8aa] bg-[#fbf8f1] shadow-[0_24px_90px_rgba(83,63,30,0.10)]">
          <HeroMotionStory />
          <div className="relative z-10 px-5 py-8 md:px-[clamp(1.6rem,3.6vw,3.5rem)] md:py-[clamp(2rem,4vw,3.4rem)]">
            <div className="w-full max-w-4xl">
              <p className="hero-reveal hero-reveal-description mb-4 max-w-3xl text-sm leading-relaxed text-[var(--sumi-nezumi)]">
                開業前の情報整理、既存ホームページの乗り換え、Googleマップからの問い合わせ改善まで。院長が施術に集中できるよう、Web集客の土台をまとめて整えます。
              </p>
              <div className="hero-reveal mb-4 grid max-w-4xl grid-cols-1 gap-px bg-[#d8c8aa] sm:grid-cols-2 md:grid-cols-4">
                {trustPoints.map((point) => (
                  <div key={point} className="bg-white/88 px-3 py-2 text-[11px] font-bold text-[#594a35] backdrop-blur">
                    {point}
                  </div>
                ))}
              </div>
              <ul className="hero-reveal hero-reveal-features mb-6 grid max-w-4xl grid-cols-2 gap-px bg-[#d8c8aa] md:grid-cols-4">
                {included.map((item) => <li key={item} className="flex items-center gap-2 bg-white/90 px-3 py-2 text-[11px] text-[var(--sumi-nezumi)] backdrop-blur md:text-xs"><span className="text-[#a88750]">✓</span>{item}</li>)}
              </ul>
              <div className="hero-reveal mb-6 max-w-3xl border border-[#d8c8aa] bg-white/78 px-4 py-3 backdrop-blur">
                <p className="text-xs font-bold tracking-[0.16em] text-[#806334]">無料HP診断</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--sumi-nezumi)]">
                  既存HPがある院は、予約導線・料金表記・スマホ表示の改善点を無料で3つ診断。HPがない院は、開業・集客に必要な導線を整理します。診断結果だけの受け取りでも大丈夫です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
