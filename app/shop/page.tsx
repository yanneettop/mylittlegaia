import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopCatalogue from "@/components/shop/ShopCatalogue";

export const metadata: Metadata = {
  title: "Shop Crystals & Ritual Kits | My Little Gaia",
  description:
    "Browse crystals, cleansing tools, jewellery and ritual kits by intention, category and crystal type.",
};

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <section className="container-x py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow">Crystal shop</span>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-forest sm:text-5xl lg:text-6xl">
              Shop crystals by intention, ritual and energy.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-forest/70 sm:text-lg">
              Explore tumbled stones, raw crystals, towers, cleansing tools and curated ritual kits, each written with beginner-friendly guidance and grounded spiritual language.
            </p>
          </div>
        </section>
        <ShopCatalogue />
      </main>
      <Footer />
    </>
  );
}
