"use client";

import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects, type ProjectStatus } from "@/data/projects";

const statuses = ["All", "Active", "Prototype", "Complete"] as const;
type FilterStatus = "All" | ProjectStatus;

const evidenceSummary = [
  { label: "Research threads", value: projects.length.toString() },
  { label: "Open repositories", value: projects.filter((project) => project.github).length.toString() },
  { label: "Active directions", value: projects.filter((project) => project.status === "Active").length.toString() },
];

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
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <p className="section-kicker mb-4">Research Evidence</p>
        <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.055em] md:text-7xl">
          Projects as miniature research cases.
        </h1>
        <p className="mb-10 mt-6 max-w-3xl text-base leading-8 text-stone-650">
          Each project is framed as evidence for PhD readiness: a research question, a technical method, experiments, limitations, and a future direction. The goal is to show not only what was built, but how the problem was formulated and evaluated.
        </p>

        <div className="mb-12 grid gap-3 border-y border-stone-200 py-6 md:grid-cols-3">
          {evidenceSummary.map((item) => (
            <div key={item.label} className="border-stone-200 md:border-r md:last:border-r-0">
              <p className="font-serif text-5xl leading-none tracking-[-0.05em] text-stone-950">{item.value}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">{item.label}</p>
            </div>
          ))}
        </div>

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
              className="group grid gap-6 px-0 py-8 transition hover:bg-white/60 md:grid-cols-[1fr_220px] md:px-6"
            >
              <div className="min-w-0">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <StatusBadge status={project.status} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">{project.badge}</span>
                  <span className="font-mono text-[10px] text-stone-400">{project.year}</span>
                </div>
                <h2 className="font-serif text-3xl leading-none tracking-[-0.04em] text-stone-950 transition group-hover:text-emerald-950 md:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">{project.objective}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-stone-200 bg-white px-2 py-0.5 font-mono text-[10px] text-stone-500">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.latestUpdate && <p className="mt-3 text-xs italic text-stone-400">↳ {project.latestUpdate}</p>}
              </div>

              <div className="flex flex-col justify-between border-t border-stone-200 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-1">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">Research maturity</p>
                  <p className="mt-2 font-mono text-xl text-stone-700">{project.progress}%</p>
                  <div className="mt-3 h-px w-full bg-stone-200">
                    <div className="h-px bg-stone-950" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
                <div className="mt-6 text-[10px] uppercase tracking-[0.18em] text-stone-400">
                  {project.github ? "Code + artifact path ↗" : "Research documentation →"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
