import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import { TermList } from "@/components/glossary/TermList";
import { listTopTerms } from "@/lib/glossary";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "AI Glossary — Product Management, Re-Architected",
  description:
    "The essential AI terms every product manager should know — clear, practical definitions without the jargon.",
};

export default async function GlossaryPage() {
  const terms = await listTopTerms(2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container pb-20">
          <div className="flex items-baseline justify-between gap-4 mb-5 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">AI Glossary — Top Terms</h2>
            <div className="flex gap-4 text-sm">
              <Link href="/glossary/browse" className="text-primary hover:underline">
                Browse by category →
              </Link>
              <Link href="/glossary/search" className="text-primary hover:underline">
                Search the full glossary →
              </Link>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            The AI terms that come up most often in product conversations — the ones worth knowing
            cold before you get into the weeds. Click any term for the full definition, related
            concepts, and further reading.
          </p>
          <TermList terms={terms} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
