import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

const strengths = [
  ["整骨院に必要な情報を整理", "施術内容、料金、アクセス、予約方法を、患者さんが比較しやすい順番に整えます。"],
  ["院ごとの強みを言語化", "ヒアリングから院の考え方や地域で選ばれる理由を見つけ、伝わる言葉にします。"],
  ["患者目線で予約導線を設計", "スマートフォンから電話・メール・フォームへ、迷わず進める流れを設計します。"],
  ["公開後の更新もサポート", "営業時間や写真の変更、運用相談など、公開後も必要な範囲で伴走します。"],
] as const;

const problems = ["テンプレート感が強い", "院の強みが伝わらない", "問い合わせ導線が分かりにくい", "情報が更新されていない"];

export function WhySpecialized() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#eee8dc] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionLabel number="04" label="Why Specialized" />
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <div>
            <h2 className="heading-lg max-w-3xl text-2xl text-[var(--sumi)] md:text-3xl">
              整骨院専門だから、<br className="hidden sm:block" />院ごとの強みと患者さんの導線を設計できます。
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--sumi-nezumi)] md:text-base">
              汎用テンプレートに当てはめず、院の内側にある価値と、患者さんが来院までに必要とする情報を一つの流れとして組み立てます。
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {strengths.map(([title, description], index) => (
                <article key={title} className="rounded-lg border border-[#d4c8b3] bg-white/85 p-5">
                  <span className="text-[10px] font-bold tracking-[.18em] text-[#96733d]">0{index + 1}</span>
                  <h3 className="mt-2 text-base font-bold leading-snug text-[var(--sumi)]">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-[var(--sumi-nezumi)]">{description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src="/generated-reception.jpg" alt="自然光が入る整骨院の受付と待合空間" fill sizes="(min-width:1024px) 520px, 100vw" className="object-cover" />
            </div>
            <div className="relative z-10 -mt-5 ml-4 rounded-lg border border-white/70 bg-[#201d18]/95 p-5 text-white shadow-xl sm:ml-10">
              <p className="text-[10px] font-medium tracking-[.18em] text-[#d2b47c]">COMMON ISSUES</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                {problems.map((problem) => <li key={problem} className="flex gap-2 text-xs leading-5 text-white/85"><span className="text-[#d2b47c]">—</span>{problem}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
