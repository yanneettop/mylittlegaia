import { whyGaia } from "@/lib/data";

export default function WhyGaia() {
  return (
    <section className="container-x section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Thoughtful by nature</span>
        <h2 className="h-section mt-4">Why My Little Gaia?</h2>
        <p className="mt-4 text-forest/65">
          A softer way to shop for crystals, guided by intention, meaning and everyday ritual.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyGaia.map((item, index) => (
          <article key={item.title} className="card relative overflow-hidden">
            <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sage via-gold to-rose opacity-70" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 font-serif text-xl leading-snug text-forest">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-forest/65">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
