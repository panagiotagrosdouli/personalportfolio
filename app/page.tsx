import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FiActivity, FiCpu, FiDatabase, FiGitBranch, FiShield } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

const pillars = ["Perception", "State Estimation", "Uncertainty", "Risk", "Planning", "Navigation", "Safety", "Simulation"];
const standards = [
  ["Scientific framing", "Every module begins from a research question, not from a visual demo."],
  ["Transparent maturity", "Implemented, prototype, planned, and pending results are deliberately separated."],
  ["Reproducibility first", "Experiments are expected to expose assumptions, metrics, limitations, and failure cases."],
];
const statusCards: { label: string; value: string; Icon: IconType }[] = [
  { label: "Research theme", value: "Robust Autonomy Under Uncertainty", Icon: FiShield },
  { label: "Open modules", value: `${projects.filter((project) => project.github).length} repositories`, Icon: FiGitBranch },
  { label: "Research standard", value: "Implemented, prototype, and planned work are separated", Icon: FiDatabase },
  { label: "System view", value: "A connected autonomy research program", Icon: FiCpu },
];
const routes = ["SLAM", "VIO", "Navigation", "Perception", "UAV", "Safe Mobility"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent-soft)]">
      <SiteNav />
      <section className="relative min-h-[calc(100vh-68px)] overflow-hidden border-b border-[var(--line)]">
        <div className="absolute inset-0 research-grid opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">Robotics research presence</p>
            <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.07em] md:text-8xl">Robust Autonomy Under Uncertainty</h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--muted)] md:text-2xl">Research-oriented robotics, perception, estimation, and decision-making systems for safety-critical autonomous agents.</p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">This site is organized as a coherent research program. Each repository is framed through a scientific question, current implementation status, limitations, and next experiments, with no inflated claims about publications, affiliations, or validated benchmarks.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/research-map" className="focus-ring rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--background)]">Open research map</Link>
              <Link href="/system-architecture" className="focus-ring rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--accent)]">System architecture</Link>
              <Link href="/projects" className="focus-ring rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--accent)]">Research modules</Link>
            </div>
          </div>

          <div className="command-panel rounded-[2rem] p-5">
            <div className="mb-5 flex items-center justify-between border-b border-[var(--line)] pb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              <span>Research Console</span><span className="text-[var(--accent)]">Active</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {statusCards.map(({ label, value, Icon }) => (
                <article key={label} className="rounded-2xl border border-[var(--line)] bg-[var(--background)]/40 p-4">
                  <Icon className="text-[var(--accent)]" aria-hidden="true" />
                  <p className="mt-4 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6">{value}</p>
                </article>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-[var(--line)] p-5 research-grid">
              <div className="signal-line h-1 rounded-full bg-[var(--accent-soft)]" />
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-[var(--muted)]">
                {routes.map((route) => <Link href={`/projects?filter=${encodeURIComponent(route)}`} key={route} className="rounded-xl border border-[var(--line)] bg-[var(--background)]/60 px-2 py-3 transition hover:border-[var(--accent)] hover:text-[var(--foreground)]">{route}</Link>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="space-y-5">
            <div className="command-panel overflow-hidden rounded-[2rem] p-3">
              <Image src="/profile.svg" alt="Panagiota Grosdouli" width={480} height={360} className="aspect-[4/5] w-full rounded-[1.55rem] object-cover grayscale-[20%] saturate-[0.85]" priority />
            </div>
            <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--accent)]">Research focus</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Robust autonomy, visual-inertial localization, uncertainty-aware perception, risk-aware navigation, and intelligent mobility safety.</p>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Research statement</p>
            <h2 className="mt-3 font-serif text-5xl leading-[0.95] tracking-[-0.06em]">Autonomy should expose uncertainty before it fails.</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-[var(--muted)]">
              <p>My work is organized around a practical research problem: robotic systems often fail not because every module is wrong, but because perception, localization, and planning continue operating as if degraded estimates were reliable.</p>
              <p>The portfolio therefore treats uncertainty as a system variable. VIO health, sensor reliability, semantic perception, communication quality, and path risk are connected as parts of one autonomy stack.</p>
              <div className="grid gap-4 md:grid-cols-3">
                {standards.map(([title, text]) => <article key={title} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5"><h3 className="font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text}</p></article>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--accent-soft)]/20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 lg:grid-cols-[280px_1fr]">
          <div><p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Research pillars</p><h2 className="mt-3 font-serif text-4xl tracking-[-0.05em]">One coherent autonomy stack.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => <article key={pillar} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5"><FiActivity className="text-[var(--accent)]" aria-hidden="true" /><h3 className="mt-4 font-semibold">{pillar}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div><p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Current research modules</p><h2 className="mt-3 font-serif text-4xl tracking-[-0.05em]">Projects as components of a research agenda.</h2></div>
          <Link href="/mission-logs" className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">Read mission logs</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <article key={project.slug} className="group command-panel rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-[var(--muted)]">{project.domain}</p>
              <h3 className="mt-4 font-serif text-2xl leading-tight tracking-[-0.04em]"><Link href={`/projects/${project.slug}`} className="focus-ring group-hover:text-[var(--accent)]">{project.shortTitle}</Link></h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.scientificQuestion}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{project.status} · research module</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
