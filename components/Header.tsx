"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
const shopMenu = [
  { label: "All Products", href: "/shop", description: "Browse the full crystal shop." },
  { label: "Shop by Category", href: "/shop/categories", description: "Tumble stones, towers, hearts, sets and more." },
  { label: "Shop by Intention", href: "/shop/intentions", description: "Love, protection, calm, abundance, focus." },
  { label: "Crystal Library", href: "/crystal-library", description: "Meanings, chakras and traditional uses." },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Rituals", href: "/#rituals" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#newsletter" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const { count, openCart } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-forest/5 bg-ivory/85 backdrop-blur-md">
      <div className="container-x flex h-18 items-center justify-between py-4">
        <a href="/" className="font-serif text-2xl tracking-tight text-forest">
          My Little <span className="italic text-gold">Gaia</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          <a href="/" className="text-sm text-forest/75 transition hover:text-forest">
            Home
          </a>

          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <a
              href="/shop"
              aria-haspopup="true"
              aria-expanded={shopOpen}
              className="flex items-center gap-1 text-sm text-forest/75 transition hover:text-forest"
            >
              Shop
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition ${shopOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>

            {shopOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[min(440px,92vw)] -translate-x-1/2 pt-3">
                <div className="rounded-3xl border border-forest/10 bg-ivory/95 p-3 shadow-soft backdrop-blur-md">
                  <ul className="grid gap-1">
                    {shopMenu.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="block rounded-2xl px-4 py-3 transition hover:bg-forest/5"
                        >
                          <span className="block text-sm font-semibold text-forest">{item.label}</span>
                          <span className="mt-0.5 block text-xs text-forest/60">{item.description}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {links.slice(1).map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-forest/75 transition hover:text-forest">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Search" className="rounded-full p-2 text-forest/70 transition hover:bg-forest/5 hover:text-forest">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button onClick={openCart} aria-label="Open basket" className="relative rounded-full p-2 text-forest/70 transition hover:bg-forest/5 hover:text-forest">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] font-medium text-forest">{count}</span>
            )}
          </button>
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="ml-1 rounded-full p-2 text-forest/70 transition hover:bg-forest/5 lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-forest/5 bg-ivory lg:hidden" aria-label="Mobile navigation">
          <div className="container-x flex flex-col py-3">
            <a href="/" className="py-2.5 text-sm text-forest/80" onClick={() => setOpen(false)}>
              Home
            </a>

            <button
              type="button"
              aria-expanded={mobileShopOpen}
              onClick={() => setMobileShopOpen((value) => !value)}
              className="flex items-center justify-between py-2.5 text-left text-sm text-forest/80"
            >
              Shop
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition ${mobileShopOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {mobileShopOpen && (
              <div className="ml-2 border-l border-forest/10 pl-4 pb-2">
                {shopMenu.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-forest/80"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}

            {links.slice(1).map((link) => (
              <a key={link.label} href={link.href} className="py-2.5 text-sm text-forest/80" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
