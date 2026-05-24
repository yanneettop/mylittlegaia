import Image from "next/image";
import { guides } from "@/lib/data";

const slugify = (s: string) =>
  s.toLowerCase().replaceAll("'", "").replaceAll(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const guideStyles = [
  {
    tone: "from-sage/28 via-ivory to-white",
    wash: "bg-sage/20",
    accent: "bg-sage/35",
    icon: "sprout",
  },
  {
    tone: "from-white via-[#f6f0e7] to-ivory",
    wash: "bg-sand/24",
    accent: "bg-white/85",
    icon: "drop",
  },
  {
    tone: "from-rose/20 via-[#f4e7dc] to-sand/28",
    wash: "bg-rose/20",
    accent: "bg-gold/26",
    icon: "spark",
  },
  {
    tone: "from-[#eee5f5] via-ivory to-white",
    wash: "bg-[#b89bd7]/18",
    accent: "bg-[#d8c4ea]/35",
    icon: "book",
  },
];

const guideCopy = [
  {
    text: "Start with what you need right now: calm, protection, love, clarity or confidence. Choose by meaning, colour, shape or simply by the crystal you feel drawn to.",
  },
  {
    text: "Learn simple ways to refresh your crystals using selenite, moonlight, smoke or sound. Gentle methods are best when you are just beginning.",
  },
  {
    text: "Hold your crystal, breathe slowly and choose one clear sentence. Your intention gives the crystal a purpose and helps you return to your focus.",
  },
  {
    text: "Discover five easy crystals to start with: Amethyst, Rose Quartz, Clear Quartz, Black Tourmaline and Citrine.",
  },
];

const guideImages = [
  "/images/guides/choose-first-crystal.svg",
  "/images/guides/cleanse-crystals.svg",
  "/images/guides/set-intention.svg",
  "/images/guides/beginner-crystals.svg",
];

const guideHrefs = [
  "/crystal-guides/how-to-choose-your-first-crystal",
  "/crystal-guides/how-to-cleanse-your-crystals",
  "/crystal-guides/how-to-set-an-intention-with-crystals",
  "/crystal-guides/best-crystals-for-beginners",
];

export default function BeginnersGuide() {
  return (
    <section className="container-x section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">For new beginnings</span>
        <h2 className="h-section mt-4">New to crystals? Start here.</h2>
        <p className="mt-4 text-forest/65">
          A calm beginner’s guide to choosing your first crystals, understanding their meaning, and using them in simple daily rituals.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((guide, index) => {
          const style = guideStyles[index] ?? guideStyles[0];
          const copy = guideCopy[index]?.text;
          const image = guideImages[index];

          return (
            <a
              key={guide.title}
              href={guideHrefs[index] ?? `/journal/${slugify(guide.title)}`}
              className="group card-halo flex min-h-[22rem] flex-col overflow-hidden rounded-3xl border border-forest/10 bg-white/68 p-0 shadow-[0_14px_44px_-34px_rgba(36,56,47,0.38)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_24px_60px_-34px_rgba(200,169,106,0.42)]"
            >
              <div className={`relative aspect-[6/4] overflow-hidden bg-gradient-to-br ${style.tone}`}>
                {image && (
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.035] group-hover:brightness-[1.04]"
                  />
                )}
                <div aria-hidden className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0),rgba(247,241,232,0.14))]" />
                <span className="absolute left-4 top-4 rounded-full bg-white/86 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest/68 backdrop-blur">
                  {guide.tag}
                </span>
                {index === 0 && (
                  <span className="absolute bottom-4 right-4 rounded-full border border-gold/25 bg-ivory/86 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold shadow-[0_10px_28px_-22px_rgba(36,56,47,0.5)]">
                    Start here
                  </span>
                )}
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-forest/10 bg-white/70 text-forest/62 shadow-[0_10px_28px_-24px_rgba(36,56,47,0.45)] backdrop-blur">
                  <GuideIcon name={style.icon} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-lg leading-snug text-forest transition group-hover:text-gold">{guide.title}</h3>
                {copy && <p className="mt-3 text-sm leading-6 text-forest/63">{copy}</p>}
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <span className="text-xs text-forest/55">{guide.readTime}</span>
                  <span className="card-cta">
                    Read
                    <span aria-hidden className="card-cta-arrow">&rarr;</span>
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <a href="/crystal-library" className="group inline-flex items-center gap-2 rounded-full border border-forest/12 bg-white/45 px-6 py-3 text-sm font-semibold text-forest/72 shadow-[0_14px_40px_-34px_rgba(36,56,47,0.45)] transition hover:-translate-y-0.5 hover:border-gold/35 hover:bg-white hover:text-forest">
          Explore the Crystal Library
          <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </a>
      </div>
    </section>
  );
}

function GuideIcon({ name }: { name: string }) {
  if (name === "drop") {
    return (
      <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5s6 6.3 6 11a6 6 0 0 1-12 0c0-4.7 6-11 6-11Z" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
        <path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
      </svg>
    );
  }

  if (name === "book") {
    return (
      <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4.5h7a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H5V4.5Z" />
        <path d="M19 4.5h-3a4 4 0 0 0-4 4" />
      </svg>
    );
  }

  return (
    <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20c8 0 11-6 11-14v-2h-2C8 4 4 8 4 16v4h3Z" />
      <path d="M4 20c3-5 7-8 12-10" />
    </svg>
  );
}
