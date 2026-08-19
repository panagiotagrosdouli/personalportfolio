"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiCheck, FiCode } from "react-icons/fi";
import type { Project } from "@/data/projects";

const filters = ["All", "Thesis", "Localization", "Planning", "Perception", "Mobility"];

function matches(project: Project, filter: string) {
  if (filter === "All") return true;
  if (filter === "Thesis") return project.slug === "safecrossai";
  const haystack = [project.title, project.domain, project.objective, ...project.tags].join(" ").toLowerCase();
  if (filter === "Localization") return /slam|vio|localization|sensor fusion/.test(haystack);
  if (filter === "Planning") return /navigation|planning|risk|safety/.test(haystack);
  if (filter === "Perception") return /perception|vision|segmentation|prediction/.test(haystack);
  if (filter === "Mobility") return /intersection|mobility|driving|trajectory|uav/.test(haystack);
  return true;
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => projects.filter((project) => matches(project, active)), [active, projects]);

  return (
    <section className="mt-14" aria-labelledby="project-explorer-title">
      <h2 id="project-explorer-title" className="sr-only">Research project evidence</h2>
      <div className="flex flex-wrap gap-2" role="list" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={active === filter ? "focus-ring rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--background)]" : "focus-ring rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-5">
        {visible.map((project, index) => {
          const isThesis = project.slug === "safecrossai";
          const evidenceCount = project.implemented.length + project.prototype.length;

          return (
            <article key={project.slug} className={`group grid gap-7 rounded-[1.75rem] border p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent)] md:grid-cols-[90px_1fr_250px] md:items-center md:p-8 ${isThesis ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--line)] bg-[var(--panel)]"}`}>
              <div>
                <span className="font-serif text-5xl tracking-[-0.06em] text-[var(--muted)]">{(index + 1).toString().padStart(2, "0")}</span>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em]">
                  <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[var(--accent)]">{isThesis ? "Diploma thesis" : project.status}</span>
                  {project.repositoryUrl ? <span className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] px-3 py-1 text-[var(--muted)]"><FiCode aria-hidden="true" /> Public repo</span> : null}
                </div>
                <h3 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.05em] md:text-4xl">
                  <Link href={`/projects/${project.slug}`} className="focus-ring transition group-hover:text-[var(--accent)]">{project.shortTitle}</Link>
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">{project.scientificQuestion}</p>
              </div>

              <div className="border-t border-[var(--line)] pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--muted)]">Evidence now</p>
                <p className="mt-2 font-serif text-4xl tracking-[-0.05em]">{evidenceCount}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">implemented + prototype items</p>
                <Link href={`/projects/${project.slug}`} className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                  Inspect evidence <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-3 text-sm text-[var(--muted)]">
        <FiCheck className="text-[var(--accent)]" aria-hidden="true" />
        Planned work is separated from implemented evidence on every research page.
      </div>
    </section>
  );
}
