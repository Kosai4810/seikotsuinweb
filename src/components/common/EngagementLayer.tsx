"use client";

import { useEffect, useState } from "react";

const DISMISSED_KEY = "seikotsuin-pricing-popup-dismissed";
const SUBMITTED_KEY = "seikotsuin-contact-submitted";
const FIVE_DAYS = 5 * 24 * 60 * 60 * 1000;

export function EngagementLayer() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const dismissedAt = Number(localStorage.getItem(DISMISSED_KEY) || 0);
    const suppressed = Boolean(sessionStorage.getItem(DISMISSED_KEY)) || Boolean(localStorage.getItem(SUBMITTED_KEY)) || Date.now() - dismissedAt < FIVE_DAYS;
    let shown = suppressed;
    const show = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(100, Math.max(0, ratio * 100)));
      if (ratio >= 0.38) show();
    };
    const timer = window.setTimeout(show, 14000);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && dismiss();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  function dismiss() {
    setVisible(false);
    const now = String(Date.now());
    sessionStorage.setItem(DISMISSED_KEY, now);
    localStorage.setItem(DISMISSED_KEY, now);
  }

  return (
    <>
      <div aria-hidden="true" className="fixed right-0 top-0 z-[70] hidden h-full w-[2px] bg-black/5 lg:block">
        <div className="w-full bg-[#a88750] transition-[height] duration-150" style={{ height: `${progress}%` }} />
      </div>
      <aside aria-label="料金プランと無料相談のご案内" aria-hidden={!visible} className={`pricing-popup fixed inset-x-3 bottom-[4.5rem] z-[60] max-h-[38svh] overflow-y-auto rounded-xl border border-[#c9b795] bg-[#fbf8f1] p-5 shadow-[0_18px_60px_rgba(48,38,23,0.2)] transition-all duration-300 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[360px] sm:max-h-none ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`}>
        <button type="button" onClick={dismiss} aria-label="案内を閉じる" className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-xl text-[#6b5b43] hover:bg-black/5">×</button>
        <span className="inline-flex rounded-full bg-[#a88750] px-3 py-1 text-[11px] font-bold tracking-wide text-white">先着3院限定</span>
        <h2 className="mt-3 pr-8 text-xl font-bold leading-snug tracking-tight text-[#211d18]">ホームページ制作を、<br /><span className="text-[#806334]">98,000円から。</span></h2>
        <ul className="mt-3 space-y-1.5 border-y border-[#dfd3bd] py-3 text-xs text-[#554b3c]">
          <li className="flex justify-between gap-3"><span>モニター制作</span><strong>98,000円〜</strong></li>
          <li className="flex justify-between gap-3"><span>集客スタート</span><strong>198,000円〜</strong></li>
          <li className="flex justify-between gap-3"><span>開業フルサポート</span><strong>298,000円〜</strong></li>
        </ul>
        <p className="mt-3 text-xs leading-5 text-[#665c4c]">まだ依頼内容が決まっていなくても、無料でご相談いただけます。</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <a href="#contact-form" onClick={() => setVisible(false)} className="inline-flex items-center justify-center rounded-md bg-[#806334] px-3 py-3 text-center text-xs font-medium text-white">無料相談する</a>
          <a href="#pricing" onClick={() => setVisible(false)} className="inline-flex items-center justify-center rounded-md border border-[#bba780] px-3 py-3 text-center text-xs font-medium text-[#594a35]">プランを詳しく見る</a>
        </div>
      </aside>
    </>
  );
}
