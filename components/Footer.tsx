type FooterLink = { label: string; href: string };
const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Shop",
    links: [
      { label: "All Crystals", href: "/shop" },
      { label: "Tumble Stones", href: "/shop?category=tumble-stones" },
      { label: "Crystal Sets", href: "/shop?category=crystal-sets" },
      { label: "Ritual Tools", href: "/shop?category=ritual-tools" },
      { label: "Bracelets & Jewellery", href: "/shop?category=bracelets-jewellery" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Crystal Library", href: "/crystal-library" },
      { label: "Rituals", href: "/#rituals" },
      { label: "Beginner's Guide", href: "/#beginners" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#newsletter" },
      { label: "Shipping & Returns", href: "/shipping-returns" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-ivory">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="/" className="font-serif text-2xl text-forest">
              My Little <span className="italic text-gold">Gaia</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-forest/65">
              An online sanctuary of hand-selected crystals, ritual bundles and beginner-friendly guides, created for modern souls and earthly living.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Instagram", "TikTok", "Pinterest"].map((social) => (
                <a key={social} href="#" aria-label={social} className="rounded-full border border-forest/15 px-4 py-2 text-xs text-forest/70 transition hover:border-forest hover:text-forest">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="font-serif text-sm text-forest">{column.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-forest/60 transition hover:text-forest">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-forest/10 pt-6 text-xs leading-5 text-forest/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} My Little Gaia. Crafted with quiet intention.</p>
          <p className="max-w-xl">
            Crystal meanings are based on traditional and spiritual associations. They are not medical advice and should not replace professional care.
          </p>
        </div>
      </div>
    </footer>
  );
}
