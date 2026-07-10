export interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

const SOURCES = [
  { name: "Lenny's Newsletter", url: "https://www.lennysnewsletter.com/feed" },
  { name: "The Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com/feed" },
  { name: "First Round Review", url: "https://review.firstround.com/rss" },
  { name: "Product Talk", url: "https://www.producttalk.org/feed/" },
  { name: "Intercom Blog", url: "https://www.intercom.com/blog/feed" },
];

function extractItems(xml: string, sourceName: string): FeedItem[] {
  const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];
  return items.map((item) => {
    const get = (tag: string) =>
      item.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`))?.[1] ??
      item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))?.[1] ??
      "";

    const rawLink = get("link").trim() || get("guid").trim();

    return {
      title: get("title").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#8217;/g, "'").trim(),
      link: rawLink,
      pubDate: get("pubDate"),
      source: sourceName,
    };
  }).filter((i) => i.title && i.link);
}

export async function fetchNewsfeedItems(days = 7): Promise<FeedItem[]> {
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;

  const results = await Promise.allSettled(
    SOURCES.map(async ({ name, url }) => {
      const res = await fetch(url, {
        next: { revalidate: 3600 },
        headers: { "User-Agent": "PMReArchitected/1.0" },
      });
      if (!res.ok) return [];
      const xml = await res.text();
      return extractItems(xml, name);
    })
  );

  const all: FeedItem[] = [];
  for (const result of results) {
    if (result.status === "fulfilled") all.push(...result.value);
  }

  return all
    .filter((item) => {
      const d = new Date(item.pubDate);
      return !isNaN(d.getTime()) && d.getTime() >= cutoff;
    })
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, 10);
}

export function feedTimeAgo(pubDate: string): string {
  const diff = Date.now() - new Date(pubDate).getTime();
  const h = Math.floor(diff / 3600000);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}

export function isNew(pubDate: string): boolean {
  return Date.now() - new Date(pubDate).getTime() < 2 * 24 * 60 * 60 * 1000;
}
