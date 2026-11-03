"use client";
import Link from "next/link";
import { useState } from "react";
const links=[{label:"About",href:"/about"},{label:"Research",href:"/projects"},{label:"CV",href:"/cv"},{label:"Contact",href:"/contact"}];
export function SiteNav({theme:_theme}:{theme?:"light"|"dark"}) {
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--background)]/95 backdrop-blur-lg">
  <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-10" aria-label="Main navigation">
   <Link href="/" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center border border-[var(--foreground)] font-serif text-xl font-semibold">PG</span><span className="leading-tight"><span className="block text-sm font-semibold tracking-tight">Panagiota Grosdouli</span><span className="mt-1 block text-[10px] uppercase tracking-[.16em] text-[var(--muted)]">Research & Engineering</span></span></Link>
   <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[.1em] md:flex">{links.map(l=><Link key={l.href} href={l.href} className="transition hover:text-[var(--accent)]">{l.label}</Link>)}</div>
   <button className="text-sm md:hidden" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open?"Close":"Menu"}</button>
  </nav>
  {open?<div className="grid gap-3 border-t border-[var(--line)] px-6 py-5 text-sm md:hidden">{links.map(l=><Link onClick={()=>setOpen(false)} key={l.href} href={l.href}>{l.label}</Link>)}</div>:null}
 </header>;
}
