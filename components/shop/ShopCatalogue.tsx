"use client";

import { useEffect, useMemo, useState } from "react";
import {
  products,
  productCategories,
  productCrystalTypes,
  productIntentions,
} from "@/data/products";
import { productForms, intentionCollections } from "@/data/categories";
import ProductCard from "./ProductCard";

const allOption = "All";

const categorySlugToLabel: Record<string, string> = {
  "tumble-stones": "Tumble Stones",
  "raw-crystals": "Raw Crystals",
  "points-towers": "Crystal Points & Towers",
  "clusters": "Crystal Clusters",
  "palm-worry-stones": "Palm & Worry Stones",
  "crystal-hearts": "Crystal Hearts",
  "bracelets-jewellery": "Crystal Bracelets & Jewellery",
  "crystal-sets": "Crystal Sets",
  "ritual-tools": "Cleansing & Ritual Tools",
  "mystery-bags": "Mystery Crystal Bags",
};

const intentionSlugToTerms: Record<string, string[]> = {
  "love": ["Love", "Self-Love", "Compassion", "Emotional Softness"],
  "protection": ["Protection", "Grounding", "Clearing"],
  "abundance": ["Abundance", "Confidence", "Creativity"],
  "calm-sleep": ["Calm", "Sleep", "Evening Ritual"],
  "energy-focus": ["Energy", "Focus", "Clarity", "Amplification", "Courage"],
  "chakra-balance": ["Chakra", "Balance"],
};

export default function ShopCatalogue() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(allOption);
  const [intention, setIntention] = useState(allOption);
  const [intentionSlug, setIntentionSlug] = useState<string | null>(null);
  const [crystalType, setCrystalType] = useState(allOption);
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const catSlug = params.get("category");
    const intSlug = params.get("intention");
    if (catSlug && categorySlugToLabel[catSlug]) {
      setCategory(categorySlugToLabel[catSlug]);
    }
    if (intSlug && intentionSlugToTerms[intSlug]) {
      setIntentionSlug(intSlug);
    }
  }, []);

  const activeIntentionLabel = intentionSlug
    ? intentionCollections.find((i) => i.slug === intentionSlug)?.title
    : null;

  const filteredProducts = useMemo(() => {
    const normalisedQuery = query.trim().toLowerCase();
    const intentionTerms = intentionSlug ? intentionSlugToTerms[intentionSlug] : null;
    const priceValue = (price: string) => Number(price.replace(/[^0-9.]/g, ""));

    return products
      .filter((product) => {
        const matchesQuery =
          normalisedQuery.length === 0 ||
          [
            product.name,
            product.category,
            product.crystalType,
            product.shortDescription,
            ...product.intentions,
            ...product.tags,
          ]
            .join(" ")
            .toLowerCase()
            .includes(normalisedQuery);

        const matchesIntentionSlug =
          !intentionTerms ||
          product.intentions.some((value) => intentionTerms.includes(value));

        return (
          matchesQuery &&
          (category === allOption || product.category === category) &&
          (intention === allOption || product.intentions.includes(intention)) &&
          matchesIntentionSlug &&
          (crystalType === allOption || product.crystalType === crystalType)
        );
      })
      .sort((a, b) => {
        if (sort === "price-asc") return priceValue(a.price) - priceValue(b.price);
        if (sort === "price-desc") return priceValue(b.price) - priceValue(a.price);
        if (sort === "name") return a.name.localeCompare(b.name);
        return Number(b.featured) - Number(a.featured);
      });
  }, [category, crystalType, intention, intentionSlug, query, sort]);

  const clearFilters = () => {
    setQuery("");
    setCategory(allOption);
    setIntention(allOption);
    setIntentionSlug(null);
    setCrystalType(allOption);
    setSort("featured");
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", window.location.pathname);
    }
  };

  const navCategoryOptions = useMemo(() => {
    const fromProducts = new Set(productCategories);
    productForms.forEach((form) => fromProducts.add(form.title));
    return Array.from(fromProducts);
  }, []);

  return (
    <section className="container-x pb-24">
      {(activeIntentionLabel || category !== allOption) && (
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-forest/70">
          <span className="font-semibold text-forest">Filtered by:</span>
          {category !== allOption && (
            <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-semibold text-forest/80">
              {category}
            </span>
          )}
          {activeIntentionLabel && (
            <span className="rounded-full bg-gold/25 px-3 py-1 text-xs font-semibold text-forest/80">
              Intention: {activeIntentionLabel}
            </span>
          )}
        </div>
      )}

      <div className="rounded-[2rem] border border-forest/10 bg-white/55 p-4 shadow-soft backdrop-blur sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1.35fr_1fr_1fr_1fr_0.9fr]">
          <label className="block">
            <span className="sr-only">Search products</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search crystals, intentions or rituals..."
              className="h-12 w-full rounded-full border border-forest/12 bg-ivory/70 px-5 text-sm text-forest placeholder:text-forest/40 focus:border-gold focus:outline-none"
            />
          </label>
          <FilterSelect label="Category" value={category} onChange={setCategory} options={navCategoryOptions} />
          <FilterSelect label="Intention" value={intention} onChange={setIntention} options={productIntentions} />
          <FilterSelect label="Crystal type" value={crystalType} onChange={setCrystalType} options={productCrystalTypes} />
          <label className="block">
            <span className="sr-only">Sort products</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="h-12 w-full rounded-full border border-forest/12 bg-ivory/70 px-4 text-sm text-forest focus:border-gold focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="name">Name</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-between gap-3 text-sm text-forest/65 sm:flex-row sm:items-center">
        <p>
          Showing <span className="font-semibold text-forest">{filteredProducts.length}</span> of {products.length} products
        </p>
        <button onClick={clearFilters} className="text-left text-sm font-semibold text-forest transition hover:text-gold sm:text-right">
          Clear filters
        </button>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[2rem] border border-forest/10 bg-white/60 p-10 text-center">
          <h2 className="font-serif text-2xl text-forest">No crystals found</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-forest/65">
            Try a different intention, category or crystal type. The right piece may simply be hiding in another corner of the shop.
          </p>
          <button onClick={clearFilters} className="btn-primary mt-6">
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-full border border-forest/12 bg-ivory/70 px-4 text-sm text-forest focus:border-gold focus:outline-none"
      >
        <option value={allOption}>{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
