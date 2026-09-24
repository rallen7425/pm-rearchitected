import type { ReactNode } from "react";
import { TOP_VOICES, type VoiceColumn } from "@/lib/top-voices";

interface VoiceGroup {
  heading: string;
  columns: VoiceColumn[];
}

// Merge each continuesPrevious column into its predecessor's group, so the
// Product Management group (2 data columns) renders under one shared heading
// that spans both of its columns, rather than a heading duplicated/hidden per column.
const GROUPS: VoiceGroup[] = TOP_VOICES.reduce<VoiceGroup[]>((groups, column) => {
  if (column.continuesPrevious && groups.length > 0) {
    groups[groups.length - 1].columns.push(column);
  } else {
    groups.push({ heading: column.heading, columns: [column] });
  }
  return groups;
}, []);

// Wrapper classes per group index (fixed at 3 groups: PM [2 cols wide], Design, Applied AI).
// 4-across at lg, 2-across between sm and lg, 1-across below sm.
const GROUP_CLASSES = [
  "px-5 pt-4 pb-4 sm:col-span-2",
  "px-5 pt-4 pb-4 border-t border-border lg:border-t-0 lg:border-l lg:border-border",
  "px-5 pt-4 pb-4 border-t border-border sm:border-l sm:border-border lg:border-t-0",
];

export default function TopVoices({ header }: { header?: ReactNode }) {
  return (
    <section id="top-voices" className="scroll-mt-24">
      {header}
      <div className="rounded-2xl border border-border bg-card shadow-card">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, gi) => (
            <div key={group.heading} className={`min-w-0 ${GROUP_CLASSES[gi]}`}>
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-widest text-tertiary">
                {group.heading}
              </p>
              <div className={`grid ${group.columns.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {group.columns.map((column, ci) => (
                  <div
                    key={`${column.heading}-${ci}`}
                    className={
                      ci === 0
                        ? "min-w-0"
                        : "min-w-0 mt-3 sm:mt-0 sm:border-l sm:border-border sm:pl-5"
                    }
                  >
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
          ))}
        </div>
      </div>
    </section>
  );
}
