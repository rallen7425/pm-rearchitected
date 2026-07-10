import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="border-t border-border pt-10 pb-16">
        <div className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
          About
        </div>
        <div>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Product managers and designers are drowning in noise right now. Every week brings a new
            AI tool that's going to change everything, a framework that replaces the one you just
            learned, a think piece declaring some fundamental of the craft dead. The thesis here is
            simple: AI is a significant platform shift, but it's not the first one — and the
            fundamentals of great product work haven't changed. This site brings together original
            writing, curated resources, and hard-won perspective to help you cut through the hype
            and focus on what actually matters.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline transition-colors"
          >
            Read More About Product Management, Re-Architected <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
