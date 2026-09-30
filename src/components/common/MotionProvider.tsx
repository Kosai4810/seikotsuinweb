"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * サイト全体の「常時モーション」基盤。
 * - .js クラス付与（CSSのreveal初期非表示を有効化）
 * - .wm-reveal をスクロールで順にフェードイン（ScrollTrigger.batch + stagger）
 * - data-parallax 要素をカーソルにわずかに追従（data-parallax-scope 内）
 * - prefers-reduced-motion を尊重
 */
export function MotionProvider() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll(".wm-reveal").forEach((el) => el.classList.add("wm-on"));
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // スクロール登場：画面に入った要素群を少しずつ立ち上げる
      ScrollTrigger.batch(".wm-reveal", {
        start: "top 88%",
        onEnter: (batch) =>
          batch.forEach((el, i) =>
            gsap.to(el, {
              onStart: () => el.classList.add("wm-on"),
              delay: i * 0.08,
              duration: 0.01,
            })
          ),
      });

      // カーソル追従パララックス（Heroなどのふわっと反応）
      document.querySelectorAll<HTMLElement>("[data-parallax-scope]").forEach((scope) => {
        const layers = scope.querySelectorAll<HTMLElement>("[data-parallax]");
        if (!layers.length) return;
        const movers = Array.from(layers).map((el) => ({
          el,
          depth: parseFloat(el.dataset.parallax || "12"),
          qx: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" }),
          qy: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" }),
        }));
        const onMove = (e: MouseEvent) => {
          const r = scope.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;
          movers.forEach((m) => {
            m.qx(nx * m.depth);
            m.qy(ny * m.depth);
          });
        };
        const onLeave = () => movers.forEach((m) => (m.qx(0), m.qy(0)));
        scope.addEventListener("mousemove", onMove);
        scope.addEventListener("mouseleave", onLeave);
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
