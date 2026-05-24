import type { CrystalAccent } from "@/data/products";

export type Crystal = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  meaning: string;
  intentions: string[];
  chakras: string[];
  zodiac: string[];
  colour: string[];
  element: string[];
  howToUse: string[];
  howToCleanse: string[];
  bestFor: string[];
  pairWith: string[];
  image: {
    alt: string;
    accent: CrystalAccent;
    src?: string;
  };
  relatedProducts: string[];
  beginnerFriendly: boolean;
  featured: boolean;
};
