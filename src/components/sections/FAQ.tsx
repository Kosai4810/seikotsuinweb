"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    question: "他の制作会社との違いは何ですか？",
    answer:
      "私たちは整骨院・接骨院・鍼灸院・整体院に特化しています。院ごとの業態や患者さんの心理、地域での立ち位置を理解した上でサイトを設計するため、汎用的な制作会社とは異なる具体的なご提案が可能です。",
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
    question: "公開後の更新はどうなりますか？",
    answer:
      "公開後の文章修正、写真差し替え、営業時間変更、お知らせ追加などは、基本的にこちらで対応します。院長様が管理画面から直接更新する前提ではなく、必要な変更を相談いただき、内容に応じて月額サポートまたは都度お見積りで反映します。",
  },
  {
    question: "制作にどのくらいの時間がかかりますか？",
    answer:
      "制作期間は通常6週間程度です。原稿・写真の準備状況、ご確認や修正の進行状況により前後する場合があります。",
  },
  {
    question: "すでに他社で作ったサイトがあるのですが...",
    answer:
      "現在のサイトの課題と活かせる内容を整理した上で、リニューアルの方針をご提案します。無料HP診断では、予約導線、スマートフォン表示、料金・施術内容の伝わり方を中心に改善点を3つ整理します。",
  },
  {
    question: "無料HP診断だけ受けても大丈夫ですか？",
    answer:
      "はい、大丈夫です。診断結果だけ受け取りたい段階でも問題ありません。すぐに制作を依頼する前提ではなく、今のホームページや開業準備で優先して直すべき点を整理するための相談としてご利用いただけます。",
  },
  {
    question: "医療広告ガイドラインに配慮した文章にできますか？",
    answer:
      "はい。効果を断定する表現や誇大に見えやすい表現を避けながら、院の方針、対応できる相談、来院までの流れが伝わる文章へ整えます。最終的な掲載内容は、必要に応じて専門家や関係機関にも確認いただく前提で進めます。",
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
    <section id="faq" className="scroll-mt-24 py-16 md:py-20 bg-[var(--kinari)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionLabel number="07" label="よくある質問" />

        <h2 className="heading-lg text-2xl md:text-3xl text-[var(--sumi)] mb-4">
          よくある質問
        </h2>
        <p className="text-[var(--sumi-nezumi)] mb-8 md:mb-10">
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
