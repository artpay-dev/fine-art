// Remember: when routes change, regenerate this sitemap and resubmit it in Google Search Console.
// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://artpay.art";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  /** Hand-written date of the last content change (YYYY-MM-DD), never the build date. */
  lastmod?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: "2026-09-29" },
  { path: "/soluzioni/case-daste", changefreq: "monthly", priority: "0.9", lastmod: "2026-09-29" },
  { path: "/soluzioni/fiere", changefreq: "monthly", priority: "0.9", lastmod: "2026-09-29" },
  { path: "/soluzioni/piattaforme", changefreq: "monthly", priority: "0.9", lastmod: "2026-09-29" },
  { path: "/soluzioni/gallerie", changefreq: "monthly", priority: "0.9", lastmod: "2026-09-29" },
  { path: "/come-funziona", changefreq: "monthly", priority: "0.8", lastmod: "2026-09-29" },
  { path: "/partner", changefreq: "monthly", priority: "0.7", lastmod: "2026-09-29" },
  { path: "/chi-siamo", changefreq: "monthly", priority: "0.6", lastmod: "2026-09-29" },
  { path: "/faq", changefreq: "monthly", priority: "0.7", lastmod: "2026-09-29" },
  { path: "/demo", changefreq: "yearly", priority: "0.8", lastmod: "2026-09-29" },
  { path: "/contatti", changefreq: "yearly", priority: "0.5" },
];

function generateSitemap(items: SitemapEntry[]) {
  const urls = items.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
