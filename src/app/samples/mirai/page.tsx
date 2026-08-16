import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "みらい整骨院｜制作サンプル",
  description: "整骨院webが制作する、検索から予約までの導線を重視した架空の整骨院サイトです。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/samples/mirai" },
};

const symptomCards = [
  ["肩こり", "首から肩の重さ・動かしにくさ"],
  ["腰痛", "立ち上がりや長時間同じ姿勢のつらさ"],
  ["膝の悩み", "階段や歩行時に感じる違和感"],
  ["スポーツ", "運動中のケガ・復帰に向けたケア"],
] as const;

const routeSteps = [
  ["01", "検索で発見", "地域名と症状から当院を見つける"],
  ["02", "料金を確認", "初回料金と施術内容がすぐ分かる"],
  ["03", "不安を解消", "先生・院内・初回の流れを確認"],
  ["04", "そのまま予約", "LINEまたはWebで空き枠を選ぶ"],
] as const;

export default function MiraiSamplePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#142b3b]">
      <div className="bg-[#0d2740] px-4 py-2 text-center text-[11px] font-bold tracking-[0.12em] text-white">
        整骨院web 制作サンプルサイト｜院名・内容・料金はすべて架空です
      </div>

      <header className="sticky top-0 z-50 border-b border-[#d7e4e9] bg-white/94 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-[14px] bg-[#0d2740] shadow-[0_8px_22px_rgba(13,39,64,.17)]">
              <span className="absolute h-8 w-2 -rotate-45 rounded-full bg-[#48b5ae]" />
              <span className="absolute h-2 w-8 -rotate-45 rounded-full bg-[#f27f61]" />
            </span>
            <span>
              <strong className="block text-lg font-black tracking-[0.08em] text-[#0d2740]">みらい整骨院</strong>
              <small className="block text-[9px] font-bold tracking-[0.12em] text-[#4d7d84]">駅徒歩3分・平日20時まで</small>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-bold text-[#345563] lg:flex">
            <a href="#symptoms" className="transition hover:text-[#ef6f51]">症状から探す</a>
            <a href="#reason" className="transition hover:text-[#ef6f51]">選ばれる理由</a>
            <a href="#flow" className="transition hover:text-[#ef6f51]">初回の流れ</a>
            <a href="#access" className="transition hover:text-[#ef6f51]">受付時間・アクセス</a>
          </nav>
          <a href="#reserve" className="sample-conversion-pulse hidden rounded-xl bg-[#ef6f51] px-6 py-3 text-xs font-black text-white shadow-[0_10px_28px_rgba(239,111,81,.24)] md:inline-flex">
            空き状況・予約
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden bg-[#f2f8f9]">
          <div className="absolute inset-y-0 right-0 -z-20 w-[42%] bg-[#0d2740] max-lg:hidden" />
          <div className="absolute -left-32 -top-32 -z-10 h-80 w-80 rounded-full bg-[#5bc0b8]/12 blur-3xl" />
          <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-10 px-5 py-12 md:px-10 lg:grid-cols-[.92fr_1.08fr] lg:py-16">
            <div className="relative z-10">
              <div className="mb-6 flex flex-wrap gap-2">
                {["当日予約OK", "平日20時まで", "駅徒歩3分"].map((item) => (
                  <span key={item} className="rounded-full border border-[#90bcc0] bg-white px-3 py-1.5 text-[10px] font-black text-[#246b70] shadow-sm">● {item}</span>
                ))}
              </div>
              <h1 className="text-[clamp(2.5rem,5vw,4.9rem)] font-black leading-[1.16] tracking-[-0.03em] text-[#0d2740]">
                その痛み、
                <br />
                <span className="relative inline-block text-[#ef6f51]">
                  迷う前に相談。
                  <span className="absolute -bottom-2 left-0 h-2 w-full -rotate-1 bg-[#f6cf45]/65" />
                </span>
              </h1>
              <p className="mt-9 max-w-xl text-sm font-medium leading-8 text-[#466572] md:text-base">
                症状・料金・場所・予約方法を、最初の画面から分かりやすく。
                みらい整骨院は、初めての方が相談しやすい院づくりを大切にしています。
              </p>
              <div className="mt-8 grid max-w-[540px] overflow-hidden rounded-2xl border-2 border-[#0d2740] bg-white shadow-[8px_8px_0_#b8dfdf] sm:grid-cols-[1fr_auto]">
                <div className="p-5">
                  <p className="text-[10px] font-black tracking-[0.15em] text-[#4b7f83]">初回限定</p>
                  <p className="mt-1 text-lg font-black text-[#0d2740]">姿勢・動作チェック＋施術</p>
                  <p className="mt-1 text-xs text-[#66808b]">カウンセリングを含む 約60分</p>
                </div>
                <div className="flex items-center justify-center bg-[#0d2740] px-7 py-5 text-white">
                  <p><strong className="text-4xl tracking-tight text-[#f6cf45]">2,980</strong><span className="ml-1 text-xs font-bold">円</span></p>
                </div>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#reserve" className="sample-conversion-pulse rounded-xl bg-[#ef6f51] px-8 py-4 text-center text-sm font-black text-white shadow-[0_14px_32px_rgba(239,111,81,.25)]">
                  LINEで空き状況を聞く
                </a>
                <a href="#flow" className="rounded-xl border-2 border-[#0d2740] bg-white px-8 py-4 text-center text-sm font-black text-[#0d2740]">
                  初回の流れを見る
                </a>
              </div>
            </div>

            <div className="relative min-h-[450px] rounded-[2rem] bg-[linear-gradient(145deg,#d7eeee,#fff_50%,#dfe9ef)] lg:min-h-[550px] lg:rounded-[3rem_0_3rem_3rem]">
              <span className="absolute -right-8 top-10 h-24 w-24 rounded-full border-[18px] border-[#f6cf45]/75" />
              <span className="absolute bottom-8 left-8 h-14 w-14 rotate-12 rounded-2xl bg-[#ef6f51]/80" />
              <Image
                src="/demo-conversion-guide-v2.png"
                alt="整骨院の先生が患者さんを案内し、検索から予約までの流れを示す鉛筆線画イラスト"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="sample-route-illustration object-contain object-center"
              />
              <div className="absolute bottom-5 right-4 z-10 w-[220px] overflow-hidden rounded-2xl border border-[#b8d6d8] bg-white/96 shadow-[0_22px_50px_rgba(13,39,64,.18)] backdrop-blur md:bottom-8 md:right-8 md:w-[260px]">
                <div className="flex items-center justify-between bg-[#0d2740] px-4 py-3 text-white">
                  <span className="text-[10px] font-black tracking-wider">最短の空き枠</span>
                  <span className="rounded-full bg-[#48b5ae] px-2 py-0.5 text-[9px] font-black">本日</span>
                </div>
                <div className="grid grid-cols-3 gap-2 p-4 text-center text-[11px] font-black">
                  {["16:30", "18:00", "19:30"].map((time, index) => (
                    <span key={time} className={`rounded-lg py-2 ${index === 1 ? "bg-[#ef6f51] text-white" : "bg-[#e7f1f2] text-[#285762]"}`}>{time}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 -mt-1 border-y border-[#d7e4e9] bg-white">
          <div className="mx-auto grid max-w-7xl divide-y divide-[#d7e4e9] md:grid-cols-4 md:divide-x md:divide-y-0">
            {routeSteps.map(([number, title, description], index) => (
              <div key={number} className="group relative flex gap-4 px-5 py-6 md:px-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e4f3f3] text-xs font-black text-[#24737a] transition group-hover:bg-[#48b5ae] group-hover:text-white">{number}</span>
                <div>
                  <p className="text-sm font-black text-[#0d2740]">{title}</p>
                  <p className="mt-1 text-[10px] leading-5 text-[#68818b]">{description}</p>
                </div>
                {index < routeSteps.length - 1 && <span className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-[#90bcc0] bg-white md:block" />}
              </div>
            ))}
          </div>
        </section>

        <section id="symptoms" className="scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
              <div>
                <p className="inline-flex rounded-full bg-[#e4f3f3] px-4 py-2 text-xs font-black tracking-[0.16em] text-[#24737a]">症状から探す</p>
                <h2 className="mt-5 text-3xl font-black leading-[1.45] tracking-[-0.02em] text-[#0d2740] md:text-5xl">今の悩みに近いものを<br />選んでください。</h2>
              </div>
              <p className="max-w-xl text-sm leading-8 text-[#5d7883] lg:ml-auto">「この症状で相談してよいか分からない」という方も大丈夫です。状態を確認し、必要に応じて適切な医療機関への相談もご案内します。</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {symptomCards.map(([title, description], index) => (
                <a href="#reserve" key={title} className="group flex items-center gap-5 rounded-[1.4rem] border-2 border-[#d7e4e9] bg-white p-5 shadow-[0_12px_32px_rgba(13,39,64,.05)] transition duration-300 hover:-translate-y-1 hover:border-[#48b5ae] hover:shadow-[0_18px_42px_rgba(13,39,64,.11)] md:p-6">
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-lg font-black ${index % 2 === 0 ? "bg-[#e4f3f3] text-[#24737a]" : "bg-[#fff0eb] text-[#ef6f51]"}`}>{["肩", "腰", "膝", "走"][index]}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-black text-[#0d2740]">{title}</h3>
                    <p className="mt-1 text-xs leading-6 text-[#68818b]">{description}</p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[#9bbdc1] text-[#24737a] transition group-hover:translate-x-1 group-hover:bg-[#24737a] group-hover:text-white">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="reason" className="relative overflow-hidden bg-[#0d2740] px-5 py-20 text-white md:px-10 md:py-28">
          <span className="absolute -right-32 top-16 h-80 w-80 rounded-full border-[55px] border-[#48b5ae]/10" />
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-black tracking-[0.18em] text-[#63cec5]">選ばれる3つの理由</p>
                <h2 className="mt-4 text-3xl font-black leading-relaxed md:text-5xl">通いやすさも、<br />説明の分かりやすさも。</h2>
              </div>
              <p className="max-w-md text-sm leading-8 text-white/65">患者さんが「ここなら相談できる」と判断するために必要な情報を、先回りしてお伝えします。</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                ["01", "現在地を見える化", "姿勢写真や動作確認を用いながら、身体の状態を目で見て分かるようにご説明します。"],
                ["02", "予約時間を守る", "予約優先制で待ち時間を抑え、仕事帰りや予定の前後にも通いやすくしています。"],
                ["03", "セルフケアまで支援", "施術だけで終わらず、日常生活で気をつける動作や簡単なケアを共有します。"],
              ].map(([number, title, body], index) => (
                <article key={number} className="sample-dark-card relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.07] p-7 backdrop-blur">
                  <span className={`absolute -right-5 -top-10 text-[8rem] font-black leading-none ${index === 1 ? "text-[#ef6f51]/10" : "text-[#48b5ae]/10"}`}>{number}</span>
                  <span className={`relative inline-flex rounded-full px-3 py-1 text-[10px] font-black ${index === 1 ? "bg-[#ef6f51] text-white" : "bg-[#48b5ae] text-[#0d2740]"}`}>POINT {number}</span>
                  <h3 className="relative mt-7 text-xl font-black">{title}</h3>
                  <p className="relative mt-4 text-sm leading-7 text-white/65">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="flow" className="scroll-mt-24 bg-[#f2f8f9] px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-black tracking-[0.18em] text-[#24737a]">初めての方へ</p>
              <h2 className="mt-4 text-3xl font-black text-[#0d2740] md:text-5xl">ご予約から施術まで</h2>
              <p className="mt-5 text-sm leading-8 text-[#5d7883]">予約後の動きまで事前に分かるから、初めてでも迷いません。</p>
            </div>
            <div className="relative mt-14">
              <span className="absolute bottom-0 left-7 top-0 w-1 rounded-full bg-[#c7dfe1] md:bottom-auto md:left-0 md:right-0 md:top-7 md:h-1 md:w-auto" />
              <div className="grid gap-5 md:grid-cols-4">
                {[
                  ["01", "ご予約", "LINEまたはWebで日時を選択"],
                  ["02", "ご来院", "受付でお名前をお伝えください"],
                  ["03", "確認・説明", "状態を確認し施術方針を共有"],
                  ["04", "施術・会計", "セルフケアと次回目安をご案内"],
                ].map(([number, title, body], index) => (
                  <article key={number} className="relative ml-16 rounded-2xl border border-[#cfe0e3] bg-white p-6 shadow-[0_12px_30px_rgba(13,39,64,.06)] md:ml-0 md:pt-14">
                    <span className={`absolute -left-[4.1rem] top-0 z-10 grid h-14 w-14 place-items-center rounded-2xl border-4 border-[#f2f8f9] text-xs font-black text-white md:-top-1 md:left-1/2 md:-translate-x-1/2 ${index === 3 ? "bg-[#ef6f51]" : "bg-[#24737a]"}`}>{number}</span>
                    <h3 className="text-lg font-black text-[#0d2740]">{title}</h3>
                    <p className="mt-3 text-xs leading-6 text-[#68818b]">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="access" className="scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border-2 border-[#d7e4e9] bg-white shadow-[0_24px_60px_rgba(13,39,64,.08)] lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-[#dcebed] p-7 md:p-10">
              <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(#a9c9cc_1px,transparent_1px),linear-gradient(90deg,#a9c9cc_1px,transparent_1px)] [background-size:44px_44px]" />
              <div className="absolute left-[22%] top-[18%] h-[72%] w-2 rotate-[24deg] rounded-full bg-white/80" />
              <div className="absolute left-[12%] top-[44%] h-2 w-[75%] -rotate-[8deg] rounded-full bg-white/80" />
              <span className="sample-map-pin absolute left-[56%] top-[38%] grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[50%_50%_50%_0] -rotate-45 bg-[#ef6f51] shadow-[0_14px_30px_rgba(239,111,81,.3)]">
                <span className="h-7 w-7 rounded-full bg-white" />
              </span>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white bg-white/90 p-4 shadow-lg backdrop-blur">
                <p className="text-sm font-black text-[#0d2740]">〇〇駅 東口から徒歩3分</p>
                <p className="mt-1 text-xs text-[#68818b]">大阪府〇〇市〇〇町2-4-6／提携駐車場あり</p>
              </div>
            </div>
            <div className="p-7 md:p-10">
              <p className="text-xs font-black tracking-[0.18em] text-[#24737a]">受付時間・アクセス</p>
              <h2 className="mt-4 text-3xl font-black text-[#0d2740]">平日は夜8時まで受付</h2>
              <div className="mt-8 overflow-hidden rounded-2xl border border-[#d7e4e9]">
                <div className="grid grid-cols-[1.3fr_repeat(5,.7fr)] bg-[#0d2740] px-3 py-3 text-center text-[10px] font-black text-white">
                  {["受付時間", "月", "火", "水", "木", "金"].map((item) => <span key={item}>{item}</span>)}
                </div>
                {[["9:00–13:00", "●", "●", "●", "●", "●"], ["15:30–20:00", "●", "●", "−", "●", "●"]].map((row) => (
                  <div key={row[0]} className="grid grid-cols-[1.3fr_repeat(5,.7fr)] border-t border-[#d7e4e9] px-3 py-4 text-center text-xs font-bold text-[#345563]">
                    {row.map((item, index) => <span key={`${row[0]}-${index}`} className={index > 0 && item === "●" ? "text-[#ef6f51]" : ""}>{item}</span>)}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-6 text-[#68818b]">土曜 9:00–15:00／休診：水曜午後・日曜・祝日</p>
              <a href="#reserve" className="mt-7 block rounded-xl bg-[#0d2740] px-6 py-4 text-center text-sm font-black text-white">地図アプリで場所を確認</a>
            </div>
          </div>
        </section>

        <section id="reserve" className="relative overflow-hidden bg-[#f6cf45] px-5 py-20 md:px-10 md:py-24">
          <span className="absolute -left-20 -top-20 h-56 w-56 rounded-full border-[38px] border-white/30" />
          <span className="absolute -bottom-28 right-8 h-72 w-72 rounded-full bg-[#ef6f51]/15" />
          <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[0.16em] text-[#744e00]">当日のご相談も受付中</p>
              <h2 className="mt-4 text-3xl font-black leading-relaxed text-[#0d2740] md:text-5xl">今の空き枠を、<br className="md:hidden" />すぐ確認できます。</h2>
              <p className="mt-4 text-sm leading-7 text-[#5b4d28]">お名前・ご希望日時・気になる症状をお送りください。</p>
            </div>
            <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-[460px]">
              <a href="#top" className="sample-conversion-pulse rounded-xl bg-[#ef6f51] px-7 py-5 text-center text-sm font-black text-white shadow-[0_12px_28px_rgba(130,65,38,.18)]">LINEで相談</a>
              <a href="#top" className="rounded-xl border-2 border-[#0d2740] bg-white px-7 py-5 text-center text-sm font-black text-[#0d2740]">Webで予約</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d2740] px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black tracking-[0.08em]">みらい整骨院</p>
            <p className="mt-2 text-xs leading-6 text-white/55">大阪府〇〇市〇〇町2-4-6<br />〇〇駅東口から徒歩3分</p>
          </div>
          <div className="text-left md:text-right">
            <Link href="/#cases" className="text-xs font-black text-[#63cec5] underline underline-offset-4">整骨院webの制作サンプル一覧へ戻る</Link>
            <p className="mt-3 text-[10px] leading-5 text-white/45">このサイトは制作サンプルです。実在の院・人物・サービスではありません。</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-2xl border border-[#b8d6d8] bg-white/95 p-2 shadow-[0_14px_40px_rgba(13,39,64,.2)] backdrop-blur md:hidden">
        <a href="#reserve" className="rounded-xl border-2 border-[#0d2740] py-3 text-center text-xs font-black text-[#0d2740]">Web予約</a>
        <a href="#reserve" className="rounded-xl bg-[#ef6f51] py-3 text-center text-xs font-black text-white">LINE相談</a>
      </div>
    </div>
  );
}
