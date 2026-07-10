export default function Hero() {
  return (
    <section id="top" className="container pt-8 pb-8 md:pt-10 md:pb-10">
      <div className="max-w-3xl fade-up">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          Product Management,{" "}
          <span className="text-gradient">Re-Architected.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          The fundamentals of product management haven&apos;t changed, but the
          noise is louder than ever. Everything product managers and designers
          need to cut through it — in one place.
        </p>
      </div>
    </section>
  );
}
