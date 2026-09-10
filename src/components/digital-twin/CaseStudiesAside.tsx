// Right-hand sidebar on /digital-twin. Placeholder content only — Rick will supply
// real case studies later. Deliberately no fabricated figures and no links yet.

const PLACEHOLDER_CASE_STUDIES = [
  {
    category: "FinTech & Payments",
    title: "Embedded Wallet & Earned Wage Access",
    summary:
      "How a pay-distribution platform grew into an embedded financial wellness product for frontline workers.",
  },
  {
    category: "AI & Agentic Practice",
    title: "Agentic Discovery Workflow",
    summary:
      "Bringing agentic AI into product and design discovery to compress research and prototyping cycles.",
  },
  {
    category: "Platform Strategy",
    title: "White Label Wallet Platform",
    summary:
      "Scaling an SDK and API platform that let merchants embed payments and loyalty inside their own apps.",
  },
];

export default function CaseStudiesAside() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">Case Studies</h3>
        <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
          Examples
        </span>
      </div>
      <p className="mb-5 text-xs text-muted-foreground">
        Placeholder previews — full case studies coming soon.
      </p>

      <div className="flex flex-col gap-4">
        {PLACEHOLDER_CASE_STUDIES.map((cs) => (
          <div key={cs.title} className="rounded-xl border border-border bg-card p-4 shadow-card">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {cs.category}
            </div>
            <h4 className="mb-1.5 text-base font-semibold">{cs.title}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{cs.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
