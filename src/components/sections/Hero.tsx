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

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 text-[var(--sumi)] lg:pt-28">
      <div className="absolute inset-y-0 right-0 hidden w-[48%] bg-[#f4efe5] lg:block" />
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#f4efe5] blur-3xl" />

      <div className="relative mx-auto grid min-h-[min(820px,calc(100svh-6rem))] max-w-7xl items-center gap-10 px-6 py-10 md:py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-20">
        <div className="w-full max-w-3xl">
          <p className="hero-reveal hero-reveal-label flex items-center gap-3 text-[11px] tracking-[0.2em] text-[#806334] md:text-xs">
            <span className="h-px w-8 bg-[#b99a62]" />整骨院・接骨院・鍼灸院・整体院専門のWeb伴走
          </p>
          <p className="hero-reveal hero-reveal-label mt-4 inline-flex border border-[#d8c8aa] bg-[#fbf8f1] px-3 py-1 text-[11px] font-bold tracking-wide text-[#6f5528]">
            院長の「施術以外」を、Webからまるっと支えます
          </p>
          <h1 className="mt-5 font-serif text-3xl leading-[1.55] tracking-[0.06em] text-[var(--sumi)] md:text-5xl lg:text-[3.4rem]">
            <span className="hero-title-mask"><span className="hero-title-line">治療院「専門」パートナー。</span></span>
            <span className="hero-title-mask"><span className="hero-title-line hero-title-line-delay">HPも、MEOも、LINEも、<br className="hidden sm:block" />まるっと伴走します。</span></span>
          </h1>

          <div className="hero-reveal hero-reveal-copy mt-6 border-l border-[#b99a62] pl-5 md:pl-7">
            <p className="text-base leading-8 text-[var(--sumi-nezumi)] md:text-lg">
              ホームページ制作だけで終わらせず、Googleマップ、公式LINE、Instagram、広告、アクセス改善まで。バラバラに外注するより低コストで、院の世界観もブレません。
            </p>
            <div className="mt-5 flex flex-wrap items-end gap-x-5 gap-y-3">
              <span className="inline-flex items-baseline bg-[#a88750] px-3 py-1 text-sm font-medium tracking-wide text-white md:text-base">先着<strong className="mx-1 font-serif text-3xl leading-none tracking-tight md:text-4xl">3</strong>院限定</span>
              <div><p className="mb-1 text-xs tracking-wide text-[var(--nibi)]">通常 <span className="line-through decoration-[#a88750] decoration-2">128,000円（税込）〜</span></p><p className="font-serif leading-none"><strong className="text-5xl font-medium tracking-tight text-[#806334] md:text-7xl">98,000</strong><span className="ml-1 text-xl md:text-2xl">円（税込）〜</span></p></div>
            </div>
          </div>

          <p className="hero-reveal hero-reveal-description mb-4 mt-5 max-w-3xl text-sm leading-relaxed text-[var(--sumi-nezumi)]">
            開業前の情報整理、既存ホームページの乗り換え、Googleマップからの問い合わせ改善まで。院長が施術に集中できるよう、Web集客の土台をまとめて整えます。
          </p>
          <div className="hero-reveal mb-4 grid max-w-4xl grid-cols-1 gap-px bg-[#d8c8aa] sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point} className="bg-[#fbf8f1] px-3 py-2 text-[11px] font-bold text-[#594a35]">
                {point}
              </div>
            ))}
          </div>
          <ul className="hero-reveal hero-reveal-features mb-6 grid max-w-4xl grid-cols-2 gap-px bg-[#d8c8aa] md:grid-cols-4">
            {included.map((item) => <li key={item} className="flex items-center gap-2 bg-white px-3 py-2 text-[11px] text-[var(--sumi-nezumi)] md:text-xs"><span className="text-[#a88750]">✓</span>{item}</li>)}
          </ul>
          <div className="hero-reveal mb-6 max-w-3xl border border-[#d8c8aa] bg-[#fbf8f1] px-4 py-3">
            <p className="text-xs font-bold tracking-[0.16em] text-[#806334]">無料HP診断</p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--sumi-nezumi)]">
              既存HPがある院は、予約導線・料金表記・スマホ表示の改善点を無料で3つ診断。HPがない院は、開業・集客に必要な導線を整理します。診断結果だけの受け取りでも大丈夫です。
            </p>
          </div>
          <div className="hero-reveal hero-reveal-cta flex flex-col sm:flex-row gap-3">
            <a href="#contact-form" className="inline-flex justify-center bg-[#a88750] text-white px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-[#947442] transition-colors">無料で相談する</a>
            <a href="#pricing" className="inline-flex justify-center border border-[var(--sumi)] px-6 py-3.5 text-sm tracking-wide text-[var(--sumi)] transition-colors hover:bg-[var(--sumi)] hover:text-white">料金を見る</a>
          </div>
        </div>
        <div className="hero-reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-[#d8c8aa] bg-[#eee8dc] shadow-[0_24px_80px_rgba(83,63,30,0.12)] lg:aspect-[4/4.8]">
            {slides.map(([src, alt], index) => (
              <Image key={src} src={src} alt={index === 0 ? alt : ""} aria-hidden={index > 0} fill priority={index === 0} sizes="(min-width: 1024px) 520px, 100vw" className={`hero-cinema-frame object-cover ${index === 0 ? "object-[62%_center]" : "object-center"}`} />
            ))}
            <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-white via-white/78 to-transparent p-6 pb-24">
              <p className="text-xs font-bold tracking-[0.16em] text-[#806334]">治療院専門のWeb伴走</p>
              <p className="mt-2 font-serif text-xl leading-relaxed text-[var(--sumi)]">施術に集中できるよう、Webの土台をひとつに。</p>
            </div>
          </div>
          <div className="absolute -bottom-5 right-4 w-[46%] min-w-40 max-w-56 rotate-[2.5deg] rounded-[1.7rem] border border-[#1d2430] bg-[#10151f] p-1 shadow-[0_28px_80px_rgba(16,24,40,0.24)] md:-bottom-8 md:right-8 lg:-right-4 lg:w-[44%]">
            <div className="relative overflow-hidden rounded-[1.35rem] bg-white">
              <div className="absolute left-1/2 top-2 z-20 h-1 w-10 -translate-x-1/2 rounded-full bg-[#10151f]/75" />
              <div className="h-[330px] overflow-hidden bg-white md:h-[390px]">
                <div className="phone-site-track">
                  <div className="relative h-44 overflow-hidden bg-[#f4efe5]">
                    <Image src="/generated-reception.jpg" alt="" fill sizes="220px" className="object-cover opacity-85" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4">
                      <p className="text-[9px] font-bold tracking-[.18em] text-[#806334]">整骨院サイト制作例</p>
                      <p className="mt-1 font-serif text-lg leading-snug text-[var(--sumi)]">初めてでも安心して相談できる整骨院へ。</p>
                    </div>
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {phoneFeatures.map((feature) => (
                        <div key={feature} className="border border-[#e1d7c5] bg-[#fbf8f1] px-2 py-2 text-[10px] font-bold leading-snug text-[#594a35]">{feature}</div>
                      ))}
                    </div>
                    <div className="phone-site-cta rounded-sm bg-[#1e3a5f] px-3 py-3 text-center text-xs font-bold tracking-wide text-white">Web予約・LINE相談</div>
                    <div className="grid gap-2">
                      <div className="phone-site-card h-16 border-l-2 border-[#a88750] bg-white px-3 py-2 shadow-sm"><p className="text-[10px] font-bold text-[var(--sumi)]">施術メニュー</p><p className="mt-1 text-[9px] leading-4 text-[var(--sumi-nezumi)]">症状・料金・初回の流れを整理</p></div>
                      <div className="phone-site-card h-16 border-l-2 border-[#1e3a5f] bg-white px-3 py-2 shadow-sm"><p className="text-[10px] font-bold text-[var(--sumi)]">アクセス</p><p className="mt-1 text-[9px] leading-4 text-[var(--sumi-nezumi)]">Googleマップと電話へすぐ誘導</p></div>
                    </div>
                  </div>
                  <div className="bg-[#f7f5f0] p-4">
                    <p className="text-[9px] font-bold tracking-[.18em] text-[#806334]">料金プラン</p>
                    <p className="mt-1 font-serif text-2xl leading-none text-[#806334]">98,000円〜</p>
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
        </div>
      </div>
    </section>
  );
}
