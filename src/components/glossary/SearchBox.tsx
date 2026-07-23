"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { TermSearchResult } from "@/lib/glossary";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<TermSearchResult[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    const trimmed = query.trim();
    const controller = new AbortController();

    const timeout = setTimeout(async () => {
      if (!trimmed) {
        setResults([]);
        setStatus("idle");
        return;
      }

      setStatus("loading");
      try {
        const res = await fetch(`/api/terms/search?q=${encodeURIComponent(trimmed)}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Search request failed");
        const data = await res.json();
        setResults(data.results ?? []);
        setStatus("done");
      } catch (err) {
        if ((err as Error).name !== "AbortError") setStatus("error");
      }
    }, 250);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search terms, e.g. &ldquo;LLM&rdquo;, &ldquo;RAG&rdquo;..."
        autoFocus
        className="w-full max-w-xl rounded-lg border border-border bg-card px-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />

      <div className="mt-8">
        {status === "loading" && <p className="text-sm text-muted-foreground">Searching…</p>}
        {status === "error" && (
          <p className="text-sm text-destructive">Something went wrong. Try again.</p>
        )}
        {status === "done" && results.length === 0 && (
          <p className="text-sm text-muted-foreground">No terms found for &ldquo;{query}&rdquo;.</p>
        )}
        {status === "done" && results.length > 0 && (
          <ul className="space-y-4">
            {results.map((result) => (
              <li key={result.id_slug} className="text-sm text-muted-foreground leading-relaxed">
                <Link
                  href={`/terms/${result.id_slug}`}
                  className="font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {result.canonical_term}
                </Link>
                {": "}
                {result.short_definition}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
