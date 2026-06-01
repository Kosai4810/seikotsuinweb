import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Phone,
  Plus,
  Minus,
  Clock,
  Heart,
  Smartphone,
  Activity,
} from "lucide-react";
import { CtaBand } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { FlowSteps, IndustryGrid, PlanCards } from "@/components/ui-blocks";
import {
  faqs,
  areaPages,
  columnCards,
  industryPages,
  lowPriceReasons,
  reasons,
  strengths,
  worries,
  siteConfig,
} from "@/lib/site-data";

// Photo rail images
const railPhotos = [
  { src: "/images/seikotsuin-hero.jpg", alt: "整骨院の施術風景" },
  { src: "/images/treatment.jpg", alt: "施術の様子" },
  { src: "/images/massage.jpg", alt: "マッサージ施術" },
  { src: "/images/clinic-interior.jpg", alt: "院内の雰囲気" },
  { src: "/images/staff.jpg", alt: "スタッフ" },
];

const trustBadges = [
  { icon: Heart, text: "整骨院専門" },
  { icon: Clock, text: "最短1週間納品" },
  { icon: Smartphone, text: "スマホ対応標準" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white hero-pattern">
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-12">
            {/* Left Content - wider */}
            <div className="animate-fade-up">
              <p className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-base sm:text-xl lg:text-2xl font-black tracking-widest rounded-full mb-6">
                整骨院・接骨院専門のホームページ制作
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-snug text-slate-800">
                <span className="text-teal-600 text-[1.1em]">39,800円〜</span>、<span className="text-teal-600 text-[1.1em]">最短1週間</span>。<br />
                地域で<span className="inline-block bg-amber-500 text-white px-3 py-1 rounded text-[0.85em]">選ばれる院</span>になるHPを。
              </h1>

              <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                整骨院・接骨院・鍼灸院・整体院に特化。<strong className="text-slate-800">症状別ページ・患者様の声・予約導線</strong>を整え、新規患者を増やします。
              </p>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                {trustBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.text} className="flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full">
                      <Icon size={18} className="text-teal-600" />
                      <span className="text-sm font-bold text-slate-700">{badge.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-bold rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1 transition-all cta-glow"
                >
                  無料で相談する
                  <ArrowRight size={20} />
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-slate-700 text-lg font-bold rounded-full border-2 border-slate-300 hover:border-teal-500 hover:text-teal-600 transition-all"
                >
                  <Phone size={20} className="text-teal-600" />
                  {siteConfig.phone}
                </a>
              </div>

              {/* Stats */}
              <div className="mt-10 p-6 sm:p-8 bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-3xl">
                <p className="text-xl sm:text-2xl font-black text-slate-800 text-center">
                  整骨院専門だから、<span className="text-teal-600">集客に強い</span>サイトを<span className="text-teal-600">低価格</span>で。
                </p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-3 rounded-xl bg-white border border-teal-200">
                    <p className="text-2xl sm:text-3xl font-black text-slate-800">39,800<span className="text-base">円〜</span></p>
                    <p className="mt-1 text-xs text-slate-500">初期制作費</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white border border-teal-200">
                    <p className="text-2xl sm:text-3xl font-black text-slate-800">最短1<span className="text-base">週間</span></p>
                    <p className="mt-1 text-xs text-slate-500">納品スピード</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white border border-teal-200">
                    <p className="text-2xl sm:text-3xl font-black text-slate-800">0<span className="text-base">円</span></p>
                    <p className="mt-1 text-xs text-slate-500">相談・見積り</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Single Photo Rail */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full animate-fade-up animate-fade-up-delay-2">
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="flex flex-col gap-4 photo-track-up">
                  {[...railPhotos, ...railPhotos].map((photo, index) => (
                    <div key={`rail-${index}`} className="relative shrink-0 w-full" style={{ height: 200 }}>
                      <Image src={photo.src} alt={photo.alt} fill className="object-cover rounded-xl" sizes="(min-width: 1024px) 320px, 100vw" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-center">
            こんなお悩み、ありませんか？
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {worries.map((worry) => (
              <div key={worry} className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10">
                <div className="shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <Check className="text-white" size={14} />
                </div>
                <p className="text-base font-bold text-white/90">{worry}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg sm:text-xl text-slate-400">
              <span className="text-teal-400 font-bold">ホームページがあれば</span>、これらの悩みは解決できます。
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="なぜ今、整骨院にホームページが必要なのか？"
            text="患者さんの8割以上が、来院前にネットで院を調べています。ホームページがないと、比較検討の土俵にすら上がれません。"
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <div key={reason} className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white text-lg font-black">
                  {index + 1}
                </div>
                <p className="text-base font-bold text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Showcase Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="「この院なら安心」と思わせるサイト設計"
            text="清潔感のある院内、先生の人柄、患者様の声。信頼につながる要素を効果的に配置します。"
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { src: "/images/clinic-interior.jpg", title: "清潔感ある院内を見せる", text: "明るく清潔な院内写真で、安心感を与えます。" },
              { src: "/images/treatment.jpg", title: "施術の様子を伝える", text: "施術風景で、どんな治療を受けられるか具体的にイメージ。" },
              { src: "/images/staff.jpg", title: "スタッフの人柄を伝える", text: "笑顔のスタッフ写真で、親しみやすさをアピール。" },
            ].map((item) => (
              <article key={item.src} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-500/50 hover:shadow-lg transition-all">
                <div className="relative h-[220px]">
                  <Image src={item.src} alt={item.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-slate-800">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Low Price */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="なぜ、39,800円〜で制作できるのか？"
            text="安いには理由があります。整骨院業態に特化することで、無駄を徹底的に省いています。"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {lowPriceReasons.map((reason, index) => (
              <article key={reason.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white text-xl font-black">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-black text-slate-800">{reason.title}</h3>
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">{reason.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 p-6 bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl border border-teal-200 text-center">
            <p className="text-lg font-bold text-slate-700">
              だから、<span className="text-2xl text-teal-600">39,800円〜</span>という価格で、<br className="sm:hidden" />
              集客に強いホームページを作れます。
            </p>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="整骨院ウェブが選ばれる6つの理由"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-500/50 hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <Icon className="text-teal-600 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-slate-800">{item.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="シンプルで分かりやすい料金体系"
            text="隠れた費用は一切ありません。必要なものだけを、適正価格で。"
            align="center"
          />
          <div className="mt-12">
            <PlanCards />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="整骨院から鍼灸院まで、幅広い業態に対応"
            align="center"
          />
          <div className="mt-10">
            <IndustryGrid />
          </div>
        </div>
      </section>

      {/* SEO Pages */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="「地域名+整骨院」で検索上位を狙う設計"
            text="「整骨院 〇〇市」で検索されたとき、あなたの院が見つかる仕組みを作ります。"
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-black text-slate-800">業態別ページ</h3>
              <p className="mt-2 text-sm text-slate-500">整骨院・鍼灸院など業態ごとに専用ページを作成。</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {industryPages.slice(0, 4).map((item) => (
                  <Link key={item.slug} href={`/industries/${item.slug}`} className="px-3 py-1.5 bg-white text-slate-600 text-sm font-bold rounded-full border border-slate-200 hover:border-teal-500/50 hover:text-teal-600 transition-all">
                    {item.name}
                  </Link>
                ))}
              </div>
            </article>
            <article className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-black text-slate-800">地域別ページ</h3>
              <p className="mt-2 text-sm text-slate-500">エリアごとにページを用意。地域検索に強くなる。</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {areaPages.map((item) => (
                  <Link key={item.slug} href={`/areas/${item.slug}`} className="px-3 py-1.5 bg-white text-slate-600 text-sm font-bold rounded-full border border-slate-200 hover:border-teal-500/50 hover:text-teal-600 transition-all">
                    {item.name}
                  </Link>
                ))}
              </div>
            </article>
            <article className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-black text-slate-800">お役立ちコラム</h3>
              <p className="mt-2 text-sm text-slate-500">患者さんの悩みに答える記事で、信頼と検索流入を獲得。</p>
              <div className="mt-4 space-y-2">
                {columnCards.slice(0, 2).map((item) => (
                  <Link key={item.title} href={item.href} className="block p-2 bg-white text-slate-600 text-sm font-bold rounded-lg hover:text-teal-600 transition-all">
                    → {item.title}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="お申し込みから公開まで、たった4ステップ"
            text="難しい作業は一切不要。すべてこちらでサポートします。"
            align="center"
          />
          <div className="mt-12">
            <FlowSteps />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="よくあるご質問"
            align="center"
          />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-base sm:text-lg font-bold text-slate-800 pr-4">{faq.q}</span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center group-open:bg-teal-500 transition-colors">
                    <Plus size={18} className="text-slate-500 group-open:hidden" />
                    <Minus size={18} className="text-white hidden group-open:block" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand />
    </>
  );
}
