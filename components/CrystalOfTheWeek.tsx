import CrystalVisual from "./CrystalVisual";

export default function CrystalOfTheWeek() {
  return (
    <section className="container-x section-pad">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-br from-[#fbf1d8] via-ivory to-sage/20 p-6 shadow-[0_28px_90px_-58px_rgba(36,56,47,0.5)] sm:p-10 lg:p-14">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.7),transparent_36%),linear-gradient(305deg,rgba(200,169,106,0.24),transparent_48%)]" />
        <div aria-hidden className="section-motes motion-reduce:hidden">
          {[
            { left: "8%",  bottom: "10%", size: 6, delay: "0s"   },
            { left: "16%", bottom: "4%",  size: 4, delay: "2.4s" },
            { left: "26%", bottom: "18%", size: 7, delay: "1.1s" },
            { left: "38%", bottom: "8%",  size: 5, delay: "4.6s" },
            { left: "48%", bottom: "22%", size: 8, delay: "0.6s" },
            { left: "58%", bottom: "6%",  size: 5, delay: "3.3s" },
            { left: "68%", bottom: "14%", size: 6, delay: "5.7s" },
            { left: "78%", bottom: "9%",  size: 4, delay: "1.9s" },
            { left: "88%", bottom: "20%", size: 7, delay: "4.1s" },
            { left: "94%", bottom: "5%",  size: 5, delay: "6.4s" },
          ].map((p, i) => (
            <span
              key={i}
              style={{
                left: p.left,
                bottom: p.bottom,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: p.delay,
                background:
                  i % 2 === 0
                    ? "radial-gradient(circle, rgba(244,213,138,0.7) 0%, rgba(244,213,138,0) 70%)"
                    : "radial-gradient(circle, rgba(255,252,245,0.78) 0%, rgba(255,252,245,0) 70%)",
                boxShadow:
                  i % 2 === 0
                    ? "0 0 12px 2px rgba(200,169,106,0.32)"
                    : "0 0 10px 2px rgba(255,252,245,0.3)",
              }}
            />
          ))}
        </div>
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="order-2 lg:order-1">
            <span className="eyebrow text-gold">Crystal of the Week</span>
            <h2 className="mt-4 font-serif text-4xl leading-none text-forest sm:text-5xl md:text-6xl">Citrine</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-forest/75 sm:text-lg">
              Often called the stone of confidence and abundance, Citrine is traditionally used to support creativity, motivation and a brighter sense of direction.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/crystal-library/citrine" className="btn-secondary bg-white/40">Learn About Citrine</a>
              <a href="/shop?crystal=citrine" className="btn-gold">Shop Citrine</a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mx-auto max-w-md rounded-[2rem] border border-white/70 bg-white/50 p-4 shadow-soft backdrop-blur">
              <CrystalVisual accent="citrine" label="Citrine crystal point" ratio="portrait" src="/images/stock/citrine.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
