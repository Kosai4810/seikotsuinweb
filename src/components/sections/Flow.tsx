"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Zoom無料相談",
    duration: "事前相談",
    description:
      "現在の状況や院の強み、目指す方向性をオンラインでお聞きし、必要な制作内容とお見積りを整理します。",
  },
  {
    number: "02",
    title: "ヒアリング・構成整理",
    duration: "1週間程度",
    description:
      "Zoomでお話を伺い、患者さんに伝える情報、ページ構成、原稿や写真の準備内容を整理します。",
  },
  {
    number: "03",
    title: "デザイン制作",
    duration: "1〜2週間程度",
    description:
      "取材内容をもとに、サイトの構成案とデザインの方向性をご提案します。各プランに定められた回数まで修正対応します。",
  },
  {
    number: "04",
    title: "コーディング・実装",
    duration: "2〜3週間程度",
    description:
      "デザインが固まったら、実際のサイト制作に入ります。途中経過を確認いただきながら、細部を調整していきます。",
  },
  {
    number: "05",
    title: "確認・修正・公開準備",
    duration: "1週間程度",
    description:
      "表示や動作を確認し、各プランの範囲内で修正したうえで公開準備を進めます。",
  },
];

export function Flow() {
  return (
    <section id="flow" className="scroll-mt-24 py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="06" label="制作の流れ" />

        <h2 className="heading-lg text-2xl md:text-3xl text-[var(--sumi)] mb-8">
          制作の流れ
        </h2>

        <div>
          <div className="border-y border-[var(--usuzumi-line)]">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-3 border-b border-[var(--usuzumi-line)] py-6 last:border-b-0 lg:grid-cols-[minmax(280px,0.9fr)_1.6fr] lg:items-center lg:gap-8 lg:py-7"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--fukai-ai)] font-inter text-xs text-white">{step.number}</span>
                  <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="heading-md text-base md:text-lg text-[var(--sumi)]">{step.title}</h3>
                    <span className="text-xs text-[var(--nibi)] tracking-wide">{step.duration}</span>
                  </div>
                </div>
                <p className="pl-12 text-sm text-[var(--sumi-nezumi)] leading-6 lg:pl-0">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 p-5 md:p-6 bg-[var(--kinari)] border-l-2 border-[var(--fukai-ai)]">
          <p className="text-sm text-[var(--sumi-nezumi)] leading-relaxed">
            制作期間は通常6週間程度です。原稿・写真の準備状況、ご確認や修正の進行状況により前後する場合があります。
          </p>
          <p className="text-sm text-[var(--sumi-nezumi)] leading-relaxed mt-4">各プランに定められた回数まで修正対応します。大幅なデザイン変更や仕様変更、修正回数を超える対応は別途お見積りとなります。</p>
          <p className="text-sm text-[var(--sumi-nezumi)] leading-relaxed mt-4">打ち合わせは原則としてZoomで行います。訪問取材や写真撮影は、地域や内容に応じて別途ご相談となります。</p>
        </div>
      </div>
    </section>
  );
}
