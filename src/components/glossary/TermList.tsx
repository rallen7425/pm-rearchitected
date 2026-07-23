import Link from "next/link";
import type { TermSummary } from "@/lib/glossary";

export function TermList({ terms }: { terms: TermSummary[] }) {
  if (terms.length === 0) {
    return <p className="text-sm text-muted-foreground">No terms found.</p>;
  }

  return (
    <ul className="columns-1 md:columns-2 gap-x-12">
      {terms.map((term) => (
        <li key={term.id_slug} className="break-inside-avoid mb-4 text-sm text-muted-foreground leading-relaxed">
          <Link
            href={`/glossary/${term.id_slug}`}
            className="font-semibold text-foreground hover:text-primary transition-colors"
          >
            {term.canonical_term}
          </Link>
          {": "}
          {term.short_definition}
        </li>
      ))}
    </ul>
  );
}
