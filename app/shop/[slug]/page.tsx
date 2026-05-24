import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/shop/ProductCard";
import ProductGallery from "@/components/shop/ProductGallery";
import ProductPurchaseControls from "@/components/shop/ProductPurchaseControls";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found | My Little Gaia" };
  }

  return {
    title: `${product.name} | My Little Gaia`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const ritualIntention = product.intention ?? "I return to myself with calm and care.";

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-ivory">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10rem] top-28 h-80 w-80 rounded-full bg-sage/20 blur-3xl" />
          <div className="absolute right-[-12rem] top-[30rem] h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute bottom-80 left-[20%] h-72 w-72 rounded-full bg-rose/10 blur-3xl" />
        </div>

        <section className="container-x relative py-8 sm:py-11">
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-forest/62 transition hover:text-forest">
            <span aria-hidden>&larr;</span>
            Back to shop
          </Link>
        </section>

        <section className="container-x relative grid min-w-0 grid-cols-1 gap-9 pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(26rem,0.76fr)] lg:items-start lg:gap-12 lg:pb-24">
          <ProductGallery product={product} />
          <PurchasePanel product={product} />
        </section>

        <section className="container-x relative pb-12 lg:pb-18">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <InfoPanel eyebrow="Meaning" title="Traditional Association" tone="large">
              <p className="text-base leading-8 text-forest/72">{product.fullDescription}</p>
            </InfoPanel>
            <InfoPanel eyebrow="Intention" title="Set the Energy">
              {product.intention && <p className="font-serif text-2xl leading-9 text-forest">{product.intention}</p>}
              {product.howToUse.length > 0 && (
                <p className="text-sm leading-7 text-forest/62">{product.howToUse[0]}</p>
              )}
            </InfoPanel>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <InfoPanel eyebrow="Care" title="How to Keep It Fresh">
              <p className="text-sm leading-7 text-forest/68">{product.care ?? product.howToCleanse.join(" ")}</p>
            </InfoPanel>
            <InfoPanel eyebrow="Details" title="Crystal Notes">
              <div className="grid gap-3 sm:grid-cols-2">
                <MetaList label="Crystal type" items={[product.crystalType]} />
                <MetaList label="Best For" items={product.bestFor} />
                {product.chakras && <MetaList label="Chakra" items={product.chakras} />}
                {product.zodiac && <MetaList label="Zodiac" items={product.zodiac} />}
              </div>
            </InfoPanel>
          </div>
        </section>

        <section className="container-x relative pb-16 lg:pb-24">
          <div className="overflow-hidden rounded-[2rem] border border-forest/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(247,241,232,0.76)_45%,rgba(156,175,136,0.18))] p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[0.45fr_1fr] lg:items-center">
              <div>
                <span className="eyebrow">A small ritual</span>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-forest sm:text-4xl">A small ritual for this crystal</h2>
              </div>
              <p className="text-base leading-8 text-forest/72 sm:text-lg">
                Hold your {product.crystalType} for one minute. Take three slow breaths. Set one simple intention: {ritualIntention}
              </p>
            </div>
          </div>
        </section>

        <section className="container-x relative pb-16">
          <div className="rounded-[2rem] border border-forest/10 bg-white/58 p-5 text-sm leading-7 text-forest/62 shadow-[0_14px_42px_-34px_rgba(36,56,47,0.5)] sm:p-6">
            {product.note ??
              "Crystal meanings are based on traditional and spiritual associations. They are not medical advice and should not replace professional care."}
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="container-x relative pb-24">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="eyebrow">Curated shelf</span>
                <h2 className="h-section mt-4">You may also like</h2>
              </div>
              <Link href="/shop" className="hidden rounded-full border border-forest/12 bg-white/55 px-5 py-3 text-sm font-semibold text-forest/70 shadow-[0_12px_36px_-30px_rgba(36,56,47,0.5)] transition hover:border-forest/30 hover:bg-white hover:text-forest sm:block">
                View all crystals
              </Link>
            </div>
            <div className="mt-9 rounded-[2rem] border border-forest/10 bg-white/35 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-4">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function PurchasePanel({ product }: { product: NonNullable<ReturnType<typeof getProductBySlug>> }) {
  return (
    <aside className="w-full min-w-0 max-w-[calc(100vw-2.5rem)] sm:max-w-none lg:sticky lg:top-28">
      <div className="w-full min-w-0 overflow-hidden rounded-[2rem] border border-forest/10 bg-white/72 p-6 shadow-[0_24px_70px_-46px_rgba(36,56,47,0.65)] backdrop-blur sm:p-8">
        <span className="eyebrow">{product.category}</span>
        <h1 className="mt-4 font-serif text-4xl leading-[1.02] text-forest sm:text-5xl">
          {product.name}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="font-serif text-3xl font-semibold text-forest">{product.price}</span>
          {product.compareAtPrice && <span className="text-sm text-forest/45 line-through">{product.compareAtPrice}</span>}
          <span className="rounded-full border border-sage/25 bg-sage/[0.18] px-3 py-1.5 text-xs font-semibold text-forest/72">{product.stockStatus}</span>
        </div>
        <p className="mt-6 text-base leading-8 text-forest/72 sm:text-lg">{product.shortDescription}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {product.intentions.map((intention) => (
            <span key={intention} className="rounded-full border border-forest/[0.08] bg-ivory/75 px-3 py-1.5 text-xs font-semibold text-forest/62 shadow-[0_8px_28px_-24px_rgba(36,56,47,0.35)]">
              {intention}
            </span>
          ))}
        </div>

        <ProductPurchaseControls product={product} />
        <Link href="/cart" className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-forest/15 bg-white/65 px-6 py-3 text-sm font-semibold text-forest transition hover:border-forest/30 hover:bg-ivory">
          View Basket
        </Link>

        <div className="mt-5 rounded-2xl border border-gold/18 bg-gold/[0.09] p-4 text-sm leading-7 text-forest/68">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">Ritual note</p>
          <p className="mt-2">Choose the piece that feels quietly right. Keep it close during small daily rituals, pockets of pause, or meaningful gifting.</p>
        </div>
      </div>
    </aside>
  );
}

function InfoPanel({
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tone?: "default" | "large";
}) {
  return (
    <article className={`rounded-[2rem] border border-forest/10 bg-white/62 p-6 shadow-[0_18px_55px_-42px_rgba(36,56,47,0.55)] backdrop-blur sm:p-7 ${tone === "large" ? "lg:p-9" : ""}`}>
      <div className="flex items-start gap-4">
        <span aria-hidden className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sage/16 text-forest/70">
          <span className="h-2 w-2 rounded-full bg-gold" />
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-forest sm:text-3xl">{title}</h2>
        </div>
      </div>
      <div className="mt-5 space-y-4 text-sm leading-7 text-forest/68">{children}</div>
    </article>
  );
}

function MetaList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-forest/[0.08] bg-ivory/55 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{label}</p>
      <p className="mt-1 text-forest/70">{items.join(", ")}</p>
    </div>
  );
}
