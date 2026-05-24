import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import ProductCard from "@/components/shop/ProductCard";
import CrystalVisual from "@/components/CrystalVisual";
import { productForms, getFormBySlug, getProductsByFormSlug } from "@/data/categories";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productForms.map((form) => ({ slug: form.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const form = getFormBySlug(slug);
  if (!form) return { title: "Category not found | My Little Gaia" };
  return {
    title: `${form.title} | My Little Gaia`,
    description: form.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const form = getFormBySlug(slug);
  if (!form) notFound();

  const categoryProducts = getProductsByFormSlug(slug);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <section className="container-x py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: "Categories", href: "/shop/categories" },
              { label: form.title },
            ]}
          />
        </section>

        <section className="container-x pb-16">
          <div className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white/60 shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <span className="eyebrow">Crystal category</span>
                <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-forest sm:text-5xl">
                  {form.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-forest/70 sm:text-lg">
                  {form.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/shop/categories" className="btn-secondary bg-white/65">
                    All categories
                  </Link>
                  <Link href="/shop/intentions" className="btn-secondary bg-white/65">
                    Shop by intention
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[18rem] lg:min-h-[24rem]">
                <CrystalVisual accent={form.accent} src={form.src} label={form.title} ratio="hero" />
              </div>
            </div>
          </div>
        </section>

        <section className="container-x pb-24">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Shop the collection</span>
              <h2 className="h-section mt-3">Products in {form.title}</h2>
            </div>
            {categoryProducts.length > 0 && (
              <p className="text-sm text-forest/65">
                <span className="font-semibold text-forest">{categoryProducts.length}</span>{" "}
                {categoryProducts.length === 1 ? "product" : "products"}
              </p>
            )}
          </div>

          {categoryProducts.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-forest/10 bg-white/60 p-10 text-center shadow-soft">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage/20 text-forest">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className="mt-5 font-serif text-2xl text-forest">Coming soon</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-forest/65">
                Pieces for {form.title.toLowerCase()} are being carefully selected. In the meantime,
                explore the rest of the shop or another category.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/shop" className="btn-primary">
                  Browse all crystals
                </Link>
                <Link href="/shop/categories" className="btn-secondary bg-white/65">
                  All categories
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
