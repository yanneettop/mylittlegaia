"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { products, type Product } from "@/data/products";
import { formatPounds, priceToPence } from "@/lib/money";
import CrystalVisual from "@/components/CrystalVisual";

export type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  open: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "my-little-gaia-cart";

function getProduct(productId: string) {
  return products.find((product) => product.id === productId);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      window.localStorage.setItem(storageKey, JSON.stringify(items));
    }
  }, [items, mounted]);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce((total, item) => {
      const product = getProduct(item.productId);
      return product ? total + priceToPence(product.price) * item.quantity : total;
    }, 0);

    return {
      items,
      count,
      subtotal,
      open,
      addItem: (product, quantity = 1) => {
        if (product.stockStatus === "Out of stock" || product.stockStatus === "Coming soon") {
          return;
        }

        setItems((current) => {
          const existing = current.find((item) => item.productId === product.id);
          if (existing) {
            return current.map((item) =>
              item.productId === product.id
                ? { ...item, quantity: Math.min(item.quantity + quantity, 12) }
                : item,
            );
          }
          return [...current, { productId: product.id, quantity }];
        });
        setOpen(true);
      },
      removeItem: (productId) => setItems((current) => current.filter((item) => item.productId !== productId)),
      updateQuantity: (productId, quantity) =>
        setItems((current) =>
          current
            .map((item) => (item.productId === productId ? { ...item, quantity: Math.max(1, Math.min(quantity, 12)) } : item))
            .filter((item) => item.quantity > 0),
        ),
      clearCart: () => setItems([]),
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
    };
  }, [items, open]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}

function CartDrawer() {
  const { items, open, closeCart, subtotal, removeItem, updateQuantity } = useCart();
  const hydratedItems = items
    .map((item) => ({ ...item, product: getProduct(item.productId) }))
    .filter((item): item is CartItem & { product: Product } => Boolean(item.product));

  return (
    <div className={`fixed inset-0 z-[80] ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-forest/25 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={closeCart} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-soft transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-forest/10 px-5 py-5">
          <div>
            <p className="eyebrow">Basket</p>
            <h2 className="font-serif text-2xl text-forest">Your Gaia basket</h2>
          </div>
          <button onClick={closeCart} className="rounded-full p-2 text-forest/65 transition hover:bg-forest/5 hover:text-forest" aria-label="Close basket">
            x
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {hydratedItems.length === 0 ? (
            <div className="rounded-[2rem] border border-forest/10 bg-white/60 p-8 text-center">
              <h3 className="font-serif text-2xl text-forest">Your basket is empty</h3>
              <p className="mt-3 text-sm leading-6 text-forest/65">Add crystals, cleansing tools or ritual kits to begin.</p>
              <Link href="/shop" onClick={closeCart} className="btn-primary mt-6">
                Shop Crystals
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {hydratedItems.map((item) => {
                const image = item.product.images[0];
                return (
                  <article key={item.productId} className="grid grid-cols-[5rem_1fr] gap-4 rounded-[1.5rem] border border-forest/10 bg-white/65 p-3">
                    <CrystalVisual accent={image.accent} label={image.alt} src={image.src} ratio="compact" />
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-lg leading-tight text-forest">{item.product.name}</h3>
                          <p className="mt-1 text-sm font-semibold text-forest/70">{item.product.price}</p>
                        </div>
                        <button onClick={() => removeItem(item.productId)} className="text-xs font-semibold text-forest/45 transition hover:text-forest">
                          Remove
                        </button>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="grid h-8 w-8 place-items-center rounded-full border border-forest/15 bg-ivory text-forest">-</button>
                        <span className="min-w-8 text-center text-sm font-semibold text-forest">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="grid h-8 w-8 place-items-center rounded-full border border-forest/15 bg-ivory text-forest">+</button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        <div className="border-t border-forest/10 bg-white/45 px-5 py-5">
          <div className="flex items-center justify-between text-sm text-forest/70">
            <span>Subtotal</span>
            <span className="font-semibold text-forest">{formatPounds(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-forest/55">Shipping and taxes are calculated during checkout.</p>
          <div className="mt-4 grid gap-2">
            <Link href="/cart" onClick={closeCart} className="btn-secondary bg-white/70">
              View Basket
            </Link>
            <Link href="/checkout" onClick={closeCart} className={`btn-primary ${hydratedItems.length === 0 ? "pointer-events-none opacity-45" : ""}`}>
              Checkout
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
