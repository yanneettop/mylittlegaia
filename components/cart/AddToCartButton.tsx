"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "./CartProvider";

type AddToCartButtonProps = {
  product: Product;
  className?: string;
  label?: string;
  quantity?: number;
};

export default function AddToCartButton({ product, className, label = "Add to Basket", quantity = 1 }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const disabled = product.stockStatus === "Out of stock" || product.stockStatus === "Coming soon" || product.isAffiliateProduct;

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  if (product.isAffiliateProduct && product.affiliateUrl) {
    return (
      <a href={product.affiliateUrl} target="_blank" rel="noreferrer" className={className ?? "btn-primary"}>
        Shop Partner Site
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      disabled={disabled}
      className={className ?? "btn-primary disabled:pointer-events-none disabled:opacity-45"}
    >
      {disabled ? product.stockStatus : added ? "Added" : label}
    </button>
  );
}
