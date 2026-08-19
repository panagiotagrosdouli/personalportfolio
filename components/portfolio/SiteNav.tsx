"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";

const primaryLinks = [
  { label: "Research", href: "/research-map" },
  { label: "Projects", href: "/projects" },
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
    <nav className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--background)]/92 px-5 py-3 text-sm font-medium text-[var(--muted)] backdrop-blur-xl md:px-8" aria-label="Primary navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="focus-ring shrink-0 transition hover:text-[var(--accent)]" aria-label="Panagiota Grosdouli research homepage">
          <span className="block font-serif text-base font-semibold leading-none tracking-[-0.02em] text-[var(--foreground)]">Panagiota Grosdouli</span>
          <span className="mt-1 block font-mono text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Robotics · Autonomy · Uncertainty</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {primaryLinks.map((link) => (
            <Link key={link.label} href={link.href} className="focus-ring whitespace-nowrap transition hover:text-[var(--foreground)]">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="focus-ring rounded-full bg-[var(--foreground)] px-5 py-2.5 text-xs font-semibold text-[var(--background)] transition hover:bg-[var(--accent)]">
            Contact
          </Link>
          <button type="button" onClick={toggleTheme} className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--foreground)] transition hover:border-[var(--accent)]" aria-label="Toggle dark and light mode">
            {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button type="button" onClick={toggleTheme} className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--foreground)]" aria-label="Toggle dark and light mode">
            {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <button type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" className="focus-ring rounded-full border border-[var(--line)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]" onClick={() => setIsOpen((current) => !current)}>
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="mx-auto mt-4 grid max-w-7xl gap-2 border-t border-[var(--line)] pt-4 md:hidden">
          {[...primaryLinks, { label: "Contact", href: "/contact" }].map((link) => (
            <Link key={link.label} href={link.href} className="focus-ring rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-[var(--foreground)]" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
