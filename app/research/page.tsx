import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Reveal } from "@/components/portfolio/Reveal";

export const metadata: Metadata = {
  title: "Research",
  description: "Research vision, central questions, themes, and future directions in robust autonomy, SLAM, VIO, sensor fusion, risk-aware navigation, semantic perception, UAV autonomy, and AI for robotics.",
};

const themes = [
  { title: "SLAM and sensor fusion", motivation: "Robots need reliable state estimates when sensing is noisy, incomplete, or degraded.", projects: "Adaptive Multi-Modal SLAM, SHIELD-VIO, AEGIS-VIO", future: "Benchmark adaptive fusion against fixed baselines under controlled degradation." },
  { title: "Visual-inertial odometry", motivation: "VIO is safety-critical for mobile robots and UAVs, but it can fail silently under blur, low texture, lighting change, or aggressive motion.", projects: "SHIELD-VIO, AEGIS-VIO", future: "Connect estimator health to recovery behavior and planner-level risk." },
  { title: "Risk-aware navigation", motivation: "A short path is not necessarily a safe path when maps, perception, and robot state are uncertain.", projects: "DynNav, Uncertainty-Aware Navigation, Risk-Aware UAV Return-to-Home", future: "Report collision-risk, returnability, and uncertainty-exposure metrics across seeded simulations." },
  { title: "Semantic perception", motivation: "Robots need scene understanding that exposes failure modes instead of only producing attractive segmentation overlays.", projects: "Urban Segmentation for Delivery Robots, Real-Time Driving Scene Segmentation", future: "Translate semantic labels and uncertainty into navigation-relevant traversability costs." },
  { title: "Autonomous driving safety", motivation: "Intelligent intersections require interaction-aware prediction and uncertainty-aware risk reasoning for vulnerable road users.", projects: "SafeCrossAI, Trajectory Prediction of VRUs", future: "Move from baseline prediction toward calibrated multi-modal forecasts and social interaction graphs." },
  { title: "UAV autonomy", motivation: "Aerial robots need explicit returnability reasoning when localization health, energy, and environmental risk change online.", projects: "Risk-Aware UAV Return-to-Home, SHIELD-VIO", future: "Prototype return-to-home policies triggered by VIO health degradation." },
  { title: "Neuromorphic robotics", motivation: "Event-driven sensing and spiking computation offer a future path toward low-latency reactive autonomy.", projects: "Neuromorphic Robot SNN", future: "Begin with a small reproducible simulation and compare against a simple non-spiking baseline." },
  { title: "Simulation and reproducibility", motivation: "Research maturity depends on clear assumptions, repeatable experiments, and honest reporting of limitations.", projects: "Formula 1 Race Simulation, DynNav, SafeCrossAI", future: "Use project reports, seeded experiments, and CI checks to keep results auditable." },
];

const skills = ["Python", "TypeScript", "Next.js", "ROS 2 — planned integration", "SLAM/VIO evaluation", "Trajectory prediction", "Risk-aware planning", "Semantic segmentation", "Simulation", "Reproducible research tooling"];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Research identity</p>
          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Robust autonomy under uncertainty.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">My research direction studies how autonomous systems can remain useful and safe when perception degrades, localization drifts, maps are incomplete, and decisions must be made under uncertainty.</p>
        </Reveal>

        <section className="mt-16 grid gap-8 border-t border-[var(--line)] pt-12 lg:grid-cols-[280px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Central question</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">From estimation confidence to safer behavior.</h2></div>
          <Reveal>
            <div className="rounded-[1.5rem] border border-[var(--line)] p-6">
              <p className="font-serif text-3xl leading-tight tracking-[-0.04em]">How can a robot detect uncertainty, represent it quantitatively, and use it to adapt perception, localization, and planning before failure becomes safety-critical?</p>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">This question connects VIO and SLAM, uncertainty quantification, risk-aware navigation, semantic perception, UAV autonomy, autonomous-driving safety, and simulation-based reproducibility.</p>
            </div>
          </Reveal>
        </section>

        <section className="mt-16 grid gap-8 border-t border-[var(--line)] pt-12 lg:grid-cols-[280px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Research themes</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Motivation, related projects, future direction.</h2></div>
          <div className="grid gap-5 md:grid-cols-2">
            {themes.map((theme) => (
              <Reveal key={theme.title}>
                <article className="h-full rounded-[1.5rem] border border-[var(--line)] p-6">
                  <h3 className="font-serif text-2xl tracking-[-0.035em]">{theme.title}</h3>
                  <dl className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
                    <div><dt className="font-semibold text-[var(--foreground)]">Motivation</dt><dd>{theme.motivation}</dd></div>
                    <div><dt className="font-semibold text-[var(--foreground)]">Related projects</dt><dd>{theme.projects}</dd></div>
                    <div><dt className="font-semibold text-[var(--foreground)]">Future direction</dt><dd>{theme.future}</dd></div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-t border-[var(--line)] pt-12 lg:grid-cols-[280px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Technical skills</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Research engineering stack.</h2></div>
          <Reveal>
            <div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)]">{skill}</span>)}</div>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/research-map" className="focus-ring rounded-full border border-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent)]">Open research map</Link><Link href="/projects" className="focus-ring rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]">View project reports</Link></div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
