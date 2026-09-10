import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiCheck, FiGithub } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

const featuredSlugs = ["shield-vio", "safecrossai", "dynnav"];
const featuredProjects = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

const researchLoop = [
  ["01", "Estimate", "Perception and localization health"],
  ["02", "Reason", "Uncertainty, degradation, and risk"],
  ["03", "Act", "Safe planning and recovery"],
];

const practice = [
  "Reproducible evaluation",
  "Failure-case analysis",
  "Transparent maturity",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent-soft)]">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="absolute inset-0 research-grid opacity-55" aria-hidden="true" />
        <div className="absolute -right-20 top-20 h-[34rem] w-[34rem] rounded-full bg-[var(--accent-soft)] blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto grid min-h-[calc(100vh-68px)] max-w-7xl items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.18fr_0.82fr] lg:py-20">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
              <span className="rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] px-4 py-2 text-[var(--accent)]">
                Seeking research opportunities · 2026
              </span>
              <span className="text-[var(--muted)]">Robotics · AI · Autonomous Systems</span>
            </div>

            <h1 className="mt-8 max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.075em] md:text-8xl lg:text-[7.2rem]">
              Robust autonomy
              <span className="block text-[var(--accent)]">when sensing fails.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--muted)] md:text-2xl md:leading-9">
              I study how robots can detect uncertainty, adapt estimation, and recover before failure becomes unsafe.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent)]">
                Explore research <FiArrowUpRight aria-hidden="true" />
              </Link>
              <Link href="/cv" className="focus-ring rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--accent)]">
                Academic CV
              </Link>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--accent)]">
                <FiGithub aria-hidden="true" /> GitHub
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
              {practice.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <FiCheck className="text-[var(--accent)]" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end" aria-label="Researcher profile">
            <div className="command-panel relative overflow-hidden rounded-[2.5rem] p-3">
              <Image
                src="/profile.png"
                alt="Panagiota Grosdouli"
                width={720}
                height={900}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover saturate-[0.9]"
                priority
              />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.4rem] border border-white/15 bg-black/72 p-5 text-white backdrop-blur-xl">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#9be7cf]">Panagiota Grosdouli</p>
                <p className="mt-2 text-sm font-medium">Electrical & Computer Engineering</p>
              </div>
            </div>
            <div className="absolute -left-5 top-10 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-xs font-semibold shadow-xl backdrop-blur-xl">
              VIO · SLAM
            </div>
            <div className="absolute -right-4 bottom-24 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-xs font-semibold shadow-xl backdrop-blur-xl">
              Risk-aware planning
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Research thesis</p>
            <h2 className="mt-4 max-w-lg font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Uncertainty should change behavior.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[var(--muted)]">
              My work connects estimator health to decisions a robot can take: reweight sensing, replan, or recover.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--panel)]">
            {researchLoop.map(([number, title, text], index) => (
              <article key={number} className={`grid gap-4 p-6 md:grid-cols-[64px_160px_1fr] md:items-center md:p-8 ${index ? "border-t border-[var(--line)]" : ""}`}>
                <span className="font-mono text-xs text-[var(--accent)]">{number}</span>
                <h3 className="font-serif text-3xl tracking-[-0.04em]">{title}</h3>
                <p className="text-sm leading-6 text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]/45">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Selected research</p>
              <h2 className="mt-4 font-serif text-5xl tracking-[-0.06em] md:text-6xl">Three research directions.</h2>
            </div>
            <Link href="/projects" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline">
              View all work <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="focus-ring group flex min-h-[22rem] flex-col rounded-[1.75rem] border border-[var(--line)] bg-[var(--background)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-[var(--muted)]">0{index + 1}</span>
                  <span className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-[var(--accent)]">
                    {project.status}
                  </span>
                </div>
                <div className="mt-auto">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">{project.domain}</p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.05em]">{project.shortTitle}</h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{project.technicalContribution}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group-hover:text-[var(--accent)]">
                    Research page <FiArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="mb-10">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Independent venture</p>
          <h2 className="mt-4 font-serif text-5xl tracking-[-0.06em] md:text-6xl">Research technology, built as a product.</h2>
        </div>
        <article className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--panel)]">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex min-h-72 items-center justify-center border-b border-[var(--line)] bg-white p-10 lg:border-b-0 lg:border-r">
              <Image src="/brands/eylo.png" alt="EYLO" width={720} height={420} sizes="(max-width: 1024px) 80vw, 420px" className="h-auto max-h-56 w-full object-contain" />
            </div>
            <div className="p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Startup · Live product</span>
                <span className="font-mono text-xs text-[var(--muted)]">Research discovery & execution</span>
              </div>
              <h3 className="mt-6 font-serif text-4xl tracking-[-0.05em] md:text-5xl">EYLO AI</h3>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">A research workspace that turns a question into a source-backed next step—combining scholarly discovery, AI-assisted reasoning, researchers, funding records, and project execution while keeping evidence, inference, and uncertainty distinct.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["OpenAlex · arXiv · Crossref", "EYRA research assistant", "Supabase workspace", "Grants.gov funding"].map((item) => (
                  <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--muted)]">{item}</span>
                ))}
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--muted)]">EYLO supports research judgment; it does not present model inference as verified evidence or replace review of original sources.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="https://eyloai.vercel.app/" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent)]">Open EYLO <FiArrowUpRight aria-hidden="true" /></a>
                <a href="https://github.com/panagiotagrosdouli/eyloai" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--accent)]"><FiGithub aria-hidden="true" /> View source</a>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="research-grid overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--accent-soft)] p-8 md:flex md:items-center md:justify-between md:p-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Research fit</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
              Interested in robust perception, state estimation, and safe navigation.
            </h2>
          </div>
          <div className="mt-8 flex shrink-0 flex-wrap gap-3 md:ml-10 md:mt-0">
            <Link href="/about" className="focus-ring rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)]">Research profile</Link>
            <Link href="/contact" className="focus-ring rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold">Contact</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
