"use client";
import Link from "next/link";
import { useState } from "react";
const links=[{label:"Research",href:"/projects"},{label:"Research vision",href:"/research"},{label:"About",href:"/about"},{label:"CV",href:"/cv"}];
export function SiteNav({theme:_theme}:{theme?:"light"|"dark"}){
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-[#dbe5f0] bg-[#fbfcfe]/95 backdrop-blur-xl">
  <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10" aria-label="Main navigation">
   <Link href="/" className="group flex items-center gap-3"><span className="font-serif text-4xl font-bold leading-none tracking-[-.075em] text-[#102044]">PG<span className="text-[#09b9d5]">.</span></span><span className="hidden border-l border-[#d5e1ec] pl-3 leading-tight sm:block"><span className="block text-xs font-semibold text-[#183255]">Panagiota Grosdouli</span><span className="mt-1 block text-[9px] uppercase tracking-[.18em] text-[#698099]">AI / Robotics / Research</span></span></Link>
   <div className="hidden items-center gap-7 md:flex">{links.map(x=><Link href={x.href} key={x.href} className="text-xs font-semibold tracking-[.04em] text-[#213557] transition hover:text-[#09a8c4]">{x.label}</Link>)}<Link href="/contact" className="rounded-md border border-[#18345d] px-5 py-2.5 text-xs font-semibold text-[#18345d] transition hover:bg-[#18345d] hover:text-white">Contact ↗</Link></div>
   <button type="button" className="rounded-md border border-[#d3dfeb] px-4 py-2 text-sm font-semibold text-[#203b60] md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?"Close":"Menu"}</button>
  </nav>
  {open?<div id="mobile-nav" className="grid gap-4 border-t border-[#d9e5f0] bg-white px-6 py-6 text-sm font-semibold text-[#203b60] md:hidden">{[...links,{label:"Contact",href:"/contact"}].map(x=><Link href={x.href} key={x.href} onClick={()=>setOpen(false)}>{x.label}</Link>)}</div>:null}
 </header>;
}