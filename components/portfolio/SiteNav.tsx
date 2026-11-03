"use client";
import Link from "next/link";
import { useState } from "react";
const links=[{label:"Research",href:"/projects"},{label:"About",href:"/about"},{label:"CV",href:"/cv"},{label:"Contact",href:"/contact"}];
export function SiteNav({theme:_theme}:{theme?:"light"|"dark"}){
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-40 border-b border-[#d9ded8] bg-[#f6f5f0]/95 backdrop-blur-xl">
  <nav className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-4 md:px-10" aria-label="Main navigation">
   <Link href="/" className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center bg-[#142521] font-serif text-xl font-semibold text-[#f6f5f0]">PG<span className="text-[#eead99]">.</span></span><span className="leading-tight"><span className="block text-sm font-semibold text-[#142521]">Panagiota Grosdouli</span><span className="mt-1 block text-[10px] uppercase tracking-[.14em] text-[#61706b]">AI / Robotics / Research</span></span></Link>
   <div className="hidden items-center gap-8 md:flex">{links.map(x=><Link href={x.href} key={x.href} className="text-xs font-semibold uppercase tracking-[.13em] text-[#142521] transition hover:text-[#c74d31]">{x.label}</Link>)}</div>
   <button type="button" className="text-sm font-semibold md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?"Close":"Menu"}</button>
  </nav>
  {open?<div id="mobile-nav" className="grid gap-4 border-t border-[#d9ded8] px-6 py-5 text-sm font-semibold md:hidden">{links.map(x=><Link href={x.href} key={x.href} onClick={()=>setOpen(false)}>{x.label}</Link>)}</div>:null}
 </header>;
}
