import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd, SITE } from "@/lib/metadata";
import artpayLogo from "@/assets/artpay-logo.png.asset.json";
import IndexPage from "@/views/Index";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Artpay",
    legalName: "Artpay S.r.l.",
    url: `${SITE}/`,
    logo: `${SITE}${artpayLogo.url}`,
    email: "hello@artpay.art",
    areaServed: "IT",
    description: "Pagamento rateale per le case d'asta e per il mercato dell'arte.",
    address: { "@type": "PostalAddress", streetAddress: "Via Carloforte 60", addressLocality: "Cagliari", postalCode: "09123", addressCountry: "IT" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Artpay",
    url: `${SITE}/`,
  },
  breadcrumbLd([{ name: "Home", path: "/" }]),
];

export const metadata: Metadata = buildMetadata({
  title: "Artpay, il pagamento rateale per le case d'asta",
  description: "Artpay porta finanziamento e rateizzazione nel momento dell'aggiudicazione, così il collezionista sceglie il piano e la casa d'asta incassa subito.",
  canonical: "/",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IndexPage />
    </>
  );
}