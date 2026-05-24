import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import ProductCard from "@/components/shop/ProductCard";
import {
  intentionCollections,
  getIntentionBySlug,
  getProductsByIntentionSlug,
} from "@/data/categories";

type IntentionPageProps = {
  params: Promise<{ slug: string }>;
};

const icons = {
  spark: <path d="M12 3v18M4.5 12h15M7.5 7.5l9 9M16.5 7.5l-9 9" />,
  shield: <path d="M12 3 5.5 5.5v5.8c0 4.1 2.6 7.6 6.5 9.2 3.9-1.6 6.5-5.1 6.5-9.2V5.5L12 3Z" />,
  heart: <path d="M20.2 8.6c0 4.6-8.2 9.9-8.2 9.9S3.8 13.2 3.8 8.6A4.2 4.2 0 0 1 12 7.2a4.2 4.2 0 0 1 8.2 1.4Z" />,
  sun: (
    <>
      <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
      <path d="M12 2.8v2.4M12 18.8v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.8 12h2.4M18.8 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
    </>
  ),
  diamond: <path d="m12 3 7 7-7 11-7-11 7-7ZM5 10h14M9 10l3 11 3-11" />,
  moon: <path d="M18.5 15.4A7.2 7.2 0 0 1 8.6 5.5a7.2 7.2 0 1 0 9.9 9.9Z" />,
  bolt: <path d="m13 2-8 12h6l-1 8 8-12h-6l1-8Z" />,
  leaf: <path d="M5 19c8.8 0 13.5-5.1 14-14-8.9.5-14 5.2-14 14ZM5 19 15 9" />,
};

export function generateStaticParams() {
  return intentionCollections.map((intention) => ({ slug: intention.slug }));
}

export async function generateMetadata({ params }: IntentionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const intention = getIntentionBySlug(slug);
  if (!intention) return { title: "Intention not found | My Little Gaia" };
  return {
    title: `Crystals for ${intention.title} | My Little Gaia`,
    description: intention.description,
  };
}

export default async function IntentionPage({ params }: IntentionPageProps) {
  const { slug } = await params;
  const intention = getIntentionBySlug(slug);
  if (!intention) notFound();

  const intentionProducts = getProductsByIntentionSlug(slug);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <section className="container-x py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: "Intentions", href: "/shop/intentions" },
              { label: intention.title },
            ]}
          />
        </section>

        <section className="container-x pb-16">
          <div className={`relative overflow-hidden rounded-[2rem] border border-forest/10 bg-gradient-to-br ${intention.tint} p-10 shadow-soft sm:p-14`}>
            <div className="relative max-w-2xl">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/70 text-forest shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                <svg aria-hidden width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {icons[intention.icon]}
                </svg>
              </div>
              <span className="eyebrow mt-6 block">Shop by intention</span>
              <h1 className="mt-3 font-serif text-4xl leading-[1.05] text-forest sm:text-5xl lg:text-6xl">
                Crystals for {intention.title}
              </h1>
              <p className="mt-5 text-base leading-8 text-forest/75 sm:text-lg">
                {intention.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/shop/intentions" className="btn-secondary bg-white/70">
                  All intentions
                </Link>
                <Link href="/shop/categories" className="btn-secondary bg-white/70">
                  Shop by category
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container-x pb-24">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Curated selection</span>
              <h2 className="h-section mt-3">Crystals for {intention.title.toLowerCase()}</h2>
            </div>
            {intentionProducts.length > 0 && (
              <p className="text-sm text-forest/65">
                <span className="font-semibold text-forest">{intentionProducts.length}</span>{" "}
                {intentionProducts.length === 1 ? "product" : "products"}
              </p>
            )}
          </div>

          {intentionProducts.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {intentionProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-forest/10 bg-white/60 p-10 text-center shadow-soft">
              <h3 className="font-serif text-2xl text-forest">Coming soon</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-forest/65">
                A curated selection for {intention.title.toLowerCase()} is on the way. Explore the
                wider shop in the meantime.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/shop" className="btn-primary">
                  Browse all crystals
                </Link>
                <Link href="/shop/intentions" className="btn-secondary bg-white/65">
                  All intentions
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
