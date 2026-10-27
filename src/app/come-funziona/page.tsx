import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/metadata";
import ComeFunzionaPage from "@/views/ComeFunziona";

const jsonLd = breadcrumbLd([{ name: "Home", path: "/" }, { name: "Come funziona", path: "/come-funziona" }]);

export const metadata: Metadata = buildMetadata({
  title: "Come funziona Artpay FAST, pagamenti rateali in 20 secondi",
  description: "Artpay FAST genera un link di pagamento rateale in meno di 20 secondi. Il collezionista sceglie fino a 84 mesi e il merchant incassa subito.",
  canonical: "/come-funziona",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ComeFunzionaPage />
    </>
  );
}