"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    let animationFrame = 0;

    const updateParallax = () => {
      if (!heroRef.current) {
        return;
      }

      const rect = heroRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      setParallaxOffset(progress * 80);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative isolate min-h-[calc(100svh-4.5rem-18rem)] overflow-hidden bg-ivory sm:min-h-[calc(100svh-4.5rem-14rem)] lg:min-h-[calc(100svh-4.5rem-8.25rem)]">
      <div
        aria-hidden
        className="absolute inset-x-0 -inset-y-24 will-change-transform"
        style={{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }}
      >
        <div className="absolute inset-0 bg-[#F7F1E8]">
          <Image
            src="/images/my-little-gaia-crystals-rituals-hero-current.webp"
            alt="Crystal ritual collection with quartz, citrine, amethyst and rose quartz"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_52%] opacity-100"
          />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,232,0.88)_0%,rgba(247,241,232,0.58)_25%,rgba(247,241,232,0.12)_44%,rgba(247,241,232,0)_62%)]" />
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_40%,rgba(255,252,244,0.56)_0%,rgba(255,246,226,0.24)_32%,rgba(255,246,226,0)_55%)]" />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,240,0.12)_0%,rgba(247,241,232,0)_54%,rgba(216,195,165,0.2)_100%)]" />
          <div aria-hidden className="absolute inset-0 bg-[#3A2418]/[0.02] mix-blend-multiply" />
        </div>
      </div>

      <div aria-hidden className="hero-crystal-glow pointer-events-none absolute right-[-4%] top-[12%] z-[4] h-[68%] w-[72%] rounded-full motion-reduce:hidden" />

      <div aria-hidden className="pointer-events-none absolute inset-0 z-[5] overflow-hidden motion-reduce:hidden">
        {[
          { left: "5%",  bottom: "5%",  size: 5,  delay: "0s",    anim: "hero-drift"  },
          { left: "11%", bottom: "12%", size: 7,  delay: "1.3s",  anim: "hero-drift-2" },
          { left: "18%", bottom: "3%",  size: 4,  delay: "2.7s",  anim: "hero-drift-3" },
          { left: "23%", bottom: "18%", size: 8,  delay: "0.5s",  anim: "hero-drift"  },
          { left: "30%", bottom: "8%",  size: 5,  delay: "3.8s",  anim: "hero-drift-2" },
          { left: "36%", bottom: "22%", size: 6,  delay: "1.9s",  anim: "hero-drift-3" },
          { left: "41%", bottom: "5%",  size: 9,  delay: "4.4s",  anim: "hero-drift"  },
          { left: "47%", bottom: "15%", size: 5,  delay: "0.8s",  anim: "hero-drift-2" },
          { left: "53%", bottom: "9%",  size: 7,  delay: "5.1s",  anim: "hero-drift-3" },
          { left: "59%", bottom: "20%", size: 4,  delay: "2.2s",  anim: "hero-drift"  },
          { left: "64%", bottom: "4%",  size: 8,  delay: "3.3s",  anim: "hero-drift-2" },
          { left: "70%", bottom: "14%", size: 6,  delay: "6.0s",  anim: "hero-drift-3" },
          { left: "75%", bottom: "7%",  size: 5,  delay: "1.1s",  anim: "hero-drift"  },
          { left: "80%", bottom: "19%", size: 9,  delay: "4.7s",  anim: "hero-drift-2" },
          { left: "85%", bottom: "3%",  size: 4,  delay: "2.5s",  anim: "hero-drift-3" },
          { left: "91%", bottom: "11%", size: 7,  delay: "5.8s",  anim: "hero-drift"  },
          { left: "96%", bottom: "6%",  size: 5,  delay: "0.3s",  anim: "hero-drift-2" },
          { left: "14%", bottom: "25%", size: 6,  delay: "7.2s",  anim: "hero-drift-3" },
          { left: "55%", bottom: "28%", size: 5,  delay: "6.5s",  anim: "hero-drift"  },
          { left: "77%", bottom: "24%", size: 7,  delay: "3.0s",  anim: "hero-drift-2" },
        ].map((p, i) => (
          <span
            key={i}
            className={`hero-particle absolute block rounded-full ${p.anim}`}
            style={{
              left: p.left,
              bottom: p.bottom,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              background:
                i % 3 === 0
                  ? "radial-gradient(circle, rgba(255,252,245,0.72) 0%, rgba(255,246,226,0.34) 48%, rgba(255,246,226,0) 100%)"
                  : i % 3 === 1
                    ? "radial-gradient(circle, rgba(219,190,128,0.58) 0%, rgba(219,190,128,0.24) 46%, rgba(219,190,128,0) 100%)"
                    : "radial-gradient(circle, rgba(216,198,232,0.5) 0%, rgba(216,198,232,0.2) 48%, rgba(216,198,232,0) 100%)",
              boxShadow:
                i % 3 === 0
                  ? "0 0 10px 2px rgba(255,252,245,0.25)"
                  : i % 3 === 1
                    ? "0 0 12px 2px rgba(200,169,106,0.22)"
                    : "0 0 12px 2px rgba(203,178,235,0.18)",
            }}
          />
        ))}
      </div>
      <div aria-hidden className="absolute inset-y-0 left-0 hidden w-[48%] bg-gradient-to-r from-[#F7F1E8]/48 via-[#F7F1E8]/12 to-transparent sm:block" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[#F7F1E8]/78 via-[#F7F1E8]/38 to-[#F7F1E8]/12 sm:hidden" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#F7F1E8]/28 via-[#F7F1E8]/8 to-transparent" />

      <div className="relative z-10 flex min-h-[calc(100svh-4.5rem-18rem)] items-center px-5 py-12 sm:min-h-[calc(100svh-4.5rem-14rem)] sm:px-8 sm:py-16 lg:min-h-[calc(100svh-4.5rem-8.25rem)] lg:px-[7.4vw] lg:py-20">
        <div className="relative max-w-[42rem]">
          <div aria-hidden className="absolute -inset-x-8 -inset-y-10 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_26%_32%,rgba(247,241,232,0.6),rgba(247,241,232,0.22)_48%,rgba(247,241,232,0)_74%)] blur-sm" />
          <span
            className="flex animate-fadeUp items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.36em] text-forest/75 [text-shadow:0_1px_16px_rgba(247,241,232,0.9)]"
            style={{ animationDelay: "0ms" }}
          >
            <span aria-hidden className="h-px w-7 bg-[#A67A2F]" />
            A digital sanctuary for intentional living
          </span>
          <h1
            className="mt-5 max-w-[44rem] animate-fadeUp font-serif text-[2.85rem] leading-[1.0] tracking-[-0.012em] text-[#17372F] [text-shadow:0_2px_22px_rgba(247,241,232,0.82)] sm:text-6xl lg:text-[4.4rem] xl:text-[4.8rem]"
            style={{ animationDelay: "80ms" }}
          >
            Crystals, rituals <em className="magic-shimmer not-italic">&amp; earthly energy</em> for modern souls.
          </h1>
          <p
            className="mt-6 max-w-[40rem] animate-fadeUp text-base font-medium leading-8 text-forest/80 [text-shadow:0_1px_16px_rgba(247,241,232,0.88)] sm:text-lg lg:text-[1.08rem] lg:leading-8"
            style={{ animationDelay: "200ms" }}
          >
            Discover hand-selected crystals, ritual bundles and beginner-friendly guides to help you bring calm, clarity and intention into your everyday life.
          </p>
          <div
            className="mt-9 flex animate-fadeUp flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "320ms" }}
          >
            <a href="/shop" className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-[#17372F] px-9 py-3.5 text-sm font-extrabold tracking-wide text-ivory shadow-[0_18px_38px_-18px_rgba(23,55,47,0.75)] ring-1 ring-white/35 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A67A2F] hover:text-white active:scale-[0.98] lg:text-[0.95rem]">
              Shop Crystals
            </a>
            <a href="/crystal-library" className="group inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-[#A67A2F]/55 bg-white/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-forest backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A67A2F] hover:bg-white/70 hover:text-[#A67A2F] lg:text-[0.95rem]">
              Explore Crystal Meanings
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
