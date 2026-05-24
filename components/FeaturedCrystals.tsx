import { featuredCrystals } from "@/lib/data";
import CrystalVisual from "./CrystalVisual";

export default function FeaturedCrystals() {
  return (
    <section className="bg-gradient-to-b from-transparent via-sand/10 to-transparent section-pad">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">Loved by the circle</span>
            <h2 className="h-section mt-4">Featured Crystals</h2>
          </div>
          <a href="/shop" className="text-sm font-semibold text-forest/70 transition hover:text-forest">View all crystals</a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCrystals.map((crystal) => (
            <a key={crystal.name} href="/shop" className="group card card-halo flex flex-col p-4">
              <CrystalVisual accent={crystal.accent} label={`${crystal.name} product image`} src={crystal.src} />
              <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                <h3 className="font-serif text-xl leading-snug text-forest transition group-hover:text-gold">{crystal.name}</h3>
                <p className="mt-2 text-sm leading-6 text-forest/65">{crystal.meaning}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {crystal.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-forest/[0.055] px-2.5 py-1 text-[10px] font-medium tracking-wide text-forest/60">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <span className="text-sm font-semibold text-forest">{crystal.price}</span>
                  <span className="card-cta">
                    View
                    <span aria-hidden className="card-cta-arrow">→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
