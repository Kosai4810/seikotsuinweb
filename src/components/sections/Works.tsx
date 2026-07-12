import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const samples = [
  { id: "01", title: "地域密着型の整骨院", issue: "初めての方が、院の雰囲気や通いやすさを判断しにくい。", proposal: "受付・院内写真、初回の流れ、アクセス情報を上から順に整理。", src: "/generated-sample-reception.jpg", alt: "日本人の受付スタッフが患者を案内するサンプル写真", url: siteConfig.demos.community, label: "地域密着型デモを見る" },
  { id: "02", title: "スポーツ施術に対応する接骨院", issue: "スポーツ対応の強みが、一般的な施術案内に埋もれている。", proposal: "競技・部位別の見せ方で、専門性と相談までの流れを明確化。", src: "/generated-sample-sports.jpg", alt: "日本人の施術者がランナーの動きを確認するサンプル写真", url: siteConfig.demos.sports, label: "スポーツ施術型デモを見る" },
  { id: "03", title: "新規開業の整骨院", issue: "開業前で実績が少なく、何を載せればよいか決まりきらない。", proposal: "院の方針、料金、予約方法、Googleマップ導線を先に設計。", src: "/generated-sample-opening.jpg", alt: "新規開業を想定した整骨院の受付サンプル写真", url: siteConfig.demos.opening, label: "新規開業型デモを見る" },
];

export function Works() {
  return (
    <section id="works" className="scroll-mt-24 py-16 md:py-20 bg-[var(--usuzumi)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="05" label="Sample Works" />
        <div className="max-w-2xl mb-8 md:mb-10">
          <h2 className="heading-lg text-2xl md:text-3xl mb-5">診断・改善提案つきのサンプル制作</h2>
          <p className="text-[var(--sumi-nezumi)] leading-relaxed">
            架空の院を想定し、「どこが伝わりにくいか」「どう直せば相談につながりやすいか」まで整理した制作例です。実在の院、取引実績、成果を示すものではありません。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {samples.map((sample) => (
            <article key={sample.id} className="grid min-h-56 grid-cols-[42%_58%] overflow-hidden bg-white">
              <div className="relative min-h-full">
                <Image src={sample.src} alt={sample.alt} fill sizes="(min-width:1024px) 14vw, 42vw" className="object-cover" />
                <span className="absolute top-0 left-0 px-4 py-3 bg-[var(--fukai-ai)] text-white text-xs font-inter">{sample.id}</span>
              </div>
              <div className="flex flex-col justify-center p-5 md:p-6">
                <p className="mb-2 text-[10px] tracking-wide text-[var(--fukai-ai)]">診断サンプル</p>
                <h3 className="heading-md mb-3 text-base leading-snug md:text-lg">{sample.title}</h3>
                <div className="space-y-2 text-xs leading-5 md:text-sm">
                  <p className="text-[var(--sumi-nezumi)]"><span className="font-bold text-[var(--sumi)]">課題：</span>{sample.issue}</p>
                  <p className="text-[#806334]"><span className="font-bold">提案：</span>{sample.proposal}</p>
                </div>
                {sample.url && <a href={sample.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-fit border border-[var(--sumi)] px-3 py-2 text-xs hover:bg-[var(--sumi)] hover:text-white transition-colors">デモを見る</a>}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 border border-[#bfa778] bg-[#f7f2e8] px-5 py-5 text-center">
          <p className="text-base font-bold tracking-wide md:text-xl">このようなホームページを、<br /><span className="text-[#806334]">先着<span className="mx-1 inline-block font-serif text-3xl md:text-4xl leading-none tracking-tight">3</span>院限定98,000円（税込）〜</span>で制作します。</p>
        </div>
      </div>
    </section>
  );
}
