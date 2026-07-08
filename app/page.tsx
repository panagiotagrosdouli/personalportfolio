import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiBookOpen, FiDownload } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { ResearchVisual } from "@/components/portfolio/ResearchVisual";
import { Reveal } from "@/components/portfolio/Reveal";
import { projects } from "@/data/projects";

const interests = ["Robust SLAM", "Visual-Inertial Odometry", "Sensor Fusion", "Risk-Aware Robotics", "UAV Autonomy", "Computer Vision", "AI for Robotics", "Intelligent Mobility"];

const links = [
  { label: "GitHub", href: "https://github.com/panagiotagrosdouli", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FiLinkedin },
  { label: "Google Scholar", href: "/publications", icon: FiBookOpen },
  { label: "ORCID", href: "/publications", icon: FiBookOpen },
  { label: "Email", href: "mailto:p.g2a15@gmail.com", icon: FiMail },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent-soft)]">
      <SiteNav />
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="absolute inset-0 research-grid opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">Robotics · SLAM · Safe Autonomy</p>
            <h1 className="mt-7 max-w-4xl font-serif text-6xl leading-[0.9] tracking-[-0.065em] md:text-8xl">Panagiota Grosdouli</h1>
            <p className="mt-7 max-w-3xl text-2xl leading-tight tracking-[-0.035em] text-[var(--foreground)] md:text-4xl">Research portfolio for robust, uncertainty-aware autonomous systems.</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">Electrical and Computer Engineering student preparing for graduate research in robotics, visual-inertial localization, adaptive SLAM, sensor fusion, risk-aware navigation, and intelligent mobility safety.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/cv" className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--background)]"><FiDownload aria-hidden="true" /> Download CV</Link>
              <Link href="/projects" className="focus-ring rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]">View projects</Link>
              <Link href="/research" className="focus-ring rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]">Research agenda</Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--background)]/80 p-4 shadow-sm backdrop-blur">
                <div className="mb-4 flex items-center gap-4 rounded-[1.5rem] border border-dashed border-[var(--line)] p-5">
                  <div className="h-24 w-24 rounded-full border border-[var(--accent)] bg-[var(--accent-soft)]" aria-label="Profile image placeholder" />
                  <div>
                    <p className="font-serif text-2xl leading-tight">Profile image placeholder</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Replace with a professional academic portrait when available.</p>
                  </div>
                </div>
                <ResearchVisual />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8" aria-labelledby="research-interests">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[260px_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Current focus</p>
              <h2 id="research-interests" className="mt-3 font-serif text-4xl leading-tight tracking-[-0.04em]">Robust autonomy under uncertainty.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <p className="text-base leading-8 text-[var(--muted)]">The portfolio is organized around a scientific question: how can robots remain useful and safe when perception degrades, localization drifts, maps are incomplete, and planning must reason about risk?</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => <span key={interest} className="rounded-full border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)]">{interest}</span>)}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--accent-soft)]/20">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 md:grid-cols-3 md:px-8">
          {["Scientific maturity", "Engineering quality", "Research impact"].map((title, index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="border-b border-[var(--line)] py-10 md:border-b-0 md:border-r md:pr-8">
                <h3 className="font-serif text-3xl tracking-[-0.035em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{index === 0 ? "Each project separates implemented work from future work and states research questions, methods, limitations, and evaluation intent." : index === 1 ? "The site uses reusable TypeScript data models, accessible components, responsive layouts, metadata, and planned CI/testing workflows." : "Projects are framed as research trajectories toward reproducible autonomy experiments rather than isolated portfolio demos."}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Selected projects</p><h2 className="mt-3 font-serif text-4xl tracking-[-0.04em]">Research repositories</h2></div>
          <Link href="/projects" className="focus-ring text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">All projects</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Reveal key={project.slug}>
              <article className="h-full rounded-[1.5rem] border border-[var(--line)] p-6 transition hover:border-[var(--accent)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{project.badge}</p>
                <h3 className="mt-4 font-serif text-2xl leading-tight tracking-[-0.035em]"><Link href={`/projects/${project.slug}`} className="focus-ring hover:text-[var(--accent)]">{project.title}</Link></h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.objective}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="rounded-[2rem] border border-[var(--line)] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Academic links</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {links.map(({ label, href, icon: Icon }) => <a key={label} href={href} className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--accent)]" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><Icon aria-hidden="true" />{label}</a>)}
          </div>
          <p className="mt-4 text-sm text-[var(--muted)]">Google Scholar and ORCID are placeholders until verified public profiles are available.</p>
        </div>
      </section>
    </main>
  );
}
