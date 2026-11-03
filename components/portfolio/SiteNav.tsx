"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav({ theme: _theme }: { theme?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--background)]/95 px-5 py-5 backdrop-blur-md md:px-10" aria-label="Main navigation">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold tracking-tight text-[var(--foreground)]">Panagiota Grosdouli<span className="text-[var(--muted)]">.</span></Link>
        <div className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-[var(--foreground)]">{link.label}</Link>)}
        </div>
        <button onClick={() => setOpen(!open)} className="text-sm md:hidden" aria-label="Toggle menu" aria-expanded={open}>{open ? "Close" : "Menu"}</button>
      </div>
      {open && <div className="mx-auto mt-5 grid max-w-6xl gap-4 border-t border-[var(--line)] pt-5 text-sm md:hidden">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</div>}
    </nav>
  );
}
