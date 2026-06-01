import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 py-16 sm:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center px-4 py-1.5 bg-white/20 text-white text-sm font-bold rounded-full border border-white/30 mb-6">
              まずは無料相談
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              ホームページが初めての方でも、
              <br className="hidden sm:block" />
              <span className="text-amber-300">
                わかりやすくご案内
              </span>
              します。
            </h2>

            <p className="mt-6 text-lg text-teal-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
              料金、必要なページ、写真の準備、公開後の管理まで、今の状況に合わせて無理のない形をご提案します。
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-bold rounded-2xl shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1 transition-all cta-glow"
            >
              <MessageCircle size={22} />
              無料相談する
              <ArrowRight size={20} />
            </Link>

            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur text-white text-lg font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <Phone size={22} className="text-amber-300" />
              電話で相談
              <span className="text-amber-300">{siteConfig.phone}</span>
            </a>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-black text-white">39,800円〜</p>
              <p className="mt-1 text-sm text-teal-200">初期制作費</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-black text-white">最短1週間</p>
              <p className="mt-1 text-sm text-teal-200">納品目安</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-black text-white">スマホ対応</p>
              <p className="mt-1 text-sm text-teal-200">標準装備</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
