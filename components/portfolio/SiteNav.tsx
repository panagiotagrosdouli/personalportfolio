"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Experiments", href: "/experiments" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (<nav className="sticky top-0 z-30 border-b border-stone-200 bg-[#fbfaf7]/90 px-6 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 backdrop-blur md:px-10 lg:px-12"><div className="mx-auto flex max-w-7xl items-center justify-between"><Link href="/" className="font-serif text-2xl normal-case tracking-tight text-stone-950">PG</Link><div className="hidden items-center gap-7 md:flex">{navLinks.map(link=><Link key={link.label} href={link.href} className="transition hover:text-emerald-900">{link.label}</Link>)}</div><button type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" className="inline-flex items-center rounded-full border border-stone-300 px-4 py-2 text-[0.68rem] text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950 md:hidden" onClick={()=>setIsOpen(c=>!c)}>{isOpen?"Close":"Menu"}</button></div>{isOpen&&<div id="mobile-navigation" className="mx-auto mt-5 grid max-w-7xl gap-3 border-t border-stone-200 pt-5 md:hidden">{navLinks.map(link=><Link key={link.label} href={link.href} className="rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950" onClick={()=>setIsOpen(false)}>{link.label}</Link>)}</div>}</nav>);
}
