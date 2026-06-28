"use client";

import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects, type ProjectStatus } from "@/data/projects";

const statuses = ["All", "Active", "Prototype", "Complete"] as const;
type FilterStatus = "All" | ProjectStatus;

function StatusBadge({ status }: { status: ProjectStatus }) {
  const className =
    status === "Active"
      ? "border-emerald-600 text-emerald-700"
      : status === "Prototype"
        ? "border-amber-500 text-amber-700"
        : "border-stone-300 text-stone-500";

  return (
    <span className={`border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] ${className}`}>
      {status}
    </span>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterStatus>("All");
  const filtered = filter === "All" ? projects : projects.filter((project) => project.status === filter);

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <p className="section-kicker mb-4">Research Projects</p>
        <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.055em] md:text-7xl">
          Projects
        </h1>
        <p className="mb-10 mt-6 max-w-2xl text-base leading-8 text-stone-650">
          Each project is an active research investigation with documented methodology, explicit failure cases, and open questions. Projects are not just completed artefacts — they are living research threads.
        </p>

        <div className="mb-12 flex flex-wrap gap-2">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`border px-3 py-1.5 font-mono text-[11px] transition-colors ${
                filter === status ? "border-stone-950 bg-white text-stone-950" : "border-stone-200 text-stone-500 hover:border-stone-500"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex items-start gap-8 px-0 py-7 transition hover:bg-white/60 md:px-6"
            >
              <div className="min-w-0 flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <StatusBadge status={project.status} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">{project.badge}</span>
                  <span className="font-mono text-[10px] text-stone-400">{project.year}</span>
                </div>
                <h2 className="text-lg font-semibold leading-snug text-stone-950 transition group-hover:text-emerald-950">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-stone-600">{project.objective}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-stone-200 bg-white px-2 py-0.5 font-mono text-[10px] text-stone-500">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.latestUpdate && <p className="mt-3 text-xs italic text-stone-400">↳ {project.latestUpdate}</p>}
              </div>

              <div className="hidden shrink-0 flex-col items-end gap-2 pt-1 sm:flex">
                <span className="font-mono text-xs text-stone-500">{project.progress}%</span>
                <div className="h-px w-20 bg-stone-200">
                  <div className="h-px bg-stone-950" style={{ width: `${project.progress}%` }} />
                </div>
                {project.github && <span className="mt-1 text-[10px] text-stone-400">Code ↗</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
