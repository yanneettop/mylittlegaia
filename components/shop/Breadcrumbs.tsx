import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-medium uppercase tracking-[0.18em] text-forest/55">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition hover:text-forest">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-forest" : ""}>{item.label}</span>
              )}
              {!isLast && <span aria-hidden className="text-forest/30">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
