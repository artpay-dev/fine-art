import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/metadata";
import AccediPage from "@/views/Accedi";

const jsonLd = breadcrumbLd([{ name: "Home", path: "/" }, { name: "Accedi", path: "/accedi" }]);

export const metadata: Metadata = buildMetadata({
  title: "Accedi ad Artpay",
  description: "Area riservata ai partner Artpay attivi, tra cui case d'aste e gallerie.",
  canonical: "/accedi",
  noindex: true,
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AccediPage />
    </>
  );
}