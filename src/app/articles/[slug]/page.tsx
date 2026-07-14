import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/common/ArticlePage";
import { articles, getArticle } from "@/content/articles";
import { siteConfig } from "@/config/site";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = getArticle(slug); if (!article) return {}; return { title: article.title, description: article.description, alternates: { canonical: `/articles/${article.slug}` }, openGraph: { title: article.title, description: article.description, type: "article", locale: "ja_JP", url: `${siteConfig.url}/articles/${article.slug}`, images: [{ url: article.image, alt: article.imageAlt }] } }; }
export default async function ArticleRoute({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = getArticle(slug); if (!article) notFound(); const data = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, image: `${siteConfig.url}${article.image}`, datePublished: "2026-07-15", dateModified: "2026-07-15", inLanguage: "ja", author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url }, publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url }, mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}` }; return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} /><ArticlePage article={article} /></>; }
