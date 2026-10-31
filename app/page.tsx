import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Panagiota Grosdouli | AI, Software Engineering & Robotics",
  description: "Portfolio of Panagiota Grosdouli, Electrical and Computer Engineer building AI, software and robotics systems, with interests in research and development.",
};

const selected = ["shield-vio", "dynnav", "safecrossai", "adaptive-multimodal-slam"]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-14 md:px-10 md:pt-20">
        <header className="grid items-start gap-9 border-b border-[var(--line)] pb-14 md:grid-cols-[1fr_210px] md:gap-16">
          <div>
            <p className="text-sm font-medium text-[var(--muted)]">Electrical & Computer Engineering Graduate · Democritus University of Thrace</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">Panagiota Grosdouli</h1>
            <p className="mt-3 text-lg font-medium text-[var(--accent)]">AI & Machine Learning · Software Engineering · Robotics</p>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)]">
              I am an Electrical and Computer Engineer who enjoys building intelligent software and exploring how machine learning can solve challenging real-world problems. My work combines AI applications, research software, computer vision, and autonomous systems—from working tools to experimental robotics.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-[var(--accent)]">
              <Link className="hover:underline" href="/cv">CV</Link>
              <Link className="hover:underline" href="/projects">Projects</Link>
              <a className="hover:underline" href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer">GitHub</a>
              <a className="hover:underline" href="mailto:p.g2a15@gmail.com">Email</a>
            </div>
          </div>
          <Image src={`${process.env.GITHUB_ACTIONS === "true" ? "/personalportfolio" : ""}/profile.png`} alt="Portrait of Panagiota Grosdouli" width={420} height={520} sizes="(max-width: 768px) 200px, 210px" className="h-auto w-40 rounded-lg object-cover md:w-[210px]" priority />
        </header>

        <section className="grid gap-5 border-b border-[var(--line)] py-12 md:grid-cols-[170px_1fr]">
          <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--foreground)]">Research interests</h2>
          <div>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
              A question connecting my work is: <span className="font-semibold text-[var(--foreground)]">how can we build intelligent systems that work reliably outside ideal conditions?</span> I work across applied machine learning, research engineering and robotics, with particular interests in reliable perception, uncertainty, and practical implementation.
            </p>
            <p className="mt-4 text-sm text-[var(--muted)]">Python · Machine learning · Research software · Computer vision · Robotics</p>
          </div>
        </section>

        <section className="py-12" aria-labelledby="selected-work">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 id="selected-work" className="text-sm font-bold uppercase tracking-[0.12em]">Selected projects</h2>
            <Link href="/projects" className="text-sm font-medium text-[var(--accent)] hover:underline">View all projects</Link>
          </div>
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {selected.map((project) => (
              <article key={project.slug} className="grid gap-3 py-6 md:grid-cols-[165px_1fr] md:gap-7">
                <div className="text-xs leading-6 text-[var(--muted)]">{project.year}<div className="mt-1">{project.status}</div></div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight"><Link href={`/projects/${project.slug}`} className="hover:text-[var(--accent)] hover:underline">{project.shortTitle}</Link></h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">{project.objective}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-[var(--accent)]">
                    <Link href={`/projects/${project.slug}`} className="hover:underline">Details</Link>
                    {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="hover:underline">Code</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="grid gap-5 border-b border-[var(--line)] py-10 md:grid-cols-[170px_1fr]">
          <h2 className="text-sm font-bold uppercase tracking-[0.12em]">Research software</h2>
          <div>
            <h3 className="text-lg font-semibold"><Link href="/eylo" className="hover:text-[var(--accent)] hover:underline">EYLO — AI-assisted research discovery</Link></h3>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">An AI-powered research workspace combining scholarly search, evidence organization and project workflows. A practical software engineering project, distinct from peer-reviewed research.</p>
            <Link href="/eylo" className="mt-3 inline-block text-sm text-[var(--accent)] hover:underline">Technical case study</Link>
          </div>
        </section>
        <section className="grid gap-5 py-10 md:grid-cols-[170px_1fr]">
          <h2 className="text-sm font-bold uppercase tracking-[0.12em]">Background</h2>
          <div>
            <p className="font-medium">Five-year Diploma in Electrical & Computer Engineering, 2026</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Democritus University of Thrace, Greece</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Diploma thesis: Trajectory Prediction of Vulnerable Road Users at Smart Intersections.</p>
            <Link href="/about" className="mt-3 inline-block text-sm text-[var(--accent)] hover:underline">More about me</Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
