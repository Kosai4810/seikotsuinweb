"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

const approaches = [
  {
    title: "院の「らしさ」を言語化する",
    description:
      "ヒアリングでは、施術の技術だけでなく、開業の経緯、患者さんとのエピソード、地域への想いをじっくりお聞きします。そこから、言葉にされていなかった「らしさ」を見つけ出します。",
  },
  {
    title: "患者さんの動線を設計する",
    description:
      "初めて訪れる人は何を不安に思うのか。どんな情報があれば安心するのか。患者さんの目線でサイト構成を設計します。",
  },
  {
    title: "静かで誠実なデザイン",
    description:
      "派手な演出や煽り文句は使いません。余白を活かし、情報を整理し、院の誠実さが伝わるデザインを心がけています。",
  },
  {
    title: "地域との関係を見せる",
    description:
      "整骨院は地域医療の一端を担っています。地域の風景、患者さんとの日常、そういった「地元感」もサイトの重要な要素です。",
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-end mb-12">
          <SectionLabel number="03" label="Our Approach" align="right" />
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Image side */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <div className="relative lg:sticky lg:top-32">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image src="/generated-street.jpg" alt="日本の住宅街にある落ち着いた整骨院の外観" fill sizes="(min-width:1024px) 500px, 100vw" className="object-cover" />
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 right-0 lg:-right-4 w-24 h-24 border border-[var(--fukai-ai)] z-[-1]" />
            </div>
          </div>

          {/* Content side */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <h2 className="heading-lg text-2xl md:text-3xl text-[var(--sumi)] mb-6">
              テンプレートに当てはめず、<br />院ごとの強みを言葉とデザインにします。
            </h2>

            <p className="text-[var(--sumi-nezumi)] leading-relaxed mb-16">
              広告代理店のような派手な提案はしません。<br />
              院の内側にある価値を、丁寧に引き出し、伝えることを大切にしています。
            </p>

            {/* Approaches list */}
            <div className="space-y-12">
              {approaches.map((approach, index) => (
                <div key={approach.title} className="relative pl-8">
                  {/* Vertical line */}
                  {index < approaches.length - 1 && (
                    <div className="absolute left-0 top-8 bottom-0 w-px bg-[var(--usuzumi-line)]" />
                  )}

                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-[var(--fukai-ai)]" />

                  <h3 className="heading-md text-lg text-[var(--sumi)] mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-sm text-[var(--sumi-nezumi)] leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
