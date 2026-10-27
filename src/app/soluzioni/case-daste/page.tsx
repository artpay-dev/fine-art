import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/metadata";
import CaseDastePage from "@/views/solutions/CaseDaste";

const jsonLd = [
  breadcrumbLd([{ name: "Home", path: "/" }, { name: "Soluzioni", path: "/soluzioni/case-daste" }, { name: "Case d'asta", path: "/soluzioni/case-daste" }]),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pagamento rateale per le case d'asta",
    provider: { "@type": "Organization", name: "Artpay", url: "https://artpay.art/" },
    areaServed: "IT",
    audience: { "@type": "BusinessAudience", name: "Case d'asta" },
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Artpay per case d'asta, rate e incasso immediato",
  description: "Artpay FAST porta le rate nel post aggiudicazione, il collezionista finanzia lotto e commissioni e la casa d'asta incassa subito.",
  canonical: "/soluzioni/case-daste",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseDastePage />
    </>
  );
}