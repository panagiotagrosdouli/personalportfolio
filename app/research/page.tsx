import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Reveal } from "@/components/portfolio/Reveal";

export const metadata: Metadata = { title: "Research", description: "Research vision, current projects, themes and future directions in robotics, SLAM, sensor fusion and AI for autonomy." };

const themes = [
  ["SLAM", "Robust mapping and localization under perceptual degradation and incomplete sensing."],
  ["Visual-Inertial Odometry", "Health-aware VIO with degradation monitoring, diagnosis, and recovery policies."],
  ["Sensor Fusion", "Adaptive weighting of visual, inertial, event-based, and semantic signals under uncertainty."],
  ["Autonomous Driving", "Prediction and safety reasoning for vulnerable road users at intelligent intersections."],
  ["Risk-Aware Robotics", "Planning methods that consider collision risk, returnability, and uncertainty propagation."],
  ["UAV Autonomy", "Future extension of robust perception and VIO methods to aerial platforms."],
  ["Computer Vision", "Perception modules that expose reliability, calibration, and failure modes."],
  ["AI for Robotics", "Learning systems evaluated by decision utility, robustness, and reproducibility."],
  ["Underwater Communications", "Future Work: communication-constrained autonomy and sensor-network reliability."],
];

const directions = ["Benchmark degraded VIO and SLAM pipelines against reproducible baselines.", "Connect localization health estimates to planner-level risk and recovery behavior.", "Develop visualization tools for uncertainty, trajectories, semantic perception, and point clouds.", "Keep publication sections ready while marking research outputs as forthcoming until accepted or public."];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal><p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Research vision</p><h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Reliable autonomy requires perception systems that know when they are uncertain.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">My research direction studies how robots can detect degraded sensing, represent uncertainty, adapt estimation and fusion, and make safer navigation decisions before failures become safety-critical.</p></Reveal>

        <section className="mt-16 grid gap-8 border-t border-[var(--line)] pt-12 lg:grid-cols-[280px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Current projects</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">A connected research program.</h2></div>
          <div className="grid gap-5 md:grid-cols-2">
            {["SHIELD-VIO", "Adaptive Multi-Modal SLAM", "DynNav", "SafeCrossAI"].map((name) => <Reveal key={name}><article className="rounded-[1.5rem] border border-[var(--line)] p-6"><h3 className="font-serif text-2xl tracking-[-0.035em]">{name}</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Active research repository connected to robust perception, uncertainty-aware estimation, or safe decision making.</p></article></Reveal>)}
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-t border-[var(--line)] pt-12 lg:grid-cols-[280px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Themes</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Research areas.</h2></div>
          <div className="grid gap-4 md:grid-cols-3">
            {themes.map(([title, text]) => <Reveal key={title}><article className="h-full rounded-[1.3rem] border border-[var(--line)] p-5"><h3 className="font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text}</p></article></Reveal>)}
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-t border-[var(--line)] pt-12 lg:grid-cols-[280px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Future directions</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Next research steps.</h2></div>
          <Reveal><ul className="max-w-3xl space-y-4 text-base leading-8 text-[var(--muted)]">{directions.map((item) => <li key={item} className="border-l border-[var(--accent)] pl-5">{item}</li>)}</ul><Link href="/projects" className="mt-8 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">View project reports</Link></Reveal>
        </section>
      </div>
    </main>
  );
}
