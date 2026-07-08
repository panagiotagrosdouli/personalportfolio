import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projectMap, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectMap[slug];
  return { title: project?.title ?? "Project", description: project?.objective ?? "Research project report." };
}

function ReportSection({ label, children }: { label: string; children: React.ReactNode }) {
  return <section className="border-t border-[var(--line)] py-10"><div className="grid gap-5 md:grid-cols-[210px_1fr]"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{label}</p><div>{children}</div></div></section>;
}

function PlaceholderFigure({ title }: { title: string }) {
  return <div className="rounded-[1.5rem] border border-dashed border-[var(--line)] bg-[var(--accent-soft)]/20 p-6 research-grid"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Demonstration placeholder</p><h3 className="mt-3 font-serif text-2xl tracking-[-0.035em]">{title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">Replace with project-specific figures, GIFs, benchmark plots, videos, or diagrams when verified experimental outputs are available.</p><div className="mt-6 h-40 rounded-xl border border-[var(--line)] bg-[var(--background)]/70" /></div>;
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
          <div className="mt-7 flex flex-wrap gap-3">{project.repositoryUrl ? <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="focus-ring rounded-full border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">GitHub repository</a> : <span className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]">Repository coming soon</span>}{project.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]">{tag}</span>)}</div>
        </header>

        <div className="mt-16 grid gap-6 lg:grid-cols-3"><PlaceholderFigure title="Architecture figure" /><PlaceholderFigure title="Pipeline animation" /><PlaceholderFigure title="Benchmark / result figure" /></div>

        <div className="mt-16">
          <ReportSection label="Scientific overview"><p className="max-w-3xl text-base leading-8 text-[var(--muted)]">{project.objective}</p></ReportSection>
          <ReportSection label="Research questions"><ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">{project.questions.map((item) => <li key={item} className="border-l border-[var(--accent)] pl-4">{item}</li>)}</ul></ReportSection>
          <ReportSection label="System diagram"><PlaceholderFigure title="System diagram placeholder" /></ReportSection>
          <ReportSection label="Implemented features"><div className="flex flex-wrap gap-2">{project.methodology.map((item) => <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--muted)]">{item}</span>)}</div></ReportSection>
          <ReportSection label="Results"><ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">{project.experiments.map((item) => <li key={item}>{item}</li>)}</ul><p className="mt-4 text-sm italic text-[var(--muted)]">Quantitative benchmark tables will be added only after reproducible experiments are available.</p></ReportSection>
          <ReportSection label="Code snippet"><pre className="overflow-x-auto rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)]/20 p-5 text-xs"><code>{`# Research workflow placeholder\npython -m experiments.run --config configs/${project.slug}.yaml\npython -m evaluation.report --metrics ate rpe risk calibration`}</code></pre></ReportSection>
          <ReportSection label="Installation guide"><pre className="overflow-x-auto rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)]/20 p-5 text-xs"><code>{`git clone ${project.repositoryUrl ?? "<repository-url>"}\ncd <project>\npython -m venv .venv && source .venv/bin/activate\npip install -r requirements.txt`}</code></pre></ReportSection>
          <ReportSection label="Future work"><ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">{project.future.map((item) => <li key={item}>{item}</li>)}</ul></ReportSection>
        </div>
      </article>
    </main>
  );
}
