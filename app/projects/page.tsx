import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Research Projects",
  description: "Research projects in robotics, deep learning, computer vision, localization, planning and intelligent mobility.",
};

const thesis = projects.find((project) => project.slug === "safecrossai");
const secondProject = projects.find((project) => project.slug === "shield-vio");

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Research portfolio</p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">
          Selected projects.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Trajectory prediction, computer vision, and autonomous robotics.
        </p>

        {thesis ? (
          <section className="research-grid mt-12 grid gap-7 rounded-[2rem] border border-[var(--accent)] bg-[var(--accent-soft)] p-7 md:grid-cols-[1fr_auto] md:items-end md:p-10">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Diploma thesis · featured research</p>
              <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-[-0.05em] md:text-5xl">{thesis.title}</h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)]">{thesis.scientificQuestion}</p>
            </div>
            <Link href={`/projects/${thesis.slug}`} className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)]">
              View thesis <FiArrowUpRight aria-hidden="true" />
            </Link>
          </section>
        ) : null}

        {secondProject ? (
          <Link href={`/projects/${secondProject.slug}`} className="focus-ring mt-6 block rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-7 transition hover:border-[var(--accent)] md:p-10">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Research prototype</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.05em] md:text-5xl">{secondProject.shortTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">{secondProject.objective}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">View project <FiArrowUpRight aria-hidden="true" /></span>
          </Link>
        ) : null}
      </div>
    </main>
  );
}
