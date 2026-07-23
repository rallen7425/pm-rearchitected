"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { SearchBox } from "./SearchBox";

export function GlossaryHeader({
  links = [{ href: "/terms/browse", label: "Browse by Category" }],
  defaultSearchOpen = false,
}: {
  links?: { href: string; label: string }[];
  defaultSearchOpen?: boolean;
}) {
  const [searchOpen, setSearchOpen] = useState(defaultSearchOpen);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between gap-4 mb-5">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">AI Terms</h2>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-primary hover:underline whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setSearchOpen((open) => !open)}
            aria-expanded={searchOpen}
            aria-label={searchOpen ? "Close search" : "Search the glossary"}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
      {searchOpen && <SearchBox />}
    </div>
  );
}
