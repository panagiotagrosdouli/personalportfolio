import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects", description: "Research and engineering projects by Panagiota Grosdouli." };
export default function ProjectsPage() {
  return <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"><SiteNav />
    <div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Research & engineering</p>
      <h1 className="mt-5 font-serif text-6xl tracking-[-0.05em]">Projects</h1>
      <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">Selected work in robotic perception, intelligent mobility, and autonomous systems. Open a project for methods, status, and technical details.</p>
      <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {projects.map((project, index) => <Link href={`/projects/${project.slug}`} key={project.slug} className="focus-ring group grid gap-3 py-7 sm:grid-cols-[40px_1fr_auto] sm:items-start">
          <span className="pt-1 font-mono text-xs text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
          <div><h2 className="text-xl font-semibold tracking-tight transition group-hover:text-[var(--accent)]">{project.shortTitle}</h2><p className="mt-2 text-sm text-[var(--muted)]">{project.domain} · {project.year}</p></div><FiArrowUpRight className="mt-1 text-[var(--accent)]" aria-hidden="true" />
        </Link>)}
      </div>
    </div>
  </main>;
}
