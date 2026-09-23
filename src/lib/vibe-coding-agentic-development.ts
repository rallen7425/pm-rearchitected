import type { ResourceTopic } from "./resources";

// AI for PMs page. Content finalized in Cowork 2026-09-23 (handoff-for-claude-code/ai-for-pms-content.json).
export const VIBE_CODING_AGENTIC_DEVELOPMENT: ResourceTopic = {
  "id": "vibe-coding-agentic-development",
  "label": "Vibe Coding & Agentic Development",
  "width": "standard",
  "tileDescription": "Turn ideas into working prototypes with AI coding tools and agentic workflows.",
  "pageIntro": "Hands-on AI building for product people: what vibe coding is, the tools worth knowing, the stack underneath, and the practices that turn a quick demo into software you can trust. Start with the foundations if you're new, or jump to the tools if you're ready to build.",
  "subtopics": [
    {
      "id": "vibe-coding-foundations",
      "name": "Vibe Coding Foundations",
      "theme": "What vibe coding is, where it breaks down, and how it differs from the more disciplined agentic engineering professional teams practice.",
      "note": "What vibe coding is, where it breaks down, and how it differs from the more disciplined agentic engineering professional teams practice.",
      "resources": [
        {
          "type": "article",
          "title": "Andrej Karpathy — The Original \"Vibe Coding\" Post",
          "summary": "The February 2025 post that coined the term: give in to the vibes, accept every change, and forget the code exists. It's short, and worth reading in the original since so much gets attributed to it.",
          "url": "https://x.com/karpathy/status/1886192184808149383"
        },
        {
          "type": "article",
          "title": "Simon Willison — Not All AI-Assisted Programming Is Vibe Coding",
          "summary": "The necessary follow-up. Willison separates building without caring about the code from using AI while still reviewing and understanding every line, a distinction that matters the moment something ships to real users.",
          "url": "https://simonwillison.net/2025/Mar/19/vibe-coding/"
        },
        {
          "type": "article",
          "title": "Sourcegraph — Agentic Coding in 2026: A Practical Guide",
          "summary": "How agentic coding differs from autocomplete-style assistance: agents that plan, edit across files, run commands, and check their own work. A good bridge from vibe coding to how engineering teams actually use these tools.",
          "url": "https://sourcegraph.com/blog/agentic-coding"
        },
        {
          "type": "article",
          "title": "Taskade — State of Vibe Coding 2026: Adoption Won. Now What?",
          "summary": "A market snapshot: a $4.7B category, most US developers using AI coding tools daily, and roughly 63% of vibe coders who aren't developers at all. It's vendor-published, so read it as a view of the landscape rather than neutral research.",
          "url": "https://www.taskade.com/blog/state-of-vibe-coding"
        },
        {
          "type": "article",
          "title": "Keyhole Software — Vibe Coding Trends 2026: Adoption, Productivity, and Code Quality Data",
          "summary": "The counterweight to the adoption numbers. Low trust in AI-generated code, rising bug rates, and rescue costs well above original budgets when prompt-driven code ships without architecture review or test gates.",
          "url": "https://keyholesoftware.com/vibe-coding-trends-2026/"
        },
        {
          "type": "article",
          "title": "BGR — Vibe Coding Has a Quality Problem No One Wants to Talk About",
          "summary": "The downstream cost: open source maintainers flooded with low-quality AI submissions, security holes, and code of unclear origin. Useful context for why \"it works on my machine\" isn't the finish line.",
          "url": "https://www.bgr.com/2178548/vibe-coding-dark-side-open-source-bad-code/"
        },
        {
          "type": "article",
          "title": "Digital Trends — Vibecoded Apps Are Flooding Apple's App Store",
          "summary": "What happens when the cost of shipping an app drops to near zero: a flood of look-alike apps, and users tiring of them. Building got easier; building something worth using didn't.",
          "url": "https://www.digitaltrends.com/phones/vibecoded-apps-are-flooding-apples-app-store-and-users-are-getting-sick-of-them/"
        },
        {
          "type": "article",
          "title": "Retool — The Risks of Vibe Coding",
          "summary": "The security vulnerabilities and enterprise pitfalls that show up when nobody is reviewing what ships. Read it before a vibe-coded prototype touches production data.",
          "url": "https://retool.com/blog/vibe-coding-risks"
        },
        {
          "type": "video",
          "title": "Y Combinator — Andrej Karpathy: Software Is Changing (Again)",
          "summary": "Karpathy's Software 3.0 talk: natural language as the new programming interface, and why partial-autonomy tools beat full autonomy for now.",
          "url": "https://www.youtube.com/watch?v=LCEmiRjPEtQ"
        },
        {
          "type": "video",
          "title": "Kevin Stratvert — Vibe Coding Explained for Beginners",
          "summary": "A plain-language walkthrough of what vibe coding is and how to try it, for people who have never written code.",
          "url": "https://www.youtube.com/watch?v=fM_nF84BvOs"
        },
        {
          "type": "video",
          "title": "Google — What Is Vibe Coding?",
          "summary": "A short explainer from Google on the idea and where it fits in how software gets made.",
          "url": "https://www.youtube.com/watch?v=tYhgWRJeYzs"
        },
        {
          "type": "video",
          "title": "Chris Raroque — Vibe Coding Has a Security Problem (and How to Fix It)",
          "summary": "A builder's look at the security mistakes AI-generated apps commonly make, and the checks that catch them.",
          "url": "https://www.youtube.com/watch?v=tK4NQtzfZbM"
        }
      ]
    },
    {
      "id": "app-builders",
      "name": "App Builders",
      "theme": "Chat-to-app tools that take you from idea to a working, deployed prototype fastest. Great for testing ideas; know their limits before building a business on one.",
      "note": "Chat-to-app tools that take you from idea to a working, deployed prototype fastest. Great for testing ideas; know their limits before building a business on one.",
      "resources": [
        {
          "type": "tool",
          "title": "Replit Agent",
          "summary": "Builds and deploys a working app from a conversation, with hosting, database, and auth included. The fastest path from an idea to a live URL.",
          "url": "https://replit.com/products/agent"
        },
        {
          "type": "tool",
          "title": "Lovable",
          "summary": "A chat-to-app builder known for polished front ends, with a native Supabase integration for data and auth. A favorite for PM prototypes that need to look real in front of customers.",
          "url": "https://lovable.dev/"
        },
        {
          "type": "tool",
          "title": "v0 by Vercel",
          "summary": "A UI-first builder that generates React and Next.js code and deploys to Vercel in a click. Strongest when the front end matters most and you want code an engineer can pick up later.",
          "url": "https://v0.app/"
        },
        {
          "type": "tool",
          "title": "Bolt",
          "summary": "A browser-based full-stack builder that runs the whole development environment in a tab. Handy for quick experiments with nothing to install.",
          "url": "https://bolt.new/"
        },
        {
          "type": "tool",
          "title": "Google AI Studio",
          "summary": "Google's Gemini-powered build mode for generating and running apps from a prompt, with a generous free tier. Worth trying for AI-heavy prototypes that call Gemini directly.",
          "url": "https://aistudio.google.com/"
        },
        {
          "type": "article",
          "title": "Paweł Huryn (Product Compass) — AI Prototyping in 2026: Lovable vs. Google AI Studio vs. Claude Design vs. Claude Code",
          "summary": "Huryn compares four prototyping tools and when a PM should reach for each. His larger point: the line between a prototype and a production feature is getting blurry.",
          "url": "https://www.productcompass.pm/p/ai-prototyping-lovable-ai-studio-claude"
        },
        {
          "type": "article",
          "title": "Platformer — Replit's CEO on Building a Company That Can Run Itself",
          "summary": "Amjad Masad on running Replit with internal agents, why he thinks agents will replace many apps, and the launch of Replit Design. Opinionated, and a useful look at where the app builders think this is heading.",
          "url": "https://www.platformer.news/replit-amjad-massad-interview-coding-design-jobs/"
        },
        {
          "type": "video",
          "title": "Jeremy Devz — Lovable vs. Bolt vs. v0 vs. Replit vs. Tempo",
          "summary": "The same UI prompt run through five builders and compared side by side on design quality.",
          "url": "https://www.youtube.com/watch?v=lyGXumMboV4"
        },
        {
          "type": "video",
          "title": "Learn Code With JV — AI Coding Showdown: Replit, v0, Bolt, Lovable",
          "summary": "A head-to-head build across the four most popular app builders, with the trade-offs of each.",
          "url": "https://www.youtube.com/watch?v=IGZVou6JJ4k"
        },
        {
          "type": "video",
          "title": "Sean Matthew — v0 Tutorial: Beginner to Pro in 15 Minutes",
          "summary": "A fast, practical tour of v0 from the first prompt to a finished UI.",
          "url": "https://www.youtube.com/watch?v=Gb3tF3jp4XU"
        },
        {
          "type": "video",
          "title": "Google for Developers — Overview of the New Vibe Coding Experience in AI Studio",
          "summary": "Google's own walkthrough of building an app in AI Studio's build mode.",
          "url": "https://www.youtube.com/watch?v=joa1N3HlDak"
        }
      ]
    },
    {
      "id": "agentic-coding-tools",
      "name": "Agentic Coding Tools",
      "theme": "Agents that work inside a real codebase from the terminal, the IDE, or the cloud. This is where prototypes become maintainable software, and where most engineering teams now work.",
      "note": "Agents that work inside a real codebase from the terminal, the IDE, or the cloud. This is where prototypes become maintainable software, and where most engineering teams now work.",
      "resources": [
        {
          "type": "tool",
          "title": "Claude Code",
          "summary": "Anthropic's terminal-based agentic coding tool. It understands the whole codebase, executes multi-step tasks, runs tests, and handles git.",
          "url": "https://claude.com/product/claude-code"
        },
        {
          "type": "tool",
          "title": "OpenAI Codex",
          "summary": "OpenAI's coding agent, available as a CLI, an IDE extension, and a cloud-hosted agent that can work on several tasks in parallel.",
          "url": "https://openai.com/codex/"
        },
        {
          "type": "tool",
          "title": "Cursor",
          "summary": "An AI-native code editor built around agent mode. The most common starting point for people who want an IDE rather than a terminal.",
          "url": "https://cursor.com/"
        },
        {
          "type": "tool",
          "title": "OpenCode",
          "summary": "An open-source terminal coding agent that works with nearly any model provider. The pick for anyone who wants to avoid lock-in or run local models.",
          "url": "https://opencode.ai/"
        },
        {
          "type": "tool",
          "title": "Gemini CLI",
          "summary": "Google's open-source terminal agent, with a free tier tied to a Google account.",
          "url": "https://github.com/google-gemini/gemini-cli"
        },
        {
          "type": "tool",
          "title": "GitHub Copilot",
          "summary": "The AI pair programmer inside the IDE, plus a coding agent that picks up GitHub issues and opens pull requests.",
          "url": "https://github.com/features/copilot"
        },
        {
          "type": "article",
          "title": "LogRocket — AI Dev Tool Power Rankings & Comparison",
          "summary": "A monthly-updated comparison of AI models and coding tools across features, pricing, and performance. Worth bookmarking, since the rankings shift every few weeks.",
          "url": "https://blog.logrocket.com/ai-dev-tool-power-rankings/"
        },
        {
          "type": "article",
          "title": "The New Stack — The AI Coding Stack Nobody Designed Is Now the One Everyone Uses",
          "summary": "Argues coding tools are settling into layers, orchestration, execution, and review, rather than one winner. That explains why so many teams run Cursor alongside Claude Code or Codex.",
          "url": "https://thenewstack.io/ai-coding-tool-stack/"
        },
        {
          "type": "video",
          "title": "No Code MBA — Claude Code vs Codex vs Cursor: Which One Comes Out on Top?",
          "summary": "A side-by-side test of the three leading coding agents from a non-engineer's point of view.",
          "url": "https://www.youtube.com/watch?v=3EiHbGchA28"
        },
        {
          "type": "video",
          "title": "Jan Marshal — Cursor vs Claude Code vs Codex (I Built the Same App 3 Times)",
          "summary": "One app built three times, comparing speed, quality, and how much steering each tool needs.",
          "url": "https://www.youtube.com/watch?v=OnCep-HlMzI"
        },
        {
          "type": "video",
          "title": "DevOps & AI Toolkit — Terminal Agents: Codex vs. Crush vs. OpenCode vs. Cursor CLI vs. Claude Code",
          "summary": "A deeper comparison of the terminal-based agents, including the open-source options.",
          "url": "https://www.youtube.com/watch?v=MXOP4WELkCc"
        },
        {
          "type": "video",
          "title": "CodeSpace — OpenCode Crash Course",
          "summary": "Setup and first project with OpenCode, the open-source alternative to Codex and Claude Code.",
          "url": "https://www.youtube.com/watch?v=Z-_XZV-TZ0A"
        }
      ]
    },
    {
      "id": "vibe-coding-stack",
      "name": "The Vibe Coding Stack",
      "theme": "What the tools generate under the hood: runtime, framework, hosting, database, and auth. You don't need to write this code, but knowing the pieces makes you far better at directing an agent and debugging when it stalls. The Technology for PMs page covers the fundamentals in more depth.",
      "note": "What the tools generate under the hood: runtime, framework, hosting, database, and auth. You don't need to write this code, but knowing the pieces makes you far better at directing an agent and debugging when it stalls. The Technology for PMs page covers the fundamentals in more depth.",
      "resources": [
        {
          "type": "article",
          "title": "Ravi Mehta — Software Architecture for Non-Technical Builders",
          "summary": "Mehta's premise: you don't need to be a mechanic to drive a car, but when the AI stalls it helps to know what's under the hood. A clear tour of the architecture concepts that matter most for AI-assisted builders.",
          "url": "https://blog.ravi-mehta.com/p/software-architecture"
        },
        {
          "type": "article",
          "title": "Node.js — Introduction to Node.js",
          "summary": "The JavaScript runtime behind most vibe-coded back ends, explained by the project itself. Enough to understand what \"the server\" is actually doing.",
          "url": "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
        },
        {
          "type": "article",
          "title": "Next.js — Learn Next.js",
          "summary": "The free official course for the React framework most app builders and agents default to. Even skimming the first chapters demystifies the folder structure your agent creates.",
          "url": "https://nextjs.org/learn"
        },
        {
          "type": "tool",
          "title": "Vercel",
          "summary": "Hosting and deployment from the makers of Next.js: push to GitHub and the app is live, with a preview link for every change.",
          "url": "https://vercel.com/docs",
          "supportingContent": "**Alternatives:** [Netlify](https://www.netlify.com/), [Render](https://render.com/), [Railway](https://railway.com/)"
        },
        {
          "type": "tool",
          "title": "Supabase",
          "summary": "A Postgres database, authentication, file storage, and APIs in one hosted service, and the default back end for Lovable and many agent-built apps.",
          "url": "https://supabase.com/docs",
          "supportingContent": "**Alternatives:** [Firebase](https://firebase.google.com/), [Neon](https://neon.com/)"
        },
        {
          "type": "article",
          "title": "Paweł Huryn (Product Compass) — Product Engineering for PMs, Part 2: Build a SaaS App Without Coding",
          "summary": "A step-by-step build of a production SaaS app using Claude with GitHub, Supabase, Netlify, and Clerk for auth. The rare guide that covers separate development and production environments.",
          "url": "https://www.productcompass.pm/p/product-engineering-for-pms-part-2"
        },
        {
          "type": "video",
          "title": "Fireship — Next.js in 100 Seconds",
          "summary": "The fastest possible explanation of Next.js, followed by a beginner tutorial.",
          "url": "https://www.youtube.com/watch?v=Sklc_fQBmcs"
        },
        {
          "type": "video",
          "title": "GritAI Studio — How to Vibe Code and Launch Your Next.js + Supabase App on Vercel",
          "summary": "The full default stack wired together end to end, from first prompt to deployed app.",
          "url": "https://www.youtube.com/watch?v=m_GypKCJn0E"
        },
        {
          "type": "video",
          "title": "AppStuff — Supabase vs Firebase: Which Backend Should You Actually Use in 2026?",
          "summary": "The two most common back-end choices compared on data model, pricing, and lock-in.",
          "url": "https://www.youtube.com/watch?v=XYe8mKwMHLg"
        },
        {
          "type": "video",
          "title": "Bella Matasic — Vercel vs Railway vs Render",
          "summary": "A founder's comparison of hosting options, including what went wrong.",
          "url": "https://www.youtube.com/watch?v=qe_auY4cAHU"
        }
      ]
    },
    {
      "id": "agentic-engineering-practices",
      "name": "Agentic Engineering Practices",
      "theme": "Moving from vibes to discipline: context files, specs, harnesses, review, and security. Plus three honest build diaries from people who shipped.",
      "note": "Moving from vibes to discipline: context files, specs, harnesses, review, and security. Plus three honest build diaries from people who shipped.",
      "resources": [
        {
          "type": "article",
          "title": "HumanLayer — Writing a Good CLAUDE.md",
          "summary": "The practical skill behind useful agents: giving them the project context they need up front. Applies to AGENTS.md and similar files in other tools, too.",
          "url": "https://www.humanlayer.dev/blog/writing-a-good-claude-md"
        },
        {
          "type": "article",
          "title": "Anthropic — Claude Code Best Practices",
          "summary": "Anthropic's own guidance on getting reliable results: plan before coding, keep context focused, verify with tests, and know when to start fresh. Most of it transfers to any coding agent.",
          "url": "https://code.claude.com/docs/en/best-practices"
        },
        {
          "type": "article",
          "title": "Simon Willison — Agentic Engineering Patterns",
          "summary": "Willison's running collection of patterns for getting good work out of coding agents, from the most careful public observer of these tools.",
          "url": "https://simonw.substack.com/p/agentic-engineering-patterns"
        },
        {
          "type": "article",
          "title": "Agentic Coding Guide — The Ultimate Guide to Agentic Engineering",
          "summary": "A free course, five modules and 29 lessons, on how engineering teams adopt coding agents. Aimed at teams, but readable for PMs who want to understand the workflow their engineers are moving to.",
          "url": "https://agentic-coding-guide.netlify.app/"
        },
        {
          "type": "article",
          "title": "Stencil — The Harness Playbook",
          "summary": "Explains the \"harness,\" the software around an agent that manages state, tools, and sandboxing, by comparing it to a game engine. Useful vocabulary as harness engineering becomes its own discipline.",
          "url": "https://stencil.so/blog/harness-playbook"
        },
        {
          "type": "article",
          "title": "Cognition — What Does an AI Software Engineer Actually Produce?",
          "summary": "Cognition, the company behind Devin, tries to measure how many engineering hours each agent session is worth. A rare attempt to put real numbers on agent productivity.",
          "url": "https://cognition.com/blog/ai-productivity"
        },
        {
          "type": "article",
          "title": "Shambhavi Pandey — I Vibe Coded a Chore App in 2 Days",
          "summary": "A PM builds a household chore app with Supabase and Vercel and explains what she built, cut, and caught. Her takeaway: when implementation gets cheap, product judgment becomes the advantage.",
          "url": "https://productwithshambhavi.substack.com/p/i-vibe-coded-a-chore-app-in-2-days"
        },
        {
          "type": "article",
          "title": "Martech Zone — I Built a Travel-Tech Startup Solo, Using AI as My Engineering Team",
          "summary": "A PM ships an eSIM marketplace covering 190+ countries in weeks. The lesson he keeps coming back to: the bottleneck isn't code anymore, it's clarity.",
          "url": "https://martech.zone/i-built-a-travel-tech-startup-using-ai/"
        },
        {
          "type": "article",
          "title": "The Founder's Corner — I Made Claude Build My 13-Week Cash Flow Forecast",
          "summary": "Every prompt used to turn messy bank, AR, and AP exports into a scenario-driven cash flow model. A good example of agentic work that isn't an app at all.",
          "url": "https://www.the-founders-corner.com/p/i-made-claude-build-my-13-week-cash"
        },
        {
          "type": "video",
          "title": "Anthropic — Claude Code Best Practices | Code w/ Claude",
          "summary": "Anthropic's team walks through how they get the most out of Claude Code day to day.",
          "url": "https://www.youtube.com/watch?v=gv0WHhKelSE"
        },
        {
          "type": "video",
          "title": "Owain Lewis — How I Code With AI Agents (Spec-Driven Development)",
          "summary": "Writing the spec first and letting the agent build against it, shown on a real project.",
          "url": "https://www.youtube.com/watch?v=RhaF4LVAVng"
        },
        {
          "type": "video",
          "title": "Den Delimarsky — The Only Guide You'll Need for GitHub Spec Kit",
          "summary": "A walkthrough of GitHub's open-source toolkit for spec-driven development, from a member of the Spec Kit team.",
          "url": "https://www.youtube.com/watch?v=a9eR1xsfvHg"
        },
        {
          "type": "video",
          "title": "SiteGround — The Vibe Coding Security Checklist Every Beginner Needs",
          "summary": "The basic security checks to run before anything you build goes public.",
          "url": "https://www.youtube.com/watch?v=S5nc1edKyww"
        }
      ]
    }
  ]
};
