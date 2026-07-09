import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "Research Map",
  description: "A coherent map connecting VIO, SLAM, uncertainty quantification, risk-aware navigation, semantic perception, UAV autonomy, and intelligent mobility projects.",
};

const nodes = [
  ["VIO and SLAM", "Estimate robot state from visual, inertial, and multi-modal signals.", ["SHIELD-VIO", "AEGIS-VIO", "Adaptive Multi-Modal SLAM"]],
  ["Uncertainty modules", "Quantify estimator confidence, sensor reliability, prediction ambiguity, and map risk.", ["SHIELD-VIO", "Uncertainty-Aware Navigation", "SafeCrossAI"]],
  ["Risk-aware planning", "Use uncertainty to choose safer paths, recovery actions, and return-to-home policies.", ["DynNav", "Risk-Aware UAV Return-to-Home"]],
  ["Semantic perception", "Convert visual understanding into traversability and safety-relevant scene representations.", ["Urban Segmentation", "Driving Scene Segmentation"]],
  ["Intelligent mobility", "Extend risk reasoning to intersections, vulnerable road users, and connected autonomy.", ["SafeCrossAI", "Trajectory Prediction of VRUs"]],
  ["Broader autonomy", "Explore communication-constrained and neuromorphic directions as future robustness threads.", ["OpenUWOC-AI", "Neuromorphic Robot SNN"]],
];

export default function ResearchMapPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Research map</p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">One portfolio, one research program.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">The projects are organized as a pipeline: VIO and SLAM estimate robot state; uncertainty modules quantify confidence; navigation modules use uncertainty for risk-aware planning; semantic perception provides scene understanding; mobility, UAV, underwater, and neuromorphic projects extend the same safety-critical autonomy theme.</p>

        <section className="mt-16 grid gap-6 lg:grid-cols-3" aria-label="Research program graph">
          {nodes.map(([title, text, projects], index) => (
            <article key={title as string} className="relative rounded-[1.7rem] border border-[var(--line)] bg-[var(--background)] p-6 research-grid">
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)] font-serif text-xl">{index + 1}</span>
                {index < nodes.length - 1 && <span className="h-px flex-1 bg-[var(--accent)]/50" aria-hidden="true" />}
              </div>
              <h2 className="font-serif text-3xl tracking-[-0.04em]">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p>
              <div className="mt-5 flex flex-wrap gap-2">{(projects as string[]).map((project) => <span key={project} className="rounded-full border border-[var(--line)] bg-[var(--background)]/80 px-3 py-1 text-xs text-[var(--muted)]">{project}</span>)}</div>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-[var(--line)] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Narrative</p>
          <p className="mt-4 max-w-4xl font-serif text-3xl leading-tight tracking-[-0.04em]">Robust autonomy is treated as a chain of evidence: perception produces uncertain measurements, estimation converts them into state beliefs, planning evaluates risk under those beliefs, and the robot adapts behavior when confidence falls.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/research" className="focus-ring rounded-full border border-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent)]">Research vision</Link><Link href="/projects" className="focus-ring rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]">Project reports</Link></div>
        </section>
      </div>
    </main>
  );
}
