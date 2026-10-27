import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/metadata";
import PiattaformePage from "@/views/solutions/Piattaforme";

const jsonLd = breadcrumbLd([{ name: "Home", path: "/" }, { name: "E-commerce arte e collectibles", path: "/soluzioni/piattaforme" }]);

export const metadata: Metadata = buildMetadata({
  title: "Artpay per e-commerce e piattaforme dell'arte, pagamenti rateali via API",
  description: "Artpay offre un'API di pagamento verticale per e-commerce, marketplace e software dell'arte e dei collectibles, con rate fino a 84 mesi e checkout integrato.",
  canonical: "/soluzioni/piattaforme",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PiattaformePage />
    </>
  );
}