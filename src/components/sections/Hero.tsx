import Image from "next/image";

const included = ["5ページ程度", "スマホ対応", "問い合わせフォーム", "電話・メール導線", "Googleマップ導線", "基本SEO設定", "公開後1か月サポート"];
const slides = [
  ["/generated-hero.jpg", "日本人の施術者が患者の相談を聞く整骨院の様子"],
  ["/clinic-interior.jpg", "自然光の入る落ち着いた整骨院の院内"],
  ["/staff.jpg", "日本人の施術者が笑顔で迎える治療院のイメージ"],
] as const;

export function Hero() {
  return (
    <section className="relative bg-[#171512] text-white overflow-hidden pt-24 lg:pt-28">
      <div className="hero-cinema absolute inset-0">
        {slides.map(([src, alt], index) => (
          <Image key={src} src={src} alt={index === 0 ? alt : ""} aria-hidden={index > 0} fill priority={index === 0} sizes="100vw" className={`hero-cinema-frame object-cover ${index === 0 ? "object-[66%_center] lg:object-center" : "object-center"}`} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171512]/95 via-[#171512]/82 to-[#171512]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171512]/80 via-transparent to-[#171512]/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-16 lg:py-20 min-h-[min(820px,calc(100svh-6rem))] flex items-center">
        <div className="w-full max-w-4xl">
          <p className="hero-reveal hero-reveal-label flex items-center gap-3 text-[11px] md:text-xs tracking-[0.2em] text-white/75 mb-4">
            <span className="w-8 h-px bg-[#b99a62]" />整骨院・接骨院・鍼灸院・整体院専門のWeb制作
          </p>
          <h1 className="font-serif text-xl md:text-3xl lg:text-4xl tracking-[0.08em] leading-relaxed mb-5">
            <span className="hero-title-mask"><span className="hero-title-line">ホームページ制作から、</span></span>
            <span className="hero-title-mask"><span className="hero-title-line hero-title-line-delay"><span className="text-[#d2b47c]">集客導線</span>づくりまで。</span></span>
          </h1>

          <div className="hero-reveal hero-reveal-copy border-l border-[#b99a62] pl-5 md:pl-7 mb-5">
            <p className="font-serif text-2xl md:text-4xl lg:text-[2.7rem] leading-snug tracking-[0.03em]">
              治療院のWeb導線を、
              <br className="hidden sm:block" />必要なものから整える。
            </p>
            <div className="flex flex-wrap items-end gap-x-4 gap-y-1 mt-2">
              <span className="inline-flex items-baseline bg-[#b99a62] text-[#171512] px-3 py-1 text-sm md:text-base font-medium tracking-wide">先着<strong className="mx-1 font-serif text-3xl md:text-4xl leading-none tracking-tight">3</strong>院限定</span>
              <div><p className="mb-1 text-xs tracking-wide text-white/65">通常 <span className="line-through decoration-[#b99a62] decoration-2">128,000円</span></p><p className="font-serif leading-none"><strong className="text-5xl md:text-7xl text-[#e0c28a] font-medium tracking-tight">98,000</strong><span className="text-xl md:text-2xl ml-1">円〜</span></p></div>
            </div>
          </div>

          <p className="hero-reveal hero-reveal-description text-xs md:text-sm text-white/80 leading-relaxed max-w-3xl mb-4">
            整骨院・接骨院・鍼灸院・整体院専門。まずはホームページ、スマホ対応、問い合わせフォーム、Googleマップ導線、基本SEOまで。必要に応じてLINE・Instagram・広告運用・アクセス解析まで拡張できます。
          </p>
          <ul className="hero-reveal hero-reveal-features grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20 max-w-4xl mb-6">
            {included.map((item) => <li key={item} className="bg-[#171512]/75 backdrop-blur-sm px-3 py-2 text-[11px] md:text-xs text-white/90 flex items-center gap-2"><span className="text-[#d2b47c]">✓</span>{item}</li>)}
          </ul>
          <div className="hero-reveal mb-6 max-w-3xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs font-bold tracking-[0.16em] text-[#e0c28a]">FREE DIAGNOSIS</p>
            <p className="mt-1 text-sm leading-relaxed text-white/90">
              既存HPがある院は、改善点を無料で3つ診断。HPがない院は、開業・集客に必要な導線を整理します。
            </p>
          </div>
          <div className="hero-reveal hero-reveal-cta flex flex-col sm:flex-row gap-3">
            <a href="#contact-form" className="inline-flex justify-center bg-[#a88750] text-white px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-[#947442] transition-colors">無料HP診断を申し込む</a>
            <a href="#monitor-plan" className="inline-flex justify-center border border-white/50 text-white px-6 py-3.5 text-sm tracking-wide hover:bg-white hover:text-[#171512] transition-colors">モニタープランの内容を見る</a>
          </div>
        </div>
      </div>
    </section>
  );
}
