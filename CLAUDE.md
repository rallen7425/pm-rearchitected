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

## Current State (as of 2026-09-23)

### Pages built
- `/` — Home page (Hero, Recent Posts, Reading This Week, Resource Library, About section)
- `/about` — Full standalone About page with bio content, plus a Digital Twin callout card (added 2026-08-21)
- `/resources` — Resource Library page: two-section tile grid (7 "Product Management" cards + 4 "AI for PMs" cards) + Terminology teaser + Top Voices + Templates + Books (redesigned 2026-09-09, tiles renamed/reordered 2026-09-13, sub-topics rebuilt as resource cards and fully re-architected into 11 topics 2026-09-19 through 2026-09-23, see "Resources" section below)
- `/resources/[topic]` — Per-topic pages, 11 statically generated (`pm-foundations` "PM 101", `understanding-ai`, `ai-product-building-blocks`, `vibe-coding-agentic-development`, `ai-empowered-pm`, `product-vision-strategy`, `discovery-research`, `design-for-pms`, `agile-development-deployment`, `go-to-market-growth`, `technology-for-pms`). All 11 are fully written as resource-card lists — the old `strategy-discovery`/`roadmapping-execution`/`ux-design` placeholder topics (added 2026-09-09) and the single `ai-agentic-practice` topic (retired 2026-09-23) no longer exist; they were replaced, not filled in, and their old URLs 301-redirect via `next.config.ts` (see "Resources" section below)
- `/terminology` — Combined hub showing top PM terms and top AI terms side by side (added 2026-08-21)
- `/terms` — AI Terms top terms (priority 1–2, static) — renamed from `/glossary` 2026-07-23. "Browse by Category" is an inline accordion here now (2026-09-23), not a separate page — see "AI Terms" section below.
- `/terms/search` — AI Terms live full-text search (incl. aliases/abbreviations)
- `/terms/flashcards` — AI Terms study page: Flash Card / Multiple Choice / Open-Ended
- `/terms/[slug]` — AI Terms detail page (177 statically generated)
- `/pm-terms`, `/pm-terms/search`, `/pm-terms/flashcards`, `/pm-terms/[slug]` — PM Terms domain, mirrors the `/terms` route tree exactly (added 2026-08-21, see "PM Terms" section below). ~~`/pm-terms/browse`~~ retired 2026-09-23, same as `/terms/browse`.
- `/digital-twin` — AI chat answering visitor questions about Rick in his own voice (added 2026-08-21, see "Digital Twin" section below)

### Data sources
- **Recent Posts**: Substack RSS (`fromoutofthenoise.substack.com/feed`), shows 5 posts with thumbnails
- **Reading This Week**: Raindrop.io API, collection 70283481, last 7 days, capped at 10 items (`fetchReadingList(days, limit)` in `src/lib/raindrop-feed.ts`, 2026-09-10). Token in `.env.local` (`RAINDROP_TOKEN`)
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

## Completed earlier (July 2026 — initial site build)

- Rebuilt nav from scroll-based section links to proper page navigation
- Created standalone `/about` page with full bio, mission, perspective sections
- Built the first `/resources` page (8 topic modules, two-column bullet lists) — **superseded by the
  2026-09-09 Resources redesign; see that section below**
- Home page About section: full container width, updated link text to "Read More About Product Management, Re-Architected"
- About page body text: full container width (no max-w-3xl constraint)
- "From Out of the Noise" on About page is a clickable link to Substack
- Recent Posts increased from 3 to 5

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

## Completed 2026-09-09

- **Digital Twin corpus refresh** from new job-search material (updated LinkedIn "About",
  3 tailored resumes, 3 cover letters).
  - Added `content/digital-twin/_sources/` — raw source docs, verbatim, archive only. The chat
    loader (`src/lib/digital-twin.ts`) reads only the 5 named files, so nothing in `_sources/`
    enters the system prompt. See `_sources/README.md`.
  - Merged the genuinely new, non-sensitive facts into `bio.md`, `career-timeline.md`,
    `achievements.md`, `faq.md` (new "Areas of expertise" block; solopreneur / Rocky Coast Labs
    mobile-app building; UKG Labs lead-stakeholder role; accesso 4-person team + Cedar Fair /
    Alterra; P97 team of 8 + franchised-operator model; developer-API/SDK + partner-integration
    throughline; 20+ yrs PM / 10+ yrs people leadership). Corpus-Ready masters re-synced identical.
  - Deliberately kept **out** of the public corpus: exact UKG revenue figures ($30M portfolio,
    $2M→$17M Wallet — corpus keeps generalizing these); a referring contact's name in the Planet
    Fitness cover letter (redacted in `_sources/` too); company-specific framing for live hiring
    conversations (removed the named target companies from bio.md "Current status", per Hard Rule 4).

---

## Completed 2026-09-09 / 09-10 (one working session, continued)

- **Resources redesign** shipped (`2f985c1`) — work that had sat uncommitted in the tree since
  2026-09-02/03, transcribed from `handoff-for-claude-code/*.json`. Replaced the old 8-module
  bullet lists (placeholder "Item 1/2/3", `href="#"`) with: a 6-topic tile grid, statically
  generated `/resources/[topic]` pages, a live Terminology teaser (pulls AI+PM terms from Supabase
  at ISR time), Top Voices, Templates, and Books. See "Resources" section below.
- **"Reading this week" newsfeed capped at 10** (`50d5c16`) — `fetchReadingList` gained a `limit`
  param (default 10), sliced after the 7-day filter; `Newsfeed.tsx` passes `(7, 10)`.
- **Digital Twin page reformatted** around a centered interaction box (`2498ecd`) — followed
  Rick's `stitch_webpage_template_clone`. Header/nav/footer unchanged. See "Digital Twin" section.
- **Stale outer git repo disabled** — `PMRearchitected/.git` (one boilerplate "Create Next App"
  commit, no remote, phantom tracked scaffold) renamed to `.git.disabled`. The real repo is this
  one (`pm-rearchitected/`), unaffected. Delete `.git.disabled` or rename it back if ever needed.
- **`CLAUDE.md` brought current** (`528057a` + follow-up) — Current State, this section, Known
  Issues, Next Session, and Key Files all refreshed for the above.
- All work committed and pushed to `main`; each change auto-deployed to production and was
  smoke-checked live. Working tree clean at session end.

---

## Completed 2026-09-13

- **Resource tile swap**: on both the home page and `/resources`, swapped Strategy & Discovery and
  PM Foundations — PM Foundations is now the top-right wide tile, renamed **"PM 101"**; Strategy &
  Discovery dropped to the standard-size row. AI & Agentic Practice renamed **"AI for PMs"** (stayed
  top-left, wide, unmoved). Row 1 is now AI for PMs / PM 101 (both wide); row 2 is Strategy &
  Discovery, Roadmapping & Execution, UX Design, Technology (all standard). Only `label`/`width`
  changed in `RESOURCE_TOPICS` — `id`s (`ai-agentic-practice`, `pm-foundations`, `strategy-discovery`)
  were left alone, so routes/URLs didn't change.
- **First PM 101 sub-topic written**: "What is Product Management?" (Rick's copy, five sources —
  Shreyas Doshi, Mind the Product/Eriksson, SVPG/Cagan, Product Board, Atlassian — each a body
  paragraph + link pills built from his "Source:"/"Read More:" lines). Real URLs, no longer
  placeholders. The other 4 PM 101 sub-topics (Roles & Responsibilities, Core Frameworks, Product
  Sense, Stakeholder Communication) are still `body: null`.
- **Process note**: first pass at this sub-topic paraphrased Rick's supplied copy into the site's
  existing prose voice instead of using it verbatim — he'd already written finished copy, not notes
  to adapt. Corrected to his exact wording (including two likely typos left as-is per his copy:
  "makes then a bit more actionable" and "the PM's activities around Understanding what user need" —
  flagged to him, not silently fixed). **Going forward: when Rick pastes copy that reads as finished
  text, use it verbatim — only restructure into the page's data shape, never rewrite the sentences,
  unless he explicitly asks for a rewrite.**

---

## Completed 2026-09-19

- **Resources sub-topics redesigned as resource cards**, shipped (`996450d`), pushed, and deployed to
  production — verified live via curl on `/resources`, `/resources/pm-foundations`, and
  `/resources/ai-agentic-practice`. Replaces the old prose-paragraphs + link-pill-row sub-topic
  format with a discrete card list (bold title, 1–2 sentence summary, one link per card), matching
  `SubstackLatest.tsx`'s "Recent posts" visual language. Built from
  `handoff-for-claude-code/claude-code-prompt-pm101-resource-cards.md` and
  `claude-code-prompt-ai-for-pms-resource-cards.md` (kept untracked in this repo, same convention as
  other handoff scratch material).
  - New `Resource` type in `src/lib/resources.ts`: `"article" | "video" | "tool"`, with
    `title`/`summary`/`url` or a multi-link `links[]` (mutually exclusive), plus an optional
    `runtime` (video-grid only). `SubTopic.body`/`links` are now optional (legacy shape) and coexist
    with a new optional `resources` field — both shapes render correctly depending on which a given
    sub-topic sets.
  - Added an optional `SubTopic.note` field (not specified in either handoff) to carry per-subtopic
    scope/sequencing captions from the source JSON (e.g. PM 101's "surface-level, not a deep AI
    dive" note) rather than silently drop them.
  - **`pm-foundations`**: 5 placeholder sub-topics → 3 populated ones (What is Product Management?,
    Dive Deeper, Product Management in 2026), superseding the 2026-09-13 verbatim-prose draft of
    "What is Product Management?" (which never shipped) with the new card format.
  - **`ai-agentic-practice`**: 8 empty scaffolded sub-topics → 4 populated ones (AI Fundamentals,
    Agents/RAG & Evals, Vibe Coding & Agentic Development, Product Management for AI-Empowered PMs
    & AI PMs).
  - Also landed the never-committed 2026-09-13 tile reorder in the same commit (AI for PMs / PM 101
    promoted to row 1 as the two wide tiles; Strategy & Discovery demoted to standard) since it
    shared the same file and nothing superseded it in the interim.
  - New render components in `src/app/resources/[topic]/page.tsx`: `ResourceCard` (the card-list
    template), `VideoGrid` (4-across desktop / 2-across mobile square grid, partitions out
    `type: "video"` resources from the card list), `ResourceSection` (picks the new vs. legacy
    render path per sub-topic). `type: "tool"` gets a small "Tool" tag + "Visit site" instead of the
    video icon + "Read the source".
  - Two content calls made with Rick during this pass: swapped the paywalled HBR "Jobs to Be Done"
    citation for the free Christensen Institute explainer (`christenseninstitute.org`, confirmed it
    covers the same milkshake example); genericized the "Agents, RAG & Evals" RAG card so it no
    longer names the UKG Financial Health Coach project.
  - Video-grid placement is applied as one shared behavior across both migrated topics, including PM
    101's single video (Lenny's Podcast) — a deliberate consistency call, confirmed with Rick, rather
    than special-casing PM 101 to render its one video inline in the card list as that handoff's own
    template literally showed.
  - Verified: `tsc --noEmit` clean, `next build` prerenders all 6 topic pages, `eslint` shows no new
    errors. Spot-checked both pages in-browser at desktop width. **Mobile width not verified** — see
    "What's Broken / Known Issues."
  - Deferred (per both handoffs' "Explicitly deferred" sections, not dropped): migrating the
    remaining four topics to the `resources` shape; the four unwritten AI for PMs sub-topics
    (Multimodal AI, Responsible AI & Governance, AI-Native Operating Models, Portfolio AI Strategy);
    pulling a flagged Launchnotes "40 PM Books" list into the standalone `/resources` Books section.
- **Digital Twin corpus refresh drafted** — a "September 2026 career refresh" reconciling
  professional identity, UKG reporting scope, Nuance dates, commercial/P&L boundaries, acquisition
  experience, launch-status distinctions, and response style, sourced from two new `_sources/` files
  (`rick-allen-career-canonical-context.md`, `rick-allen-career-positioning-and-perspective.md`).
  Touches all 5 corpus files, `Corpus-Ready/` masters (kept byte-identical), and
  `src/lib/digital-twin.ts` (two new hard rules, a new VOICE paragraph). Sat reviewed-but-uncommitted
  for several sessions while Resources work took priority — **landed 2026-09-23, see "Completed
  2026-09-23" below.**

---

## Completed 2026-09-20

- **PM 101 expanded**: added a "Frameworks" sub-topic to `pm-foundations` and expanded its existing
  readings (`d53f306`).
- **Intro copy updated** under the page header on both `pm-foundations` and `ai-agentic-practice`
  (`836036a`, `8f3f18c`).
- **Sub-topic pages decluttered**: dropped the "Sub-topics" h2 label and the per-item 01/04 counter
  (no counterpart in Rick's Cowork mockups), promoted each sub-topic's own heading up a level to
  match "From the Blog" and the mockups (`537d817`).
- **Tile order flipped**: PM 101 now renders before AI for PMs on both the home page and `/resources`
  (`09da894`) — supersedes the 2026-09-13 order.
- **Product Vision & Strategy page added** (`ec590e5`) — first of four new topics built this week,
  and the trigger for a larger architecture change: each new topic now gets its own
  `src/lib/<topic-id>.ts` file (a single `export const TOPIC_NAME: ResourceTopic = {...}`) instead of
  living inline in `RESOURCE_TOPICS` in `resources.ts`. Also reorganized `ResourceTiles.tsx` into two
  hardcoded card lists (`PM_CARDS`, `AI_CARDS`) rather than mapping `RESOURCE_TOPICS` directly — see
  "Resources" section below for what that means for the tile grid.

---

## Completed 2026-09-22

- **Discovery & Research page added** (`a7986a3`, own file `src/lib/discovery-research.ts`).
- **Design for PMs, Agile/Development/Deployment, Go-to-Market & Growth, and Technology for PMs
  pages added** (`9dfdfcf`, one commit, four new files: `design-for-pms.ts`,
  `agile-development-deployment.ts`, `go-to-market-growth.ts`, `technology-for-pms.ts`). This retires
  the original `strategy-discovery`/`roadmapping-execution`/`ux-design` placeholder topics entirely —
  they're removed from `RESOURCE_TOPICS`, not filled in, so their old URLs now 404 (`dynamicParams =
  false`, unknown slug → not found).
- **Net effect**: `/resources/[topic]` now statically generates 8 pages (up from 6), all fully
  written as resource-card lists — every sub-topic across all 8 topics has populated `resources[]`,
  no `body`/`links` legacy shape or placeholder sub-topics remain anywhere on the site. See
  "Resources" section below for the full topic/file map.
- **Not yet caught up in this doc when this work landed** — `CLAUDE.md` wasn't updated alongside
  these commits; this pass (2026-09-23) is the catch-up.

---

## Completed 2026-09-23

- **Landed the September 2026 Digital Twin career refresh** (`1c03e23`) that had been sitting
  reviewed-but-uncommitted since before 2026-09-19 (see "Completed 2026-09-19" above). Reviewed the
  full diff against all 5 corpus files and `src/lib/digital-twin.ts` for accuracy/tone before
  committing — no changes needed, content was already careful about hedging claims (no formal P&L
  ownership, direct-report vs. matrixed scope, acquisition integration vs. corporate-development
  work, unconfirmed app-launch status). Pushed to `main`, auto-deployed to production, and verified
  live: a streaming probe against `/api/digital-twin/chat` asking about team size and P&L ownership
  returned the new reconciled framing correctly (direct reports at P97/UKG kept distinct from
  matrixed/organizational scope at Nokia/UKG; explicit "no formal P&L ownership" with the commercial-
  responsibility nuance), with zero em dashes as required.
- Left `CLAUDE.md`'s own uncommitted doc updates and `handoff-for-claude-code/` out of that commit —
  this session's CLAUDE.md pass (see 2026-09-20/09-22 sections above and "Resources" section
  rewritten below) is a separate, subsequent commit.
- **Desktop visual pass on the 6 new Resources topics + tile grid** — see "Resources" section above.
- **Found a working mobile-viewport verification method and used it on `/digital-twin` and
  `/resources`** — after confirming `resize_window` is genuinely broken in this environment (not
  just flaky; see "What's Broken"), built a same-origin-iframe harness instead: navigate a tab to
  the site, then via `javascript_tool` replace the page with a blank document and inject an
  `<iframe>` sized to a real phone viewport (390×844) with `src` pointing at the target page. Because
  the harness page and the iframe's target are both `pm-rearchitected.vercel.app`, the iframe is
  same-origin, so its `contentWindow` is fully scriptable — confirmed `contentWindow.innerWidth ===
  390` (a real breakpoint-triggering viewport, unlike `resize_window`) and drove scrolling via
  `contentWindow.scrollTo(0, y)` rather than synthetic wheel events (which didn't reliably reach the
  iframe). One gotcha: scrolling the *outer* harness page (e.g. from a stray click) shifts the
  absolutely-positioned iframe's on-screen position without changing its own internal scroll —
  always `window.scrollTo(0,0)` on the outer page too before each screenshot. Reusable technique for
  any future mobile-viewport check on this site.
  - **`/digital-twin` at 390px: clean, no bugs.** Header collapses to the hamburger correctly;
    clicking it opens the mobile dropdown (Home/Blog/Resources/Terminology/Digital Twin highlighted
    as active/About) and toggles to an X. Hero, the "What would you like to know?" ask box, and
    `CaseStudiesAside` all stack to a single column below `lg` as designed. Footer stacks/centers.
  - **`/resources` hub at 390px: clean, no bugs.** The `PM_CARDS`/`AI_CARDS` tile grid, the
    Terminology teaser (live Supabase term + the 4 link cards), Top Voices, Templates, and Books all
    collapse to a single column and read correctly — including the Books section's colored
    cover-block cards.
  - **All 8 individual `/resources/[topic]` pages at 390px: clean, no bugs**
    (`pm-foundations`, `ai-agentic-practice`, `product-vision-strategy`, `discovery-research`,
    `design-for-pms`, `agile-development-deployment`, `go-to-market-growth`,
    `technology-for-pms`) — swept each one top-to-bottom by reassigning the harness iframe's `src`.
    Resource cards, "Also from X:" bulleted link lists, tool badges, and the "From the Blog" Reframed
    rail all render correctly at mobile width. Specifically confirmed the video grid's
    `grid-cols-2 sm:grid-cols-4` breakpoint actually renders 2-across on `pm-foundations` (Lenny's
    Podcast / Christian Idiodi cards) — this had been an open question since 2026-09-19 since nobody
    could previously get a real narrow viewport to check it against.
  - Closes out every mobile-verification item that had been open on this project since July.
- **Backfilled `RESOURCES_BLOG_MAP` and `ResourceTiles.tsx`'s `AI_CARDS`** (`b8f4d6e`) — removed the
  orphaned `roadmapping-execution`/`ux-design`/`technology` blog-map keys left over from the
  2026-09-22 topic retirement, added the one genuinely missing key among topics that actually read
  the map (`product-vision-strategy`), and pointed each of the 4 AI for PMs tiles at its own
  sub-topic anchor on the (then-single) `ai-agentic-practice` page instead of all four landing on
  the bare page URL. Deliberately did **not** rewrite any of the tile grid's existing description
  copy, even where it had drifted from each topic's own `tileDescription` — that's visible marketing
  copy, not structural data, and shouldn't be silently overwritten without asking Rick first.
- **Split AI for PMs into 4 separate resource pages** (`96b34a4`) — while verifying the backfill's
  build, discovered brand-new files in `handoff-for-claude-code/ai-for-pms/` (four `ResourceTopic`
  files plus a content JSON, timestamped the same minute this session started, comment reading
  "Content finalized in Cowork 2026-09-23") — Rick's own concurrent work-in-progress in another
  session, confirmed with him rather than assumed. Once confirmed, copied the four files into
  `src/lib/` as-is (`understanding-ai.ts`, `ai-product-building-blocks.ts`,
  `vibe-coding-agentic-development.ts`, `ai-empowered-pm.ts`), retired the single
  `ai-agentic-practice` topic in favor of them (see "Resources" section above for the full
  architecture), updated the `AI_CARDS` hrefs from the interim anchor-fragments to real page URLs,
  added the `/resources/ai-agentic-practice` → `/resources/understanding-ai` redirect, and backfilled
  the 4 new topics into `RESOURCES_BLOG_MAP`. Verified via `npm run build` (11 topic pages prerender
  clean) and a live visual pass on all 4 new pages, the `/resources` hub, and the old-URL redirect.
  Pushed, deployed, and confirmed live (`curl` 200s on all 4 new routes, 308 on the old one).
- **AI Terms hub renamed "AI Terminology"** (`d9d8d45`) — changed `GlossaryHeader`'s default `title`
  prop, which all 4 `/terms` pages rely on (PM Terms pages pass their own explicit title, unaffected).
- **Cross-linked the AI Terms and PM Terms hub pages** (`a713c98`, then relabeled `793df1b`) — `/terms`
  now links to `/pm-terms` as "PM Terms" (placed left of "Test Yourself" in the header nav), and
  `/pm-terms` links back as "AI Terms" in the same position. `/pm-terms`'s own header was also renamed
  from generic "Terminology" to "Product Management Terminology" in the same pass.
- **Replaced "Browse by Category" as a page link with an inline accordion** (`3a9ae26`, repositioned
  `587b3b7`, fully completed `036511e`) — clicking "Browse by Category" used to navigate to
  `/terms/browse` or `/pm-terms/browse`, a near-duplicate of the hub page (same Header/Hero, same nav)
  with the category list added at the bottom. Rick flagged this twice: once for the general complaint,
  once after the first fix accidentally made the toggle undiscoverable by placing it *after* a
  50-100+ term "Top Terms" list, requiring a full scroll to find it (see "What happened" note below).
  Final shape: a new `CategoryBrowse` client component (`src/components/glossary/CategoryBrowse.tsx`),
  collapsed by default, sitting directly below `GlossaryHeader` — before "Top Terms," not after —
  behind a bold "Browse by Category" line with a chevron that flips on click. Expanding shows the same
  quick-jump nav and per-category term sections the standalone pages had.
  - **The standalone `/terms/browse` and `/pm-terms/browse` pages are gone**, not just unlinked —
    deleted outright, with `next.config.ts` 301-redirects to `/terms` and `/pm-terms` (matching the
    existing pattern for retired Resources topics). Every remaining internal link that pointed at them
    (`/terms/flashcards`, `/terms/search`, `/pm-terms/flashcards`, `/pm-terms/search`, and the term
    detail pages' category badges) was updated to point at the hub page instead — `#category-list` for
    the generic "browse" links, or a specific `#<category-id>` (e.g. `#ai-101`) for the detail pages'
    category badges, which link straight at one category's section.
  - **A genuine hydration-mismatch bug, not just a lint nitpick**: category-anchor deep links (e.g.
    `/terms#ai-101` from a term detail page's badge) need the accordion open on load so there's
    something to scroll to. First attempt used a `useState(() => window.location.hash ...)` lazy
    initializer — simple, but it computes a different `open` value on the server (always `false`,
    no `window`) than on the client (`true`, hash present), which is exactly the server/client branch
    React's hydration-mismatch warning calls out by name. Confirmed via live testing (not just reading
    the warning) that recovery left the DOM in a genuinely broken partial state: the category content
    rendered expanded, but the toggle button's `aria-expanded` attribute stayed stuck on `"false"` —
    not just a cosmetic mismatch, an actually inconsistent UI. Fixed with `useSyncExternalStore`
    (`subscribeToHash`/`getHashSnapshot`/`getHashServerSnapshot` in `CategoryBrowse.tsx`) — React's
    documented mechanism for reading browser-only state without a mismatch: renders the server
    snapshot (`""`) during hydration, then syncs to the real hash immediately after, with no manual
    `setState` inside a `useEffect` either (which the project's React Compiler-aware lint rule,
    `react-hooks/set-state-in-effect`, flags as an error — see the Digital Twin section's "React
    Compiler gotcha" for the same class of issue elsewhere in this codebase). Once the user manually
    toggles the accordion, a separate `userOverride` state takes precedence over the hash so it can
    still be collapsed/expanded normally afterward.
  - Verified via `npm run build`, `eslint` clean, and a full round-trip live check: local dev *and*
    production — cold navigation to `/terms#ai-101`, click-to-toggle both directions, the
    `/terms/browse` → `/terms` redirect, and a term detail page's category badge — all confirmed
    working with no console errors on the final version.
- **Fixed the LinkedIn URL on `/about`** (`321fb45`) — was `linkedin.com/in/rickallen` (wrong handle,
  missing `www`), live and wrong since the page was built. Now `linkedin.com/in/ricklallen`, per the
  `_sources/` resumes/covers. This had been flagged in "What's Broken" since at least August.
- **Excluded `handoff-for-claude-code/` from `tsconfig.json`** (`89646c1`) — stray `.ts` files dropped
  there (raw Cowork handoff content, never meant to be compiled) broke local `npm run build`/`tsc
  --noEmit` twice in this session alone, since nothing excluded the folder and their relative imports
  don't resolve from that location. Verified both commands now succeed with the folder left in place —
  no more need to move it aside first before a local build.

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
  can show its own left-to-right set of links next to the search icon. As of 2026-09-23 (see
  "Completed 2026-09-23"'s `CategoryBrowse` entry): `/terms` shows PM Terms → Test Yourself;
  `/terms/flashcards` shows Top Terms → Browse by Category, where "Browse by Category" is now an
  anchor link (`/terms#category-list`) into the inline accordion on the hub page, not a separate
  page — the old standalone `/terms/browse` page is retired and 301-redirects to `/terms`. Exact
  order came from specific per-page instructions, not a single global rule — check
  `GlossaryHeader.tsx` call sites before assuming a pattern.
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
- **Routes**: `/pm-terms`, `/pm-terms/search`, `/pm-terms/flashcards`, `/pm-terms/[slug]` mirror the
  `/terms` tree exactly, sharing the same components (`GlossaryHeader`, `SearchBox`, `TermList`,
  `FlashcardStudio`, and as of 2026-09-23 `CategoryBrowse`) via a `domain` prop rather than forking
  them. `/pm-terms/browse` retired 2026-09-23, same as `/terms/browse` — see "AI Terms" section.
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

## Resources (redesigned 2026-09-09; tiles renamed/reordered 2026-09-13; sub-topics redesigned as resource cards 2026-09-19; re-architected into 8 topics across per-topic files 2026-09-20 through 09-22; AI for PMs split into 4 topics 2026-09-23)

Replaced the original `/resources` (8 topic modules, two-column bullet lists with `href="#"` and
literal "Item 1/2/3" placeholders) with a structured Resource Library, then rebuilt it twice more:
the 2026-09-19 move from prose+links to resource cards, and a 2026-09-20 through 09-23 architecture
change that retired the 3 weakest original topics plus the single `ai-agentic-practice` page in favor
of 10 newly-written topics (11 total) and split content out of the single `resources.ts` file.

- **Content + types**: `src/lib/resources.ts` still defines the shared types (`ResourceTopic`,
  `SubTopic`, `Resource`, `ResourceLink`) and `RESOURCE_TOPICS`, but each topic added or rebuilt
  since 2026-09-20 lives in its **own file**, imported into `RESOURCE_TOPICS`:
  `product-vision-strategy.ts`, `discovery-research.ts`, `design-for-pms.ts`,
  `agile-development-deployment.ts`, `go-to-market-growth.ts`, `technology-for-pms.ts`,
  `understanding-ai.ts`, `ai-product-building-blocks.ts`, `vibe-coding-agentic-development.ts`,
  `ai-empowered-pm.ts`. Only `pm-foundations` ("PM 101") is still defined inline in `resources.ts`.
  `RESOURCE_TOPICS` order: `PRODUCT_VISION_STRATEGY`, `pm-foundations` (inline), `UNDERSTANDING_AI`,
  `AI_PRODUCT_BUILDING_BLOCKS`, `VIBE_CODING_AGENTIC_DEVELOPMENT`, `AI_EMPOWERED_PM`,
  `DISCOVERY_RESEARCH`, `DESIGN_FOR_PMS`, `AGILE_DEVELOPMENT_DEPLOYMENT`, `GO_TO_MARKET_GROWTH`,
  `TECHNOLOGY_FOR_PMS` — 11 topics, each with 5–6 sub-topics, every sub-topic fully written with the
  `resources: Resource[]` card-list shape. The legacy `body`/`links` prose shape (still typed on
  `SubTopic` for backward compatibility) has **no remaining users**. The 4 AI for PMs topics'
  content was finalized in Cowork and handed off via `handoff-for-claude-code/ai-for-pms/` (kept
  untracked, same convention as other handoff scratch material) — copied in as-is, not rewritten.
- **`ai-agentic-practice` retired 2026-09-23**, same pattern as the 2026-09-22 topic retirements:
  its single page is replaced by four newly-written topics (`understanding-ai`,
  `ai-product-building-blocks`, `vibe-coding-agentic-development`, `ai-empowered-pm`), and
  `next.config.ts` 301-redirects the old `/resources/ai-agentic-practice` URL to
  `/resources/understanding-ai` (the new "start here" page per its own `pageIntro`) — same redirect
  pattern already used for `strategy-discovery`/`ux-design`/`roadmapping-execution`/`technology`.
- **Routes**: `/resources/[topic]/page.tsx` — `generateStaticParams` over `TOPIC_IDS` (now 11 ids),
  `dynamicParams = false` (unknown slug → 404). Breadcrumb, "From the Blog" (either
  `RESOURCES_BLOG_MAP[topic.id] ?? []` rendered as a vertical card list/dashed empty state, or —
  when a topic sets `reframedPostUrls`, or is hardcoded as `discovery-research` — a live
  `PMReframed` rail pulled from the Substack Reframed archive instead; see the exact branch logic
  in `[topic]/page.tsx`), then sub-topics via `ResourceSection`/`ResourceCard`/`VideoGrid`
  (card-list + video-grid + tool-badge rendering).
- **`RESOURCES_BLOG_MAP` backfilled 2026-09-23**: only topics *without* `reframedPostUrls` actually
  read this map (`pm-foundations`, `product-vision-strategy`, `discovery-research`, and the 4 new AI
  for PMs topics) — the other topics (`design-for-pms`, `agile-development-deployment`,
  `go-to-market-growth`, `technology-for-pms`) have `reframedPostUrls` set and never read it, so
  giving them a map entry would be dead data. The map's key set now exactly matches the topics that
  actually use it (with a comment explaining why), and the orphaned `roadmapping-execution`/
  `ux-design`/`technology`/`ai-agentic-practice` keys from retired topics are gone.
- **Tile grid remains hand-maintained, not topic-driven**: `src/components/site/ResourceTiles.tsx`
  is still two hardcoded arrays — `PM_CARDS` (7 tiles) and `AI_CARDS` (4 tiles, one per AI for PMs
  topic) — rather than a map over `RESOURCE_TOPICS`. As of 2026-09-23 all 4 `AI_CARDS` now link to
  their own real page (they briefly pointed at anchor-fragments on the old shared page as an interim
  fix, no longer needed). Adding a new topic still means updating `PM_CARDS`/`AI_CARDS` by hand in
  addition to `RESOURCE_TOPICS` — they're not guaranteed to stay in sync automatically.
- **Other components**: `TerminologyTeaser.tsx` — `"use client"` single-card glossary preview; the
  server builds a 40-term pool from `listStudyTerms`/`listCategories` (both domains) at ISR time and
  passes it down; shuffle re-picks in the click handler only, never during render.
  `ResourceCard`/`VideoGrid`/`ResourceSection` (in `[topic]/page.tsx` itself, not extracted to
  `components/`) render the card-list shape.
- **Known placeholder surface on production (by design)**: Top Voices have no `url`s yet, Templates
  all say "coming soon", "From the Blog" is empty everywhere except `discovery-research` (one post)
  and the 4 topics with `reframedPostUrls` (which pull live from Substack). Fill in by editing
  `src/lib/resources.ts`'s `RESOURCE_SECTIONS`/`RESOURCES_BLOG_MAP` (no code changes needed).
- **Verified**: `npm run build` (all 11 topic pages prerender) + `tsc --noEmit` + `eslint` clean
  (checked with `handoff-for-claude-code/` set aside, since its stray `.ts` files aren't meant to be
  part of the app build — see "What's Broken"). Desktop-width visual check done in-browser for all
  11 topic pages plus the `/resources` hub (2026-09-19 for `pm-foundations`; 2026-09-23 for the
  other 10) — cards, tool badges, video grid, the "From the Blog" Reframed rail, and the live
  Terminology teaser all render correctly, no visual bugs found. The old
  `/resources/ai-agentic-practice` → `/resources/understanding-ai` redirect confirmed live (308).
  **390px mobile width verified 2026-09-23 across the `/resources` hub and the 8 topics that existed
  at the time** (see "Completed 2026-09-23") via a same-origin-iframe workaround, after
  `resize_window` was confirmed broken in this environment — that pass covered the old, now-retired
  `ai-agentic-practice` page, not the 4 topics that replaced it, so those haven't had a mobile pass
  yet (see "Next Session Should Pick Up").

---

## Digital Twin (added 2026-08-21, page reformatted 2026-09-10)

A system-prompt-stuffed chat (explicitly **not** RAG — no vector store, no embeddings) that answers
visitor questions about Rick's background, career, and product philosophy in his own voice. First of
two planned AI features; a second, broader "Product Coach" tool is a separate future project, not
started.

- **Corpus**: 5 markdown files (`bio.md`, `career-timeline.md`, `achievements.md`, `philosophy.md`,
  `faq.md`) at `content/digital-twin/*.md`, copied from `PMRearchitected/Rick's Digital
  Twin/Corpus-Ready/` (the outer scratch folder, not tracked by this repo — Rick can edit the `.md`
  files directly to update the twin's knowledge, no code changes needed).
- **Source material**: `content/digital-twin/_sources/` holds the raw docs the corpus is distilled
  from (resumes, cover letters, LinkedIn "About"), verbatim. Archive/reference only — the loader
  reads only the 5 named files above, so `_sources/` never enters the system prompt. When adding
  new source material, drop it there and hand-merge the new, non-sensitive facts into the 5 corpus
  files (and the identical Corpus-Ready masters). See `_sources/README.md`.
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
  token-by-token via `ReadableStream` + `getReader()` on the client. Visible disclaimer always
  shown.
- **Page layout (reformatted 2026-09-10)**: `page.tsx` keeps the hero unchanged, then a `border-t`
  and a `lg:grid-cols-3` grid — interaction area 2/3 (right divider), `CaseStudiesAside` 1/3;
  single column below `lg`. Header/nav/footer were explicitly out of scope. `ChatPanel` has two
  states in the same spot: an **entry state** (centered "What would you like to know?" + a large
  rounded `textarea` card with a send-arrow button + suggested-prompt pills + disclaimer;
  Enter submits, Shift+Enter newline) and, once `messages.length > 0`, the **conversation state**
  (bordered card: disclaimer bar, bubbles, typing indicator, follow-up input) — it transitions in
  place, streaming logic untouched. Followed Rick's `PMRearchitected/Rick's Digital
  Twin/stitch_webpage_template_clone/`.
- **`CaseStudiesAside.tsx`**: right-sidebar, **placeholder content only** — an "Examples" badge,
  "full case studies coming soon", and 3 cards describing real work areas (Embedded Wallet/EWA,
  Agentic Discovery, White Label Wallet) with no fabricated figures and no links. Rick supplies
  real case studies later. The template's mic/voice button was dropped (no voice input to wire).
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
  full of them. Browser streaming and desktop layout were visually confirmed. **Mobile viewport
  verified 2026-09-23**, after `resize_window` was confirmed genuinely broken (not flaky — retested
  at 390×844 and 800×700 on a fresh tab, `window.innerWidth`/`innerHeight` never moved off the
  1440×728 default either time, ruling out a minimum-window-size floor). Worked around it with a
  same-origin-iframe harness instead (see "Completed 2026-09-23" for the technique) — confirmed a
  true 390px viewport, and the page renders clean: header collapses to the hamburger, the dropdown
  opens/closes and highlights the active page, hero/ask-box/`CaseStudiesAside` all stack to a single
  column, footer stacks. No mobile bugs found.

---

## What's Broken / Known Issues

- **Preview MCP tool** (`mcp__Claude_Preview__preview_*`) has been unreliable at starting the dev server (historically tripped on port 3000 being occupied). Workaround that works: run it manually, `npm run dev -- --port 3001`, and verify via curl or the browser tool. `.claude/launch.json` is set for port 3001.
- ~~LinkedIn URL on the About page uses a placeholder~~ — **fixed 2026-09-23**, now `https://www.linkedin.com/in/ricklallen`.
- **Resources: all 11 topics are now fully written** — no more placeholder sub-topic content anywhere on `/resources`. The 4 sub-topics that were long deferred on the old single `ai-agentic-practice` page (Multimodal AI, Responsible AI & Governance, AI-Native Operating Models, Portfolio AI Strategy) don't carry over verbatim into the 4 new AI for PMs topics — that area got a full 20-sub-topic redesign in Cowork rather than a simple fill-in, so whether that old substance made it in under different names hasn't been specifically checked. Remaining gaps are all outside sub-topic content: Top Voices have no `url`s (non-clickable), Templates all say "coming soon". All filled in by editing `src/lib/resources.ts`.
- ~~`ResourceTiles.tsx`'s `PM_CARDS`/`AI_CARDS` are hand-maintained, not derived from `RESOURCE_TOPICS`~~ — still true structurally (not auto-derived, still needs manual updates when topics change), but the concrete gaps this used to describe (`RESOURCES_BLOG_MAP` missing keys, `AI_CARDS` all pointing at one page) were **backfilled 2026-09-23**, see "Completed 2026-09-23". See "Resources" section above for the current state.
- ~~Resource-card layout mobile-verification gap~~ — **mostly closed 2026-09-23**. Desktop: 2026-09-19 for `pm-foundations`, 2026-09-23 for the other 10. Mobile: 2026-09-23 for the `/resources` hub and the 8 topics that existed at the time (see "Completed 2026-09-23"), via the same-origin-iframe workaround after `resize_window` was confirmed broken in this environment — but that pass covered the old `ai-agentic-practice` page, since it happened before the AI-for-PMs split. The 4 topics that replaced it (`understanding-ai`, `ai-product-building-blocks`, `vibe-coding-agentic-development`, `ai-empowered-pm`) haven't had a mobile pass yet.
- **Old Resources and Terms URLs**: `/resources/strategy-discovery`, `/resources/roadmapping-execution`, `/resources/ux-design`, `/resources/technology`, and `/resources/ai-agentic-practice` redirect (301) to their replacements. `/terms/browse` and `/pm-terms/browse` also redirect (301, added 2026-09-23) to `/terms` and `/pm-terms` — see `next.config.ts`.
- ~~"Browse by Category" navigated to a near-duplicate page~~ — **fixed 2026-09-23**, replaced with an inline accordion; the standalone pages are retired. See "Completed 2026-09-23" for the full story, including a real hydration-mismatch bug hit and fixed along the way (`useSyncExternalStore`, not a lazy `useState` initializer, for reading the URL hash on category-anchor deep links).
- ~~Stray `.ts` files in `handoff-for-claude-code/` break a local `npm run build`/`tsc --noEmit`~~ — **fixed 2026-09-23**, `handoff-for-claude-code` added to `tsconfig.json`'s `exclude`. No longer necessary to move the folder aside before a local build.
- **Digital Twin Case Studies sidebar is placeholder** — `CaseStudiesAside.tsx` has 3 example cards, awaiting Rick's real case studies.
- ~~Digital Twin mobile layout unverified~~ — **verified 2026-09-23**, clean, see "Digital Twin" section's verification note above.
- **`/pm-terms` and `/terminology` are build-verified only, not UX-verified** — nobody has clicked through the actual pages in a browser since they were built on 2026-08-09. Data and routes are confirmed working (build + direct DB query + a 200 smoke test in production), but the interactive experience (browse, search, flashcards for the PM domain) hasn't been exercised.
- **Digital Twin rate limiting is in-memory** — resets on every Vercel cold start, so it's not a durable defense against sustained abuse. Fine for current traffic; revisit with a Supabase-backed counter if abuse shows up.
- **Aakash Gupta's AI PM transition guide** (linked from the AI for PMs "Product Management for AI-Empowered PMs & AI PMs" sub-topic) carries a "2025 Edition" tag on its own page as of this writing — worth checking whether a newer edition exists before it's linked in more places.

---

## Next Session Should Pick Up

1. **Mobile-viewport check of the 4 new AI for PMs pages** (`understanding-ai`,
   `ai-product-building-blocks`, `vibe-coding-agentic-development`, `ai-empowered-pm`) — the
   2026-09-23 mobile pass covered the old `ai-agentic-practice` page before it was split; these 4
   replacements haven't had their own pass yet. Reuse the same-origin-iframe technique from
   "Completed 2026-09-23" rather than `resize_window`. Also worth a mobile check of the new
   `CategoryBrowse` accordion (`/terms`, `/pm-terms`) while at it — shipped 2026-09-23, desktop-only
   so far.
2. **Check whether the old `ai-agentic-practice` sub-topics' deferred content** (Multimodal AI,
   Responsible AI & Governance, AI-Native Operating Models, Portfolio AI Strategy) made it into the
   new 4-topic/20-sub-topic AI for PMs redesign under different names, or got dropped — see "What's
   Broken."
3. Real `url`s for Top Voices/Templates, and consider pulling the flagged Launchnotes "40 PM Books"
   list into the standalone `/resources` Books section.
4. **Click through `/pm-terms` and `/terminology` interactively** — browse, search, and flashcards
   for the PM domain have never been exercised in a browser, only build-verified.
5. **Add real case studies** to `src/components/digital-twin/CaseStudiesAside.tsx` (currently 3
   placeholder cards).
6. **Decide on the Subscribe button** — removed from the header 2026-07-24 "for now"; revisit whether
   it comes back (and where) or stays gone.
9. ~~Deploy~~ — **DONE 2026-07-10**, live at https://pm-rearchitected.vercel.app.
10. ~~Mobile nav~~ — **DONE 2026-07-24**, hamburger menu added to `Header.tsx`.
11. ~~PM Terms domain~~ — **DONE 2026-08-21** (built 2026-08-09, committed/shipped 2026-08-21).
12. ~~Digital Twin chat~~ — **DONE 2026-08-21**, live at `/digital-twin`.
13. ~~Resources redesign (v1)~~ — **DONE 2026-09-09**, shipped and live; tiles renamed/reordered
    2026-09-13.
14. ~~Resources sub-topic content redesigned as resource cards (PM 101 + AI for PMs)~~ — **DONE
    2026-09-19**, shipped, pushed, and deployed; see "Completed 2026-09-19" above.
15. ~~Migrate/write remaining Resources topics~~ — **DONE 2026-09-20 through 09-22**, but as a
    replace-not-migrate: `strategy-discovery`/`roadmapping-execution`/`ux-design` were retired and 6
    newly-written topics took their place (8 total). See "Completed 2026-09-20"/"Completed
    2026-09-22" above.
16. ~~Land the Digital Twin corpus refresh~~ — **DONE 2026-09-23**, see "Completed 2026-09-23" above.
17. ~~Visually spot-check the 6 new Resources topics + tile grid at desktop width~~ — **DONE
    2026-09-23**, no bugs found; see "Resources" section above.
18. ~~Real-phone/mobile-viewport check of `/digital-twin`, the `/resources` hub, and all 8 topic
    pages~~ — **DONE 2026-09-23** via the same-origin-iframe workaround; no bugs found anywhere. See
    "Completed 2026-09-23".
19. ~~Decide on `RESOURCES_BLOG_MAP`/`ResourceTiles.tsx` sync~~ — **DONE 2026-09-23**: backfilled the
    map's missing/orphaned keys and pointed `AI_CARDS` at real pages, without rewriting any existing
    tile copy. See "Completed 2026-09-23".
20. ~~Split AI for PMs into 4 separate resource pages~~ — **DONE 2026-09-23**, shipped, pushed, and
    deployed. See "Completed 2026-09-23".
21. ~~Fix "Browse by Category" navigating to a near-duplicate page~~ — **DONE 2026-09-23**, inline
    accordion, standalone pages retired and redirected, hydration-mismatch bug fixed along the way.
    See "Completed 2026-09-23".
22. ~~Fix LinkedIn URL~~ — **DONE 2026-09-23**, now `https://www.linkedin.com/in/ricklallen`.
23. ~~Exclude `handoff-for-claude-code/` from `tsconfig.json`~~ — **DONE 2026-09-23**.

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page |
| `src/app/about/page.tsx` | Standalone About page |
| `src/app/resources/page.tsx` | Resource Library page (tile grid + Terminology teaser + Top Voices + Templates + Books), redesigned 2026-09-09 |
| `src/app/resources/[topic]/page.tsx` | Per-topic Resources pages, 11 statically generated (`dynamicParams = false`) |
| `src/lib/resources.ts` | Shared Resources types, `RESOURCE_TOPICS` (imports the 6 files below plus 2 inline topics), `RESOURCES_BLOG_MAP`, `RESOURCE_SECTIONS` — edit to fill in content, no code changes needed. Has a stale top-of-file comment as of 2026-09-22, see "Resources" section |
| `src/lib/product-vision-strategy.ts` | Product Vision & Strategy topic content (added 2026-09-20) |
| `src/lib/discovery-research.ts` | Discovery & Research topic content (added 2026-09-22) |
| `src/lib/design-for-pms.ts` | Design for PMs topic content (added 2026-09-22) |
| `src/lib/agile-development-deployment.ts` | Agile, Development & Deployment topic content (added 2026-09-22) |
| `src/lib/go-to-market-growth.ts` | Go-to-Market & Growth topic content (added 2026-09-22) |
| `src/lib/technology-for-pms.ts` | Technology for PMs topic content (added 2026-09-22) |
| `src/lib/understanding-ai.ts` | Understanding AI topic content (added 2026-09-23, replaces part of retired ai-agentic-practice) |
| `src/lib/ai-product-building-blocks.ts` | AI Product Building Blocks topic content (added 2026-09-23) |
| `src/lib/vibe-coding-agentic-development.ts` | Vibe Coding & Agentic Development topic content (added 2026-09-23) |
| `src/lib/ai-empowered-pm.ts` | Product Management for AI-Empowered PMs topic content (added 2026-09-23) |
| `src/components/site/ResourceTiles.tsx` | Home page + `/resources` tile grid — as of 2026-09-20, two hardcoded card lists (`PM_CARDS`, `AI_CARDS`), not derived from `RESOURCE_TOPICS`; see "Resources" section |
| `src/components/site/TerminologyTeaser.tsx` | Client single-card glossary preview on `/resources`; server passes a term pool from Supabase |
| `src/components/site/Header.tsx` | Nav — client component, uses `usePathname`; mobile hamburger dropdown added 2026-07-24, no Subscribe button in header as of same date |
| `src/components/site/Hero.tsx` | Hero section (shared across pages) |
| `src/components/site/SubstackLatest.tsx` | Recent posts, fetches 5 from RSS |
| `src/components/site/Newsfeed.tsx` | Reading This Week, Raindrop.io API — calls `fetchReadingList(7, 10)` |
| `src/components/site/Resources.tsx` | Home page Resource Library section — thin wrapper around `ResourceTiles` |
| `src/components/site/About.tsx` | Home page About section (short version) |
| `src/lib/substack.ts` | RSS fetch + parse |
| `src/lib/raindrop-feed.ts` | Raindrop.io API fetch — `fetchReadingList(days = 7, limit = 10)`, slices after the day filter |
| `src/app/globals.css` | Tailwind v4 design tokens (`@theme`), incl. `--color-success` (green, added 2026-07-23) |
| `src/app/terms/page.tsx` | AI Terms top-terms page, renders `CategoryBrowse` below the header (2026-09-23) |
| `src/app/terms/search/page.tsx` | AI Terms search page (renders `SearchBox`, opened by default) |
| `src/app/terms/flashcards/page.tsx` | AI Terms study page (renders `FlashcardStudio`) |
| `src/app/terms/[slug]/page.tsx` | AI Terms term detail page |
| `src/app/api/terms/search/route.ts` | AI Terms search API route |
| `src/app/api/terms/grade/route.ts` | Open-Ended quiz grading API route (Anthropic) |
| `src/lib/glossary.ts` | AI Terms data-access functions (search, list, detail) — module kept its original name |
| `src/lib/supabase.ts` | Supabase client, scoped to the `pm_rearchitected` schema |
| `src/lib/anthropic.ts` | Anthropic client factory |
| `src/lib/grading.ts` | Open-Ended answer grading prompt + call (server-only) |
| `src/components/glossary/GlossaryHeader.tsx` | Shared "AI Terminology"/"Product Management Terminology" heading + search toggle + per-page nav links, used on the 3 remaining hub pages per domain (top terms, search, flashcards) |
| `src/components/glossary/CategoryBrowse.tsx` | Inline "Browse by Category" accordion (added 2026-09-23), used on `/terms` and `/pm-terms`; reads the URL hash via `useSyncExternalStore` to auto-expand/scroll for category-anchor deep links without a hydration mismatch |
| `src/components/glossary/` | `TermList`, `SearchBox`, `GlossaryHeader`, `FlashcardStudio`, `CategoryBrowse` — folder kept its original name |
| `scripts/seed-glossary.ts` | AI Terms + PM Terms seed script (`npm run seed:glossary`) — kept its original name, now domain-aware |
| `db/glossary/*.csv` | AI Terms + PM Terms source content (categories/terms/aliases/related_terms/sources) — folder kept its original name |
| `src/app/terminology/page.tsx` | Combined PM+AI terms hub page |
| `src/app/pm-terms/page.tsx` | PM Terms top-terms page, renders `CategoryBrowse` below the header (2026-09-23) |
| `src/app/pm-terms/search/page.tsx` | PM Terms search page |
| `src/app/pm-terms/flashcards/page.tsx` | PM Terms study page |
| `src/app/pm-terms/[slug]/page.tsx` | PM Terms detail page |
| `content/digital-twin/*.md` | Digital Twin corpus (bio, career-timeline, achievements, philosophy, faq) — edit directly to update the chat's knowledge, no code changes needed |
| `src/lib/digital-twin.ts` | Digital Twin system prompt assembly (reads corpus, applies hard behavioral rules) |
| `src/lib/rate-limit.ts` | In-memory per-IP sliding-window rate limiter used by the Digital Twin chat endpoint |
| `src/app/api/digital-twin/chat/route.ts` | Digital Twin streaming chat API route |
| `src/app/digital-twin/page.tsx` | Digital Twin page — hero + `lg:grid-cols-3` (ChatPanel 2/3, CaseStudiesAside 1/3); reformatted 2026-09-10 |
| `src/components/digital-twin/ChatPanel.tsx` | Digital Twin chat UI — entry state (big ask box + prompt pills) transitions in place to the streaming conversation |
| `src/components/digital-twin/CaseStudiesAside.tsx` | Right sidebar on `/digital-twin` — placeholder case-study cards, awaiting real content |
| `.env.local` | `RAINDROP_TOKEN`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ANTHROPIC_API_KEY` |
