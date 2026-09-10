import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { ChatPanel } from "@/components/digital-twin/ChatPanel";
import CaseStudiesAside from "@/components/digital-twin/CaseStudiesAside";

export const metadata: Metadata = {
  title: "Digital Twin — Product Management, Re-Architected",
  description:
    "Ask Rick Allen's Digital Twin about his career, philosophy, and approach to product management, in his own voice.",
};

export default function DigitalTwinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container pt-10 pb-16 md:pt-12">
          <section className="max-w-4xl fade-up">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Rick&apos;s <span className="text-gradient">Digital Twin.</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              An AI built from Rick&apos;s own writing and career history. Ask it about his
              background, his philosophy on product management, or where he&apos;s headed next.
            </p>
          </section>

          <div className="mt-10 grid grid-cols-1 gap-10 border-t border-border pt-10 lg:grid-cols-3">
            <div className="lg:col-span-2 lg:border-r lg:border-border lg:pr-10">
              <ChatPanel />
            </div>
            <aside className="lg:col-span-1">
              <CaseStudiesAside />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
