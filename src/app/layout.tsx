import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://artpay.art"),
  title: { default: "Artpay", template: "%s" },
  description: "Pagamento rateale per il mercato dell'arte.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
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