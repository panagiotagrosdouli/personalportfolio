import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";
export const metadata:Metadata={title:"Research",description:"Two selected projects by Panagiota Grosdouli: trajectory prediction and SHIELD-VIO."};
const items=[
{slug:"safecrossai",number:"01",type:"MEng diploma thesis · 2026 · 10/10",name:"Trajectory Prediction of Vulnerable Road Users",subtitle:"Forecasting trajectories and uncertainty at smart intersections using deep learning.",keywords:["Trajectory forecasting","Deep learning","Road safety"]},
{slug:"shield-vio",number:"02",type:"Independent research prototype",name:"SHIELD-VIO",subtitle:"Exploring uncertainty, degradation detection and recovery in visual-inertial localization.",keywords:["Visual-inertial odometry","Robotics","Uncertainty"]}
];
export default function ProjectsPage(){
 return <main className="min-h-screen"><SiteNav/>
  <section className="bg-[#142521] text-white"><div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24"><p className="text-[11px] font-semibold uppercase tracking-[.23em] text-[#efb09d]">Selected research / 2026</p><h1 className="mt-6 font-serif text-7xl leading-[.9] tracking-tight md:text-8xl">Ideas into <span className="italic text-[#efb09d]">experiments.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#c5d2ca]">Two focused projects at the intersection of prediction, perception and autonomous systems.</p></div></section>
  <div className="academic-page"><div className="space-y-5">{items.map(x=><Link key={x.slug} href={`/projects/${x.slug}`} className="academic-card group grid gap-6 p-7 md:grid-cols-[100px_1fr_90px] md:items-start md:p-10"><div className="font-serif text-7xl italic leading-none text-[#b9c3b8]">{x.number}</div><div><p className="academic-kicker">{x.type}</p><h2 className="mt-5 max-w-2xl font-serif text-4xl font-semibold leading-[1.07] md:text-5xl">{x.name}</h2><p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">{x.subtitle}</p><div className="mt-6 flex flex-wrap gap-2">{x.keywords.map(k=><span key={k} className="border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--muted)]">{k}</span>)}</div></div><div className="text-sm font-semibold text-[var(--accent)] md:text-right">Explore ↗</div></Link>)}</div></div><Footer/>
 </main>;
}
