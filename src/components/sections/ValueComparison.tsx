const values = [
  ["01", "ホームページ制作", "院の強み、施術内容、料金、アクセス、予約方法を患者目線で整理します。"],
  ["02", "予約・問い合わせ導線", "電話、メール、問い合わせフォームへ迷わず進める構成にします。"],
  ["03", "Googleマップ連携", "院までのアクセスやGoogleビジネスプロフィールへスムーズにつなげます。"],
  ["04", "基本SEO設定", "ページタイトル、説明文、見出し構造など、検索に必要な基本設定を行います。"],
  ["05", "公開後サポート", "公開して終わりではなく、1か月間の修正・運用相談に対応します。"],
];

export function ValueComparison() {
  return <section className="py-14 md:py-18 bg-[#eee8dc]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="max-w-3xl mb-8">
        <h2 className="heading-lg text-2xl md:text-4xl mb-3">低価格でも、必要なものは全て網羅。</h2>
        <p className="text-sm md:text-base text-[var(--sumi-nezumi)] leading-7">ホームページだけではありません。患者さんが院を知り、安心し、問い合わせるまでに必要なWeb環境を、整骨院・接骨院・鍼灸院・整体院に特化した視点でまとめて整えます。</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#cfc4b0]">
        {values.map(([number,title,description]) => <article key={number} className="bg-[var(--kinari)] p-4 md:p-5"><div className="flex items-center gap-3"><span className="inline-flex shrink-0 rounded-full border border-[#a88750] px-2 py-1 text-[10px] font-bold tracking-wider text-[#806334]">{number}</span><h3 className="text-base font-bold leading-snug text-[var(--sumi)] md:text-lg">{title}</h3></div><p className="mt-3 text-xs md:text-sm text-[var(--sumi-nezumi)] leading-6">{description}</p></article>)}
      </div>
      <div className="mt-6 border border-[#a88750] bg-[#f7f2e8] px-5 py-5 text-center"><p className="font-serif text-lg tracking-wide md:text-2xl">これらを含んで、<span className="whitespace-nowrap">通常 <span className="line-through decoration-[#a88750] decoration-2">128,000円（税込）〜</span>のところを</span><span className="mt-2 block text-[#806334]"><strong className="text-2xl font-medium md:text-4xl">先着<span className="mx-1 inline-block font-serif text-4xl leading-none tracking-tight md:text-6xl">3</span>院限定 98,000円</strong>（税込）〜</span></p></div>
    </div>
  </section>;
}
