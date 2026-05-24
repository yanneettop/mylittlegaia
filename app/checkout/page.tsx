import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutClient from "@/components/cart/CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout | My Little Gaia",
  description: "Secure checkout for My Little Gaia crystal orders.",
};

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <CheckoutClient />
      </main>
      <Footer />
    </>
  );
}
