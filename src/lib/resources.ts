// Content + types for the Resources section (home-page tile grid, the standalone
// /resources page, and the per-topic /resources/[topic] pages).
//
// Transcribed from handoff-for-claude-code/resources_topics.json and
// resources_page_sections.json. `url: null` means no real source has been sourced yet —
// it renders as a non-clickable reference, never a fabricated link. `body: null` means the
// sub-topic write-up hasn't been drafted; only Strategy & Discovery is fully written, as
// the template for the other five topics.

export type TopicWidth = "wide" | "standard";

export interface ResourceLink {
  type: "article" | "video";
  label: string;
  url: string | null;
}

export interface SubTopic {
  id: string;
  name: string;
  /** One-line description shown in the tile's compact sub-topic list. */
  theme: string;
  /** 1–3 paragraphs for the topic page, or null when not yet written. */
  body: string[] | null;
  links: ResourceLink[];
}

export interface ResourceTopic {
  id: string;
  label: string;
  width: TopicWidth;
  /** Short description for the tile grid. */
  tileDescription: string;
  /** Longer intro paragraph for the topic's own page, or null when not yet written. */
  pageIntro: string | null;
  subtopics: SubTopic[];
}

export const RESOURCE_TOPICS: ResourceTopic[] = [
  {
    id: "strategy-discovery",
    label: "Strategy & Discovery",
    width: "wide",
    tileDescription:
      "Diagnosis-led frameworks for picking the right bets and validating them fast — from articulating a coherent strategy to getting close enough to customers to separate real problems from assumed ones.",
    pageIntro:
      "Strategy and discovery are the same motion wearing two names — one sets the direction, the other tells you whether you're right. This page collects the frameworks I return to for diagnosing the real problem before committing to a bet, and the research habits that keep that diagnosis honest once a team is already moving fast. It leans traditional on purpose: differentiation, competitive positioning, and customer truth don't expire just because the tooling underneath them changed. Where AI reshapes the practice — faster synthesis, cheaper validation, agentic research assistants — that's noted within the relevant sub-topic below rather than split into a separate page of its own.",
    subtopics: [
      {
        id: "strategic-diagnosis",
        name: "Strategic Diagnosis",
        theme: 'what strategy actually is, and why most "strategies" are goals in disguise',
        body: [
          'Richard Rumelt\'s Good Strategy / Bad Strategy remains the clearest single explanation of what strategy actually is: a diagnosis of the real obstacle, a guiding policy for dealing with it, and a set of coherent actions that follow from both. Most documents that call themselves a "strategy" skip the diagnosis entirely and jump straight to goals dressed up in strategic language — growth targets, market share numbers, aspirations with no theory of how you get there.',
          "The diagnosis is the part worth rereading at the start of every planning cycle. If a team can't state, in one sentence, what specifically is standing between them and the outcome they want, the roadmap that follows is a wish list, not a strategy.",
        ],
        links: [
          { type: "article", label: "Good Strategy / Bad Strategy — Rumelt", url: null },
          { type: "article", label: "Reforge — Product Strategy course", url: null },
          { type: "video", label: "Rumelt on diagnosis (interview)", url: null },
        ],
      },
      {
        id: "competitive-moats",
        name: "Competitive Moats",
        theme: "durable advantage: 7 Powers, positioning, structural edges",
        body: [
          'Hamilton Helmer\'s 7 Powers gives a compact vocabulary for the actual sources of durable advantage — scale economies, network effects, switching costs, counter-positioning, and the rest — that holds up better in a positioning debate than "we\'ll out-execute them." Porter\'s original competitive-strategy work still underlies most of it; Helmer just made it usable in a single sitting.',
        ],
        links: [
          { type: "article", label: "7 Powers — Helmer", url: null },
          { type: "article", label: "Competitive Strategy — Porter", url: null },
          { type: "article", label: "Stratechery archive", url: null },
        ],
      },
      {
        id: "pmf-positioning",
        name: "PMF & Positioning",
        theme: "crossing the chasm, act-two GTM, category strategy",
        body: [
          "Crossing the Chasm and The Innovator's Dilemma describe the same discontinuity from opposite sides — the first from a challenger trying to cross into the mainstream, the second from an incumbent about to be disrupted by one. Reading them together is more useful than reading either alone, especially when deciding how hard to defend an existing product line versus fund a new bet.",
        ],
        links: [
          { type: "article", label: "Crossing the Chasm — Moore", url: null },
          { type: "article", label: "The Innovator's Dilemma — Christensen", url: null },
          { type: "article", label: "Sequoia Arc — positioning frameworks", url: null },
        ],
      },
      {
        id: "customer-interviewing",
        name: "Customer Interviewing",
        theme: "getting real signal instead of flattery",
        body: [
          "The Mom Test is short enough to reread in an hour and specific enough to change how the next ten interviews go. The core trick is asking about past behavior instead of future intentions — people are unreliable narrators of their own hypothetical choices, however sincere they are while answering.",
        ],
        links: [
          { type: "article", label: "The Mom Test — Fitzpatrick", url: null },
          { type: "article", label: "Intercom on Jobs to Be Done", url: null },
        ],
      },
      {
        id: "jobs-to-be-done",
        name: "Jobs to Be Done",
        theme: "what customers actually hire your product to do",
        body: [
          "JTBD reframes a product decision around what a customer is actually trying to accomplish rather than the feature they happened to ask for. It's easy to nod along to and harder to apply consistently — the useful version of this topic is less the theory and more the discipline of writing job stories specific enough to survive contact with a real roadmap debate.",
        ],
        links: [
          { type: "article", label: "Jobs to Be Done — Ulwick & Christensen", url: null },
          { type: "article", label: "Intercom's JTBD guide", url: null },
        ],
      },
      {
        id: "continuous-discovery",
        name: "Continuous Discovery",
        theme: "weekly habits that keep teams close to users",
        body: [
          'Teresa Torres\' weekly-touchpoint model is the most concrete answer I\'ve found to "how do you actually keep a team close to customers without discovery becoming a special project someone runs twice a year." Opportunity Solution Trees are the visual artifact that makes the habit stick — they force a team to trace every solution back to a specific opportunity, and every opportunity back to a stated outcome.',
        ],
        links: [
          { type: "article", label: "Continuous Discovery Habits — Torres", url: null },
          { type: "article", label: "Opportunity Solution Trees — guide", url: null },
          { type: "video", label: "Torres on the weekly cadence (talk)", url: null },
        ],
      },
      {
        id: "research-synthesis",
        name: "Research Synthesis",
        theme: "turning qualitative noise into decisions",
        body: [
          "The bottleneck in most research practices isn't collecting interviews — it's turning them into something a team can act on before the finding goes stale. Tools like Dovetail matter less than the discipline behind them: tagging and synthesizing on a running cadence, not batching it all at the end of a quarter when half the context has already evaporated.",
        ],
        links: [
          { type: "article", label: "Just Enough Research — Hall", url: null },
          { type: "article", label: "Dovetail — synthesis guide", url: null },
        ],
      },
      {
        id: "rapid-validation",
        name: "Rapid Validation",
        theme: "design sprints and cheap tests before you build",
        body: [
          'Google Ventures\' Design Sprint compresses "should we even build this" into five days by forcing a testable prototype before a single line of production code gets written. The specific five-day format matters less than the discipline underneath it: identify the riskiest assumption first, and find the cheapest possible way to test it.',
        ],
        links: [
          { type: "article", label: "GV Design Sprint — guide", url: null },
          { type: "article", label: "Shape Up — appetite-based scoping", url: null },
        ],
      },
    ],
  },
  {
    id: "ai-agentic-practice",
    label: "AI & Agentic Practice",
    width: "wide",
    tileDescription:
      "How product teams actually build with AI — architecture, evaluation, and the operating-model shifts as teams move from writing specs to shipping working prototypes.",
    pageIntro: null,
    subtopics: [
      {
        id: "llm-fundamentals",
        name: "LLM Fundamentals",
        theme: "tokens, context windows, and why hallucination happens",
        body: null,
        links: [],
      },
      {
        id: "rag-knowledge-systems",
        name: "RAG & Knowledge Systems",
        theme: "grounding AI answers in your own data",
        body: null,
        links: [],
      },
      {
        id: "multimodal-ai",
        name: "Multimodal AI",
        theme: "document and image understanding: receipts, IDs, forms",
        body: null,
        links: [],
      },
      {
        id: "agentic-systems-tool-use",
        name: "Agentic Systems & Tool Use",
        theme: "tool-calling, MCP, and multi-agent design",
        body: null,
        links: [],
      },
      {
        id: "evaluation-eval-design",
        name: "Evaluation & Eval Design",
        theme: "measuring quality instead of vibes",
        body: null,
        links: [],
      },
      {
        id: "responsible-ai-governance",
        name: "Responsible AI & Governance",
        theme: "guardrails, risk, and human-in-the-loop",
        body: null,
        links: [],
      },
      {
        id: "ai-native-operating-models",
        name: "AI-Native Operating Models",
        theme: "how build-first teams actually run, day to day",
        body: null,
        links: [],
      },
      {
        id: "portfolio-ai-strategy",
        name: "Portfolio AI Strategy",
        theme: "use-case prioritization, build vs. buy vs. partner",
        body: null,
        links: [],
      },
    ],
  },
  {
    id: "pm-foundations",
    label: "PM Foundations",
    width: "standard",
    tileDescription:
      "Foundations of product management — roles, frameworks, and core practices.",
    pageIntro: null,
    subtopics: [
      {
        id: "roles-responsibilities",
        name: "Roles & Responsibilities",
        theme: "what a PM actually owns, day to day",
        body: null,
        links: [],
      },
      {
        id: "core-frameworks",
        name: "Core Frameworks",
        theme: "the mental models worth knowing cold",
        body: null,
        links: [],
      },
      {
        id: "product-sense",
        name: "Product Sense",
        theme: "building the judgment behind good calls",
        body: null,
        links: [],
      },
      {
        id: "stakeholder-communication",
        name: "Stakeholder Communication",
        theme: "earning trust across eng, design, and leadership",
        body: null,
        links: [],
      },
    ],
  },
  {
    id: "roadmapping-execution",
    label: "Roadmapping & Execution",
    width: "standard",
    tileDescription:
      "Sequencing work, making tradeoffs under uncertainty, and shipping with speed and quality.",
    pageIntro: null,
    subtopics: [
      {
        id: "prioritization-frameworks",
        name: "Prioritization Frameworks",
        theme: "RICE, opportunity trees, and saying no well",
        body: null,
        links: [],
      },
      {
        id: "roadmap-communication",
        name: "Roadmap Communication",
        theme: "outcome-based plans stakeholders actually trust",
        body: null,
        links: [],
      },
      {
        id: "delivery-practices",
        name: "Delivery Practices",
        theme: "Shape Up, Scrum, and dual-track agile",
        body: null,
        links: [],
      },
      {
        id: "flow-throughput",
        name: "Flow & Throughput",
        theme: "finding the bottleneck that's actually slowing you down",
        body: null,
        links: [],
      },
    ],
  },
  {
    id: "ux-design",
    label: "UX Design",
    width: "standard",
    tileDescription: "Taste-building references for PMs who care about the craft.",
    pageIntro: null,
    subtopics: [
      {
        id: "visual-interaction-craft",
        name: "Visual & Interaction Craft",
        theme: "the small decisions that make interfaces feel polished",
        body: null,
        links: [],
      },
      {
        id: "design-systems",
        name: "Design Systems",
        theme: "consistency and flexibility at scale",
        body: null,
        links: [],
      },
      {
        id: "ux-research-usability",
        name: "UX Research & Usability",
        theme: "evidence-based practice, not opinion",
        body: null,
        links: [],
      },
      {
        id: "designing-for-ai",
        name: "Designing for AI",
        theme: "trust, uncertainty, and human oversight in AI interfaces",
        body: null,
        links: [],
      },
    ],
  },
  {
    id: "technology",
    label: "Technology",
    width: "standard",
    tileDescription:
      "Technical literacy for PMs — architecture, APIs, data, and infrastructure.",
    pageIntro: null,
    subtopics: [
      {
        id: "architecture-fundamentals",
        name: "Architecture Fundamentals",
        theme: "how engineers think about tradeoffs and quality",
        body: null,
        links: [],
      },
      {
        id: "apis-developer-experience",
        name: "APIs & Developer Experience",
        theme: "what makes a developer-facing product excellent",
        body: null,
        links: [],
      },
      {
        id: "infrastructure-systems-design",
        name: "Infrastructure & Systems Design",
        theme: "the decisions that affect scale and reliability",
        body: null,
        links: [],
      },
      {
        id: "partnering-with-engineering",
        name: "Partnering with Engineering",
        theme: "working well with staff and principal engineers",
        body: null,
        links: [],
      },
    ],
  },
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

export const RESOURCES_BLOG_MAP: Record<string, TopicBlogPost[]> = {
  "strategy-discovery": [],
  "ai-agentic-practice": [],
  "pm-foundations": [],
  "roadmapping-execution": [],
  "ux-design": [],
  technology: [],
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
