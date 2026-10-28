import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projectMap, projects } from "@/data/projects";
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
 const {slug}=await params; const project=projectMap[slug]; return { title:project?.title ?? "Project", description:project?.scientificQuestion ?? "Research project" };
}
export default async function ProjectDetailPage({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params; const project=projectMap[slug]; if(!project) notFound();
 return <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"><SiteNav />
 <article className="mx-auto max-w-3xl px-6 py-20 md:px-10">
 <Link href="/projects" className="text-sm text-[var(--accent)]">← All projects</Link>
 <p className="mt-12 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">{project.domain} · {project.status}</p>
 <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.05em] md:text-6xl">{project.title}</h1>
 <p className="mt-6 text-lg leading-8 text-[var(--muted)]">{project.scientificQuestion}</p>
 <div className="mt-10 flex flex-wrap gap-5 text-sm font-semibold">{project.repositoryUrl && <a className="text-[var(--accent)] hover:underline" target="_blank" rel="noreferrer" href={project.repositoryUrl}>GitHub ↗</a>}<Link href="/contact" className="text-[var(--accent)] hover:underline">Contact ↗</Link></div>
 <div className="mt-14 border-t border-[var(--line)] pt-8"><h2 className="text-lg font-semibold">Research objective</h2><p className="mt-3 leading-8 text-[var(--muted)]">{project.objective}</p></div>
 <details className="mt-9 border-t border-[var(--line)] pt-6"><summary className="cursor-pointer font-semibold">Technical contribution & context</summary><p className="mt-4 leading-8 text-[var(--muted)]">{project.technicalContribution}</p></details>
 </article></main>;
}
