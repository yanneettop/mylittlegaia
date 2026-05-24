import Link from "next/link";
import type { Product } from "@/data/products";
import CrystalVisual from "@/components/CrystalVisual";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const primaryImage = product.images[0];
  const hoverImage = product.images[1];
  const href = product.isAffiliateProduct && product.affiliateUrl ? product.affiliateUrl : `/${product.slug}`;
  const buttonLabel = product.isAffiliateProduct ? "Shop Partner Site" : "View crystal";
  const badgeLabel = product.tags.includes("Tumble Stone") ? "Tumble Stone" : product.category;

  return (
    <article className="group card card-halo flex h-full flex-col p-4 shadow-[0_16px_45px_-34px_rgba(36,56,47,0.42)]">
      <Link href={href} className="block" target={product.isAffiliateProduct ? "_blank" : undefined}>
        <CrystalVisual accent={primaryImage.accent} label={primaryImage.alt} src={primaryImage.src} hoverSrc={hoverImage?.src} />
      </Link>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">{badgeLabel}</span>
        <h2 className="mt-2 font-serif text-xl leading-snug text-forest">
          <Link href={href} target={product.isAffiliateProduct ? "_blank" : undefined} className="transition group-hover:text-gold">
            {product.name}
          </Link>
        </h2>
        <p className="mt-2 text-sm leading-6 text-forest/65">{product.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.intentions.slice(0, 3).map((intention) => (
            <span key={intention} className="rounded-full bg-forest/[0.055] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-forest/60">
              {intention}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-lg font-semibold text-forest">{product.price}</p>
              <p className="mt-0.5 text-xs text-forest/55">{product.stockStatus}</p>
            </div>
            <Link
              href={href}
              target={product.isAffiliateProduct ? "_blank" : undefined}
              className="rounded-full border border-forest/15 bg-white/80 px-4 py-2.5 text-xs font-semibold text-forest shadow-[0_10px_30px_-25px_rgba(36,56,47,0.5)] transition hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-ivory"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
