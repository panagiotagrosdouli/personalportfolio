import type { Metadata } from "next";
import Link from "next/link";
import { FiCpu, FiEye, FiMap, FiNavigation, FiRadio, FiShield } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "System Architecture",
  description: "Robotics research system architecture connecting sensing, perception, state estimation, uncertainty, risk, planning, navigation, safety, and simulation modules.",
};

const layers = [
  {
    title: "Sensors",
    icon: FiRadio,
    description: "Camera, IMU, semantic cues, communication signals, and future event-based sensing.",
    modules: ["Camera", "IMU", "Event stream", "Channel state"],
    projects: ["Adaptive Multi-Modal SLAM", "OpenUWOC-AI", "Neuromorphic Robot SNN"],
  },
  {
    title: "Perception",
    icon: FiEye,
    description: "Scene understanding that supports navigation rather than only producing visual labels.",
    modules: ["Segmentation", "Traversability", "Failure cases", "Reliability"],
    projects: ["Urban Segmentation Delivery Robot", "Real-Time Driving Scene Segmentation", "SafeCrossAI"],
  },
  {
    title: "State Estimation",
    icon: FiMap,
    description: "Localization and mapping under uncertainty, degradation, and sensor-fusion constraints.",
    modules: ["VIO", "SLAM", "Sensor fusion", "Estimator health"],
    projects: ["SHIELD-VIO", "AEGIS-VIO", "Adaptive Multi-Modal SLAM"],
  },
  {
    title: "Uncertainty + Risk",
    icon: FiShield,
    description: "Explicit representation of confidence, degradation, risk exposure, and returnability.",
    modules: ["Health index", "Risk maps", "Prediction uncertainty", "Returnability"],
    projects: ["DynNav", "SafeCrossAI", "Risk-Aware UAV RTH"],
  },
  {
    title: "Planning + Navigation",
    icon: FiNavigation,
    description: "Decision-making modules that trade off efficiency, safety, uncertainty exposure, and recovery.",
    modules: ["Rerouting", "Safe mode", "RTH policy", "Planner comparison"],
    projects: ["DynNav", "uncertainty-aware-navigation", "Risk-Aware UAV RTH"],
  },
  {
    title: "Simulation + Evaluation",
    icon: FiCpu,
    description: "Synthetic but clearly labelled experiments for reproducible development before validated benchmarks.",
    modules: ["Seeded scenarios", "Metrics", "Mission logs", "Pending results"],
    projects: ["Formula 1 Race Simulation", "DynNav", "SHIELD-VIO"],
  },
];

export default function SystemArchitecturePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-5xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">System architecture</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">A robotics autonomy stack, not a project list.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">This architecture explains how the research modules connect from sensing to perception, state estimation, uncertainty, risk, planning, navigation, safety, and simulation. It is conceptual and honest: planned modules remain labelled as future work until implemented and evaluated.</p>
        </header>

        <section className="mt-14 grid gap-5" aria-label="Robotics research pipeline">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <article key={layer.title} className="command-panel rounded-[2rem] p-6">
                <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-start">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"><Icon aria-hidden="true" /></div>
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--muted)]">Layer {String(index + 1).padStart(2, "0")}</p>
                      <h2 className="mt-2 font-serif text-3xl tracking-[-0.04em]">{layer.title}</h2>
                    </div>
                  </div>
                  <div>
                    <p className="max-w-3xl text-sm leading-7 text-[var(--muted)]">{layer.description}</p>
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      <section className="rounded-2xl border border-[var(--line)] p-4">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)]">Modules</p>
                        <div className="mt-3 flex flex-wrap gap-2">{layer.modules.map((item) => <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{item}</span>)}</div>
                      </section>
                      <section className="rounded-2xl border border-[var(--line)] p-4">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)]">Connected projects</p>
                        <div className="mt-3 flex flex-wrap gap-2">{layer.projects.map((item) => <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{item}</span>)}</div>
                      </section>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-12 rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Architecture rule</p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--muted)]">The diagram is a research operating model, not a claim of a deployed full robot stack. Each block points to current, prototype, planned, or draft work. Quantitative performance remains pending until reproducible results exist.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/research-map" className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">Open research map</Link>
            <Link href="/mission-logs" className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">Read mission logs</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
