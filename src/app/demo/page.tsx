import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd } from "@/lib/metadata";
import DemoPage from "@/views/Demo";

const jsonLd = breadcrumbLd([{ name: "Home", path: "/" }, { name: "Demo", path: "/demo" }]);

export const metadata: Metadata = buildMetadata({
  title: "Richiedi una demo Artpay per la tua casa d'asta",
  description: "Raccontaci in due righe la tua casa d'asta. Il team Artpay ti ricontatta entro 24 ore con una demo dedicata.",
  canonical: "/demo",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DemoPage />
    </>
  );
}