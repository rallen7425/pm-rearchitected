import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import { TermList } from "@/components/glossary/TermList";
import { listTopTerms } from "@/lib/glossary";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Terminology — Product Management, Re-Architected",
  description:
    "Key product management and AI terms, jargon, and buzzwords — clear, practical definitions without the jargon.",
};

export default async function TerminologyPage() {
  const [pmTerms, aiTerms] = await Promise.all([listTopTerms(1, "pm"), listTopTerms(2, "ai")]);

  const topPmTerms = pmTerms.slice(0, 10);
  const topAiTerms = aiTerms.slice(0, 10);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero showDescription={false} />
        <div className="container pb-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Terminology, Jargon, and Buzz Words
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  Product Management Terminology
                </h3>
                <Link href="/pm-terms" className="text-sm text-primary hover:underline whitespace-nowrap">
                  Read More
                </Link>
              </div>
              <TermList terms={topPmTerms} basePath="/pm-terms" columns={1} />
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">AI Terminology</h3>
                <Link href="/terms" className="text-sm text-primary hover:underline whitespace-nowrap">
                  Read More
                </Link>
              </div>
              <TermList terms={topAiTerms} basePath="/terms" columns={1} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
