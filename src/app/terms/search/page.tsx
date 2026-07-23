import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import { GlossaryHeader } from "@/components/glossary/GlossaryHeader";

export const metadata: Metadata = {
  title: "Search — AI Glossary — Product Management, Re-Architected",
  description: "Search the full AI glossary, including aliases and abbreviations.",
};

export default function GlossarySearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero showDescription={false} />
        <div className="container pb-20">
          <GlossaryHeader defaultSearchOpen />
        </div>
      </main>
      <Footer />
    </div>
  );
}
