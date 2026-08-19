import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight, FiCheck, FiCode, FiTarget } from "react-icons/fi";
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
    description: project?.scientificQuestion ?? "Research project report.",
    openGraph: {
      title: project?.title ?? "Research project",
      description: project?.scientificQuestion ?? "Research project report.",
      type: "article",
    },
  };
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="border-t border-[var(--line)] py-12 md:py-16">
      <div className="grid gap-7 lg:grid-cols-[220px_1fr]">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{label}</p>
        <div>{children}</div>
      </div>
    </section>
  );
}

function EvidenceColumn({ label, items, tone }: { label: string; items: string[]; tone: "verified" | "prototype" | "planned" }) {
  const styles = {
    verified: "border-[var(--accent)] bg-[var(--accent-soft)]",
    prototype: "border-[var(--warning)] bg-[var(--panel)]",
    planned: "border-[var(--line)] bg-[var(--background)]/45",
  };

  return (
    <article className={`rounded-[1.5rem] border p-5 ${styles[tone]}`}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-serif text-2xl tracking-[-0.04em]">{label}</h3>
        <span className="font-mono text-xs text-[var(--muted)]">{items.length.toString().padStart(2, "0")}</span>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
            <FiCheck className="mt-1 shrink-0 text-[var(--accent)]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function CompactList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="border-l border-[var(--accent)] pl-4 text-sm leading-7 text-[var(--muted)]">{item}</li>
      ))}
    </ul>
  );
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap[slug];
  if (!project) notFound();

  const isThesis = project.slug === "safecrossai";
  const evidenceTotal = project.implemented.length + project.prototype.length;

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <article className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <Link href="/projects" className="focus-ring inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--accent)]">
          <FiArrowLeft aria-hidden="true" /> All research
        </Link>

        <header className="mt-10 grid gap-12 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <div className="flex flex-wrap gap-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em]">
              <span className="rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] px-3 py-1.5 text-[var(--accent)]">
                {isThesis ? "Diploma thesis research" : project.badge}
              </span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[var(--muted)]">{project.status}</span>
            </div>
            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.93] tracking-[-0.06em] md:text-7xl">{project.title}</h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-[var(--muted)]">{project.scientificQuestion}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.repositoryUrl ? (
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent)]">
                  <FiCode aria-hidden="true" /> View repository
                </a>
              ) : (
                <span className="rounded-full border border-[var(--line)] px-5 py-3 text-sm text-[var(--muted)]">Repository not public yet</span>
              )}
              <Link href="/contact" className="focus-ring rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--accent)]">
                Discuss this work
              </Link>
            </div>
          </div>

          <aside className="command-panel rounded-[2rem] p-6" aria-label="Evidence snapshot">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Evidence snapshot</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--background)]/45 p-4">
                <p className="font-serif text-4xl tracking-[-0.05em]">{evidenceTotal}</p>
                <p className="mt-2 text-xs text-[var(--muted)]">implemented or prototyped items</p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--background)]/45 p-4">
                <p className="font-serif text-4xl tracking-[-0.05em]">{project.metrics.length}</p>
                <p className="mt-2 text-xs text-[var(--muted)]">evaluation metrics</p>
              </div>
            </div>
            <dl className="mt-5 divide-y divide-[var(--line)] text-sm">
              <div className="flex justify-between gap-4 py-3"><dt className="text-[var(--muted)]">Period</dt><dd>{project.year}</dd></div>
              <div className="flex justify-between gap-4 py-3"><dt className="text-[var(--muted)]">Repository</dt><dd>{project.repositoryUrl ? "Public" : "Pending"}</dd></div>
              <div className="flex justify-between gap-4 py-3"><dt className="text-[var(--muted)]">Maturity</dt><dd>{project.status}</dd></div>
            </dl>
          </aside>
        </header>

        <section className="mt-16 grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-7">
            <FiTarget className="text-xl text-[var(--accent)]" aria-hidden="true" />
            <p className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Research objective</p>
            <p className="mt-4 text-lg leading-8">{project.objective}</p>
          </article>
          <article className="rounded-[1.75rem] border border-[var(--accent)] bg-[var(--accent-soft)] p-7">
            <FiArrowUpRight className="text-xl text-[var(--accent)]" aria-hidden="true" />
            <p className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Technical contribution</p>
            <p className="mt-4 text-lg leading-8">{project.technicalContribution}</p>
          </article>
        </section>

        <Section label="Evidence ledger">
          <p className="mb-7 max-w-3xl text-sm leading-7 text-[var(--muted)]">
            Maturity is reported explicitly. Planned work is not presented as experimental evidence.
          </p>
          <div className="grid gap-5 lg:grid-cols-3">
            <EvidenceColumn label="Implemented" items={project.implemented} tone="verified" />
            <EvidenceColumn label="Prototype" items={project.prototype} tone="prototype" />
            <EvidenceColumn label="Planned" items={project.planned} tone="planned" />
          </div>
        </Section>

        <Section label="Technical approach">
          <div className="flex flex-wrap gap-2">
            {project.methodology.map((item) => (
              <span key={item} className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--muted)]">{item}</span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.questions.slice(0, 3).map((question, index) => (
              <article key={question} className="rounded-[1.4rem] border border-[var(--line)] p-5">
                <span className="font-mono text-xs text-[var(--accent)]">Q{index + 1}</span>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{question}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section label="Evaluation protocol">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6">
              <h2 className="font-serif text-3xl tracking-[-0.04em]">Experiments</h2>
              <div className="mt-5"><CompactList items={project.experiments} /></div>
            </article>
            <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6">
              <h2 className="font-serif text-3xl tracking-[-0.04em]">Metrics</h2>
              <div className="mt-5"><CompactList items={project.metrics} /></div>
            </article>
          </div>
        </Section>

        <Section label="Scientific honesty">
          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-[1.5rem] border border-[var(--line)] p-6">
              <h2 className="font-serif text-3xl tracking-[-0.04em]">Current limitations</h2>
              <div className="mt-5"><CompactList items={project.limitations} /></div>
            </article>
            <article className="rounded-[1.5rem] border border-[var(--accent)] bg-[var(--accent-soft)] p-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Next falsifiable step</p>
              <p className="mt-5 text-lg leading-8">{project.future[0]}</p>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">The project advances only when this step produces inspectable evidence.</p>
            </article>
          </div>
        </Section>

        <Section label="Research context">
          <div className="flex flex-wrap gap-2">
            {project.literature.map((item) => (
              <span key={item} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]">{item}</span>
            ))}
          </div>
        </Section>

        <div className="research-grid rounded-[2rem] border border-[var(--line)] bg-[var(--accent-soft)] p-8 md:flex md:items-center md:justify-between md:p-10">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Research conversation</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.05em]">Questions, critique, and collaboration are welcome.</h2>
          </div>
          <Link href="/contact" className="focus-ring mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] md:ml-8 md:mt-0">
            Contact me <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </article>
    </main>
  );
}
