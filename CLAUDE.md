@AGENTS.md

# PM Rearchitected — Project Status

## What This Is
A personal brand website for Rick Allen, a SaaS Product Owner focused on AI-driven product management. Built with Next.js App Router + Tailwind CSS v4. Dev server runs on **port 3001** (`npm run dev -- --port 3001`).

Brand name: **"Product Management, Re-Architected"**  
Substack: https://fromoutofthenoise.substack.com/  
Raindrop collection: 70283481

**GitHub repo:** `git@github.com:rallen7425/pm-rearchitected.git` (fixed 2026-07-10 — the repo used to be rooted one level up at `PMRearchitected/`, predating a file reorg into this folder, so it never reflected the real app; reinitialized here matching every other app's convention of repo root = app root).

**Live URL:** https://pm-rearchitected.vercel.app (first deployed 2026-07-10, `rick-allen-s-projects/pm-rearchitected`). `RAINDROP_TOKEN` is set as a production env var. Verified working: Home (live Substack RSS feed), About, and Resources pages all render correctly with real content, zero errors.

**Data layer:** Supabase — the shared "Rocky Coast Labs" project (ref `kywdezqgrtpzuecxxvfc`), schema `pm_rearchitected`. Added 2026-07-23 for the AI Terms feature; this app had no database before that. Migrations/RLS/grants live in the separate `rocky-coast-labs` repo (`~/Documents/Claude/Projects/rocky-coast-labs`), not here — see its `ARCHITECTURE.md` for the platform-wide convention (one Supabase project, one schema per app). This app only ever queries its own `pm_rearchitected` schema via `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` (server-only, never shipped to the browser).

**AI grading:** Anthropic API (`claude-haiku-4-5-20251001`), used only to grade Open-Ended quiz answers as Correct/Partial/Incorrect (`POST /api/terms/grade`). Key is `ANTHROPIC_API_KEY`, reused from the same personal key already used by sibling apps (`distilled`, `sonic-radius`) rather than a fresh one.

**Production env vars** (Vercel, `rick-allen-s-projects/pm-rearchitected`, Production environment): `RAINDROP_TOKEN`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ANTHROPIC_API_KEY` — all four confirmed present as of 2026-07-23 (the Supabase and Anthropic keys were only ever in `.env.local` until today's production push; the app would have 500'd on every `/terms` route without them).

---

## Current State (as of 2026-07-23)

### Pages built
- `/` — Home page (Hero, Recent Posts, Reading This Week, Resource Library, About section)
- `/about` — Full standalone About page with bio content
- `/resources` — Full Resources page with 8 modules, two-column bullet format
- `/terms` — AI Terms top terms (priority 1–2, static) — renamed from `/glossary` 2026-07-23
- `/terms/browse` — AI Terms browsed by category (all 177 terms)
- `/terms/search` — AI Terms live full-text search (incl. aliases/abbreviations)
- `/terms/flashcards` — AI Terms study page: Flash Card / Multiple Choice / Open-Ended
- `/terms/[slug]` — AI Terms detail page (177 statically generated)

### Data sources
- **Recent Posts**: Substack RSS (`fromoutofthenoise.substack.com/feed`), shows 5 posts with thumbnails
- **Reading This Week**: Raindrop.io API, collection 70283481, last 7 days. Token in `.env.local` (`RAINDROP_TOKEN`)
- **AI Terms**: Supabase (`pm_rearchitected` schema), 177 terms / 5 categories / 86 aliases / 318 related-term pairs / 72 sources, seeded from `db/glossary/*.csv` via `npm run seed:glossary`. Full-text search via a ranked Postgres function (`search_terms`), exposed at `GET /api/terms/search?q=...&category=...&maxPriority=...`. Open-Ended quiz grading via `POST /api/terms/grade` (Anthropic).
- ISR revalidation every 3600s (`export const revalidate = 3600` in `page.tsx`)

### Navigation
- **Home** → `/`
- **Blog** → `https://fromoutofthenoise.substack.com/` (external, new tab)
- **Resources** → `/resources`
- **AI Terms** → `/terms` (nav label changed from "Glossary" to "AI Terms" 2026-07-23; route changed from `/glossary` to `/terms` same day)
- **About** → `/about`
- Logo + "Rick Allen" name → `/about`
- Subscribe button → Substack subscribe page

---

## Completed This Session

- Rebuilt nav from scroll-based section links to proper page navigation
- Created standalone `/about` page with full bio, mission, perspective sections
- Created full `/resources` page with 8 modules, intro paragraphs, and two-column bullet lists (5 bullets per column, bold source name + description + Read More link)
- Resource Library on home page: 8 cards in 2 rows (4 per row), "Browse topic" links go to `/resources#module-id`
- Home page About section: full container width, updated link text to "Read More About Product Management, Re-Architected"
- About page body text: full container width (no max-w-3xl constraint)
- "From Out of the Noise" on About page is a clickable link to Substack
- Recent Posts increased from 3 to 5

### Resource Library module order (home page cards + resources page sections)
Row 1: PM 101 · Product Strategy · Discovery & Research · AI for Product Managers  
Row 2: UX Design · Roadmapping & Prioritization · Execution · Technology

---

## AI Terms (added 2026-07-23, renamed from "AI Glossary" same day)

Content (177 terms, editorially researched/deduped/written elsewhere) came in as 5 CSVs, originally
staged at the outer, stale `PMRearchitected/ai-glossary-db/` location — copied into this repo at
`db/glossary/*.csv` since that outer folder isn't tracked by this app's actual git repo. "Evaluations
(Evals)" was added as a 177th term later the same day after Rick spotted it missing (category
Technical-for-PMs, priority 1, alias "Evals", cross-linked to Hallucination/LLMOps/Overfitting/
Responsible AI).

- **Routes**: `/glossary` → renamed to `/terms` (and `/api/glossary/search` → `/api/terms/search`,
  plus a new `/api/terms/grade`). `src/components/glossary/`, `src/lib/glossary.ts`,
  `scripts/seed-glossary.ts`, and `db/glossary/` were deliberately left named "glossary" — only the
  URL/route structure was asked to change, not the internal module names.
- **Schema**: `pm_rearchitected` in the shared Rocky Coast Labs Supabase project (see "Data layer"
  above). Tables: `categories`, `terms` (slug primary key, not UUID — keeps route params 1:1 with
  the DB key), `aliases`, `related_terms` (each CSV pair seeded in both directions), `sources`.
  Public read-only RLS (`anon` gets `SELECT` only) — this app has no auth/login concept, so writes
  only ever happen via the service-role seed script.
- **Search**: ranked via Postgres `ts_rank` in a DB function (`pm_rearchitected.search_terms`,
  optional `category`/`priority` filters) rather than an unranked PostgREST filter — keeps
  relevance ordering in one place. Aliases (LLM, RAG, GAN, ...) are folded into the search vector
  via a `terms.alias_text_concat` column the seed script backfills, so abbreviation search works
  without a second query path. On the four hub pages, search is hidden behind a magnifying-glass
  toggle in `GlossaryHeader` next to the "AI Terms" heading (not a permanently visible box) — clicking
  it reveals `SearchBox` beneath the heading; `/terms/search` opens it by default.
- **Header nav pattern**: `GlossaryHeader` takes a `links` array (not a single link) so each hub page
  can show its own left-to-right set of links to the *other* two hub pages next to the search icon —
  e.g. `/terms` shows Test Yourself → Browse by Category; `/terms/browse` shows Top Terms → Test
  Yourself; `/terms/flashcards` shows Top Terms → Browse by Category. Exact order came from specific
  per-page instructions, not a single global rule — check `GlossaryHeader.tsx` call sites before
  assuming a pattern.
- **Re-seeding**: `npm run seed:glossary` (`scripts/seed-glossary.ts`) clears and reloads all 5
  tables from the CSVs — safe to re-run after editing content. Maps `terms.csv`'s `category` column
  (a display name, e.g. "AI 101") to `categories.id_slug` — the CSV doesn't store the slug directly.
- **Node version gotcha**: this machine runs Node 20, but `@supabase/supabase-js` now expects
  Node 22+ and its Realtime client throws (`native WebSocket not found`) without one — even though
  this app never uses Realtime. `src/lib/supabase.ts` passes the `ws` package as the transport to
  work around it; drop that once this machine's on Node 22+.

### Study page (`/terms/flashcards`) — rebuilt 2026-07-23

Three modes, in this order: **Flash Card** (default) → **Multiple Choice** → **Open-Ended**. All
three share one visual: a two-panel `TwoSidedCard` (term on the left, answer on the right).

- **Nothing shows until "Start"** — Flash Card's pre-Start state shows both panels with literal
  placeholder text ("Term" / "Definition"), not blank. Multiple Choice and Open-Ended show a bare
  Start button pre-Start; once started, they show *only* the left/term panel while the question is
  live, and reveal the right/answer panel after the user answers.
- **Filtering**: a single "Level" dropdown (1–5) replaced the old separate category + priority
  filters. Level *is* the category's own `sort_order` (Level 1 = AI 101 ... Level 5 = Notable AI
  Products) — exclusive selection (pick one level, no "All" option, no cumulative range). This was
  an explicit redesign; don't reintroduce a priority-based filter without checking with Rick first.
- **Open-Ended grading**: free-text answer → `POST /api/terms/grade` → Anthropic (Haiku) judges it
  Correct/Partial/Incorrect against the term's `short_definition` → verdict shown in bold (green
  Correct, amber Partial, red Incorrect via `--color-success`/`--color-new-badge`/`--color-destructive`)
  above the full definition, which always displays regardless of verdict. Multiple Choice shows the
  same green/red Correct/Incorrect treatment on selection (no Partial state there — it's binary).
  `--color-success` (green) was added to `globals.css`'s `@theme` block 2026-07-23; the site had no
  green in its Cobalt/Cyan palette before this.
- **Hydration bugfix**: deck shuffling and Multiple Choice's distractor shuffling both used
  `Math.random()` inside a `useMemo` that ran during SSR — since that computation re-runs during
  client hydration too, server and client landed on different random orders and React flagged a
  hydration mismatch (caught live in the dev server log, not by curl-based testing — curl doesn't
  hydrate). Fixed with a `hasMounted` flag (set via `useEffect`, only true post-hydration) that gates
  all `shuffle()` calls; both `useMemo`s fall back to unshuffled/deterministic order until then. If
  you add another randomized `useMemo` in this component, gate it the same way.

### Verification note

Today's `/terms` work (route rename, header/search redesign, study-page rebuild, Level filter) was
verified via type-check, lint, and curl-based smoke tests across every route — no browser-automation
tool is available in this environment. Rick exercised the actual interactive behavior himself
throughout the session via iterative feedback (that's how the Start-gate, card layout, verdict
colors, and Level filter design were arrived at) — but a final end-to-end click-through on a real
device, especially after the 2026-07-23 production push, is still worth doing.

---

## What's Broken / Known Issues

- **Preview tool** (`mcp__Claude_Preview__preview_*`) cannot start the server — port 3000 is occupied by an unrelated `node` process (PID 4913) that the tool checks first. Workaround: run the dev server manually (`npm run dev -- --port 3001`) and verify via curl or browser. The `.claude/launch.json` is configured for port 3001 but the tool keeps tripping on port 3000.
- **LinkedIn URL** on the About page (`/about`) uses a placeholder: `https://linkedin.com/in/rickallen`. Needs Rick's actual LinkedIn URL.
- **"Read More" links** in all Resources page bullets point to `href="#"`. Real URLs need to be added for each source.
- **Resource card ref counts** (e.g. "12 refs", "9 refs") are hardcoded placeholders. Update when real content is finalized.

---

## Next Session Should Pick Up

1. **Final device click-through on AI Terms** — production push (route rename, study-page rebuild,
   AI grading) happened 2026-07-23; do one real-device pass on the live site, particularly Open-Ended
   grading (needs a live Anthropic call) and the mobile layout of the two-panel study cards.
2. **Add real URLs** to the "Read More" links in `/resources/page.tsx` — 8 modules × 10 sources = 80 links
3. **Update resource card counts** in `src/components/site/Resources.tsx` to match actual ref counts
4. **Fix LinkedIn URL** in `src/app/about/page.tsx` (line ~144)
5. ~~Deploy~~ — **DONE 2026-07-10**, live at https://pm-rearchitected.vercel.app.
6. **Mobile nav** — the header nav is `hidden md:flex`, so mobile users see no navigation. A hamburger menu or mobile drawer needs to be added

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page |
| `src/app/about/page.tsx` | Standalone About page |
| `src/app/resources/page.tsx` | Resources page with all 8 modules |
| `src/components/site/Header.tsx` | Nav — client component, uses `usePathname` |
| `src/components/site/Hero.tsx` | Hero section (shared across pages) |
| `src/components/site/SubstackLatest.tsx` | Recent posts, fetches 5 from RSS |
| `src/components/site/Newsfeed.tsx` | Reading This Week, Raindrop.io API |
| `src/components/site/Resources.tsx` | Home page resource cards (2 rows × 4) |
| `src/components/site/About.tsx` | Home page About section (short version) |
| `src/lib/substack.ts` | RSS fetch + parse |
| `src/lib/raindrop-feed.ts` | Raindrop.io API fetch |
| `src/app/globals.css` | Tailwind v4 design tokens (`@theme`), incl. `--color-success` (green, added 2026-07-23) |
| `src/app/terms/page.tsx` | AI Terms top-terms page |
| `src/app/terms/browse/page.tsx` | AI Terms browse-by-category page |
| `src/app/terms/search/page.tsx` | AI Terms search page (renders `SearchBox`, opened by default) |
| `src/app/terms/flashcards/page.tsx` | AI Terms study page (renders `FlashcardStudio`) |
| `src/app/terms/[slug]/page.tsx` | AI Terms term detail page |
| `src/app/api/terms/search/route.ts` | AI Terms search API route |
| `src/app/api/terms/grade/route.ts` | Open-Ended quiz grading API route (Anthropic) |
| `src/lib/glossary.ts` | AI Terms data-access functions (search, list, detail) — module kept its original name |
| `src/lib/supabase.ts` | Supabase client, scoped to the `pm_rearchitected` schema |
| `src/lib/anthropic.ts` | Anthropic client factory |
| `src/lib/grading.ts` | Open-Ended answer grading prompt + call (server-only) |
| `src/components/glossary/GlossaryHeader.tsx` | Shared "AI Terms" heading + search toggle + per-page nav links, used on all 4 hub pages |
| `src/components/glossary/` | `TermList`, `SearchBox`, `GlossaryHeader`, `FlashcardStudio` — folder kept its original name |
| `scripts/seed-glossary.ts` | AI Terms seed script (`npm run seed:glossary`) — kept its original name |
| `db/glossary/*.csv` | AI Terms source content (categories/terms/aliases/related_terms/sources) — folder kept its original name |
| `.env.local` | `RAINDROP_TOKEN`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ANTHROPIC_API_KEY` |
