import type { ResourceTopic } from "./resources";

// Initial editorial draft; sources grouped by author or publisher.
export const DESIGN_FOR_PMS: ResourceTopic = {
  "id": "design-for-pms",
  "label": "Design for PMs",
  "width": "standard",
  "tileDescription": "Design helps turn a product idea into an experience people can understand and use.",
  "pageIntro": "Design helps turn a product idea into an experience people can understand and use. These resources help PMs collaborate with designers, evaluate interactions, work with design systems, and include accessibility in everyday product decisions. Start with the principles, then use the references and tools to make the next design conversation more concrete.",
  "reframedPostUrls": [
    "https://fromoutofthenoise.substack.com/p/design-thinking-in-the-age-of-ai",
    "https://fromoutofthenoise.substack.com/p/from-empathy-to-outcomes",
    "https://fromoutofthenoise.substack.com/p/reframed-the-ai-accelerated-design"
  ],
  "subtopics": [
    {
      "id": "design-thinking-collaboration",
      "name": "Design Thinking & Collaboration",
      "theme": "Understand what design contributes, how designers explore a problem, and how PMs can participate in that work.",
      "note": "Understand what design contributes, how designers explore a problem, and how PMs can participate in that work.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Design Council — Framework for Innovation",
          "summary": "The Double Diamond explains the movement between exploring a problem, defining it, developing options, and testing what works. A useful shared picture of design work for PMs and their teams. The framework explicitly allows iteration as new learning changes the problem or solution.",
          "url": "https://www.designcouncil.org.uk/resources/framework-for-innovation/",
          "linkLabel": "Read the guide"
        },
        {
          "type": "article",
          "title": "Julie Zhuo — How to Work with Designers",
          "summary": "A practical perspective on collaborating with designers, giving context, and developing a productive working relationship. Useful before the next design review or when product and design are struggling to agree on how decisions should be made. Medium access may vary.",
          "url": "https://medium.com/the-year-of-the-looking-glass/how-to-work-with-designers-6c975dede146",
          "linkLabel": "Read the article"
        },
        {
          "type": "article",
          "title": "Design Better — Conversations on Design",
          "summary": "Interviews with designers and creative leaders about how they work, make decisions, and build teams. Use the podcast as a way to hear the reasoning behind design practice and broaden the examples you bring to product conversations. Some content requires subscription access.",
          "url": "https://designbetterpodcast.com/",
          "linkLabel": "Explore the podcast"
        },
        {
          "type": "article",
          "title": "Adobe Design — Unexpected Lessons from an AI-Assisted Prototyping Experiment",
          "summary": "A firsthand case study of designers building within a real product codebase and working closely with engineering. Useful for understanding how working prototypes expose interaction details and constraints earlier, and how review and feedback remain part of the process as implementation speeds up.",
          "url": "https://adobe.design/ideas/unexpected-lessons-from-an-ai-assisted-prototyping-experiment",
          "linkLabel": "Read the article"
        },
        {
          "type": "article",
          "title": "Phil Morton — Why Is AI Bad at Design?",
          "summary": "Using examples from his own app, Morton examines why AI-generated interfaces can look plausible while missing clarity, context, and visual judgment. Useful for deciding which parts of design to delegate to AI and where human critique and iteration add value. Read as a practitioner’s perspective on the limits of current tools.",
          "url": "https://www.philmorton.co/why-is-ai-bad-at-design/",
          "linkLabel": "Read the article"
        }
      ]
    },
    {
      "id": "usability-interaction-design",
      "name": "Usability & Interaction Design",
      "theme": "Build a vocabulary for assessing clarity, feedback, hierarchy, navigation, and the effort required to complete a task.",
      "note": "Build a vocabulary for assessing clarity, feedback, hierarchy, navigation, and the effort required to complete a task.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Nielsen Norman Group — 10 Usability Heuristics",
          "summary": "A foundational set of principles for spotting interface problems: unclear system status, inconsistent behavior, preventable errors, and unnecessary memory demands. Use the examples and downloadable poster in a design review, then validate the important questions through research with users.",
          "url": "https://www.nngroup.com/articles/ten-usability-heuristics/",
          "linkLabel": "Read the guide and view the poster",
          "supportingContent": "**Also from NN/g:**\n\n- [Information Architecture Study Guide](https://www.nngroup.com/articles/information-architecture-study-guide/) — Organization, navigation, and findability.\n- [Design Systems 101](https://www.nngroup.com/articles/design-systems-101/) — The components and practices behind consistent experiences.\n- [Tony Alicea — UX-Context Design](https://www.nngroup.com/articles/ux-context-design/) — Curate research findings and interaction standards so AI-generated designs reflect users and their context."
        },
        {
          "type": "article",
          "title": "Jon Yablonski — Laws of UX",
          "summary": "A visual reference to psychological principles that influence perception and interaction. Useful for understanding why a design may feel familiar, demanding, or confusing. Treat these principles as prompts for investigation rather than rules that settle every design decision.",
          "url": "https://lawsofux.com/",
          "linkLabel": "Explore the reference"
        },
        {
          "type": "article",
          "title": "Adam Wathan & Steve Schoger — Refactoring UI",
          "summary": "Concrete examples of improving visual hierarchy, spacing, typography, color, and interface detail. Useful for PMs who can sense that a screen is unclear but need better language to explain why. The book and companion materials are paid; the site offers sample chapters.",
          "url": "https://refactoringui.com/",
          "linkLabel": "Explore the book and samples"
        },
        {
          "type": "article",
          "title": "Jakob Nielsen — The Framing Effect in UX",
          "summary": "Shows how wording and presentation shape decisions in pricing, onboarding, dashboards, and error messages. Useful for reviewing whether an interface helps users understand their options and consequences. The practical examples connect behavioral principles with everyday product and design choices.",
          "url": "https://www.uxtigers.com/post/framing",
          "linkLabel": "Read the article"
        }
      ]
    },
    {
      "id": "design-systems-interface-patterns",
      "name": "Design Systems & Interface Patterns",
      "theme": "Study mature systems to see how teams make recurring design decisions consistent without starting from scratch.",
      "note": "Study mature systems to see how teams make recurring design decisions consistent without starting from scratch.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Google — Material Design",
          "summary": "A detailed system of components, styles, and interaction patterns. Useful as a reference when evaluating common interface behavior or discussing how a team should express its own design language. Apply the principles with attention to the platform and audience.",
          "url": "https://m3.material.io/",
          "linkLabel": "Explore Material Design"
        },
        {
          "type": "article",
          "title": "Apple — Human Interface Guidelines",
          "summary": "Guidance on designing experiences that fit Apple platforms and users’ expectations. Useful for product decisions involving navigation, input, feedback, and platform conventions. Read the relevant platform and component guidance alongside the proposed user flow.",
          "url": "https://developer.apple.com/design/human-interface-guidelines/",
          "linkLabel": "Explore the guidelines"
        },
        {
          "type": "article",
          "title": "GOV.UK — Design System",
          "summary": "An accessible collection of styles, components, and patterns for common service tasks. Particularly useful for forms, validation, and transactional journeys where clarity matters more than novelty. The guidance explains when to use a pattern as well as how it looks.",
          "url": "https://design-system.service.gov.uk/",
          "linkLabel": "Explore the patterns"
        },
        {
          "type": "article",
          "title": "Murphy Trueman — Design Systems Need Evals",
          "summary": "Explores how to check whether AI-generated interfaces follow a design system’s components, tokens, and interaction intent. Useful for discussing quality standards as more people generate UI. Automated checks can catch mechanical inconsistencies while human review remains necessary for the overall experience.",
          "url": "https://blog.murphytrueman.com/design-systems-need-evals/",
          "linkLabel": "Read the article"
        }
      ]
    },
    {
      "id": "accessibility-inclusion-trust",
      "name": "Accessibility, Inclusion & Trust",
      "theme": "Include diverse abilities and circumstances in product decisions, and recognize interface choices that undermine user control.",
      "note": "Include diverse abilities and circumstances in product decisions, and recognize interface choices that undermine user control.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "W3C — How to Meet WCAG",
          "summary": "The authoritative quick reference for web accessibility success criteria and supporting techniques. Useful when turning accessibility goals into concrete requirements and reviewing what a team has implemented. Filter the reference to the relevant version, level, and technology.",
          "url": "https://www.w3.org/WAI/WCAG22/quickref/",
          "linkLabel": "Use the reference"
        },
        {
          "type": "article",
          "title": "The A11Y Project — Accessibility Checklist",
          "summary": "An approachable checklist for reviewing common accessibility concerns across content, structure, interaction, and media. A useful starting point for a team review, supported by explanations and links for further investigation.",
          "url": "https://www.a11yproject.com/checklist/",
          "linkLabel": "Use the checklist"
        },
        {
          "type": "article",
          "title": "Microsoft — Inclusive Design",
          "summary": "A method and toolkit for recognizing exclusion and learning from people with different abilities and experiences. Useful for broadening a design brief beyond an imagined average user. Includes activities, examples, and videos to support team discussion.",
          "url": "https://inclusive.microsoft.design/",
          "linkLabel": "Explore the toolkit",
          "supportingContent": "**Watch:** [An Intro to Inclusive Design](https://www.youtube.com/watch?v=42RojZSB0Yg)."
        },
        {
          "type": "article",
          "title": "Harry Brignull — Deceptive Patterns",
          "summary": "A collection of manipulative interface patterns and examples. Useful for examining consent, cancellation, pricing, and other moments where a business objective can conflict with user understanding and choice.",
          "url": "https://deceptive.design/",
          "linkLabel": "Explore the examples"
        }
      ]
    },
    {
      "id": "design-prototyping-tools",
      "name": "Design & Prototyping Tools",
      "theme": "Choose a tool for the work in front of you: exploring interface ideas, collaborating on detailed designs, testing a flow, or publishing a website. These options cover AI-assisted prototyping, design canvases, and website creation.",
      "note": "Choose a tool for the work in front of you: exploring interface ideas, collaborating on detailed designs, testing a flow, or publishing a website. These options cover AI-assisted prototyping, design canvases, and website creation.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "tool",
          "title": "Figma — Get Started",
          "summary": "Official tutorials for learning the design and collaboration environment many product teams use. Start with navigating files, commenting, and understanding prototypes before moving into creating designs yourself. Product access varies by plan.",
          "url": "https://help.figma.com/hc/en-us/categories/360002051613-Get-started",
          "linkLabel": "Explore the tutorials",
          "supportingContent": "**Also from Figma:** [Figma Make](https://www.figma.com/make/) — Generate interactive prototypes from prompts and design context, then refine them with your team."
        },
        {
          "type": "tool",
          "title": "Google Stitch — AI-Assisted Interface Design",
          "summary": "Explore interface directions through prompts, voice, and existing design material. Useful for PMs making a feature idea concrete or comparing alternatives before a design discussion. Bring the user problem, constraints, and design standards into the conversation, then review the resulting experience with your team.",
          "url": "https://stitch.withgoogle.com/",
          "linkLabel": "Explore Google Stitch",
          "supportingContent": "**Learn more:** [Google’s Stitch overview](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-updates/) — Ways to create, revise, and share designs."
        },
        {
          "type": "tool",
          "title": "Claude Design — Conversational Design & Prototyping",
          "summary": "Turn an idea into screens, flows, and visual designs through conversation, then refine the result. Useful for PMs exploring a feature concept and preparing something concrete for feedback. Providing your team’s design system and product context helps make the output more relevant to the experience you are building.",
          "url": "https://claude.com/product/design",
          "linkLabel": "Explore Claude Design",
          "supportingContent": "**Getting started:** [Claude Design guide](https://support.claude.com/en/articles/14604416-get-started-with-claude-design) — Setup, editing, and available workflows."
        },
        {
          "type": "tool",
          "title": "Penpot — Open-Source Design & Prototyping",
          "summary": "A design platform for teams working on interfaces, prototypes, and reusable components. A useful alternative to evaluate when open-source tooling and collaboration with developers are important to the team.",
          "url": "https://penpot.app/",
          "linkLabel": "Explore Penpot",
          "supportingContent": "**Also from Penpot:** [Agile Design 101](https://penpot.app/blog/agile-design-101-how-teams-build-better-products-faster/) — An introduction to iterative design, cross-functional collaboration, and review as prototyping becomes faster."
        },
        {
          "type": "tool",
          "title": "Paper — A Design Canvas Connected to Code",
          "summary": "A visual design space built on web standards that connects design work with code and AI agents. Worth evaluating as a Figma alternative when your team wants a closer connection between the canvas and implementation. Useful for discussing how components and design decisions travel between designers and engineers.",
          "url": "https://paper.design/",
          "linkLabel": "Explore Paper"
        },
        {
          "type": "tool",
          "title": "Sketch — Interface Design & Prototyping",
          "summary": "An established option for designing interfaces, building prototypes, collaborating, and handing work to developers. Worth evaluating alongside Figma and Penpot when choosing a shared design environment. For PMs, the relevant question is how easily the team can review designs and communicate interaction intent.",
          "url": "https://www.sketch.com/",
          "linkLabel": "Explore Sketch"
        },
        {
          "type": "tool",
          "title": "Framer — Website Design & Publishing",
          "summary": "Combine visual design and AI assistance with website publishing, hosting, and content management. Useful for landing pages, marketing sites, and testing how a product story works on a real page. Its website focus makes it a different choice from a general-purpose interface-design canvas.",
          "url": "https://www.framer.com/",
          "linkLabel": "Explore Framer"
        }
      ]
    }
  ]
};
