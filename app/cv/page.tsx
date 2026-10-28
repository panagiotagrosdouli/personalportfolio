import Link from "next/link";import { SiteNav } from "@/components/portfolio/SiteNav";import { projects } from "@/data/projects";
export default function CVPage(){return <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"><SiteNav/><article className="mx-auto max-w-3xl px-6 py-20 md:px-10">
 <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Academic CV</p><h1 className="mt-5 font-serif text-6xl tracking-[-0.05em]">Panagiota Grosdouli</h1>
 <p className="mt-5 text-lg text-[var(--muted)]">Electrical & Computer Engineering · Robotics & AI</p>
 <a href="/cv.pdf" target="_blank" rel="noreferrer" className="mt-7 inline-block text-sm font-semibold text-[var(--accent)]">Download full PDF CV ↗</a>
 <section className="mt-12 border-t border-[var(--line)] pt-7"><h2 className="font-semibold">Education</h2><p className="mt-4 text-[var(--muted)]">MEng Electrical & Computer Engineering · Democritus University of Thrace · 2020–2026</p></section>
 <section className="mt-9 border-t border-[var(--line)] pt-7"><h2 className="font-semibold">Research interests</h2><p className="mt-4 leading-7 text-[var(--muted)]">SLAM, VIO, sensor fusion, autonomous navigation, trajectory prediction, and uncertainty-aware AI.</p></section>
 <section className="mt-9 border-t border-[var(--line)] pt-7"><h2 className="font-semibold">Projects</h2><div className="mt-4 space-y-3">{projects.slice(0,5).map(project=><Link href={`/projects/${project.slug}`} className="block text-sm text-[var(--accent)] hover:underline" key={project.slug}>{project.shortTitle} ↗</Link>)}</div></section>
 <section className="mt-9 border-t border-[var(--line)] pt-7"><h2 className="font-semibold">Contact</h2><a className="mt-4 inline-block text-[var(--accent)]" href="mailto:p.g2a15@gmail.com">p.g2a15@gmail.com ↗</a></section>
 </article></main>;}
