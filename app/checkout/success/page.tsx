import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClearCartOnLoad from "@/components/cart/ClearCartOnLoad";

export const metadata: Metadata = {
  title: "Order received | My Little Gaia",
};

export default function CheckoutSuccessPage() {
  return (
    <>
      <Header />
      <ClearCartOnLoad />
      <main className="min-h-screen bg-ivory">
        <section className="container-x py-20">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-forest/10 bg-white/65 p-10 text-center shadow-soft">
            <span className="eyebrow">Thank you</span>
            <h1 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">Your order has been received</h1>
            <p className="mt-5 text-sm leading-7 text-forest/65">
              This confirms the checkout flow is working. When Stripe keys are connected, this page will appear after a successful payment.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/shop" className="btn-primary">
                Continue Shopping
              </Link>
              <Link href="/crystal-library" className="btn-secondary bg-white/70">
                Explore the Library
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
