import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartPageClient from "@/components/cart/CartPageClient";

export const metadata: Metadata = {
  title: "Basket | My Little Gaia",
  description: "Review your My Little Gaia basket before checkout.",
};

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <CartPageClient />
      </main>
      <Footer />
    </>
  );
}
