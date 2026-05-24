const trustItems = [
  {
    title: "Hand-selected crystals",
    text: "Chosen for texture, presence and natural beauty.",
  },
  {
    title: "Beginner-friendly guides",
    text: "Simple meanings, rituals and care notes as you shop.",
  },
  {
    title: "Ritual bundles",
    text: "Curated sets for calm, protection, love and intention.",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative z-20 border-y border-forest/8 bg-[#F7F1E8]">
      <div className="container-x py-5 sm:py-6">
        <div className="grid gap-3 md:grid-cols-3">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-3 rounded-2xl border border-forest/10 bg-white/64 px-4 py-4 shadow-[0_14px_34px_-30px_rgba(23,55,47,0.45)]"
            >
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#B3832B] shadow-[0_0_0_5px_rgba(179,131,43,0.12)]" aria-hidden />
              <span>
                <strong className="block text-sm font-extrabold tracking-wide text-[#17372F]">{item.title}</strong>
                <span className="mt-1 block text-sm leading-6 text-forest/68">{item.text}</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
