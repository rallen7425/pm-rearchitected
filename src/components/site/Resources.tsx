import ResourceTiles from "./ResourceTiles";

export default function Resources() {
  return (
    <section id="resources" className="scroll-mt-24">
      <div className="mb-8">
        <div className="text-xs font-medium uppercase tracking-widest text-primary">
          Resource library
        </div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Curated &amp; opinionated
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          References I actually return to — grouped by topic, filtered for taste.
        </p>
      </div>

      <ResourceTiles />
    </section>
  );
}
