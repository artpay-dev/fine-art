import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/metadata";
import ContattiPage from "@/views/Contatti";

const jsonLd = breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contatti", path: "/contatti" }]);

export const metadata: Metadata = buildMetadata({
  title: "Contatti Artpay",
  description: "Contatta il team Artpay a Cagliari per informazioni, partnership e demo sul pagamento rateale per le case d'asta.",
  canonical: "/contatti",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContattiPage />
    </>
  );
}