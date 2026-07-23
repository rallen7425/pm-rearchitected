import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import { TermList } from "@/components/glossary/TermList";
import { GlossaryHeader } from "@/components/glossary/GlossaryHeader";
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
        <Hero showDescription={false} />
        <div className="container pb-20">
          <GlossaryHeader
            links={[
              { href: "/terms/flashcards", label: "Test Yourself" },
              { href: "/terms/browse", label: "Browse by Category" },
            ]}
          />
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-8">Top Terms</h3>
          <TermList terms={terms} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
