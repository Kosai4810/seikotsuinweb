"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";

const problems = [
  {
    title: "テンプレート感が強い",
    description:
      "「整骨院向けテンプレート」で作られたサイトは、どこか見覚えのあるデザインになりがちです。緑色の配色、骨のイラスト、ガッツポーズの写真。どの院も同じに見えてしまいます。",
  },
  {
    title: "強みが伝わらない",
    description:
      "「丁寧な施術」「地域密着」といった言葉は、どの院も使っています。本当の強みは何か、他院とどう違うのか。それが言語化されていないサイトが多いのです。",
  },
  {
    title: "広告感が強すぎる",
    description:
      "「今なら初回〇〇円！」「予約殺到中！」。集客を意識しすぎた結果、落ち着いて治療を受けたい患者さんの信頼を失っていることもあります。",
  },
  {
    title: "更新されていない",
    description:
      "作ったまま放置されているサイトは、「この院は大丈夫だろうか」という不安を与えます。情報が古いと、それだけで選択肢から外れてしまいます。",
  },
];

export function CommonProblems() {
  return (
    <section className="py-20 md:py-24 bg-[var(--kinari)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Left side - Section header */}
          <div className="col-span-12 lg:col-span-4">
            <SectionLabel number="02" label="Common Problems" />

            <h2 className="heading-lg text-2xl md:text-3xl text-[var(--sumi)] mb-6 sticky top-32">
              よくある
              <br />
              整骨院サイトの課題
            </h2>

            <p className="text-[var(--sumi-nezumi)] leading-relaxed sticky top-56">
              患者目線で情報を整理すると、
              見直すべき課題が見えてきます。
            </p>
          </div>

          {/* Right side - Problem cards */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="space-y-2">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className="bg-white p-5 md:p-6 border-l-2 border-[var(--enji)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f2e5e2] font-inter text-[11px] font-medium text-[var(--enji)] shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="heading-md text-base md:text-lg text-[var(--sumi)] mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-sm text-[var(--sumi-nezumi)] leading-6">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing note */}
            <div className="mt-6 pl-5 border-l border-[var(--usuzumi-line)]">
              <p className="text-[var(--sumi-nezumi)] leading-relaxed">
                これらの課題は、整骨院特有の患者動線や情報設計が十分に反映されていない場合に起こりやすいものです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
