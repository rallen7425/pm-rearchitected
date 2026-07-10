import { ArrowUpRight, BookOpen, Compass, Search, Brain, Eye, Map, Zap, Cpu } from "lucide-react";

const topics = [
  {
    id: "pm101",
    label: "PM 101",
    icon: BookOpen,
    desc: "Foundations of product management — roles, frameworks, and core practices.",
    count: 10,
    items: [
      "Item 1",
      "Item 2",
      "Item 3",
    ],
  },
  {
    id: "strategy",
    label: "Product Strategy",
    icon: Compass,
    desc: "Diagnosis-led frameworks for picking bets and aligning execution.",
    count: 9,
    items: [
      "Good Strategy / Bad Strategy — Rumelt",
      "Reforge — Product Strategy course",
      "Working Backwards (Amazon)",
    ],
  },
  {
    id: "discovery",
    label: "Discovery & Research",
    icon: Search,
    desc: "Methods and mindsets for understanding customers and validating ideas.",
    count: 8,
    items: [
      "Item 1",
      "Item 2",
      "Item 3",
    ],
  },
  {
    id: "ai",
    label: "AI for Product Managers",
    icon: Brain,
    desc: "Patterns, evals, and context engineering for shipping AI features.",
    count: 12,
    items: [
      "Anthropic — Building with Claude",
      "Evals 101 for Product Managers",
      "The PM's Guide to Context Engineering",
    ],
  },
  {
    id: "ux",
    label: "UX Design",
    icon: Eye,
    desc: "Taste-building references for PMs who care about the craft.",
    count: 7,
    items: [
      "Refactoring UI",
      "Linear's product principles",
      "Designing for the AI-native era",
    ],
  },
  {
    id: "roadmapping",
    label: "Roadmapping & Prioritization",
    icon: Map,
    desc: "Frameworks for sequencing work and making tradeoffs under uncertainty.",
    count: 8,
    items: [
      "Item 1",
      "Item 2",
      "Item 3",
    ],
  },
  {
    id: "execution",
    label: "Execution",
    icon: Zap,
    desc: "Shipping with speed and quality — delivery, agile, and team dynamics.",
    count: 7,
    items: [
      "Item 1",
      "Item 2",
      "Item 3",
    ],
  },
  {
    id: "technology",
    label: "Technology",
    icon: Cpu,
    desc: "Technical literacy for PMs — architecture, APIs, data, and infrastructure.",
    count: 6,
    items: [
      "Item 1",
      "Item 2",
      "Item 3",
    ],
  },
];

export default function Resources() {
  return (
    <section id="resources" className="scroll-mt-24">
      <div className="mb-8 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="text-xs font-medium text-primary uppercase tracking-widest">
            Resource library
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
            Curated &amp; opinionated
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">
            References I actually return to — grouped by topic, filtered for taste.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {topics.map((t) => {
          const Icon = t.icon;
          return (
            <a
              key={t.id}
              href={`/resources#${t.id}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-card-hover transition-all shadow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-[10px] font-medium text-tertiary uppercase tracking-widest tabular-nums">
                  {t.count} refs
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                {t.label}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {t.desc}
              </p>
              <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                {t.items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground line-clamp-1">
                    · {item}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
                Browse topic <ArrowUpRight className="h-3 w-3" />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
