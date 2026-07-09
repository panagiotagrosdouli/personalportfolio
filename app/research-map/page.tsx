import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Research Map",
  description: "A connected map of robotics, AI, SLAM, VIO, uncertainty, navigation, perception, UAV autonomy and intelligent transportation projects.",
};

const layers = [
  {
    title: "State estimation",
    description: "VIO and SLAM repositories estimate robot state, expose degradation, and provide confidence-aware localization signals.",
    projects: ["SHIELD-VIO", "AEGIS-VIO", "Adaptive Multi-Modal SLAM"],
  },
  {
    title: "Uncertainty reasoning",
    description: "Uncertainty modules transform raw estimator confidence into safety-relevant signals for fusion, planning and recovery.",
    projects: ["Adaptive Multi-Modal SLAM", "uncertainty-aware-navigation", "DynNav"],
  },
  {
    title: "Risk-aware planning",
    description: "Navigation modules use uncertainty to reason about collision risk, returnability, replanning and safe fallback behavior.",
    projects: ["DynNav", "Risk-Aware UAV Return-to-Home", "uncertainty-aware-navigation"],
  },
  {
    title: "Semantic perception",
    description: "Urban perception projects provide scene understanding for delivery robots, driving safety and intelligent intersection reasoning.",
    projects: ["Urban Segmentation Delivery Robot", "Real-Time Driving Scene Segmentation", "SafeCrossAI"],
  },
  {
    title: "Safety-critical autonomy extensions",
    description: "UAV, underwater, neuromorphic and intelligent transportation projects test whether the same robustness ideas transfer across domains.",
    projects: ["OpenUWOC-AI", "Neuromorphic Robot SNN", "Formula 1 Race Simulation", "SafeCrossAI"],
  },
];

const edges = [
  "VIO and SLAM estimate state under degraded sensing.",
  "Uncertainty modules quantify confidence and estimator health.",
  "Navigation modules convert uncertainty into risk-aware decisions.",
  "Semantic perception adds scene context for urban and driving environments.",
  "UAV, underwater and neuromorphic projects broaden the research program without claiming completed results.",
];

export default function ResearchMapPage() {
  const projectLookup = new Map(projects.map((project) => [project.shortTitle, project]));

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Research map</p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">One portfolio, one robotics research program.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          The projects are organized as a coherent research trajectory: estimate robot state, quantify uncertainty, plan under risk, perceive semantic context, and extend the same safety logic across autonomous systems.
        </p>

        <section className="mt-14 rounded-[2rem] border border-[var(--line)] p-6 md:p-8" aria-labelledby="research-chain">
          <h2 id="research-chain" className="font-serif text-3xl tracking-[-0.04em]">Conceptual dependency chain</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {edges.map((edge, index) => (
              <li key={edge} className="rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)]/20 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Step {index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{edge}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14 grid gap-5" aria-label="Research layers">
          {layers.map((layer, index) => (
            <article key={layer.title} className="grid gap-6 rounded-[2rem] border border-[var(--line)] p-6 md:grid-cols-[260px_1fr] md:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Layer {index + 1}</p>
                <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">{layer.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{layer.description}</p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {layer.projects.map((name) => {
                  const project = projectLookup.get(name) ?? projects.find((item) => item.title.includes(name));
                  return (
                    <div key={name} className="rounded-2xl border border-[var(--line)] bg-[var(--background)]/70 p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{project?.status ?? "Planned"}</p>
                      {project ? (
                        <Link href={`/projects/${project.slug}`} className="mt-3 block font-serif text-2xl leading-tight tracking-[-0.035em] hover:text-[var(--accent)]">
                          {project.shortTitle}
                        </Link>
                      ) : (
                        <h3 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.035em]">{name}</h3>
                      )}
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project?.domain ?? "Future-facing research node"}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
