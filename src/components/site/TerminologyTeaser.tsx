"use client";

import { useState } from "react";
import { ArrowRight, Shuffle } from "lucide-react";
import type { TermLinkCard } from "@/lib/resources";

export interface TeaserTerm {
  front: string;
  back: string;
  source: string;
}

// A single-card preview of the glossary, using the two-panel visual from
// FlashcardStudio's TwoSidedCard. The server randomises `pool` at build/ISR time and
// passes it down; `current` starts at pool[0] so server and client first render agree.
// Shuffle re-picks in the click handler only — never during render.
export default function TerminologyTeaser({
  pool,
  links,
}: {
  pool: TeaserTerm[];
  links: TermLinkCard[];
}) {
  const [current, setCurrent] = useState(0);
  const term = pool[current];

  function shuffle() {
    if (pool.length < 2) return;
    let next = current;
    while (next === current) next = Math.floor(Math.random() * pool.length);
    setCurrent(next);
  }

  return (
    <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-tertiary">
            Random term
          </span>
          <button
            type="button"
            onClick={shuffle}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary-hover"
          >
            <Shuffle className="h-3.5 w-3.5" />
            Shuffle
          </button>
        </div>

        {term ? (
          <>
            <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex min-h-32 items-center justify-center rounded-xl border border-border bg-card p-5 text-center">
                <span className="text-lg font-semibold tracking-tight">{term.front}</span>
              </div>
              <div className="flex min-h-32 items-center justify-center rounded-xl border border-dashed border-primary/35 bg-primary-soft p-5 text-center">
                <span className="text-sm leading-relaxed text-foreground">{term.back}</span>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-tertiary">{term.source}</p>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">Terminology preview is unavailable right now.</p>
        )}
      </div>

      <div className="flex flex-col justify-between gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex flex-1 items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-card transition-colors hover:border-primary/40"
          >
            <span>
              <span className="block text-sm font-semibold">{link.label}</span>
              <span className="mt-0.5 block text-xs text-muted-foreground">{link.desc}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </div>
  );
}
