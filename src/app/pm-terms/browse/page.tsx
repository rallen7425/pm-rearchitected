import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import { TermList } from "@/components/glossary/TermList";
import { GlossaryHeader } from "@/components/glossary/GlossaryHeader";
import { listCategories, listTermsByCategory } from "@/lib/glossary";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Browse by Category — Product Management Terms — Product Management, Re-Architected",
  description:
    "The complete product management glossary, organized by theme — from strategy and discovery to delivery and go-to-market.",
};

export default async function PmTermsBrowsePage() {
  const categories = await listCategories("pm");
  const termsByCategory = await Promise.all(
    categories.map((category) => listTermsByCategory(category.id_slug))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero showDescription={false} />
        <div className="container pb-20">
          <GlossaryHeader
            title="Terminology"
            domain="pm"
            links={[
              { href: "/pm-terms", label: "Top Terms" },
              { href: "/pm-terms/flashcards", label: "Test Yourself" },
            ]}
          />
          <h3 id="category-list" className="text-xl md:text-2xl font-semibold tracking-tight mb-4 scroll-mt-24">
            Browse by Category
          </h3>

          <nav className="flex flex-wrap gap-x-4 gap-y-2 mb-12">
            {categories.map((category) => (
              <a
                key={category.id_slug}
                href={`#${category.id_slug}`}
                className="text-sm text-primary hover:underline"
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
                  <TermList terms={termsByCategory[i]} basePath="/pm-terms" />
                  <a
                    href="#category-list"
                    className="mt-6 inline-block text-sm text-primary hover:underline"
                  >
                    ↑ Return to top
                  </a>
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
