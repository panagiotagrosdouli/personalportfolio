import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projectMap, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectMap[slug];
  return {
    title: project?.title ?? "Project",
    description: project?.objective ?? "Research project report.",
    openGraph: {
      title: project?.title ?? "Research project",
      description: project?.objective ?? "Research project report.",
      type: "article",
    },
  };
}

function ReportSection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="border-t border-[var(--line)] py-12">
      <div className="grid gap-6 md:grid-cols-[230px_1fr]">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{label}</p>
        <div>{children}</div>
      </div>
    </section>
  );
}

function PlaceholderFigure({ title, description }: { title: string; description: string }) {
  return (
    <div className="command-panel rounded-[1.5rem] border-dashed p-6 research-grid">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Marked research artifact slot</p>
      <h3 className="mt-3 font-serif text-2xl tracking-[-0.035em]">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">{description}</p>
      <div className="mt-6 grid h-40 place-items-center rounded-xl border border-[var(--line)] bg-[var(--background)]/70 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        Synthetic / planned visual
      </div>
    </div>
  );
}

function ListBlock({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
      {items.map((item) => (
        <li key={item} className="border-l border-[var(--accent)] pl-4">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap[slug];
  if (!project) notFound();

  const statusRows = [
    ["Implemented", project.implemented],
    ["Research prototype", project.prototype],
    ["Planned", project.planned],
  ];

  const reportMeta = [
    ["Status", project.status],
    ["Period", project.year],
    ["Domain", project.domain],
    ["Repository", project.repositoryUrl ? "Public / linked" : "Not public yet"],
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <article className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/projects" className="focus-ring text-sm text-[var(--muted)] transition hover:text-[var(--accent)]">
          Back to research modules
        </Link>

        <header className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Research report · {project.status}</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">{project.title}</h1>
            <p className="mt-4 text-sm text-[var(--muted)]">{project.subtitle}</p>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">{project.overview}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.repositoryUrl ? (
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="focus-ring rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--background)]">
                  GitHub repository
                </a>
              ) : (
                <span className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]">Repository coming soon</span>
              )}
              <Link href="/research-map" className="focus-ring rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]">Research map</Link>
            </div>
          </div>

          <aside className="command-panel rounded-[2rem] p-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Module snapshot</p>
            <div className="mt-5 divide-y divide-[var(--line)]">
              {reportMeta.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[110px_1fr] gap-3 py-3 text-sm">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">{label}</span>
                  <span className="text-[var(--foreground)]">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{tag}</span>
              ))}
            </div>
          </aside>
        </header>

        <section className="mt-16 command-panel rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[230px_1fr]">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Abstract</p>
            <div className="max-w-4xl space-y-4 text-base leading-8 text-[var(--muted)]">
              <p>{project.objective}</p>
              <p><span className="font-semibold text-[var(--foreground)]">Scientific question:</span> {project.scientificQuestion}</p>
              <p><span className="font-semibold text-[var(--foreground)]">Contribution:</span> {project.technicalContribution}</p>
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <PlaceholderFigure title={project.architectureLabel} description="Architecture figure slot for verified diagrams of modules, data flow, and software boundaries." />
          <PlaceholderFigure title={project.pipelineLabel} description="Pipeline slot for GIFs or animations that explain estimation, planning, perception, or evaluation steps." />
          <PlaceholderFigure title={project.demoLabel} description="Demo slot reserved for real project videos or synthetic demos that are explicitly labeled as synthetic." />
        </div>

        <div className="mt-16 command-panel rounded-[2rem] p-6 md:p-8">
          <ReportSection label="Research questions">
            <ListBlock items={project.questions} />
          </ReportSection>

          <ReportSection label="Methods">
            <div className="flex flex-wrap gap-2">
              {project.methodology.map((item) => (
                <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--muted)]">{item}</span>
              ))}
            </div>
          </ReportSection>

          <ReportSection label="Implementation status">
            <div className="overflow-hidden rounded-2xl border border-[var(--line)]">
              {statusRows.map(([label, items]) => (
                <div key={label as string} className="grid gap-4 border-b border-[var(--line)] p-5 last:border-b-0 md:grid-cols-[180px_1fr]">
                  <h2 className="font-serif text-xl tracking-[-0.03em]">{label as string}</h2>
                  <ul className="space-y-2 text-sm leading-7 text-[var(--muted)]">
                    {(items as string[]).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </ReportSection>

          <ReportSection label="Experiments and metrics">
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-[var(--line)] bg-[var(--background)]/35 p-5"><h2 className="font-serif text-2xl tracking-[-0.035em]">Experiments</h2><ListBlock items={project.experiments} /></article>
              <article className="rounded-2xl border border-[var(--line)] bg-[var(--background)]/35 p-5"><h2 className="font-serif text-2xl tracking-[-0.035em]">Metrics</h2><ListBlock items={project.metrics} /></article>
            </div>
            <p className="mt-4 text-sm italic text-[var(--muted)]">Quantitative benchmark tables will be added only after reproducible experiments are available.</p>
          </ReportSection>

          <ReportSection label="Limitations">
            <ListBlock items={project.limitations} />
          </ReportSection>

          <ReportSection label="Reproducibility plan">
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-[var(--line)] bg-[var(--background)]/35 p-5">
                <h2 className="font-serif text-2xl tracking-[-0.035em]">Experiment workflow</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Each module is prepared to document configuration files, datasets, evaluation metrics, and repeated experiment runs before quantitative claims are shown.</p>
              </article>
              <article className="rounded-2xl border border-[var(--line)] bg-[var(--background)]/35 p-5">
                <h2 className="font-serif text-2xl tracking-[-0.035em]">Repository setup</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Public repositories are linked when available. Private, planned, or incomplete repositories remain clearly labelled rather than being presented as finished systems.</p>
              </article>
            </div>
          </ReportSection>

          <ReportSection label="Literature context">
            <ListBlock items={project.literature} />
          </ReportSection>

          <ReportSection label="Roadmap">
            <ListBlock items={project.future} />
          </ReportSection>
        </div>
      </article>
    </main>
  );
}
