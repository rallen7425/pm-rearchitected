import type { ResourceTopic } from "./resources";

// AI for PMs page. Content finalized in Cowork 2026-09-23 (handoff-for-claude-code/ai-for-pms-content.json).
export const AI_PRODUCT_BUILDING_BLOCKS: ResourceTopic = {
  "id": "ai-product-building-blocks",
  "label": "AI Product Building Blocks",
  "width": "standard",
  "tileDescription": "Explore the technology behind AI products: LLMs, agents, RAG, and evals.",
  "pageIntro": "The technical deep dive: how AI products and agents are actually built, connected, tested, and made safe. You won't write most of this yourself, but these are the decisions you'll be in the room for, and the trade-offs you need to understand to make good calls. Read Understanding AI first if the vocabulary is new.",
  "subtopics": [
    {
      "id": "ai-product-architecture",
      "name": "AI Product Architecture",
      "theme": "The layers under a real AI product, from model and context to guardrails and serving, and when to prompt, retrieve, or fine-tune.",
      "note": "The layers under a real AI product, from model and context to guardrails and serving, and when to prompt, retrieve, or fine-tune.",
      "resources": [
        {
          "type": "article",
          "title": "Chip Huyen — Building a Generative AI Platform",
          "summary": "Maps the architecture underneath a mature AI product, adding one layer at a time: context, guardrails, routing, caching, and observability. The best single diagram of where everything fits.",
          "url": "https://huyenchip.com/2024/07/25/genai-platform.html"
        },
        {
          "type": "article",
          "title": "Eugene Yan — Patterns for Building LLM-Based Systems & Products",
          "summary": "A working reference for the recurring patterns in AI products: evals, RAG, fine-tuning, caching, guardrails, and collecting user feedback. Long, and worth keeping open as a reference.",
          "url": "https://eugeneyan.com/writing/llm-patterns/"
        },
        {
          "type": "article",
          "title": "Eugene Yan, Bryan Bischof, Charles Frye, Hamel Husain, Jason Liu & Shreya Shankar — What We Learned from a Year of Building with LLMs",
          "summary": "The most-cited practitioner deep dive: six experienced builders pooling hard-won lessons across tactics, operations, and strategy. Much of today's conventional wisdom traces back here.",
          "url": "https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-i/"
        },
        {
          "type": "article",
          "title": "Towards AI — From AI Demo to AI Product: What Sits Between a Prompt and Production Reality",
          "summary": "Why a prototype that looks 95% done is often 20% done. Walks through the layers a demo skips: latency, input security, permission-aware retrieval, model routing, and quality checks.",
          "url": "https://pub.towardsai.net/from-ai-demo-to-ai-product-what-sits-between-a-prompt-and-production-reality-5d5d2723c7a7"
        },
        {
          "type": "article",
          "title": "Andrew Ng — AI Engineering Skills Map: Building and Deploying AI Applications",
          "summary": "Ng's map of the skills involved in building and deploying AI applications. A useful checklist for what an AI product team needs to be good at.",
          "url": "https://x.com/AndrewYNg/article/2090840747738374568"
        },
        {
          "type": "video",
          "title": "Lenny's Podcast — AI Engineering 101 with Chip Huyen",
          "summary": "Huyen on how AI products are actually built and what PMs most often misunderstand.",
          "url": "https://www.youtube.com/watch?v=qbvY0dQgSJ4"
        },
        {
          "type": "video",
          "title": "The MAD Podcast — What You Must Know About AI Engineering | Chip Huyen",
          "summary": "A second conversation with Huyen, focused on the engineering practices behind reliable AI applications.",
          "url": "https://www.youtube.com/watch?v=p7F4f42iZ-c"
        },
        {
          "type": "video",
          "title": "Outcome School — AI Engineering Explained",
          "summary": "A fast tour of LLMs, RAG, MCP, agents, fine-tuning, and quantization in one sitting.",
          "url": "https://www.youtube.com/watch?v=lnfWvX66FUk"
        },
        {
          "type": "video",
          "title": "IBM Technology — RAG vs Fine-Tuning vs Prompt Engineering",
          "summary": "When to reach for each technique, and why the answer is usually to start with prompting.",
          "url": "https://www.youtube.com/watch?v=zYGDpG-pTho"
        }
      ]
    },
    {
      "id": "building-agents",
      "name": "Building Agents",
      "theme": "Workflows versus agents, the agent loop, multi-agent orchestration, and SDKs, with real internal agents from Block, Ramp, and Uber.",
      "note": "Workflows versus agents, the agent loop, multi-agent orchestration, and SDKs, with real internal agents from Block, Ramp, and Uber.",
      "resources": [
        {
          "type": "article",
          "title": "Anthropic — Building Effective Agents",
          "summary": "The patterns behind agents that actually work, and when a simple workflow beats an agent. The most useful single read on the topic, and refreshingly skeptical of complexity.",
          "url": "https://www.anthropic.com/engineering/building-effective-agents"
        },
        {
          "type": "article",
          "title": "Anthropic — How We Built Our Multi-Agent Research System",
          "summary": "A candid engineering write-up on orchestrating several agents in parallel: what worked, what failed, and what it cost in tokens. Good grounding before anyone proposes a multi-agent design.",
          "url": "https://www.anthropic.com/engineering/multi-agent-research-system"
        },
        {
          "type": "article",
          "title": "Anthropic — Building Agents with the Claude Agent SDK",
          "summary": "How Anthropic turned the harness behind Claude Code into a general SDK for building agents: gather context, take action, verify work, repeat.",
          "url": "https://claude.com/blog/building-agents-with-the-claude-agent-sdk"
        },
        {
          "type": "article",
          "title": "OpenAI — A Practical Guide to Building Agents",
          "summary": "OpenAI's guide to agent design: choosing models, defining tools, writing instructions, orchestration patterns, and guardrails. A good companion to Anthropic's take.",
          "url": "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf"
        },
        {
          "type": "article",
          "title": "Block — Block Rolls Out Builderbot",
          "summary": "Block's orchestration layer coordinates agents across its codebase from Slack, running over 200,000 operations a day and merging about 1,500 pull requests a week. One of the clearest public examples of agents at company scale.",
          "url": "https://block.xyz/inside/block-rolls-out-builderbot-a-new-suite-of-ai-native-tools-that-changes-the-way-we-ship"
        },
        {
          "type": "article",
          "title": "The Pragmatic Engineer — Why Ramp Built Its Own In-House Coding Agent, Inspect",
          "summary": "Why Ramp built an agent that runs in remote sandboxes, connects to company data, and verifies its own changes, rather than relying only on off-the-shelf tools. A useful build-versus-buy case study.",
          "url": "https://newsletter.pragmaticengineer.com/p/why-ramp-built-inspect"
        },
        {
          "type": "article",
          "title": "Uber — Running a Software Factory Efficiently at Uber Scale",
          "summary": "How Uber grew agent usage roughly ninefold in six months while keeping spend steady, through model selection, token discipline, and visibility. The cost side of agents that most write-ups skip.",
          "url": "https://www.uber.com/us/en/blog/efficient-software-factory/"
        },
        {
          "type": "video",
          "title": "AI Engineer — How We Build Effective Agents: Barry Zhang, Anthropic",
          "summary": "The co-author of Building Effective Agents on when to build one and how to keep it simple.",
          "url": "https://www.youtube.com/watch?v=D7_ipDqhtwk"
        },
        {
          "type": "video",
          "title": "AI Engineer — Don't Build Agents, Build Skills Instead",
          "summary": "Barry Zhang and Mahesh Murag on packaging expertise as reusable skills rather than new agents.",
          "url": "https://www.youtube.com/watch?v=CEvIs9y1uog"
        },
        {
          "type": "video",
          "title": "Anthropic — Building More Effective AI Agents",
          "summary": "Anthropic's team on what they've learned building agents since the original guide.",
          "url": "https://www.youtube.com/watch?v=uhJJgc-0iTQ"
        },
        {
          "type": "video",
          "title": "Matt Palmer — Build & Deploy Agents with the Claude Agent SDK",
          "summary": "A hands-on walkthrough from first agent to deployment.",
          "url": "https://www.youtube.com/watch?v=jNpH_hOFvg4"
        }
      ]
    },
    {
      "id": "tools-mcp-integrations",
      "name": "Tools, MCP & Integrations",
      "theme": "How agents act in the world: tool calling, MCP servers, skills, agent-to-agent protocols, and the new rails for agentic payments.",
      "note": "How agents act in the world: tool calling, MCP servers, skills, agent-to-agent protocols, and the new rails for agentic payments.",
      "resources": [
        {
          "type": "article",
          "title": "Anthropic — Writing Effective Tools for AI Agents",
          "summary": "Tools are the interface between an agent and your product, and this is the guide to designing them well: clear names, focused scope, and useful error messages. Directly relevant to any PM whose product will be used by agents.",
          "url": "https://www.anthropic.com/engineering/writing-tools-for-agents"
        },
        {
          "type": "article",
          "title": "Anthropic — Introducing Claude Skills",
          "summary": "Skills package instructions, scripts, and resources into folders an agent loads only when needed. A simple idea that changes how teams share expertise with agents.",
          "url": "https://www.anthropic.com/news/skills"
        },
        {
          "type": "article",
          "title": "Google — Announcing the Agent2Agent Protocol (A2A)",
          "summary": "Google's open protocol for agents from different vendors to discover each other and work together. Where MCP connects agents to tools, A2A connects agents to agents.",
          "url": "https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/"
        },
        {
          "type": "article",
          "title": "Fintech Takes — The Primary Banking Agent",
          "summary": "On what happens to the primary banking relationship when an AI agent, not the customer, manages money on someone's behalf. A useful lens for any regulated product that agents will act on.",
          "url": "https://fintechtakes.com/articles/2026-07-29/the-primary-banking-agent/"
        },
        {
          "type": "article",
          "title": "Rain — Rain Launches the Agentic Payments Alliance",
          "summary": "A coalition of 25+ companies, including Visa, Mastercard, and Solana, working on standards for agent authorization, fraud prevention, and rewards in agent-driven commerce.",
          "url": "https://www.rain.xyz/resources/rain-launches-the-agentic-payments-alliance"
        },
        {
          "type": "article",
          "title": "PYMNTS — Mastercard Launches Agent Connect",
          "summary": "Mastercard's single integration for merchants, agents, and payment providers to transact, with merchants keeping control over how products are represented. A concrete look at how commerce is being rebuilt for agents.",
          "url": "https://www.pymnts.com/news/artificial-intelligence/2026/mastercard-expands-agentic-suite-to-help-merchants-scale-ai-shopping/"
        },
        {
          "type": "video",
          "title": "AI Engineer — Building Agents with Model Context Protocol",
          "summary": "A full workshop with Mahesh Murag of Anthropic on building with MCP.",
          "url": "https://www.youtube.com/watch?v=kQmXtrmQ5Zg"
        },
        {
          "type": "video",
          "title": "IBM Technology — What Is Tool Calling?",
          "summary": "How LLMs call external tools and data, the mechanism every agent depends on.",
          "url": "https://www.youtube.com/watch?v=h8gMhXYAv1k"
        },
        {
          "type": "video",
          "title": "IBM Technology — CLI vs MCP: How AI Agents Choose the Right Tool",
          "summary": "When an agent should use a command line versus an MCP server, and why it matters.",
          "url": "https://www.youtube.com/watch?v=g9JIUM0MHgQ"
        },
        {
          "type": "video",
          "title": "IBM Technology — A2A Protocol Explained",
          "summary": "How the Agent2Agent protocol lets agents from different vendors collaborate.",
          "url": "https://www.youtube.com/watch?v=Tud9HLTk8hg"
        }
      ]
    },
    {
      "id": "evals-observability",
      "name": "Evals & Observability",
      "theme": "How you know an AI product works: error analysis, test sets, LLM-as-judge, and monitoring in production. The PM for AI-Empowered PMs page covers the PM's role in evals.",
      "note": "How you know an AI product works: error analysis, test sets, LLM-as-judge, and monitoring in production. The PM for AI-Empowered PMs page covers the PM's role in evals.",
      "resources": [
        {
          "type": "article",
          "title": "Hamel Husain & Shreya Shankar — AI Evals: Everything You Need to Know",
          "summary": "The foundational FAQ on measuring AI product quality with something more rigorous than vibes, from the two people who teach the most popular course on the subject. Start with error analysis, not metrics.",
          "url": "https://hamel.dev/blog/posts/evals-faq/"
        },
        {
          "type": "article",
          "title": "Teresa Torres — AI Evals: A Hands-On Guide for Product Teams",
          "summary": "Torres' three-step process: find the errors your model makes, pick the right way to count how often each happens, then run experiments to improve. Written for product teams rather than ML engineers.",
          "url": "https://www.producttalk.org/ai-evals/"
        },
        {
          "type": "article",
          "title": "Lenny Rachitsky — Building Eval Systems That Improve Your AI Product",
          "summary": "A practitioner view of what an eval system looks like day to day, beyond the theory. Pairs well with the Husain and Shankar FAQ.",
          "url": "https://www.lennysnewsletter.com/p/building-eval-systems-that-improve"
        },
        {
          "type": "article",
          "title": "Murphy Trueman — Design Systems Need Evals",
          "summary": "Applies eval thinking to design systems: automated checks in CI that confirm AI agents actually follow the rules they've been given. A good example of evals spreading well beyond chatbots.",
          "url": "https://blog.murphytrueman.com/design-systems-need-evals/"
        },
        {
          "type": "tool",
          "title": "Braintrust, LangSmith & Arize Phoenix",
          "summary": "The most common platforms for running evals and tracing what an AI product does in production. Worth a look to understand what your engineers are setting up.",
          "url": "https://www.braintrust.dev/",
          "supportingContent": "**Alternatives:** [LangSmith](https://www.langchain.com/langsmith), [Arize Phoenix](https://phoenix.arize.com/)"
        },
        {
          "type": "video",
          "title": "Lenny's Podcast — Why AI Evals Are the Hottest New Skill for Product Builders",
          "summary": "Hamel Husain and Shreya Shankar explain evals from the ground up.",
          "url": "https://www.youtube.com/watch?v=BsWxPI9UM4c"
        },
        {
          "type": "video",
          "title": "Peter Yang — AI Evaluations Clearly Explained in 50 Minutes",
          "summary": "Husain walks through a real eval process on a real product, start to finish.",
          "url": "https://www.youtube.com/watch?v=uiza7wp1KrE"
        },
        {
          "type": "video",
          "title": "IBM Technology — LLM as a Judge: Scaling AI Evaluation Strategies",
          "summary": "How teams use one model to grade another, and where that approach breaks.",
          "url": "https://www.youtube.com/watch?v=trfUBIDeI1Y"
        },
        {
          "type": "video",
          "title": "AI Engineer — The Future of Evals: From LLM as a Judge to Agent as a Judge",
          "summary": "Aparna Dhinakaran of Arize on evaluating agents, not just single responses.",
          "url": "https://www.youtube.com/watch?v=q2JrUKBMf0w"
        }
      ]
    },
    {
      "id": "guardrails-safety-model-choice",
      "name": "Guardrails, Safety & Model Choice",
      "theme": "Prompt injection, guardrails, and trust, plus how to choose models on capability, cost, and compliance.",
      "note": "Prompt injection, guardrails, and trust, plus how to choose models on capability, cost, and compliance.",
      "resources": [
        {
          "type": "article",
          "title": "OWASP — Top 10 for LLM Applications",
          "summary": "The security community's list of the biggest risks in LLM products, from prompt injection to excessive agency. The checklist to bring to any AI security review.",
          "url": "https://genai.owasp.org/llm-top-10/"
        },
        {
          "type": "article",
          "title": "Simon Willison — Prompt Injection",
          "summary": "Willison coined the term and has tracked it ever since. His archive explains why prompt injection is so hard to solve, and why agents that read untrusted content and take actions are especially exposed.",
          "url": "https://simonwillison.net/tags/prompt-injection/"
        },
        {
          "type": "article",
          "title": "Artificial Analysis — Model Leaderboards",
          "summary": "Independent comparisons of models on intelligence, speed, and price. The quickest way to sanity-check a model choice before committing a feature to it.",
          "url": "https://artificialanalysis.ai/"
        },
        {
          "type": "article",
          "title": "SaaS Capital — Trust Is the True Moat: What AI Is Actually Changing for SaaS",
          "summary": "Argues that AI won't displace strong SaaS vendors that add it thoughtfully, because the real advantage is the trust built with customers over time. A useful reminder that safety and reliability are strategy, not just engineering.",
          "url": "https://www.saas-capital.com/blog-posts/trust-is-the-true-moat-what-ai-is-actually-changing-for-saas/"
        },
        {
          "type": "video",
          "title": "Simon Willison — Prompt Injection, Explained",
          "summary": "The person who named the attack explains how it works and why it's so hard to prevent.",
          "url": "https://www.youtube.com/watch?v=FgxwCaL6UTA"
        },
        {
          "type": "video",
          "title": "IBM Technology — What Is a Prompt Injection Attack?",
          "summary": "A short, clear explainer on the attack and common defenses.",
          "url": "https://www.youtube.com/watch?v=jrHRe9lSqqA"
        },
        {
          "type": "video",
          "title": "Pentest Diaries — AI Guardrails Explained: How to Secure LLMs & AI Agents",
          "summary": "What guardrails are and how they're layered around models and agents.",
          "url": "https://www.youtube.com/watch?v=lvEKJhYI0_Q"
        },
        {
          "type": "video",
          "title": "Arize AI — AI with Assurance: Combining Guardrails and LLM Evaluations",
          "summary": "How guardrails and evals work together to keep an AI product reliable in production.",
          "url": "https://www.youtube.com/watch?v=gXdBwgVZ_Ho"
        }
      ]
    }
  ]
};
