import type { ResourceTopic } from "./resources";

// AI for PMs page. Content finalized in Cowork 2026-09-23 (handoff-for-claude-code/ai-for-pms-content.json).
export const AI_EMPOWERED_PM: ResourceTopic = {
  "id": "ai-empowered-pm",
  "label": "Product Management for AI-Empowered PMs",
  "width": "standard",
  "tileDescription": "Apply AI across product work, from research and strategy to decisions and delivery.",
  "pageIntro": "How product managers use AI to do the job better: prototyping ideas, writing specs agents can build from, defining what \"good\" means for AI features, and putting agents to work on their own workflows. Some topics overlap the other AI pages on purpose; here the focus is how the work changes, not how the technology works.",
  "subtopics": [
    {
      "id": "ai-empowered-pm",
      "name": "The AI-Empowered PM",
      "theme": "How the role is changing, which skills matter more, and where the \"full stack builder\" debate lands.",
      "note": "How the role is changing, which skills matter more, and where the \"full stack builder\" debate lands.",
      "resources": [
        {
          "type": "article",
          "title": "Marty Cagan (SVPG) — A Fresh Definition of the Product Role",
          "summary": "Cagan argues the role survives because most people aren't tool builders: the core skill is knowing what should exist and how it should work, not producing it. A grounding read when the job feels like it's dissolving.",
          "url": "https://www.svpg.com/a-fresh-definition-of-the-product-role/"
        },
        {
          "type": "article",
          "title": "Paweł Huryn (Product Compass) — The Ultimate AI Product Manager Roadmap (2026)",
          "summary": "Organized around one question: does the agent run on your work, or inside your product? Covers personal workspace agents, product agents, evals, and AI product leadership.",
          "url": "https://www.productcompass.pm/p/ai-product-manager-roadmap-2026"
        },
        {
          "type": "article",
          "title": "The Skip — Inside Meta's AI-Native PM Playbook",
          "summary": "Meta is replacing long PRDs with a paragraph and a prototype, using agents for status reporting, and hiring for first-principles thinking over technical background. A look at what AI-native PM looks like at a big company.",
          "url": "https://theskip.substack.com/p/how-meta-is-reinventing-product-management"
        },
        {
          "type": "article",
          "title": "Ravi Mehta — The \"Full Stack Builder\" Is a Terrible Idea",
          "summary": "Mehta's counterpoint to the solo-builder trend: AI lets anyone build across disciplines, but speed without collaboration produces work that doesn't deserve customers' attention.",
          "url": "https://blog.ravi-mehta.com/p/the-case-against-the-full-stack-builder"
        },
        {
          "type": "article",
          "title": "Medium — What 638 Practitioner Voices Reveal About PMs' AI Transformation",
          "summary": "An analysis of how PM discourse shifted as AI took over the conversation. Execution is speeding up, new skills like evals are emerging, and core skills like judgment and user empathy are becoming more valuable, not less.",
          "url": "https://medium.com/@haberlah/what-638-practitioner-voices-reveal-about-pms-ai-transformation-7d2fd16be10d"
        },
        {
          "type": "article",
          "title": "Aakash Gupta — The Complete AI Product Manager Transition Guide",
          "summary": "The tactical version of the career question: what changes in the day-to-day work, and how to make the move into AI product management.",
          "url": "https://www.aakashg.com/the-complete-ai-product-manager-transition-guide-2025-edition/"
        },
        {
          "type": "video",
          "title": "Lenny's Podcast — OpenAI's CPO on How AI Changes Must-Have Skills",
          "summary": "Kevin Weil on what product work looks like inside OpenAI and which skills matter most now.",
          "url": "https://www.youtube.com/watch?v=scsW6_2SPC4"
        },
        {
          "type": "video",
          "title": "Lenny's Podcast — How AI Is Reshaping the Product Role",
          "summary": "Oji and Ezinne Udezue on how the PM role and product teams are being reorganized around AI.",
          "url": "https://www.youtube.com/watch?v=e1R_-esuO9o"
        },
        {
          "type": "video",
          "title": "Lenny's Podcast — Why Half of Product Managers Are in Trouble",
          "summary": "Nikhyl Singhal on the PMs who will thrive, the ones who won't, and how to be in the first group.",
          "url": "https://www.youtube.com/watch?v=yUohoaC8_Hs"
        },
        {
          "type": "video",
          "title": "The Skip — Lessons From Three Product Leaders Living in the Future",
          "summary": "Three product leaders on how their teams already work with AI every day.",
          "url": "https://www.youtube.com/watch?v=gSUMFvc8br0"
        }
      ]
    },
    {
      "id": "prototyping-with-ai",
      "name": "Prototyping with AI",
      "theme": "Using AI tools to test ideas with real evidence before committing. The prototype is a question, not a product. The Vibe Coding & Agentic Development page covers the tools themselves.",
      "note": "Using AI tools to test ideas with real evidence before committing. The prototype is a question, not a product. The Vibe Coding & Agentic Development page covers the tools themselves.",
      "resources": [
        {
          "type": "article",
          "title": "Paweł Huryn (Product Compass) — AI Prototyping in 2026: Lovable vs. Google AI Studio vs. Claude Design vs. Claude Code",
          "summary": "A PM's guide to choosing a prototyping tool based on what you're trying to learn. His point that prototypes and production features are converging changes how PMs should think about handoffs.",
          "url": "https://www.productcompass.pm/p/ai-prototyping-lovable-ai-studio-claude"
        },
        {
          "type": "article",
          "title": "The Long Commit — The Prototype Is a Question, Not a Product",
          "summary": "When a proof of concept takes an afternoon instead of days, prototyping becomes part of the decision, not something after it. The warning: a convincing demo can quietly turn into a roadmap commitment before anyone understands what it takes to run.",
          "url": "https://newsletter.thelongcommit.com/p/the-prototype-is-a-question-not-a"
        },
        {
          "type": "article",
          "title": "Slack Design — How I Validated Design Decisions Before Writing Production Code",
          "summary": "A Slack designer uses interactive prototypes and data analysis to stress-test design choices before anything ships. The key shift: teams can finally generate evidence before committing.",
          "url": "https://slack.design/articles/how-i-validated-design-decisions-before-writing-production-code/"
        },
        {
          "type": "article",
          "title": "Adobe Design — Unexpected Lessons from an AI-Assisted Prototyping Experiment",
          "summary": "The Firefly team had designers, engineers, and PMs prototype directly in a production codebase. What they found: collaboration doesn't disappear, it intensifies, and craft still matters.",
          "url": "https://adobe.design/ideas/unexpected-lessons-from-an-ai-assisted-prototyping-experiment"
        },
        {
          "type": "video",
          "title": "Supra Insider — The State of AI Prototyping for Product Managers",
          "summary": "Colin Matthews and Tal Raviv on how PMs are actually using prototyping tools and where they fall short.",
          "url": "https://www.youtube.com/watch?v=FF6fek17t1I"
        },
        {
          "type": "video",
          "title": "Aakash Gupta — We Prototyped 5 Features in 84 Minutes",
          "summary": "Bolt, Cursor, Lovable, Replit, and v0 tested on real PM prototyping tasks.",
          "url": "https://www.youtube.com/watch?v=Gp6tMkCr_0w"
        },
        {
          "type": "video",
          "title": "How I AI — How to Build Prototypes That Actually Look Like Your Product",
          "summary": "Colin Matthews on getting prototypes to match your real design system so feedback is about the idea.",
          "url": "https://www.youtube.com/watch?v=I62dr0TwyZM"
        },
        {
          "type": "video",
          "title": "Aakash Gupta Learnings — The Truth About AI Prototyping for Product Managers",
          "summary": "A candid take on what AI prototyping is good for, and what it isn't.",
          "url": "https://www.youtube.com/watch?v=JK86Fw_g8bg"
        }
      ]
    },
    {
      "id": "specs-prds-sdd",
      "name": "Specs, PRDs & Spec-Driven Development",
      "theme": "Writing for agents and people at the same time: specs that drive code, PRDs for AI features, and what replaces the epic and the user story.",
      "note": "Writing for agents and people at the same time: specs that drive code, PRDs for AI features, and what replaces the epic and the user story.",
      "resources": [
        {
          "type": "article",
          "title": "LinkedIn — What Spec-Driven Development Changed About My Job as a Product Manager",
          "summary": "A PM's first-hand account of how writing specs that agents build from changed their day-to-day work. A practical view of where the PM's writing now sits in the delivery loop.",
          "url": "https://www.linkedin.com/pulse/what-spec-driven-development-changed-my-job-product-manager-lr0rc/"
        },
        {
          "type": "article",
          "title": "Darren Yeo (UX Collective) — From Vibe to Specs: Reclaiming the Design Process with the SAID Framework",
          "summary": "Argues the sequential design process is giving way to a continuous, spec-driven engine built on AI workflows and Git, with team members moving between roles like prototyper and builder instead of fixed handoffs.",
          "url": "https://uxdesign.cc/from-vibe-to-specs-reclaiming-the-design-process-with-said-framework-477a5d0d8932"
        },
        {
          "type": "article",
          "title": "Ant Murphy — Stop Using Epics & User Stories",
          "summary": "Murphy makes the case against the backlog formats most teams inherited from Agile, and for framing work around problems and outcomes instead. More relevant now that specs are increasingly written for agents.",
          "url": "https://www.antmurphy.me/newsletter/stop-using-epics-and-user-stories"
        },
        {
          "type": "article",
          "title": "Anthropic — The AI-Native SDLC Playbook",
          "summary": "How to redesign the development lifecycle when code is no longer the bottleneck, with humans accountable for judgment calls and structured artifacts like intent.md and spec.md carrying the work between stages.",
          "url": "https://claude.com/blog/the-ai-native-sdlc-playbook"
        },
        {
          "type": "tool",
          "title": "GitHub Spec Kit",
          "summary": "GitHub's open-source toolkit for spec-driven development: write the spec, generate a plan, break it into tasks, and let a coding agent implement. A concrete template for what a spec agents can use looks like.",
          "url": "https://github.com/github/spec-kit"
        },
        {
          "type": "tool",
          "title": "Kiro",
          "summary": "An agentic IDE built around specs: it turns a prompt into requirements, a design, and tasks before writing code. Useful for seeing spec-driven development as a product experience.",
          "url": "https://kiro.dev/"
        },
        {
          "type": "article",
          "title": "Department of Product — How Coinbase Automated the Design-to-Dev Handoff with a Single AI Agent",
          "summary": "Coinbase built an agent that turns Figma designs into production code, cutting typical feature delivery from weeks to days. A case study in what happens to the handoff when the spec is the design.",
          "url": "https://departmentofproduct.substack.com/p/how-coinbase-built-an-ai-agent-that"
        },
        {
          "type": "video",
          "title": "Snapper AI — Create PRDs in Minutes with Claude Code & Codex",
          "summary": "Four workflows for drafting PRDs with coding agents.",
          "url": "https://www.youtube.com/watch?v=YsVQcUbEeGU"
        },
        {
          "type": "video",
          "title": "Jordan Urbs — Build Better Apps with AI Using This One Simple Document",
          "summary": "Why a good PRD is the single biggest lever on what an AI builder produces.",
          "url": "https://www.youtube.com/watch?v=MZjW7mlRgdw"
        },
        {
          "type": "video",
          "title": "Fireside Product Management — I Tested 5 AI Tools to Write a PRD",
          "summary": "A side-by-side test of AI tools on the same PRD, with what worked and what didn't.",
          "url": "https://www.youtube.com/watch?v=zvwjfcPKkqU"
        },
        {
          "type": "video",
          "title": "Devoxx — Spec-Driven Development with AI Agents",
          "summary": "Anton Arhipov on going from high-level requirements to working software with agents.",
          "url": "https://www.youtube.com/watch?v=cTJorhnxrFI"
        }
      ]
    },
    {
      "id": "evals-quality-for-pms",
      "name": "Evals & Quality for PMs",
      "theme": "The PM's role in defining \"good\" for products that don't behave the same way twice: success criteria, error analysis, and deciding when something is ready to ship. The AI Product Building Blocks page covers the mechanics of evals.",
      "note": "The PM's role in defining \"good\" for products that don't behave the same way twice: success criteria, error analysis, and deciding when something is ready to ship. The AI Product Building Blocks page covers the mechanics of evals.",
      "resources": [
        {
          "type": "article",
          "title": "Will Murphy — Probabilistic Products",
          "summary": "The philosophical shift: the product discipline built for deterministic software doesn't fully transfer when the same input can produce different outputs. A good frame for why AI features need different specs and different QA.",
          "url": "https://willmurphy.medium.com/probabilistic-products-015870466a40"
        },
        {
          "type": "article",
          "title": "Ravi Mehta — Building AI Products: Lessons from Productboard Spark",
          "summary": "A real case study from a product exec who shipped an AI feature, covering what surprised the team and what they'd do differently. Practice, not theory.",
          "url": "https://blog.ravi-mehta.com/p/building-ai-products-lessons-from"
        },
        {
          "type": "article",
          "title": "Café AI — What Systems Thinking Looks Like for PM'ing AI Products",
          "summary": "Argues that because models are grown rather than designed, AI PMs have to shape the environment a product learns and operates in rather than specify exact outputs.",
          "url": "https://cafeai.home.blog/2026/07/28/what-systems-thinking-looks-like-for-pming-ai-products/"
        },
        {
          "type": "article",
          "title": "Taras Bakusevych (UX Collective) — 39 Principles for Designing Human-AI Interaction",
          "summary": "A framework for AI experiences people can trust, across nine areas from expectation setting and calibrated trust to graceful failure and user control. Many of these belong in the acceptance criteria for an AI feature.",
          "url": "https://uxdesign.cc/39-principles-for-designing-human-ai-interaction-87be5fabdbbe"
        },
        {
          "type": "video",
          "title": "AI Engineer — Shipping AI That Works: An Evaluation Framework for PMs",
          "summary": "Aman Khan of Arize lays out a practical eval framework built for product managers.",
          "url": "https://www.youtube.com/watch?v=2HNSG990Ew8"
        },
        {
          "type": "video",
          "title": "Peter Yang — Complete Beginner's Course on AI Evaluations in 50 Minutes",
          "summary": "Aman Khan walks through setting up evals from scratch, with no ML background assumed.",
          "url": "https://www.youtube.com/watch?v=TL527yTpxlk"
        },
        {
          "type": "video",
          "title": "Product Founder — Mastering AI Evals: The Missing Skill in AI Product Management",
          "summary": "Hamel Husain on why evals have become a core PM skill and how to start.",
          "url": "https://www.youtube.com/watch?v=WjTysfxi5CE"
        },
        {
          "type": "video",
          "title": "Arize AI — How PMs and Engineers Should Collaborate on Evals",
          "summary": "Who owns what in the eval process, and how to split the work.",
          "url": "https://www.youtube.com/watch?v=0B-kETFGUdc"
        }
      ]
    },
    {
      "id": "ai-workflows-for-pm-work",
      "name": "AI Workflows & Agents for PM Work",
      "theme": "Putting AI to work on the PM job itself: research, synthesis, experimentation, writing, and agents that handle the busywork.",
      "note": "Putting AI to work on the PM job itself: research, synthesis, experimentation, writing, and agents that handle the busywork.",
      "resources": [
        {
          "type": "article",
          "title": "Aakash Gupta — AI Agents for Product Managers: The Ultimate Guide",
          "summary": "What agents are, how they differ from chat, the main categories of tools, and how to build custom workflows on no-code platforms. A practical place to start building your own.",
          "url": "https://www.news.aakashg.com/p/ai-agents-pms"
        },
        {
          "type": "article",
          "title": "Tommaso Nervegna — Claude Cowork for Designers: A Working Field Guide",
          "summary": "A hands-on guide to using an agentic desktop tool for research synthesis, competitive audits, and document generation, including setup, skills, and honest limitations. Written for designers, and almost all of it applies to PMs.",
          "url": "https://nervegna.substack.com/p/claude-cowork-for-designers-a-working"
        },
        {
          "type": "article",
          "title": "Meta Engineering — An Organizational Second Brain",
          "summary": "How Meta built an agent that captures specialist knowledge in curated files and improves from expert corrections without retraining the model. A glimpse of where team knowledge management is heading.",
          "url": "https://engineering.fb.com/2026/09/02/ml-applications/organizational-second-brain-ai-learns-from-experts/"
        },
        {
          "type": "article",
          "title": "User Intuition — AI-Moderated Research Just Undercut Traditional Methods on Price and Speed",
          "summary": "Makes the case for AI-moderated interviews that deliver qualitative insight in a day rather than weeks. It's vendor content promoting its own platform, but a clear picture of how research timelines are changing.",
          "url": "https://www.userintuition.ai/posts/best-user-research-platforms-saas-2026/"
        },
        {
          "type": "article",
          "title": "Elena Verna — Your 2022 Experimentation Playbook Is Probably Obsolete",
          "summary": "Verna argues experimentation built around small tweaks and quick wins no longer fits how AI products are built and grown, and that the playbook needs rethinking.",
          "url": "https://www.elenaverna.com/p/the-ai-era-requires-a-different-kind"
        },
        {
          "type": "video",
          "title": "Aakash Gupta — Complete Course: Claude for PMs",
          "summary": "A full course on using Claude's desktop agent and coding tools across PM workflows.",
          "url": "https://www.youtube.com/watch?v=bITUsUsrxjM"
        },
        {
          "type": "video",
          "title": "How I AI — Claude Code for Product Managers",
          "summary": "Research, writing, context libraries, and a custom to-do system, all run from a coding agent.",
          "url": "https://www.youtube.com/watch?v=oBho3hZ7MHM"
        },
        {
          "type": "video",
          "title": "Claude — How Anthropic Uses Claude in Product Management",
          "summary": "Anthropic's own PMs show how they use AI day to day.",
          "url": "https://www.youtube.com/watch?v=91AJ0cpgLlQ"
        },
        {
          "type": "video",
          "title": "n8n — Build Your First AI Agent",
          "summary": "A no-code quick start for building a simple agent that automates a recurring workflow.",
          "url": "https://www.youtube.com/watch?v=GuaKeDS6UKU"
        }
      ]
    }
  ]
};
