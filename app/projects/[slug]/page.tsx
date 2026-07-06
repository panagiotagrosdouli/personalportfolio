import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { ProjectAbstractPanel } from "@/components/portfolio/ProjectAbstractPanel";
import { ProjectPipelineVisual } from "@/components/portfolio/ProjectPipelineVisual";
import { projectMap, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function ReportSection({ label, title, children }: { label: string; title?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-white/10 py-12">
      <div className="grid gap-6 md:grid-cols-[190px_1fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-400">{label}</p>
          {title && <h2 className="mt-4 font-serif text-3xl leading-none tracking-[-0.035em] text-white">{title}</h2>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectMap[params.slug];
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <SiteNav theme="dark" />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <Link href="/projects" className="text-sm text-stone-500 transition hover:text-emerald-400">Back to projects</Link>

        <header className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Project Report</p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-white md:text-7xl">
              {project.title}
            </h1>
          </div>
          <div className="border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">Status</p>
            <p className="mt-2 text-sm leading-7 text-stone-300">{project.subtitle}</p>
          </div>
        </header>

        <ProjectAbstractPanel project={project} />
        <ProjectPipelineVisual project={project} />

        <div className="mt-16">
          <ReportSection label="Research Questions" title="What this project asks">
            <ul className="space-y-4">
              {project.questions.map((item) => (
                <li key={item} className="grid gap-3 text-sm leading-7 text-stone-400 md:grid-cols-[24px_1fr]">
                  <span className="font-mono text-emerald-400">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ReportSection>

          <ReportSection label="Method" title="How it is approached">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.methodology.map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-[11px] leading-5 text-stone-400">{item}</span>
              ))}
            </div>
          </ReportSection>

          <ReportSection label="Experiments" title="What is evaluated">
            <ul className="space-y-4">
              {project.experiments.map((item) => (
                <li key={item} className="grid gap-3 text-sm leading-7 text-stone-400 md:grid-cols-[24px_1fr]">
                  <span className="font-mono text-emerald-400">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ReportSection>

          <ReportSection label="Literature" title="Research context">
            <div className="flex flex-wrap gap-2">
              {project.literature.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-stone-900 px-3 py-1.5 font-mono text-[11px] text-stone-400">{item}</span>
              ))}
            </div>
          </ReportSection>

          <ReportSection label="Future Work" title="What comes next">
            <ul className="space-y-4">
              {project.future.map((item) => (
                <li key={item} className="grid gap-3 text-sm leading-7 text-stone-400 md:grid-cols-[24px_1fr]">
                  <span className="font-mono text-emerald-400">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ReportSection>
        </div>
      </article>
      <Footer theme="dark" />
    </main>
  );
}
