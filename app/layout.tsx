import type { Metadata } from "next";
import { CartProvider } from "@/components/cart/CartProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Little Gaia - Crystals, Rituals & Earthly Energy",
  description:
    "Hand-selected crystals, ritual bundles and a beginner-friendly crystal library for modern souls. Shop by intention and create calm, clarity and abundance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
