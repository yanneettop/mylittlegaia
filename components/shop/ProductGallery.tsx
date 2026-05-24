"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CrystalVisual from "@/components/CrystalVisual";
import type { Product } from "@/data/products";

type ProductGalleryProps = {
  product: Product;
};

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const selectedImage = product.images[selectedIndex] ?? product.images[0];

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowLeft") setSelectedIndex((index) => wrapIndex(index - 1, product.images.length));
      if (event.key === "ArrowRight") setSelectedIndex((index) => wrapIndex(index + 1, product.images.length));
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, product.images.length]);

  const showPrevious = () => setSelectedIndex((index) => wrapIndex(index - 1, product.images.length));
  const showNext = () => setSelectedIndex((index) => wrapIndex(index + 1, product.images.length));

  return (
    <>
      <div className="w-full min-w-0 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-[2rem] border border-forest/10 bg-white/48 p-3 shadow-[0_24px_70px_-46px_rgba(36,56,47,0.55)] backdrop-blur sm:max-w-none sm:p-4">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full rounded-[1.6rem] bg-[radial-gradient(circle_at_50%_32%,rgba(156,175,136,0.24),rgba(247,241,232,0)_52%),linear-gradient(145deg,rgba(255,255,255,0.66),rgba(216,195,165,0.18))] p-2 text-left"
          aria-label={`Open gallery for ${product.name}`}
        >
          <CrystalVisual accent={selectedImage.accent} label={selectedImage.alt} src={selectedImage.src} ratio="portrait" />
        </button>
        <div className="mt-3 grid grid-cols-[repeat(3,minmax(0,1fr))] gap-2.5 sm:gap-3">
          {product.images.map((image, index) => (
            <button
              key={image.alt}
              type="button"
              onClick={() => {
                setSelectedIndex(index);
                setOpen(true);
              }}
              className={`min-w-0 rounded-[1.25rem] border bg-white/65 p-1.5 text-left shadow-[0_12px_32px_-28px_rgba(36,56,47,0.5)] transition hover:-translate-y-0.5 hover:bg-white ${
                index === selectedIndex ? "border-gold/50" : "border-forest/10"
              }`}
              aria-label={`Open ${image.alt}`}
            >
              <ThumbnailImage image={image} />
              <p className="mt-2 truncate text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-forest/45 sm:text-[10px] sm:tracking-[0.18em]">
                {index === 0 ? "Close-up" : index === 1 ? "Product" : "Guide"}
              </p>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[90] bg-forest/78 px-4 py-5 backdrop-blur-md sm:px-8" role="dialog" aria-modal="true" aria-label={`${product.name} gallery`}>
          <button className="absolute inset-0 cursor-default" type="button" aria-label="Close gallery" onClick={() => setOpen(false)} />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col">
            <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-ivory/20 bg-ivory/88 px-4 py-3 text-forest shadow-soft backdrop-blur">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Gallery</p>
                <h2 className="mt-1 font-serif text-2xl leading-tight">{product.name}</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-forest/10 bg-forest text-2xl leading-none text-ivory shadow-soft transition hover:scale-105 hover:bg-charcoal"
                aria-label="Close gallery"
              >
                &times;
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden rounded-[2rem] border border-ivory/15 bg-ivory/92 shadow-soft">
              {selectedImage.src && (
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain p-3 sm:p-6"
                  priority
                />
              )}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-3 sm:p-5">
                <span className="rounded-full border border-forest/10 bg-white/80 px-3 py-1 text-xs font-semibold text-forest/62 shadow-soft">
                  {selectedIndex + 1} / {product.images.length}
                </span>
              </div>
              <GalleryButton label="Previous image" direction="left" onClick={showPrevious} />
              <GalleryButton label="Next image" direction="right" onClick={showNext} />
            </div>

            <div className="mt-3 rounded-2xl border border-ivory/18 bg-ivory/90 p-2 shadow-soft backdrop-blur">
              <div className="grid min-w-0 grid-cols-3 gap-2 sm:mx-auto sm:w-full sm:max-w-xl">
                {product.images.map((image, index) => (
                  <button
                    key={image.alt}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`relative aspect-[5/3] overflow-hidden rounded-xl border bg-ivory transition sm:rounded-2xl ${
                      index === selectedIndex ? "border-gold shadow-glow" : "border-forest/10 opacity-75 hover:opacity-100"
                    }`}
                    aria-label={`Show ${image.alt}`}
                  >
                    {image.src && <Image src={image.src} alt="" fill sizes="180px" className="object-contain p-1.5" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ThumbnailImage({ image }: { image: Product["images"][number] }) {
  return (
    <div className="relative aspect-[5/3] overflow-hidden rounded-2xl border border-forest/10 bg-ivory/70">
      {image.src && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 180px, 33vw"
          className="object-contain p-1.5"
        />
      )}
    </div>
  );
}

function GalleryButton({
  label,
  direction,
  onClick,
}: {
  label: string;
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/35 bg-forest text-ivory shadow-[0_18px_45px_-18px_rgba(36,56,47,0.72)] ring-1 ring-white/45 transition hover:scale-105 hover:bg-charcoal hover:shadow-soft sm:h-14 sm:w-14 ${
        direction === "left" ? "left-3 sm:left-5" : "right-3 sm:right-5"
      }`}
      aria-label={label}
    >
      <svg
        aria-hidden
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
      </svg>
    </button>
  );
}

function wrapIndex(index: number, length: number) {
  return (index + length) % length;
}
