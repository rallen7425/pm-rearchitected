import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "About — Product Management, Re-Architected",
  description:
    "The mission, perspective, and background behind Product Management, Re-Architected. By Rick Allen.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container pb-20">
          <div className="space-y-12">

            {/* Mission */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
                The Mission
              </h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>Product managers and designers are drowning in noise right now.</p>
                <p>
                  Every week brings a new AI tool that's going to change everything, a framework
                  that replaces the one you just learned, a think piece declaring some fundamental
                  of the craft dead. The volume is relentless — and most of it isn't helping you
                  ship better products or make better decisions.
                </p>
                <p>That's what this site is for.</p>
                <p>
                  <em>Product Management, Re-Architected</em>, and my blog{" "}
                  <a
                    href="https://fromoutofthenoise.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic text-primary hover:underline"
                  >
                    From Out of the Noise
                  </a>
                  , are a place to cut through the hype, and focus
                  on what actually matters: the fundamentals of great product work. The thesis here
                  is pretty simple — AI is a significant platform shift, true, but it's not the
                  first one. The internet changed everything. So did mobile. So did cloud. And
                  through all of it, the core of what makes a great product manager hasn't changed:
                  deep customer understanding, clear thinking, sound judgment, and the ability to
                  make smart tradeoffs under uncertainty.
                </p>
                <p>
                  This site brings together context, perspective, curated resources, and original
                  content to help product people navigate the AI era without losing sight of what
                  made them good at their jobs in the first place.
                </p>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* Perspective */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
                The Perspective
              </h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  I've been in and around product management since the late 1990s — long enough to
                  have watched the internet, mobile, cloud, SaaS, and now AI each arrive with a
                  wave of proclamations that everything we knew was obsolete.
                </p>
                <p>
                  Each platform shift raised the bar, expanded what was possible, and changed how
                  the work gets done. But the fundamentals didn't disappear — they just got harder
                  to see through the noise. The PMs who thrived weren't the ones who chased every
                  new tool or framework. They were the ones who held onto their judgment while
                  adapting how they applied it.
                </p>
                <p>
                  That's the lens I bring here: not "AI changes everything," but "AI removes the
                  barriers that kept great product practice aspirational." Continuous discovery,
                  deep customer empathy, fast iteration, real-time learning — these were always the
                  right approach. Now the constraints that made them hard are eroding. That's
                  genuinely exciting. But it also means the fundamentals matter <em>more</em>, not
                  less.
                </p>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* About Me */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
                About Me
              </h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  I started my career at advertising agencies in the Boston area in the 1990s,
                  planning media campaigns across print, broadcast, and the earliest days of
                  digital. What I kept running into was the person on the client side who actually
                  understood the product — the market, the tradeoffs, the customer, the technology.
                  That was the product manager. I spent the next 25 years becoming one.
                </p>
                <p>
                  Over more than 25 years, I've built consumer, B2B, and enterprise SaaS products,
                  with a focus on payments and fintech, where the stakes are high and the complexity
                  is real. I've worked across products that handle hundreds of millions of
                  transactions, built consumer-grade experiences on top of complex financial
                  infrastructure, and led teams navigating the very real tension between regulatory
                  constraint and customer expectation.
                </p>
                <p>
                  More recently, I've leaned into AI as a tool for accelerating product discovery
                  and building prototypes, as well as product features. That dual vantage point —
                  AI as instrument and AI as product — shapes a lot of what I write about here.
                </p>
                <p>
                  I'm not here to sell a methodology or convince you my way is the right way. I'm
                  here to share what 25 years of hard-won perspective looks like when held up
                  against the changes happening right now — and to help you think more clearly in a
                  moment that makes clear thinking genuinely difficult.
                </p>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://fromoutofthenoise.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 shadow-card hover:bg-primary-hover transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
                Get the weekly note
              </a>
              <a
                href="https://linkedin.com/in/rickallen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background text-foreground text-sm font-medium px-5 py-2.5 hover:bg-secondary transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
