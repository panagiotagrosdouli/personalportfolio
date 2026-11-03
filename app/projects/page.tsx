import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";
import { projects } from "@/data/projects";
export const metadata:Metadata={title:"Research",description:"Selected research by Panagiota Grosdouli."};
const items=["safecrossai","shield-vio"].map(slug=>projects.find(p=>p.slug===slug)).filter((p):p is (typeof projects)[number]=>Boolean(p));
export default function ProjectsPage(){
 return <main className="min-h-screen"><SiteNav/><div className="academic-page"><p className="academic-kicker">Research</p><h1 className="mt-5 font-serif text-6xl font-semibold md:text-7xl">Selected projects.</h1><p className="mt-5 text-base text-[var(--muted)]">Deep learning, perception and autonomous systems.</p>
  <div className="mt-14 space-y-6">{items.map((p,i)=><Link key={p.slug} href={`/projects/${p.slug}`} className="academic-card grid gap-8 p-8 md:grid-cols-[100px_1fr_auto] md:items-start"><span className="academic-kicker">0{i+1} / {i===0?"Thesis":"Research"}</span><div><h2 className="font-serif text-4xl font-semibold">{i===0?"Trajectory Prediction of Vulnerable Road Users":p.shortTitle}</h2><p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">{i===0?"Forecasting motion and uncertainty at smart intersections.":p.objective}</p><p className="mt-3 text-xs text-[var(--muted)]">{i===0?"MEng thesis · 2026 · 10/10":p.status}</p></div><span className="text-sm font-semibold text-[var(--accent)]">View ↗</span></Link>)}</div>
 </div><Footer/></main>;
}
