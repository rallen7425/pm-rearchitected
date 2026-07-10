@AGENTS.md

# PM Rearchitected — Project Status

## What This Is
A personal brand website for Rick Allen, a SaaS Product Owner focused on AI-driven product management. Built with Next.js App Router + Tailwind CSS v4. Dev server runs on **port 3001** (`npm run dev -- --port 3001`).

Brand name: **"Product Management, Re-Architected"**  
Substack: https://fromoutofthenoise.substack.com/  
Raindrop collection: 70283481

---

## Current State (as of 2026-06-19)

### Pages built
- `/` — Home page (Hero, Recent Posts, Reading This Week, Resource Library, About section)
- `/about` — Full standalone About page with bio content
- `/resources` — Full Resources page with 8 modules, two-column bullet format

### Data sources
- **Recent Posts**: Substack RSS (`fromoutofthenoise.substack.com/feed`), shows 5 posts with thumbnails
- **Reading This Week**: Raindrop.io API, collection 70283481, last 7 days. Token in `.env.local` (`RAINDROP_TOKEN`)
- ISR revalidation every 3600s (`export const revalidate = 3600` in `page.tsx`)

### Navigation
- **Home** → `/`
- **Blog** → `https://fromoutofthenoise.substack.com/` (external, new tab)
- **Resources** → `/resources`
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

## What's Broken / Known Issues

- **Preview tool** (`mcp__Claude_Preview__preview_*`) cannot start the server — port 3000 is occupied by an unrelated `node` process (PID 4913) that the tool checks first. Workaround: run the dev server manually (`npm run dev -- --port 3001`) and verify via curl or browser. The `.claude/launch.json` is configured for port 3001 but the tool keeps tripping on port 3000.
- **LinkedIn URL** on the About page (`/about`) uses a placeholder: `https://linkedin.com/in/rickallen`. Needs Rick's actual LinkedIn URL.
- **"Read More" links** in all Resources page bullets point to `href="#"`. Real URLs need to be added for each source.
- **Resource card ref counts** (e.g. "12 refs", "9 refs") are hardcoded placeholders. Update when real content is finalized.

---

## Next Session Should Pick Up

1. **Add real URLs** to the "Read More" links in `/resources/page.tsx` — 8 modules × 10 sources = 80 links
2. **Update resource card counts** in `src/components/site/Resources.tsx` to match actual ref counts
3. **Fix LinkedIn URL** in `src/app/about/page.tsx` (line ~144)
4. **Deploy** — site has never been deployed. Consider Vercel (project is Next.js App Router, straightforward deploy)
5. **Mobile nav** — the header nav is `hidden md:flex`, so mobile users see no navigation. A hamburger menu or mobile drawer needs to be added

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
| `.env.local` | `RAINDROP_TOKEN` |
