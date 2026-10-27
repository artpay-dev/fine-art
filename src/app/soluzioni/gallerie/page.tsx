import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/metadata";
import GalleriePage from "@/views/solutions/Gallerie";

const jsonLd = breadcrumbLd([{ name: "Home", path: "/" }, { name: "Gallerie", path: "/soluzioni/gallerie" }]);

export const metadata: Metadata = buildMetadata({
  title: "Artpay per gallerie, vendi a rate e incassi subito",
  description: "Artpay FAST porta il pagamento rateale fino a 84 mesi nel flusso di vendita della galleria. Il collezionista paga a rate e la galleria incassa subito.",
  canonical: "/soluzioni/gallerie",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GalleriePage />
    </>
  );
}