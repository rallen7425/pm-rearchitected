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

**Digital Twin chat:** Anthropic API (`claude-sonnet-5`), a system-prompt-stuffed chat (no RAG/vector store) answering visitor questions about Rick in his own voice, streamed through `POST /api/digital-twin/chat`. Same `ANTHROPIC_API_KEY` as above. See "Digital Twin" section below.

**Production env vars** (Vercel, `rick-allen-s-projects/pm-rearchitected`, Production environment): `RAINDROP_TOKEN`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ANTHROPIC_API_KEY` — all four confirmed present as of 2026-07-23 (the Supabase and Anthropic keys were only ever in `.env.local` until today's production push; the app would have 500'd on every `/terms` route without them). No new env vars were needed for PM Terms or Digital Twin (2026-08-21) — both reuse existing keys.

---

## Current State (as of 2026-08-21)

### Pages built
- `/` — Home page (Hero, Recent Posts, Reading This Week, Resource Library, About section)
- `/about` — Full standalone About page with bio content, plus a Digital Twin callout card (added 2026-08-21)
- `/resources` — Full Resources page with 8 modules, two-column bullet format
- `/terminology` — Combined hub showing top PM terms and top AI terms side by side (added 2026-08-21)
- `/terms` — AI Terms top terms (priority 1–2, static) — renamed from `/glossary` 2026-07-23
- `/terms/browse` — AI Terms browsed by category (all 177 terms)
- `/terms/search` — AI Terms live full-text search (incl. aliases/abbreviations)
- `/terms/flashcards` — AI Terms study page: Flash Card / Multiple Choice / Open-Ended
- `/terms/[slug]` — AI Terms detail page (177 statically generated)
- `/pm-terms`, `/pm-terms/browse`, `/pm-terms/search`, `/pm-terms/flashcards`, `/pm-terms/[slug]` — PM Terms domain, mirrors the `/terms` route tree exactly (added 2026-08-21, see "PM Terms" section below)
- `/digital-twin` — AI chat answering visitor questions about Rick in his own voice (added 2026-08-21, see "Digital Twin" section below)

### Data sources
- **Recent Posts**: Substack RSS (`fromoutofthenoise.substack.com/feed`), shows 5 posts with thumbnails
- **Reading This Week**: Raindrop.io API, collection 70283481, last 7 days. Token in `.env.local` (`RAINDROP_TOKEN`)
- **AI Terms**: Supabase (`pm_rearchitected` schema), 177 terms / 5 categories / 86 aliases / 318 related-term pairs / 72 sources, seeded from `db/glossary/*.csv` via `npm run seed:glossary`. Full-text search via a ranked Postgres function (`search_terms`), exposed at `GET /api/terms/search?q=...&category=...&maxPriority=...`. Open-Ended quiz grading via `POST /api/terms/grade` (Anthropic).
- **PM Terms**: same Supabase tables as AI Terms, distinguished by a `categories.domain` column (`ai` | `pm`) added 2026-08-21 — 11 PM categories, 516 PM terms. See "PM Terms" section below.
- **Digital Twin**: 5 markdown files at `content/digital-twin/*.md`, read server-side at request time and stuffed into the system prompt — no database, no RAG. See "Digital Twin" section below.
- ISR revalidation every 3600s (`export const revalidate = 3600` in `page.tsx`)

### Navigation
- **Home** → `/`
- **Blog** → `https://fromoutofthenoise.substack.com/` (external, new tab)
- **Resources** → `/resources`
- **Terminology** → `/terminology` (renamed from "AI Terms" → `/terms`, 2026-08-21 — now points to the combined PM+AI hub instead of the AI-only page)
- **Digital Twin** → `/digital-twin` (added 2026-08-21)
- **About** → `/about`
- Logo + "Rick Allen" name → `/about`
- Mobile (`<md`): hamburger icon (☰/✕) toggles a dropdown with the same links below the header, added 2026-07-24 — desktop nav is `hidden md:flex` with no prior mobile fallback, so mobile users previously had zero navigation
- Subscribe button removed from the header 2026-07-24 (per Rick's request, "for now") — still present on the About page and Footer, just not in the top nav

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

## Completed 2026-08-21

- Shipped the **PM Terms glossary domain** — work that had actually been built and DB-seeded on
  2026-08-09 but sat uncommitted in the working tree for ~3 weeks (never documented here, since this
  file wasn't updated that session). Verified live before pushing: the Supabase `domain` migration
  was already applied and 516 PM terms / 11 categories were already seeded, and `npm run build`
  compiled every new route clean. See "PM Terms" section below.
- Built and shipped the **Digital Twin AI chat feature** end to end — corpus, system prompt
  assembly, streaming API route, rate limiting, chat UI, dedicated page, nav + About page entry
  points. See "Digital Twin" section below.
- Renamed the "AI Terms" nav link to "Terminology," pointing at the new combined hub instead of the
  AI-only `/terms` page.
- All three landed as three separate commits in one push, deployed clean to production, and
  spot-checked live (200s on `/digital-twin`, `/terminology`, `/pm-terms`, `/terms`; a live streaming
  call to the Digital Twin endpoint confirmed the comp-deflection and employment-status rules held).

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

The 2026-07-23 `/terms` work (route rename, header/search redesign, study-page rebuild, Level filter)
was verified via type-check, lint, and curl-based smoke tests across every route — no
browser-automation tool is available in this environment. Rick exercised the actual interactive
behavior himself throughout the session via iterative feedback (that's how the Start-gate, card
layout, verdict colors, and Level filter design were arrived at). His follow-up real-phone
click-through on 2026-07-24 is exactly why this kind of check matters even after curl/lint pass
clean: it caught the header nav being completely invisible on mobile (`hidden md:flex` with no
fallback — see "Next Session Should Pick Up," now fixed). Keep pushing for a real-device pass after
any header/nav/layout change; curl and automated checks won't catch responsive-only bugs.

---

## PM Terms (built 2026-08-09, committed & shipped 2026-08-21)

A second glossary "domain" alongside AI Terms, covering core product management terminology
(strategy, discovery, UX, agile/delivery, metrics, frameworks, roles, technical-for-PMs, product
ops, deployment, go-to-market). Shares the same Supabase tables as AI Terms rather than a separate
schema.

- **Schema**: `categories` gained a `domain` column (`ai` | `pm`) — the discriminator for
  everything. `terms` has no domain column of its own; domain is derived by joining through
  `category_id`, so any domain-scoped terms query goes through `categoryIdsForDomain()` in
  `src/lib/glossary.ts` first. 11 PM categories, 516 PM terms.
- **Routes**: `/pm-terms`, `/pm-terms/browse`, `/pm-terms/search`, `/pm-terms/flashcards`,
  `/pm-terms/[slug]` mirror the `/terms` tree exactly, sharing the same components
  (`GlossaryHeader`, `SearchBox`, `TermList`, `FlashcardStudio`) via a `domain` prop rather than
  forking them.
- **Search**: `search_terms` Postgres function gained a `filter_domain` parameter; `GET
  /api/terms/search` accepts `?domain=ai|pm` (defaults to `ai` for backward compatibility with
  existing callers).
- **`/terminology`**: new hub page showing the top 10 PM terms and top 10 AI terms side by side,
  each linking through to its own domain's routes.
- **Verification note**: this feature's DB migration and seed data were confirmed live via a
  throwaway script (`createClient` + the same `ws`-transport Node-20 workaround as
  `seed-glossary.ts`) before pushing on 2026-08-21, and `npm run build` compiled all new routes —
  but nobody has clicked through the actual `/pm-terms` or `/terminology` pages in a browser yet.
  Treat as build-verified, not UX-verified.

---

## Digital Twin (added 2026-08-21)

A system-prompt-stuffed chat (explicitly **not** RAG — no vector store, no embeddings) that answers
visitor questions about Rick's background, career, and product philosophy in his own voice. First of
two planned AI features; a second, broader "Product Coach" tool is a separate future project, not
started.

- **Corpus**: 5 markdown files (`bio.md`, `career-timeline.md`, `achievements.md`, `philosophy.md`,
  `faq.md`) at `content/digital-twin/*.md`, copied from `PMRearchitected/Rick's Digital
  Twin/Corpus-Ready/` (the outer scratch folder, not tracked by this repo — Rick can edit the `.md`
  files directly to update the twin's knowledge, no code changes needed).
- **System prompt assembly**: `src/lib/digital-twin.ts` reads all 5 files at request time via `fs`,
  concatenates them under `## HEADING` delimiters, and wraps them with identity framing, hard
  behavioral rules pulled near-verbatim from `faq.md`'s "Controlled framing" section (never disclose
  compensation figures, never surface recruiter/contact names, settled brief framing for "why did
  you leave UKG" — large-scale layoff, May 2026, no elaboration — acknowledge the active job search
  without naming companies in conversation, never fabricate facts outside the corpus, no em dashes
  ever), and a closing voice instruction from `bio.md`'s "Personality / voice notes" section.
- **API**: `POST /api/digital-twin/chat`, streaming Route Handler, `claude-sonnet-5` (not Haiku —
  voice quality matters more here than for the cheap Haiku-based AI Terms quiz grading). `max_tokens:
  600`. Rejects message arrays over 20 turns or 2000 chars/message. No conversation history persisted
  server-side — the client holds the running array and resends it each request. No logging of
  message content, only error objects on failure.
- **Rate limiting**: `src/lib/rate-limit.ts`, in-memory sliding window per IP (`x-forwarded-for`),
  15 requests/10min. Known v1 tradeoff: resets on Vercel cold start since it's not a shared store.
  If abuse shows up, upgrade path is a Supabase-backed counter table (project already has a Supabase
  connection).
- **UI**: `src/components/digital-twin/ChatPanel.tsx`, dedicated page at `/digital-twin` (not a
  floating widget, matching the site's existing pattern of dedicated feature pages). Streams
  token-by-token via `ReadableStream` + `getReader()` on the client. Visible disclaimer pinned above
  the chat ("This is an AI representation of Rick... not Rick himself").
- **React Compiler gotcha**: accumulating streamed text into a `let` variable mutated across a
  `while` loop, then read inside a `setMessages` closure, trips `eslint-plugin-react-hooks`'s
  `react-hooks/immutability` rule — Next 16 ships React Compiler-aware lint rules, one of the
  "breaking changes vs. training data" `AGENTS.md` warns about. Fixed by deriving the new message
  purely from `prev` inside the state updater (`prev[prev.length - 1].content + chunk`) instead of
  mutating an external variable. Apply the same pattern to any future streaming UI here.
- **Verification note**: all 5 required behavioral probes (salary/comp deflection, UKG-departure
  framing, recruiter-name redirect, honest "I don't know" on an uncovered fact, general POV question
  for voice quality) were tested via live streaming curl calls against both local and production —
  all passed, including zero em dashes across every response despite the source corpus itself being
  full of them. Browser streaming and desktop layout were visually confirmed. **Mobile viewport was
  not verified** — the browser tool's `resize_window` reported success but `window.innerWidth`
  stayed at desktop width regardless (tried twice, including a fresh tab). Needs a real-phone check,
  same class of gap that caught the 2026-07-24 header-nav mobile bug.

---

## What's Broken / Known Issues

- **Preview tool** (`mcp__Claude_Preview__preview_*`) cannot start the server — port 3000 is occupied by an unrelated `node` process (PID 4913) that the tool checks first. Workaround: run the dev server manually (`npm run dev -- --port 3001`) and verify via curl or browser. The `.claude/launch.json` is configured for port 3001 but the tool keeps tripping on port 3000.
- **LinkedIn URL** on the About page (`/about`) uses a placeholder: `https://linkedin.com/in/rickallen`. Needs Rick's actual LinkedIn URL.
- **"Read More" links** in all Resources page bullets point to `href="#"`. Real URLs need to be added for each source.
- **Resource card ref counts** (e.g. "12 refs", "9 refs") are hardcoded placeholders. Update when real content is finalized.
- **Digital Twin mobile layout unverified** — see "Digital Twin" section above. `resize_window` in the browser automation tool didn't actually change the rendered viewport this session (confirmed via `window.innerWidth`); needs a real-phone check.
- **`/pm-terms` and `/terminology` are build-verified only, not UX-verified** — nobody has clicked through the actual pages in a browser since they were built on 2026-08-09. Data and routes are confirmed working (build + direct DB query + a 200 smoke test in production), but the interactive experience (browse, search, flashcards for the PM domain) hasn't been exercised.
- **Digital Twin rate limiting is in-memory** — resets on every Vercel cold start, so it's not a durable defense against sustained abuse. Fine for current traffic; revisit with a Supabase-backed counter if abuse shows up.

---

## Next Session Should Pick Up

1. **Real-phone check of `/digital-twin`** — same gap that caught the 2026-07-24 header-nav bug;
   automated tools couldn't verify the mobile layout this session.
2. **Click through `/pm-terms` and `/terminology` interactively** — browse, search, and flashcards
   for the PM domain have never been exercised in a browser, only build-verified.
3. **Add real URLs** to the "Read More" links in `/resources/page.tsx` — 8 modules × 10 sources = 80 links
4. **Update resource card counts** in `src/components/site/Resources.tsx` to match actual ref counts
5. **Fix LinkedIn URL** in `src/app/about/page.tsx`
6. **Decide on the Subscribe button** — removed from the header 2026-07-24 "for now"; revisit whether
   it comes back (and where) or stays gone.
7. ~~Deploy~~ — **DONE 2026-07-10**, live at https://pm-rearchitected.vercel.app.
8. ~~Mobile nav~~ — **DONE 2026-07-24**, hamburger menu added to `Header.tsx`.
9. ~~PM Terms domain~~ — **DONE 2026-08-21** (built 2026-08-09, committed/shipped 2026-08-21).
10. ~~Digital Twin chat~~ — **DONE 2026-08-21**, live at `/digital-twin`.

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page |
| `src/app/about/page.tsx` | Standalone About page |
| `src/app/resources/page.tsx` | Resources page with all 8 modules |
| `src/components/site/Header.tsx` | Nav — client component, uses `usePathname`; mobile hamburger dropdown added 2026-07-24, no Subscribe button in header as of same date |
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
| `scripts/seed-glossary.ts` | AI Terms + PM Terms seed script (`npm run seed:glossary`) — kept its original name, now domain-aware |
| `db/glossary/*.csv` | AI Terms + PM Terms source content (categories/terms/aliases/related_terms/sources) — folder kept its original name |
| `src/app/terminology/page.tsx` | Combined PM+AI terms hub page |
| `src/app/pm-terms/page.tsx` | PM Terms top-terms page |
| `src/app/pm-terms/browse/page.tsx` | PM Terms browse-by-category page |
| `src/app/pm-terms/search/page.tsx` | PM Terms search page |
| `src/app/pm-terms/flashcards/page.tsx` | PM Terms study page |
| `src/app/pm-terms/[slug]/page.tsx` | PM Terms detail page |
| `content/digital-twin/*.md` | Digital Twin corpus (bio, career-timeline, achievements, philosophy, faq) — edit directly to update the chat's knowledge, no code changes needed |
| `src/lib/digital-twin.ts` | Digital Twin system prompt assembly (reads corpus, applies hard behavioral rules) |
| `src/lib/rate-limit.ts` | In-memory per-IP sliding-window rate limiter used by the Digital Twin chat endpoint |
| `src/app/api/digital-twin/chat/route.ts` | Digital Twin streaming chat API route |
| `src/app/digital-twin/page.tsx` | Digital Twin chat page |
| `src/components/digital-twin/ChatPanel.tsx` | Digital Twin chat UI (streaming, disclaimer, suggested prompts) |
| `.env.local` | `RAINDROP_TOKEN`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ANTHROPIC_API_KEY` |
