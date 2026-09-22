import type { ResourceTopic } from "./resources";

// Initial editorial draft; sources grouped by author or publisher.
export const GO_TO_MARKET_GROWTH: ResourceTopic = {
  "id": "go-to-market-growth",
  "label": "Go-to-Market & Growth",
  "width": "standard",
  "tileDescription": "A product creates business value when the right customers understand it, adopt it, and keep receiving value from it.",
  "pageIntro": "A product creates business value when the right customers understand it, adopt it, and keep receiving value from it. These resources connect positioning and launches with activation, retention, distribution, pricing, and measurement. They help PMs work with marketing, sales, and customer success throughout the product lifecycle.",
  "reframedPostUrls": [
    "https://fromoutofthenoise.substack.com/p/reframed-lean-startup-wasnt-about"
  ],
  "subtopics": [
    {
      "id": "positioning-go-to-market-foundations",
      "name": "Positioning & Go-to-Market Foundations",
      "theme": "Clarify who the product is for, why customers would choose it, and how the product reaches its market.",
      "note": "Clarify who the product is for, why customers would choose it, and how the product reaches its market.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "April Dunford — Obviously Awesome & Sales Pitch",
          "summary": "A practical approach to positioning a product and turning that positioning into a story a buyer can understand. Useful when messaging lists features without explaining differentiated value. The books are paid; the author offers a positioning and sales-pitch workbook with newsletter signup.",
          "url": "https://www.aprildunford.com/books",
          "linkLabel": "Explore the books and workbook"
        },
        {
          "type": "article",
          "title": "Martina Lauchengco / SVPG — Market Fit",
          "summary": "Explains why understanding market demand belongs alongside product discovery. Useful when a team has interested early customers but lacks a repeatable reason for others to try or buy. It connects product decisions with the work of product marketing.",
          "url": "https://www.svpg.com/market-fit/",
          "linkLabel": "Read the article",
          "supportingContent": "**Also from SVPG:**\n\n- [LOVED](https://www.svpg.com/introducing-loved/) — Introduction to Martina Lauchengco’s paid book on marketing technology products.\n- [Driving Success through Value-Centric Product Marketing](https://www.svpg.com/videos/driving-success-through-value-centric-product-marketing/) — A recorded talk."
        },
        {
          "type": "article",
          "title": "Brian Balfour — The Four Fits: A Growth Framework for the AI Era",
          "summary": "Connects market, product, channels, and business model as interdependent choices. Useful when an acquisition strategy looks promising in isolation but does not fit how the product delivers value or earns revenue. The updated essay applies the framework to changes in AI products.",
          "url": "https://blog.brianbalfour.com/p/the-four-fits-a-growth-framework",
          "linkLabel": "Read the essay",
          "supportingContent": "**Related framework:** [Reforge — Growth Loops Are the New Funnels](https://www.reforge.com/blog/growth-loops) — Balfour, Casey Winters, Kevin Kwok, and Andrew Chen on systems that reinvest growth outputs."
        },
        {
          "type": "article",
          "title": "Product People — Why Merge Product, Growth & Revenue?",
          "summary": "A practitioner argument for connecting product decisions more closely to acquisition, retention, and business results. Useful for clarifying a PM’s role in go-to-market experiments while distinguishing that work from ongoing marketing operations. Treat the organizational recommendations as a perspective to assess in your own context.",
          "url": "https://www.getproductpeople.com/blog/merging-product-growth-revenue-pm-upgrade",
          "linkLabel": "Read the article"
        }
      ]
    },
    {
      "id": "launches-sales-readiness",
      "name": "Launches & Sales Readiness",
      "theme": "Prepare the people, messages, and processes that turn a release into a useful customer introduction.",
      "note": "Prepare the people, messages, and processes that turn a release into a useful customer introduction.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Product Marketing Alliance — Product Launch Checklist",
          "summary": "A practical checklist spanning research, positioning, goals, collateral, enablement, launch, and feedback. Useful for agreeing owners and dependencies before a launch. The downloadable template requires a free Insider account at the time of review.",
          "url": "https://www.productmarketingalliance.com/product-launch-checklist-framework/",
          "linkLabel": "Read and access the template",
          "supportingContent": "**Also from PMA:** [Sales Readiness Checklist](https://www.productmarketingalliance.com/product-launch-sales-readiness-checklist-framework/) — Prepare sales teams to explain and support the launch; download access may require membership."
        },
        {
          "type": "article",
          "title": "Intercom — How to Market the Job-to-Be-Done",
          "summary": "A talk and transcript about connecting a customer’s motivation to positioning, audience selection, and marketing. Useful for checking whether a launch story explains the progress a customer can make rather than simply announcing what shipped.",
          "url": "https://www.intercom.com/blog/videos/marketing-the-job-to-be-done/",
          "linkLabel": "Watch or read the transcript"
        },
        {
          "type": "article",
          "title": "Euclid Ventures — Forward-Deployed Everything",
          "summary": "A discussion with Revin AI’s founder about putting teams close to customers during implementation. Useful for enterprise go-to-market and onboarding decisions: turning customer-specific learning into repeatable product capabilities, controlling service costs, and managing expansion promises.",
          "url": "https://insights.euclid.vc/p/forward-deployed-everything-fde-quinn-litherland-revin-ai",
          "linkLabel": "Read the article"
        }
      ]
    },
    {
      "id": "activation-retention-product-led-growth",
      "name": "Activation, Retention & Product-Led Growth",
      "theme": "Help users reach value, understand why they return, and build growth around that continuing value.",
      "note": "Help users reach value, understand why they return, and build growth around that continuing value.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Samuel Hulick — User Onboarding",
          "summary": "A collection of illustrated onboarding teardowns that makes first-use friction visible. Useful for studying how products introduce value, ask for effort, and help someone reach a first success. Treat older examples as lessons in interaction and messaging rather than current screenshots of those products.",
          "url": "https://www.useronboard.com/",
          "linkLabel": "Explore the teardowns"
        },
        {
          "type": "article",
          "title": "Retention Is King — Guest Essay on Andrew Chen’s Blog",
          "summary": "A focused argument for examining retention before trying to accelerate acquisition. Useful for teams whose signup numbers look healthy while cohorts continue to lose users. Look for lasting value in the experience before scaling the channels that bring people to it.",
          "url": "https://andrewchen.com/retention-is-king/",
          "linkLabel": "Read the essay"
        }
      ]
    },
    {
      "id": "pricing-packaging-unit-economics",
      "name": "Pricing, Packaging & Unit Economics",
      "theme": "Connect how customers receive value with how the business charges for it and sustains growth.",
      "note": "Connect how customers receive value with how the business charges for it and sustains growth.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Stripe — SaaS Pricing & Packaging Strategy",
          "summary": "Explains how a value metric, pricing model, and package structure work together. Useful when deciding what belongs in a tier, what should expand with usage, and how customers move to a larger plan. The guidance is vendor-authored and most relevant to SaaS products.",
          "url": "https://stripe.com/resources/more/saas-pricing-and-packaging-strategy",
          "linkLabel": "Read the guide",
          "supportingContent": "**Also from Stripe:** [Patrick McKenzie — The SaaS Business Model](https://stripe.com/guides/atlas/business-of-saas) — How sales motion, pricing, and recurring revenue fit together."
        },
        {
          "type": "article",
          "title": "David Skok — SaaS Metrics 2.0",
          "summary": "A detailed introduction to recurring-revenue economics, acquisition costs, retention, and the relationships between growth measures. Useful for understanding how a product decision affects the business model. Apply the formulas to your own cohorts and cost structure rather than adopting historical benchmarks uncritically.",
          "url": "https://www.forentrepreneurs.com/saas-metrics-2/",
          "linkLabel": "Read the guide"
        },
        {
          "type": "article",
          "title": "Rob Zwiebach — Monetizing AI",
          "summary": "A billing-platform product leader’s perspective on aligning AI pricing with customer value and variable costs. Compares subscription, usage, tiered, and outcome-based approaches. Useful for discussing observable value measures and pricing experiments when adding AI functionality to an existing product.",
          "url": "https://www.unite.ai/how-to-monetize-ai-software/",
          "linkLabel": "Read the article"
        }
      ]
    },
    {
      "id": "metrics-experiments-growth-tools",
      "name": "Metrics, Experiments & Growth Tools",
      "theme": "Choose measures that reflect customer value and use experiments to understand whether a change improves the experience and the business.",
      "note": "Choose measures that reflect customer value and use experiments to understand whether a change improves the experience and the business.",
      "resourceLayout": "list",
      "resources": [
        {
          "type": "article",
          "title": "Amplitude — North Star Playbook",
          "summary": "A guide to connecting customer value with an outcome metric and the inputs a product team can influence. Useful when dashboards contain many measures but the team lacks a shared explanation of what it is trying to improve.",
          "url": "https://amplitude.com/books/north-star",
          "linkLabel": "Read the playbook"
        },
        {
          "type": "article",
          "title": "Pendo — The Product Analytics Hierarchy of Needs",
          "summary": "A practical framework for moving from raw usage data to meaningful metrics, reports, insights, and action. Useful for PMs deciding what to measure after a launch and how to connect adoption and retention patterns with product decisions. The examples use Pendo, but the sequence is useful across analytics tools.",
          "url": "https://www.pendo.io/pendo-blog/the-product-analytics-hierarchy-of-needs-what-to-do-after-you-install-pendo/",
          "linkLabel": "Read the framework",
          "supportingContent": "**Also from Pendo:**\n\n- [How to Collect, Manage, and Act on Customer Feedback](https://www.pendo.io/product-led/how-the-best-product-teams-collect-manage-and-act-on-customer-feedback/) — Combine customer and prospect feedback with usage analytics, involve customer success, and turn the findings into product decisions.\n- [Product Engagement Score](https://support.pendo.io/hc/en-us/articles/360054782691-Product-Engagement-Score-PES) — Pendo’s composite of adoption, stickiness, and growth; a worked example to assess alongside your own product goals.\n- [What Is Product-Led Growth?](https://www.pendo.io/glossary/product-led-growth/) — An introduction to using the product experience to support acquisition, activation, retention, and expansion."
        },
        {
          "type": "article",
          "title": "Microsoft Research — Experimentation Platform",
          "summary": "Research and practical material from teams running controlled online experiments. Useful for learning why trustworthy A/B tests require attention to measurement, interpretation, and surprising results as well as experiment setup.",
          "url": "https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/",
          "linkLabel": "Explore the research"
        },
        {
          "type": "tool",
          "title": "GrowthBook — Experimentation & Feature Flags",
          "summary": "A platform for managing feature flags and experiments. Worth evaluating when a team needs to roll out changes gradually and compare outcomes with a controlled experiment. Its value depends on sound instrumentation and a clear hypothesis.",
          "url": "https://www.growthbook.io/",
          "linkLabel": "Explore GrowthBook"
        },
        {
          "type": "tool",
          "title": "PostHog — Product Analytics & Experimentation",
          "summary": "A product platform combining analytics with tools such as feature flags, experiments, and session replay. Worth evaluating when a team wants to connect a release with observed behavior and investigate the experience behind the metrics.",
          "url": "https://posthog.com/",
          "linkLabel": "Explore PostHog"
        }
      ]
    }
  ]
};
