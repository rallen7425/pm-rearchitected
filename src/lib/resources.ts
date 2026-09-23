import { DESIGN_FOR_PMS } from "./design-for-pms";
import { AGILE_DEVELOPMENT_DEPLOYMENT } from "./agile-development-deployment";
import { GO_TO_MARKET_GROWTH } from "./go-to-market-growth";
import { TECHNOLOGY_FOR_PMS } from "./technology-for-pms";
import { UNDERSTANDING_AI } from "./understanding-ai";
import { AI_PRODUCT_BUILDING_BLOCKS } from "./ai-product-building-blocks";
import { VIBE_CODING_AGENTIC_DEVELOPMENT } from "./vibe-coding-agentic-development";
import { AI_EMPOWERED_PM } from "./ai-empowered-pm";
// Content + types for the Resources section (home-page tile grid, the standalone
// /resources page, and the per-topic /resources/[topic] pages).
//
// Every sub-topic across every topic uses the `resources: Resource[]` card-list shape —
// the older `body`/`links` prose shape is still typed on `SubTopic` for backward
// compatibility but has no current users; the topics that used it (strategy-discovery,
// roadmapping-execution, ux-design) were retired outright on 2026-09-22 in favor of
// newly-written replacement topics (see `next.config.ts`'s redirects for the old URLs).
// `url: null` on a resource means no real source has been sourced yet — it renders as a
// non-clickable reference, never a fabricated link.
//
// Most topics are defined in their own `src/lib/<topic-id>.ts` file and imported into
// `RESOURCE_TOPICS` below; only `pm-foundations` is still inline here. `ai-agentic-practice`
// was retired 2026-09-23 in favor of four newly-written topics (`understanding-ai`,
// `ai-product-building-blocks`, `vibe-coding-agentic-development`, `ai-empowered-pm`) — same
// pattern as the 2026-09-22 retirement, see `next.config.ts`'s redirects.
// `src/app/resources/[topic]/page.tsx` renders whichever shape a given sub-topic sets.

import { DISCOVERY_RESEARCH } from "./discovery-research";
import { PRODUCT_VISION_STRATEGY } from "./product-vision-strategy";

export type TopicWidth = "wide" | "standard";

export interface ResourceLink {
  type: "article" | "video";
  label: string;
  url: string | null;
}

/** One resource-card entry in the new card-list sub-topic format. */
export interface Resource {
  /** Optional primary call-to-action and supporting Markdown paragraphs/links. */
  linkLabel?: string;
  supportingContent?: string;
  type: "article" | "video" | "tool";
  /** Bold card heading, e.g. "Shreyas Doshi — What is product management? (a memo)". */
  title: string;
  /** 1–2 sentences: what it says and why it's worth the click. */
  summary: string;
  /** Set for a single-link resource; null only when no source has been sourced yet. */
  url?: string | null;
  /** Set instead of `url` for a resource with more than one link (mutually exclusive with `url`). */
  links?: { label: string; url: string }[];
  /** Video-only, e.g. "~27 min" — shown in the video grid, not the inline card list. */
  runtime?: string;
}

export interface SubTopic {
  /** Keep video-led sources with their supporting readings in the main list. */
  resourceLayout?: "list";
  id: string;
  name: string;
  /** One-line description shown in the tile's compact sub-topic list. */
  theme: string;
  /** Optional short caption shown above the resource list (e.g. a scope/sequencing note). */
  note?: string;
  /** New card-list format. When set (even to an empty array), takes precedence over body/links. */
  resources?: Resource[] | null;
  /** Legacy paragraph format: 1–3 paragraphs for the topic page, or null when not yet written. */
  body?: string[] | null;
  /** Legacy link-pill row, paired with `body`. */
  links?: ResourceLink[];
}

export interface ResourceTopic {
  id: string;
  label: string;
  width: TopicWidth;
  /** Short description for the tile grid. */
  tileDescription: string;
  /** Longer intro paragraph for the topic's own page, or null when not yet written. */
  pageIntro: string | null;
  /** Relevant posts rendered with the home page Reframed rail. */
  reframedPostUrls?: string[];
  subtopics: SubTopic[];
}

export const RESOURCE_TOPICS: ResourceTopic[] = [
  PRODUCT_VISION_STRATEGY,
  {
    id: "pm-foundations",
    label: "PM 101",
    width: "wide",
    tileDescription:
      "Foundations of product management — roles, frameworks, and core practices.",
    pageIntro: "Foundations of product management—what the role involves, how product teams work, the frameworks worth understanding, and how AI is reshaping the practice. These resources offer a starting point for someone new to product management or looking for a refresher.",
    subtopics: [
      {
        id: "what-is-product-management",
        name: "What is Product Management?",
        theme: "what product management actually is — and the myths worth retiring",
        resources: [
          {
            type: "article",
            title: "Shreyas Doshi — What is product management? (a memo)",
            summary: "Product management is the art, science, and practice of making products successful. It puts the role in context from the start and dispels the myth that PM is mostly about telling engineering what to build.",
            url: "https://x.com/shreyas/status/1633854780648083456?lang=en",
          },
          {
            type: "article",
            title: "Martin Eriksson (Mind the Product) — What, exactly, is a Product Manager?",
            summary: "The classic 2011 explainer that puts PM at the intersection of Business, Technology, and User Experience. A lot has changed since, but the essence hasn't. Start here for a five-minute read that points you in the right direction.",
            url: "https://www.mindtheproduct.com/what-exactly-is-a-product-manager/",
          },
          {
            type: "article",
            title: "Marty Cagan (SVPG) — Product Management: An Introduction",
            summary: "Cagan outlines the key skills of a product manager and his four risks. He's opinionated, and some of it reflects a best case that isn't achievable in every organization, but it's foundational reading for the modern, empowered product team.",
            url: "https://www.svpg.com/product-management-an-introduction/",
          },
          {
            type: "article",
            title: "Product Board — The Ultimate Guide to Product Management",
            summary: "Takes Eriksson's and Cagan's concepts and makes them a bit more actionable: understanding user needs, deciding what to build, and rallying everyone around a plan. They're ultimately selling their own solution, but it's a good source for double-clicking on the key concepts.",
            url: "https://www.productboard.com/what-is-product-management/",
          },
          {
            type: "article",
            title: "Atlassian — What is product management? A guide for product managers and Agile teams",
            summary: "A more operational view of the role, focused on Agile teams, and the first of over 40 articles in Atlassian's product library. They're ultimately promoting their own tools, so it skews that way, but it's a resource worth returning to for specific topics.",
            url: "https://www.atlassian.com/agile/product-management",
          },
          {
            type: "article",
            title: "Atlassian — Product Manager: Role & Best Practices",
            summary: "A practical look at a PM’s everyday responsibilities: understanding customer needs, setting priorities, aligning stakeholders, and working with the team to make product decisions. Connects the definitions above to what the job involves in practice.",
            url: "https://www.atlassian.com/agile/product-management/product-manager",
          },
          {
            type: "article",
            title: "Teresa Torres — Core Concept: The Product Trio",
            summary: "A short introduction to how product managers, designers, and engineers work together to understand customers, explore solutions, and take responsibility for outcomes. Useful context for understanding the PM’s place on the team.",
            url: "https://www.producttalk.org/product-trio/",
          },
          {
            type: "video",
            title: "Lenny's Podcast — Shreyas Doshi: The art of product management",
            summary: "Doshi expands on his memo in conversation. A good way to hear the thinking behind it rather than just read the summary.",
            url: "https://www.youtube.com/watch?v=YP_QghPLG-8",
          },
          {
            type: "video",
            title: "Christian Idiodi — How to Be a Great Product Manager",
            summary: "A practitioner’s introduction to the responsibilities and mindset of a strong product manager. A video companion to the readings on what the role involves.",
            url: "https://www.svpg.com/videos/how-to-be-a-great-product-manager/",
          },
          {
            type: "article",
            title: "Mind the Product — Busting Product Management Myths (Parts 1 & 2)",
            summary: "A two-part myth-busting series, worth reading once you've got the basics down so you can spot the bad takes.",
            links: [
              { label: "Part 1", url: "https://www.mindtheproduct.com/busting-product-management-myths-part-1-of-2/" },
              { label: "Part 2", url: "https://www.mindtheproduct.com/busting-product-management-myths-part-2-of-2/" },
            ],
          },
        ],
      },
      {
        id: "dive-deeper",
        name: "Dive Deeper",
        theme: "frameworks and originals worth reading past the intro pieces",
        resources: [
          {
            type: "article",
            title: "SVPG — The Four Big Risks",
            summary: "Cagan's four risks, value, usability, feasibility, and business viability, from his book Inspired. The risk checklist behind most good product discovery work.",
            url: "https://www.svpg.com/four-big-risks/",
          },
          {
            type: "article",
            title: "Teresa Torres — Everyone Can Do Continuous Discovery, Even You!",
            summary: "The shift from \"here's a feature we should build\" to \"here's the outcome we're after, what problem could get us there.\" Continuous discovery over one-time research phases is one of the most important conceptual shifts for a new PM.",
            url: "https://www.producttalk.org/getting-started-with-discovery/",
          },
          {
            type: "article",
            title: "Melissa Perri — The Build Trap",
            summary: "Perri's original 2014 post defining the build trap, measuring productivity by what ships instead of the value it creates. The idea that later became her book and reshaped how a lot of teams think about roadmaps.",
            url: "https://melissaperri.com/blog/2014/08/05/the-build-trap",
          },
          {
            type: "article",
            title: "Marty Cagan (SVPG) — The Product Operating Model: An Introduction",
            summary: "Cagan's newer framing of what separates strong product companies from the rest, empowered teams solving real problems, not a roadmap of features handed down from above. The natural next step after the Four Big Risks.",
            url: "https://www.svpg.com/the-product-operating-model-an-introduction/",
          },
        ],
      },
      {
        id: "frameworks",
        name: "Frameworks",
        theme: "foundational approaches to learning, goals, and product choices",
        note: "Foundational approaches for understanding customer needs, testing ideas, setting goals, and making product choices. Start with the purpose of each framework and use the original sources to explore how it works.",
        resources: [
          {
            type: "article",
            title: "The Agile Manifesto",
            summary: "The four values and twelve principles, written in 2001, that most of modern product and engineering practice still traces back to. Worth reading in the original rather than a paraphrase of it.",
            url: "https://agilemanifesto.org/",
          },
          {
            type: "article",
            title: "Stanford d.school — Design Thinking Bootleg",
            summary: "Practical methods for understanding people, defining problems, generating ideas, prototyping, and testing. A useful introduction to Design Thinking through activities you can try.",
            url: "https://dschool.stanford.edu/tools/design-thinking-bootleg",
          },
          {
            type: "article",
            title: "Christensen Institute — Jobs to Be Done Theory",
            summary: "The milkshake study that made Jobs to Be Done mainstream: people don't buy products, they hire them to do a job. One of the most durable ideas in how to think about why customers actually choose something — from Christensen's own institute, free to read.",
            url: "https://www.christenseninstitute.org/theory/jobs-to-be-done/",
          },
          {
            type: "article",
            title: "Eric Ries — The Lean Startup Methodology",
            summary: "Introduces validated learning and the Build-Measure-Learn cycle: turn assumptions into experiments, learn from customers, and decide whether to continue or change direction.",
            url: "https://theleanstartup.com/principles",
          },
          {
            type: "article",
            title: "Eric Ries — What Is an MVP?",
            summary: "Ries explains the minimum viable product on his own terms, correcting the common misread that it means shipping something half-finished. It's the smallest thing that lets you test a real assumption.",
            url: "https://leanstartup.co/resources/articles/what-is-an-mvp/",
          },
          {
            type: "article",
            title: "What Matters — What Is an OKR?",
            summary: "Explains how objectives describe what you want to accomplish and key results make progress measurable. A starting point for connecting product work to explicit goals.",
            url: "https://www.whatmatters.com/faqs/okr-meaning-definition-example",
          },
          {
            type: "article",
            title: "Intercom — RICE: Simple Prioritization for Product Managers",
            summary: "Introduces reach, impact, confidence, and effort as a structured way to compare opportunities. Useful for making the assumptions behind prioritization decisions visible.",
            url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/",
          },
        ],
      },
      {
        id: "pm-in-2026",
        name: "Product Management in 2026",
        theme: "how the practice is changing in the AI era, at a glance",
        note: "How AI is changing the PM’s work, the skills the role demands, and the products teams build. These readings introduce the shifts; the AI for PMs page explores the tools and technical concepts in greater depth.",
        resources: [
          {
            type: "article",
            title: "Marty Cagan (SVPG) — Product in the AI Era: AI Resource Guide",
            summary: "Cagan's take on what's actually changing in the practice as teams build with AI, versus what's just repackaged.",
            url: "https://www.svpg.com/ai-resource-guide/",
          },
          {
            type: "article",
            title: "Lenny Rachitsky — How AI Will Impact Product Management",
            summary: "A grounded look at what actually changes for PMs day to day as AI tools mature, prototyping, spec writing, research, without overselling how much of the job disappears.",
            url: "https://www.lennysnewsletter.com/p/how-ai-will-impact-product-management",
          },
          {
            type: "article",
            title: "Reforge — How AI Changes Product Management",
            summary: "The role stays the same at its core, understanding users and making calls, but AI changes what a PM can realistically do alone versus what used to require a full team around them.",
            url: "https://www.reforge.com/blog/how-ai-changes-product-management",
          },
          {
            type: "article",
            title: "Aakash Gupta — What Is an AI PM?",
            summary: "A clear definition of the emerging AI PM role: building AI-native features versus using AI tools to do the regular PM job better. Useful for sorting the hype from the actual job description.",
            url: "https://www.aakashg.com/pm-vs-ai-pm/what-is-an-ai-pm/",
          },
          {
            type: "article",
            title: "First Round Review — \"AI-Powered\" Isn't a Position",
            summary: "A caution against confusing a product with a technology. Putting AI on the box isn't a market position, this pushes PMs back toward the same fundamentals: whose problem, why now, why you.",
            url: "https://review.firstround.com/positioning-playbook-for-ai-products/",
          },
        ],
      },
    ],
  },
  UNDERSTANDING_AI,
  AI_PRODUCT_BUILDING_BLOCKS,
  VIBE_CODING_AGENTIC_DEVELOPMENT,
  AI_EMPOWERED_PM,
  DISCOVERY_RESEARCH,
  DESIGN_FOR_PMS,
  AGILE_DEVELOPMENT_DEPLOYMENT,
  GO_TO_MARKET_GROWTH,
  TECHNOLOGY_FOR_PMS,
];

export const TOPIC_IDS = RESOURCE_TOPICS.map((t) => t.id);

export function getTopic(id: string): ResourceTopic | undefined {
  return RESOURCE_TOPICS.find((t) => t.id === id);
}

// ---- "From the Blog" (per topic) ----
// Hand-maintained. Add an entry here when a Substack post belongs on a topic page — there
// is no automatic tag-based derivation (the RSS feed has no tags and the archive API's
// tags don't map to these topics). Ships empty; every topic page renders a clean empty
// state until entries are added.

export interface TopicBlogPost {
  title: string;
  description: string;
  url: string;
  /** Which sub-topic name it's filed under, shown as the card kicker. */
  filedUnder: string;
  /** Display date, e.g. "Aug 2026". */
  date: string;
}

// Only relevant for topics WITHOUT `reframedPostUrls` set (pm-foundations, product-vision-strategy,
// discovery-research, understanding-ai, ai-product-building-blocks,
// vibe-coding-agentic-development, ai-empowered-pm) — a topic with `reframedPostUrls` pulls its
// "From the Blog" rail live from the Substack Reframed archive instead and never reads this map.
// See `[topic]/page.tsx`'s "From the Blog" branch.
export const RESOURCES_BLOG_MAP: Record<string, TopicBlogPost[]> = {
  "discovery-research": [
  {
    "title": "Reframed: Product Discovery",
    "description": "A PM-centered view of discovery across the product lifecycle: market understanding, problem discovery, solution discovery, usability testing, and market feedback. The activities overlap and inform one another. Continuous customer learning provides the foundation, with focused research filling the gaps and AI supporting preparation and synthesis.",
    "url": "https://fromoutofthenoise.substack.com/p/reframed-product-discovery",
    "filedUnder": "Discovery & Research",
    "date": "Jul 30, 2026"
  }
],
  "pm-foundations": [],
  "product-vision-strategy": [],
  "understanding-ai": [],
  "ai-product-building-blocks": [],
  "vibe-coding-agentic-development": [],
  "ai-empowered-pm": [],
};

// ---- Standalone /resources page sections ----

export interface TermLinkCard {
  label: string;
  desc: string;
  href: string;
}

export type VoiceMedium = "Newsletter" | "Social" | "Blog" | "Podcast";

export interface TopVoice {
  name: string;
  medium: VoiceMedium;
  desc: string;
  url: string | null;
}

export interface TemplateItem {
  name: string;
  desc: string;
  url: string | null;
}

export interface BookItem {
  title: string;
  author: string;
  take: string;
}

export const RESOURCE_SECTIONS: {
  terminologyLinks: TermLinkCard[];
  topVoices: TopVoice[];
  templates: TemplateItem[];
  books: BookItem[];
} = {
  terminologyLinks: [
    {
      label: "Terminology Hub",
      desc: "PM and AI terms side by side, browsable by category",
      href: "/terminology",
    },
    { label: "PM Terms", desc: "Roles, frameworks, and process vocabulary", href: "/pm-terms" },
    {
      label: "AI Terms",
      desc: "177 terms from AI 101 through advanced/niche",
      href: "/terms",
    },
    {
      label: "Test Yourself",
      desc: "Flash cards, multiple choice, and open-ended grading",
      href: "/terms/flashcards",
    },
  ],
  topVoices: [
    {
      name: "Lenny Rachitsky",
      medium: "Newsletter",
      desc: "Lenny's Newsletter & Podcast — the widest-read practitioner interview series in product.",
      url: null,
    },
    {
      name: "Shreyas Doshi",
      medium: "Social",
      desc: "Sharp, quotable frameworks on prioritization, influence, and product judgment.",
      url: null,
    },
    {
      name: "Aakash Gupta",
      medium: "Newsletter",
      desc: "Product Growth — one of the more prolific trackers of the AI PM skill shift specifically.",
      url: null,
    },
    {
      name: "Ethan Mollick",
      medium: "Blog",
      desc: "One Useful Thing — research-grounded, refreshingly free of AI hype.",
      url: null,
    },
    {
      name: "Marty Cagan",
      medium: "Blog",
      desc: "Silicon Valley Product Group — still the clearest voice on empowered product teams.",
      url: null,
    },
    {
      name: "Teresa Torres",
      medium: "Blog",
      desc: "Product Talk — continuous discovery, taught with real product examples.",
      url: null,
    },
    {
      name: "Simon Willison",
      medium: "Blog",
      desc: "Independent, hands-on AI engineering writing — the best signal-to-noise on new model releases.",
      url: null,
    },
    {
      name: "Latent Space",
      medium: "Podcast",
      desc: "The AI engineer podcast — deep technical conversations without the hype cycle.",
      url: null,
    },
  ],
  templates: [
    {
      name: "PRD Template — AI Feature",
      desc: "Adds eval criteria and a failure-mode section to a standard PRD shape.",
      url: null,
    },
    {
      name: "Eval Scorecard Template",
      desc: "A 30-case starter grid for scoring an AI feature before launch.",
      url: null,
    },
    {
      name: "Now / Next / Later Roadmap",
      desc: "The lightweight roadmap format, set up as a copyable board.",
      url: null,
    },
    {
      name: "AI Readiness Diagnostic",
      desc: "A 30-day worksheet for assessing whether a team can actually ship AI features.",
      url: null,
    },
    {
      name: "Opportunity Solution Tree",
      desc: "Blank OST worksheet plus one worked fintech example.",
      url: null,
    },
    {
      name: "RICE Prioritization Sheet",
      desc: "A ready-to-copy scoring sheet with the reach/impact/confidence/effort math built in.",
      url: null,
    },
  ],
  books: [
    {
      title: "Inspired",
      author: "Marty Cagan",
      take: 'Still the default answer to "what should a new PM read first."',
    },
    {
      title: "Good Strategy / Bad Strategy",
      author: "Richard Rumelt",
      take: 'The book that ruined "our strategy is to grow 20%" for me permanently.',
    },
    {
      title: "Continuous Discovery Habits",
      author: "Teresa Torres",
      take: 'Turns "talk to customers more" into an actual weekly practice.',
    },
    {
      title: "7 Powers",
      author: "Hamilton Helmer",
      take: "The most useful hour you can spend on competitive strategy.",
    },
    {
      title: "The Mom Test",
      author: "Rob Fitzpatrick",
      take: "Short, cheap, and it will change your next ten customer calls.",
    },
    {
      title: "Co-Intelligence",
      author: "Ethan Mollick",
      take: "The clearest field guide yet to actually working alongside AI day to day.",
    },
    {
      title: "AI Snake Oil",
      author: "Narayanan & Kapoor",
      take: "The essential counterweight — where AI genuinely doesn't work yet.",
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      take: "Dense, but it's the book that made architecture conversations click.",
    },
  ],
};
