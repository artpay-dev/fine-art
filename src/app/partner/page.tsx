import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/metadata";
import PartnerPage from "@/views/Partner";

const jsonLd = breadcrumbLd([{ name: "Home", path: "/" }, { name: "Partner finanziari", path: "/partner" }]);

export const metadata: Metadata = buildMetadata({
  title: "Partner finanziari Artpay, Santander e Klarna",
  description: "Artpay integra Santander, Klarna e altri partner finanziari in un'unica interfaccia per il mercato dell'arte, progettata per la conformità CCD2.",
  canonical: "/partner",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PartnerPage />
    </>
  );
}