"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectCovers } from "@/data/project-covers";
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
          const cover = projectCovers[project.slug];

          return (
            <article key={project.slug} className={`group grid gap-7 rounded-[1.75rem] border p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent)] md:grid-cols-[64px_minmax(0,1fr)_270px] md:items-center md:p-8 ${isThesis ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--line)] bg-[var(--panel)]"}`}>
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
                <div className="mt-4 flex flex-wrap gap-2" aria-label="Project-specific methods">
                  {project.methodology.slice(0, 2).map((method) => (
                    <span key={method} className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[10px] text-[var(--muted)]">{method}</span>
                  ))}
                </div>
              </div>

              <div className="min-w-0 border-t border-[var(--line)] pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.shortTitle} research visuals`} className="focus-ring block overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--background)] transition hover:border-[var(--accent)]">
                  {cover ? (
                    <div className="flex h-40 items-center justify-center bg-[#eaf0ec] p-2">
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        width={900}
                        height={550}
                        unoptimized
                        className="block h-auto max-h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-40 flex-col justify-between overflow-hidden bg-[var(--accent-soft)] p-5">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">Project methodology</span>
                      <div className="space-y-2">
                        {project.methodology.slice(0, 2).map((step, i) => (
                          <div key={step} className="flex items-center gap-2 border-b border-[var(--line)] pb-1.5 text-xs text-[var(--foreground)]">
                            <span className="font-mono text-[10px] text-[var(--accent)]">{String(i+1).padStart(2,"0")}</span><span className="line-clamp-1">{step}</span>
                          </div>
                        ))}
                      </div>
                      <span className="text-[10px] italic text-[var(--muted)]">Methodology overview · not an experimental image</span>
                    </div>
                  )}
                  <div className="flex flex-wrap items-center justify-between gap-2 p-3">
                    <span className="text-xs font-medium text-[var(--foreground)]">{cover?.label ?? "View research workflow"}</span>
                    <FiArrowUpRight className="shrink-0 text-[var(--accent)]" aria-hidden="true" />
                  </div>
                </Link>
                <p className="mt-3 text-[11px] leading-5 text-[var(--muted)]">
                  {cover?.provenance ?? "No verified image published yet"} · {evidenceCount} documented items
                </p>
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
