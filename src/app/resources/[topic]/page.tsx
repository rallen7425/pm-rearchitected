import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BookOpen, ChevronRight, Play } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SupportingReadings from "@/components/site/SupportingReadings";
import {
  getTopic,
  RESOURCES_BLOG_MAP,
  TOPIC_IDS,
  type Resource,
  type ResourceLink,
} from "@/lib/resources";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return TOPIC_IDS.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const t = getTopic(topic);
  if (!t) return { title: "Topic Not Found — Product Management, Re-Architected" };
  return {
    title: `${t.label} — Resources — Product Management, Re-Architected`,
    description: t.tileDescription,
  };
}

function LinkPill({ link }: { link: ResourceLink }) {
  const Icon = link.type === "video" ? Play : BookOpen;
  const inner = (
    <>
      <Icon
        className={`h-3 w-3 shrink-0 ${link.type === "video" ? "text-new-badge" : "text-tertiary"}`}
      />
      {link.label}
    </>
  );
  const base =
    "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm";

  if (!link.url) {
    return <span className={`${base} text-tertiary`}>{inner}</span>;
  }
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary`}
    >
      {inner}
    </a>
  );
}

// New card-list sub-topic format (2026-09-19) — one card per resource, matching
// SubstackLatest.tsx's "Recent posts" visual language. `type: "video"` resources are
// partitioned out of the card list into a separate grid below it; `type: "tool"` gets a
// small "Tool" tag instead of the video icon and "Visit site" instead of "Read the source."
function ResourceCard({ r }: { r: Resource }) {
  return (
    <div className="px-5 py-4">
      <div className="flex items-center gap-2">
        {r.type === "tool" && (
          <span className="inline-flex shrink-0 items-center rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
            Tool
          </span>
        )}
        <h4 className="text-sm font-semibold leading-snug">{r.title}</h4>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>
      {r.links ? (
        <div className="mt-2 flex flex-wrap gap-4">
          {r.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              {l.label} <ArrowUpRight className="h-3 w-3" />
            </a>
          ))}
        </div>
      ) : r.url ? (
        <a
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
        >
          {r.linkLabel ?? (r.type === "tool" ? "Visit site" : "Read the source")} <ArrowUpRight className="h-3 w-3" />
        </a>
      ) : (
        <span className="mt-2 inline-block text-xs text-tertiary">Source coming soon</span>
      )}
      {r.supportingContent && <SupportingReadings content={r.supportingContent} />}
    </div>
  );
}

function VideoGrid({ videos }: { videos: Resource[] }) {
  if (videos.length === 0) return null;
  return (
    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {videos.map((v) => (
        <a
          key={v.title}
          href={v.url ?? undefined}
          target="_blank"
          rel="noopener noreferrer"
          className="flex aspect-square flex-col justify-between rounded-xl border border-border bg-card p-2.5 transition-colors hover:border-primary/50"
        >
          <div className="flex flex-1 items-center justify-center rounded-lg bg-new-badge/10">
            <Play className="h-5 w-5 text-new-badge" />
          </div>
          <div className="mt-2">
            <p className="line-clamp-2 text-[11px] font-semibold leading-snug">{v.title}</p>
            <p className="mt-0.5 line-clamp-2 text-[10.5px] leading-snug text-muted-foreground">
              {v.summary}
            </p>
            {v.runtime && <p className="mt-0.5 text-[10px] text-tertiary">{v.runtime}</p>}
          </div>
        </a>
      ))}
    </div>
  );
}

function ResourceSection({ resources, layout }: { resources: Resource[]; layout?: "list" }) {
  if (resources.length === 0) {
    return <p className="text-sm italic text-tertiary">Write-up coming soon.</p>;
  }
  const cards = layout === "list" ? resources : resources.filter((r) => r.type !== "video");
  const videos = layout === "list" ? [] : resources.filter((r) => r.type === "video");
  return (
    <>
      {cards.length > 0 && (
        <div className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {cards.map((r) => (
            <ResourceCard key={r.title} r={r} />
          ))}
        </div>
      )}
      <VideoGrid videos={videos} />
    </>
  );
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const t = getTopic(topic);
  if (!t) notFound();

  const posts = RESOURCES_BLOG_MAP[topic] ?? [];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container max-w-5xl pb-20 pt-7">
          <div className="flex items-center gap-1.5 text-sm text-tertiary">
            <Link href="/resources" className="hover:text-primary">
              Resources
            </Link>
            <ChevronRight className="h-3 w-3 opacity-60" />
            <span>{t.label}</span>
          </div>

          <div className="mt-4 border-b border-border pb-8">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.label}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {t.pageIntro ?? t.tileDescription}
            </p>
          </div>

          {/* From the Blog */}
          <section className="mt-10">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold tracking-tight">From the Blog</h2>
              <span className="text-xs text-tertiary">
                Posts filed under {t.label}, including any sub-topic below
              </span>
            </div>
            {posts.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {posts.slice(0, 3).map((post) => (
                  <a
                    key={post.url}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:border-primary/40 hover:shadow-card-hover"
                  >
                    <span className="text-[11px] uppercase tracking-widest text-tertiary">
                      Filed under {post.filedUnder} · {post.date}
                    </span>
                    <h3 className="text-sm font-semibold leading-snug">{post.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 px-5 py-6 text-sm text-muted-foreground">
                No posts filed under {t.label} yet — this fills in as the series grows.
              </div>
            )}
          </section>

          {/* Sub-topics */}
          <section className="mt-12">
            <div className="space-y-10">
              {t.subtopics.map((st) => (
                <div
                  key={st.id}
                  id={st.id}
                  className="border-t border-border pt-8 first:border-t-0 first:pt-0"
                >
                  <h2 className="text-xl font-semibold tracking-tight">{st.name}</h2>
                  {st.note && (
                    <p className="mt-2 text-sm italic text-muted-foreground">{st.note}</p>
                  )}

                  {st.resources !== undefined ? (
                    <ResourceSection resources={st.resources ?? []} layout={st.resourceLayout} />
                  ) : (
                    <>
                      <div className="mt-3 space-y-3">
                        {st.body ? (
                          st.body.map((para, p) => (
                            <p
                              key={p}
                              className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground"
                            >
                              {para}
                            </p>
                          ))
                        ) : (
                          <p className="text-sm italic text-tertiary">Write-up coming soon.</p>
                        )}
                      </div>

                      {st.links && st.links.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2.5">
                          {st.links.map((link) => (
                            <LinkPill key={link.label} link={link} />
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
