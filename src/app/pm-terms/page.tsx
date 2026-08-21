import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import { TermList } from "@/components/glossary/TermList";
import { GlossaryHeader } from "@/components/glossary/GlossaryHeader";
import { listTopTerms } from "@/lib/glossary";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Product Management Terms — Product Management, Re-Architected",
  description:
    "The essential product management terms every PM should know — clear, practical definitions without the jargon.",
};

export default async function PmTermsPage() {
  const terms = await listTopTerms(1, "pm");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero showDescription={false} />
        <div className="container pb-20">
          <GlossaryHeader
            title="Terminology"
            domain="pm"
            links={[
              { href: "/pm-terms/flashcards", label: "Test Yourself" },
              { href: "/pm-terms/browse", label: "Browse by Category" },
            ]}
          />
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-8">Top Terms</h3>
          <TermList terms={terms} basePath="/pm-terms" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
