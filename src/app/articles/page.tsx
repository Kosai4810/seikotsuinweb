import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { MobileCTA } from "@/components/common/MobileCTA";
import { articles } from "@/content/articles";

export const metadata: Metadata = { title: "整骨院web制作・開業・集客の読みもの", description: "整骨院web制作、整骨院開業のしかた、整骨院の集客の仕方を、ホームページ・Googleマップ・SEOの観点から分かりやすく解説します。", alternates: { canonical: "/articles" } };

export default function ArticlesPage() { return <><Header /><main className="min-h-screen bg-[#f8f7f4] pt-36 lg:pt-44 pb-24"><div className="max-w-7xl mx-auto px-6 lg:px-12">
  <h1 className="font-serif text-3xl lg:text-5xl leading-relaxed text-[var(--sumi)]">整骨院の開業とWebについて、<br className="hidden sm:block" />分かりにくいことを整理します。</h1><p className="mt-6 max-w-2xl text-base leading-8 text-[var(--sumi-nezumi)]">専門用語を並べるのではなく、院長が実際に迷いやすい順番で。開業準備やホームページ制作の判断材料をまとめています。</p>
  <div className="mt-14 lg:mt-20 grid gap-8 lg:grid-cols-3">{articles.map((article) => <article key={article.slug} className="group bg-white border border-[var(--usuzumi-line)]"><Link href={`/articles/${article.slug}`} className="block"><div className="relative aspect-[4/3] overflow-hidden bg-[#e9e5de]"><Image src={article.image} alt={article.imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" /></div><div className="p-6 lg:p-7"><div className="flex items-center gap-3 text-xs text-[var(--sumi-nezumi)]"><span>{article.category}</span><span className="h-px w-6 bg-[var(--usuzumi-line)]" /><time>{article.publishedAt}</time></div><h2 className="mt-5 font-serif text-xl leading-9 text-[var(--sumi)]">{article.title}</h2><p className="mt-4 text-sm leading-7 text-[var(--sumi-nezumi)]">{article.description}</p><span className="mt-6 inline-block text-sm text-[#765f46]">記事を読む →</span></div></Link></article>)}</div>
</div></main><Footer /><MobileCTA /></>; }
