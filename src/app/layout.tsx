import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://artpay.art"),
  title: { default: "Artpay", template: "%s" },
  description: "Pagamento rateale per il mercato dell'arte.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}