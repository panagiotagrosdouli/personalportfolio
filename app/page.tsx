import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";
import { projects } from "@/data/projects";
const selected=["safecrossai","shield-vio"].map(slug=>projects.find(p=>p.slug===slug)).filter((p):p is (typeof projects)[number]=>Boolean(p));
export default function Home(){
 return <main className="min-h-screen"><SiteNav/>
  <section className="border-b border-[var(--line)]"><div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_.75fr] md:items-center md:px-10 md:py-28">
   <div><p className="academic-kicker">Electrical & Computer Engineering · MEng 2026</p><div className="academic-rule mt-7"/>
    <h1 className="mt-8 font-serif text-7xl font-medium leading-[.95] tracking-[-.04em] md:text-[6.5rem]">Panagiota<br/>Grosdouli</h1>
    <p className="mt-8 text-xl font-medium leading-8">Machine Learning · Computer Vision · Robotics</p>
    <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">Research in trajectory prediction and experience in robotic perception. Interested in intelligent, reliable autonomous systems.</p>
    <div className="mt-9 flex flex-wrap gap-3"><Link href="/projects" className="bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white">Selected research ↗</Link><Link href="/cv" className="border border-[var(--foreground)] px-6 py-3 text-sm font-semibold">View CV</Link></div>
   </div>
   <div className="relative mx-auto w-full max-w-[330px]"><div className="absolute -left-4 -top-4 h-full w-full border border-[var(--accent)]"/><Image src={`${process.env.GITHUB_ACTIONS==="true"?"/personalportfolio":""}/profile.png`} alt="Panagiota Grosdouli" width={720} height={900} priority sizes="(max-width: 768px) 86vw, 330px" className="relative aspect-[4/5] w-full object-cover"/></div>
  </div></section>
  <section className="academic-page"><div className="mb-10 flex flex-wrap items-end justify-between gap-6"><div><p className="academic-kicker">Research portfolio</p><h2 className="mt-4 font-serif text-5xl font-semibold">Selected work</h2></div><Link href="/projects" className="text-sm font-semibold text-[var(--accent)]">View research ↗</Link></div>
   <div className="grid gap-6 md:grid-cols-2">{selected.map((p,i)=><Link className="academic-card flex min-h-64 flex-col justify-between p-8" key={p.slug} href={`/projects/${p.slug}`}><div><span className="academic-kicker">{i===0?"01 / Diploma thesis":"02 / Research prototype"}</span><h3 className="mt-6 font-serif text-4xl font-semibold leading-tight">{i===0?"Trajectory Prediction of Vulnerable Road Users":p.shortTitle}</h3><p className="mt-4 text-sm leading-7 text-[var(--muted)]">{i===0?"Deep learning for motion forecasting and road safety.":"Uncertainty-aware visual-inertial localization."}</p></div><span className="mt-8 text-sm font-semibold text-[var(--accent)]">Explore project ↗</span></Link>)}</div>
  </section>
  <section className="border-y border-[var(--line)] bg-white"><div className="mx-auto grid max-w-6xl gap-7 px-6 py-16 md:grid-cols-[.65fr_1.35fr] md:px-10"><div><p className="academic-kicker">Experience</p><h2 className="mt-4 font-serif text-4xl">Applied Computer Vision</h2></div><div><h3 className="text-lg font-semibold">OZZIE Robotics <span className="font-normal text-[var(--muted)]">· Internship, 2025</span></h3><p className="mt-3 text-base leading-7 text-[var(--muted)]">Trained and evaluated YOLO-based road and sidewalk segmentation for an autonomous delivery robot.</p></div></div></section>
  <section className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6 py-16 md:px-10"><div><p className="academic-kicker">Opportunities</p><h2 className="mt-3 font-serif text-4xl">Open to engineering & research.</h2></div><Link href="/contact" className="border border-[var(--foreground)] px-6 py-3 text-sm font-semibold">Get in touch ↗</Link></section>
  <Footer/>
 </main>;
}
