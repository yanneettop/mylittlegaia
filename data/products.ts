export type CrystalAccent =
  | "amethyst"
  | "rose"
  | "citrine"
  | "tourmaline"
  | "quartz"
  | "selenite"
  | "tiger"
  | "aventurine"
  | "moonstone"
  | "labradorite"
  | "obsidian";

export type StockStatus = "In stock" | "Low stock" | "Coming soon" | "Out of stock";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  crystalType: string;
  price: string;
  compareAtPrice?: string;
  stockStatus: StockStatus;
  shortDescription: string;
  fullDescription: string;
  intentions: string[];
  chakras?: string[];
  zodiac?: string[];
  bestFor: string[];
  care?: string;
  intention?: string;
  note?: string;
  howToUse: string[];
  howToCleanse: string[];
  images: { alt: string; accent: CrystalAccent; src?: string }[];
  tags: string[];
  featured: boolean;
  isAffiliateProduct: boolean;
  affiliateUrl?: string;
};

const tumbleStoneImagePath = "/images/products/tumble-stones";
const tumbleStoneNote =
  "Each crystal is natural and unique, so colour, shape and pattern may vary slightly. Crystal meanings are offered as spiritual and wellbeing guidance and are not a substitute for medical or professional advice.";

function tumbleStoneImages(fileSlug: string, crystal: string, accent: CrystalAccent): Product["images"] {
  return [
    {
      alt: `Close-up of polished ${crystal.toLowerCase()} tumble stone with natural crystal texture`,
      accent,
      src: `${tumbleStoneImagePath}/${fileSlug}-tumble-stone-close-up.webp`,
    },
    {
      alt: `${crystal} tumble stone product photo with polished crystals in a ceramic bowl`,
      accent,
      src: `${tumbleStoneImagePath}/${fileSlug}-tumble-stone-product.webp`,
    },
    {
      alt: `${crystal} tumble stone guide with benefits, chakra, zodiac and care information`,
      accent,
      src: `${tumbleStoneImagePath}/${fileSlug}-tumble-stone-guide.webp`,
    },
  ];
}

const tumbleStoneProducts: Product[] = [
  {
    id: "prod_amethyst_tumble_stone",
    name: "Amethyst Tumble Stone",
    slug: "amethyst-tumble-stone",
    category: "Tumble Stones",
    crystalType: "Amethyst",
    price: "£3.50",
    stockStatus: "In stock",
    shortDescription: "A calming purple crystal loved for peace, intuition and emotional balance.",
    fullDescription:
      "Amethyst is one of the most loved crystals for calm energy, meditation and evening rituals. Its soft purple tones make it a beautiful daily stone for moments when you want to slow down, breathe deeper and reconnect with yourself.",
    intentions: ["Calm", "Intuition", "Emotional Balance"],
    chakras: ["Third Eye & Crown"],
    zodiac: ["Pisces", "Aquarius"],
    bestFor: ["Stress relief", "Sleep rituals", "Meditation", "Intuition"],
    care: "Avoid long direct sunlight. Cleanse with moonlight, smoke or sound.",
    intention: "I allow calm, clarity and peaceful energy into my space.",
    note: tumbleStoneNote,
    howToUse: ["Carry in a pocket, hold during meditation or place beside your bed for a calming ritual."],
    howToCleanse: ["Avoid long direct sunlight. Cleanse with moonlight, smoke or sound."],
    images: tumbleStoneImages("amethyst", "Amethyst", "amethyst"),
    tags: ["Tumble Stone", "Calm", "Sleep", "Meditation"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_rose_quartz_tumble_stone",
    name: "Rose Quartz Tumble Stone",
    slug: "rose-quartz-tumble-stone",
    category: "Tumble Stones",
    crystalType: "Rose Quartz",
    price: "£3.50",
    stockStatus: "In stock",
    shortDescription: "A gentle pink crystal for love, self-care and emotional healing.",
    fullDescription:
      "Rose Quartz carries a soft and nurturing energy, often connected with love, compassion and emotional comfort. Keep it close during self-care rituals, place it beside your bed or gift it to someone special.",
    intentions: ["Love", "Self-Love", "Emotional Healing"],
    chakras: ["Heart"],
    zodiac: ["Taurus", "Libra"],
    bestFor: ["Self-love", "Heart healing", "Love rituals", "Emotional softness"],
    care: "Avoid long direct sunlight. Cleanse with moonlight, smoke or sound.",
    intention: "I open my heart to love, kindness and gentle healing.",
    note: tumbleStoneNote,
    howToUse: ["Carry for a gentle self-love reminder or place in a heart-centred ritual space."],
    howToCleanse: ["Avoid long direct sunlight. Cleanse with moonlight, smoke or sound."],
    images: tumbleStoneImages("rose-quartz", "Rose Quartz", "rose"),
    tags: ["Tumble Stone", "Love", "Self-care", "Heart"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_clear_quartz_tumble_stone",
    name: "Clear Quartz Tumble Stone",
    slug: "clear-quartz-tumble-stone",
    category: "Tumble Stones",
    crystalType: "Clear Quartz",
    price: "£3.50",
    stockStatus: "In stock",
    shortDescription: "A bright crystal for clarity, energy and intention setting.",
    fullDescription:
      "Clear Quartz is known as a versatile crystal for focus, cleansing and amplifying intentions. Its clear, luminous look makes it a perfect starter crystal and a beautiful addition to any ritual or crystal collection.",
    intentions: ["Clarity", "Energy", "Focus"],
    chakras: ["All Chakras"],
    zodiac: ["Aries", "Leo"],
    bestFor: ["Mental clarity", "Intention setting", "Energy cleansing", "Focus"],
    care: "Cleanse with moonlight, smoke or sound. Use alongside other crystals to support intention work.",
    intention: "I clear my mind and focus my energy with purpose.",
    note: tumbleStoneNote,
    howToUse: ["Hold while setting an intention, keep on a desk for focus or pair with another crystal."],
    howToCleanse: ["Cleanse with moonlight, smoke or sound. Use alongside other crystals to support intention work."],
    images: tumbleStoneImages("clear-quartz", "Clear Quartz", "quartz"),
    tags: ["Tumble Stone", "Clarity", "Focus", "Energy"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_citrine_tumble_stone",
    name: "Citrine Tumble Stone",
    slug: "citrine-tumble-stone",
    category: "Tumble Stones",
    crystalType: "Citrine",
    price: "£3.50",
    stockStatus: "In stock",
    shortDescription: "A golden crystal for abundance, confidence and positive energy.",
    fullDescription:
      "Citrine brings a warm, uplifting presence to your crystal collection. Often connected with abundance, joy and confidence, it is a beautiful stone to keep on your desk, altar or anywhere you want to invite brighter energy.",
    intentions: ["Abundance", "Confidence", "Positive Energy"],
    chakras: ["Solar Plexus & Sacral"],
    zodiac: ["Leo", "Gemini"],
    bestFor: ["Manifestation", "Confidence", "Positivity", "Abundance rituals"],
    care: "Avoid long direct sunlight. Cleanse with moonlight, smoke or sound.",
    intention: "I attract abundance, radiate confidence and welcome joy.",
    note: tumbleStoneNote,
    howToUse: ["Place near a written goal, carry for confidence or use in abundance rituals."],
    howToCleanse: ["Avoid long direct sunlight. Cleanse with moonlight, smoke or sound."],
    images: tumbleStoneImages("citrine", "Citrine", "citrine"),
    tags: ["Tumble Stone", "Abundance", "Confidence", "Manifestation"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_black_tourmaline_tumble_stone",
    name: "Black Tourmaline Tumble Stone",
    slug: "black-tourmaline-tumble-stone",
    category: "Tumble Stones",
    crystalType: "Black Tourmaline",
    price: "£3.50",
    stockStatus: "In stock",
    shortDescription: "A grounding black crystal for protection, stability and energetic boundaries.",
    fullDescription:
      "Black Tourmaline is a powerful-looking crystal often chosen for grounding and protection rituals. Its deep black surface gives it a strong, steady presence, making it ideal for desks, doorways, travel pouches or personal rituals.",
    intentions: ["Protection", "Grounding", "Stability"],
    chakras: ["Root"],
    zodiac: ["Capricorn", "Scorpio"],
    bestFor: ["Protection", "Grounding", "Energy boundaries", "Stability"],
    care: "Cleanse with smoke, moonlight or sound. Avoid harsh chemicals.",
    intention: "I am safe, grounded and protected.",
    note: tumbleStoneNote,
    howToUse: ["Carry as a grounding pocket stone or place near an entryway, desk or ritual space."],
    howToCleanse: ["Cleanse with smoke, moonlight or sound. Avoid harsh chemicals."],
    images: tumbleStoneImages("black-tourmaline", "Black Tourmaline", "tourmaline"),
    tags: ["Tumble Stone", "Protection", "Grounding", "Root"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_selenite_tumble_stone",
    name: "Selenite Tumble Stone",
    slug: "selenite-tumble-stone",
    category: "Tumble Stones",
    crystalType: "Selenite",
    price: "£3.50",
    stockStatus: "In stock",
    shortDescription: "A luminous white crystal for cleansing, peace and clarity.",
    fullDescription:
      "Selenite has a soft, pearly appearance and is often used in cleansing rituals. It brings a calm, bright feeling to your space and pairs beautifully with other crystals, meditation corners and bedtime rituals.",
    intentions: ["Cleansing", "Peace", "Clarity"],
    chakras: ["Crown"],
    zodiac: ["Taurus", "Cancer"],
    bestFor: ["Energy cleansing", "Calming rituals", "Charging crystals", "Peaceful spaces"],
    care: "Keep away from water. Cleanse gently with smoke, moonlight or sound.",
    intention: "I welcome clarity, peace and light into my space.",
    note: tumbleStoneNote,
    howToUse: ["Place near other crystals, on an altar or in a calm corner of your home."],
    howToCleanse: ["Keep away from water. Cleanse gently with smoke, moonlight or sound."],
    images: tumbleStoneImages("selenite", "Selenite", "selenite"),
    tags: ["Tumble Stone", "Cleansing", "Peace", "Crown"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_green_aventurine_tumble_stone",
    name: "Green Aventurine Tumble Stone",
    slug: "green-aventurine-tumble-stone",
    category: "Tumble Stones",
    crystalType: "Green Aventurine",
    price: "£3.50",
    stockStatus: "In stock",
    shortDescription: "A soft green crystal for opportunity, growth and optimism.",
    fullDescription:
      "Green Aventurine is often connected with luck, emotional balance and fresh opportunities. Its earthy green colour makes it a beautiful crystal for new beginnings, personal growth and abundance rituals.",
    intentions: ["Opportunity", "Growth", "Optimism"],
    chakras: ["Heart"],
    zodiac: ["Taurus", "Cancer"],
    bestFor: ["Opportunity", "Growth", "Emotional healing", "Optimism"],
    care: "Avoid long direct sunlight. Cleanse with water, smoke or sound.",
    intention: "I welcome opportunity, choose growth and attract abundance.",
    note: tumbleStoneNote,
    howToUse: ["Carry when beginning something new or place near a written intention for growth."],
    howToCleanse: ["Avoid long direct sunlight. Cleanse with water, smoke or sound."],
    images: tumbleStoneImages("green-aventurine", "Green Aventurine", "aventurine"),
    tags: ["Tumble Stone", "Growth", "Opportunity", "Heart"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_tigers_eye_tumble_stone",
    name: "Tiger’s Eye Tumble Stone",
    slug: "tigers-eye-tumble-stone",
    category: "Tumble Stones",
    crystalType: "Tiger’s Eye",
    price: "£3.50",
    stockStatus: "In stock",
    shortDescription: "A golden brown crystal for confidence, courage and focus.",
    fullDescription:
      "Tiger’s Eye has a rich golden shimmer that catches the light beautifully. It is often chosen for confidence, motivation and personal strength, making it a strong everyday crystal for work, decisions and focused action.",
    intentions: ["Confidence", "Courage", "Focus"],
    chakras: ["Solar Plexus & Root"],
    zodiac: ["Leo", "Capricorn"],
    bestFor: ["Confidence", "Protection", "Motivation", "Focus"],
    care: "Cleanse with smoke or moonlight. Avoid long direct sunlight.",
    intention: "I move with confidence, courage and steady focus.",
    note: tumbleStoneNote,
    howToUse: ["Keep on a desk, carry before focused work or hold during confidence rituals."],
    howToCleanse: ["Cleanse with smoke or moonlight. Avoid long direct sunlight."],
    images: tumbleStoneImages("tigers-eye", "Tiger’s Eye", "tiger"),
    tags: ["Tumble Stone", "Confidence", "Courage", "Focus"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_labradorite_tumble_stone",
    name: "Labradorite Tumble Stone",
    slug: "labradorite-tumble-stone",
    category: "Tumble Stones",
    crystalType: "Labradorite",
    price: "£3.50",
    stockStatus: "In stock",
    shortDescription: "A mystical crystal with blue flashes for intuition, protection and transformation.",
    fullDescription:
      "Labradorite is loved for its magical flashes of blue, green and gold. Every piece feels unique, making it a beautiful crystal for transformation, inner wisdom and spiritual protection.",
    intentions: ["Intuition", "Transformation", "Protection"],
    chakras: ["Third Eye"],
    zodiac: ["Scorpio", "Sagittarius", "Pisces"],
    bestFor: ["Intuition", "Transformation", "Protection", "Personal growth"],
    care: "Avoid long direct sunlight. Cleanse with water, smoke or sound.",
    intention: "I trust my intuition, embrace change and protect my energy.",
    note: tumbleStoneNote,
    howToUse: ["Carry during transitions, keep near a journal or hold during intuitive reflection."],
    howToCleanse: ["Avoid long direct sunlight. Cleanse with water, smoke or sound."],
    images: tumbleStoneImages("labradorite", "Labradorite", "labradorite"),
    tags: ["Tumble Stone", "Intuition", "Protection", "Transformation"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_moonstone_tumble_stone",
    name: "Moonstone Tumble Stone",
    slug: "moonstone-tumble-stone",
    category: "Tumble Stones",
    crystalType: "Moonstone",
    price: "£3.50",
    stockStatus: "In stock",
    shortDescription: "A soft glowing crystal for intuition, balance and new beginnings.",
    fullDescription:
      "Moonstone has a dreamy glow with gentle flashes of blue and white. It is often connected with emotional balance, feminine energy and fresh starts, making it perfect for moon rituals, self-reflection and gentle transitions.",
    intentions: ["Intuition", "Balance", "New Beginnings"],
    chakras: ["Crown"],
    zodiac: ["Cancer", "Libra", "Pisces"],
    bestFor: ["Intuition", "Emotional balance", "New beginnings", "Calm energy"],
    care: "Avoid long direct sunlight. Cleanse with water, moonlight, smoke or sound.",
    intention: "I trust my intuition and welcome new beginnings with ease.",
    note: tumbleStoneNote,
    howToUse: ["Use in moon rituals, carry through life transitions or place beside a journal."],
    howToCleanse: ["Avoid long direct sunlight. Cleanse with water, moonlight, smoke or sound."],
    images: tumbleStoneImages("moonstone", "Moonstone", "moonstone"),
    tags: ["Tumble Stone", "Intuition", "Balance", "Moon rituals"],
    featured: true,
    isAffiliateProduct: false,
  },
];

export const products: Product[] = [
  ...tumbleStoneProducts,
  {
    id: "prod_rose_quartz_raw",
    name: "Rose Quartz Raw Crystal",
    slug: "rose-quartz-raw-crystal",
    category: "Raw Crystals",
    crystalType: "Rose Quartz",
    price: "£7",
    stockStatus: "In stock",
    shortDescription: "A soft pink crystal often chosen for self-love, emotional softness and heart-centred rituals.",
    fullDescription:
      "Rose Quartz has a naturally gentle feel and is commonly used in rituals centred on tenderness, compassion and self-kindness. The raw texture makes each piece feel earthy, tactile and quietly personal.",
    intentions: ["Love", "Self-Love", "Compassion"],
    chakras: ["Heart"],
    zodiac: ["Taurus", "Libra"],
    bestFor: ["Self-care spaces", "Gifting", "Heart chakra rituals"],
    howToUse: [
      "Keep in a self-care corner or beside a handwritten intention.",
      "Gift as a symbolic piece for softness, care and friendship.",
      "Hold during heart-centred rituals or reflective breathing practices.",
    ],
    howToCleanse: [
      "Use Selenite, moonlight or a gentle smoke cleanse according to your practice.",
      "Wipe with a soft dry cloth; avoid harsh cleaners.",
    ],
    images: [{ alt: "Rose Quartz raw crystal", accent: "rose", src: "/images/products/rose-quartz-raw-crystal.webp" }],
    tags: ["Raw crystal", "Giftable", "Heart rituals"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_citrine_point",
    name: "Citrine Crystal Point",
    slug: "citrine-crystal-point",
    category: "Crystal Points & Towers",
    crystalType: "Citrine",
    price: "£12",
    stockStatus: "Low stock",
    shortDescription: "A warm golden crystal traditionally associated with confidence, creativity and an open mindset around growth.",
    fullDescription:
      "This Citrine point brings a bright golden accent to desks, altars and morning rituals. It is often chosen for intention setting around creative momentum, confidence and a clearer sense of direction.",
    intentions: ["Confidence", "Creativity", "Abundance"],
    chakras: ["Solar Plexus"],
    zodiac: ["Leo", "Gemini"],
    bestFor: ["Desk spaces", "Creative work", "Morning intention rituals"],
    howToUse: [
      "Place on a desk while setting an intention for focused creative work.",
      "Use in a morning ritual with a written goal or affirmation.",
      "Pair with Clear Quartz when you want a simple clarity-and-confidence set.",
    ],
    howToCleanse: [
      "Cleanse with Selenite, sound or smoke as part of your ritual preference.",
      "Keep away from prolonged direct sunlight to help preserve colour.",
    ],
    images: [{ alt: "Citrine crystal point", accent: "citrine", src: "/images/products/citrine-crystal-point.webp" }],
    tags: ["Crystal point", "Desk ritual", "Golden tone"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_black_tourmaline",
    name: "Black Tourmaline Protection Stone",
    slug: "black-tourmaline-protection-stone",
    category: "Raw Crystals",
    crystalType: "Black Tourmaline",
    price: "£9",
    stockStatus: "In stock",
    shortDescription: "A grounding dark crystal commonly chosen for energetic boundaries and a steady sense of presence.",
    fullDescription:
      "Black Tourmaline is a deeply grounding piece often used in spaces where people want a sense of steadiness and boundary. Its textured dark surface makes it a strong anchor for entryways, desks and ritual shelves.",
    intentions: ["Protection", "Grounding", "Clearing"],
    chakras: ["Root"],
    zodiac: ["Capricorn"],
    bestFor: ["Entryways", "Workspaces", "Grounding rituals"],
    howToUse: [
      "Place near an entryway or workspace as a symbolic boundary stone.",
      "Hold during grounding rituals before starting or ending the day.",
      "Pair with Selenite for a simple clearing-and-grounding setup.",
    ],
    howToCleanse: [
      "Use Selenite, sound or smoke to refresh the stone between rituals.",
      "Keep dry and dust gently with a soft cloth.",
    ],
    images: [{ alt: "Black Tourmaline protection stone", accent: "tourmaline", src: "/images/products/black-tourmaline-protection-stone.webp" }],
    tags: ["Raw crystal", "Grounding", "Entryway"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_clear_quartz_tower",
    name: "Clear Quartz Tower",
    slug: "clear-quartz-tower",
    category: "Crystal Points & Towers",
    crystalType: "Clear Quartz",
    price: "£14",
    stockStatus: "In stock",
    shortDescription: "A clear crystal tower traditionally associated with clarity, focus and amplifying intention.",
    fullDescription:
      "Clear Quartz is a versatile crystal often used as a centrepiece in altar styling and intention work. Its luminous, neutral appearance makes it easy to pair with other crystals in a calm, minimal ritual space.",
    intentions: ["Clarity", "Energy", "Amplification"],
    chakras: ["All Chakras"],
    zodiac: ["All Signs"],
    bestFor: ["Altars", "Meditation spaces", "Pairing with other crystals"],
    howToUse: [
      "Place at the centre of an altar or meditation space.",
      "Pair with another crystal to symbolically amplify the intention of your ritual.",
      "Use during focus rituals with a simple written intention.",
    ],
    howToCleanse: [
      "Cleanse with Selenite, sound, smoke or moonlight according to your preference.",
      "Wipe gently with a soft cloth to keep the tower clear.",
    ],
    images: [{ alt: "Clear Quartz tower", accent: "quartz", src: "/images/my-little-gaia-hero.webp" }],
    tags: ["Tower", "Clarity", "Altar"],
    featured: false,
    isAffiliateProduct: false,
  },
  {
    id: "prod_selenite_wand",
    name: "Selenite Cleansing Wand",
    slug: "selenite-cleansing-wand",
    category: "Cleansing & Ritual Tools",
    crystalType: "Selenite",
    price: "£10",
    stockStatus: "In stock",
    shortDescription: "A luminous cleansing tool often used in rituals to refresh spaces, crystals and intention settings.",
    fullDescription:
      "Selenite is commonly chosen as a ritual tool for refreshing crystal collections, altar spaces and daily intention settings. Its pale, luminous finish brings a clean and peaceful visual note to any shelf or bedside.",
    intentions: ["Cleansing", "Clarity", "Ritual"],
    chakras: ["Crown"],
    zodiac: ["Taurus", "Cancer"],
    bestFor: ["Crystal cleansing", "Altar styling", "Evening rituals"],
    howToUse: [
      "Place near other crystals as part of a cleansing ritual setup.",
      "Use as an altar styling piece to create a calm focal point.",
      "Move gently around a space while setting a fresh intention.",
    ],
    howToCleanse: [
      "Selenite is often used as a cleansing crystal itself, but you can refresh it with moonlight or sound.",
      "Keep dry; Selenite is delicate and should not be soaked.",
    ],
    images: [{ alt: "Selenite cleansing wand", accent: "selenite", src: "/images/stock/selenite.jpg" }],
    tags: ["Cleansing tool", "Altar", "Ritual"],
    featured: false,
    isAffiliateProduct: false,
  },
  {
    id: "prod_tigers_eye_palm",
    name: "Tiger's Eye Palm Stone",
    slug: "tigers-eye-palm-stone",
    category: "Palm & Worry Stones",
    crystalType: "Tiger's Eye",
    price: "£11",
    stockStatus: "In stock",
    shortDescription: "A golden-brown stone traditionally associated with courage, grounded confidence and clear action.",
    fullDescription:
      "Tiger's Eye has a warm banded look and a reassuring weight in the hand. It is often chosen for focus rituals, work bags and moments where people want to return to grounded confidence.",
    intentions: ["Focus", "Courage", "Confidence"],
    chakras: ["Solar Plexus", "Root"],
    zodiac: ["Leo", "Capricorn"],
    bestFor: ["Work bags", "Focus rituals", "Confidence practices"],
    howToUse: [
      "Carry in a bag or pocket as a tactile reminder of your intention.",
      "Hold before focused work or a confidence practice.",
      "Place on a desk when planning the next clear step.",
    ],
    howToCleanse: [
      "Refresh with Selenite, smoke, sound or moonlight.",
      "Wipe with a dry cloth after carrying.",
    ],
    images: [{ alt: "Tiger's Eye palm stone", accent: "tiger", src: "/images/stock/tigers-eye.jpg" }],
    tags: ["Palm stone", "Focus", "Confidence"],
    featured: false,
    isAffiliateProduct: false,
  },
  {
    id: "prod_moonstone_bracelet",
    name: "Moonstone Bracelet",
    slug: "moonstone-bracelet",
    category: "Crystal Bracelets & Jewellery",
    crystalType: "Moonstone",
    price: "£16",
    stockStatus: "Coming soon",
    shortDescription: "A soft, pearly crystal bracelet often chosen for emotional balance, inner rhythm and gentle intuition.",
    fullDescription:
      "This Moonstone bracelet is designed as a gentle everyday ritual piece. Its pearly glow is often associated with cycles, softness and intuitive reflection, making it a considered gift or daily-wear crystal.",
    intentions: ["Calm", "Cycles", "Intuition"],
    chakras: ["Crown", "Sacral"],
    zodiac: ["Cancer", "Libra"],
    bestFor: ["Daily wear", "Moon rituals", "Gifting"],
    howToUse: [
      "Wear as a daily reminder of your chosen intention.",
      "Place beside your journal during moon rituals or reflective check-ins.",
      "Gift with a handwritten note for a personal touch.",
    ],
    howToCleanse: [
      "Refresh with moonlight, Selenite or sound.",
      "Avoid water, perfume and harsh products to help protect the bracelet.",
    ],
    images: [{ alt: "Moonstone bracelet", accent: "moonstone", src: "/images/my-little-gaia-hero.webp" }],
    tags: ["Jewellery", "Giftable", "Moon ritual"],
    featured: false,
    isAffiliateProduct: false,
  },
  {
    id: "prod_sleep_ritual_kit",
    name: "Sleep Ritual Kit",
    slug: "sleep-ritual-kit",
    category: "Crystal Sets",
    crystalType: "Mixed Crystal Set",
    price: "£24",
    stockStatus: "In stock",
    shortDescription: "A soft evening ritual set curated for calm spaces, quiet thoughts and restful routines.",
    fullDescription:
      "This kit brings together Amethyst, Selenite and Moonstone as a gentle evening set. It is curated for people who want a simple ritual for softer spaces, slower evenings and reflective bedtime routines.",
    intentions: ["Sleep", "Calm", "Evening Ritual"],
    chakras: ["Crown", "Third Eye"],
    bestFor: ["Bedside styling", "Evening rituals", "Thoughtful gifting"],
    howToUse: [
      "Arrange the pieces beside your bed or journal.",
      "Use before sleep with a simple intention for rest and quiet.",
      "Pair with low light, a cup of tea or a few slow breaths.",
    ],
    howToCleanse: [
      "Use the included Selenite as part of your cleansing ritual.",
      "Keep delicate pieces dry and store together in a soft pouch or tray.",
    ],
    images: [{ alt: "Sleep Ritual Kit", accent: "amethyst", src: "/images/my-little-gaia-hero.webp" }],
    tags: ["Ritual kit", "Evening", "Giftable"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_protection_ritual_kit",
    name: "Protection Ritual Kit",
    slug: "protection-ritual-kit",
    category: "Crystal Sets",
    crystalType: "Mixed Crystal Set",
    price: "£26",
    stockStatus: "In stock",
    shortDescription: "A grounding crystal set curated for energetic boundaries, entryways and steady spaces.",
    fullDescription:
      "Black Tourmaline, Obsidian and Selenite come together in this grounding set for symbolic boundaries and refreshed spaces. It is often chosen for entryways, desks and rituals around steadiness.",
    intentions: ["Protection", "Grounding", "Clearing"],
    chakras: ["Root", "Crown"],
    bestFor: ["Entryways", "Workspaces", "Grounding routines"],
    howToUse: [
      "Place near an entryway or desk as a symbolic boundary set.",
      "Use before work or after a long day to reset your space.",
      "Arrange with Selenite beside darker grounding stones.",
    ],
    howToCleanse: [
      "Refresh with Selenite, sound or cleansing smoke.",
      "Keep stones dry and dust gently when needed.",
    ],
    images: [{ alt: "Protection Ritual Kit", accent: "tourmaline", src: "/images/stock/black-tourmaline.jpg" }],
    tags: ["Ritual kit", "Grounding", "Entryway"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_abundance_ritual_kit",
    name: "Abundance Ritual Kit",
    slug: "abundance-ritual-kit",
    category: "Crystal Sets",
    crystalType: "Mixed Crystal Set",
    price: "£28",
    stockStatus: "In stock",
    shortDescription: "A golden-toned crystal set curated for confidence, creative energy and growth-focused intention.",
    fullDescription:
      "Citrine, Tiger's Eye and Clear Quartz create a warm ritual kit for intention setting around confidence, creative energy and growth. It is designed for desks, studios and morning rituals.",
    intentions: ["Abundance", "Confidence", "Creativity"],
    chakras: ["Solar Plexus", "Crown"],
    bestFor: ["Creative desks", "Morning rituals", "Goal setting"],
    howToUse: [
      "Arrange near your workspace before starting creative work.",
      "Use with a written intention around confidence or growth.",
      "Keep Clear Quartz in the centre as a symbolic amplifier.",
    ],
    howToCleanse: [
      "Cleanse with Selenite, sound or smoke between rituals.",
      "Keep Citrine away from prolonged direct sunlight.",
    ],
    images: [{ alt: "Abundance Ritual Kit", accent: "citrine", src: "/images/stock/citrine.jpg" }],
    tags: ["Ritual kit", "Creativity", "Workspace"],
    featured: true,
    isAffiliateProduct: false,
  },
  {
    id: "prod_love_healing_kit",
    name: "Love & Healing Kit",
    slug: "love-and-healing-kit",
    category: "Crystal Sets",
    crystalType: "Mixed Crystal Set",
    price: "£25",
    stockStatus: "In stock",
    shortDescription: "A gentle crystal set curated for self-love, compassion and heart-centred rituals.",
    fullDescription:
      "Rose Quartz, Amethyst and Clear Quartz form a soft ritual set for self-kindness, compassion and emotional softness. It is a gentle gift choice and a beautiful addition to self-care spaces.",
    intentions: ["Love", "Self-Love", "Emotional Softness"],
    chakras: ["Heart", "Crown"],
    bestFor: ["Self-care rituals", "Gifting", "Heart-centred spaces"],
    howToUse: [
      "Arrange in a self-care corner with a journal or note.",
      "Use during reflective rituals focused on compassion and softness.",
      "Gift with a short handwritten intention card.",
    ],
    howToCleanse: [
      "Refresh with Selenite, moonlight, sound or smoke.",
      "Store together in a soft pouch or tray when not in use.",
    ],
    images: [{ alt: "Love and Healing Kit", accent: "rose", src: "/images/stock/rose-quartz.jpg" }],
    tags: ["Ritual kit", "Giftable", "Self-care"],
    featured: true,
    isAffiliateProduct: false,
  },
];

export const productCategories = Array.from(new Set(products.map((product) => product.category)));
export const productIntentions = Array.from(new Set(products.flatMap((product) => product.intentions)));
export const productCrystalTypes = Array.from(new Set(products.map((product) => product.crystalType)));

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((candidate) => candidate.id !== product.id)
    .map((candidate) => ({
      product: candidate,
      score:
        (candidate.category === product.category ? 2 : 0) +
        candidate.intentions.filter((intention) => product.intentions.includes(intention)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.product);
}
