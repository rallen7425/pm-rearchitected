export interface RaindropItem {
  _id: number;
  title: string;
  link: string;
  excerpt: string;
  tags: string[];
  domain: string;
  cover?: string;
}

export interface RaindropCollection {
  label: string;
  tag: string;
  desc: string;
  items: RaindropItem[];
}

const COLLECTION_ID = "70283481";

export async function fetchRaindrops(): Promise<RaindropItem[]> {
  try {
    const url = `https://api.raindrop.io/rest/v1/public/raindrops/${COLLECTION_ID}?perpage=50`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items ?? []) as RaindropItem[];
  } catch {
    return [];
  }
}

const CATEGORIES: { label: string; tag: string; desc: string; keywords: string[] }[] = [
  {
    label: "AI / LLMs",
    tag: "ai",
    desc: "Patterns, evals, and context engineering for shipping AI features.",
    keywords: ["ai", "llm", "gpt", "claude", "agent", "model", "openai", "anthropic", "machine learning"],
  },
  {
    label: "Product Strategy",
    tag: "strategy",
    desc: "Diagnosis-led frameworks for picking bets and aligning execution.",
    keywords: ["strategy", "roadmap", "discovery", "priorit", "product", "pm ", "product manager"],
  },
  {
    label: "UX for PMs",
    tag: "ux",
    desc: "Taste-building references for PMs who care about the craft.",
    keywords: ["ux", "design", "interface", "user research", "usability", "figma", "prototype"],
  },
  {
    label: "Career Growth",
    tag: "career",
    desc: "Levels, leverage, and the shift from senior to staff and beyond.",
    keywords: ["career", "job", "level", "staff", "leadership", "interview", "hiring", "salary"],
  },
];

export function groupByCategory(items: RaindropItem[]): RaindropCollection[] {
  return CATEGORIES.map(({ label, tag, desc, keywords }) => ({
    label,
    tag,
    desc,
    items: items.filter((item) => {
      const haystack = `${item.title} ${item.excerpt} ${item.tags.join(" ")}`.toLowerCase();
      return keywords.some((kw) => haystack.includes(kw));
    }),
  }));
}
