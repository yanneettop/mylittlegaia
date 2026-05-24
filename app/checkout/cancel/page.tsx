import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Checkout cancelled | My Little Gaia",
};

export default function CheckoutCancelPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <section className="container-x py-20">
          <div className="mx-auto max-w-xl rounded-[2rem] border border-forest/10 bg-white/65 p-10 text-center shadow-soft">
            <span className="eyebrow">Checkout</span>
            <h1 className="mt-4 font-serif text-4xl text-forest">Payment cancelled</h1>
            <p className="mt-5 text-sm leading-7 text-forest/65">No payment was taken. Your basket is still available in this browser.</p>
            <Link href="/cart" className="btn-primary mt-8">
              Return to Basket
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
