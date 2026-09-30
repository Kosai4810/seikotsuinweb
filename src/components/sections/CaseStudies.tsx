"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const samples = [
  {
    id: "tsumugi",
    number: "01",
    href: "/samples/tsumugi",
    clinic: "つむぎ鍼灸整骨院",
    tab: "安心感で選ばれる",
    label: "女性・初来院の不安に",
    catch: "院の空気まで、\n丁寧に伝える。",
    summary: "やわらかな余白と線画で、相談しやすさを最初に届ける設計です。",
    fit: "女性患者さん・産後ケア・鍼灸を丁寧に伝えたい院",
    points: ["人柄が伝わる", "料金が見つかる", "静かに予約へ"],
    route: ["不安", "安心", "相談"],
    tone: "calm",
  },
  {
    id: "mirai",
    number: "02",
    href: "/samples/mirai",
    clinic: "みらい整骨院",
    tab: "予約しやすさで選ばれる",
    label: "検索・Googleマップ流入に",
    catch: "検索から予約まで、\n迷わせない。",
    summary: "症状・初回料金・空き状況を一画面で判断できる、行動優先の設計です。",
    fit: "地域検索からの新規相談を、LINE・Web予約につなげたい院",
    points: ["症状から探せる", "初回料金が明快", "すぐ予約できる"],
    route: ["検索", "比較", "予約"],
    tone: "conversion",
  },
] as const;

function CalmPreview() {
  return (
    <div className="case-lab-visual-calm relative min-h-[360px] overflow-hidden rounded-[1.65rem] border border-[#d8cfbc] p-4 sm:min-h-[430px] sm:p-6">
      <span className="absolute -left-20 top-16 h-56 w-56 rounded-full border border-[#ad9b73]/25" />
      <span className="absolute right-7 top-7 h-2.5 w-2.5 rounded-full bg-[#c49a62]" />
      <span className="absolute right-12 top-11 h-px w-20 bg-[#c49a62]/45" />

      <div className="case-lab-browser relative overflow-hidden rounded-2xl border border-[#ded5c4] bg-[#fffdf8]/95 shadow-[0_24px_65px_rgba(73,65,45,.13)]">
        <div className="flex h-9 items-center gap-1.5 border-b border-[#e5ddcd] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E9C4B4]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d8c7a5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8FBFA8]" />
          <span className="ml-3 h-2 w-24 rounded-full bg-[#e3dccf]" />
        </div>
        <div className="grid min-h-[300px] sm:grid-cols-[.9fr_1.1fr]">
          <div className="relative z-10 p-5 sm:p-7">
            <p className="text-[9px] font-bold tracking-[.18em] text-[#6B543A]">女性施術者在籍</p>
            <h3 className="mt-4 text-[1.7rem] font-bold leading-[1.45] tracking-wide text-[#2E5248] sm:text-3xl">
              わたしの身体と、
              <br />
              丁寧に向き合う。
            </h3>
            <p className="mt-3 max-w-xs text-[10px] leading-5 text-[#677068]">不安を置き去りにしない説明と、無理のない施術を大切に。</p>
            <span className="mt-5 inline-flex rounded-full bg-[#2E5248] px-5 py-2.5 text-[10px] font-bold text-white">空き状況を確認</span>
          </div>
          <div className="relative min-h-[190px] sm:min-h-[270px]">
            <Image src="/demo-calm-consultation-v2.png" alt="" fill unoptimized sizes="520px" className="sample-soft-float object-contain object-center" />
          </div>
        </div>
      </div>

      <div className="sample-card-float absolute bottom-3 right-3 rounded-2xl border border-[#EADFCC] bg-[#fffdf8]/95 p-3 shadow-[0_18px_45px_rgba(77,65,39,.14)] backdrop-blur sm:bottom-6 sm:right-6 sm:w-[210px] sm:p-4">
        <p className="text-[8px] font-bold tracking-wider text-[#6B543A]">本日の受付</p>
        <p className="mt-1 text-xs font-bold text-[#2E5248] sm:text-sm">18:30まで・相談枠あり</p>
      </div>
      <span className="case-lab-sheen pointer-events-none absolute inset-y-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
    </div>
  );
}

function ConversionPreview() {
  return (
    <div className="case-lab-visual-conversion relative min-h-[360px] overflow-hidden rounded-[1.65rem] border border-[#b9d3d7] p-4 sm:min-h-[430px] sm:p-6">
      <span className="absolute -right-7 top-8 h-24 w-24 rounded-full border-[17px] border-[#f6cf45]/70" />
      <span className="absolute bottom-8 left-7 h-11 w-11 rotate-12 rounded-xl bg-[#E8664D]/80" />

      <div className="case-lab-browser relative overflow-hidden rounded-2xl border border-[#bbd4d7] bg-white shadow-[0_24px_65px_rgba(13,39,64,.16)]">
        <div className="flex h-9 items-center gap-1.5 border-b border-[#d7e4e9] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F0A38A]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f3cf55]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#56b7b1]" />
          <span className="ml-3 h-2 w-24 rounded-full bg-[#dce7ea]" />
        </div>
        <div className="grid min-h-[300px] bg-[#f2f8f9] sm:grid-cols-[.92fr_1.08fr]">
          <div className="relative z-10 p-5 sm:p-7">
            <div className="flex flex-wrap gap-1.5">
              {["当日OK", "20時まで"].map((item) => <span key={item} className="rounded-full bg-white px-2 py-1 text-[8px] font-black text-[#2E8B7A]">{item}</span>)}
            </div>
            <h3 className="mt-4 text-[1.7rem] font-black leading-[1.35] tracking-tight text-[#234B43] sm:text-3xl">
              その痛み、
              <br />
              <span className="text-[#E8664D]">迷う前に相談。</span>
            </h3>
            <div className="mt-4 overflow-hidden rounded-xl border-2 border-[#234B43] bg-white p-3 text-[9px] font-black text-[#234B43]">
              初回施術 <strong className="float-right text-lg text-[#E8664D]">2,980円</strong>
            </div>
          </div>
          <div className="relative min-h-[190px] bg-[#234B43]/5 sm:min-h-[270px]">
            <Image src="/demo-conversion-guide-v2.png" alt="" fill unoptimized sizes="520px" className="sample-route-illustration object-contain object-center" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 right-3 w-[190px] overflow-hidden rounded-2xl border border-[#b8d6d8] bg-white/95 shadow-[0_18px_48px_rgba(13,39,64,.18)] backdrop-blur sm:bottom-6 sm:right-6 sm:w-[225px]">
        <div className="bg-[#234B43] px-4 py-2 text-[9px] font-black text-white">本日の空き枠</div>
        <div className="grid grid-cols-3 gap-1.5 p-3 text-center text-[8px] font-black sm:text-[9px]">
          <span className="rounded-md bg-[#e7f1f2] py-2 text-[#2E8B7A]">16:30</span>
          <span className="rounded-md bg-[#E8664D] py-2 text-white">18:00</span>
          <span className="rounded-md bg-[#e7f1f2] py-2 text-[#2E8B7A]">19:30</span>
        </div>
      </div>
      <span className="case-lab-sheen pointer-events-none absolute inset-y-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
    </div>
  );
}

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = samples[activeIndex];

  return (
    <section id="cases" className="scroll-mt-24 overflow-hidden bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionLabel number="03" label="制作サンプル" />

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <h2 className="heading-lg text-[1.65rem] text-[var(--sumi)] md:text-5xl">
            説明を読むより、
            <br />
            <span className="text-[#6B543A]">触れば違いがわかります。</span>
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[var(--sumi-nezumi)] lg:justify-self-end">
            同じ整骨院サイトでも、患者さんと目的が変われば、伝え方も予約までの道筋も変わります。
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-2 rounded-[1.4rem] border-2 border-[#EADFCC] bg-[#F7F1E7] p-2" role="tablist" aria-label="制作サンプルを切り替える">
          {samples.map((sample, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={sample.id}
                type="button"
                role="tab"
                id={`case-tab-${sample.id}`}
                aria-selected={isActive}
                aria-controls={`case-panel-${sample.id}`}
                onClick={() => setActiveIndex(index)}
                className={`group flex min-h-[76px] items-center gap-3 rounded-[1rem] px-3 py-3 text-left transition duration-300 sm:px-5 ${isActive ? "bg-white text-[var(--sumi)] shadow-[0_10px_30px_rgba(83,63,30,.10)]" : "text-[var(--sumi-nezumi)] hover:bg-white/55"}`}
              >
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-[11px] font-bold transition ${isActive ? "bg-[#6B543A] text-white" : "bg-[#EADFCC] text-[#6B543A]"}`}>{sample.number}</span>
                <span>
                  <strong className="block text-xs leading-5 sm:text-sm">{sample.tab}</strong>
                  <small className="mt-0.5 hidden text-[10px] font-medium text-[var(--nibi)] sm:block">{sample.clinic}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div
          key={active.id}
          id={`case-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`case-tab-${active.id}`}
          className="case-lab-panel mt-4 overflow-hidden rounded-[2rem] border-2 border-[#EADFCC] bg-[#FFFDF9] shadow-[0_24px_70px_rgba(83,63,30,.09)]"
        >
          <div className="grid lg:grid-cols-[1.3fr_.7fr]">
            <div className="border-b border-[#EADFCC] p-3 sm:p-5 lg:border-b-0 lg:border-r">
              {active.tone === "calm" ? <CalmPreview /> : <ConversionPreview />}
            </div>

            <div className="flex flex-col p-6 sm:p-8 lg:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${active.tone === "calm" ? "bg-[#e5ece1] text-[#48634e]" : "bg-[#dceff0] text-[#25675D]"}`}>{active.label}</span>
                <span className="text-[3.5rem] font-bold leading-none text-[#EADFCC]">{active.number}</span>
              </div>

              <p className="mt-5 text-[11px] font-bold tracking-[.14em] text-[#6B543A]">{active.clinic}</p>
              <h3 className="mt-3 whitespace-pre-line text-[1.75rem] font-bold leading-[1.42] text-[var(--sumi)] sm:text-3xl">{active.catch}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--sumi-nezumi)]">{active.summary}</p>

              <div className="mt-6 rounded-2xl bg-[#F7F1E7] p-4">
                <p className="text-[9px] font-bold tracking-[.13em] text-[#8A7049]">この設計が合う院</p>
                <p className="mt-2 text-xs font-bold leading-6 text-[var(--sumi)]">{active.fit}</p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {active.points.map((point, index) => (
                  <div key={point} className="rounded-xl border border-[#EADFCC] bg-white px-2 py-3 text-center">
                    <span className="mx-auto grid h-5 w-5 place-items-center rounded-full bg-[#D98C0F] text-[9px] font-bold text-white">{index + 1}</span>
                    <p className="mt-2 text-[9px] font-bold leading-4 text-[var(--sumi)] sm:text-[10px]">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center" aria-label={`${active.route.join("から")}までの導線`}>
                {active.route.map((step, index) => (
                  <div key={step} className="contents">
                    <span className={`grid h-9 min-w-0 flex-1 place-items-center rounded-full border text-[10px] font-bold ${index === active.route.length - 1 ? "border-[#6B543A] bg-[#6B543A] text-white" : "border-[#D8C9AE] bg-white text-[#6B543A]"}`}>{step}</span>
                    {index < active.route.length - 1 && <span className="h-px w-3 shrink-0 bg-[#CDBB9B] sm:w-5" aria-hidden="true" />}
                  </div>
                ))}
              </div>

              <Link href={active.href} className={`group mt-7 flex items-center justify-between rounded-xl px-5 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 ${active.tone === "calm" ? "bg-[#2E5248]" : "bg-[#234B43]"}`}>
                完成サイトを体験する
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-[1.25rem] border border-[#EADFCC] bg-[#F7F1E7] px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold leading-6 text-[var(--sumi)]">
            貴院の強みから、見せ方を設計します。
            <span className="block font-medium text-[var(--nibi)]">※院名・内容・料金は、制作力をご確認いただくための架空設定です。</span>
          </p>
          <a href="#contact" className="shrink-0 rounded-xl bg-[var(--fukai-ai)] px-6 py-3.5 text-center text-xs font-bold text-white shadow-[0_10px_24px_rgba(30,58,95,.16)] transition hover:-translate-y-0.5">
            貴院に合う方向性を相談
          </a>
        </div>
      </div>
    </section>
  );
}
