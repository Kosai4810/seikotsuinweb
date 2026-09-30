const links = [
  ["サービス", "#services"],
  ["料金", "#pricing"],
  ["無料診断", "#contact-form"],
  ["制作の流れ", "#flow"],
  ["よくある質問", "#faq"],
] as const;

export function PageGuide() {
  return (
    <nav aria-label="ページ内ナビゲーション" className="border-b border-[#d8cdb9] bg-[#FFF7EC]">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 [scrollbar-width:none] lg:justify-center lg:px-12 [&::-webkit-scrollbar]:hidden">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="shrink-0 rounded-full border border-[#cdbd9f] bg-paper/70 px-4 py-2 text-xs font-medium tracking-wide text-[#6B543A] transition-colors hover:border-[#6B543A] hover:bg-paper">
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
