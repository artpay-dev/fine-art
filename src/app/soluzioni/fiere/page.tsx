import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/metadata";
import FierePage from "@/views/solutions/Fiere";

const jsonLd = breadcrumbLd([{ name: "Home", path: "/" }, { name: "Fiere", path: "/soluzioni/fiere" }]);

export const metadata: Metadata = buildMetadata({
  title: "Artpay per fiere d'arte, checkout digitale e rate in stand",
  description: "Artpay trasforma lo stand in un punto di checkout digitale con link di pagamento, QR e finanziamento rateale fino a 84 mesi. Technology partner ufficiale di The Phair 2026.",
  canonical: "/soluzioni/fiere",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FierePage />
    </>
  );
}