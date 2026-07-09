import type { Metadata } from "next";
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
  return { title: project?.title ?? "Project", description: project?.objective ?? "Research project report." };
}

function ReportSection({ label, children }: { label: string; children: React.ReactNode }) {
  return <section className="border-t border-[var(--line)] py-10"><div className="grid gap-5 md:grid-cols-[230px_1fr]"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{label}</p><div>{children}</div></div></section>;
}

function PlaceholderFigure({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-[var(--line)] bg-[var(--accent-soft)]/20 p-6 research-grid">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Clearly marked placeholder</p>
      <h3 className="mt-3 font-serif text-2xl tracking-[-0.035em]">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">{description}</p>
      <div className="mt-6 grid h-40 grid-cols-4 gap-2 rounded-xl border border-[var(--line)] bg-[var(--background)]/70 p-3" aria-hidden="true">
        <div className="rounded-lg border border-[var(--line)]" />
        <div className="col-span-2 rounded-lg border border-[var(--accent)]" />
        <div className="rounded-lg border border-[var(--line)]" />
        <div className="col-span-4 h-px self-center bg-[var(--accent)]/50" />
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">{items.map((item) => <li key={item} className="border-l border-[var(--accent)] pl-4">{item}</li>)}</ul>;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap[slug];
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <article className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/projects" className="focus-ring text-sm text-[var(--muted)] transition hover:text-[var(--accent)]">Back to projects</Link>
        <header className="mt-10 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Project research report</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">{project.title}</h1>
          <p className="mt-4 text-sm text-[var(--muted)]">{project.subtitle}</p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">{project.overview}</p>
          <div className="mt-7 flex flex-wrap gap-3">{project.repositoryUrl ? <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="focus-ring rounded-full border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">GitHub repository</a> : <span className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]">Repository coming soon</span>}<span className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]">{project.status}</span>{project.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]">{tag}</span>)}</div>
        </header>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <PlaceholderFigure title={project.architectureLabel} description="Architecture slot for verified system diagrams. Until a real diagram is added, this block remains a labelled placeholder." />
          <PlaceholderFigure title={project.pipelineLabel} description="Pipeline slot for step-by-step technical flow, demo GIF, or reproducible execution trace." />
          <PlaceholderFigure title={project.demoLabel} description="Demo slot for verified results or synthetic demo data. Synthetic demos must remain explicitly marked as synthetic." />
        </div>

        <div className="mt-16">
          <ReportSection label="Scientific motivation"><p className="max-w-3xl text-base leading-8 text-[var(--muted)]">{project.objective}</p></ReportSection>
          <ReportSection label="Problem formulation"><div className="rounded-2xl border border-[var(--line)] p-5"><p className="text-sm font-semibold text-[var(--foreground)]">Central question</p><p className="mt-2 text-base leading-8 text-[var(--muted)]">{project.scientificQuestion}</p><p className="mt-5 text-sm font-semibold text-[var(--foreground)]">Technical contribution</p><p className="mt-2 text-base leading-8 text-[var(--muted)]">{project.technicalContribution}</p></div></ReportSection>
          <ReportSection label="Research questions"><BulletList items={project.questions} /></ReportSection>
          <ReportSection label="System architecture"><PlaceholderFigure title="System diagram placeholder" description="Replace with a real architecture figure when the repository contains a verified image, PDF, or generated diagram." /></ReportSection>
          <ReportSection label="Implementation status"><div className="overflow-x-auto rounded-2xl border border-[var(--line)]"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-[var(--accent-soft)]/25 text-[var(--foreground)]"><tr><th className="p-4">Implemented</th><th className="p-4">Research prototype</th><th className="p-4">Planned</th></tr></thead><tbody className="align-top text-[var(--muted)]"><tr><td className="p-4"><BulletList items={project.implemented} /></td><td className="p-4"><BulletList items={project.prototype} /></td><td className="p-4"><BulletList items={project.planned} /></td></tr></tbody></table></div></ReportSection>
          <ReportSection label="Experiments"><BulletList items={project.experiments} /><p className="mt-4 text-sm italic text-[var(--muted)]">Quantitative benchmark tables are added only after reproducible experiments are available.</p></ReportSection>
          <ReportSection label="Metrics"><div className="flex flex-wrap gap-2">{project.metrics.map((item) => <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--muted)]">{item}</span>)}</div></ReportSection>
          <ReportSection label="Limitations"><BulletList items={project.limitations} /></ReportSection>
          <ReportSection label="Software structure"><pre className="overflow-x-auto rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)]/20 p-5 text-xs"><code>{`# Suggested reproducible workflow\npython -m experiments.run --config configs/${project.slug}.yaml\npython -m evaluation.report --metrics ate rpe risk calibration\npython -m visualization.export --project ${project.slug}`}</code></pre></ReportSection>
          <ReportSection label="Installation guide"><pre className="overflow-x-auto rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)]/20 p-5 text-xs"><code>{`git clone ${project.repositoryUrl ?? "<repository-url>"}\ncd <project>\npython -m venv .venv && source .venv/bin/activate\npip install -r requirements.txt`}</code></pre></ReportSection>
          <ReportSection label="Future work"><BulletList items={project.future} /></ReportSection>
        </div>
      </article>
    </main>
  );
}
