import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { intentionCollections } from "@/data/categories";

export const metadata: Metadata = {
  title: "Shop by Intention | My Little Gaia",
  description:
    "Find crystals chosen for the energy you want to invite in — love, protection, abundance, calm and sleep, energy and focus, chakra balance.",
};

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

export default function IntentionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        <section className="container-x py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: "Intentions" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <span className="eyebrow">Curated by purpose</span>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-forest sm:text-5xl lg:text-6xl">
              Shop by Intention
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-forest/70 sm:text-lg">
              Find crystals chosen for the energy you want to invite into your life — from
              softer evenings and grounded boundaries to brighter mornings and chakra balance.
            </p>
          </div>
        </section>

        <section className="container-x pb-24">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {intentionCollections.map((intention) => (
              <Link
                key={intention.slug}
                href={`/shop/intention/${intention.slug}`}
                aria-label={`Shop crystals for ${intention.title}`}
                className="group card relative overflow-hidden p-6"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${intention.tint} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative flex flex-col">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest/5 text-forest shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition group-hover:bg-gold/30">
                    <svg aria-hidden width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {icons[intention.icon]}
                    </svg>
                  </div>
                  <h2 className="mt-5 font-serif text-2xl text-forest">{intention.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-forest/65">{intention.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-forest/65 transition group-hover:text-gold">
                    Shop {intention.title.toLowerCase()}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
