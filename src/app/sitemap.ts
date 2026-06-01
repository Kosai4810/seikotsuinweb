import type { MetadataRoute } from "next";
import { areaPages, industryPages, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/pricing",
    "/industries",
    "/areas",
    "/flow",
    "/faq",
    "/contact",
    "/columns",
    "/legal/tokushoho",
    "/legal/privacy",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...industryPages.map((page) => ({
      url: `${siteConfig.url}/industries/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...areaPages.map((page) => ({
      url: `${siteConfig.url}/areas/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
