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

// ---- "Reframed" blog series ----
// The RSS feed only carries the ~20 most recent posts and exposes no tags, so the
// series is read from the Substack archive API instead, which returns the full
// history with each post's real tags. A post counts as part of the series if it
// carries the "Reframed" tag OR its title starts with "Reframed:" (a couple of
// series entries are missing the tag).

const ARCHIVE_API = "https://fromoutofthenoise.substack.com/api/v1/archive";
const REFRAMED_TAG = "reframed";
const REFRAMED_PREFIX = /^\s*reframed\s*:\s*/i;

interface ArchivePost {
  title?: string;
  slug?: string;
  canonical_url?: string;
  post_date?: string;
  subtitle?: string;
  description?: string;
  wordcount?: number;
  postTags?: { name?: string; slug?: string }[];
}

export interface ReframedPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  wordcount: number;
}

/** Strips the "Reframed:" series prefix for display (the tile already shows a Reframed pill). */
export function reframedSeriesTitle(title: string): string {
  return title.replace(REFRAMED_PREFIX, "").trim();
}

function isReframedArchivePost(p: ArchivePost): boolean {
  const tagged = (p.postTags ?? []).some((t) => t.slug?.toLowerCase() === REFRAMED_TAG);
  return tagged || REFRAMED_PREFIX.test(p.title ?? "");
}

/** Reframed series posts, most recent first, across the publication's full history. */
export async function fetchReframedPosts(maxPages = 8): Promise<ReframedPost[]> {
  const collected: ArchivePost[] = [];

  for (let page = 0; page < maxPages; page++) {
    const res = await fetch(`${ARCHIVE_API}?sort=new&limit=12&offset=${page * 12}`, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "PMReArchitected/1.0" },
    });
    if (!res.ok) break;

    const batch = (await res.json()) as ArchivePost[];
    if (!Array.isArray(batch) || batch.length === 0) break;
    collected.push(...batch);
    if (batch.length < 12) break;
  }

  return collected
    .filter(isReframedArchivePost)
    .map((p) => ({
      title: p.title ?? "",
      link: p.canonical_url ?? `https://fromoutofthenoise.substack.com/p/${p.slug ?? ""}`,
      pubDate: p.post_date ?? "",
      description: p.subtitle?.trim() || p.description?.trim() || "",
      wordcount: typeof p.wordcount === "number" ? p.wordcount : 0,
    }))
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}

/** Read-time estimate from a real word count (Substack archive exposes this). */
export function readTimeFromWords(wordcount: number): string {
  return `${Math.max(3, Math.round(wordcount / 200))} min`;
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
