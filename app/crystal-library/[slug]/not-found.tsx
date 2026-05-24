import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CrystalNotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <section className="container-x flex min-h-[60vh] items-center py-20">
          <div className="max-w-xl">
            <span className="eyebrow">Crystal Library</span>
            <h1 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">Crystal not found</h1>
            <p className="mt-5 text-base leading-8 text-forest/68">
              This crystal is not in the library yet. Explore the full collection to find meanings, intentions and ritual ideas.
            </p>
            <Link href="/crystal-library" className="btn-primary mt-8">
              Back to Crystal Library
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
