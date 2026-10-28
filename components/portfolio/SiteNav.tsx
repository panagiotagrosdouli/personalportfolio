"use client";
import { useState } from "react";
import Link from "next/link";
const primaryLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "CV", href: "/cv" },
];
export function SiteNav({ theme: _theme }: { theme?: "light" | "dark" }) {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--background)] px-6 py-5 text-sm text-[var(--muted)] md:px-10" aria-label="Primary navigation">
    <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
      <Link href="/" className="focus-ring font-serif text-xl font-semibold tracking-tight text-[var(--foreground)]">Panagiota Grosdouli</Link>
      <div className="hidden items-center gap-8 md:flex">
        {primaryLinks.map(link=><Link key={link.href} href={link.href} className="focus-ring transition hover:text-[var(--foreground)]">{link.label}</Link>)}
        <Link href="/contact" className="focus-ring border-b border-[var(--foreground)] pb-1 font-semibold text-[var(--foreground)]">Contact</Link>
      </div>
      <button type="button" className="focus-ring text-sm font-semibold md:hidden" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"Close":"Menu"}</button>
    </div>
    {isOpen && <div id="mobile-navigation" className="mx-auto mt-5 grid max-w-5xl gap-4 border-t border-[var(--line)] pt-5 md:hidden">{[...primaryLinks,{label:"Contact",href:"/contact"}].map(link=><Link key={link.href} href={link.href} onClick={()=>setIsOpen(false)} className="focus-ring text-[var(--foreground)]">{link.label}</Link>)}</div>}
  </nav>;
}
