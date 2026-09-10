const COLLECTION_ID = "70283481";
const TOKEN = process.env.RAINDROP_TOKEN;

export interface RaindropFeedItem {
  title: string;
  link: string;
  domain: string;
  created: string;
}

export async function fetchReadingList(days = 7, limit = 10): Promise<RaindropFeedItem[]> {
  if (!TOKEN) return [];

  const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
  const url = `https://api.raindrop.io/rest/v1/raindrops/${COLLECTION_ID}?perpage=50&sort=-created`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];

  const data = await res.json();
  return (data.items ?? [])
    .filter((item: { created: string }) => item.created >= cutoff)
    .map((item: { title: string; link: string; domain: string; created: string }) => ({
      title: item.title,
      link: item.link,
      domain: item.domain,
      created: item.created,
    }))
    .slice(0, limit);
}

export function raindropTimeAgo(created: string): string {
  const diff = Date.now() - new Date(created).getTime();
  const h = Math.floor(diff / 3600000);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}

export function raindropIsNew(created: string): boolean {
  return Date.now() - new Date(created).getTime() < 2 * 24 * 60 * 60 * 1000;
}
