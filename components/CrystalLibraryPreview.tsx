export default function CrystalLibraryPreview() {
  return (
    <section id="library" className="container-x section-pad">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-forest/12 bg-white/55 p-8 text-center shadow-[0_28px_90px_-58px_rgba(36,56,47,0.45)] backdrop-blur-sm sm:p-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,169,106,0.18),transparent_60%),radial-gradient(ellipse_at_50%_100%,rgba(156,175,136,0.16),transparent_60%)]" />
        <div className="relative">
          <span className="eyebrow">Knowledge garden</span>
          <h2 className="h-section mt-4">Explore the Crystal Library</h2>
          <p className="mx-auto mt-4 max-w-xl text-forest/65">
            Learn the meanings, uses, chakras and traditional associations of your favourite crystals.
          </p>

          <form
            className="mx-auto mt-8 flex w-full max-w-xl items-center gap-2 rounded-full border border-forest/15 bg-white/80 p-2 pl-6 shadow-soft backdrop-blur"
            action="/crystal-library"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-forest/50">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              name="q"
              placeholder="Search by name, intention, chakra or zodiac..."
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-forest placeholder:text-forest/40 focus:outline-none"
            />
            <button type="submit" className="btn-primary hidden px-5 py-2.5 text-xs sm:inline-flex">
              Search
            </button>
          </form>

          <a href="/crystal-library" className="card-cta mt-6 inline-flex">
            Or browse the full library
            <span aria-hidden className="card-cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
