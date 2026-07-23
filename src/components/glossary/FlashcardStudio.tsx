"use client";

import { useMemo, useState } from "react";
import type { Category, StudyTerm } from "@/lib/glossary";

type Mode = "flashcards" | "mc" | "open";

const MODES: { value: Mode; label: string }[] = [
  { value: "flashcards", label: "Flashcards" },
  { value: "mc", label: "Multiple Choice" },
  { value: "open", label: "Open-Ended" },
];

const PRIORITY_OPTIONS = [
  { value: 1, label: "Essential (priority 1)" },
  { value: 2, label: "Essential + Important (priority 1–2)" },
  { value: 5, label: "All levels (priority 1–5)" },
];

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function Progress({ index, total }: { index: number; total: number }) {
  return (
    <p className="text-xs font-medium text-muted-foreground mb-3">
      {Math.min(index + 1, total)} / {total}
    </p>
  );
}

function ScoreBar({ score }: { score: { correct: number; total: number } }) {
  return (
    <p className="text-xs font-medium text-muted-foreground mb-3">
      Score: {score.correct} / {score.total}
    </p>
  );
}

function EmptyState() {
  return (
    <p className="text-sm text-muted-foreground">
      No terms match these filters — try widening the category or priority level.
    </p>
  );
}

function FlashcardsMode({ deck }: { deck: StudyTerm[] }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [showLong, setShowLong] = useState(false);

  if (deck.length === 0) return <EmptyState />;
  const card = deck[index % deck.length];

  function next() {
    setIndex((i) => (i + 1) % deck.length);
    setRevealed(false);
    setShowLong(false);
  }

  return (
    <div>
      <Progress index={index} total={deck.length} />
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        className="w-full text-left rounded-xl border border-border bg-card p-8 min-h-48 flex flex-col items-center justify-center text-center shadow-card hover:shadow-card-hover transition-shadow"
      >
        {!revealed ? (
          <span className="text-xl md:text-2xl font-semibold tracking-tight">{card.canonical_term}</span>
        ) : (
          <div className="space-y-3">
            <p className="text-base text-foreground leading-relaxed">{card.short_definition}</p>
            {showLong && (
              <p className="text-sm text-muted-foreground leading-relaxed">{card.long_definition}</p>
            )}
          </div>
        )}
      </button>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setRevealed((r) => !r)}
          className="text-sm px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors"
        >
          {revealed ? "Hide" : "Reveal"}
        </button>
        {revealed && !showLong && (
          <button
            type="button"
            onClick={() => setShowLong(true)}
            className="text-sm px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors"
          >
            Tell me more
          </button>
        )}
        <button
          type="button"
          onClick={next}
          className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

function MultipleChoiceMode({
  deck,
  termsByCategory,
}: {
  deck: StudyTerm[];
  termsByCategory: Map<string, StudyTerm[]>;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const card = deck.length > 0 ? deck[index % deck.length] : null;
  const options = useMemo(() => {
    if (!card) return [];
    const pool = termsByCategory.get(card.category_id) ?? [];
    const distractors = shuffle(pool.filter((t) => t.id_slug !== card.id_slug)).slice(0, 3);
    return shuffle([card, ...distractors]);
  }, [card, termsByCategory]);

  if (!card) return <EmptyState />;
  const correctSlug = card.id_slug;

  function choose(optionSlug: string) {
    if (selected) return;
    setSelected(optionSlug);
    setScore((s) => ({
      correct: s.correct + (optionSlug === correctSlug ? 1 : 0),
      total: s.total + 1,
    }));
  }

  function next() {
    setIndex((i) => (i + 1) % deck.length);
    setSelected(null);
  }

  return (
    <div>
      <ScoreBar score={score} />
      <Progress index={index} total={deck.length} />
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-5">{card.canonical_term}</h3>
      <div className="space-y-2.5">
        {options.map((opt) => {
          const isCorrect = opt.id_slug === card.id_slug;
          const isSelected = selected === opt.id_slug;
          const answered = selected !== null;

          let stateClasses = "border-border hover:bg-secondary";
          if (answered && isCorrect) stateClasses = "border-primary bg-primary-soft";
          else if (answered && isSelected) stateClasses = "border-destructive bg-destructive/10";
          else if (answered) stateClasses = "border-border opacity-60";

          return (
            <button
              key={opt.id_slug}
              type="button"
              disabled={answered}
              onClick={() => choose(opt.id_slug)}
              className={`w-full text-left text-sm px-4 py-3 rounded-lg border transition-colors ${stateClasses}`}
            >
              {opt.short_definition}
            </button>
          );
        })}
      </div>
      {selected && (
        <div className="mt-5">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.long_definition}</p>
          <button
            type="button"
            onClick={next}
            className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

function OpenEndedMode({ deck }: { deck: StudyTerm[] }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const card = deck.length > 0 ? deck[index % deck.length] : null;
  if (!card) return <EmptyState />;

  function grade(gotIt: boolean) {
    setScore((s) => ({ correct: s.correct + (gotIt ? 1 : 0), total: s.total + 1 }));
    setIndex((i) => (i + 1) % deck.length);
    setRevealed(false);
  }

  return (
    <div>
      <ScoreBar score={score} />
      <Progress index={index} total={deck.length} />
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-5">{card.canonical_term}</h3>
      {!revealed ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="text-sm px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors"
        >
          Reveal answer
        </button>
      ) : (
        <div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{card.long_definition}</p>
          <p className="text-xs font-medium text-muted-foreground mb-2">Did you get it?</p>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => grade(true)}
              className="text-sm px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary-soft transition-colors"
            >
              Got it ✓
            </button>
            <button
              type="button"
              onClick={() => grade(false)}
              className="text-sm px-4 py-2 rounded-full border border-destructive text-destructive hover:bg-destructive/10 transition-colors"
            >
              Missed it ✗
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function FlashcardStudio({ terms, categories }: { terms: StudyTerm[]; categories: Category[] }) {
  const [mode, setMode] = useState<Mode>("flashcards");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [maxPriority, setMaxPriority] = useState<number>(2);
  const [shuffleNonce, setShuffleNonce] = useState(0);

  const termsByCategory = useMemo(() => {
    const map = new Map<string, StudyTerm[]>();
    for (const term of terms) {
      const list = map.get(term.category_id) ?? [];
      list.push(term);
      map.set(term.category_id, list);
    }
    return map;
  }, [terms]);

  const deck = useMemo(() => {
    const filtered = terms.filter(
      (t) => (categoryFilter === "all" || t.category_id === categoryFilter) && t.priority <= maxPriority
    );
    return shuffle(filtered);
    // shuffleNonce isn't read above — it exists purely to force this memo to
    // recompute (and thus reshuffle) when the "Shuffle" button is clicked.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terms, categoryFilter, maxPriority, shuffleNonce]);

  const sessionKey = `${mode}-${categoryFilter}-${maxPriority}-${shuffleNonce}`;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {MODES.map((m) => (
          <button
            key={m.value}
            type="button"
            onClick={() => setMode(m.value)}
            className={
              mode === m.value
                ? "text-sm px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground font-medium transition-colors"
                : "text-sm px-3.5 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors"
            }
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-border">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="text-sm rounded-lg border border-border bg-card px-3 py-2"
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c.id_slug} value={c.id_slug}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          value={maxPriority}
          onChange={(e) => setMaxPriority(Number(e.target.value))}
          className="text-sm rounded-lg border border-border bg-card px-3 py-2"
        >
          {PRIORITY_OPTIONS.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => setShuffleNonce((n) => n + 1)}
          className="text-sm px-3.5 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
        >
          Shuffle
        </button>
        <span className="text-xs text-muted-foreground ml-auto">{deck.length} terms</span>
      </div>

      {mode === "flashcards" && <FlashcardsMode key={sessionKey} deck={deck} />}
      {mode === "mc" && (
        <MultipleChoiceMode key={sessionKey} deck={deck} termsByCategory={termsByCategory} />
      )}
      {mode === "open" && <OpenEndedMode key={sessionKey} deck={deck} />}
    </div>
  );
}
