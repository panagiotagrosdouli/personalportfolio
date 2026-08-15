"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiMoon, FiSun } from "react-icons/fi";

const primaryLinks = [
  { label: "Research", href: "/research-map" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "CV", href: "/cv" },
  { label: "About", href: "/about" },
];

type SiteNavProps = {
  theme?: "light" | "dark";
};

function getInitialThemePreference(theme?: SiteNavProps["theme"]) {
  if (theme) return theme === "dark";
  if (typeof window === "undefined") return true;
  const stored = window.localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return true;
}

export function SiteNav({ theme }: SiteNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => getInitialThemePreference(theme));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  function toggleTheme() {
    setIsDark((current) => {
      const next = !current;
      window.localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/85 px-5 py-3 backdrop-blur-2xl md:px-9 lg:px-12" aria-label="Main navigation">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6">
        <Link href="/" className="focus-ring group flex shrink-0 items-center gap-3" aria-label="Panagiota Grosdouli homepage">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--foreground)] text-[0.68rem] font-black tracking-[-0.04em] text-[var(--background)] transition group-hover:rotate-6">PG</span>
          <span>
            <span className="block text-sm font-bold leading-none tracking-[-0.025em] text-[var(--foreground)]">Panagiota Grosdouli</span>
            <span className="mt-1 block font-mono text-[0.54rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">AI · Robotics · Research</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {primaryLinks.map((link) => (
            <Link key={link.label} href={link.href} className="focus-ring text-xs font-semibold text-[var(--muted)] transition hover:text-[var(--foreground)]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTheme} className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--foreground)] transition hover:border-[var(--accent)]" aria-label="Toggle dark and light mode">
            {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <Link href="/contact" className="focus-ring hidden items-center gap-2 rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-4 py-2.5 text-xs font-bold text-[var(--background)] transition hover:-translate-y-0.5 sm:inline-flex">
            Contact <FiArrowUpRight />
          </Link>
          <button type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" className="focus-ring inline-flex items-center rounded-full border border-[var(--line)] px-4 py-2.5 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[var(--foreground)] lg:hidden" onClick={() => setIsOpen((current) => !current)}>
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="mx-auto mt-3 grid max-w-[1440px] gap-2 border-t border-[var(--line)] pt-3 lg:hidden">
          {[...primaryLinks, { label: "Contact", href: "/contact" }].map((link) => (
            <Link key={link.label} href={link.href} className="focus-ring flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3.5 text-sm font-semibold text-[var(--foreground)]" onClick={() => setIsOpen(false)}>
              {link.label} <FiArrowUpRight className="text-[var(--muted)]" />
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
