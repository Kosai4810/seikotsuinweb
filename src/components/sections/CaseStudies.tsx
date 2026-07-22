import { SectionLabel } from "@/components/ui/SectionLabel";

const caseSummaries = [
  {
    label: "A",
    title: "高級LP風",
    catch: "院の世界観・信頼感を丁寧に伝えるサイト例",
    description: "写真、余白、料金、初回の流れを上品に整理。価格訴求よりも「安心して相談できる空気」を優先した見せ方です。",
    points: ["大きなメインビジュアル", "症状別ページ・料金表", "スマホ予約導線"],
  },
  {
    label: "B",
    title: "Before / After風",
    catch: "古いHPを、予約につながる構成へ整理する例",
    description: "情報が散らばったページを、患者さんが知りたい順番に再設計。改善前後の差が一目で伝わります。",
    points: ["料金・場所・予約を上部へ", "古い印象を清潔に刷新", "CTAの優先順位を整理"],
  },
  {
    label: "C",
    title: "患者導線風",
    catch: "GoogleマップからLINE相談までを一本化する例",
    description: "検索・比較・相談・予約を分断せず、患者さんが迷わず進める導線として見せます。",
    points: ["Googleマップ", "ホームページ比較", "LINE・Web予約"],
  },
] as const;

function BrowserChrome({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-[#d8c8aa] bg-white shadow-[0_22px_70px_rgba(83,63,30,0.13)] ${className}`}>
      <div className="flex h-8 items-center gap-1.5 border-b border-[#eadfcb] bg-[#fbf8f1] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d9b7a8]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d8c8aa]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#9fb3bd]" />
        <span className="ml-3 h-2 w-24 rounded-full bg-[#ddd2bf]" />
      </div>
      {children}
    </div>
  );
}

function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[1.4rem] border border-[#1d2430] bg-[#10151f] p-1.5 shadow-[0_24px_55px_rgba(16,24,40,0.22)] ${className}`}>
      <div className="overflow-hidden rounded-[1.05rem] bg-white">
        {children}
      </div>
    </div>
  );
}

function LuxuryPreview() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem] bg-[#f7f2e8] p-4 md:p-6">
      <div className="absolute right-6 top-8 h-40 w-40 rounded-full bg-[#d8c8aa]/45 blur-3xl" />
      <BrowserChrome className="case-luxury-main relative max-w-[620px]">
        <div className="grid min-h-[330px] md:grid-cols-[1.05fr_.95fr]">
          <div className="bg-[#fbf8f1] p-6">
            <p className="text-[10px] font-bold tracking-[.2em] text-[#806334]">信頼感重視のトップページ</p>
            <h3 className="mt-5 font-serif text-3xl leading-tight text-[var(--sumi)]">
              はじめてでも、<br />安心して相談できる整骨院へ。
            </h3>
            <p className="mt-4 max-w-xs text-xs leading-6 text-[var(--sumi-nezumi)]">
              院の考え方、施術内容、料金、初回の流れを余白を持って整理。
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["症状別ページ", "料金表", "初回の流れ", "アクセス"].map((item) => (
                <div key={item} className="rounded-xl border border-[#e4d8c2] bg-white p-3">
                  <span className="mb-2 block h-1.5 w-8 rounded-full bg-[#a88750]" />
                  <p className="text-xs font-bold text-[var(--sumi)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative bg-[linear-gradient(135deg,#eadfc9,#fff_58%,#c9b28b)] p-5">
            <div className="absolute inset-x-8 top-8 h-28 rounded-t-full bg-white/55" />
            <div className="relative mt-24 rounded-2xl bg-white/84 p-5 shadow-lg backdrop-blur">
              <p className="text-xs font-bold text-[#806334]">予約導線</p>
              <div className="mt-3 rounded-lg bg-[var(--fukai-ai)] px-4 py-3 text-center text-xs font-bold text-white">LINE・Web予約</div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-center text-[10px] font-bold">
                <span className="rounded-lg border border-[#d8c8aa] py-2">電話</span>
                <span className="rounded-lg border border-[#d8c8aa] py-2">地図</span>
              </div>
            </div>
          </div>
        </div>
      </BrowserChrome>
      <PhoneFrame className="case-phone-float absolute bottom-5 right-5 w-[128px] md:w-[150px]">
        <div className="bg-[#fbf8f1] p-4">
          <p className="text-[9px] font-bold tracking-[.16em] text-[#806334]">MOBILE</p>
          <p className="mt-2 text-sm font-bold leading-snug text-[var(--sumi)]">料金も予約もすぐ見える</p>
        </div>
        <div className="space-y-2 p-3">
          <div className="rounded-lg bg-[var(--fukai-ai)] py-2 text-center text-[10px] font-bold text-white">相談する</div>
          <div className="h-2 rounded-full bg-[#d8c8aa]" />
          <div className="h-2 w-2/3 rounded-full bg-[#d8c8aa]" />
        </div>
      </PhoneFrame>
    </div>
  );
}

function BeforeAfterPreview() {
  const beforeItems = ["お知らせ", "院長挨拶", "メニュー", "アクセス", "お問い合わせ"];
  const afterItems = ["症状別", "料金", "初回の流れ", "LINE予約"];
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem] bg-[#eef3f7] p-4 md:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <BrowserChrome className="case-before-card">
          <div className="min-h-[330px] bg-[#f2f2f2] p-5">
            <p className="inline-flex rounded-full bg-[#d8d8d8] px-3 py-1 text-[10px] font-bold text-[#666]">Before</p>
            <div className="mt-5 h-8 w-2/3 rounded bg-[#c9c9c9]" />
            <div className="mt-4 space-y-2">
              <div className="h-2 w-full rounded bg-[#d2d2d2]" />
              <div className="h-2 w-5/6 rounded bg-[#d2d2d2]" />
              <div className="h-2 w-4/5 rounded bg-[#d2d2d2]" />
            </div>
            <div className="mt-8 grid gap-2">
              {beforeItems.map((item) => (
                <div key={item} className="rounded border border-[#d0d0d0] bg-white px-3 py-2 text-xs text-[#777]">{item}</div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-[#777]">情報はあるが、どこから相談すればよいか分かりにくい状態。</p>
          </div>
        </BrowserChrome>
        <BrowserChrome className="case-after-card">
          <div className="min-h-[330px] bg-[#fbf8f1] p-5">
            <p className="inline-flex rounded-full bg-[var(--fukai-ai)] px-3 py-1 text-[10px] font-bold text-white">After</p>
            <h3 className="mt-5 font-serif text-2xl leading-tight text-[var(--sumi)]">予約につながる順番へ再設計。</h3>
            <div className="mt-5 rounded-xl bg-white p-4 shadow-sm">
              <p className="text-xs font-bold text-[#806334]">最初に見せる情報</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {afterItems.map((item) => (
                  <div key={item} className="rounded-lg bg-[#f7f2e8] px-3 py-2 text-xs font-bold text-[var(--sumi)]">{item}</div>
                ))}
              </div>
            </div>
            <div className="case-cta-glow mt-5 rounded-xl bg-[var(--fukai-ai)] px-4 py-3 text-center text-sm font-bold text-white">無料相談・LINE予約へ</div>
            <p className="mt-5 text-xs leading-5 text-[var(--sumi-nezumi)]">料金、初回の流れ、予約方法を先に見せて、不安を減らします。</p>
          </div>
        </BrowserChrome>
      </div>
    </div>
  );
}

function PatientFlowPreview() {
  const flow = [
    ["01", "Googleマップ", "近くの院を探す"],
    ["02", "ホームページ", "料金・症状を比較"],
    ["03", "LINE相談", "不安を質問"],
    ["04", "来院予約", "迷わず予約へ"],
  ] as const;
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem] bg-[#f7f5f0] p-4 md:p-6">
      <div className="absolute left-1/2 top-16 hidden h-[64%] w-px -translate-x-1/2 bg-[#d8c8aa] md:block" />
      <div className="grid gap-4 md:grid-cols-[.82fr_1.18fr] md:items-center">
        <div className="rounded-2xl border border-[#d8c8aa] bg-white p-5 shadow-sm">
          <p className="text-[10px] font-bold tracking-[.18em] text-[#806334]">PATIENT ROUTE</p>
          <h3 className="mt-4 font-serif text-2xl leading-tight text-[var(--sumi)]">
            患者さんが<br />相談するまでの流れを設計。
          </h3>
          <p className="mt-4 text-xs leading-6 text-[var(--sumi-nezumi)]">
            地図で見つけた後、HPで安心し、LINEやフォームで相談できる状態にします。
          </p>
        </div>
        <div className="relative space-y-3">
          {flow.map(([number, title, description], index) => (
            <div key={number} className={`case-route-node relative z-10 flex items-center gap-3 rounded-2xl border border-[#d8c8aa] bg-white/95 p-4 shadow-sm ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`} style={{ animationDelay: `${index * 0.2}s` }}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--fukai-ai)] text-xs font-bold text-white">{number}</span>
              <div>
                <p className="text-base font-bold leading-snug text-[var(--sumi)]">{title}</p>
                <p className="mt-1 text-xs text-[var(--sumi-nezumi)]">{description}</p>
              </div>
            </div>
          ))}
          <div className="case-route-dot absolute left-5 top-6 z-20 h-3 w-3 rounded-full bg-[#a88750] shadow-[0_0_0_8px_rgba(168,135,80,0.16)] md:left-1/2 md:-translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}

const previews = [LuxuryPreview, BeforeAfterPreview, PatientFlowPreview] as const;

export function CaseStudies() {
  return (
    <section id="cases" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionLabel number="03" label="制作事例" />
        <div className="mb-10 max-w-4xl">
          <h2 className="heading-lg mb-4 text-2xl text-[var(--sumi)] md:text-3xl">
            制作イメージで、仕上がりの方向性を見せます。
          </h2>
          <p className="text-sm leading-7 text-[var(--sumi-nezumi)] md:text-base">
            下記は実在の導入実績ではなく、整骨院webで制作できる方向性を示す「制作イメージ・デモサイト」です。院の状況に合わせて、見せ方や導線を変えて設計します。
          </p>
        </div>

        <div className="space-y-8">
          {caseSummaries.map((item, index) => {
            const Preview = previews[index];
            return (
              <article key={item.label} className="overflow-hidden border-2 border-[#d8c8aa] bg-[#fbf8f1] shadow-[0_18px_58px_rgba(83,63,30,0.08)]">
                <div className="grid gap-0 lg:grid-cols-[0.9fr_1.55fr]">
                  <div className="order-2 flex flex-col justify-between border-t border-[#d8c8aa] p-6 md:p-8 lg:order-1 lg:border-r lg:border-t-0">
                    <div>
                      <span className="inline-flex bg-white px-3 py-1 text-[11px] font-bold tracking-wide text-[#806334]">制作イメージ {item.label}</span>
                      <h3 className="mt-5 font-serif text-3xl leading-tight text-[var(--sumi)] md:text-4xl">{item.title}</h3>
                      <p className="mt-4 text-base font-bold leading-8 text-[var(--sumi)]">{item.catch}</p>
                      <p className="mt-4 text-sm leading-7 text-[var(--sumi-nezumi)]">{item.description}</p>
                      <ul className="mt-6 space-y-2">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-2 text-sm font-bold leading-6 text-[var(--sumi)]">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a88750]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-7 border-l border-[#a88750] pl-4 text-xs leading-6 text-[var(--nibi)]">
                      ※デモ表現です。実在の導入実績・口コミ・成果保証ではありません。
                    </p>
                  </div>
                  <div className="order-1 p-4 md:p-6 lg:order-2">
                    <Preview />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
