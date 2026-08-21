import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import { FlashcardStudio } from "@/components/glossary/FlashcardStudio";
import { GlossaryHeader } from "@/components/glossary/GlossaryHeader";
import { listCategories, listStudyTerms } from "@/lib/glossary";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Flashcards & Quiz — Product Management Terms — Product Management, Re-Architected",
  description: "Study the product management glossary with flashcards, multiple choice, or open-ended quiz modes.",
};

export default async function PmTermsFlashcardsPage() {
  const [terms, categories] = await Promise.all([listStudyTerms("pm"), listCategories("pm")]);

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
              { href: "/pm-terms", label: "Top Terms" },
              { href: "/pm-terms/browse", label: "Browse by Category" },
            ]}
          />
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-8">Test Yourself</h3>
          <FlashcardStudio terms={terms} categories={categories} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
