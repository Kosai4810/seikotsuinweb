import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

const samples = [
  {
    id: "01",
    href: "/samples/tsumugi",
    clinic: "つむぎ鍼灸整骨院",
    label: "上品・安心感重視",
    catch: "院の空気まで、丁寧に伝える。",
    description:
      "女性患者さんや、初めての来院に不安がある方へ。余白・線画・落ち着いた配色を使い、先生の考え方や相談しやすさが伝わる構成です。",
    points: ["女性施術者・産後ケアを上品に訴求", "料金と初回の流れを静かに整理", "押しつけない予約導線"],
    image: "/demo-calm-consultation-v2.png",
    imageAlt: "女性施術者が患者さんのお話を伺う鉛筆線画イラスト",
    tone: "calm",
  },
  {
    id: "02",
    href: "/samples/mirai",
    clinic: "みらい整骨院",
    label: "集客・予約導線重視",
    catch: "検索から予約まで、迷わせない。",
    description:
      "症状・初回料金・場所・空き状況をすぐ確認できる設計。検索やGoogleマップから訪れた患者さんを、そのまま相談・予約へつなげます。",
    points: ["初回料金と当日枠をファーストビューへ", "症状別の入口を明確化", "LINE・Web予約を常に見える位置へ"],
    image: "/demo-conversion-guide-v2.png",
    imageAlt: "先生と患者さん、検索・地図・予約を表した鉛筆線画イラスト",
    tone: "conversion",
  },
] as const;

function CalmPreview() {
  return (
    <div className="relative min-h-[400px] overflow-hidden rounded-[1.8rem] border border-[#d8cfbc] bg-[radial-gradient(circle_at_75%_18%,rgba(202,214,193,.5),transparent_30%),linear-gradient(135deg,#fffdf8,#eee8dc)] p-4 md:min-h-[500px] md:p-6">
      <span className="absolute -left-20 top-20 h-60 w-60 rounded-full border border-[#ad9b73]/25" />
      <div className="relative overflow-hidden rounded-2xl border border-[#ded5c4] bg-[#fffdf8]/95 shadow-[0_24px_65px_rgba(73,65,45,.13)]">
        <div className="flex h-9 items-center gap-1.5 border-b border-[#e5ddcd] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d7b5a5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d8c7a5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#9eb39e]" />
          <span className="ml-3 h-2 w-24 rounded-full bg-[#e3dccf]" />
        </div>
        <div className="grid min-h-[340px] md:grid-cols-[.9fr_1.1fr]">
          <div className="relative z-10 p-6 md:p-8">
            <p className="text-[9px] font-bold tracking-[.18em] text-[#8b7048]">女性施術者在籍</p>
            <h3 className="mt-5 text-2xl font-bold leading-[1.5] tracking-wide text-[#35483d] md:text-3xl">
              わたしの身体と、
              <br />
              丁寧に向き合う。
            </h3>
            <p className="mt-4 max-w-xs text-[11px] leading-6 text-[#677068]">
              不安を置き去りにしない説明と、無理のない施術を大切に。
            </p>
            <span className="mt-6 inline-flex rounded-full bg-[#35483d] px-5 py-2.5 text-[10px] font-bold text-white">空き状況を確認する</span>
          </div>
          <div className="relative min-h-[250px]">
            <Image src="/demo-calm-consultation-v2.png" alt="" fill unoptimized sizes="520px" className="sample-soft-float object-contain object-center" />
          </div>
        </div>
      </div>
      <div className="sample-card-float absolute bottom-4 right-3 rounded-2xl border border-[#d5c7a7] bg-white/95 p-4 shadow-[0_18px_45px_rgba(77,65,39,.14)] md:bottom-7 md:right-7 md:w-[220px]">
        <p className="text-[9px] font-bold tracking-wider text-[#9a7844]">本日の受付</p>
        <p className="mt-1 text-sm font-bold text-[#35483d]">18:30まで・相談枠あり</p>
      </div>
    </div>
  );
}

function ConversionPreview() {
  return (
    <div className="relative min-h-[400px] overflow-hidden rounded-[1.8rem] border border-[#b9d3d7] bg-[#dcebed] p-4 md:min-h-[500px] md:p-6">
      <span className="absolute -right-8 top-8 h-24 w-24 rounded-full border-[18px] border-[#f6cf45]/70" />
      <span className="absolute bottom-9 left-7 h-12 w-12 rotate-12 rounded-xl bg-[#ef6f51]/80" />
      <div className="relative overflow-hidden rounded-2xl border border-[#bbd4d7] bg-white shadow-[0_24px_65px_rgba(13,39,64,.16)]">
        <div className="flex h-9 items-center gap-1.5 border-b border-[#d7e4e9] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ef8c74]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f3cf55]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#56b7b1]" />
          <span className="ml-3 h-2 w-24 rounded-full bg-[#dce7ea]" />
        </div>
        <div className="grid min-h-[340px] bg-[#f2f8f9] md:grid-cols-[.92fr_1.08fr]">
          <div className="relative z-10 p-6 md:p-8">
            <div className="flex flex-wrap gap-1.5">
              {["当日OK", "20時まで"].map((item) => <span key={item} className="rounded-full bg-white px-2 py-1 text-[8px] font-black text-[#24737a]">{item}</span>)}
            </div>
            <h3 className="mt-5 text-2xl font-black leading-[1.35] tracking-tight text-[#0d2740] md:text-3xl">
              その痛み、
              <br />
              <span className="text-[#ef6f51]">迷う前に相談。</span>
            </h3>
            <div className="mt-5 overflow-hidden rounded-xl border-2 border-[#0d2740] bg-white">
              <div className="p-3 text-[9px] font-black text-[#0d2740]">初回施術 <strong className="float-right text-lg text-[#ef6f51]">2,980円</strong></div>
            </div>
          </div>
          <div className="relative min-h-[250px] bg-[#0d2740]/5">
            <Image src="/demo-conversion-guide-v2.png" alt="" fill unoptimized sizes="520px" className="sample-route-illustration object-contain object-center" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-3 w-[210px] overflow-hidden rounded-2xl border border-[#b8d6d8] bg-white/96 shadow-[0_18px_48px_rgba(13,39,64,.18)] md:bottom-7 md:right-7 md:w-[240px]">
        <div className="bg-[#0d2740] px-4 py-2 text-[9px] font-black text-white">本日の空き枠</div>
        <div className="grid grid-cols-3 gap-2 p-3 text-center text-[9px] font-black">
          <span className="rounded-md bg-[#e7f1f2] py-2 text-[#285762]">16:30</span>
          <span className="rounded-md bg-[#ef6f51] py-2 text-white">18:00</span>
          <span className="rounded-md bg-[#e7f1f2] py-2 text-[#285762]">19:30</span>
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="cases" className="scroll-mt-24 overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionLabel number="03" label="制作サンプル" />
        <div className="grid gap-7 lg:grid-cols-[1fr_.82fr] lg:items-end">
          <h2 className="heading-lg text-3xl text-[var(--sumi)] md:text-5xl">
            2つの院、2つの戦い方。
            <br />
            <span className="text-[#806334]">実際に開いて確認できます。</span>
          </h2>
          <div>
            <p className="text-sm leading-8 text-[var(--sumi-nezumi)]">
              ただ色を変えただけではありません。患者層や院の強みに合わせて、情報の順番・予約導線・言葉・動きまで別々に設計した完成サイトです。
            </p>
            <p className="mt-3 text-xs leading-6 text-[var(--nibi)]">
              ※下記は実在の導入実績ではなく、制作力を確認いただくための架空院サンプルです。
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-10 md:mt-16">
          {samples.map((sample, index) => (
            <article key={sample.id} className="overflow-hidden border-2 border-[#d8c8aa] bg-[#fbf8f1] shadow-[0_22px_65px_rgba(83,63,30,.08)]">
              <div className="grid lg:grid-cols-[.78fr_1.42fr]">
                <div className={`flex flex-col justify-between border-b border-[#d8c8aa] p-7 md:p-9 lg:border-b-0 ${index === 0 ? "lg:border-r" : "lg:order-2 lg:border-l"}`}>
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-5xl font-bold leading-none text-[#e0d4be]">{sample.id}</span>
                      <span className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${sample.tone === "calm" ? "bg-[#e5ece1] text-[#48634e]" : "bg-[#dceff0] text-[#1d6970]"}`}>
                        {sample.label}
                      </span>
                    </div>
                    <p className="mt-7 text-xs font-bold tracking-[.14em] text-[#806334]">{sample.clinic}</p>
                    <h3 className="mt-4 text-2xl font-bold leading-[1.5] text-[var(--sumi)] md:text-3xl">{sample.catch}</h3>
                    <p className="mt-5 text-sm leading-7 text-[var(--sumi-nezumi)]">{sample.description}</p>
                    <ul className="mt-6 space-y-3">
                      {sample.points.map((point) => (
                        <li key={point} className="flex gap-3 text-xs font-bold leading-6 text-[var(--sumi)]">
                          <span className="mt-2 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#a88750] text-[8px] text-white">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={sample.href}
                    className={`group mt-8 flex items-center justify-between rounded-xl px-5 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 ${sample.tone === "calm" ? "bg-[#35483d]" : "bg-[#0d2740]"}`}
                  >
                    完成サイトを開く
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
                <div className={`p-4 md:p-6 ${index === 0 ? "" : "lg:order-1"}`}>
                  {sample.tone === "calm" ? <CalmPreview /> : <ConversionPreview />}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 rounded-[1.5rem] border-2 border-[#d8c8aa] bg-[#fbf8f1] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-9">
          <div>
            <p className="text-xs font-bold tracking-[.16em] text-[#806334]">院ごとに、作り分けます。</p>
            <h3 className="mt-3 text-xl font-bold leading-8 text-[var(--sumi)] md:text-2xl">どちらかを選ぶのではなく、貴院の強みから最適な見せ方を設計します。</h3>
          </div>
          <a href="#contact" className="rounded-xl bg-[var(--fukai-ai)] px-7 py-4 text-center text-sm font-bold text-white shadow-[0_12px_28px_rgba(30,58,95,.18)]">
            貴院に合う方向性を相談
          </a>
        </div>
      </div>
    </section>
  );
}
