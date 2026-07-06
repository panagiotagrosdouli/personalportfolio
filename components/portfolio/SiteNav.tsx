"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Research", href: "/research" },
  { label: "Agenda", href: "/research-agenda" },
  { label: "PhD Fit", href: "/phd-fit" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Notes", href: "/reading-notes" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <nav
      className={
        isDark
          ? "sticky top-0 z-30 border-b border-stone-800 bg-stone-950/90 px-8 py-4 text-[15px] font-medium text-stone-400 backdrop-blur md:px-10 lg:px-12"
          : "sticky top-0 z-30 border-b border-stone-200 bg-[#fbfaf7]/95 px-8 py-4 text-[15px] font-medium text-stone-500 backdrop-blur md:px-10 lg:px-12"
      }
    >
      <div className="mx-auto flex max-w-[118rem] items-center justify-between gap-8">
        <Link href="/" className={`shrink-0 font-serif text-[1.35rem] font-semibold tracking-tight ${isDark ? "text-stone-50" : "text-stone-950"}`}>
          Panagiota Grosdouli
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={`whitespace-nowrap transition ${isDark ? "hover:text-white" : "hover:text-stone-950"}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/search" aria-label="Search" className={`text-sm transition ${isDark ? "text-stone-400 hover:text-white" : "text-stone-500 hover:text-stone-950"}`}>
            Search
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className={
            isDark
              ? "inline-flex items-center rounded-full border border-stone-700 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone-300 transition hover:border-stone-400 hover:text-white lg:hidden"
              : "inline-flex items-center rounded-full border border-stone-300 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone-800 transition hover:border-stone-950 hover:text-stone-950 lg:hidden"
          }
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className={`mx-auto mt-5 grid max-w-7xl gap-3 border-t pt-5 lg:hidden ${isDark ? "border-stone-800" : "border-stone-200"}`}>
          {[...navLinks, { label: "Search", href: "/search" }].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                isDark
                  ? "rounded-2xl border border-stone-800 bg-stone-900/60 px-4 py-3 text-stone-300 transition hover:border-stone-400 hover:text-white"
                  : "rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 text-stone-800 transition hover:border-stone-950 hover:text-stone-950"
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
