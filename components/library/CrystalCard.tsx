import Link from "next/link";
import type { Crystal } from "@/types/crystal";
import CrystalVisual from "@/components/CrystalVisual";

export default function CrystalCard({ crystal }: { crystal: Crystal }) {
  return (
    <article className="group card flex h-full flex-col p-4">
      <Link href={`/crystal-library/${crystal.slug}`} className="block">
        <CrystalVisual accent={crystal.image.accent} label={crystal.image.alt} src={crystal.image.src} ratio="wide" />
      </Link>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-serif text-2xl leading-snug text-forest">
            <Link href={`/crystal-library/${crystal.slug}`} className="transition group-hover:text-gold">
              {crystal.name}
            </Link>
          </h2>
          <span className="rounded-full bg-sage/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-forest/60">
            {crystal.element.join(", ")}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-forest/65">{crystal.shortDescription}</p>
        <TagGroup title="Intentions" tags={crystal.intentions.slice(0, 3)} />
        <TagGroup title="Chakras" tags={crystal.chakras.slice(0, 2)} />
        <Link
          href={`/crystal-library/${crystal.slug}`}
          className="mt-auto inline-flex w-fit rounded-full border border-forest/15 bg-white/70 px-4 py-2.5 text-xs font-semibold text-forest transition hover:border-forest hover:bg-forest hover:text-ivory"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}

function TagGroup({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="mt-4">
      <p className="sr-only">{title}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-forest/[0.055] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-forest/60">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
