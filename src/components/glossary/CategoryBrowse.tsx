"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TermList } from "./TermList";
import type { Category, TermSummary } from "@/lib/glossary";

export function CategoryBrowse({
  categories,
  termsByCategory,
  basePath = "/terms",
}: {
  categories: Category[];
  termsByCategory: TermSummary[][];
  basePath?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div id="category-list" className="mb-10 scroll-mt-24">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-2 text-base font-semibold tracking-tight hover:text-primary transition-colors"
      >
        Browse by Category
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {open && (
        <div className="mt-6 pb-8 border-b border-border">
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
                  <TermList terms={termsByCategory[i]} basePath={basePath} />
                  <a
                    href="#category-list"
                    className="mt-6 inline-block text-sm text-primary hover:underline"
                  >
                    ↑ Back to categories
                  </a>
                </section>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
