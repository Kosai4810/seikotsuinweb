import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "つむぎ鍼灸整骨院｜制作サンプル",
  description: "整骨院webが制作する、上品さと安心感を重視した架空の鍼灸整骨院サイトです。",
  robots: { index: false, follow: false },
  alternates: { canonical: "/samples/tsumugi" },
};

const concerns = [
  ["肩・首のつらさ", "デスクワークや日々の家事による負担を、身体全体のバランスから確認します。"],
  ["腰まわりの不調", "生活動作や姿勢まで丁寧に伺い、無理のない施術計画をご案内します。"],
  ["産後の身体ケア", "女性施術者が在籍。産後の身体のお悩みも落ち着いてご相談いただけます。"],
] as const;

const firstVisit = [
  ["01", "ご予約", "LINE・Web・お電話から、ご都合のよい方法でご連絡ください。"],
  ["02", "カウンセリング", "現在のお悩みや生活習慣を、急がず丁寧にお伺いします。"],
  ["03", "状態の確認", "身体の動きや姿勢を確認し、施術方針を分かりやすくご説明します。"],
  ["04", "施術・ご案内", "状態に合わせた施術後、ご自宅でできるケアもお伝えします。"],
] as const;

export default function TsumugiSamplePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f5ed] text-[#29302b]">
      <div className="bg-[#35483d] px-4 py-2 text-center text-[11px] font-bold tracking-[0.14em] text-white md:text-xs">
        整骨院web 制作サンプルサイト｜院名・内容・料金はすべて架空です
      </div>

      <header className="sticky top-0 z-50 border-b border-[#d8cfbc]/80 bg-[#fffdf8]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative grid h-10 w-10 place-items-center rounded-full border border-[#9e8c61] bg-[#f4efe3]">
              <span className="h-5 w-2.5 -rotate-[28deg] rounded-[100%_0] border border-[#728876] bg-[#dfe7db]" />
              <span className="absolute bottom-2.5 left-1/2 h-3 w-px -translate-x-1/2 bg-[#728876]" />
            </span>
            <span>
              <strong className="block text-base tracking-[0.14em] text-[#35483d] md:text-lg">つむぎ鍼灸整骨院</strong>
              <small className="block text-[9px] tracking-[0.18em] text-[#8b806c]">女性の身体に、やさしい選択を。</small>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-bold text-[#59645d] lg:flex">
            <a href="#concerns" className="transition hover:text-[#9a7844]">お悩み</a>
            <a href="#approach" className="transition hover:text-[#9a7844]">当院の考え方</a>
            <a href="#flow" className="transition hover:text-[#9a7844]">初めての方へ</a>
            <a href="#price" className="transition hover:text-[#9a7844]">施術・料金</a>
          </nav>
          <a
            href="#reserve"
            className="relative hidden overflow-hidden rounded-full border border-[#35483d] bg-[#35483d] px-6 py-2.5 text-xs font-bold tracking-wide text-white shadow-[0_10px_28px_rgba(53,72,61,0.18)] md:inline-flex"
          >
            <span className="sample-shine absolute inset-y-0 w-12 -skew-x-12 bg-white/25" />
            LINE・Web予約
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden border-b border-[#d8cfbc]">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_12%,rgba(195,205,181,.46),transparent_34%),linear-gradient(120deg,#fffdf8_0%,#f8f5ed_55%,#eee8db_100%)]" />
          <span className="absolute -left-20 top-16 -z-10 h-64 w-64 rounded-full border border-[#b8aa87]/25" />
          <span className="absolute -left-7 top-29 -z-10 h-64 w-64 rounded-full border border-[#b8aa87]/15" />
          <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-10 px-5 py-14 md:px-10 lg:grid-cols-[.88fr_1.12fr] lg:py-20">
            <div className="relative z-10">
              <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#8b7048]">
                <span className="h-px w-10 bg-[#a88e65]" />
                女性施術者在籍・完全予約優先
              </p>
              <h1 className="text-[clamp(2.25rem,4.4vw,4.6rem)] font-bold leading-[1.33] tracking-[0.035em] text-[#35483d]">
                わたしの身体と、
                <br />
                <span className="relative inline-block text-[#8b7048]">
                  丁寧に向き合う。
                  <svg className="absolute -bottom-2 left-0 h-3 w-full text-[#c5ae7d]/65" viewBox="0 0 360 16" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2 10C70 2 141 14 214 7c52-5 93-3 144 1" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-9 max-w-xl text-sm leading-8 text-[#59645d] md:text-base">
                つらい場所だけを見るのではなく、暮らしや姿勢まで伺いながら。
                不安を置き去りにしない説明と、無理のない施術を大切にしています。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#reserve" className="sample-soft-button rounded-full bg-[#35483d] px-8 py-4 text-center text-sm font-bold text-white shadow-[0_14px_35px_rgba(53,72,61,.2)]">
                  空き状況を確認する
                </a>
                <a href="#flow" className="rounded-full border border-[#9e8c61] bg-white/70 px-8 py-4 text-center text-sm font-bold text-[#655942] backdrop-blur">
                  初めての方へ
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-xs font-bold text-[#59645d]">
                {["土曜も受付", "女性施術者在籍", "駐車場2台"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-[#dfe7db] text-[10px] text-[#35483d]">✓</span>{item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[430px] lg:min-h-[530px]">
              <span className="sample-orbit absolute left-[8%] top-[9%] h-[72%] w-[72%] rounded-full border border-[#b8aa87]/40" />
              <span className="sample-orbit sample-orbit-delay absolute left-[14%] top-[15%] h-[60%] w-[60%] rounded-full border border-[#738778]/25" />
              <Image
                src="/demo-calm-consultation-v2.png"
                alt="女性施術者が患者さんのお悩みを丁寧に伺う鉛筆線画イラスト"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="sample-soft-float object-contain object-center"
              />
              <div className="sample-card-float absolute bottom-2 right-2 z-10 w-[210px] rounded-2xl border border-[#d5c7a7] bg-[#fffdf8]/94 p-4 shadow-[0_20px_50px_rgba(77,65,39,.14)] backdrop-blur md:bottom-8 md:right-6 md:w-[250px]">
                <p className="text-[10px] font-bold tracking-[0.16em] text-[#9a7844]">本日の受付</p>
                <div className="mt-2 flex items-end justify-between">
                  <p className="text-lg font-bold text-[#35483d]">18:30まで</p>
                  <span className="rounded-full bg-[#e7eee3] px-2.5 py-1 text-[10px] font-bold text-[#49624e]">相談枠あり</span>
                </div>
                <div className="mt-3 h-px bg-[#ded5c4]" />
                <p className="mt-3 text-[11px] leading-5 text-[#6b6a61]">迷われている段階でも、お気軽にご相談ください。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#35483d] text-white">
          <div className="mx-auto grid max-w-7xl gap-px bg-white/15 md:grid-cols-3">
            {[
              ["01", "話しやすい空気", "小さな違和感も、言葉にできる時間を。"],
              ["02", "分かりやすい説明", "身体の状態と施術方針を丁寧に共有。"],
              ["03", "暮らしまで考える", "毎日の動作に合わせたセルフケアも。"],
            ].map(([number, title, body]) => (
              <div key={number} className="bg-[#35483d] px-7 py-8 md:px-10">
                <span className="text-xs font-bold tracking-[0.2em] text-[#d1ba87]">{number}</span>
                <h2 className="mt-3 text-lg font-bold tracking-wide">{title}</h2>
                <p className="mt-2 text-xs leading-6 text-white/70">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="concerns" className="scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold tracking-[0.22em] text-[#9a7844]">身体のお悩み</p>
              <h2 className="mt-4 text-3xl font-bold leading-relaxed tracking-wide text-[#35483d] md:text-4xl">こんなお悩みを、ご相談ください。</h2>
              <p className="mt-4 text-sm leading-8 text-[#69716c]">「まだ我慢できるから」と抱え込まず、今の状態を一緒に整理することから始めます。</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {concerns.map(([title, description], index) => (
                <article key={title} className="group relative overflow-hidden rounded-[1.75rem] border border-[#d8cfbc] bg-[#fffdf8] p-7 shadow-[0_18px_45px_rgba(77,65,39,.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(77,65,39,.11)]">
                  <span className="absolute -right-8 -top-10 text-[7rem] font-bold leading-none text-[#f1ebde]">0{index + 1}</span>
                  <div className="relative">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-[#b7aa8b] bg-[#f4efe3] text-lg text-[#738778]">{["首", "腰", "産"][index]}</span>
                    <h3 className="mt-6 text-xl font-bold text-[#35483d]">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#69716c]">{description}</p>
                    <span className="mt-6 inline-flex items-center gap-3 text-xs font-bold text-[#9a7844]">
                      詳しく見る <span className="h-px w-8 bg-[#9a7844] transition-all group-hover:w-12" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="relative overflow-hidden bg-[#e9eee6] px-5 py-20 md:px-10 md:py-28">
          <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(#819080_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-[12rem_12rem_1.5rem_1.5rem] border-[10px] border-white/65 bg-[#dce6d9] shadow-[0_25px_70px_rgba(53,72,61,.13)]">
              <Image
                src="/demo-calm-consultation-v2.png"
                alt=""
                fill
                unoptimized
                sizes="430px"
                className="object-cover object-[43%_center] scale-[1.55]"
              />
              <span className="absolute inset-4 rounded-[11rem_11rem_1rem_1rem] border border-white/70" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-[#8b7048]">当院の考え方</p>
              <h2 className="mt-5 text-3xl font-bold leading-[1.65] tracking-wide text-[#35483d] md:text-[2.65rem]">
                説明があるから、
                <br />
                安心して身体を任せられる。
              </h2>
              <p className="mt-7 text-sm leading-8 text-[#59645d] md:text-base">
                何をするのか分からないまま施術を進めることはありません。今の状態、考えられる負担、これからの方針を、専門用語に頼らずお伝えします。
              </p>
              <blockquote className="mt-8 border-l-2 border-[#a78c5e] pl-6 text-lg font-bold leading-9 text-[#35483d]">
                「ここなら話せそう」と思っていただけることも、施術の大切な一歩だと考えています。
              </blockquote>
              <dl className="mt-9 grid grid-cols-2 gap-3">
                {[["施術時間", "約50分"], ["予約方法", "LINE・Web・電話"], ["受付時間", "平日 19:30まで"], ["休診日", "水曜午後・日祝"]].map(([dt, dd]) => (
                  <div key={dt} className="rounded-2xl border border-white/80 bg-white/55 p-4 backdrop-blur">
                    <dt className="text-[10px] font-bold tracking-wider text-[#8b806c]">{dt}</dt>
                    <dd className="mt-1 text-sm font-bold text-[#35483d]">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="flow" className="scroll-mt-24 bg-[#fffdf8] px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold tracking-[0.22em] text-[#9a7844]">初めての方へ</p>
                <h2 className="mt-4 text-3xl font-bold leading-relaxed text-[#35483d] md:text-4xl">ご来院から施術までの流れ</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#69716c]">初回はお話と状態確認に時間を取り、施術内容にご納得いただいてから進めます。</p>
            </div>
            <div className="relative mt-12 grid gap-4 lg:grid-cols-4">
              <span className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-[#cabd9f] lg:block" />
              {firstVisit.map(([number, title, description]) => (
                <article key={number} className="relative rounded-3xl border border-[#ded5c4] bg-[#f8f5ed] p-6">
                  <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-[#ad9567] bg-[#fffdf8] text-sm font-bold text-[#8b7048] shadow-[0_8px_22px_rgba(90,75,43,.08)]">{number}</span>
                  <h3 className="mt-6 text-lg font-bold text-[#35483d]">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#69716c]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="price" className="scroll-mt-24 bg-[#35483d] px-5 py-20 text-white md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-[#d1ba87]">施術・料金</p>
              <h2 className="mt-5 text-3xl font-bold leading-relaxed md:text-4xl">料金も、受ける前に<br />分かりやすく。</h2>
              <p className="mt-5 text-sm leading-8 text-white/70">状態を確認したうえで、施術内容と料金をご説明します。不要な回数券を無理におすすめすることはありません。</p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/25 bg-white/10 shadow-[0_30px_80px_rgba(22,32,26,.22)] backdrop-blur">
              <div className="border-b border-white/15 px-6 py-5 md:px-8">
                <p className="text-xs font-bold tracking-[0.16em] text-[#d1ba87]">初めての方</p>
              </div>
              <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
                <div>
                  <h3 className="text-xl font-bold">カウンセリング・状態確認・施術</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">所要時間の目安：約70分</p>
                </div>
                <p className="text-right">
                  <span className="mr-1 text-sm">税込</span>
                  <strong className="text-4xl tracking-tight text-[#f0dcae]">5,500</strong>
                  <span className="ml-1 text-sm">円</span>
                </p>
              </div>
              <div className="grid border-t border-white/15 sm:grid-cols-2">
                {[["一般施術", "4,400円"], ["鍼灸施術", "5,500円"]].map(([name, price], index) => (
                  <div key={name} className={`flex items-center justify-between px-6 py-5 md:px-8 ${index === 0 ? "border-b border-white/15 sm:border-b-0 sm:border-r" : ""}`}>
                    <span className="text-sm font-bold">{name}</span>
                    <strong className="text-lg text-[#f0dcae]">{price}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reserve" className="relative isolate overflow-hidden bg-[#f8f5ed] px-5 py-20 text-center md:px-10 md:py-28">
          <span className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c7b997]/35" />
          <span className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c7b997]/20" />
          <p className="text-xs font-bold tracking-[0.22em] text-[#9a7844]">ご予約・ご相談</p>
          <h2 className="mt-5 text-3xl font-bold leading-relaxed text-[#35483d] md:text-5xl">小さな違和感も、<br className="md:hidden" />お気軽にお話しください。</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#69716c]">ご相談内容を確認後、受付時間内にスタッフよりご返信いたします。</p>
          <div className="mx-auto mt-9 grid max-w-2xl gap-4 sm:grid-cols-2">
            <a href="#top" className="sample-soft-button rounded-full bg-[#35483d] px-8 py-4 text-sm font-bold text-white">LINEで相談する</a>
            <a href="#top" className="rounded-full border border-[#9e8c61] bg-[#fffdf8] px-8 py-4 text-sm font-bold text-[#655942]">Web予約へ進む</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d8cfbc] bg-[#fffdf8] px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold tracking-[0.14em] text-[#35483d]">つむぎ鍼灸整骨院</p>
            <p className="mt-2 text-xs leading-6 text-[#7b7e78]">〒000-0000 大阪府〇〇市〇〇町1-2-3<br />平日 9:00–19:30／土曜 9:00–16:00</p>
          </div>
          <div className="text-left md:text-right">
            <Link href="/#cases" className="text-xs font-bold text-[#8b7048] underline underline-offset-4">整骨院webの制作サンプル一覧へ戻る</Link>
            <p className="mt-3 text-[10px] leading-5 text-[#888]">このサイトは制作サンプルです。実在の院・人物・サービスではありません。</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-2xl border border-[#d8cfbc] bg-[#fffdf8]/95 p-2 shadow-[0_14px_40px_rgba(42,52,45,.18)] backdrop-blur md:hidden">
        <a href="#reserve" className="rounded-xl border border-[#9e8c61] py-3 text-center text-xs font-bold text-[#655942]">Web予約</a>
        <a href="#reserve" className="rounded-xl bg-[#35483d] py-3 text-center text-xs font-bold text-white">LINE相談</a>
      </div>
    </div>
  );
}
