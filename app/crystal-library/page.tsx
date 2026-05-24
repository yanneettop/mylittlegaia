import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrystalLibraryCatalogue from "@/components/library/CrystalLibraryCatalogue";

export const metadata: Metadata = {
  title: "Crystal Library | My Little Gaia",
  description:
    "Explore crystal meanings, intentions, chakras, zodiac associations and simple everyday rituals.",
};

export default function CrystalLibraryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <section className="container-x py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Knowledge garden</span>
            <h1 className="mt-4 font-serif text-5xl leading-[1.03] text-forest sm:text-6xl lg:text-7xl">
              Crystal Library
            </h1>
            <p className="mt-6 text-base leading-8 text-forest/72 sm:text-lg">
              Explore crystal meanings, traditional associations, chakras and simple ways to use each stone in your everyday rituals.
            </p>
            <p className="mt-4 text-sm font-medium text-forest/58">
              Find a crystal by name, intention, chakra, zodiac, colour or element.
            </p>
          </div>
        </section>
        <CrystalLibraryCatalogue />
      </main>
      <Footer />
    </>
  );
}
