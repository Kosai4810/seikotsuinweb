"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

export function WhySpecialized() {
  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="01" label="Why Specialized" />

        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="heading-lg text-2xl md:text-3xl text-[var(--sumi)] mb-8">
              整骨院専門だから、<br />患者さんが知りたい情報を外しません。
            </h2>

            <div className="space-y-4 text-sm md:text-base leading-7 text-[var(--sumi-nezumi)]">
              <p className="drop-cap">
                整骨院のホームページ制作を請け負う会社は多くあります。しかし、その多くは「整骨院も対応可能」という姿勢です。
              </p>

              <p>
                私たちは違います。整骨院・接骨院だけに特化することで、院長が抱える本当の課題、患者さんが求める情報、地域医療としての立ち位置を深く理解しています。
              </p>

              <p>
                施術の技術や想いがあるのに、それが伝わらない。<br />
                価格競争に巻き込まれて、本来の価値が見えなくなっている。
              </p>

              <p>
                そんな状況を変えるために、私たちは整骨院専門という道を選びました。
              </p>
            </div>
          </div>

          {/* Image - Magazine style overlap */}
          <div className="col-span-12 lg:col-span-7 relative">
            <div className="lg:pl-12">
              {/* Main image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image src="/generated-reception.jpg" alt="自然光が入る整骨院の受付と待合空間" fill sizes="(min-width:1024px) 650px, 100vw" className="object-cover" />
              </div>

              {/* Overlapping smaller image */}
              <div className="absolute -bottom-8 -left-4 lg:left-0 w-48 md:w-64 shadow-lg">
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/generated-detail.jpg" alt="施術ベッドのタオルを整える施術者の手元" fill sizes="256px" className="object-cover" />
                </div>
              </div>

              {/* Caption */}
              <p className="absolute -bottom-16 right-0 text-xs text-[var(--nibi)] tracking-wide">
                地域の方々に寄り添う、日々の風景
              </p>
            </div>
          </div>
        </div>

        {/* Key points */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--usuzumi-line)] border border-[var(--usuzumi-line)]">
          {[
            {
              number: "01",
              title: "業界理解",
              description:
                "保険診療と自費診療の違い、地域密着の重要性、患者さんとの信頼関係。整骨院特有の事情を理解した上で提案します。",
            },
            {
              number: "02",
              title: "伝え方の設計",
              description:
                "「肩こり改善」ではなく、なぜその症状が起きるのか、どう向き合うのか。院の哲学を言語化します。",
            },
            {
              number: "03",
              title: "継続的な関係",
              description:
                "公開して終わりではありません。地域の変化、院の成長に合わせて、ホームページも育てていきます。",
            },
          ].map((point) => (
            <div
              key={point.number}
              className="bg-white p-5 md:p-7"
            >
              <span className="inline-flex rounded-full bg-[var(--fukai-ai)] px-2.5 py-1 font-inter text-[10px] text-white tracking-widest">
                {point.number}
              </span>
              <h3 className="heading-md text-base md:text-lg text-[var(--sumi)] mt-3 mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-[var(--sumi-nezumi)] leading-6">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
