import type { ResourceTopic } from "./resources";

// Initial editorial draft; sources grouped by author or publisher.
export const TECHNOLOGY_FOR_PMS: ResourceTopic = {
  "id": "technology-for-pms",
  "label": "Technology for PMs",
  "width": "standard",
  "tileDescription": "Technical literacy helps PMs ask better questions about feasibility, cost, reliability, and product behavior.",
  "pageIntro": "Technical literacy helps PMs ask better questions about feasibility, cost, reliability, and product behavior. These resources explain how software systems work, how they exchange and store information, and how teams reason about technical choices. Start with approachable explanations, then use the deeper references alongside a real product or engineering discussion.",
  "reframedPostUrls": [
    "https://fromoutofthenoise.substack.com/p/reframed-the-product-trio-is-not"
  ],
  "subtopics": [
    {
      "id": "how-software-the-web-work",
      "name": "How Software & the Web Work",
      "theme": "Build a working picture of programs, browsers, servers, and the systems behind a digital product.",
      "note": "Build a working picture of programs, browsers, servers, and the systems behind a digital product.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "MDN — How the Web Works",
          "summary": "A practical introduction to clients, servers, and the journey from requesting a page to receiving its content. Useful for connecting familiar product behavior to the technical systems that make it possible.",
          "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
          "linkLabel": "Read the guide"
        },
        {
          "type": "article",
          "title": "Harvard — CS50’s Introduction to Computer Science",
          "summary": "A substantial free course in computational thinking, programming, and data. Useful for PMs who want a deeper foundation and are willing to spend time on exercises. Begin with the introductory lectures; completing the full course is a larger learning commitment.",
          "url": "https://cs50.harvard.edu/x/",
          "linkLabel": "Watch lectures and explore the course"
        },
        {
          "type": "article",
          "title": "GitHub — About Git",
          "summary": "An introduction to version control, repositories, and how software changes are recorded and shared. Useful for understanding engineering conversations about branches, commits, and collaboration without needing to become the person writing every change.",
          "url": "https://docs.github.com/en/get-started/using-git/about-git",
          "linkLabel": "Read the guide"
        }
      ]
    },
    {
      "id": "apis-integrations-developer-experience",
      "name": "APIs, Integrations & Developer Experience",
      "theme": "Understand the contracts between systems and the experience of the developers who consume them.",
      "note": "Understand the contracts between systems and the experience of the developers who consume them.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Postman — What Is an API?",
          "summary": "A beginner-friendly explanation of APIs, requests, responses, and integrations. Useful when a product depends on external data or exposes capabilities to partners. Follow the examples to make an abstract integration discussion more tangible.",
          "url": "https://www.postman.com/what-is-an-api/",
          "linkLabel": "Read the guide",
          "supportingContent": "**Try the tool:** [Postman](https://www.postman.com/) — Inspect requests and responses with an API client."
        },
        {
          "type": "article",
          "title": "Simon Brown — The C4 Model",
          "summary": "A visual approach to describing software at several levels of detail. Start with a system-context diagram to show users, systems, and integrations, then move inward only as needed. Useful for keeping PMs and engineers in the same conversation about a product’s architecture.",
          "url": "https://c4model.com/",
          "linkLabel": "Explore the guide and recorded talk"
        }
      ]
    },
    {
      "id": "data-databases-analytics",
      "name": "Data, Databases & Analytics",
      "theme": "Learn how data is represented, queried, and interpreted so product questions can become answerable technical questions.",
      "note": "Learn how data is represented, queried, and interpreted so product questions can become answerable technical questions.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "tool",
          "title": "SQLBolt — Learn SQL",
          "summary": "Interactive lessons on querying, filtering, joining, and aggregating relational data. Useful for building confidence reading queries and understanding how apparently simple product questions depend on the structure and quality of the data.",
          "url": "https://sqlbolt.com/",
          "linkLabel": "Try the lessons"
        },
        {
          "type": "article",
          "title": "PostgreSQL — Tutorial",
          "summary": "An official introduction to relational database concepts and SQL with hands-on examples. A useful next step after basic querying, particularly for understanding tables, relationships, and transactions in a real database system.",
          "url": "https://www.postgresql.org/docs/current/tutorial.html",
          "linkLabel": "Read the guide"
        },
        {
          "type": "article",
          "title": "Amplitude — Academy",
          "summary": "Courses on product analytics and measurement. Useful for connecting events and behavioral data to funnels, retention, and product questions. Course access may require an account, and examples use Amplitude’s product.",
          "url": "https://academy.amplitude.com/",
          "linkLabel": "Explore the courses"
        }
      ]
    },
    {
      "id": "architecture-infrastructure-tradeoffs",
      "name": "Architecture, Infrastructure & Tradeoffs",
      "theme": "Understand why systems are structured differently and how architecture affects change, scale, and operating costs.",
      "note": "Understand why systems are structured differently and how architecture affects change, scale, and operating costs.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Donne Martin & Contributors — System Design Primer",
          "summary": "A broad reference on scalability, databases, caching, messaging, and distributed systems. Useful as a companion to an engineering discussion: choose the relevant topic rather than treating it as an interview-preparation syllabus to complete.",
          "url": "https://github.com/donnemartin/system-design-primer",
          "linkLabel": "Explore the reference"
        },
        {
          "type": "article",
          "title": "The Architecture of Open Source Applications — Case Studies",
          "summary": "Free books describing how real systems are structured and why their creators made particular decisions. Useful for developing technical judgment through concrete examples and seeing how constraints lead to different designs.",
          "url": "https://aosabook.org/en/",
          "linkLabel": "Read the free books"
        },
        {
          "type": "article",
          "title": "Architectural Decision Records — Decisions & Rationale",
          "summary": "An introduction to recording a technical decision together with its context, alternatives, and consequences. Useful when a PM needs to understand why an earlier choice was made or collaborate on a decision with long-term product implications. Includes links to templates and presentations.",
          "url": "https://adr.github.io/",
          "linkLabel": "Explore the guidance and templates"
        },
        {
          "type": "article",
          "title": "Ravi Mehta — Software Architecture for Non-Technical Builders",
          "summary": "An accessible walkthrough of frontends, backends, databases, APIs, and how they fit together. Useful for PMs who want to follow architecture discussions or understand what an AI-built prototype contains. It provides a bridge from basic technical vocabulary to the decisions behind a working application.",
          "url": "https://blog.ravi-mehta.com/p/software-architecture",
          "linkLabel": "Read the article"
        }
      ]
    },
    {
      "id": "security-performance-reliability",
      "name": "Security, Performance & Reliability",
      "theme": "Translate system quality into customer consequences: whether the product is available, responsive, trustworthy, and recoverable.",
      "note": "Translate system quality into customer consequences: whether the product is available, responsive, trustworthy, and recoverable.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "OWASP — Top 10 Web Application Security Risks",
          "summary": "A primary reference for understanding major categories of web application risk. Useful for recognizing security implications in product requirements and asking informed questions during design and review. Read it as an awareness resource alongside the team’s security practice.",
          "url": "https://owasp.org/projects/top-ten",
          "linkLabel": "Explore the reference"
        },
        {
          "type": "article",
          "title": "Cloudflare — Learning Center",
          "summary": "Accessible explanations of networking, DNS, TLS, caching, CDNs, and security. Useful when product behavior depends on infrastructure that is normally invisible, such as latency, traffic spikes, or an external service failure.",
          "url": "https://www.cloudflare.com/learning/",
          "linkLabel": "Explore the explainers"
        },
        {
          "type": "article",
          "title": "Google — Web.dev Learn",
          "summary": "Modular courses on web technology, performance, accessibility, and testing. Useful for selecting one aspect of experience quality and understanding what engineers can measure and improve. Start with the course closest to the product issue at hand.",
          "url": "https://web.dev/learn/",
          "linkLabel": "Explore the courses"
        }
      ]
    }
  ]
};
