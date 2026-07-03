"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    question: "他の制作会社との違いは何ですか？",
    answer:
      "私たちは整骨院・接骨院専門です。業界の慣習、患者さんの心理、地域医療としての立ち位置を理解した上で、サイトを設計します。「整骨院もできます」という汎用的な制作会社とは、提案の深さが異なると自負しています。",
  },
  {
    question: "遠方からでも依頼できますか？",
    answer:
      "オンラインで全国対応可能です。打ち合わせはZoomやGoogle Meetを使用します。関西圏では、内容に応じて訪問での打ち合わせや撮影にも対応します。",
  },
  {
    question: "写真撮影もお願いできますか？",
    answer:
      "撮影の有無と場所に応じて個別にお見積りします。関西圏外の撮影は、旅費や現地カメラマンの手配を含めてご相談ください。",
  },
  {
    question: "公開後の更新は自分でできますか？",
    answer:
      "はい、簡単な更新はご自身で行えるように設計します。また、更新方法のレクチャーも行います。「やっぱり難しい」という場合は、保守プランの中で更新代行も承っています。",
  },
  {
    question: "制作にどのくらいの時間がかかりますか？",
    answer:
      "制作期間は通常6週間程度です。原稿・写真の準備状況、ご確認や修正の進行状況により前後する場合があります。",
  },
  {
    question: "すでに他社で作ったサイトがあるのですが...",
    answer:
      "現在のサイトの課題と活かせる内容を整理した上で、リニューアルの方針をご提案します。まずは制作についてご相談ください。",
  },
  {
    question: "支払い方法は？",
    answer:
      "銀行振込でのお支払いをお願いしています。着手時に50%、公開時に50%という形が基本ですが、分割のご相談も承ります。",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionLabel number="07" label="FAQ" />

        <h2 className="heading-lg text-2xl md:text-3xl text-[var(--sumi)] mb-4">
          よくある質問
        </h2>
        <p className="text-[var(--sumi-nezumi)] mb-16">
          院長様からよくいただくご質問をまとめました
        </p>

        {/* FAQ Accordion */}
        <div className="border-t border-[var(--usuzumi-line)]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[var(--usuzumi-line)]"
            >
              <button
                type="button"
                className="w-full py-6 flex items-start justify-between gap-4 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="heading-md text-base text-[var(--sumi)]">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-[var(--sumi)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm text-[var(--sumi-nezumi)] leading-relaxed pl-0 lg:pl-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
