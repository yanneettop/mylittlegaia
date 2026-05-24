"use client";

import { useState } from "react";
import Link from "next/link";
import { products, type Product } from "@/data/products";
import { formatPounds } from "@/lib/money";
import { useCart } from "./CartProvider";

function getProduct(productId: string) {
  return products.find((product) => product.id === productId);
}

export default function CheckoutClient() {
  const { items, subtotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const hydratedItems = items
    .map((item) => ({ ...item, product: getProduct(item.productId) }))
    .filter((item): item is { productId: string; quantity: number; product: Product } => Boolean(item.product));

  const beginCheckout = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const payload = await response.json();

      if (!response.ok || !payload.url) {
        throw new Error(payload.error ?? "Checkout could not be started.");
      }

      window.location.href = payload.url;
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Checkout could not be started.");
    } finally {
      setLoading(false);
    }
  };

  if (hydratedItems.length === 0) {
    return (
      <section className="container-x py-20">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-forest/10 bg-white/60 p-10 text-center shadow-soft">
          <span className="eyebrow">Checkout</span>
          <h1 className="mt-4 font-serif text-4xl text-forest">Your basket is empty</h1>
          <p className="mt-4 text-forest/65">Add something beautiful before heading to checkout.</p>
          <Link href="/shop" className="btn-primary mt-8">
            Shop Crystals
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container-x grid gap-8 py-14 lg:grid-cols-[1fr_26rem]">
      <div className="rounded-[2rem] border border-forest/10 bg-white/60 p-6 shadow-soft">
        <span className="eyebrow">Secure checkout</span>
        <h1 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">Payment</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-forest/65">
          Payments are prepared for Stripe Checkout. Add your Stripe secret key and public site URL in environment variables to enable live checkout.
        </p>

        <div className="mt-8 rounded-[1.5rem] border border-gold/25 bg-gold/10 p-5 text-sm leading-7 text-forest/70">
          <strong className="text-forest">Demo-safe mode:</strong> if Stripe keys are missing, the checkout button will route to a demo success page instead of taking payment.
        </div>

        {error && (
          <div className="mt-5 rounded-[1.5rem] border border-rose/30 bg-rose/15 p-4 text-sm text-forest">
            {error}
          </div>
        )}

        <button onClick={beginCheckout} disabled={loading} className="btn-primary mt-8 w-full sm:w-fit disabled:pointer-events-none disabled:opacity-55">
          {loading ? "Starting Checkout..." : "Pay Securely"}
        </button>
      </div>

      <aside className="h-fit rounded-[2rem] border border-forest/10 bg-white/70 p-6 shadow-soft">
        <h2 className="font-serif text-2xl text-forest">Order summary</h2>
        <div className="mt-5 space-y-4">
          {hydratedItems.map((item) => (
            <div key={item.productId} className="flex justify-between gap-4 text-sm">
              <div>
                <p className="font-semibold text-forest">{item.product.name}</p>
                <p className="text-forest/55">Qty {item.quantity}</p>
              </div>
              <p className="font-semibold text-forest">{item.product.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-forest/10 pt-5">
          <div className="flex justify-between text-sm text-forest/70">
            <span>Subtotal</span>
            <span className="font-semibold text-forest">{formatPounds(subtotal)}</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
