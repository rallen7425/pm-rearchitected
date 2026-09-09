import { ArrowUpRight } from "lucide-react";
import { RESOURCE_TOPICS } from "@/lib/resources";

// The 6-topic tile grid — 2 wide tiles (span 2 cols) on the first row, 4 standard tiles
// on the second. Each tile is a tight header + description + link to the topic's page.
// Shared by the home-page section (`Resources.tsx`) and the standalone `/resources` page.
export default function ResourceTiles() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {RESOURCE_TOPICS.map((topic) => (
        <a
          key={topic.id}
          href={`/resources/${topic.id}`}
          className={`group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:border-primary/40 hover:shadow-card-hover ${
            topic.width === "wide" ? "lg:col-span-2" : ""
          }`}
        >
          <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
            {topic.label}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {topic.tileDescription}
          </p>

          <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-medium text-primary">
            Read more <ArrowUpRight className="h-3 w-3" />
          </span>
        </a>
      ))}
    </div>
  );
}
