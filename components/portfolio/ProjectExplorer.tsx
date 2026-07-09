"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { researchThemes } from "@/data/projects";

const filters = ["All", ...researchThemes];

function matches(project: Project, filter: string) {
  if (filter === "All") return true;
  const haystack = [project.title, project.shortTitle, project.domain, project.objective, project.scientificQuestion, project.technicalContribution, project.badge, ...project.tags].join(" ").toLowerCase();
  const needle = filter.toLowerCase();
  if (needle === "uav") return /uav|aerial|return-to-home/.test(haystack);
  if (needle === "ai") return /ai|prediction|learning|vision|neural|snn/.test(haystack);
  if (needle === "vio") return /vio|visual-inertial/.test(haystack);
  return haystack.includes(needle);
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => projects.filter((project) => matches(project, active)), [active, projects]);

  return (
    <section className="mt-14" aria-labelledby="project-explorer-title">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Filterable project system</p>
          <h2 id="project-explorer-title" className="mt-3 font-serif text-4xl tracking-[-0.04em]">Research prototypes, benchmarks, and planned directions.</h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">Filters map projects to scientific domains. Planned work is clearly labelled so the portfolio remains honest and academically credible.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2" role="list" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={active === filter ? "focus-ring rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--background)]" : "focus-ring rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <article key={project.slug} className="group rounded-[1.7rem] border border-[var(--line)] bg-[var(--background)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]">
            <div className="mb-5 rounded-[1.2rem] border border-[var(--line)] bg-[var(--accent-soft)]/45 p-5 research-grid" aria-hidden="true">
              <div className="flex h-36 flex-col justify-between">
                <div className="flex items-center justify-between gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"><span>{project.demoLabel}</span><span>{project.progress}%</span></div>
                <div className="flex items-end gap-2">
                  <div className="h-16 w-16 rounded-full border border-[var(--accent)]" />
                  <div className="h-px flex-1 bg-[var(--accent)]/50" />
                  <div className="h-10 w-10 rotate-45 border border-[var(--accent)]" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-[var(--muted)]">
              <span>{project.status}</span><span>·</span><span>{project.year}</span><span>·</span><span>{project.domain}</span>
            </div>
            <h3 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.04em] text-[var(--foreground)]">
              <Link href={`/projects/${project.slug}`} className="focus-ring transition group-hover:text-[var(--accent)]">{project.title}</Link>
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.objective}</p>
            <dl className="mt-5 grid gap-4 text-sm md:grid-cols-2">
              <div><dt className="font-semibold text-[var(--foreground)]">Scientific question</dt><dd className="mt-1 text-[var(--muted)]">{project.scientificQuestion}</dd></div>
              <div><dt className="font-semibold text-[var(--foreground)]">Contribution</dt><dd className="mt-1 text-[var(--muted)]">{project.technicalContribution}</dd></div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
