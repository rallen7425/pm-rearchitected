import type { ReactNode } from "react";
import { TOP_VOICES } from "@/lib/top-voices";

// Border classes per column index (fixed at 4 columns): 4-across at lg, 2-across
// between sm and lg, 1-across below sm. See src/lib/top-voices.ts for the data shape.
const COLUMN_CLASSES = [
  "px-5 pt-4 pb-4",
  "px-5 pb-4 pt-0 sm:pt-4 sm:border-l sm:border-border",
  "px-5 pt-4 pb-4 border-t border-border lg:border-t-0 lg:border-l lg:border-border",
  "px-5 pt-4 pb-4 border-t border-border sm:border-l sm:border-border lg:border-t-0",
];

export default function TopVoices({ header }: { header?: ReactNode }) {
  return (
    <section id="top-voices" className="scroll-mt-24">
      {header}
      <div className="rounded-2xl border border-border bg-card shadow-card">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {TOP_VOICES.map((column, i) => (
            <div key={`${column.heading}-${i}`} className={`min-w-0 ${COLUMN_CLASSES[i]}`}>
              {column.continuesPrevious ? (
                <p
                  aria-hidden="true"
                  className="mb-2.5 hidden min-h-[30px] items-end text-[11px] font-semibold uppercase tracking-widest text-tertiary sm:flex sm:invisible"
                >
                  {column.heading}
                </p>
              ) : (
                <p className="mb-2.5 flex min-h-[30px] items-end text-[11px] font-semibold uppercase tracking-widest text-tertiary">
                  {column.heading}
                </p>
              )}
              <ul className="flex flex-col gap-2">
                {column.voices.map((voice) => (
                  <li key={voice.name} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold text-foreground">{voice.name}</span>{" "}
                      {voice.links.map((link, li) => (
                        <span key={link.url}>
                          {li > 0 && <span className="text-tertiary"> · </span>}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {link.label}
                          </a>
                        </span>
                      ))}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
