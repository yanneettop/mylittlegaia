"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import AddToCartButton from "@/components/cart/AddToCartButton";

type ProductPurchaseControlsProps = {
  product: Product;
};

export default function ProductPurchaseControls({ product }: ProductPurchaseControlsProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mt-7 grid gap-3">
      <label className="flex w-full items-center justify-between rounded-2xl border border-forest/12 bg-ivory/70 px-4 py-3 text-sm font-semibold text-forest shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
        <span className="text-forest/60">Qty</span>
        <select
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          className="min-h-8 bg-transparent text-right text-forest outline-none"
          aria-label="Quantity"
        >
          {Array.from({ length: 12 }, (_, index) => index + 1).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <AddToCartButton
        product={product}
        quantity={quantity}
        className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-forest px-7 py-4 text-sm font-semibold tracking-wide text-ivory shadow-[0_18px_45px_-24px_rgba(36,56,47,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal hover:shadow-soft active:translate-y-0"
      />
    </div>
  );
}
