import type { Metadata } from "next";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { contactMethods, industries, plans, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "建設WEBへの無料相談フォーム。お名前、会社名・屋号、業種、電話番号、メールアドレス、希望プラン、相談内容を入力できます。",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-16 sm:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <SectionHeading
              label="お問い合わせ"
              title="まずは無料でご相談ください。"
              text="ホームページが初めての方でも、わかりやすくご案内します。今の状況や困りごとをそのままお送りください。"
            />
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.label}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-teal-200 hover:shadow-md transition-all"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                      <Icon className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-900">
                        {method.label}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-600">
                        {method.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-lg">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              お問い合わせフォーム
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  お名前 <span className="text-red-500">*</span>
                </span>
                <input
                  type="text"
                  className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  placeholder="山田 太郎"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  会社名、屋号
                </span>
                <input
                  type="text"
                  className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  placeholder="株式会社○○"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">業種</span>
                <select className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base text-slate-900 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all">
                  <option>選択してください</option>
                  {industries.map((industry) => (
                    <option key={industry}>{industry}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  電話番号 <span className="text-red-500">*</span>
                </span>
                <input
                  type="tel"
                  className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  placeholder="090-1234-5678"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  メールアドレス <span className="text-red-500">*</span>
                </span>
                <input
                  type="email"
                  className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  placeholder="example@email.com"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  希望プラン
                </span>
                <select className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base text-slate-900 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all">
                  <option>未定・相談したい</option>
                  {plans.map((plan) => (
                    <option key={plan.name}>{plan.name}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block mt-5">
              <span className="text-sm font-bold text-slate-700">
                相談内容
              </span>
              <textarea
                rows={6}
                className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                placeholder="例：外壁塗装のホームページを作りたい。写真は少しあります。料金を相談したい。"
              />
            </label>

            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-sm text-amber-800">
                送信処理は未設定です。公開時にメール送信やフォーム連携を設定してください。
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-base font-bold rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
              >
                <Send size={18} />
                相談内容を送信
              </button>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-slate-700 text-base font-bold rounded-xl border-2 border-slate-200 hover:border-teal-500 hover:text-teal-700 transition-all"
              >
                <Phone size={18} />
                電話で相談
              </a>
            </div>
          </form>

          {/* LINE info */}
          <div className="mt-6 flex items-start gap-4 p-5 bg-teal-50 rounded-2xl border border-teal-100">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
              <MessageSquare className="text-teal-600" size={20} />
            </div>
            <div>
              <p className="font-bold text-teal-900">LINEでの問い合わせ</p>
              <p className="mt-1 text-sm text-teal-700 leading-relaxed">
                LINEでの問い合わせ導線も設置できます。電話に出られない時間が多い職人様にもおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
