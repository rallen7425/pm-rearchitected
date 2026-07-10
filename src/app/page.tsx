import { Suspense } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import SubstackLatest from "@/components/site/SubstackLatest";
import Newsfeed from "@/components/site/Newsfeed";
import Resources from "@/components/site/Resources";
import About from "@/components/site/About";
import Footer from "@/components/site/Footer";

export const revalidate = 3600;

function PostsSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden shadow-card animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="px-6 py-5">
          <div className="h-3 w-16 bg-muted rounded mb-3" />
          <div className="h-5 w-3/4 bg-muted rounded mb-2" />
          <div className="h-3 w-full bg-muted rounded" />
        </div>
      ))}
    </div>
  );
}

function NewsfeedSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden shadow-card animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="px-4 py-3.5">
          <div className="h-3 w-1/2 bg-muted rounded mb-2" />
          <div className="h-4 w-5/6 bg-muted rounded" />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container space-y-16 md:space-y-20 pb-16">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 min-w-0">
              <Suspense fallback={<PostsSkeleton />}>
                <SubstackLatest />
              </Suspense>
            </div>
            <aside className="min-w-0">
              <Suspense fallback={<NewsfeedSkeleton />}>
                <Newsfeed />
              </Suspense>
            </aside>
          </div>
          <Suspense fallback={<div className="h-64 bg-muted/30 rounded-2xl animate-pulse" />}>
            <Resources />
          </Suspense>
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}
