"use client";

import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

const statuses = ["All", "Active", "Prototype", "Complete"] as const;
type Status = (typeof statuses)[number];

const projects = [
  {
    slug: "trajectory-prediction-vrus",
    status: "Active",
    badge: "Diploma Thesis",
    year: "2025–2026",
    title: "Trajectory Prediction of VRUs at Smart Intersections",
    objective:
      "Develop trajectory forecasting methods for vulnerable road users in smart-intersection environments, with attention to uncertainty and safety-relevant decision making.",
    tags: ["trajectory prediction", "VRU", "smart intersections", "uncertainty"],
    latestUpdate: "Current focus: uncertainty-aware modelling and evaluation design.",
    progress: 72,
    github: false,
  },
  {
    slug: "dynnav",
    status: "Active",
    badge: "Independent Research",
    year: "2025–Present",
    title: "DynNav: Risk-Aware Navigation in Dynamic Environments",
    objective:
      "Explore robot navigation policies that reason about unsafe outcomes, dynamic agents, and multi-agent coordination rather than optimizing only average-case behaviour.",
    tags: ["ROS2", "risk-aware navigation", "CVaR", "multi-agent"],
    latestUpdate: "Project shaped after academic discussion and developed independently.",
    progress: 58,
    github: true,
  },
  {
    slug: "f1-ai-forecasting",
    status: "Complete",
    badge: "Applied ML",
    year: "2025",
    title: "F1 AI Forecasting Platform",
    objective:
      "Build a probabilistic race-forecasting platform using historical data, feature engineering, uncertainty modelling, Monte Carlo simulation, and interactive visual analysis.",
    tags: ["forecasting", "simulation", "probability", "data analysis"],
    latestUpdate: "Completed as an applied machine-learning project with distributional outputs.",
    progress: 100,
    github: true,
  },
  {
    slug: "robotics-vision-internship",
    status: "Complete",
    badge: "Applied Robotics",
    year: "2025",
    title: "Robotics & Computer Vision Work",
    objective:
      "Applied perception work in a robotics engineering environment, strengthening the connection between computer vision, autonomy, and safe decision making.",
    tags: ["robotics", "computer vision", "perception"],
    latestUpdate: "Completed internship at OZZIE Robotics.",
    progress: 100,
    github: false,
  },
];

function StatusBadge({ status }: { status: string }) {
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
  const [filter, setFilter] = useState<Status>("All");
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
