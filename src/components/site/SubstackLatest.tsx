import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";
import { fetchSubstackPosts, formatDate, readTime } from "@/lib/substack";

export default async function SubstackLatest() {
  const posts = await fetchSubstackPosts(5);

  return (
    <section id="writing" className="scroll-mt-24">
      <div className="flex items-end justify-between mb-8 gap-6 flex-wrap">
        <div>
          <div className="text-xs font-medium text-primary uppercase tracking-widest">
            Blog: From Out of the Noise
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
            Recent posts
          </h2>
        </div>
        <a
          href="https://fromoutofthenoise.substack.com/archive"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
        >
          View archive <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <ul className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden shadow-card">
        {posts.map((p) => (
          <li key={p.link}>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 px-6 py-5 hover:bg-accent/60 transition-colors"
            >
              {p.thumbnail && (
                <div className="shrink-0 mt-0.5">
                  <Image
                    src={p.thumbnail}
                    alt=""
                    width={80}
                    height={80}
                    className="rounded-lg object-cover w-20 h-20"
                    unoptimized
                  />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  {p.tag && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground uppercase tracking-widest">
                      {p.tag}
                    </span>
                  )}
                  <span className="text-[11px] text-tertiary tabular-nums">
                    {formatDate(p.pubDate)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-tertiary">
                    <Clock className="h-3 w-3" />
                    {readTime(p.description)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug tracking-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                {p.description && (
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                )}
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  Read full article <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>

              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
