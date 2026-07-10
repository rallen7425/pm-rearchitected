import { ArrowUpRight, Radio } from "lucide-react";
import { fetchReadingList, raindropTimeAgo, raindropIsNew } from "@/lib/raindrop-feed";

export default async function Newsfeed() {
  const items = await fetchReadingList(7);

  return (
    <section id="newsfeed" className="scroll-mt-24">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-signal uppercase tracking-widest">
          <Radio className="h-3.5 w-3.5" />
          Live newsfeed
        </div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Reading this week
        </h2>
        <span className="mt-1 block text-xs text-muted-foreground">
          Last 7 days · refreshed hourly
        </span>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground shadow-card">
          Nothing saved to the reading list in the last 7 days.
        </div>
      ) : (
        <ul className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden shadow-card">
          {items.map((it) => (
            <li key={it.link}>
              <a
                href={it.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 px-4 py-3.5 hover:bg-accent/60 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {raindropIsNew(it.created) && (
                      <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-widest text-new-badge-foreground bg-new-badge px-1.5 py-0.5 rounded">
                        New
                      </span>
                    )}
                    <span className="text-[11px] font-medium text-muted-foreground truncate">
                      {it.domain}
                    </span>
                    <span className="text-[11px] text-tertiary tabular-nums ml-auto shrink-0">
                      {raindropTimeAgo(it.created)}
                    </span>
                  </div>
                  <span className="font-display text-sm font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors block">
                    {it.title}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mt-0.5 shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
