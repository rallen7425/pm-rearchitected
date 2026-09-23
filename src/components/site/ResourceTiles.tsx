import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ResourceTile {
  title: string;
  description: string;
  href?: string;
  wide?: boolean;
}

// Shared PM and AI card layout for the home page and Resources page.
// Existing topic pages remain the destinations until their content is reorganized.
const PM_CARDS: ResourceTile[] = [
  {
    title: "PM 101",
    description: "Foundations of product management — roles, frameworks, and core practices.",
    href: "/resources/pm-foundations",
    wide: true,
  },
  {
    title: "Product Vision & Strategy",
    description: "Set direction, find opportunities, and connect product choices to business outcomes.",
    href: "/resources/product-vision-strategy",
  },
  {
    title: "Discovery & Research",
    description: "Understand customers, uncover real needs, and test ideas before committing to build.",
    href: "/resources/discovery-research",
  },
  {
    title: "Design for PMs",
    description: "Build your eye for great experiences — from usability and interaction to design systems.",
    href: "/resources/design-for-pms",
  },
  {
    title: "Agile, Development & Deployment",
    description: "Work with engineering to plan, build, and ship products with speed and quality.",
    href: "/resources/agile-development-deployment",
  },
  {
    title: "Go-to-Market & Growth",
    description: "Bring products to market, drive adoption, and build sustainable growth.",
    href: "/resources/go-to-market-growth",
  },
  {
    title: "Technology for PMs",
    description: "Technical literacy for PMs — architecture, APIs, data, and infrastructure.",
    href: "/resources/technology-for-pms",
  },
];

// Each card deep-links to its own sub-topic section on the shared ai-agentic-practice page
// (see the `id={st.id}` anchor on each sub-topic in `[topic]/page.tsx`) rather than the bare
// page URL, so the four tiles actually land somewhere different from one another.
const AI_CARDS: ResourceTile[] = [
  {
    title: "Vibe Coding & Agentic Development",
    description: "Turn ideas into working prototypes with AI coding tools and agentic workflows.",
    href: "/resources/ai-agentic-practice#vibe-coding-agentic-development",
  },
  {
    title: "Understanding AI",
    description: "Learn the fundamentals — how AI works, what it can do, and where it falls short.",
    href: "/resources/ai-agentic-practice#ai-fundamentals",
  },
  {
    title: "AI Product Building Blocks",
    description: "Explore the technology behind AI products — LLMs, agents, RAG, and evals.",
    href: "/resources/ai-agentic-practice#agents-rag-evals",
  },
  {
    title: "Product Management for AI-Empowered PMs",
    description: "Apply AI across product work, from research and strategy to decisions and delivery.",
    href: "/resources/ai-agentic-practice#ai-empowered-pm-practice",
  },
];

function Card({ card }: { card: ResourceTile }) {
  const className = `flex min-w-0 flex-col rounded-2xl border border-border bg-card p-5 shadow-card ${
    card.wide ? "sm:col-span-2" : ""
  }`;
  const content = (
    <>
      <h4 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
        {card.title}
      </h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {card.description}
      </p>
      <span className={`mt-auto inline-flex items-center gap-1 pt-4 text-xs font-medium ${card.href ? "text-primary" : "text-tertiary"}`}>
        {card.href ? <>Read more <ArrowUpRight aria-hidden="true" className="h-3 w-3" /></> : "Coming soon"}
      </span>
    </>
  );

  return card.href ? (
    <Link href={card.href} className={`${className} group transition-all hover:border-primary/40 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`}>
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
}

export default function ResourceTiles() {
  return (
    <div className="space-y-8">
      <section aria-labelledby="pm-resources-heading">
        <h3 id="pm-resources-heading" className="mb-4 text-sm font-semibold text-muted-foreground">
          Product Management
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PM_CARDS.map((card) => <Card key={card.title} card={card} />)}
        </div>
      </section>
      <section aria-labelledby="ai-resources-heading">
        <h3 id="ai-resources-heading" className="mb-4 text-sm font-semibold text-muted-foreground">
          AI for PMs
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AI_CARDS.map((card) => <Card key={card.title} card={card} />)}
        </div>
      </section>
    </div>
  );
}
