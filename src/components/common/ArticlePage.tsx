import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { MobileCTA } from "@/components/common/MobileCTA";
import type { Article } from "@/content/articles";

const sectionId = (index: number) => `section-${index + 1}`;

export function ArticlePage({ article }: { article: Article }) {
  return <><Header /><main className="bg-[#f8f7f4]"><article>
    <header className="pt-36 lg:pt-44 pb-14 lg:pb-20"><div className="max-w-4xl mx-auto px-6">
      <Link href="/articles" className="text-sm text-[var(--sumi-nezumi)] hover:text-[var(--sumi)]">読みもの</Link>
      <div className="mt-8 flex flex-wrap items-center gap-4 text-xs tracking-wide text-[var(--sumi-nezumi)]"><span className="border border-[var(--usuzumi-line)] px-3 py-1.5">{article.category}</span><time>{article.publishedAt}</time><span>{article.readTime}</span></div>
      <h1 className="mt-7 font-serif text-3xl leading-[1.55] lg:text-5xl lg:leading-[1.45] text-[var(--sumi)]">{article.title}</h1>
      <p className="mt-7 max-w-3xl text-base lg:text-lg leading-8 lg:leading-9 text-[var(--sumi-nezumi)]">{article.lead}</p>
    </div></header>
    <div className="max-w-6xl mx-auto px-6"><div className="relative aspect-[16/8.5] overflow-hidden bg-[#e9e5de]"><Image src={article.image} alt={article.imageAlt} fill priority sizes="(min-width: 1024px) 1152px, 100vw" className="object-cover" /></div></div>
    <div className="max-w-4xl mx-auto px-6 py-14 lg:py-20">
      <nav className="bg-white border border-[var(--usuzumi-line)] p-7 lg:p-10" aria-label="目次"><p className="font-serif text-xl text-[var(--sumi)]">この記事の内容</p><ol className="mt-5 space-y-3">{article.sections.map((section, index) => <li key={section.title} className="flex gap-3 text-sm lg:text-base leading-7 text-[var(--sumi-nezumi)]"><span className="text-[#8a7155] tabular-nums">{String(index + 1).padStart(2, "0")}</span><a href={`#${sectionId(index)}`} className="hover:text-[var(--sumi)]">{section.title}</a></li>)}</ol></nav>
      <div className="mt-16 lg:mt-24 space-y-16 lg:space-y-24">{article.sections.map((section, index) => <section key={section.title} id={sectionId(index)} className="scroll-mt-32">
        <p className="text-xs tracking-[0.2em] text-[#8a7155]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-3 font-serif text-2xl lg:text-3xl leading-relaxed text-[var(--sumi)]">{section.title}</h2>
        <div className="mt-7 space-y-6">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-[15px] lg:text-base leading-8 lg:leading-9 text-[var(--sumi-nezumi)]">{paragraph}</p>)}</div>
        {section.items && <ul className="mt-8 grid gap-3 sm:grid-cols-2">{section.items.map((item) => <li key={item} className="bg-white border border-[var(--usuzumi-line)] px-5 py-4 text-sm leading-6 text-[var(--sumi)]"><span className="mr-3 text-[#8a7155]">—</span>{item}</li>)}</ul>}
        {section.note && <p className="mt-8 border-l-2 border-[#a88d69] bg-[#efece6] px-6 py-5 text-sm leading-7 text-[var(--sumi-nezumi)]">{section.note}</p>}
      </section>)}</div>
      <aside className="mt-20 lg:mt-28 bg-[var(--sumi)] px-7 py-10 lg:px-12 lg:py-12 text-white"><h2 className="font-serif text-2xl leading-relaxed">読んだあと、院に合う形を一緒に整理できます。</h2><p className="mt-4 text-sm leading-7 text-white/65">まだ依頼内容が決まっていなくても問題ありません。必要なものと、今は要らないものから整理します。</p><div className="mt-7 flex flex-col sm:flex-row gap-3"><Link href={article.relatedHref} className="inline-flex justify-center bg-white px-6 py-4 text-sm text-[var(--sumi)] hover:bg-[#f0ede7]">{article.relatedLabel}</Link><Link href="/#contact" className="inline-flex justify-center border border-white/30 px-6 py-4 text-sm text-white hover:bg-white/10">無料HP診断を申し込む</Link></div></aside>
      <div className="mt-12 text-center"><Link href="/articles" className="text-sm text-[var(--sumi-nezumi)] underline underline-offset-4">読みもの一覧へ戻る</Link></div>
    </div>
  </article></main><Footer /><MobileCTA /></>;
}
