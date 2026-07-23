import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import { FlashcardStudio } from "@/components/glossary/FlashcardStudio";
import { listCategories, listStudyTerms } from "@/lib/glossary";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Flashcards & Quiz — AI Glossary — Product Management, Re-Architected",
  description: "Study the AI glossary with flashcards, multiple choice, or open-ended quiz modes.",
};

export default async function GlossaryFlashcardsPage() {
  const [terms, categories] = await Promise.all([listStudyTerms(), listCategories()]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container pb-20">
          <div className="flex items-baseline justify-between gap-4 mb-8 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Flashcards &amp; Quiz</h2>
            <Link href="/glossary" className="text-sm text-primary hover:underline">
              ← Top Terms
            </Link>
          </div>
          <FlashcardStudio terms={terms} categories={categories} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
