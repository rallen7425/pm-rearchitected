import { fetchReframedPosts, formatDate, readTimeFromWords, reframedSeriesTitle } from "@/lib/substack";
import ReframedRail, { type ReframedTile } from "./ReframedRail";

const SERIES_URL = "https://fromoutofthenoise.substack.com/p/pm-reframed";

export default async function PMReframed() {
  const posts = await fetchReframedPosts();
  if (posts.length === 0) return null;

  const tiles: ReframedTile[] = posts.map((p) => ({
    title: reframedSeriesTitle(p.title),
    link: p.link,
    description: p.description,
    dateLabel: formatDate(p.pubDate),
    readLabel: readTimeFromWords(p.wordcount),
  }));

  return (
    <section id="pm-reframed" className="scroll-mt-24">
      <div className="mb-8">
        <div className="text-xs font-medium uppercase tracking-widest text-primary">
          Blog: From Out of the Noise
        </div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Product Management Reframed
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          Rethinking Product Frameworks in the Age of AI
        </p>
      </div>

      <ReframedRail tiles={tiles} seriesUrl={SERIES_URL} />
    </section>
  );
}
