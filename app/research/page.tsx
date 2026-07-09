import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Reveal } from "@/components/portfolio/Reveal";

export const metadata: Metadata = {
  title: "Research",
  description: "Research vision, central questions, themes and future directions in robotics, SLAM, sensor fusion, uncertainty-aware autonomy and AI for robotics.",
};

const themes = [
  {
    title: "SLAM",
    motivation: "Robots need maps and localization estimates that remain useful when visual features, lighting and motion conditions degrade.",
    related: "Adaptive Multi-Modal SLAM, SHIELD-VIO",
    future: "Benchmark adaptive fusion against fixed baselines on degraded sequences.",
  },
  {
    title: "Visual-Inertial Odometry",
    motivation: "VIO failures often begin before complete tracking loss, so estimator health should be measured and acted on early.",
    related: "SHIELD-VIO, AEGIS-VIO",
    future: "Connect health indices to recovery policies and estimator-consistency diagnostics.",
  },
  {
    title: "Sensor Fusion",
    motivation: "Different sensors fail differently; robust autonomy needs reliability-aware fusion rather than fixed confidence assumptions.",
    related: "Adaptive Multi-Modal SLAM, OpenUWOC-AI",
    future: "Expose calibration, uncertainty and reliability estimates in project reports.",
  },
  {
    title: "Risk-Aware Navigation",
    motivation: "A shortest path is not necessarily safe when maps are incomplete, obstacles move or returnability is uncertain.",
    related: "DynNav, uncertainty-aware-navigation, Risk-Aware UAV Return-to-Home",
    future: "Evaluate collision risk, returnability and path-efficiency trade-offs in reproducible simulations.",
  },
  {
    title: "Semantic Perception",
    motivation: "Robots in urban environments require scene understanding that distinguishes free space, obstacles and safety-relevant context.",
    related: "Urban Segmentation Delivery Robot, Real-Time Driving Scene Segmentation",
    future: "Add segmentation overlays, failure cases and uncertainty-aware confidence reporting.",
  },
  {
    title: "Autonomous Driving Safety",
    motivation: "Intelligent mobility systems must reason about vulnerable road users, intersection context and prediction uncertainty.",
    related: "SafeCrossAI, Formula 1 Race Simulation",
    future: "Connect trajectory prediction, risk scoring and interpretable safety decisions.",
  },
  {
    title: "UAV Autonomy",
    motivation: "Aerial platforms magnify localization, planning and return-to-home risk because failures can quickly become safety-critical.",
    related: "Risk-Aware UAV Return-to-Home, SHIELD-VIO",
    future: "Build a marked synthetic simulation first, then add real or benchmark data only when available.",
  },
  {
    title: "Neuromorphic Robotics",
    motivation: "Event-driven sensing and spiking systems may support efficient perception for resource-constrained robots.",
    related: "Neuromorphic Robot SNN, Adaptive Multi-Modal SLAM",
    future: "Keep neuromorphic claims scoped to prototypes until real comparisons exist.",
  },
  {
    title: "Simulation and Reproducibility",
    motivation: "Research credibility depends on repeatable environments, clear metrics, seeds, limitations and honest status labels.",
    related: "All project reports",
    future: "Add benchmark tables, CI checks, link validation and artifact documentation.",
  },
];

const directions = [
  "Benchmark degraded VIO and SLAM pipelines against reproducible baselines.",
  "Connect localization health estimates to planner-level risk and recovery behavior.",
  "Develop visualization tools for uncertainty, trajectories, semantic perception and point clouds.",
  "Keep publication sections ready while marking research outputs as forthcoming until accepted or public.",
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Research vision</p>
          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Reliable autonomy requires perception systems that know when they are uncertain.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            My research direction studies how robots can detect degraded sensing, represent uncertainty, adapt estimation and fusion, and make safer navigation decisions before failures become safety-critical.
          </p>
        </Reveal>

        <section className="mt-16 grid gap-8 border-t border-[var(--line)] pt-12 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Central question</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Robust autonomy under uncertainty.</h2>
          </div>
          <Reveal>
            <blockquote className="rounded-[2rem] border border-[var(--line)] bg-[var(--accent-soft)]/20 p-6 font-serif text-3xl leading-tight tracking-[-0.04em] md:p-8">
              How can autonomous systems remain safe and useful when perception is degraded, localization is uncertain, maps are incomplete and decisions must be made under risk?
            </blockquote>
          </Reveal>
        </section>

        <section className="mt-16 grid gap-8 border-t border-[var(--line)] pt-12 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Themes</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Motivation, related projects and future direction.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {themes.map((theme) => (
              <Reveal key={theme.title}>
                <article className="h-full rounded-[1.3rem] border border-[var(--line)] p-5">
                  <h3 className="font-serif text-2xl tracking-[-0.035em]">{theme.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{theme.motivation}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Related projects</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{theme.related}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Future direction</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{theme.future}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-t border-[var(--line)] pt-12 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Future directions</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Next research steps.</h2>
          </div>
          <Reveal>
            <ul className="max-w-3xl space-y-4 text-base leading-8 text-[var(--muted)]">
              {directions.map((item) => <li key={item} className="border-l border-[var(--accent)] pl-5">{item}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className="inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">View project reports</Link>
              <Link href="/research-map" className="inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">Open research map</Link>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
