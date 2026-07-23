@AGENTS.md

# PM Rearchitected — Project Status

## What This Is
A personal brand website for Rick Allen, a SaaS Product Owner focused on AI-driven product management. Built with Next.js App Router + Tailwind CSS v4. Dev server runs on **port 3001** (`npm run dev -- --port 3001`).

Brand name: **"Product Management, Re-Architected"**  
Substack: https://fromoutofthenoise.substack.com/  
Raindrop collection: 70283481

**GitHub repo:** `git@github.com:rallen7425/pm-rearchitected.git` (fixed 2026-07-10 — the repo used to be rooted one level up at `PMRearchitected/`, predating a file reorg into this folder, so it never reflected the real app; reinitialized here matching every other app's convention of repo root = app root).

**Live URL:** https://pm-rearchitected.vercel.app (first deployed 2026-07-10, `rick-allen-s-projects/pm-rearchitected`). `RAINDROP_TOKEN` is set as a production env var. Verified working: Home (live Substack RSS feed), About, and Resources pages all render correctly with real content, zero errors.

**Data layer:** Supabase — the shared "Rocky Coast Labs" project (ref `kywdezqgrtpzuecxxvfc`), schema `pm_rearchitected`. Added 2026-07-23 for the AI Glossary feature; this app had no database before that. Migrations/RLS/grants live in the separate `rocky-coast-labs` repo (`~/Documents/Claude/Projects/rocky-coast-labs`), not here — see its `ARCHITECTURE.md` for the platform-wide convention (one Supabase project, one schema per app). This app only ever queries its own `pm_rearchitected` schema via `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` (server-only, never shipped to the browser).

---

## Current State (as of 2026-07-23)

### Pages built
- `/` — Home page (Hero, Recent Posts, Reading This Week, Resource Library, About section)
- `/about` — Full standalone About page with bio content
- `/resources` — Full Resources page with 8 modules, two-column bullet format
- `/glossary` — AI Glossary top terms (priority 1–2, static)
- `/glossary/browse` — AI Glossary browsed by category (all 176 terms)
- `/glossary/search` — AI Glossary live full-text search (incl. aliases/abbreviations)
- `/glossary/flashcards` — AI Glossary flashcards + multiple-choice + open-ended quiz
- `/glossary/[slug]` — AI Glossary term detail page (176 statically generated)

### Data sources
- **Recent Posts**: Substack RSS (`fromoutofthenoise.substack.com/feed`), shows 5 posts with thumbnails
- **Reading This Week**: Raindrop.io API, collection 70283481, last 7 days. Token in `.env.local` (`RAINDROP_TOKEN`)
- **AI Glossary**: Supabase (`pm_rearchitected` schema), 176 terms / 5 categories / 85 aliases / 314 related-term pairs / 72 sources, seeded from `db/glossary/*.csv` via `npm run seed:glossary`. Full-text search via a ranked Postgres function (`search_terms`), exposed at `GET /api/glossary/search?q=...&category=...&maxPriority=...`.
- ISR revalidation every 3600s (`export const revalidate = 3600` in `page.tsx`)

### Navigation
- **Home** → `/`
- **Blog** → `https://fromoutofthenoise.substack.com/` (external, new tab)
- **Resources** → `/resources`
- **Glossary** → `/glossary`
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

## AI Glossary (added 2026-07-23)

Content (176 terms, editorially researched/deduped/written elsewhere) came in as 5 CSVs, originally
staged at the outer, stale `PMRearchitected/ai-glossary-db/` location — copied into this repo at
`db/glossary/*.csv` since that outer folder isn't tracked by this app's actual git repo.

- **Schema**: `pm_rearchitected` in the shared Rocky Coast Labs Supabase project (see "Data layer"
  above). Tables: `categories`, `terms` (slug primary key, not UUID — keeps route params 1:1 with
  the DB key), `aliases`, `related_terms` (each CSV pair seeded in both directions), `sources`.
  Public read-only RLS (`anon` gets `SELECT` only) — this app has no auth/login concept, so writes
  only ever happen via the service-role seed script.
- **Search**: ranked via Postgres `ts_rank` in a DB function (`pm_rearchitected.search_terms`,
  optional `category`/`priority` filters) rather than an unranked PostgREST filter — keeps
  relevance ordering in one place. Aliases (LLM, RAG, GAN, ...) are folded into the search vector
  via a `terms.alias_text_concat` column the seed script backfills, so abbreviation search works
  without a second query path.
- **Re-seeding**: `npm run seed:glossary` (`scripts/seed-glossary.ts`) clears and reloads all 5
  tables from the CSVs — safe to re-run after editing content. Maps `terms.csv`'s `category` column
  (a display name, e.g. "AI 101") to `categories.id_slug` — the CSV doesn't store the slug directly.
- **Node version gotcha**: this machine runs Node 20, but `@supabase/supabase-js` now expects
  Node 22+ and its Realtime client throws (`native WebSocket not found`) without one — even though
  this app never uses Realtime. `src/lib/supabase.ts` passes the `ws` package as the transport to
  work around it; drop that once this machine's on Node 22+.
- **Flashcards/quiz** defaults to priority 1–2 per Rick's direction (don't assume every surface
  should show all 176 terms) — user-adjustable via the category/priority filters on that page.
- **Not yet done**: manual click-through testing of the interactive surfaces (search-as-you-type,
  flashcard flip, multiple-choice selection) — built and automated-checked (type-check, lint, curl
  smoke tests across every route) but no browser-automation tool was available to verify the actual
  interactions. Rick is doing this pass himself.

---

## What's Broken / Known Issues

- **Preview tool** (`mcp__Claude_Preview__preview_*`) cannot start the server — port 3000 is occupied by an unrelated `node` process (PID 4913) that the tool checks first. Workaround: run the dev server manually (`npm run dev -- --port 3001`) and verify via curl or browser. The `.claude/launch.json` is configured for port 3001 but the tool keeps tripping on port 3000.
- **LinkedIn URL** on the About page (`/about`) uses a placeholder: `https://linkedin.com/in/rickallen`. Needs Rick's actual LinkedIn URL.
- **"Read More" links** in all Resources page bullets point to `href="#"`. Real URLs need to be added for each source.
- **Resource card ref counts** (e.g. "12 refs", "9 refs") are hardcoded placeholders. Update when real content is finalized.

---

## Next Session Should Pick Up

1. **Manual test the AI Glossary** — Rick is walking through all 4 surfaces by hand (search typing,
   flashcard flip, multiple-choice answering, category/priority filters); fold in whatever comes
   out of that pass.
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
| `src/app/globals.css` | Tailwind v4 design tokens (`@theme`) |
| `src/app/glossary/page.tsx` | Glossary top-terms page |
| `src/app/glossary/browse/page.tsx` | Glossary browse-by-category page |
| `src/app/glossary/search/page.tsx` | Glossary search page (renders `SearchBox`) |
| `src/app/glossary/flashcards/page.tsx` | Glossary flashcards/quiz page (renders `FlashcardStudio`) |
| `src/app/glossary/[slug]/page.tsx` | Glossary term detail page |
| `src/app/api/glossary/search/route.ts` | Glossary search API route |
| `src/lib/glossary.ts` | Glossary data-access functions (search, list, detail) |
| `src/lib/supabase.ts` | Supabase client, scoped to the `pm_rearchitected` schema |
| `src/components/glossary/` | `TermList`, `SearchBox`, `FlashcardStudio` |
| `scripts/seed-glossary.ts` | Glossary seed script (`npm run seed:glossary`) |
| `db/glossary/*.csv` | Glossary source content (categories/terms/aliases/related_terms/sources) |
| `.env.local` | `RAINDROP_TOKEN`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` |
