import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { flow, industries, plans } from "@/lib/site-data";

export function ContactButton({
  href = "/contact",
  children = "無料相談する",
  variant = "primary",
}: {
  href?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold rounded-full transition-all",
        variant === "primary"
          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
          : "bg-transparent text-amber-400 border-2 border-amber-500 hover:bg-amber-500 hover:text-white"
      )}
    >
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}

export function PlanCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <article
          key={plan.name}
          className={cn(
            "relative flex flex-col p-6 sm:p-8 rounded-2xl transition-all",
            plan.featured
              ? "bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-2xl shadow-amber-600/30 scale-[1.02] lg:scale-105"
              : "bg-[#1a1a1a] border border-white/10 hover:border-amber-500/50"
          )}
        >
          {plan.featured && (
            <span className="absolute -top-3 left-6 px-4 py-1 bg-white text-amber-600 text-sm font-bold rounded-full shadow-lg">
              人気
            </span>
          )}

          <h3
            className={cn(
              "text-xl font-bold",
              plan.featured ? "text-white" : "text-white"
            )}
          >
            {plan.name}
          </h3>

          <div className="mt-4">
            <span
              className={cn(
                "text-4xl sm:text-5xl font-black tracking-tight",
                plan.featured ? "text-white" : "text-white"
              )}
            >
              {plan.price}
            </span>
          </div>

          <p
            className={cn(
              "mt-3 text-sm",
              plan.featured ? "text-amber-100" : "text-gray-400"
            )}
          >
            {plan.summary}
          </p>

          <ul className="mt-6 space-y-3 flex-1">
            {plan.items.map((item) => (
              <li
                key={item}
                className={cn(
                  "flex items-start gap-3 text-sm font-medium",
                  plan.featured ? "text-white/90" : "text-gray-300"
                )}
              >
                <Check
                  size={18}
                  className={cn(
                    "mt-0.5 shrink-0",
                    plan.featured ? "text-white" : "text-amber-400"
                  )}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              className={cn(
                "flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold transition-all",
                plan.featured
                  ? "bg-white text-amber-600 hover:bg-amber-50"
                  : "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
              )}
            >
              {plan.name}を相談
              <ArrowRight size={18} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function IndustryGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {industries.map((industry) => (
        <div
          key={industry}
          className="flex items-center justify-center px-4 py-4 bg-[#1a1a1a] border border-white/10 rounded-xl text-center text-base font-bold text-gray-200 hover:border-amber-500/50 hover:text-amber-400 transition-all cursor-default"
        >
          {industry}
        </div>
      ))}
    </div>
  );
}

export function FlowSteps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {flow.map((step, index) => (
        <li
          key={step}
          className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-5 hover:border-amber-500/50 transition-all group"
        >
          {/* Connector line for desktop */}
          {index < flow.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-white/20 group-hover:bg-amber-500/50 transition-colors" />
          )}

          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white text-lg font-black shadow-lg shadow-amber-500/20">
            {index + 1}
          </div>

          <h3 className="mt-4 text-lg font-bold text-white">{step}</h3>

          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            {index === 0
              ? "現在の状況や目的を簡単にお聞きします。"
              : index === flow.length - 1
                ? "公開後の修正や更新も必要に応じて対応します。"
                : "内容を確認しながら、無理なく次の工程へ進めます。"}
          </p>
        </li>
      ))}
    </ol>
  );
}
