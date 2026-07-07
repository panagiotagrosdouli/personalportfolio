"use client";

import { useState } from "react";
import Link from "next/link";

const primaryLinks = [
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

const mobileLinks = primaryLinks;

export function SiteNav({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <nav className={isDark ? "sticky top-0 z-30 border-b border-white/10 bg-[#0b0f0d]/85 px-6 py-4 text-sm font-medium text-stone-400 backdrop-blur-xl md:px-10 lg:px-12" : "sticky top-0 z-30 border-b border-stone-300 bg-[#f7f3ea]/95 px-6 py-4 text-sm font-medium text-stone-600 backdrop-blur-xl md:px-10 lg:px-12"}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8">
        <Link href="/" className={`shrink-0 font-serif text-[1.35rem] font-semibold tracking-tight ${isDark ? "text-stone-50" : "text-stone-950"}`}>
          Panagiota Grosdouli
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {primaryLinks.map((link) => (
            <Link key={link.label} href={link.href} className={`whitespace-nowrap transition ${isDark ? "hover:text-white" : "hover:text-stone-950"}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <button type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" className={isDark ? "inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone-300 transition hover:border-emerald-400 hover:text-white lg:hidden" : "inline-flex items-center rounded-full border border-stone-300 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone-800 transition hover:border-stone-950 hover:text-stone-950 lg:hidden"} onClick={() => setIsOpen((current) => !current)}>
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className={`mx-auto mt-5 grid max-w-7xl gap-3 border-t pt-5 lg:hidden ${isDark ? "border-white/10" : "border-stone-300"}`}>
          {mobileLinks.map((link) => (
            <Link key={link.label} href={link.href} className={isDark ? "rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-stone-300 transition hover:border-emerald-400 hover:text-white" : "rounded-2xl border border-stone-300 bg-white/50 px-4 py-3 text-stone-800 transition hover:border-stone-950 hover:text-stone-950"} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
