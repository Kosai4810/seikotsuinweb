import { SectionLabel } from "@/components/ui/SectionLabel";

const strengths = [
  ["治療院に必要な情報を整理", "施術内容、料金、アクセス、予約方法を、患者さんが比較しやすい順番に整えます。"],
  ["院ごとの強みを言語化", "ヒアリングから院の考え方や地域で選ばれる理由を見つけ、伝わる言葉にします。"],
  ["患者目線で予約導線を設計", "スマートフォンから電話・メール・フォームへ、迷わず進める流れを設計します。"],
  ["広告表現に配慮して整理", "医療広告ガイドラインに配慮し、誤解や誇大表現を避けながら院の魅力を伝えます。"],
  ["無料診断から改善点を整理", "既存サイトがある場合は、伝わりにくい箇所と優先して直すべき導線を整理します。"],
] as const;

const promiseCards = [
  "営業担当ではなく、制作担当が直接ヒアリングします。",
  "小規模だから、柔軟・低価格・丁寧に対応できます。",
  "スターター価格でも、問い合わせに必要な導線は削りません。",
  "開業前でも、院の方針・料金・予約方法から一緒に整理できます。",
] as const;

export function WhySpecialized() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#eee8dc] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionLabel number="04" label="専門性" />
        <div className="max-w-6xl">
            <h2 className="heading-lg max-w-none text-[clamp(1.25rem,2.25vw,1.9rem)] text-[var(--sumi)] md:whitespace-nowrap">
              整骨院・接骨院・鍼灸院・整体院に特化しているから、院ごとの強みと患者さんの導線を設計できます。
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--sumi-nezumi)] md:text-base">
              汎用テンプレートに当てはめず、院の内側にある価値と、患者さんが来院までに必要とする情報を一つの流れとして組み立てます。既存サイトの改善、開業前の情報整理、GoogleマップやLINEへの導線まで、現在地に合わせて提案します。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {promiseCards.map((promise) => (
                <div key={promise} className="border-l-2 border-[#a88750] bg-white/80 px-5 py-4 shadow-sm">
                  <p className="mt-2 text-base font-bold leading-relaxed text-[var(--sumi)]">{promise}</p>
                </div>
              ))}
            </div>
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
      </div>
    </section>
  );
}
