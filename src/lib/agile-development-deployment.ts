import type { ResourceTopic } from "./resources";

// Initial editorial draft; sources grouped by author or publisher.
export const AGILE_DEVELOPMENT_DEPLOYMENT: ResourceTopic = {
  "id": "agile-development-deployment",
  "label": "Agile, Development & Deployment",
  "width": "standard",
  "tileDescription": "Product delivery turns a direction into working software and a reliable customer experience.",
  "pageIntro": "Product delivery turns a direction into working software and a reliable customer experience. These resources cover Agile principles, shaping and sequencing work, collaborating across teams, continuous delivery, and learning from releases. The goal is a team that can adapt while maintaining quality and making credible commitments.",
  "reframedPostUrls": [
    "https://fromoutofthenoise.substack.com/p/reframed-agile-and-the-manifesto",
    "https://fromoutofthenoise.substack.com/p/reframed-managing-cross-team-dependencies"
  ],
  "subtopics": [
    {
      "id": "agile-principles-ways-of-working",
      "name": "Agile Principles & Ways of Working",
      "theme": "Start with the values behind iterative delivery, then compare approaches in the context of the work your team actually does.",
      "note": "Start with the values behind iterative delivery, then compare approaches in the context of the work your team actually does.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "The Agile Manifesto — Values & Principles",
          "summary": "Read the original values before choosing ceremonies or tools. The manifesto puts working software, collaboration, and responsiveness at the center of development. Its supporting principles give teams a useful basis for examining whether their process helps them deliver and learn.",
          "url": "https://agilemanifesto.org/",
          "linkLabel": "Read the manifesto",
          "supportingContent": "**Also read:** [The twelve principles](https://agilemanifesto.org/principles.html)."
        },
        {
          "type": "article",
          "title": "Atlassian — Agile, Planning & Software Delivery Guides",
          "summary": "An extensive learning library covering Agile principles and the practices teams use to plan, build, and release software. Start with the Agile overview, then use the focused guides below as practical references for team discussions. Many examples use Atlassian products, but the concepts apply across toolsets.",
          "url": "https://www.atlassian.com/agile",
          "linkLabel": "Read the Agile overview",
          "supportingContent": "**More from Atlassian:**\n\n- [Scrum](https://www.atlassian.com/agile/scrum) — Roles, events, and iterative delivery.\n- [Kanban](https://www.atlassian.com/agile/kanban) — Visualizing work and managing flow.\n- [Sprint Planning](https://www.atlassian.com/agile/scrum/sprint-planning) — Preparing the next increment of team work.\n- [Product Development Strategy](https://www.atlassian.com/agile/product-management/product-development-strategy) — Connecting market needs, research, testing, and launch."
        },
        {
          "type": "article",
          "title": "Ken Schwaber & Jeff Sutherland — The Scrum Guide",
          "summary": "The primary definition of Scrum’s accountabilities, events, artifacts, and commitments. Useful for separating the framework from local practices that have accumulated around it and for clarifying what a Product Owner is responsible for.",
          "url": "https://scrumguides.org/scrum-guide.html",
          "linkLabel": "Read the guide"
        },
        {
          "type": "article",
          "title": "Kanban Guides — The Kanban Guide",
          "summary": "A concise introduction to defining and improving workflow, controlling work in progress, and using flow measures. Useful when work waits between people or stages and starting more work is making completion less predictable.",
          "url": "https://kanbanguides.org/the-kanban-guide/2025.5/",
          "linkLabel": "Read the guide"
        },
        {
          "type": "article",
          "title": "Ryan Singer / Basecamp — Shape Up",
          "summary": "A free online book about shaping work, setting an appetite, making bets, and giving teams room to solve a bounded problem. Useful as a complementary delivery model and as a source of practical ideas about scope and uncertainty.",
          "url": "https://basecamp.com/shapeup",
          "linkLabel": "Read the free book"
        },
        {
          "type": "article",
          "title": "Age of Product — Agile to Product Operating Model Survey Results",
          "summary": "A practitioner perspective on whether changing an operating model changes decision authority, evidence, and customer outcomes. Useful for reflecting on what has actually changed in your own team. The survey has 48 self-selected respondents, so its findings are directional rather than representative.",
          "url": "https://age-of-product.com/agile-product-operating-model-survey-results/",
          "linkLabel": "Read the article"
        }
      ]
    },
    {
      "id": "shaping-slicing-planning-work",
      "name": "Shaping, Slicing & Planning Work",
      "theme": "Make work small enough to learn from, clear enough to begin, and flexible enough to adapt as the team discovers details.",
      "note": "Make work small enough to learn from, clear enough to begin, and flexible enough to adapt as the team discovers details.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Jeff Patton — Story Mapping Quick Reference",
          "summary": "A compact reference for mapping user activities and slicing work around an experience people can actually use. Useful in planning discussions that have become lists of disconnected tickets. The downloadable two-page guide can support a collaborative workshop.",
          "url": "https://jpattonassociates.com/story-mapping-quick-ref/",
          "linkLabel": "Read and download the reference",
          "supportingContent": "**Also from Jeff Patton:** [Dual Track Development Is Not Duel Track](https://jpattonassociates.com/dual-track-development/) — How discovery and delivery work together."
        },
        {
          "type": "video",
          "title": "Henrik Kniberg — Agile Product Ownership in a Nutshell",
          "summary": "A visual introduction to product ownership, balancing demand against capacity, and making prioritization decisions as a team learns. Useful for aligning stakeholders on why a backlog needs choices and why smaller increments create opportunities for feedback.",
          "url": "https://www.youtube.com/watch?v=502ILHjX9EE",
          "linkLabel": "Watch the video"
        },
        {
          "type": "article",
          "title": "Ant Murphy — Stop Using Epics & User Stories",
          "summary": "A challenge to backlog discussions dominated by ticket categories. Murphy proposes organizing conversations around outcomes, opportunities, and experiments. Read alongside story mapping to examine whether your planning artifacts help the team identify a problem and the smallest useful next step.",
          "url": "https://www.antmurphy.me/newsletter/stop-using-epics-and-user-stories",
          "linkLabel": "Read the article"
        }
      ]
    },
    {
      "id": "team-collaboration-continuous-improvement",
      "name": "Team Collaboration & Continuous Improvement",
      "theme": "Look at dependencies, work flow, and team learning when delivery is slow or difficult to predict.",
      "note": "Look at dependencies, work flow, and team learning when delivery is slow or difficult to predict.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Team Topologies — Key Concepts",
          "summary": "Introduces team types, interaction modes, and cognitive load as ways to reason about organizational design. Useful when a team’s biggest constraint is coordination with other teams or a platform that is difficult to consume.",
          "url": "https://teamtopologies.com/key-concepts",
          "linkLabel": "Read the guide"
        },
        {
          "type": "article",
          "title": "Atlassian — Team Playbook",
          "summary": "Facilitated exercises for improving team agreements, decision-making, and collaboration. Useful when a team needs a practical session with a concrete outcome rather than another abstract discussion about working better together.",
          "url": "https://www.atlassian.com/team-playbook/plays",
          "linkLabel": "Explore the plays"
        },
        {
          "type": "tool",
          "title": "Retromat — Retrospective Activities",
          "summary": "A collection of activities for planning retrospectives around a specific purpose. Useful for varying the discussion format while keeping attention on what the team will change and revisit after the next cycle.",
          "url": "https://retromat.org/en/",
          "linkLabel": "Explore the activities"
        }
      ]
    },
    {
      "id": "continuous-integration-delivery-release",
      "name": "Continuous Integration, Delivery & Release",
      "theme": "Understand the engineering practices that make small, frequent changes possible and help separate deploying software from releasing it to customers.",
      "note": "Understand the engineering practices that make small, frequent changes possible and help separate deploying software from releasing it to customers.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Martin Fowler — Continuous Integration",
          "summary": "Explains frequent integration, automated builds, and rapid feedback on changes. Useful for PMs trying to understand why engineering teams invest in delivery infrastructure and why long-lived branches can create late surprises.",
          "url": "https://martinfowler.com/articles/continuousIntegration.html",
          "linkLabel": "Read the article",
          "supportingContent": "**Also on MartinFowler.com:** [Pete Hodgson — Feature Toggles](https://martinfowler.com/articles/feature-toggles.html) — Release controls, uses, and the complexity they introduce."
        },
        {
          "type": "article",
          "title": "Trunk Based Development — Introduction",
          "summary": "A practical explanation of collaborating around a shared mainline with frequent integration. Useful for understanding the relationship between branching practices, review, testing, and the ability to release safely.",
          "url": "https://trunkbaseddevelopment.com/",
          "linkLabel": "Read the guide"
        },
        {
          "type": "article",
          "title": "The Twelve-Factor App — Deployable Applications",
          "summary": "A compact set of principles covering configuration, dependencies, processes, environments, and logs. Useful for understanding what makes a service easier to deploy and operate consistently as it grows.",
          "url": "https://12factor.net/",
          "linkLabel": "Read the methodology"
        },
        {
          "type": "article",
          "title": "Atlassian — Continuous Delivery",
          "summary": "A practical guide to release pipelines, automation, and the collaboration needed to keep software ready to ship. Useful for understanding how changes move from development through testing to release, and where a team may choose to retain a manual release decision.",
          "url": "https://www.atlassian.com/continuous-delivery",
          "linkLabel": "Read the guide",
          "supportingContent": "**Also from Atlassian:** [Continuous Integration](https://www.atlassian.com/continuous-delivery/continuous-integration) — Integrating changes and getting automated feedback."
        }
      ]
    },
    {
      "id": "quality-reliability-delivery-performance",
      "name": "Quality, Reliability & Delivery Performance",
      "theme": "Assess delivery as a system: how changes reach customers, how reliably the product works, and how the team responds when something goes wrong.",
      "note": "Assess delivery as a system: how changes reach customers, how reliably the product works, and how the team responds when something goes wrong.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "DORA — Software Delivery Capabilities",
          "summary": "Research-backed guidance on practices associated with effective software delivery. Useful for discussing improvements in testing, deployment, team culture, and feedback. Use measures to understand a team’s system over time rather than ranking individual developers.",
          "url": "https://dora.dev/capabilities/",
          "linkLabel": "Explore the capability guides",
          "supportingContent": "**Also from DORA:** [Research library](https://dora.dev/research/) — Reports and further evidence on software delivery."
        },
        {
          "type": "article",
          "title": "Google — Site Reliability Engineering Books",
          "summary": "Free books on operating reliable services, including service-level objectives, error budgets, incident response, and learning from failure. Useful for PMs balancing new functionality with reliability work and deciding what service quality customers need.",
          "url": "https://sre.google/books/",
          "linkLabel": "Read the free books"
        },
        {
          "type": "article",
          "title": "Itamar Gilad — How to Measure Development Productivity?",
          "summary": "Examines why code volume, pull requests, and shipped features are weak signals of product value. Useful when choosing delivery measures or assessing claims about AI productivity. It adds an outcome-focused perspective to operational measures of how reliably and quickly software reaches customers.",
          "url": "https://itamargilad.com/how-dev-productivity/",
          "linkLabel": "Read the article"
        }
      ]
    }
  ]
};
