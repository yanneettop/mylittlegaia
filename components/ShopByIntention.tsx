"use client";

import { useState } from "react";
import CrystalVisual from "@/components/CrystalVisual";
import { featuredForms, intentionCollections } from "@/data/categories";

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

type Tab = "form" | "intention";

export default function ShopByIntention() {
  const [tab, setTab] = useState<Tab>("form");

  return (
    <section id="shop" className="container-x section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Shop the collection</span>
        <h2 className="h-section mt-4">Browse the sanctuary</h2>
        <p className="mt-4 text-forest/65">
          Choose your way in — by the shape and texture of the crystal, or by the energy you want to invite into your life.
        </p>

        <div
          role="tablist"
          aria-label="Browse crystals"
          className="mx-auto mt-10 inline-flex items-center gap-1 rounded-full border border-forest/12 bg-white/60 p-1 shadow-[0_1px_0_rgba(36,56,47,0.04)] backdrop-blur-sm"
        >
          {(
            [
              { id: "form", label: "By Form" },
              { id: "intention", label: "By Intention" },
            ] as const
          ).map((option) => {
            const active = tab === option.id;
            return (
              <button
                key={option.id}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(option.id)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  active
                    ? "bg-forest text-ivory shadow-[0_8px_22px_-12px_rgba(23,55,47,0.6)]"
                    : "text-forest/65 hover:text-forest"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {tab === "form" ? (
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredForms.map((form) => (
            <a
              key={form.slug}
              href={`/shop?category=${form.slug}`}
              aria-label={`Shop ${form.title}`}
              className="group card card-halo overflow-hidden p-0"
            >
              <div className="overflow-hidden">
                <CrystalVisual accent={form.accent} src={form.src} label={form.title} ratio="wide" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-forest transition group-hover:text-gold">{form.title}</h3>
                <p className="mt-2 text-sm leading-6 text-forest/65">{form.description}</p>
                <span className="card-cta mt-5">
                  Shop now
                  <span aria-hidden className="card-cta-arrow">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {intentionCollections.map((intention) => (
            <a
              key={intention.slug}
              href={`/shop?intention=${intention.slug}`}
              aria-label={`Shop crystals for ${intention.title}`}
              className="group card card-halo relative overflow-hidden p-5 sm:p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${intention.tint} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative flex items-start gap-4">
                <div className="intention-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-forest/5 text-forest shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] group-hover:bg-gold/30">
                  <svg aria-hidden width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {icons[intention.icon]}
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-forest transition group-hover:text-gold">{intention.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-forest/65">{intention.description}</p>
                  <span className="card-cta mt-3">
                    Shop
                    <span aria-hidden className="card-cta-arrow">→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
