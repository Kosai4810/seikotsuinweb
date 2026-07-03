import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const samples = [
  { id: "01", title: "地域密着型の整骨院", theme: "信頼感と通いやすさ", src: "/generated-sample-reception.jpg", alt: "日本人の受付スタッフが患者を案内するサンプル写真", url: siteConfig.demos.community, label: "地域密着型デモを見る" },
  { id: "02", title: "スポーツ施術に対応する接骨院", theme: "専門性と分かりやすさ", src: "/generated-sample-sports.jpg", alt: "日本人の施術者がランナーの動きを確認するサンプル写真", url: siteConfig.demos.sports, label: "スポーツ施術型デモを見る" },
  { id: "03", title: "新規開業の整骨院", theme: "開業時のWeb導線設計", src: "/generated-sample-opening.jpg", alt: "新規開業を想定した整骨院の受付サンプル写真", url: siteConfig.demos.opening, label: "新規開業型デモを見る" },
];

export function Works() {
  return (
    <section id="works" className="scroll-mt-24 py-16 md:py-20 bg-[var(--usuzumi)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="05" label="Sample Works" />
        <div className="max-w-2xl mb-8 md:mb-10">
          <h2 className="heading-lg text-2xl md:text-3xl mb-5">サンプル制作</h2>
          <p className="text-[var(--sumi-nezumi)] leading-relaxed">
            架空の整骨院・接骨院を想定したWebサイトの制作例です。実在の院、取引実績、成果を示すものではありません。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {samples.map((sample) => (
            <article key={sample.id} className="bg-white">
              <div className="relative">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image src={sample.src} alt={sample.alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                </div>
                <span className="absolute top-0 left-0 px-4 py-3 bg-[var(--fukai-ai)] text-white text-xs font-inter">{sample.id}</span>
              </div>
              <div className="p-7 md:p-8">
                <p className="text-xs text-[var(--fukai-ai)] tracking-wide mb-3">サンプル制作</p>
                <h3 className="heading-md text-lg mb-4">{sample.title}</h3>
                <p className="text-sm text-[var(--sumi-nezumi)]">{sample.theme}</p>
                {sample.url && <a href={sample.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex border border-[var(--sumi)] px-5 py-3 text-sm hover:bg-[var(--sumi)] hover:text-white transition-colors">{sample.label}</a>}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 border border-[#bfa778] bg-[#f7f2e8] px-5 py-5 text-center">
          <p className="mb-1 text-xs tracking-wide text-[var(--nibi)]">通常 <span className="line-through">128,000円（税込）〜</span> のところ</p><p className="text-base font-bold tracking-wide md:text-xl">このようなホームページを、<span className="text-[#806334]">先着3院限定98,000円（税込）〜</span>で制作します。</p>
        </div>
      </div>
    </section>
  );
}
