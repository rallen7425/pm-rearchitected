import type { Metadata } from "next";
import { FileText } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ResourceTiles from "@/components/site/ResourceTiles";
import TerminologyTeaser, { type TeaserTerm } from "@/components/site/TerminologyTeaser";
import { RESOURCE_SECTIONS } from "@/lib/resources";
import { listCategories, listStudyTerms, type GlossaryDomain } from "@/lib/glossary";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Resource Library — Product Management, Re-Architected",
  description:
    "Frameworks, people, and tools for product managers navigating the AI era — organized by topic, filtered for taste.",
};

const SPINES: [string, string][] = [
  ["hsl(219 76% 44%)", "hsl(219 76% 26%)"],
  ["hsl(24 70% 55%)", "hsl(24 70% 34%)"],
  ["hsl(160 55% 40%)", "hsl(160 55% 22%)"],
  ["hsl(280 45% 52%)", "hsl(280 45% 30%)"],
  ["hsl(0 65% 52%)", "hsl(0 65% 32%)"],
  ["hsl(45 80% 48%)", "hsl(45 80% 30%)"],
  ["hsl(200 60% 46%)", "hsl(200 60% 26%)"],
  ["hsl(340 55% 50%)", "hsl(340 55% 30%)"],
];

function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function fyShuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

async function buildTermPool(): Promise<TeaserTerm[]> {
  const domains: { domain: GlossaryDomain; label: string }[] = [
    { domain: "ai", label: "AI Terms" },
    { domain: "pm", label: "PM Terms" },
  ];

  try {
    const results = await Promise.all(
      domains.map(async ({ domain, label }) => {
        const [terms, categories] = await Promise.all([
          listStudyTerms(domain),
          listCategories(domain),
        ]);
        const catName = new Map(categories.map((c) => [c.id_slug, c.name]));
        return terms.map<TeaserTerm>((t) => ({
          front: t.canonical_term,
          back: t.short_definition,
          source: `${label} · ${catName.get(t.category_id) ?? "Glossary"}`,
        }));
      })
    );
    return fyShuffle(results.flat()).slice(0, 40);
  } catch {
    return [];
  }
}

function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="mb-7">
      <div className="mb-2 text-[11px] font-medium uppercase tracking-widest text-primary">
        {eyebrow}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{intro}</p>
    </div>
  );
}

export default async function ResourcesPage() {
  const pool = await buildTermPool();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container pb-20 pt-10 md:pt-14">
          <header className="mb-14">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Resource Library</h1>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              Frameworks, people, and tools I actually return to — organized by topic, filtered for
              taste, and pointed at the deeper hubs elsewhere on this site rather than duplicating
              them here.
            </p>
          </header>

          <div className="space-y-16">
            {/* 1. Resource Library grid (condensed) */}
            <section>
              <SectionHead
                eyebrow="Resource library"
                title="Curated & opinionated"
                intro="References I actually return to — grouped by topic, filtered for taste."
              />
              <ResourceTiles />
            </section>

            {/* 2. Terminology teaser */}
            <section>
              <SectionHead
                eyebrow="Look something up"
                title="Terminology"
                intro="177+ PM and AI terms live in the full Terminology hub — definitions, flashcards, and quizzes. This is a preview, not a copy of it."
              />
              <TerminologyTeaser pool={pool} links={RESOURCE_SECTIONS.terminologyLinks} />
            </section>

            {/* 3. Top Voices */}
            <section>
              <SectionHead
                eyebrow="Who I actually follow"
                title="Top Voices to Follow"
                intro="Newsletters, podcasts, and people worth a follow — mixed traditional PM and AI-native, on purpose."
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {RESOURCE_SECTIONS.topVoices.map((voice) => {
                  const card = (
                    <>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-[11px] font-bold text-accent-foreground">
                          {initials(voice.name)}
                        </span>
                        <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                          {voice.medium}
                        </span>
                      </div>
                      <div className="text-sm font-semibold">{voice.name}</div>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {voice.desc}
                      </p>
                    </>
                  );
                  return voice.url ? (
                    <a
                      key={voice.name}
                      href={voice.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:border-primary/40 hover:shadow-card-hover"
                    >
                      {card}
                    </a>
                  ) : (
                    <div
                      key={voice.name}
                      className="rounded-2xl border border-border bg-card p-4 shadow-card"
                    >
                      {card}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. Templates & Examples */}
            <section>
              <SectionHead
                eyebrow="Steal these"
                title="Resources with Examples & Templates"
                intro="Working documents, not theory — the actual formats I use, stripped of anything client-specific."
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {RESOURCE_SECTIONS.templates.map((tmpl) => (
                  <div
                    key={tmpl.name}
                    className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-4 shadow-card"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
                      <FileText className="h-4 w-4" />
                    </span>
                    <div className="text-sm font-semibold">{tmpl.name}</div>
                    <p className="text-xs leading-relaxed text-muted-foreground">{tmpl.desc}</p>
                    <span className="mt-auto text-xs font-medium text-tertiary">
                      View template · coming soon
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Books */}
            <section>
              <SectionHead
                eyebrow="On the shelf"
                title="Books"
                intro="The ones I'd hand someone directly, not a comprehensive reading list."
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {RESOURCE_SECTIONS.books.map((book, i) => {
                  const [a, b] = SPINES[i % SPINES.length];
                  return (
                    <div
                      key={book.title}
                      className="flex gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-card"
                    >
                      <div
                        className="h-14 w-10 shrink-0 rounded"
                        style={{ background: `linear-gradient(160deg, ${a}, ${b})` }}
                      />
                      <div>
                        <div className="text-sm font-semibold leading-snug">{book.title}</div>
                        <div className="mt-0.5 text-xs text-tertiary">{book.author}</div>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                          {book.take}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
