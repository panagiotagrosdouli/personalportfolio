"use client";

import { useState } from "react";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

const statuses = ["All", "In Progress", "Complete"] as const;
type Status = (typeof statuses)[number];

const experiments = [
  {
    id: "exp-trajectory-baseline",
    status: "In Progress",
    date: "2025",
    tags: ["trajectory", "forecasting", "VRU"],
    title: "Trajectory forecasting baseline for vulnerable road users",
    hypothesis: "A simple sequence model can reveal useful failure cases before introducing more complex uncertainty-aware forecasting methods.",
    method: "Prepare trajectory sequences, define input-output windows, train baseline forecasting models, and inspect errors in intersection scenarios.",
    dataset: "Smart-intersection trajectory data / thesis dataset preparation",
    metrics: ["ADE", "FDE", "Miss Rate", "Calibration"],
    results: "Baseline under evaluation",
    observations: "Early inspection focuses on where prediction errors increase: turning behaviour, occlusion-like situations, and pedestrian-vehicle interaction zones.",
    failures: "Likely failure cases include abrupt direction changes, sparse observation windows, and multi-modal futures that a single prediction cannot represent well.",
    improvements: "Add uncertainty-aware outputs, evaluate multi-modal predictions, and compare against stronger sequence models.",
  },
  {
    id: "exp-dynnav-risk",
    status: "In Progress",
    date: "2025",
    tags: ["ROS2", "risk", "navigation"],
    title: "Risk-aware navigation under dynamic agent behaviour",
    hypothesis: "Navigation policies that reason about unsafe outcomes can behave more conservatively around unpredictable agents than policies optimized only for expected performance.",
    method: "Use ROS2-based simulation scenarios with moving agents, compare nominal navigation behaviour with risk-aware decision logic, and inspect unsafe interaction cases.",
    dataset: "Synthetic dynamic navigation scenarios",
    metrics: ["Collision Rate", "Near Misses", "Path Efficiency", "Risk Cost"],
    results: "Prototype design in progress",
    observations: "The most informative scenarios are not average cases, but edge cases where nearby agents change speed or direction unexpectedly.",
    failures: "Overly conservative risk settings may reduce progress or create frozen-robot behaviour in dense scenes.",
    improvements: "Tune risk sensitivity, introduce scenario diversity, and test multi-agent interaction settings.",
  },
  {
    id: "exp-f1-forecasting",
    status: "Complete",
    date: "2025",
    tags: ["forecasting", "probability", "simulation"],
    title: "Probabilistic forecasting with Monte Carlo race simulation",
    hypothesis: "Combining historical performance features with probabilistic simulation can provide more informative forecasts than deterministic ranking alone.",
    method: "Build feature pipelines, estimate uncertainty, run Monte Carlo simulations, and summarize outcome distributions through interactive visualizations.",
    dataset: "Formula 1 historical race and telemetry-derived data",
    metrics: ["Prediction Accuracy", "Rank Error", "Simulation Spread"],
    results: "Interactive forecasting platform completed",
    observations: "Distributional outputs are more useful than single-point predictions when the outcome depends on uncertain race dynamics.",
    failures: "Forecasts remain sensitive to missing contextual variables such as strategy, incidents, weather, and mechanical reliability.",
    improvements: "Add richer contextual features and evaluate calibration across multiple race weekends.",
  },
];

export default function ExperimentsPage() {
  const [filter, setFilter] = useState<Status>("All");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = filter === "All" ? experiments : experiments.filter((experiment) => experiment.status === filter);

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <SiteNav theme="dark" />
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Lab Notebook</p>
        <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.055em] text-white md:text-7xl">Experiments</h1>
        <p className="mb-10 mt-6 max-w-2xl text-base leading-8 text-stone-400">
          A structured record of experimental investigations. Each entry documents hypotheses, methods, results, failure cases, and next steps.
        </p>

        <div className="mb-12 flex flex-wrap gap-2">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`border px-3 py-1.5 font-mono text-[11px] transition-colors ${
                filter === status ? "border-emerald-400 bg-emerald-400 text-stone-950" : "border-stone-800 text-stone-400 hover:border-stone-500"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="divide-y divide-stone-800 border-y border-stone-800">
          {filtered.map((experiment) => (
            <div key={experiment.id}>
              <button onClick={() => setOpen(open === experiment.id ? null : experiment.id)} className="w-full px-0 py-6 text-left transition-colors hover:bg-stone-900/60 md:px-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className={`border px-2 py-0.5 font-mono text-[10px] uppercase ${experiment.status === "In Progress" ? "border-amber-400 text-amber-300" : "border-emerald-400 text-emerald-400"}`}>
                        {experiment.status}
                      </span>
                      <span className="font-mono text-[10px] text-stone-500">{experiment.date}</span>
                      {experiment.tags.map((tag) => (
                        <span key={tag} className="border border-stone-800 px-1.5 py-0.5 font-mono text-[10px] text-stone-500">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-sm font-semibold leading-snug text-white">{experiment.title}</h3>
                    <p className="mt-1.5 text-xs italic leading-relaxed text-stone-500">{experiment.hypothesis}</p>
                  </div>
                  <span className="mt-1 shrink-0 text-xl font-light text-stone-500">{open === experiment.id ? "-" : "+"}</span>
                </div>
              </button>

              {open === experiment.id && (
                <div className="space-y-8 border-t border-stone-800 px-0 pb-8 pt-6 md:px-6">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-400">Method</p>
                      <p className="text-sm leading-7 text-stone-400">{experiment.method}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-400">Dataset</p>
                      <p className="text-sm text-stone-400">{experiment.dataset}</p>
                      <p className="mb-2 mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Metrics</p>
                      <div className="flex flex-wrap gap-1.5">
                        {experiment.metrics.map((metric) => (
                          <span key={metric} className="border border-stone-800 bg-stone-900 px-2 py-0.5 font-mono text-[10px] text-stone-400">{metric}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border border-stone-800 bg-stone-900 px-5 py-4">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-400">Results</p>
                    <p className="font-mono text-sm font-medium text-stone-200">{experiment.results}</p>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-400">Observations</p>
                    <p className="text-sm leading-7 text-stone-400">{experiment.observations}</p>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Failure Cases</p>
                      <p className="text-sm leading-7 text-stone-400">{experiment.failures}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Next Steps</p>
                      <p className="text-sm leading-7 text-stone-400">{experiment.improvements}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer theme="dark" />
    </main>
  );
}
