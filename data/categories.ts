import type { CrystalAccent, Product } from "@/data/products";
import { products } from "@/data/products";

export type ProductForm = {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  accent: CrystalAccent;
  src?: string;
};

export const productForms: ProductForm[] = [
  {
    slug: "tumble-stones",
    title: "Tumble Stones",
    navLabel: "Tumble Stones",
    description:
      "Polished crystals made for daily rituals, pockets, meditation corners and meaningful little gifts.",
    accent: "amethyst",
    src: "/images/products/tumble-stones/tumble-stones-crystals-category-hero.webp",
  },
  {
    slug: "raw-crystals",
    title: "Raw Crystals",
    navLabel: "Raw Crystals",
    description:
      "Natural unpolished crystals with an earthy, organic feel for grounded ritual spaces.",
    accent: "rose",
    src: "/images/categories/my-little-gaia-raw-crystals.webp",
  },
  {
    slug: "points-towers",
    title: "Crystal Points & Towers",
    navLabel: "Points & Towers",
    description:
      "Standing crystal points, towers and obelisks for altar styling and intention work.",
    accent: "citrine",
    src: "/images/categories/my-little-gaia-crystal-points-towers.webp",
  },
  {
    slug: "clusters",
    title: "Crystal Clusters",
    navLabel: "Clusters",
    description:
      "Natural crystal clusters such as amethyst and quartz, ideal as decorative statement pieces.",
    accent: "amethyst",
    src: "/images/categories/my-little-gaia-crystal-clusters.webp",
  },
  {
    slug: "palm-worry-stones",
    title: "Palm & Worry Stones",
    navLabel: "Palm & Worry Stones",
    description:
      "Smooth, hand-sized stones made for holding, grounding, calming and stress relief.",
    accent: "tiger",
    src: "/images/categories/my-little-gaia-crystal-palm-worry-stones.webp",
  },
  {
    slug: "crystal-hearts",
    title: "Crystal Hearts",
    navLabel: "Crystal Hearts",
    description:
      "Heart-shaped crystals for love, self-care, emotional healing and meaningful gifting.",
    accent: "rose",
    src: "/images/categories/my-little-gaia-crystal-heart-stones.webp",
  },
  {
    slug: "bracelets-jewellery",
    title: "Crystal Bracelets & Jewellery",
    navLabel: "Bracelets & Jewellery",
    description:
      "Wearable crystal pieces including bracelets, pendants and necklaces for daily ritual.",
    accent: "moonstone",
    src: "/images/categories/my-little-gaia-crystal-bracelets-jewellery.webp",
  },
  {
    slug: "crystal-sets",
    title: "Crystal Sets",
    navLabel: "Crystal Sets",
    description:
      "Curated crystal bundles for love, protection, abundance, calm, sleep and chakra balance.",
    accent: "quartz",
    src: "/images/my-little-gaia-hero.webp",
  },
  {
    slug: "ritual-tools",
    title: "Cleansing & Ritual Tools",
    navLabel: "Ritual Tools",
    description:
      "Selenite wands, sage, palo santo, incense, ritual bowls and altar accessories.",
    accent: "selenite",
    src: "/images/categories/my-little-gaia-cleansing-ritual-tools.webp",
  },
  {
    slug: "mystery-bags",
    title: "Mystery Crystal Bags",
    navLabel: "Mystery Bags",
    description:
      "Small surprise crystal pouches, ideal for gifts, beginners and gentle add-ons.",
    accent: "labradorite",
  },
];

export type IntentionCollection = {
  slug: string;
  title: string;
  description: string;
  icon: "spark" | "shield" | "heart" | "sun" | "diamond" | "moon" | "bolt" | "leaf";
  tint: string;
};

export const intentionCollections: IntentionCollection[] = [
  {
    slug: "love",
    title: "Love",
    description: "For tenderness, self-love and heart-led rituals.",
    icon: "heart",
    tint: "from-rose/40 via-white/40 to-ivory",
  },
  {
    slug: "protection",
    title: "Protection",
    description: "For grounding your space and setting energetic boundaries.",
    icon: "shield",
    tint: "from-forest/20 via-white/40 to-ivory",
  },
  {
    slug: "abundance",
    title: "Abundance",
    description: "For confidence, creative energy and growth-focused intention.",
    icon: "sun",
    tint: "from-gold/40 via-white/40 to-ivory",
  },
  {
    slug: "calm-sleep",
    title: "Calm & Sleep",
    description: "For softer evenings, quiet thoughts and peaceful rest.",
    icon: "moon",
    tint: "from-sage/30 via-white/40 to-ivory",
  },
  {
    slug: "energy-focus",
    title: "Energy & Focus",
    description: "For brighter mornings, momentum and clear-headed focus.",
    icon: "bolt",
    tint: "from-gold/30 via-white/40 to-ivory",
  },
  {
    slug: "chakra-balance",
    title: "Chakra Balance",
    description: "For aligned energy across all seven chakras.",
    icon: "diamond",
    tint: "from-sand/50 via-white/40 to-ivory",
  },
];

export const featuredForms = productForms.filter((form) =>
  ["tumble-stones", "raw-crystals", "points-towers", "clusters", "palm-worry-stones", "crystal-sets"].includes(form.slug),
);

export const intentionSlugToTerms: Record<string, string[]> = {
  "love": ["Love", "Self-Love", "Compassion", "Emotional Softness"],
  "protection": ["Protection", "Grounding", "Clearing"],
  "abundance": ["Abundance", "Confidence", "Creativity"],
  "calm-sleep": ["Calm", "Sleep", "Evening Ritual"],
  "energy-focus": ["Energy", "Focus", "Clarity", "Amplification", "Courage"],
  "chakra-balance": ["Chakra", "Balance"],
};

export function getFormBySlug(slug: string): ProductForm | undefined {
  return productForms.find((form) => form.slug === slug);
}

export function getIntentionBySlug(slug: string): IntentionCollection | undefined {
  return intentionCollections.find((intention) => intention.slug === slug);
}

export function getProductsByFormSlug(slug: string): Product[] {
  const form = getFormBySlug(slug);
  if (!form) return [];
  return products.filter((product) => product.category === form.title);
}

export function getProductsByIntentionSlug(slug: string): Product[] {
  const terms = intentionSlugToTerms[slug];
  if (!terms) return [];
  return products.filter((product) =>
    product.intentions.some((value) => terms.includes(value)),
  );
}
