import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { ProjectExplorer } from "@/components/portfolio/ProjectExplorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Research projects in robotics, SLAM, VIO, risk-aware navigation, semantic perception, UAV autonomy, autonomous driving safety, communications, and neuromorphic robotics.",
};

const summary = [
  ["Research threads", projects.length.toString()],
  ["Open repositories", projects.filter((project) => project.github).length.toString()],
  ["Active / prototype", projects.filter((project) => ["Active", "Research Prototype", "In Progress"].includes(project.status)).length.toString()],
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Projects</p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">A coherent research program for robust autonomy under uncertainty.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">Each project is framed by a scientific question, technical contribution, implementation status, roadmap, limitations, and future research direction. Placeholder visuals are explicitly labelled until verified figures, GIFs, benchmarks, and videos are produced.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/research-map" className="focus-ring rounded-full border border-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent)]">View research map</Link>
          <Link href="/publications" className="focus-ring rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]">Planned outputs</Link>
        </div>
        <section className="mt-12 grid border-y border-[var(--line)] md:grid-cols-3" aria-label="Project portfolio summary">
          {summary.map(([label, value]) => <div key={label} className="border-b border-[var(--line)] py-6 md:border-b-0 md:border-r md:last:border-r-0"><p className="font-serif text-5xl tracking-[-0.05em]">{value}</p><p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{label}</p></div>)}
        </section>
        <ProjectExplorer projects={projects} />
      </div>
    </main>
  );
}
