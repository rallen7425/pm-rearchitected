import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import { SearchBox } from "@/components/glossary/SearchBox";

export const metadata: Metadata = {
  title: "Search — AI Glossary — Product Management, Re-Architected",
  description: "Search the full AI glossary, including aliases and abbreviations.",
};

export default function GlossarySearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container pb-20">
          <div className="flex items-baseline justify-between gap-4 mb-8 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Search the Glossary</h2>
            <Link href="/glossary" className="text-sm text-primary hover:underline">
              ← Top Terms
            </Link>
          </div>
          <SearchBox />
        </div>
      </main>
      <Footer />
    </div>
  );
}
