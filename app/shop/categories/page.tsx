import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrystalVisual from "@/components/CrystalVisual";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { productForms } from "@/data/categories";

export const metadata: Metadata = {
  title: "Shop by Crystal Form | My Little Gaia",
  description:
    "Browse crystals by form — tumble stones, raw crystals, points and towers, clusters, palm stones, hearts, jewellery, sets and ritual tools.",
};

export default function CategoriesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <section className="container-x py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: "Categories" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <span className="eyebrow">Crystal categories</span>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-forest sm:text-5xl lg:text-6xl">
              Shop by Crystal Form
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-forest/70 sm:text-lg">
              Choose the shape, texture and energy that feels right for your space, rituals or daily
              practice. Each category is curated with calm, beginner-friendly guidance.
            </p>
          </div>
        </section>

        <section className="container-x pb-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productForms.map((form) => (
              <article key={form.slug} className="group card flex flex-col overflow-hidden p-0">
                <Link href={`/shop/category/${form.slug}`} className="block overflow-hidden">
                  <CrystalVisual accent={form.accent} src={form.src} label={form.title} ratio="wide" />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-xl text-forest">
                    <Link href={`/shop/category/${form.slug}`} className="transition hover:text-gold">
                      {form.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-forest/65">{form.description}</p>
                  <div className="mt-auto pt-6">
                    <Link
                      href={`/shop/category/${form.slug}`}
                      className="btn-secondary w-full bg-white/65 sm:w-fit"
                    >
                      Shop category
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
