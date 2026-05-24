import { bundles } from "@/lib/data";
import CrystalVisual from "./CrystalVisual";

export default function RitualBundles() {
  return (
    <section id="rituals" className="bg-gradient-to-b from-transparent via-sage/10 to-transparent section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Curated sets</span>
          <h2 className="h-section mt-4">Ritual Bundles</h2>
          <p className="mt-4 text-forest/65">
            Curated crystal sets for everyday moments, from restful sleep to energetic protection.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bundles.map((bundle) => (
            <a key={bundle.name} href="/shop" className="group card card-halo flex flex-col p-4">
              <div className="relative">
                <CrystalVisual accent={bundle.accent} label={`${bundle.name} image`} ratio="portrait" src={bundle.src} />
                <span className="card-badge">Bundle</span>
              </div>
              <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                <h3 className="font-serif text-lg leading-snug text-forest transition group-hover:text-gold">{bundle.name}</h3>
                <p className="mt-2 text-sm leading-6 text-forest/65">{bundle.description}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <span className="text-sm font-semibold text-forest">{bundle.price}</span>
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
