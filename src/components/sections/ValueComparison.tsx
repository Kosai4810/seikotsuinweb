const values = [
  ["01", "ホームページ制作", "院の強み、施術内容、料金、アクセス、予約方法を患者目線で整理します。"],
  ["02", "予約・問い合わせ導線", "電話、メール、問い合わせフォームへ迷わず進める構成にします。"],
  ["03", "Googleマップ連携", "院までのアクセスやGoogleビジネスプロフィールへスムーズにつなげます。"],
  ["04", "基本SEO設定", "ページタイトル、説明文、見出し構造など、検索に必要な基本設定を行います。"],
  ["05", "公開後サポート", "公開して終わりではなく、1か月間の修正・運用相談に対応します。"],
];

export function ValueComparison() {
  return <section className="py-16 md:py-20 bg-[#eee8dc]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="max-w-3xl mb-8">
        <h2 className="heading-lg text-2xl md:text-4xl mb-4">低価格でも、必要なものは省きません。</h2>
        <p className="text-sm md:text-base text-[var(--sumi-nezumi)] leading-7">単にホームページを作るだけではありません。患者さんが院を知り、安心し、問い合わせるまでに必要なWeb導線を、整骨院専門の視点でまとめて整えます。</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#cfc4b0]">
        {values.map(([number,title,description]) => <article key={number} className="bg-[var(--kinari)] p-4 md:p-5"><span className="inline-flex rounded-full border border-[#a88750] px-2 py-1 text-[10px] font-medium tracking-wider text-[#806334]">{number}</span><h3 className="font-medium text-sm md:text-base mt-3 mb-2 leading-snug">{title}</h3><p className="text-xs md:text-sm text-[var(--sumi-nezumi)] leading-6">{description}</p></article>)}
      </div>
      <div className="mt-6 border border-[#a88750] bg-[#f7f2e8] px-5 py-5 text-center"><p className="font-serif text-lg md:text-2xl tracking-wide">これらを含んで、<span className="block sm:inline text-[#806334] mt-2 sm:mt-0"><strong className="text-2xl md:text-4xl font-medium">先着3院限定 98,000円</strong>（税込）〜</span></p></div>
    </div>
  </section>;
}
