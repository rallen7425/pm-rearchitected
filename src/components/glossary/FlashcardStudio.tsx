"use client";

import { useEffect, useMemo, useState } from "react";
import type { Category, StudyTerm } from "@/lib/glossary";

type Mode = "mc" | "flashcard" | "open";
type GradeVerdict = "Correct" | "Partial" | "Incorrect";

const MODES: { value: Mode; label: string }[] = [
  { value: "flashcard", label: "Flash Card" },
  { value: "mc", label: "Multiple Choice" },
  { value: "open", label: "Open-Ended" },
];

const VERDICT_CLASSES: Record<GradeVerdict, string> = {
  Correct: "text-success",
  Partial: "text-new-badge",
  Incorrect: "text-destructive",
};

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

function StartButton({ onStart }: { onStart: () => void }) {
  return (
    <button
      type="button"
      onClick={onStart}
      className="text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
    >
      Start
    </button>
  );
}

function Definition({ term }: { term: StudyTerm }) {
  return (
    <div className="space-y-2 text-left">
      <p className="text-base text-foreground leading-relaxed">{term.short_definition}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{term.long_definition}</p>
    </div>
  );
}

function CardPanel({ children, empty }: { children: React.ReactNode; empty?: boolean }) {
  return (
    <div
      className={`rounded-xl p-6 md:p-8 min-h-48 flex items-center justify-center ${
        empty
          ? "border border-dashed border-border/60"
          : "border border-border bg-card shadow-card"
      }`}
    >
      {children}
    </div>
  );
}

// The front/back pair shared by all three study modes. Flash Card mode
// always passes a populated `answer`; Multiple Choice and Open-Ended pass
// `null` while the question is being asked, then the real content once
// answered/graded — so the same two-card layout works for "just the term"
// and "term + answer" without three separate designs.
function TwoSidedCard({ term, answer }: { term: string; answer: React.ReactNode | null }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CardPanel>
        <span className="text-xl md:text-2xl font-semibold tracking-tight text-center">{term}</span>
      </CardPanel>
      <CardPanel empty={!answer}>
        {answer ?? <span className="text-muted-foreground text-sm">?</span>}
      </CardPanel>
    </div>
  );
}

function FlashCardMode({ deck }: { deck: StudyTerm[] }) {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);

  const card = deck.length > 0 ? deck[index % deck.length] : null;
  if (!card) return <EmptyState />;
  const currentCard = card;

  function next() {
    setIndex((i) => (i + 1) % deck.length);
  }

  if (!started) {
    return (
      <div>
        <TwoSidedCard term="Term" answer="Definition" />
        <div className="mt-4">
          <StartButton onStart={() => setStarted(true)} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Progress index={index} total={deck.length} />
      <TwoSidedCard term={currentCard.canonical_term} answer={<Definition term={currentCard} />} />
      <button
        type="button"
        onClick={next}
        className="mt-4 text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
      >
        Next →
      </button>
    </div>
  );
}

function MultipleChoiceMode({
  deck,
  termsByCategory,
  hasMounted,
}: {
  deck: StudyTerm[];
  termsByCategory: Map<string, StudyTerm[]>;
  hasMounted: boolean;
}) {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const card = deck.length > 0 ? deck[index % deck.length] : null;
  const options = useMemo(() => {
    if (!card) return [];
    const pool = termsByCategory.get(card.category_id) ?? [];
    const others = pool.filter((t) => t.id_slug !== card.id_slug);
    // Same hydration-mismatch concern as the deck itself: no randomness
    // until after mount, so the server- and client-hydration renders agree.
    const distractors = hasMounted ? shuffle(others).slice(0, 3) : others.slice(0, 3);
    const combined = [card, ...distractors];
    return hasMounted ? shuffle(combined) : combined;
  }, [card, termsByCategory, hasMounted]);

  if (!card) return <EmptyState />;
  const currentCard = card;

  if (!started) {
    return <StartButton onStart={() => setStarted(true)} />;
  }

  function choose(optionSlug: string) {
    if (selected) return;
    setSelected(optionSlug);
    setScore((s) => ({
      correct: s.correct + (optionSlug === currentCard.id_slug ? 1 : 0),
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
      <TwoSidedCard
        term={currentCard.canonical_term}
        answer={
          selected ? (
            <div className="text-left">
              <p
                className={`text-sm font-semibold mb-3 ${
                  selected === currentCard.id_slug ? "text-success" : "text-destructive"
                }`}
              >
                {selected === currentCard.id_slug ? "Correct" : "Incorrect"}
              </p>
              <Definition term={currentCard} />
            </div>
          ) : null
        }
      />
      <div className="mt-4 space-y-2.5">
        {options.map((opt) => {
          const isCorrect = opt.id_slug === currentCard.id_slug;
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
        <button
          type="button"
          onClick={next}
          className="mt-5 text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
        >
          Next →
        </button>
      )}
    </div>
  );
}

function OpenEndedMode({ deck }: { deck: StudyTerm[] }) {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState<"idle" | "grading" | "graded" | "error">("idle");
  const [verdict, setVerdict] = useState<GradeVerdict | null>(null);
  const [tally, setTally] = useState({ correct: 0, partial: 0, incorrect: 0 });

  const card = deck.length > 0 ? deck[index % deck.length] : null;
  if (!card) return <EmptyState />;
  const currentCard = card;

  if (!started) {
    return <StartButton onStart={() => setStarted(true)} />;
  }

  async function submit() {
    if (!answer.trim() || status === "grading") return;
    setStatus("grading");
    try {
      const res = await fetch("/api/terms/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          term: currentCard.canonical_term,
          correctDefinition: currentCard.short_definition,
          userAnswer: answer,
        }),
      });
      if (!res.ok) throw new Error("Grading request failed");
      const data = await res.json();
      const result = data.verdict as GradeVerdict;
      setVerdict(result);
      setStatus("graded");
      setTally((t) => ({
        correct: t.correct + (result === "Correct" ? 1 : 0),
        partial: t.partial + (result === "Partial" ? 1 : 0),
        incorrect: t.incorrect + (result === "Incorrect" ? 1 : 0),
      }));
    } catch {
      setStatus("error");
    }
  }

  function next() {
    setIndex((i) => (i + 1) % deck.length);
    setAnswer("");
    setVerdict(null);
    setStatus("idle");
  }

  const revealed = status === "graded";

  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground mb-3">
        Correct: {tally.correct} · Partial: {tally.partial} · Incorrect: {tally.incorrect}
      </p>
      <Progress index={index} total={deck.length} />
      <TwoSidedCard
        term={currentCard.canonical_term}
        answer={
          revealed && verdict ? (
            <div className="text-left">
              <p className={`text-sm font-semibold mb-3 ${VERDICT_CLASSES[verdict]}`}>{verdict}</p>
              <Definition term={currentCard} />
            </div>
          ) : null
        }
      />

      {!revealed && (
        <div className="mt-4">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer..."
            rows={3}
            disabled={status === "grading"}
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
          />
          <button
            type="button"
            onClick={submit}
            disabled={!answer.trim() || status === "grading"}
            className="mt-3 text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors disabled:opacity-50"
          >
            {status === "grading" ? "Grading…" : "Submit"}
          </button>
          {status === "error" && (
            <p className="mt-2 text-sm text-destructive">
              Something went wrong grading that — try again.
            </p>
          )}
        </div>
      )}

      {revealed && (
        <button
          type="button"
          onClick={next}
          className="mt-5 text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
        >
          Next →
        </button>
      )}
    </div>
  );
}

export function FlashcardStudio({ terms, categories }: { terms: StudyTerm[]; categories: Category[] }) {
  const [mode, setMode] = useState<Mode>("flashcard");
  const [level, setLevel] = useState<number>(1);
  const [shuffleNonce, setShuffleNonce] = useState(0);

  // Math.random() must not run during the render that gets server-rendered
  // and then re-run during hydration — the two would disagree on order and
  // React would flag a hydration mismatch. Shuffling only starts once mounted.
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    // Effects are the only thing guaranteed to run client-side only, after
    // hydration reconciles — which is exactly what "detect we're mounted"
    // needs. Can't be computed during render without reintroducing the
    // mismatch this exists to avoid.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasMounted(true);
  }, []);

  const termsByCategory = useMemo(() => {
    const map = new Map<string, StudyTerm[]>();
    for (const term of terms) {
      const list = map.get(term.category_id) ?? [];
      list.push(term);
      map.set(term.category_id, list);
    }
    return map;
  }, [terms]);

  // "Level" is the category's own sort_order (1 = AI 101 ... 5 = Notable AI
  // Products / hardest) — one dial instead of separate category + priority
  // filters.
  const categoryIdForLevel = useMemo(() => {
    const match = categories.find((c) => c.sort_order === level);
    return match?.id_slug;
  }, [categories, level]);

  const deck = useMemo(() => {
    const filtered = terms.filter((t) => t.category_id === categoryIdForLevel);
    return hasMounted ? shuffle(filtered) : filtered;
    // shuffleNonce isn't read above — it exists purely to force this memo to
    // recompute (and thus reshuffle) when the "Shuffle" button is clicked.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terms, categoryIdForLevel, shuffleNonce, hasMounted]);

  const sessionKey = `${mode}-${level}-${shuffleNonce}`;

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
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
          className="text-sm rounded-lg border border-border bg-card px-3 py-2"
        >
          {categories.map((c) => (
            <option key={c.id_slug} value={c.sort_order}>
              Level {c.sort_order} — {c.name}
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

      {mode === "mc" && (
        <MultipleChoiceMode
          key={sessionKey}
          deck={deck}
          termsByCategory={termsByCategory}
          hasMounted={hasMounted}
        />
      )}
      {mode === "flashcard" && <FlashCardMode key={sessionKey} deck={deck} />}
      {mode === "open" && <OpenEndedMode key={sessionKey} deck={deck} />}
    </div>
  );
}
