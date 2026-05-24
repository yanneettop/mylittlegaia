"use client";

import { useMemo, useState } from "react";
import {
  beginnerCrystals,
  crystalChakras,
  crystalElements,
  crystalIntentions,
  crystals,
  crystalZodiac,
} from "@/data/crystals";
import CrystalCard from "./CrystalCard";

const allOption = "All";

export default function CrystalLibraryCatalogue() {
  const [query, setQuery] = useState("");
  const [intention, setIntention] = useState(allOption);
  const [chakra, setChakra] = useState(allOption);
  const [zodiac, setZodiac] = useState(allOption);
  const [element, setElement] = useState(allOption);

  const filteredCrystals = useMemo(() => {
    const normalisedQuery = query.trim().toLowerCase();

    return crystals.filter((crystal) => {
      const searchable = [
        crystal.name,
        crystal.shortDescription,
        crystal.meaning,
        ...crystal.intentions,
        ...crystal.chakras,
        ...crystal.zodiac,
        ...crystal.colour,
        ...crystal.element,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (normalisedQuery.length === 0 || searchable.includes(normalisedQuery)) &&
        (intention === allOption || crystal.intentions.includes(intention)) &&
        (chakra === allOption || crystal.chakras.includes(chakra)) &&
        (zodiac === allOption || crystal.zodiac.includes(zodiac)) &&
        (element === allOption || crystal.element.includes(element))
      );
    });
  }, [chakra, element, intention, query, zodiac]);

  const clearFilters = () => {
    setQuery("");
    setIntention(allOption);
    setChakra(allOption);
    setZodiac(allOption);
    setElement(allOption);
  };

  return (
    <>
      <section className="container-x pb-16">
        <div className="rounded-[2rem] border border-forest/10 bg-white/55 p-4 shadow-soft backdrop-blur sm:p-5">
          <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
            <label>
              <span className="sr-only">Search crystals</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search crystals, intentions, chakras or zodiac signs..."
                className="h-12 w-full rounded-full border border-forest/12 bg-ivory/70 px-5 text-sm text-forest placeholder:text-forest/40 focus:border-gold focus:outline-none"
              />
            </label>
            <FilterSelect label="Intention" value={intention} options={crystalIntentions} onChange={setIntention} />
            <FilterSelect label="Chakra" value={chakra} options={crystalChakras} onChange={setChakra} />
            <FilterSelect label="Zodiac" value={zodiac} options={crystalZodiac} onChange={setZodiac} />
            <FilterSelect label="Element" value={element} options={crystalElements} onChange={setElement} />
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 text-sm text-forest/65 sm:flex-row sm:items-center">
          <p>
            Showing <span className="font-semibold text-forest">{filteredCrystals.length}</span> of {crystals.length} crystals
          </p>
          <button onClick={clearFilters} className="text-left text-sm font-semibold text-forest transition hover:text-gold sm:text-right">
            Clear filters
          </button>
        </div>

        {filteredCrystals.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCrystals.map((crystal) => (
              <CrystalCard key={crystal.id} crystal={crystal} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[2rem] border border-forest/10 bg-white/60 p-10 text-center">
            <h2 className="font-serif text-2xl text-forest">No crystals found</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-forest/65">
              Try searching by a different intention, chakra, zodiac sign, colour or element.
            </p>
            <button onClick={clearFilters} className="btn-primary mt-6">
              Reset Filters
            </button>
          </div>
        )}
      </section>

      <section className="container-x pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Start gently</span>
          <h2 className="h-section mt-4">Best Crystals for Beginners</h2>
          <p className="mt-4 text-forest/65">
            A gentle starting point for anyone new to crystals and everyday rituals.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beginnerCrystals.map((crystal) => (
            <CrystalCard key={crystal.id} crystal={crystal} />
          ))}
        </div>
      </section>
    </>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label>
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
