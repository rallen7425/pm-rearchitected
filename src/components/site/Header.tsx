"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Home", external: false },
  { href: "https://fromoutofthenoise.substack.com/", label: "Blog", external: true },
  { href: "/resources", label: "Resources", external: false },
  { href: "/terms", label: "AI Terms", external: false },
  { href: "/about", label: "About", external: false },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <a href="/about" className="flex items-center gap-2.5">
          <img src="/logo.gif" alt="Rick Allen" className="h-8 w-8 rounded-lg object-cover" />
          <span className="text-sm font-semibold tracking-tight">Rick Allen</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          <span className="relative flex h-1.5 w-1.5 mr-3">
            <span className="absolute inset-0 rounded-full bg-signal animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
          </span>
          {NAV.map(({ href, label, external }) => {
            const isActive = !external && pathname === href;
            return (
              <a
                key={href}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={
                  isActive
                    ? "px-3 py-1.5 rounded-md bg-primary text-primary-foreground font-medium transition-colors"
                    : "px-3 py-1.5 rounded-md text-foreground hover:bg-secondary transition-colors"
                }
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md text-foreground hover:bg-secondary transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container flex flex-col py-2 text-sm">
            {NAV.map(({ href, label, external }) => {
              const isActive = !external && pathname === href;
              return (
                <a
                  key={href}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setMobileOpen(false)}
                  className={
                    isActive
                      ? "px-3 py-2.5 rounded-md bg-primary text-primary-foreground font-medium transition-colors"
                      : "px-3 py-2.5 rounded-md text-foreground hover:bg-secondary transition-colors"
                  }
                >
                  {label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
