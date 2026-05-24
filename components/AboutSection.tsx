import { whyGaia } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="container-x section-pad">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative h-80 overflow-hidden rounded-[2.5rem] border border-forest/10 bg-gradient-to-br from-sage/40 via-ivory to-sand/50 shadow-soft sm:h-[28rem]">
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.6),transparent_38%),linear-gradient(310deg,rgba(36,56,47,0.1),transparent_48%)]" />
          <div aria-hidden className="crystal-facet absolute left-12 top-14 h-48 w-32 -rotate-12 bg-gradient-to-b from-rose/50 to-rose/15 shadow-soft animate-float" />
          <div aria-hidden className="crystal-facet absolute bottom-12 right-16 h-60 w-40 rotate-12 bg-gradient-to-b from-gold/50 to-sand/20 shadow-soft animate-float-slow" />
          <div aria-hidden className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forest/10 to-transparent" />
        </div>
        <div>
          <span className="eyebrow">Our story</span>
          <h2 className="h-section mt-4">A small space for earthly magic.</h2>
          <p className="mt-6 text-base leading-8 text-forest/75 sm:text-lg">
            My Little Gaia was created for people who feel connected to nature, energy and intentional living.
            Every crystal has its own texture, story and quiet presence. Our goal is to make crystals easier to
            understand, easier to choose and more meaningful to use.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {whyGaia.map((item, index) => (
              <li key={item.title} className="flex gap-4">
                <span className="font-serif text-sm font-semibold text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-base leading-snug text-forest">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-forest/65">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="/#about" className="btn-secondary mt-10 inline-flex">Our Story</a>
        </div>
      </div>
    </section>
  );
}
