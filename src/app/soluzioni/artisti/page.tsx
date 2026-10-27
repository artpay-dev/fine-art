import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/metadata";
import ArtistiPage from "@/views/solutions/Artisti";

const jsonLd = breadcrumbLd([{ name: "Home", path: "/" }, { name: "Artisti", path: "/soluzioni/artisti" }]);

export const metadata: Metadata = buildMetadata({
  title: "Artpay per Artisti — Vendi le Tue Opere a Rate, Incassa Subito",
  description: "Artpay FAST permette agli artisti di vendere opere a rate (fino a 84 mesi) direttamente dallo studio. Il collezionista paga a rate, tu incassi subito.",
  canonical: "/soluzioni/artisti",
  noindex: true,
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArtistiPage />
    </>
  );
}