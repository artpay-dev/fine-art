export const SITE = "https://artpay.art";
export const DEFAULT_OG_IMAGE = `${SITE}/og-image.png`;

export interface PageSeoProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  noindex?: boolean;
  image?: string;
}

export function buildMetadata({ title, description, canonical, ogType = "website", noindex, image = DEFAULT_OG_IMAGE }: PageSeoProps) {
  const url = canonical.startsWith("http") ? canonical : `${SITE}${canonical === "/" ? "/" : canonical.replace(/\/+$/, "")}`;
  return {
    title,
    description,
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true, "max-image-preview": "large" as const },
    alternates: { canonical: url },
    openGraph: {
      type: ogType as "website" | "article",
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
      siteName: "Artpay",
      locale: "it_IT",
    },
    twitter: {
      card: "summary_large_image" as const,
      site: "@Artpay",
      title,
      description,
      images: [image],
    },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}