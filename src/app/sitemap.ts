import type { MetadataRoute } from "next";

const SITE = "https://artpay.art";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/soluzioni/case-daste", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/soluzioni/gallerie", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/soluzioni/fiere", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/soluzioni/piattaforme", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/come-funziona", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/partner", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/chi-siamo", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/demo", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contatti", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${SITE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}