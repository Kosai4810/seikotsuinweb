import type { Metadata } from "next";
import { CtaBand } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { FlowSteps } from "@/components/ui-blocks";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "制作の流れ",
  description:
    "建設WEBの制作の流れ。無料相談、ヒアリング、お見積もり、制作、確認、公開、保守まで順番に進めます。",
};

const features = [
  "専門用語を使わず、わかりやすく説明します",
  "写真や文章の準備もサポートします",
  "修正回数に上限はありません",
  "公開後も相談できます",
];

export default function FlowPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-16 sm:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              label="制作の流れ"
              title="初めてでも迷わないよう、こちらで段取りします。"
              text="文章や写真の準備が不安な方も、必要な内容を一緒に整理します。"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                    <Check size={16} className="text-teal-600" />
                  </div>
                  <p className="text-sm font-bold text-slate-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flow Steps */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FlowSteps />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
