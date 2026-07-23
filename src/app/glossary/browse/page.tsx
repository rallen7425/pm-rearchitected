import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import { TermList } from "@/components/glossary/TermList";
import { listCategories, listTermsByCategory } from "@/lib/glossary";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Browse by Category — AI Glossary — Product Management, Re-Architected",
  description:
    "The complete AI glossary, organized by theme — from AI 101 fundamentals to advanced concepts and notable products.",
};

export default async function GlossaryBrowsePage() {
  const categories = await listCategories();
  const termsByCategory = await Promise.all(
    categories.map((category) => listTermsByCategory(category.id_slug))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container pb-20">
          <div className="flex items-baseline justify-between gap-4 mb-5 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Browse by Category</h2>
            <Link href="/glossary" className="text-sm text-primary hover:underline">
              ← Top Terms
            </Link>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            The complete glossary — all {termsByCategory.reduce((sum, t) => sum + t.length, 0)}{" "}
            terms, organized by theme.
          </p>

          <nav className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <a
                key={category.id_slug}
                href={`#${category.id_slug}`}
                className="text-sm px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors"
              >
                {category.name}
              </a>
            ))}
          </nav>

          <div className="space-y-12">
            {categories.map((category, i) => (
              <div key={category.id_slug}>
                {i > 0 && <div className="border-t border-border mb-12" />}
                <section id={category.id_slug} className="scroll-mt-24">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-base text-muted-foreground leading-relaxed mb-8">
                      {category.description}
                    </p>
                  )}
                  <TermList terms={termsByCategory[i]} />
                </section>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
