import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/metadata";
import ChiSiamoPage from "@/views/ChiSiamo";

const jsonLd = breadcrumbLd([{ name: "Home", path: "/" }, { name: "Chi siamo", path: "/chi-siamo" }]);

export const metadata: Metadata = buildMetadata({
  title: "Chi siamo, il team di Artpay",
  description: "Artpay è una startup fintech italiana fondata a Cagliari e costruisce il pagamento rateale per le case d'asta.",
  canonical: "/chi-siamo",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChiSiamoPage />
    </>
  );
}