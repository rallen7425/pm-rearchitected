"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock } from "lucide-react";

export interface ReframedTile {
  title: string;
  link: string;
  description: string;
  dateLabel: string;
  readLabel: string;
}

export default function ReframedRail({
  tiles,
  seriesUrl,
}: {
  tiles: ReframedTile[];
  seriesUrl: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scroll = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.max(300, el.clientWidth * 0.8), behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll to newer posts"
          onClick={() => scroll(-1)}
          className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card-hover transition-colors hover:border-primary/40 hover:text-primary md:inline-flex"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}

      {canScrollRight && (
        <button
          type="button"
          aria-label="Scroll to older posts"
          onClick={() => scroll(1)}
          className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card-hover transition-colors hover:border-primary/40 hover:text-primary md:inline-flex"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      )}

      <div
        ref={scrollerRef}
        className="flex snap-x snap-proximity gap-5 overflow-x-auto pb-4 pt-1 [scrollbar-width:thin]"
      >
        {tiles.map((t) => (
          <a
            key={t.link}
            href={t.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-[280px] shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:border-primary/40 hover:shadow-card-hover"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-secondary-foreground">
                Reframed
              </span>
              <span className="text-[11px] tabular-nums text-tertiary">{t.dateLabel}</span>
              <span className="inline-flex items-center gap-1 text-[11px] text-tertiary">
                <Clock className="h-3 w-3" />
                {t.readLabel}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary line-clamp-2">
              {t.title}
            </h3>
            {t.description && (
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {t.description}
              </p>
            )}
            <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-medium text-primary">
              Read full article <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>
        ))}

        <a
          href={seriesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-[280px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-dashed border-primary/40 bg-primary-soft p-5 transition-all hover:border-primary hover:shadow-card-hover"
        >
          <div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-primary">
              From Out of the Noise
            </div>
            <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
              View the full Reframed series
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Every framework, rethought for the age of AI. Read the whole series on the blog.
            </p>
          </div>
          <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-medium text-primary">
            Open the series <ArrowUpRight className="h-3 w-3" />
          </span>
        </a>
      </div>
    </div>
  );
}
