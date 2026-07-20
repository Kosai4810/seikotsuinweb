import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

const cases = [
  {
    number: "01",
    title: "上品・信頼型",
    clinic: "地域密着の整骨院リニューアル",
    summary: "写真、料金、施術方針、アクセスを静かに整理し、初めての患者さんが安心して相談できる印象へ。",
    points: ["院の世界観を崩さない配色", "症状別ページと料金導線", "スマホで読みやすい縦長設計"],
    image: "/generated-sample-reception.jpg",
    tone: "gold",
  },
  {
    number: "02",
    title: "予約導線特化型",
    clinic: "問い合わせを増やしたい接骨院",
    summary: "電話・LINE・問い合わせフォーム・Googleマップを役割分担し、迷わず相談できる導線を前面に。",
    points: ["ファーストビューに予約導線", "LINEとフォームを併用", "Googleマップから来院まで接続"],
    image: "/service-line-reservation.png",
    tone: "navy",
  },
  {
    number: "03",
    title: "開業ブランディング型",
    clinic: "開業前の整体院・鍼灸院",
    summary: "ホームページだけでなく、Googleマップ、Instagram、名刺・チラシまで一貫した見え方に。",
    points: ["開業前の情報整理", "SNS・広告の受け皿づくり", "紙媒体まで統一した導線"],
    image: "/generated-sample-opening.jpg",
    tone: "soft",
  },
] as const;

function WebsitePreview({ tone }: { tone: (typeof cases)[number]["tone"] }) {
  const accent = tone === "navy" ? "bg-[var(--fukai-ai)]" : "bg-[#a88750]";
  const pale = tone === "navy" ? "bg-[#eef3f7]" : "bg-[#f7f2e8]";

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#d8c8aa] bg-white shadow-[0_22px_70px_rgba(83,63,30,0.12)]">
      <div className="flex h-8 items-center gap-1.5 border-b border-[#eadfcb] bg-[#fbf8f1] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d9b7a8]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d8c8aa]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#9fb3bd]" />
      </div>
      <div className="case-site-scroll">
        <div className={`relative h-28 ${pale}`}>
          <div className="absolute inset-x-5 bottom-5">
            <div className="mb-2 h-2 w-20 rounded-full bg-[#a88750]" />
            <div className="h-5 w-52 rounded-full bg-[var(--sumi)]/90" />
            <div className="mt-2 h-3 w-36 rounded-full bg-[var(--sumi-nezumi)]/35" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 p-5">
          <div className={`${accent} case-cta-glow col-span-2 rounded-md px-4 py-3 text-xs font-bold text-white`}>LINE・Web予約</div>
          <div className="rounded-md border border-[#d8c8aa] px-3 py-3 text-center text-xs font-bold text-[#594a35]">電話</div>
        </div>
        <div className="space-y-3 px-5 pb-5">
          {["施術メニュー", "料金表", "初回の流れ", "アクセス"].map((label, index) => (
            <div key={label} className="case-mini-card rounded-md border border-[#eadfcb] bg-white px-4 py-3 shadow-sm" style={{ animationDelay: `${index * 0.18}s` }}>
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${index % 2 === 0 ? "bg-[#a88750]" : "bg-[var(--fukai-ai)]"}`} />
                <span className="text-xs font-bold text-[var(--sumi)]">{label}</span>
              </div>
              <div className="mt-2 h-2 w-4/5 rounded-full bg-[#e8e0d1]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RoutePreview() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#d8c8aa] bg-[#f7f5f0] p-5 shadow-[0_22px_70px_rgba(30,58,95,0.12)]">
      <div className="absolute left-1/2 top-9 h-[72%] w-px -translate-x-1/2 bg-[#d8c8aa]" />
      {["Googleマップ", "ホームページ", "LINE相談", "来院予約"].map((label, index) => (
        <div key={label} className={`case-route-node relative z-10 mb-4 flex items-center gap-3 rounded-lg border border-[#d8c8aa] bg-white/92 px-4 py-3 shadow-sm ${index % 2 === 0 ? "mr-10" : "ml-10"}`} style={{ animationDelay: `${index * 0.28}s` }}>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--fukai-ai)] text-[11px] font-bold text-white">0{index + 1}</span>
          <div>
            <p className="text-sm font-bold leading-snug text-[var(--sumi)]">{label}</p>
            <div className="mt-1 h-1.5 w-24 rounded-full bg-[#d8c8aa]" />
          </div>
        </div>
      ))}
      <div className="case-route-dot absolute left-1/2 top-10 z-20 h-3 w-3 -translate-x-1/2 rounded-full bg-[#a88750] shadow-[0_0_0_8px_rgba(168,135,80,0.16)]" />
    </div>
  );
}

function LaunchPreview() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#d8c8aa] bg-white p-5 shadow-[0_22px_70px_rgba(83,63,30,0.12)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,135,80,0.14),transparent_34%),radial-gradient(circle_at_86%_76%,rgba(30,58,95,0.12),transparent_30%)]" />
      <div className="relative grid h-full grid-cols-2 gap-4">
        <div className="case-launch-card rounded-xl bg-[var(--fukai-ai)] p-4 text-white">
          <p className="text-[10px] tracking-[0.18em] text-white/70">WEBSITE</p>
          <p className="mt-5 font-serif text-2xl leading-tight">開業前から<br />伝わるHPへ</p>
          <div className="mt-5 h-2 w-24 rounded-full bg-white/70" />
        </div>
        <div className="grid gap-4">
          <div className="case-launch-card rounded-xl border border-[#d8c8aa] bg-[#fbf8f1] p-4" style={{ animationDelay: "0.2s" }}>
            <p className="text-xs font-bold text-[#806334]">Instagram</p>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {[0, 1, 2, 3, 4, 5].map((item) => <span key={item} className="aspect-square rounded bg-[#d8c8aa]" />)}
            </div>
          </div>
          <div className="case-launch-card rounded-xl border border-[#d8c8aa] bg-white p-4" style={{ animationDelay: "0.38s" }}>
            <p className="text-xs font-bold text-[var(--sumi)]">名刺・チラシ</p>
            <div className="mt-4 h-2 w-full rounded-full bg-[#e8e0d1]" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-[#e8e0d1]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="cases" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionLabel number="03" label="制作事例" />
        <div className="mb-10 max-w-4xl">
          <h2 className="heading-lg mb-4 text-2xl text-[var(--sumi)] md:text-3xl">制作事例イメージ</h2>
          <p className="text-sm leading-7 text-[var(--sumi-nezumi)] md:text-base">
            実際の制作では、院の雰囲気、開業状況、患者さんに伝えたい情報に合わせて、見せ方を変えます。下記は整骨院webで制作できる方向性の例です。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((item, index) => (
            <article key={item.number} className="group overflow-hidden border-2 border-[#d8c8aa] bg-[#fbf8f1] shadow-[0_18px_58px_rgba(83,63,30,0.08)]">
              <div className="relative h-52 overflow-hidden bg-[#eee8dc]">
                <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-88 transition-transform duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/58 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex bg-white/90 px-3 py-1 text-[11px] font-bold tracking-wide text-[#806334] backdrop-blur">制作パターン {item.number}</span>
                  <p className="mt-3 font-serif text-2xl leading-snug text-white">{item.title}</p>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <p className="text-xs font-bold tracking-[0.18em] text-[#806334]">{item.clinic}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--sumi-nezumi)]">{item.summary}</p>
                <ul className="mt-5 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2 text-xs font-bold leading-6 text-[var(--sumi)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a88750]" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  {index === 0 && <WebsitePreview tone={item.tone} />}
                  {index === 1 && <RoutePreview />}
                  {index === 2 && <LaunchPreview />}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
