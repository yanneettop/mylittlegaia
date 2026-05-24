import type { Crystal } from "@/types/crystal";

export const crystals: Crystal[] = [
  {
    id: "crystal_amethyst",
    name: "Amethyst",
    slug: "amethyst",
    shortDescription: "A purple crystal traditionally associated with calm, sleep and intuitive reflection.",
    meaning:
      "Amethyst is often chosen for reflective rituals, quiet evenings and practices centred on calm. Its purple tones are traditionally associated with intuition, rest and a softer mental atmosphere.",
    intentions: ["Calm", "Sleep", "Intuition"],
    chakras: ["Third Eye", "Crown"],
    zodiac: ["Pisces", "Aquarius", "Virgo"],
    colour: ["Purple"],
    element: ["Air"],
    bestFor: ["Evening rituals", "Meditation", "Journaling", "Bedside tables"],
    howToUse: ["Place it near your bed, hold it during meditation, or keep it on your desk for a calmer atmosphere."],
    howToCleanse: ["Use moonlight, sound, smoke cleansing or place near selenite."],
    pairWith: ["Selenite", "Moonstone", "Clear Quartz"],
    image: { alt: "Amethyst crystal", accent: "amethyst", src: "/images/my-little-gaia-hero.webp" },
    relatedProducts: ["amethyst-tumble-stone", "sleep-ritual-kit", "love-and-healing-kit"],
    beginnerFriendly: true,
    featured: true,
  },
  {
    id: "crystal_rose_quartz",
    name: "Rose Quartz",
    slug: "rose-quartz",
    shortDescription: "A soft pink crystal often chosen for self-love, compassion and heart-centred rituals.",
    meaning:
      "Rose Quartz is commonly used in rituals for softness, compassion and heart-led intention. Its gentle pink colour makes it a favourite for self-care spaces and meaningful gifts.",
    intentions: ["Love", "Self-Love", "Compassion"],
    chakras: ["Heart"],
    zodiac: ["Taurus", "Libra"],
    colour: ["Pink"],
    element: ["Water"],
    bestFor: ["Self-care spaces", "Gifting", "Heart rituals", "Gentle emotional reflection"],
    howToUse: ["Keep it near your mirror, bedside table or self-care space as a reminder of softness and compassion."],
    howToCleanse: ["Use moonlight, sound or gentle smoke cleansing."],
    pairWith: ["Amethyst", "Clear Quartz", "Moonstone"],
    image: { alt: "Rose Quartz crystal", accent: "rose", src: "/images/stock/rose-quartz.jpg" },
    relatedProducts: ["rose-quartz-tumble-stone", "rose-quartz-raw-crystal", "love-and-healing-kit"],
    beginnerFriendly: true,
    featured: true,
  },
  {
    id: "crystal_citrine",
    name: "Citrine",
    slug: "citrine",
    shortDescription: "A warm golden crystal traditionally associated with confidence, creativity and an open mindset around growth.",
    meaning:
      "Citrine is often chosen for rituals around confidence, creative focus and growth-minded intention. Its golden colour brings a bright, uplifting note to desks and morning routines.",
    intentions: ["Confidence", "Creativity", "Abundance"],
    chakras: ["Solar Plexus"],
    zodiac: ["Leo", "Aries", "Gemini"],
    colour: ["Gold"],
    element: ["Fire"],
    bestFor: ["Creative work", "Desk spaces", "Morning rituals", "Confidence practices"],
    howToUse: ["Place it on your desk, creative space or altar when setting intentions around growth and motivation."],
    howToCleanse: ["Use sound, smoke cleansing or selenite. Avoid prolonged direct sunlight."],
    pairWith: ["Clear Quartz", "Tiger's Eye", "Amethyst"],
    image: { alt: "Citrine crystal", accent: "citrine", src: "/images/stock/citrine.jpg" },
    relatedProducts: ["citrine-tumble-stone", "citrine-crystal-point", "abundance-ritual-kit"],
    beginnerFriendly: true,
    featured: true,
  },
  {
    id: "crystal_clear_quartz",
    name: "Clear Quartz",
    slug: "clear-quartz",
    shortDescription: "A clear crystal traditionally associated with clarity, focus and amplifying intention.",
    meaning:
      "Clear Quartz is a versatile crystal commonly used in intention setting and ritual layouts. It is traditionally associated with clarity, focus and supporting the intention of surrounding crystals.",
    intentions: ["Clarity", "Focus", "Amplification"],
    chakras: ["Crown"],
    zodiac: ["All signs"],
    colour: ["Clear"],
    element: ["Spirit"],
    bestFor: ["Meditation spaces", "Pairing with other crystals", "Intention setting"],
    howToUse: ["Hold it while setting an intention or place it near other crystals as part of a ritual layout."],
    howToCleanse: ["Use moonlight, sound, smoke cleansing or selenite."],
    pairWith: ["Amethyst", "Rose Quartz", "Citrine"],
    image: { alt: "Clear Quartz crystal", accent: "quartz", src: "/images/my-little-gaia-hero.webp" },
    relatedProducts: ["clear-quartz-tumble-stone", "clear-quartz-tower", "abundance-ritual-kit", "love-and-healing-kit"],
    beginnerFriendly: true,
    featured: true,
  },
  {
    id: "crystal_black_tourmaline",
    name: "Black Tourmaline",
    slug: "black-tourmaline",
    shortDescription: "A grounding dark crystal commonly chosen for energetic boundaries and a steady sense of presence.",
    meaning:
      "Black Tourmaline is often chosen for grounding rituals and symbolic boundaries. Its dark, earthy presence makes it a popular piece for entryways, desks and protective layouts.",
    intentions: ["Protection", "Grounding", "Clearing"],
    chakras: ["Root"],
    zodiac: ["Capricorn", "Scorpio"],
    colour: ["Black"],
    element: ["Earth"],
    bestFor: ["Entryways", "Workspaces", "Grounding rituals", "Protective layouts"],
    howToUse: ["Place it near your front door, desk or beside your bed as a grounding reminder."],
    howToCleanse: ["Use smoke cleansing, sound or place near selenite."],
    pairWith: ["Selenite", "Obsidian", "Clear Quartz"],
    image: { alt: "Black Tourmaline crystal", accent: "tourmaline", src: "/images/stock/black-tourmaline.jpg" },
    relatedProducts: ["black-tourmaline-tumble-stone", "black-tourmaline-protection-stone", "protection-ritual-kit"],
    beginnerFriendly: true,
    featured: true,
  },
  {
    id: "crystal_selenite",
    name: "Selenite",
    slug: "selenite",
    shortDescription: "A luminous crystal often used in rituals for cleansing, clarity and refreshing spaces.",
    meaning:
      "Selenite is commonly used in rituals for cleansing and refreshing a space. Its pale luminous appearance makes it a calm visual anchor for altars and crystal collections.",
    intentions: ["Cleansing", "Clarity", "Ritual"],
    chakras: ["Crown"],
    zodiac: ["Cancer", "Taurus"],
    colour: ["White"],
    element: ["Spirit"],
    bestFor: ["Cleansing other crystals", "Altar styling", "Evening rituals"],
    howToUse: ["Place crystals beside or on selenite, or keep it on an altar for a clean, luminous feel."],
    howToCleanse: ["Selenite is traditionally considered self-cleansing. Keep away from water."],
    pairWith: ["Amethyst", "Black Tourmaline", "Clear Quartz"],
    image: { alt: "Selenite crystal", accent: "selenite", src: "/images/stock/selenite.jpg" },
    relatedProducts: ["selenite-tumble-stone", "selenite-cleansing-wand", "sleep-ritual-kit", "protection-ritual-kit"],
    beginnerFriendly: true,
    featured: true,
  },
  {
    id: "crystal_tigers_eye",
    name: "Tiger's Eye",
    slug: "tigers-eye",
    shortDescription: "A golden-brown stone traditionally associated with courage, focus and grounded confidence.",
    meaning:
      "Tiger's Eye is often chosen for focus rituals and grounded confidence. Its warm bands of gold and brown are traditionally associated with clear action and steady courage.",
    intentions: ["Focus", "Courage", "Confidence"],
    chakras: ["Solar Plexus", "Root"],
    zodiac: ["Leo", "Capricorn"],
    colour: ["Gold", "Brown"],
    element: ["Earth", "Fire"],
    bestFor: ["Work bags", "Focus rituals", "Confidence practices", "Desk spaces"],
    howToUse: ["Carry it with you or keep it near your workspace when focusing on action and direction."],
    howToCleanse: ["Use smoke cleansing, sound or selenite."],
    pairWith: ["Citrine", "Clear Quartz", "Black Tourmaline"],
    image: { alt: "Tiger's Eye crystal", accent: "tiger", src: "/images/stock/tigers-eye.jpg" },
    relatedProducts: ["tigers-eye-tumble-stone", "tigers-eye-palm-stone", "abundance-ritual-kit"],
    beginnerFriendly: false,
    featured: false,
  },
  {
    id: "crystal_moonstone",
    name: "Moonstone",
    slug: "moonstone",
    shortDescription: "A soft pearly crystal often chosen for intuition, emotional rhythm and moon rituals.",
    meaning:
      "Moonstone is traditionally associated with intuition, cycles and gentle reflection. Its pearly glow makes it a natural fit for moon rituals, jewellery and evening practices.",
    intentions: ["Intuition", "Calm", "Cycles"],
    chakras: ["Crown", "Third Eye"],
    zodiac: ["Cancer", "Pisces", "Libra"],
    colour: ["White", "Cream"],
    element: ["Water"],
    bestFor: ["Moon rituals", "Gentle reflection", "Daily jewellery", "Evening rituals"],
    howToUse: ["Wear it, keep it near your journal or use it during full moon and new moon rituals."],
    howToCleanse: ["Use moonlight, sound or selenite."],
    pairWith: ["Amethyst", "Rose Quartz", "Selenite"],
    image: { alt: "Moonstone crystal", accent: "moonstone", src: "/images/my-little-gaia-hero.webp" },
    relatedProducts: ["moonstone-tumble-stone", "moonstone-bracelet", "sleep-ritual-kit"],
    beginnerFriendly: false,
    featured: false,
  },
  {
    id: "crystal_labradorite",
    name: "Labradorite",
    slug: "labradorite",
    shortDescription: "A shimmering crystal traditionally associated with intuition, transformation and inner mystery.",
    meaning:
      "Labradorite is often chosen for reflective rituals around intuition and personal transformation. Its shifting colours give it a mysterious, creative presence.",
    intentions: ["Intuition", "Transformation", "Protection"],
    chakras: ["Third Eye", "Throat"],
    zodiac: ["Leo", "Sagittarius", "Scorpio"],
    colour: ["Grey", "Blue", "Green"],
    element: ["Air"],
    bestFor: ["Creative rituals", "Meditation", "Reflection", "Personal transformation"],
    howToUse: ["Hold it during meditation or keep it near your creative space for reflective rituals."],
    howToCleanse: ["Use smoke cleansing, sound or moonlight."],
    pairWith: ["Moonstone", "Amethyst", "Black Tourmaline"],
    image: { alt: "Labradorite crystal", accent: "labradorite" },
    relatedProducts: ["labradorite-tumble-stone"],
    beginnerFriendly: false,
    featured: false,
  },
  {
    id: "crystal_obsidian",
    name: "Obsidian",
    slug: "obsidian",
    shortDescription: "A volcanic glass traditionally associated with grounding, protection and deep self-reflection.",
    meaning:
      "Obsidian is commonly used in rituals for grounding, boundaries and honest reflection. Its dark volcanic surface brings a strong, steady presence to journaling and protective layouts.",
    intentions: ["Protection", "Grounding", "Reflection"],
    chakras: ["Root"],
    zodiac: ["Scorpio", "Sagittarius", "Capricorn"],
    colour: ["Black"],
    element: ["Earth", "Fire"],
    bestFor: ["Grounding rituals", "Journaling", "Protective layouts", "Shadow work"],
    howToUse: ["Use it during journaling or grounding rituals when reflecting on boundaries and clarity."],
    howToCleanse: ["Use smoke cleansing, sound or selenite."],
    pairWith: ["Black Tourmaline", "Selenite", "Labradorite"],
    image: { alt: "Obsidian crystal", accent: "obsidian", src: "/images/stock/black-tourmaline.jpg" },
    relatedProducts: ["protection-ritual-kit"],
    beginnerFriendly: false,
    featured: false,
  },
];

export const crystalIntentions = Array.from(new Set(crystals.flatMap((crystal) => crystal.intentions))).sort();
export const crystalChakras = Array.from(new Set(crystals.flatMap((crystal) => crystal.chakras))).sort();
export const crystalZodiac = Array.from(new Set(crystals.flatMap((crystal) => crystal.zodiac))).sort();
export const crystalElements = Array.from(new Set(crystals.flatMap((crystal) => crystal.element))).sort();

export const beginnerCrystals = crystals.filter((crystal) => crystal.beginnerFriendly);

export function getCrystalBySlug(slug: string) {
  return crystals.find((crystal) => crystal.slug === slug);
}

export function getRelatedCrystals(crystal: Crystal, limit = 3) {
  return crystals
    .filter((candidate) => candidate.id !== crystal.id)
    .map((candidate) => ({
      crystal: candidate,
      score:
        candidate.intentions.filter((intention) => crystal.intentions.includes(intention)).length +
        candidate.chakras.filter((chakra) => crystal.chakras.includes(chakra)).length +
        candidate.element.filter((element) => crystal.element.includes(element)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.crystal);
}
