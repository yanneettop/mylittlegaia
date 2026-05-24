import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrystalVisual from "@/components/CrystalVisual";
import ProductCard from "@/components/shop/ProductCard";
import CrystalCard from "@/components/library/CrystalCard";
import { crystals, getCrystalBySlug, getRelatedCrystals } from "@/data/crystals";
import { products } from "@/data/products";

type CrystalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return crystals.map((crystal) => ({ slug: crystal.slug }));
}

export async function generateMetadata({ params }: CrystalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const crystal = getCrystalBySlug(slug);

  if (!crystal) {
    return { title: "Crystal not found | My Little Gaia" };
  }

  return {
    title: `${crystal.name} Meaning | My Little Gaia Crystal Library`,
    description: crystal.shortDescription,
  };
}

export default async function CrystalDetailPage({ params }: CrystalPageProps) {
  const { slug } = await params;
  const crystal = getCrystalBySlug(slug);

  if (!crystal) {
    notFound();
  }

  const relatedProducts = products.filter((product) => crystal.relatedProducts.includes(product.slug));
  const relatedCrystals = getRelatedCrystals(crystal);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <section className="container-x py-10 sm:py-14">
          <div className="flex flex-wrap items-center gap-2 text-sm text-forest/60">
            <Link href="/crystal-library" className="font-semibold text-forest/70 transition hover:text-forest">
              Crystal Library
            </Link>
            <span>/</span>
            <span>{crystal.name}</span>
          </div>
        </section>

        <section className="container-x grid gap-10 pb-20 lg:grid-cols-[0.95fr_1fr] lg:gap-14">
          <div className="rounded-[2rem] border border-forest/10 bg-white/50 p-4 shadow-soft">
            <CrystalVisual accent={crystal.image.accent} label={crystal.image.alt} src={crystal.image.src} ratio="portrait" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="eyebrow">Crystal meaning</span>
            <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-forest sm:text-6xl">
              {crystal.name}
            </h1>
            <p className="mt-6 text-base leading-8 text-forest/72 sm:text-lg">{crystal.shortDescription}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <TagPanel title="Intentions" tags={crystal.intentions} />
              <TagPanel title="Chakras" tags={crystal.chakras} />
              <TagPanel title="Zodiac" tags={crystal.zodiac} />
              <TagPanel title="Colour & Element" tags={[...crystal.colour, ...crystal.element]} />
            </div>
          </div>
        </section>

        <section className="container-x grid gap-6 pb-20 lg:grid-cols-2">
          <InfoPanel title="Meaning">
            <p>{crystal.meaning}</p>
          </InfoPanel>
          <InfoPanel title="Best For">
            <ChipList items={crystal.bestFor} />
          </InfoPanel>
          <InfoPanel title="How to Use">
            <ul className="space-y-3">
              {crystal.howToUse.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoPanel>
          <InfoPanel title="How to Cleanse">
            <ul className="space-y-3">
              {crystal.howToCleanse.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoPanel>
          <InfoPanel title="Pair With">
            <ChipList items={crystal.pairWith} />
          </InfoPanel>
          <InfoPanel title="Disclaimer">
            <p>Crystal meanings are based on traditional and spiritual associations. They are not medical advice and should not replace professional care.</p>
          </InfoPanel>
        </section>

        {relatedProducts.length > 0 && (
          <section className="container-x pb-20">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="eyebrow">Shop the energy</span>
                <h2 className="h-section mt-4">Related Products</h2>
              </div>
              <Link href="/shop" className="hidden text-sm font-semibold text-forest/70 transition hover:text-forest sm:block">
                Open shop
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {relatedCrystals.length > 0 && (
          <section className="container-x pb-24">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="eyebrow">Keep exploring</span>
                <h2 className="h-section mt-4">Related Crystals</h2>
              </div>
              <Link href="/crystal-library" className="hidden text-sm font-semibold text-forest/70 transition hover:text-forest sm:block">
                Back to Crystal Library
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedCrystals.map((relatedCrystal) => (
                <CrystalCard key={relatedCrystal.id} crystal={relatedCrystal} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function TagPanel({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="rounded-2xl border border-forest/10 bg-white/60 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-forest/[0.055] px-3 py-1.5 text-xs font-semibold text-forest/65">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="card text-sm leading-7 text-forest/68">
      <h2 className="font-serif text-2xl text-forest">{title}</h2>
      <div className="mt-4">{children}</div>
    </article>
  );
}

function ChipList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full bg-white/75 px-3 py-1.5 text-xs font-semibold text-forest/65">
          {item}
        </span>
      ))}
    </div>
  );
}
