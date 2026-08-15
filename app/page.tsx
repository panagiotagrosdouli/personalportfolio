import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiLayers, FiMapPin, FiShield, FiZap } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

const focusAreas = [
  "Autonomous Navigation",
  "Visual-Inertial Odometry",
  "Uncertainty Estimation",
  "Computer Vision",
  "Sensor Fusion",
  "Safety-Critical AI",
];

const metrics = [
  ["Focus", "Robust autonomy"],
  ["Domains", "Robotics + AI"],
  ["Approach", "Research-first"],
  ["Status", "Building & experimenting"],
];

export default function Home() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />

      <section className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden border-b border-[var(--line)]">
        <div className="portfolio-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />

        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] items-center gap-14 px-5 py-14 md:px-9 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-20">
          <div className="max-w-5xl">
            <div className="mb-8 flex flex-wrap items-center gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)]/70 px-3 py-2 backdrop-blur-xl">
                <span className="status-dot" /> Available for research collaboration
              </span>
              <span className="inline-flex items-center gap-2 px-1"><FiMapPin /> Greece · Europe</span>
            </div>

            <p className="eyebrow">AI · Robotics · Intelligent Systems</p>
            <h1 className="mt-5 max-w-6xl text-[clamp(4rem,10vw,9.4rem)] font-semibold leading-[0.78] tracking-[-0.075em]">
              Panagiota
              <span className="block text-outline">Grosdouli.</span>
            </h1>

            <div className="mt-9 grid max-w-4xl gap-7 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl md:leading-9">
                I build research-driven autonomous systems that reason about uncertainty, perception, localization and risk before making decisions in the real world.
              </p>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="/projects" className="button-primary">
                  Explore work <FiArrowUpRight />
                </Link>
                <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="button-secondary">
                  GitHub <FiGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="monogram-shell">
              <div className="monogram-card">
                <span className="monogram-noise" aria-hidden="true" />
                <span className="monogram">PG</span>
                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 border-t border-white/15 pt-4 text-white/70">
                  <div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em]">Research portfolio</p>
                    <p className="mt-1 text-sm font-medium text-white">Robust autonomy under uncertainty</p>
                  </div>
                  <FiZap className="shrink-0 text-xl" />
                </div>
              </div>
              <div className="floating-tag floating-tag-a">Perception</div>
              <div className="floating-tag floating-tag-b">Planning</div>
              <div className="floating-tag floating-tag-c">Safety</div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-[1440px] grid-cols-2 border-t border-[var(--line)] md:grid-cols-4">
          {metrics.map(([label, value], index) => (
            <div key={label} className={`px-5 py-5 md:px-9 ${index > 0 ? "border-l border-[var(--line)]" : ""}`}>
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[var(--muted)]">{label}</p>
              <p className="mt-2 text-sm font-semibold md:text-base">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-9 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">01 / Research direction</p>
            <h2 className="section-title mt-5">Engineering autonomy that knows when not to trust itself.</h2>
          </div>

          <div>
            <p className="max-w-3xl text-2xl leading-[1.45] tracking-[-0.03em] text-[var(--foreground)] md:text-3xl">
              My work connects perception, state estimation and planning into one safety-aware research agenda rather than treating them as isolated software modules.
            </p>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              The central question is simple: how should an autonomous system behave when its observations become incomplete, noisy or unreliable? I explore this through VIO, SLAM, uncertainty-aware sensor fusion, semantic perception, trajectory prediction and risk-sensitive navigation.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {focusAreas.map((area, index) => (
                <div key={area} className="group flex min-h-32 items-end justify-between bg-[var(--panel)] p-6 transition hover:bg-[var(--panel-strong)]">
                  <span className="font-mono text-[0.62rem] text-[var(--muted)]">0{index + 1}</span>
                  <h3 className="max-w-[12rem] text-right text-xl font-semibold tracking-[-0.035em] transition group-hover:text-[var(--accent)]">{area}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]/45">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-9 lg:px-12 lg:py-32">
          <div className="mb-14 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">02 / Selected work</p>
              <h2 className="section-title mt-5 max-w-3xl">Projects framed as research questions.</h2>
            </div>
            <Link href="/projects" className="arrow-link">View all projects <FiArrowUpRight /></Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article key={project.slug} className="project-card group">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--accent)]">{project.domain}</span>
                  <span className="font-mono text-xs text-[var(--muted)]">0{index + 1}</span>
                </div>
                <div className="mt-16">
                  <h3 className="text-3xl font-semibold leading-none tracking-[-0.055em] md:text-4xl">{project.shortTitle}</h3>
                  <p className="mt-5 line-clamp-4 text-sm leading-7 text-[var(--muted)]">{project.scientificQuestion}</p>
                </div>
                <div className="mt-10 flex items-end justify-between border-t border-[var(--line)] pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">{project.status}</span>
                  <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.shortTitle}`} className="project-arrow"><FiArrowUpRight /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-9 lg:px-12 lg:py-32">
        <div className="rounded-[2.2rem] border border-[var(--line)] bg-[var(--foreground)] px-6 py-10 text-[var(--background)] md:px-10 md:py-14 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.22em] opacity-60">03 / Current thesis</p>
              <h2 className="mt-6 max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-6xl lg:text-7xl">Reliable autonomy is not only about better predictions. It is about better calibrated decisions.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link href="/research-map" className="inverted-link"><FiLayers /> Research map</Link>
              <Link href="/system-architecture" className="inverted-link"><FiShield /> System architecture</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-10 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-9 lg:px-12">
          <p>© 2026 Panagiota Grosdouli. Research, engineering & intelligent systems.</p>
          <div className="flex gap-5">
            <Link href="/cv" className="hover:text-[var(--foreground)]">CV</Link>
            <Link href="/contact" className="hover:text-[var(--foreground)]">Contact</Link>
            <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="hover:text-[var(--foreground)]">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
