import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { articles } from "@/content/articles";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/seikotsuin-homepage", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/seikotsuin-opening", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/company", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/articles", priority: 0.8, changeFrequency: "weekly" as const },
    ...articles.map((article) => ({ path: `/articles/${article.slug}`, priority: 0.75, changeFrequency: "monthly" as const })),
  ];
  return pages.map(({ path, ...page }) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), ...page }));
}
