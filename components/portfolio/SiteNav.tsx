"use client";
import Link from "next/link";
import { useState } from "react";
const links=[{label:"Home",href:"/"},{label:"Research",href:"/projects"},{label:"CV",href:"/cv"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}];
export function SiteNav({theme:_theme}:{theme?:"light"|"dark"}){
 void _theme;
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-[#e7e7e7] bg-white/95 backdrop-blur-lg">
  <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-5 md:px-12 lg:px-16" aria-label="Main navigation">
   <Link href="/" className="flex items-center gap-4 text-[#101010]"><span className="text-lg font-bold tracking-[-.045em] sm:text-xl">Panagiota Grosdouli</span><span className="text-xl font-semibold text-[#c40012]">/</span><span className="hidden text-sm text-[#555] sm:block">Research Portfolio</span></Link>
   <div className="hidden items-center gap-8 md:flex">{links.map(x=><Link href={x.href} key={x.href} className="border-b-2 border-transparent pb-1 text-sm font-medium text-[#151515] transition hover:border-[#c40012] hover:text-[#c40012]">{x.label}</Link>)}</div>
   <button type="button" className="rounded border border-[#dedede] px-4 py-2 text-sm font-medium md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?"Close":"Menu"}</button>
  </nav>
  {open?<div id="mobile-nav" className="grid gap-4 border-t border-[#eee] bg-white px-6 py-5 text-sm font-medium md:hidden">{links.map(x=><Link href={x.href} key={x.href} onClick={()=>setOpen(false)}>{x.label}</Link>)}</div>:null}
 </header>;
}