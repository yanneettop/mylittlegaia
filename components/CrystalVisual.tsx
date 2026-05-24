import Image from "next/image";
import type { CrystalAccent } from "@/data/products";

type CrystalVisualProps = {
  accent: CrystalAccent;
  label?: string;
  src?: string;
  hoverSrc?: string;
  ratio?: "square" | "portrait" | "wide" | "compact" | "hero";
};

const ratioClass = {
  square: "aspect-[4/5]",
  portrait: "aspect-[4/5]",
  wide: "aspect-[5/3]",
  compact: "h-20 w-20",
  hero: "h-full min-h-[28rem]",
};

const accents: Record<CrystalAccent, { base: string; crystal: string; glow: string; aura: string; dark?: boolean }> = {
  amethyst: {
    base: "from-ivory via-[#efe7f6] to-[#d8c4ea]",
    crystal: "from-[#efe7f6] via-[#b89bd7] to-[#735c98]",
    glow: "bg-[#b89bd7]/30",
    aura: "rgba(184,155,215,0.55)",
  },
  rose: {
    base: "from-ivory via-[#f6e5e2] to-[#e8b9b4]",
    crystal: "from-[#fff0ee] via-[#e8b9b4] to-[#b97974]",
    glow: "bg-rose/30",
    aura: "rgba(232,185,180,0.55)",
  },
  citrine: {
    base: "from-ivory via-[#fbf1d8] to-[#e8c98a]",
    crystal: "from-[#fff5cd] via-[#e8c98a] to-[#a87a3d]",
    glow: "bg-gold/40",
    aura: "rgba(232,201,138,0.62)",
  },
  tourmaline: {
    base: "from-ivory via-[#d9d4cc] to-[#77736e]",
    crystal: "from-[#59595f] via-[#28282d] to-[#111114]",
    glow: "bg-forest/25",
    aura: "rgba(120,140,128,0.4)",
    dark: true,
  },
  quartz: {
    base: "from-ivory via-[#f8f8f6] to-[#dedbd2]",
    crystal: "from-white via-[#e8e8ee] to-[#c5c2bc]",
    glow: "bg-white/70",
    aura: "rgba(255,252,245,0.72)",
  },
  selenite: {
    base: "from-ivory via-[#faf5ea] to-[#e6dbc8]",
    crystal: "from-white via-[#f0ebe1] to-[#d8cbb5]",
    glow: "bg-sand/30",
    aura: "rgba(248,236,210,0.58)",
  },
  tiger: {
    base: "from-ivory via-[#f0d4a4] to-[#9b6630]",
    crystal: "from-[#f6d28d] via-[#a87a3d] to-[#442918]",
    glow: "bg-[#a87a3d]/30",
    aura: "rgba(232,184,108,0.5)",
    dark: true,
  },
  aventurine: {
    base: "from-ivory via-[#dfe9d5] to-[#9cb88f]",
    crystal: "from-[#e5f0dc] via-[#9cb88f] to-[#4f7652]",
    glow: "bg-sage/35",
    aura: "rgba(156,184,143,0.55)",
  },
  moonstone: {
    base: "from-ivory via-[#f5f3ee] to-[#d8d4e0]",
    crystal: "from-white via-[#d8d4e0] to-[#a8afbc]",
    glow: "bg-white/70",
    aura: "rgba(220,224,236,0.6)",
  },
  labradorite: {
    base: "from-ivory via-[#d0d8d5] to-[#546a67]",
    crystal: "from-[#8aa0a8] via-[#3d4a52] to-[#1f2b2f]",
    glow: "bg-sage/30",
    aura: "rgba(138,160,168,0.5)",
    dark: true,
  },
  obsidian: {
    base: "from-ivory via-[#d6d0c5] to-[#4a4845]",
    crystal: "from-[#4b4b50] via-[#151518] to-[#050506]",
    glow: "bg-charcoal/25",
    aura: "rgba(180,170,150,0.32)",
    dark: true,
  },
};

export default function CrystalVisual({ accent, label, src, hoverSrc, ratio = "square" }: CrystalVisualProps) {
  const theme = accents[accent];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-forest/10 bg-gradient-to-br ${theme.base} ${ratioClass[ratio]} shadow-[inset_0_1px_0_rgba(255,255,255,0.82)]`}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      {src ? (
        <>
          <Image src={src} alt={label ?? "Crystal image"} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
          {hoverSrc && (
            <Image
              src={hoverSrc}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover opacity-0 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
            />
          )}
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,241,232,0.04),rgba(36,56,47,0.12))]" />
          <div
            aria-hidden
            className="product-aura motion-reduce:hidden"
            style={{
              background: `radial-gradient(38% 36% at 50% 54%, ${theme.aura} 0%, ${theme.aura.replace(/,[^,]+\)/, ",0)")} 70%)`,
            }}
          />
        </>
      ) : (
        <>
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),transparent_38%),linear-gradient(315deg,rgba(36,56,47,0.1),transparent_50%)]" />
          <div aria-hidden className={`absolute left-1/2 top-[54%] h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl ${theme.glow}`} />
          <div
            aria-hidden
            className={`crystal-facet absolute left-1/2 top-1/2 h-[62%] w-[36%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b ${theme.crystal} shadow-[0_22px_48px_rgba(36,56,47,0.16),inset_12px_0_24px_rgba(255,255,255,0.22)] transition-transform duration-500 group-hover:-translate-y-[52%] ${theme.dark ? "border border-white/10" : "border border-white/50"}`}
          />
          <div aria-hidden className={`crystal-point absolute bottom-[18%] right-[23%] h-[32%] w-[18%] rotate-12 bg-white/25 ${theme.dark ? "opacity-20" : "opacity-60"}`} />
          <div aria-hidden className="absolute inset-x-6 bottom-5 h-px bg-forest/10" />
        </>
      )}
    </div>
  );
}
