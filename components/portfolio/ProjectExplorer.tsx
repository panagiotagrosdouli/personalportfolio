"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";

const filters = ["All", "Robotics", "SLAM", "Computer Vision", "AI", "UAV", "Autonomous Driving", "Communication Systems"];

function matches(project: Project, filter: string) {
  if (filter === "All") return true;
  const haystack = [project.title, project.objective, project.badge, ...project.tags].join(" ").toLowerCase();
  const needle = filter.toLowerCase();
  if (needle === "robotics") return /robot|navigation|slam|vio|autonomy/.test(haystack);
  if (needle === "ai") return /ai|prediction|learning|vision|trajectory/.test(haystack);
  if (needle === "uav") return /uav|aerial|visual-inertial/.test(haystack);
  if (needle === "autonomous driving") return /intersection|vru|mobility|trajectory|driving/.test(haystack);
  if (needle === "communication systems") return /communication|underwater|sensor/.test(haystack);
  return haystack.includes(needle);
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => projects.filter((project) => matches(project, active)), [active, projects]);

  return (
    <section className="mt-14" aria-labelledby="project-explorer-title">
      <h2 id="project-explorer-title" className="sr-only">Filterable research project list</h2>
      <div className="flex flex-wrap gap-2" role="list" aria-label="Project filters">
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
            <div className="mb-5 h-36 rounded-[1.2rem] border border-[var(--line)] bg-[var(--accent-soft)]/45 p-5 research-grid" aria-hidden="true">
              <div className="flex h-full items-end justify-between">
                <div className="h-20 w-20 rounded-full border border-[var(--accent)]" />
                <div className="h-px flex-1 bg-[var(--accent)]/50" />
                <div className="h-14 w-14 rotate-45 border border-[var(--accent)]" />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-[var(--muted)]">
              <span>{project.status}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h3 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.04em] text-[var(--foreground)]">
              <Link href={`/projects/${project.slug}`} className="focus-ring transition group-hover:text-[var(--accent)]">
                {project.title}
              </Link>
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.objective}</p>
            <dl className="mt-5 grid gap-4 text-sm md:grid-cols-2">
              <div><dt className="font-semibold text-[var(--foreground)]">Contribution</dt><dd className="mt-1 text-[var(--muted)]">{project.methodology.join(" · ")}</dd></div>
              <div><dt className="font-semibold text-[var(--foreground)]">Roadmap</dt><dd className="mt-1 text-[var(--muted)]">{project.future[0]}</dd></div>
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
