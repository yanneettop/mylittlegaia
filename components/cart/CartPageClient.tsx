"use client";

import Link from "next/link";
import { products, type Product } from "@/data/products";
import { formatPounds, priceToPence } from "@/lib/money";
import CrystalVisual from "@/components/CrystalVisual";
import { useCart } from "./CartProvider";

function getProduct(productId: string) {
  return products.find((product) => product.id === productId);
}

export default function CartPageClient() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const hydratedItems = items
    .map((item) => ({ ...item, product: getProduct(item.productId) }))
    .filter((item): item is { productId: string; quantity: number; product: Product } => Boolean(item.product));

  if (hydratedItems.length === 0) {
    return (
      <section className="container-x py-20">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-forest/10 bg-white/60 p-10 text-center shadow-soft">
          <span className="eyebrow">Basket</span>
          <h1 className="mt-4 font-serif text-4xl text-forest">Your basket is empty</h1>
          <p className="mt-4 text-forest/65">Choose a crystal, bundle or cleansing tool to begin your order.</p>
          <Link href="/shop" className="btn-primary mt-8">
            Shop Crystals
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container-x grid gap-8 py-14 lg:grid-cols-[1fr_24rem]">
      <div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Basket</span>
            <h1 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">Your basket</h1>
          </div>
          <button onClick={clearCart} className="text-sm font-semibold text-forest/55 transition hover:text-forest">
            Clear basket
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {hydratedItems.map((item) => {
            const image = item.product.images[0];
            const lineTotal = priceToPence(item.product.price) * item.quantity;
            return (
              <article key={item.productId} className="grid gap-4 rounded-[2rem] border border-forest/10 bg-white/60 p-4 shadow-[0_1px_0_rgba(36,56,47,0.04)] sm:grid-cols-[8rem_1fr_auto]">
                <CrystalVisual accent={image.accent} label={image.alt} src={image.src} ratio="compact" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">{item.product.category}</p>
                  <h2 className="mt-2 font-serif text-2xl text-forest">{item.product.name}</h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-forest/65">{item.product.shortDescription}</p>
                  <button onClick={() => removeItem(item.productId)} className="mt-3 text-xs font-semibold text-forest/50 transition hover:text-forest">
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="grid h-9 w-9 place-items-center rounded-full border border-forest/15 bg-ivory text-forest">-</button>
                    <span className="min-w-8 text-center font-semibold text-forest">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="grid h-9 w-9 place-items-center rounded-full border border-forest/15 bg-ivory text-forest">+</button>
                  </div>
                  <p className="text-lg font-semibold text-forest">{formatPounds(lineTotal)}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <aside className="h-fit rounded-[2rem] border border-forest/10 bg-white/70 p-6 shadow-soft">
        <h2 className="font-serif text-2xl text-forest">Order summary</h2>
        <div className="mt-5 space-y-3 text-sm text-forest/70">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold text-forest">{formatPounds(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Calculated next</span>
          </div>
        </div>
        <Link href="/checkout" className="btn-primary mt-6 w-full">
          Checkout
        </Link>
        <Link href="/shop" className="btn-secondary mt-3 w-full bg-white/65">
          Continue Shopping
        </Link>
      </aside>
    </section>
  );
}
