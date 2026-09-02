export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  tag?: string;
}

const SUBSTACK_FEED = "https://fromoutofthenoise.substack.com/feed";

function parseSubstackFeed(xml: string): SubstackPost[] {
  const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];

  return items.map((item) => {
    const get = (tag: string) =>
      item.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`))?.[1] ??
      item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))?.[1] ??
      "";

    const rawDesc = get("description").replace(/<[^>]+>/g, "").trim().slice(0, 200);
    const thumbnail = item.match(/<enclosure[^>]+url="([^"]+)"/)?.[1] ?? undefined;

    return {
      title: get("title"),
      link: get("link").replace(/\s/g, "") || get("guid").replace(/\s/g, ""),
      pubDate: get("pubDate"),
      description: rawDesc,
      thumbnail,
      tag: inferTag(get("title")),
    };
  });
}

async function fetchSubstackFeed(): Promise<SubstackPost[]> {
  const res = await fetch(SUBSTACK_FEED, {
    next: { revalidate: 3600 },
    headers: { "User-Agent": "PMReArchitected/1.0" },
  });

  if (!res.ok) return [];

  return parseSubstackFeed(await res.text());
}

export async function fetchSubstackPosts(limit = 10): Promise<SubstackPost[]> {
  return (await fetchSubstackFeed()).slice(0, limit);
}

// The Substack RSS feed carries no tag/category data, so the "Reframed" blog
// series is identified by its title convention: every entry is "Reframed: <topic>".
const REFRAMED_PREFIX = /^\s*reframed\s*:\s*/i;

export function isReframedPost(post: SubstackPost): boolean {
  return REFRAMED_PREFIX.test(post.title);
}

/** Strips the "Reframed:" series prefix for display (the tile already shows a Reframed pill). */
export function reframedSeriesTitle(title: string): string {
  return title.replace(REFRAMED_PREFIX, "").trim();
}

/** Reframed series posts, most recent first. */
export async function fetchReframedPosts(limit = 30): Promise<SubstackPost[]> {
  return (await fetchSubstackFeed())
    .filter(isReframedPost)
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, limit);
}

function inferTag(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("design") || lower.includes("ux") || lower.includes("ui")) return "Design";
  if (lower.includes("ai") || lower.includes("llm") || lower.includes("agent")) return "AI";
  if (lower.includes("strateg") || lower.includes("product")) return "Strategy";
  return "Workflow";
}

export function formatDate(pubDate: string): string {
  const d = new Date(pubDate);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function readTime(description: string): string {
  const words = description.split(/\s+/).length;
  return `${Math.max(3, Math.ceil(words / 200))} min`;
}

export function isWithinDays(pubDate: string, days: number): boolean {
  const d = new Date(pubDate);
  if (isNaN(d.getTime())) return false;
  return Date.now() - d.getTime() < days * 24 * 60 * 60 * 1000;
}

export function timeAgo(pubDate: string): string {
  const diff = Date.now() - new Date(pubDate).getTime();
  const h = Math.floor(diff / 3600000);
  if (h < 24) return `${h}h`;
  const d = Math.floor(h / 24);
  return `${d}d`;
}
