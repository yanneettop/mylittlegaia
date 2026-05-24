export default function Newsletter() {
  return (
    <section id="newsletter" className="container-x pb-24 sm:pb-32">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-forest p-10 text-ivory sm:p-16 lg:p-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(200,169,106,0.18),transparent_36%),linear-gradient(315deg,rgba(156,175,136,0.18),transparent_46%)]" />

        <div className="relative mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold">Free gift</span>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Get the free Crystal Starter Guide
          </h2>
          <p className="mt-5 text-ivory/75">
            Join the My Little Gaia circle and receive simple crystal tips, rituals and new product updates.
          </p>

          <form className="mx-auto mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-ivory/20 bg-ivory/10 px-6 py-3.5 text-sm text-ivory placeholder:text-ivory/50 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">Join the Circle</button>
          </form>
        </div>
      </div>
    </section>
  );
}
