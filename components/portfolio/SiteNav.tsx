"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Research", href: "/research" },
  { label: "PhD Fit", href: "/research#phd-fit" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Notes", href: "/reading-notes" },
  { label: "Log", href: "/research-log" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 border-b border-stone-200 bg-[#fbfaf7]/95 px-8 py-4 text-[15px] font-medium text-stone-500 backdrop-blur md:px-10 lg:px-12">
      <div className="mx-auto flex max-w-[118rem] items-center justify-between gap-8">
        <Link href="/" className="shrink-0 font-serif text-[1.35rem] font-semibold tracking-tight text-stone-950">
          Panagiota Grosdouli
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="whitespace-nowrap transition hover:text-stone-950">
              {link.label}
            </Link>
          ))}
          <Link href="/search" aria-label="Search" className="text-2xl leading-none text-stone-500 transition hover:text-stone-950">
            ⌕
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="inline-flex items-center rounded-full border border-stone-300 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone-800 transition hover:border-stone-950 hover:text-stone-950 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="mx-auto mt-5 grid max-w-7xl gap-3 border-t border-stone-200 pt-5 lg:hidden">
          {[...navLinks, { label: "Search", href: "/search" }].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 text-stone-800 transition hover:border-stone-950 hover:text-stone-950"
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
