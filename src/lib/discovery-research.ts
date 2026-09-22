import type { ResourceTopic } from "./resources";

// Page copy from discovery-research-resources-draft.md; editorial appendix excluded.
export const DISCOVERY_RESEARCH: ResourceTopic = {
  "id": "discovery-research",
  "label": "Discovery & Research",
  "width": "standard",
  "tileDescription": "Understand customers, uncover real needs, and learn through research, experiments, and ongoing feedback.",
  "pageIntro": "Discovery helps product teams decide which problems deserve attention, what might solve them, and what the evidence says to do next. It reaches from understanding a market and its customers through testing concepts, improving usability, and learning from products already in use. These resources cover the frameworks, research skills, practical templates, and tools that make that learning part of everyday product work.",
  "subtopics": [
    {
      "id": "understanding-discovery",
      "name": "Understanding Discovery",
      "theme": "Start with Teresa Torres’s Continuous Discovery Habits and Cagan’s four product risks, then explore complementary perspectives on customer learning, research, team collaboration, and focused experiments. These approaches help connect evidence to decisions throughout the product lifecycle.",
      "note": "Start with Teresa Torres’s Continuous Discovery Habits and Cagan’s four product risks, then explore complementary perspectives on customer learning, research, team collaboration, and focused experiments. These approaches help connect evidence to decisions throughout the product lifecycle.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Teresa Torres / Product Talk — Product Discovery Basics",
          "summary": "The starting point for Continuous Discovery Habits: a product trio staying connected to customers, identifying opportunities, and testing assumptions as it works toward an outcome. Read the overview first, then use the supporting guides to put the habits into practice. Keep the emphasis on learning and decisions as you adopt the visual artifacts.",
          "url": "https://www.producttalk.org/product-discovery/",
          "linkLabel": "Read the guide",
          "supportingContent": "**Go deeper with Teresa Torres:**\n\n- [Continuous Discovery Habits](https://www.producttalk.org/continuous-discovery-habits/) — The book and the author’s introduction. Paid book.\n- [Opportunity Solution Trees](https://www.producttalk.org/opportunity-solution-trees/) — Connect outcomes, opportunities, solutions, and tests.\n- [The Interview Snapshot](https://www.producttalk.org/interview-snapshot/) — A practical format for synthesizing and sharing one customer conversation.\n- [Assumption Testing](https://www.producttalk.org/assumption-testing/) — Identify and test the assumptions behind possible solutions.\n- [The What & Why of Continuous Discovery](https://www.youtube.com/watch?v=0E1fC9nECiQ) — Stanford seminar recording.\n- [Continuous Discovery Mindsets](https://www.producttalk.org/continuous-discovery-mindsets/) — A talk and written treatment of the mindset behind the habits."
        },
        {
          "type": "article",
          "title": "Marty Cagan / SVPG — The Four Big Risks",
          "summary": "Frames discovery around value, usability, feasibility, and business viability. It helps teams ask whether they have evidence for the whole product decision, including the parts a successful usability test cannot settle. Useful for involving design, engineering, and business partners in discovery.",
          "url": "https://www.svpg.com/four-big-risks/",
          "linkLabel": "Read the article",
          "supportingContent": "**Also from SVPG:** [Continuous Discovery](https://www.svpg.com/continuous-discovery/) — The case for learning as an ongoing product-team responsibility."
        },
        {
          "type": "article",
          "title": "Ant Murphy — Exploring vs. Exploiting: The Two Modes of Product Discovery",
          "summary": "A useful distinction between discovering unfamiliar opportunities and developing a better understanding of opportunities already in view. This helps broaden discovery beyond optimizing existing features and makes room for market learning, observation, and open-ended customer conversations.",
          "url": "https://www.antmurphy.me/newsletter/exploring-vs-exploiting-the-two-modes-of-product-discovery",
          "linkLabel": "Read the article",
          "supportingContent": "**Also from Ant Murphy:**\n\n- [Breaking Product Discovery into First Principles](https://www.antmurphy.me/newsletter/introduction-to-product-discovery) — An introductory companion from the bookmark collection.\n- [Dual Track: Continuous Discovery & Delivery](https://www.antmurphy.me/newsletter/dual-track-continuous-discovery-amp-delivery) — Connects ongoing learning with delivery."
        },
        {
          "type": "article",
          "title": "Erika Hall — You Can’t Do Enough",
          "summary": "A concise explanation of what “just enough research” means: answering the right questions well enough to make informed decisions within real constraints. Hall puts responsibility on the organization’s decision-making practices, making this valuable for PMs trying to ensure research changes what their team does.",
          "url": "https://www.muledesign.com/blog/enough",
          "linkLabel": "Read the article",
          "supportingContent": "**Also from Erika Hall:** [Just Enough Research, updated edition](https://www.muledesign.com/blog/you-need-more-enough) — The author’s introduction to the expanded book and a route to the current edition. Paid book."
        },
        {
          "type": "article",
          "title": "Paweł Huryn / Product Compass — What Is Product Discovery in the AI Era?",
          "summary": "A contemporary perspective on discovery when prototypes and small product changes can be built quickly. Useful for discussing when a live, instrumented change can answer a question and when interviews or separate experiments remain necessary. Treat the author’s fast-shipping examples as context-dependent practices, especially for products with significant operational or customer risk.",
          "url": "https://www.productcompass.pm/p/product-discovery-2026",
          "linkLabel": "Read the guide"
        },
        {
          "type": "article",
          "title": "Jeff Patton — Dual Track Development Is Not Duel Track",
          "summary": "Explains how discovery and delivery fit together within a collaborative product team. Particularly useful when “dual track” has become a handoff between a group that specifies features and another group that builds them. Read it with the team when defining how research and implementation will inform one another.",
          "url": "https://jpattonassociates.com/dual-track-development/",
          "linkLabel": "Read the article"
        },
        {
          "type": "article",
          "title": "Bob Moesta / Intercom — Unpacking Customer Motivations with Jobs-to-Be-Done",
          "summary": "An interview about understanding the circumstances and motivations behind a customer’s decision to change. Useful when demographic personas or lists of requested features leave the team unable to explain why someone would adopt a product, switch from an alternative, or stay with a workaround.",
          "url": "https://www.intercom.com/blog/podcasts/bob-moesta-on-unpacking-customer-motivations-with-jobs-to-be-done/",
          "linkLabel": "Listen or read the transcript",
          "supportingContent": "**Also from Intercom:**\n\n- [Designing Features Using Job Stories](https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/) — Translate customer context and motivation into a useful design input.\n- [Jobs-to-Be-Done presentation — Sian Townsend](https://www.intercom.com/blog/wp-content/uploads/2016/05/Sian-Townsend-Intercom-Front-conference.pdf) — Conference slides as an alternative format."
        },
        {
          "type": "article",
          "title": "Jake Knapp & John Zeratsky — Sprint",
          "summary": "A structured approach to moving from an important question to a prototype and customer feedback in a focused sprint. Useful for a consequential concept or unresolved team debate. A sprint is one tool within an ongoing discovery practice; learning from one prototype still needs to be followed through in subsequent product decisions.",
          "url": "https://www.character.vc/sprint",
          "linkLabel": "Explore the sprint guide"
        }
      ]
    },
    {
      "id": "research-discovery-in-practice",
      "name": "Research & Discovery in Practice",
      "theme": "These resources help with the work itself: choosing a method, asking better questions, observing behavior, and deciding what the findings support. Combine customer accounts with observed behavior and product data when the decision calls for it. AI can help organize material, but the team still needs to inspect the underlying evidence.",
      "note": "These resources help with the work itself: choosing a method, asking better questions, observing behavior, and deciding what the findings support. Combine customer accounts with observed behavior and product data when the decision calls for it. AI can help organize material, but the team still needs to inspect the underlying evidence.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Nielsen Norman Group — When to Use Which User-Experience Research Methods",
          "summary": "A practical map for selecting a research method based on the question. It distinguishes attitudes from behavior, qualitative from quantitative approaches, and different contexts of use. Especially useful before defaulting to another survey or round of interviews simply because that is the method the team knows best.",
          "url": "https://www.nngroup.com/articles/which-ux-research-methods/",
          "linkLabel": "Read the guide",
          "supportingContent": "**Also from Nielsen Norman Group:**\n\n- [User Interviews 101](https://www.nngroup.com/articles/user-interviews/) — Preparation, questions, follow-up, and the limits of self-reported behavior.\n- [Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/) — Observe participants attempting tasks with a design."
        },
        {
          "type": "article",
          "title": "Rob Fitzpatrick — The Mom Test",
          "summary": "A focused guide to customer conversations that produce useful evidence rather than reassurance. Particularly valuable for learning to ask about specific experiences, existing behavior, and real constraints before discussing an idea. A good starting point for PMs and founders preparing their first interviews.",
          "url": "https://www.momtestbook.com/",
          "linkLabel": "Explore the book and sample"
        },
        {
          "type": "article",
          "title": "Steve Portigal — Interviewing Users",
          "summary": "A deeper treatment of interview preparation, fieldwork, questioning, interpretation, and communicating research. Useful when the team already talks to customers but needs to improve the quality of its learning and the impact of its findings. The second edition includes expanded coverage of analysis, synthesis, and organizational influence.",
          "url": "https://rosenfeldmedia.com/books/interviewing-users-second-edition/",
          "linkLabel": "Explore the book",
          "supportingContent": "**Also available:** [Read the sample chapter](https://rosenfeldmedia.com/interviewing-users-second-edition-sample-chapter/) before committing to the paid book."
        },
        {
          "type": "article",
          "title": "The Long Commit — The Prototype Is a Question, Not a Product",
          "summary": "A practical way to keep a convincing prototype connected to the decision it was built to inform. Its prototype decision card captures the question, required evidence, shortcuts, expiry, and what happens to the implementation afterward. Especially relevant when AI makes an experimental interface look ready to ship long before the team has tested its assumptions.",
          "url": "https://newsletter.thelongcommit.com/p/the-prototype-is-a-question-not-a",
          "linkLabel": "Read the article and decision-card format"
        },
        {
          "type": "article",
          "title": "Rachel Kaufman — User Testing on a Shoestring",
          "summary": "An approachable guide to running small usability studies with minimal equipment and budget. Covers choosing a task, observing without leading, finding participants, and using what you learn to improve the next iteration. Particularly useful for small teams and solo builders. Choose participants who reflect the intended audience, and treat small studies as qualitative learning rather than population estimates.",
          "url": "https://www.readwriterachel.com/opinions/hacks/presentations/2026/08/26/usertesting-on-a-shoestring.html",
          "linkLabel": "Read the article",
          "supportingContent": "**Also available:** [View the presentation slides](https://rkaufman13.github.io/usertesting-on-a-shoestring/index.html)."
        },
        {
          "type": "article",
          "title": "Sachin Rekhi — AI Powered Customer Discovery",
          "summary": "A practitioner’s account of using AI in customer discovery. The accessible portion covers analyzing surveys, automating recurring survey reports, and combining feedback from multiple channels while retaining access to customers’ original words. Useful for thinking through a repeatable workflow for learning from an existing product. The full written guide requires a subscription; the article also links to a conference recording.",
          "url": "https://www.sachinrekhi.com/p/ai-powered-customer-discovery",
          "linkLabel": "Read the article — partial subscription access",
          "supportingContent": "**Also available:** [Watch Top 10 AI Hacks for Customer Discovery](https://www.youtube.com/watch?v=DbEbAwOgsG8) — Sachin Rekhi at Lean Product Meetup."
        },
        {
          "type": "article",
          "title": "Plane — How to Use AI for Product Discovery: A Practical Guide",
          "summary": "Examples of using AI to prepare interview questions, summarize transcripts, organize customer feedback, and support research documentation. A practical entry point from the bookmark collection. Keep original evidence available and check generated summaries against it before using them to justify a decision. This is vendor-authored guidance.",
          "url": "https://plane.so/blog/how-to-use-ai-for-product-discovery-a-practical-guide",
          "linkLabel": "Read the guide"
        },
        {
          "type": "article",
          "title": "Elena Verna — The AI Era Requires a Different Kind of Experimentation",
          "summary": "A perspective on how cheaper development changes the kinds of experiments teams can consider, with a critique of narrowly optimizing small surface changes. Included as a bridge to learning from live products and the future Growth page. The public introduction establishes the argument; the full article requires access.",
          "url": "https://www.elenaverna.com/p/the-ai-era-requires-a-different-kind",
          "linkLabel": "Read the article — subscription access"
        }
      ]
    },
    {
      "id": "templates-research-resources",
      "name": "Templates & Research Resources",
      "theme": "Use these when preparing the next study or experiment: a research plan, discussion guide, hypothesis, synthesis session, or team workshop. For Interview Snapshots and Opportunity Solution Trees, see the Teresa Torres collection above. The prototype decision card is included with The Long Commit entry.",
      "note": "Use these when preparing the next study or experiment: a research plan, discussion guide, hypothesis, synthesis session, or team workshop. For Interview Snapshots and Opportunity Solution Trees, see the Teresa Torres collection above. The prototype decision card is included with The Long Commit entry.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "GOV.UK Service Manual — User Research",
          "summary": "A substantial practical collection covering research planning, recruitment, interviews, observation, usability testing, analysis, and sharing findings. It also covers inclusive participation, consent, and handling research material. Although written for public services, many of its working practices transfer directly to product teams.",
          "url": "https://www.gov.uk/service-manual/user-research",
          "linkLabel": "Explore the research manual",
          "supportingContent": "**Useful starting points:**\n\n- [Plan user research for your service](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service) — Connect research questions, participants, and decisions.\n- [Plan a round of user research](https://www.gov.uk/service-manual/user-research/plan-round-of-user-research) — Prepare a focused round of learning.\n- [Analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session) — Turn observations into findings with the team."
        },
        {
          "type": "article",
          "title": "Strategyzer — Validate Your Ideas with the Test Card",
          "summary": "A reusable format for stating a hypothesis, choosing a test, identifying the measure, and setting a success threshold before seeing the result. The article includes an explanatory video and points to the downloadable tool. Useful for bringing discipline to quick experiments and making the intended learning explicit.",
          "url": "https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card",
          "linkLabel": "Read, watch, and access the Test Card",
          "supportingContent": "**Also from Strategyzer:** [The strategy and innovation toolbox](https://www.strategyzer.com/library/an-emerging-toolbox-for-business-strategy-innovation) — Explains how the Test Card and Learning Card work together to plan tests and capture learning."
        },
        {
          "type": "article",
          "title": "IDEO.org — Design Kit Methods",
          "summary": "A browsable set of methods for framing challenges, learning from people, exploring ideas, and making concepts tangible. Useful when a team needs a facilitated activity or a practical starting point for field research. Select an exercise because it serves a learning goal, then adapt it to the audience and context.",
          "url": "https://www.designkit.org/methods.html",
          "linkLabel": "Explore the method library",
          "supportingContent": "**Also available:** [Design Kit](https://www.designkit.org/) — Includes the Field Guide to Human-Centered Design and further resources."
        },
        {
          "type": "article",
          "title": "Google — Design Sprint Kit",
          "summary": "An organized collection of sprint methods and facilitation guidance. Useful for choosing activities, preparing workshops, and adapting a sprint to a specific learning challenge. Pair it with the Sprint framework above when the team needs both an overall approach and practical activities to run.",
          "url": "https://designsprintkit.withgoogle.com/methodology",
          "linkLabel": "Explore the kit"
        },
        {
          "type": "article",
          "title": "ResearchOps Community — ResearchOps Resources",
          "summary": "Community resources for making research repeatable across a team or organization. Useful when the friction is operational: arranging participants, maintaining shared practices, managing research knowledge, or enabling more people to conduct useful research.",
          "url": "https://researchops.community/resources/",
          "linkLabel": "Explore the resources"
        }
      ]
    },
    {
      "id": "research-discovery-tools",
      "name": "Research & Discovery Tools",
      "theme": "Choose tools around the work you need to do: find participants, run a study, make sense of evidence, or understand product use over time. The platforms below overlap; a team rarely needs all of them. Check study methods, participant fit, data handling, and plan limits against the research you actually intend to run.",
      "note": "Choose tools around the work you need to do: find participants, run a study, make sense of evidence, or understand product use over time. The platforms below overlap; a team rarely needs all of them. Check study methods, participant fit, data handling, and plan limits against the research you actually intend to run.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "tool",
          "title": "UserTesting — Remote User Research & Usability Testing",
          "summary": "A platform for gathering feedback and observing people interacting with concepts, prototypes, and products. A candidate when the team needs remote research with recorded sessions and support for reaching participants. Evaluate its research options against the depth of conversation and observation your study requires.",
          "url": "https://www.usertesting.com/",
          "linkLabel": "Explore UserTesting"
        },
        {
          "type": "tool",
          "title": "Maze — Research & Prototype Testing",
          "summary": "A research platform worth evaluating for prototype and usability testing within an ongoing product workflow. Useful for teams that want to collect evidence around design decisions repeatedly. Start with a clear task and target audience so the resulting metrics and feedback answer the question behind the study.",
          "url": "https://maze.co/",
          "linkLabel": "Explore Maze",
          "supportingContent": "**Also from Maze:** [What Is UX Research?](https://maze.co/guides/ux-research/) — A broader methods introduction from the bookmark collection."
        },
        {
          "type": "tool",
          "title": "Lyssna — Design Tests, Surveys & Interviews",
          "summary": "A platform for research methods including design tests, surveys, and interviews. A useful candidate when the team wants several lightweight ways to evaluate an interface or concept. Match each test to a specific uncertainty rather than treating a preference result as evidence of actual adoption.",
          "url": "https://www.lyssna.com/",
          "linkLabel": "Explore Lyssna"
        },
        {
          "type": "tool",
          "title": "Optimal Workshop — Card Sorting & Tree Testing",
          "summary": "A strong candidate for studying how people organize information and find their way through navigation. Useful when the research question concerns labels, groupings, or findability. The platform also offers broader testing capabilities; its information-architecture methods provide a clear reason to include it here.",
          "url": "https://www.optimalworkshop.com/",
          "linkLabel": "Explore Optimal Workshop"
        },
        {
          "type": "tool",
          "title": "User Interviews — Participant Recruitment & Research Panels",
          "summary": "A platform for recruiting and managing research participants. Useful when access to the right people is preventing the team from establishing a regular research cadence. Define the audience and screening criteria carefully, particularly for specialized business workflows or hard-to-reach roles.",
          "url": "https://www.userinterviews.com/",
          "linkLabel": "Explore User Interviews"
        },
        {
          "type": "tool",
          "title": "Dovetail — Research Synthesis & Customer Evidence",
          "summary": "A platform for organizing research and customer feedback so teams can find, analyze, and share evidence. Worth evaluating when interviews and support insights are scattered across documents and recordings. Keep findings connected to their original sources, especially when using AI-generated summaries or themes.",
          "url": "https://dovetail.com/",
          "linkLabel": "Explore Dovetail"
        },
        {
          "type": "tool",
          "title": "Amplitude — Product Analytics & Ongoing Learning",
          "summary": "A tool for examining product behavior over time, including journeys, conversion, and retention. Useful for identifying where to investigate and assessing what changes after a release. Pair behavioral patterns with qualitative research to understand the circumstances behind them.",
          "url": "https://amplitude.com/",
          "linkLabel": "Explore Amplitude"
        },
        {
          "type": "tool",
          "title": "Hotjar / Contentsquare — Session Replay, Heatmaps & Feedback",
          "summary": "Tools for investigating friction in live digital experiences through session replay, heatmaps, and feedback. Useful for finding specific moments to investigate after launch. Observed interaction patterns can guide research questions, but often need follow-up conversations to explain customer intent.",
          "url": "https://contentsquare.com/hotjar/",
          "linkLabel": "Explore Hotjar within Contentsquare"
        }
      ]
    },
    {
      "id": "ai-moderated-research-tools",
      "name": "AI-Moderated Research Tools",
      "theme": "AI moderators can conduct interviews with real participants, ask follow-up questions, and help teams organize what they hear. These platforms are worth exploring when a team needs more customer conversations than it can moderate individually. Start with a small pilot: review the questions, follow-up quality, participant experience, and original responses before relying on the findings. Human researchers still shape the study, interpret the evidence, and decide when a conversation needs more depth or sensitivity.",
      "note": "AI moderators can conduct interviews with real participants, ask follow-up questions, and help teams organize what they hear. These platforms are worth exploring when a team needs more customer conversations than it can moderate individually. Start with a small pilot: review the questions, follow-up quality, participant experience, and original responses before relying on the findings. Human researchers still shape the study, interpret the evidence, and decide when a conversation needs more depth or sensitivity.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "tool",
          "title": "Outset — AI-Moderated Interviews",
          "summary": "A platform for conducting AI-moderated research through video, voice, and text. Teams can build an interview guide and use an AI interviewer to follow up on participants’ responses. Worth evaluating for concept research and customer interviews where the team wants a consistent starting guide with room for probing. Inspect actual conversations to assess whether the follow-ups produce useful detail.",
          "url": "https://outset.ai/platform/interviews",
          "linkLabel": "Explore Outset interviews",
          "supportingContent": "**Practical guidance from Outset:**\n\n- [Interview Guide Settings](https://help.outset.ai/articles/9648918134-interview-guide-settings) — Configure the study and participant experience.\n- [Improving Participant Experience](https://help.outset.ai/articles/6901060570-improving-participant-experience-in-ai-moderated-interviews) — Guidance on avoiding repetitive or confusing interviews."
        },
        {
          "type": "tool",
          "title": "Listen Labs — AI Interviews & Research Synthesis",
          "summary": "A research platform built around AI-led interviews with real people and analysis of their responses. A candidate for teams exploring customer needs or reactions to concepts across a larger set of participants. Evaluate how well the interview adapts to unexpected answers and whether the resulting findings can be traced to the underlying customer evidence.",
          "url": "https://listenlabs.ai/",
          "linkLabel": "Explore Listen Labs"
        },
        {
          "type": "tool",
          "title": "User Intuition — AI-Moderated Customer Research",
          "summary": "A platform for AI-moderated customer interviews and synthesis, included as the direct product source behind the comparison article in the bookmarks and Product News collection. Worth evaluating for recurring customer learning. Test it with a familiar research question and compare the depth of the responses with what the team learns through human-led interviews.",
          "url": "https://www.userintuition.ai/",
          "linkLabel": "Explore User Intuition"
        }
      ]
    }
  ]
};
