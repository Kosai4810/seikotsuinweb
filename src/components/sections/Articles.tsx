import Image from "next/image";
import Link from "next/link";
import { articles } from "@/content/articles";

export function Articles() { return <section className="bg-[#f8f7f4] py-24 lg:py-32"><div className="max-w-7xl mx-auto px-6 lg:px-12">
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"><div><h2 className="font-serif text-3xl lg:text-4xl leading-relaxed text-[var(--sumi)]">開業とWebの、<br />分かりにくいところを整理。</h2></div><Link href="/articles" className="text-sm text-[var(--sumi-nezumi)] underline underline-offset-4">読みもの一覧を見る</Link></div>
  <div className="mt-12 grid gap-8 lg:grid-cols-3">{articles.map((article) => <article key={article.slug} className="group"><Link href={`/articles/${article.slug}`}><div className="relative aspect-[4/3] overflow-hidden bg-[#e9e5de]"><Image src={article.image} alt={article.imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" /></div><p className="mt-5 text-xs text-[#8a7155]">{article.category}</p><h3 className="mt-3 font-serif text-xl leading-8 text-[var(--sumi)]">{article.title}</h3><p className="mt-3 text-sm leading-7 text-[var(--sumi-nezumi)] line-clamp-3">{article.lead}</p></Link></article>)}</div>
</div></section>; }
