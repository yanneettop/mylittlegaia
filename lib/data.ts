export type Intention = {
  slug: string;
  title: string;
  description: string;
  icon: "spark" | "shield" | "heart" | "sun" | "diamond" | "moon" | "bolt" | "leaf";
  tint: string;
};

export const intentions: Intention[] = [
  {
    slug: "calm-sleep",
    title: "Calm & Sleep",
    description: "For softer evenings, quiet thoughts and peaceful rituals.",
    icon: "moon",
    tint: "from-sage/30 via-white/40 to-ivory",
  },
  {
    slug: "protection",
    title: "Protection",
    description: "For grounding your space and setting energetic boundaries.",
    icon: "shield",
    tint: "from-forest/20 via-white/40 to-ivory",
  },
  {
    slug: "love",
    title: "Love & Self-Love",
    description: "For tenderness, compassion and heart-led routines.",
    icon: "heart",
    tint: "from-rose/40 via-white/40 to-ivory",
  },
  {
    slug: "abundance",
    title: "Abundance",
    description: "For confidence, creativity and an open mindset around growth.",
    icon: "sun",
    tint: "from-gold/40 via-white/40 to-ivory",
  },
  {
    slug: "focus",
    title: "Focus & Clarity",
    description: "For clearing mental fog and returning to what matters.",
    icon: "diamond",
    tint: "from-sand/50 via-white/40 to-ivory",
  },
  {
    slug: "energy-confidence",
    title: "Energy & Confidence",
    description: "For brighter mornings, momentum and self-trust.",
    icon: "bolt",
    tint: "from-gold/30 via-white/40 to-ivory",
  },
  {
    slug: "grounding",
    title: "Grounding",
    description: "For steadiness, presence and feeling rooted in your day.",
    icon: "leaf",
    tint: "from-forest/16 via-sage/20 to-ivory",
  },
  {
    slug: "spiritual-growth",
    title: "Spiritual Growth",
    description: "For intuition, reflection and deeper personal ritual.",
    icon: "spark",
    tint: "from-sage/30 via-white/40 to-ivory",
  },
];

export type Crystal = {
  name: string;
  meaning: string;
  tags: string[];
  price: string;
  accent: "amethyst" | "rose" | "citrine" | "tourmaline" | "quartz" | "selenite" | "tiger" | "moonstone" | "labradorite";
  src?: string;
};

export const featuredCrystals: Crystal[] = [
  {
    name: "Amethyst Tumbled Stone",
    meaning: "Traditionally associated with calm, sleep and intuition.",
    tags: ["Calm", "Sleep", "Intuition"],
    price: "From £8",
    accent: "amethyst",
    src: "/images/my-little-gaia-hero.webp",
  },
  {
    name: "Rose Quartz Raw Crystal",
    meaning: "Often used for love, self-love and compassion rituals.",
    tags: ["Love", "Self-Love", "Compassion"],
    price: "From £7",
    accent: "rose",
    src: "/images/stock/rose-quartz.jpg",
  },
  {
    name: "Citrine Crystal Point",
    meaning: "Traditionally linked with confidence, creativity and abundance.",
    tags: ["Confidence", "Creativity", "Abundance"],
    price: "From £12",
    accent: "citrine",
    src: "/images/stock/citrine.jpg",
  },
  {
    name: "Black Tourmaline Protection Stone",
    meaning: "Often chosen for protection, grounding and energy clearing.",
    tags: ["Protection", "Grounding", "Clearing"],
    price: "From £9",
    accent: "tourmaline",
    src: "/images/stock/black-tourmaline.jpg",
  },
];

export type Guide = { title: string; readTime: string; tag: string; gradient: string };
export const guides: Guide[] = [
  { title: "How to choose your first crystal", readTime: "4 min read", tag: "Beginner", gradient: "from-sage/40 to-ivory" },
  { title: "How to cleanse your crystals", readTime: "5 min read", tag: "Care", gradient: "from-rose/40 to-ivory" },
  { title: "How to set an intention", readTime: "3 min read", tag: "Ritual", gradient: "from-gold/40 to-ivory" },
  { title: "Best crystals for beginners", readTime: "6 min read", tag: "Guide", gradient: "from-sand/60 to-ivory" },
];

export type Bundle = { name: string; description: string; price: string; accent: Crystal["accent"]; src?: string };
export const bundles: Bundle[] = [
  { name: "Sleep Ritual Kit", description: "Amethyst, Selenite and lavender for restful evening rituals.", price: "£28", accent: "amethyst", src: "/images/stock/selenite.jpg" },
  { name: "Protection Kit", description: "Black Tourmaline, Obsidian and smoky quartz for grounding your space.", price: "£32", accent: "tourmaline", src: "/images/stock/black-tourmaline.jpg" },
  { name: "Abundance Kit", description: "Citrine, Pyrite and green aventurine for intention around growth.", price: "£30", accent: "citrine", src: "/images/stock/citrine.jpg" },
  { name: "Love & Healing Kit", description: "Rose Quartz, Rhodonite and rose petals for gentle heart rituals.", price: "£28", accent: "rose", src: "/images/stock/rose-quartz.jpg" },
];

export type LibraryCrystal = { name: string; tags: string[]; accent: Crystal["accent"]; src?: string };
export const libraryPreview: LibraryCrystal[] = [
  { name: "Amethyst", tags: ["Calm", "Crown Chakra", "Sleep"], accent: "amethyst" },
  { name: "Clear Quartz", tags: ["Clarity", "Amplifying", "All Chakras"], accent: "quartz" },
  { name: "Selenite", tags: ["Cleansing", "Peace", "Crown Chakra"], accent: "selenite", src: "/images/stock/selenite.jpg" },
  { name: "Tiger's Eye", tags: ["Confidence", "Protection", "Solar Plexus"], accent: "tiger", src: "/images/stock/tigers-eye.jpg" },
  { name: "Moonstone", tags: ["Intuition", "Dreams", "New Beginnings"], accent: "moonstone" },
  { name: "Labradorite", tags: ["Transformation", "Intuition", "Third Eye"], accent: "labradorite" },
];

export const whyGaia = [
  {
    title: "Hand-selected pieces",
    description: "Each crystal is chosen with care for its texture, beauty and presence.",
  },
  {
    title: "Beginner-friendly guidance",
    description: "Learn what each crystal is traditionally associated with and how to use it.",
  },
  {
    title: "Shop by intention",
    description: "Find crystals for calm, protection, love, abundance, focus and more.",
  },
  {
    title: "Carefully packed in the UK",
    description: "Thoughtful packaging for gifts, rituals and personal collections.",
  },
];
