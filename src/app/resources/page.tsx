import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Resources — Product Management, Re-Architected",
  description: "Curated resources for product managers navigating the AI era — organized by topic, filtered for taste.",
};

function Bullet({ name, desc, href = "#" }: { name: string; desc: string; href?: string }) {
  return (
    <li className="text-sm text-muted-foreground leading-relaxed">
      <span className="font-semibold text-foreground">{name}</span>: {desc}{" "}
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline whitespace-nowrap">
        Read More
      </a>
    </li>
  );
}

const modules = [
  {
    id: "pm101",
    label: "PM 101",
    desc: "The foundational references every product manager should have in their back pocket — whether you're new to the role or returning to first principles after years in the field.",
    left: [
      { name: "Inspired", desc: "Marty Cagan's definitive guide to how the best product teams discover and deliver products customers love." },
      { name: "The Product Book", desc: "A practical, accessible introduction to the product manager role from the Product School." },
      { name: "Continuous Discovery Habits", desc: "Teresa Torres on building a sustainable practice of customer discovery into your weekly workflow." },
      { name: "Lenny's Newsletter", desc: "Tactical, experience-backed advice on product, growth, and career from a former Airbnb PM." },
      { name: "First Round Review — Product", desc: "Long-form essays from practitioners on the craft of product management." },
    ],
    right: [
      { name: "The PM Handbook", desc: "A comprehensive reference covering strategy, execution, and communication for product managers at every level." },
      { name: "Mind the Product", desc: "Articles, talks, and community content from one of the largest global communities of product people." },
      { name: "Shreyas Doshi on Twitter/X", desc: "Consistently sharp frameworks on prioritization, influence, and the mental models that separate great PMs from good ones." },
      { name: "Silicon Valley Product Group", desc: "Essays and coaching materials from Marty Cagan and the SVPG team on modern product practice." },
      { name: "Gibson Biddle — Ghacks", desc: "Practical essays on product strategy and career growth from a former Netflix VP of Product." },
    ],
  },
  {
    id: "strategy",
    label: "Product Strategy",
    desc: "Diagnosis-led frameworks for picking the right bets, articulating a coherent direction, and keeping execution aligned with intent — especially when the environment is shifting fast.",
    left: [
      { name: "Good Strategy / Bad Strategy", desc: "Richard Rumelt's essential book on what strategy actually is — and why most strategies are just goals dressed up in strategy language." },
      { name: "Reforge — Product Strategy Course", desc: "A rigorous, practitioner-led curriculum on building durable product strategy using frameworks from leading growth and product leaders." },
      { name: "Working Backwards", desc: "Colin Bryar and Bill Carr on how Amazon's leadership principles and mechanisms shape product decisions from the customer backward." },
      { name: "Hamilton Helmer — 7 Powers", desc: "A compact but powerful framework for understanding the sources of durable competitive advantage for technology businesses." },
      { name: "Stratechery", desc: "Ben Thompson's analysis of technology strategy, business models, and the forces shaping the tech industry — indispensable for strategic context." },
    ],
    right: [
      { name: "Roger Martin — Playing to Win", desc: "A rigorous playbook for strategy as a set of integrated choices about where to play and how to win — from the dean of strategic thinking." },
      { name: "Crossing the Chasm", desc: "Geoffrey Moore on how technology products move from early adopters to mainstream markets, and the strategic challenges that emerge at each stage." },
      { name: "The Innovator's Dilemma", desc: "Clayton Christensen's foundational work on why incumbents struggle with disruptive technology and what product teams can do about it." },
      { name: "Competitive Strategy — Porter", desc: "Michael Porter's framework for analyzing industry structure and the sources of competitive positioning, updated for modern product contexts." },
      { name: "Sequoia Arc — Product Strategy", desc: "Sequoia's frameworks for thinking about product-market fit, differentiation, and strategic positioning at the earliest stages." },
    ],
  },
  {
    id: "discovery",
    label: "Discovery & Research",
    desc: "Methods and mindsets for learning faster than you build — getting close enough to customers to separate real problems from assumed ones, and validating ideas before they become expensive commitments.",
    left: [
      { name: "Continuous Discovery Habits", desc: "Teresa Torres on building a weekly discovery rhythm that keeps product teams connected to real customer needs." },
      { name: "The Mom Test", desc: "Rob Fitzpatrick's short, practical guide to asking the right questions in customer interviews so you get signal instead of flattery." },
      { name: "Jobs to Be Done", desc: "Tony Ulwick and Clayton Christensen's framework for understanding what customers are actually trying to accomplish when they hire a product." },
      { name: "Just Enough Research", desc: "Erika Hall on doing research that is fast, practical, and actionable — without sacrificing rigor for the questions that matter most." },
      { name: "Dovetail", desc: "A research repository and analysis tool that helps teams synthesize qualitative data and make insights accessible across the organization." },
    ],
    right: [
      { name: "Nielsen Norman Group", desc: "Research-backed articles and reports on user experience, usability, and the human factors that shape product design decisions." },
      { name: "Intercom on Jobs to Be Done", desc: "Intercom's practical take on applying JTBD to product discovery, feature prioritization, and messaging." },
      { name: "Shape Up", desc: "Basecamp's approach to scoping and pitching work — built around appetite and clear problem definitions rather than backlogs." },
      { name: "Reforge — Retention Deep Dive", desc: "A rigorous look at how to diagnose retention problems using behavioral data, cohort analysis, and qualitative research." },
      { name: "GV Design Sprint", desc: "Google Ventures' five-day framework for answering critical business questions through design, prototyping, and user testing." },
    ],
  },
  {
    id: "ai",
    label: "AI for Product Managers",
    desc: "The references that help product managers think clearly about AI as both a platform shift and a product ingredient — covering the technical fundamentals, the product patterns, and the strategic implications.",
    left: [
      { name: "Anthropic — Building with Claude", desc: "Documentation, guides, and best practices for product teams building applications on top of Claude and the Anthropic API." },
      { name: "Evals 101 for Product Managers", desc: "A practical introduction to building evaluation frameworks for AI features — how to measure quality, catch regressions, and ship with confidence." },
      { name: "The PM's Guide to Context Engineering", desc: "How to think about prompt design, context structure, and instruction quality as core product decisions rather than engineering concerns." },
      { name: "Lenny's Podcast — AI Episodes", desc: "Practitioner conversations on how product teams are actually integrating AI into discovery, delivery, and the products themselves." },
      { name: "Ethan Mollick — One Useful Thing", desc: "Clear-eyed, research-grounded writing on what AI can and can't do — essential for calibrating expectations and finding real leverage." },
    ],
    right: [
      { name: "AI Snake Oil", desc: "Arvind Narayanan and Sayash Kapoor on distinguishing genuine AI capability from hype — a critical lens for product decisions involving AI." },
      { name: "Reforge — AI Product Management", desc: "Frameworks for thinking about AI product strategy, feature design, and the unique challenges of building reliable AI-powered experiences." },
      { name: "Sequoia — Generative AI's Act Two", desc: "A strategic framework for where AI applications are headed and what durable product value looks like in an AI-native landscape." },
      { name: "Hugging Face — Practical ML", desc: "Hands-on resources for understanding how large language models work — accessible enough for non-engineers who need technical fluency." },
      { name: "The Gradient Podcast", desc: "Deep technical and research conversations on the state of AI — useful for staying current on the capabilities that will shape near-term product decisions." },
    ],
  },
  {
    id: "ux",
    label: "UX Design",
    desc: "Taste-building references for product managers who want to think clearly about design — not to replace designers, but to be a sharper partner, a better critic, and a more intentional decision-maker.",
    left: [
      { name: "Refactoring UI", desc: "Adam Wathan and Steve Schoger on the visual design decisions that make interfaces feel polished — practical and immediately applicable." },
      { name: "The Design of Everyday Things", desc: "Don Norman's foundational text on how good design makes intent visible and reduces cognitive load for the people using your product." },
      { name: "Linear's Product Principles", desc: "Linear's public writing on how they think about product quality, interaction design, and the relationship between speed and craft." },
      { name: "Figma — Config Talks", desc: "Annual conference talks from designers and product leaders on emerging practices in interface design and product craft." },
      { name: "Laws of UX", desc: "Jon Yablonski's accessible reference to the psychological principles that underlie effective interface design decisions." },
    ],
    right: [
      { name: "Nielsen Norman Group — UX", desc: "The authoritative source on evidence-based UX practice — research, heuristics, and usability standards that have stood the test of time." },
      { name: "Designing for the AI-Native Era", desc: "Emerging frameworks for designing interfaces that incorporate AI output intelligently — handling uncertainty, trust, and human oversight." },
      { name: "Steve Schoger — UI Tips", desc: "Practical, visual micro-lessons on the small design decisions that add up to a polished, professional interface." },
      { name: "Stripe's Design Language", desc: "Stripe's public design documentation as a case study in how product design principles translate into consistent, high-quality user experience." },
      { name: "Notion — Design System Docs", desc: "How Notion thinks about component design, interaction patterns, and the tradeoffs between flexibility and consistency at scale." },
    ],
  },
  {
    id: "roadmapping",
    label: "Roadmapping & Prioritization",
    desc: "Frameworks for sequencing work and making tradeoffs when everything feels urgent — turning a list of competing demands into a coherent plan that the team understands and stakeholders trust.",
    left: [
      { name: "RICE Scoring", desc: "Intercom's prioritization framework — Reach, Impact, Confidence, Effort — for bringing structure to feature prioritization decisions." },
      { name: "Shape Up", desc: "Basecamp's alternative to backlog-driven roadmaps — scoping work by appetite, betting on cycles, and giving teams room to execute." },
      { name: "Now / Next / Later", desc: "A lightweight roadmap format that communicates direction and sequence without locking teams into false precision on timing." },
      { name: "Opportunity Solution Trees", desc: "Teresa Torres on using OSTs to connect outcomes to opportunities to solutions — a visual tool for keeping discovery and delivery aligned." },
      { name: "Reforge — Roadmapping", desc: "Practitioner frameworks for building roadmaps that survive contact with reality — prioritization under uncertainty, stakeholder alignment, and sequencing." },
    ],
    right: [
      { name: "The Art of the Start — Kawasaki", desc: "Practical advice on how to communicate a product vision and roadmap in ways that create momentum rather than confusion." },
      { name: "Inspired — Roadmap Chapter", desc: "Marty Cagan's critique of output-focused roadmaps and his argument for outcome-based planning that keeps teams focused on impact." },
      { name: "ProductPlan Blog", desc: "Practical articles on roadmap formats, prioritization techniques, and how to run the stakeholder conversations that roadmaps depend on." },
      { name: "Amplitude — North Star Framework", desc: "A framework for identifying the one metric that best captures the value your product delivers to customers — and building your roadmap around it." },
      { name: "Dual-Track Agile", desc: "Marty Cagan and Jeff Patton on running discovery and delivery in parallel — so you're never building in the dark or discovering too late." },
    ],
  },
  {
    id: "execution",
    label: "Execution",
    desc: "Shipping with speed and quality — the practices, habits, and team structures that close the gap between what you planned and what actually reaches customers.",
    left: [
      { name: "Shape Up", desc: "Basecamp's framework for scoping, betting, and executing work in fixed cycles — a compelling alternative to sprint-based delivery." },
      { name: "Accelerate", desc: "Nicole Forsgren, Jez Humble, and Gene Kim on the engineering and organizational practices that predict software delivery performance." },
      { name: "The Phoenix Project", desc: "A novel that dramatizes the principles of DevOps and continuous delivery — makes the abstract concrete for product teams thinking about flow." },
      { name: "Jeff Sutherland — Scrum", desc: "The original Scrum guide from one of its creators — useful for understanding the intent behind agile ceremonies before adapting them." },
      { name: "Liftoff — Launch Planning", desc: "Diana Larsen and Ainsley Nies on how to start projects and teams well — alignment, purpose, and shared context before the work begins." },
    ],
    right: [
      { name: "Team Topologies", desc: "Matthew Skelton and Manuel Pais on organizing teams for fast, independent delivery — stream-aligned, platform, and enabling team patterns." },
      { name: "Making Work Visible", desc: "Dominica DeGrandis on identifying the hidden queues and multitasking traps that slow delivery and drain team energy." },
      { name: "The Goal — Goldratt", desc: "The foundational text on the theory of constraints — how to find and address the bottlenecks that limit your system's throughput." },
      { name: "Basecamp — How We Work", desc: "Basecamp's public documentation on their working practices — async communication, focused cycles, and protecting team time." },
      { name: "Linear — Issue Tracking Best Practices", desc: "How Linear thinks about structuring work, writing issues, and maintaining clarity in a fast-moving engineering team." },
    ],
  },
  {
    id: "technology",
    label: "Technology",
    desc: "Technical literacy for product managers — not to write the code, but to hold the conversation, understand the tradeoffs, and make better decisions about what to build and how.",
    left: [
      { name: "The Pragmatic Programmer", desc: "David Thomas and Andrew Hunt on software craftsmanship — essential context for PMs who want to understand how engineers think about quality." },
      { name: "Designing Data-Intensive Applications", desc: "Martin Kleppmann's authoritative guide to distributed systems, databases, and the architectural decisions that shape data-driven products." },
      { name: "Stripe's API Design Guide", desc: "Stripe's public documentation on how they think about API design — a model for understanding what makes developer-facing products excellent." },
      { name: "A16Z — Tech Primers", desc: "Accessible explanations of emerging technology categories — useful for product managers building intuition about new platform shifts." },
      { name: "How the Internet Works", desc: "Julia Evans' zines and writing on networking, DNS, HTTP, and the infrastructure underlying every product you build." },
    ],
    right: [
      { name: "The Staff Engineer's Path", desc: "Tanya Reilly on how senior technical contributors think and operate — valuable for PMs who work closely with staff and principal engineers." },
      { name: "System Design Interview", desc: "Alex Xu's guide to system design concepts — helps PMs understand the architectural tradeoffs behind the products they're building." },
      { name: "AWS Architecture Center", desc: "Amazon's library of reference architectures and best practices — useful for understanding the infrastructure decisions that affect product scalability." },
      { name: "Increment Magazine", desc: "Stripe's publication on software engineering culture, practices, and the human dimensions of building technical products." },
      { name: "The Architecture of Open Source Applications", desc: "Practitioners describing the architectural decisions behind major open source systems — builds intuition about how software systems evolve." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container pb-20">
          <div className="space-y-12">
            {modules.map((mod, i) => (
              <div key={mod.id}>
                {i > 0 && <div className="border-t border-border mb-12" />}
                <section id={mod.id} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
                    {mod.label}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-8">
                    {mod.desc}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    <ul className="space-y-4">
                      {mod.left.map((b) => (
                        <li key={b.name} className="text-sm text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">{b.name}</span>: {b.desc}{" "}
                          <a href="#" className="text-primary hover:underline whitespace-nowrap">
                            Read More
                          </a>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-4">
                      {mod.right.map((b) => (
                        <li key={b.name} className="text-sm text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">{b.name}</span>: {b.desc}{" "}
                          <a href="#" className="text-primary hover:underline whitespace-nowrap">
                            Read More
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
