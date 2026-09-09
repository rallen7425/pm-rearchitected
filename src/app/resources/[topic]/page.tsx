import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, ChevronRight, Play } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import {
  getTopic,
  RESOURCES_BLOG_MAP,
  TOPIC_IDS,
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

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const t = getTopic(topic);
  if (!t) notFound();

  const posts = RESOURCES_BLOG_MAP[topic] ?? [];
  const total = t.subtopics.length;

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
            <h2 className="mb-6 text-xl font-semibold tracking-tight">Sub-topics</h2>
            <div className="space-y-10">
              {t.subtopics.map((st, i) => (
                <div
                  key={st.id}
                  className="border-t border-border pt-8 first:border-t-0 first:pt-0"
                >
                  <div className="font-mono text-xs text-tertiary">
                    {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-tight">{st.name}</h3>

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

                  {st.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {st.links.map((link) => (
                        <LinkPill key={link.label} link={link} />
                      ))}
                    </div>
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
