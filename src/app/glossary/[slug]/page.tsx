import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { getTermBySlug, listAllTermSlugs, listCategories } from "@/lib/glossary";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await listAllTermSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = await getTermBySlug(slug);
  if (!term) return { title: "Term Not Found — Product Management, Re-Architected" };
  return {
    title: `${term.canonical_term} — AI Glossary — Product Management, Re-Architected`,
    description: term.short_definition,
  };
}

export default async function TermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [term, categories] = await Promise.all([getTermBySlug(slug), listCategories()]);
  if (!term) notFound();

  const category = categories.find((c) => c.id_slug === term.category_id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container pt-8 pb-20 max-w-3xl">
          <Link href="/glossary" className="text-sm text-primary hover:underline">
            ← AI Glossary
          </Link>

          <div className="mt-4 flex items-center gap-2 flex-wrap">
            {category && (
              <Link
                href={`/glossary/browse#${category.id_slug}`}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
              >
                {category.name}
              </Link>
            )}
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
              {term.classification}
            </span>
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            {term.canonical_term}
          </h1>

          <p className="mt-5 text-lg text-foreground leading-relaxed">{term.short_definition}</p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">{term.long_definition}</p>

          {term.aliases.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border">
              <h2 className="text-sm font-semibold text-foreground mb-2">Also known as</h2>
              <p className="text-sm text-muted-foreground">
                {term.aliases.map((a) => a.alias_text).join(", ")}
              </p>
            </div>
          )}

          {term.related_terms.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border">
              <h2 className="text-sm font-semibold text-foreground mb-3">Related terms</h2>
              <div className="flex flex-wrap gap-2">
                {term.related_terms.map((related) => (
                  <Link
                    key={related.id_slug}
                    href={`/glossary/${related.id_slug}`}
                    className="text-sm px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors"
                  >
                    {related.canonical_term}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {term.sources.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border">
              <h2 className="text-sm font-semibold text-foreground mb-2">Further reading</h2>
              <ul className="space-y-1.5">
                {term.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {source.source_name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
