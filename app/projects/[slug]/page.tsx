import Link from "next/link";
import { notFound } from "next/navigation";
import { projectMap, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function ReportSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-neutral-200 py-10 dark:border-neutral-800">
      <div className="grid gap-5 md:grid-cols-[180px_1fr]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0001b] dark:text-[#ff5a66]">{label}</p>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap[slug];
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-[#090909] dark:text-neutral-100">
      <nav className="border-b border-neutral-200 px-5 py-4 text-sm dark:border-neutral-800 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-semibold text-neutral-950 transition hover:text-[#e0001b] dark:text-neutral-50">Panagiota Grosdouli</Link>
          <Link href="/projects" className="text-neutral-600 hover:text-[#e0001b] dark:text-neutral-400">Projects</Link>
        </div>
      </nav>

      <article className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/projects" className="text-sm text-neutral-500 transition hover:text-[#e0001b]">Back to projects</Link>
        <header className="mt-12 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e0001b] dark:text-[#ff5a66]">Project report</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-neutral-950 dark:text-neutral-50 md:text-7xl">{project.title}</h1>
          <p className="mt-5 text-sm text-neutral-500">{project.subtitle}</p>
          <p className="mt-8 text-lg leading-8 text-neutral-700 dark:text-neutral-300">{project.overview}</p>
        </header>

        <div className="mt-16">
          <ReportSection label="Research questions">
            <ul className="space-y-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
              {project.questions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </ReportSection>

          <ReportSection label="Methodology">
            <div className="flex flex-wrap gap-2">
              {project.methodology.map((item) => <span key={item} className="border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">{item}</span>)}
            </div>
          </ReportSection>

          <ReportSection label="Experiments">
            <ul className="space-y-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
              {project.experiments.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </ReportSection>

          <ReportSection label="Literature">
            <div className="flex flex-wrap gap-2">
              {project.literature.map((item) => <span key={item} className="border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">{item}</span>)}
            </div>
          </ReportSection>

          <ReportSection label="Future work">
            <ul className="space-y-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
              {project.future.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </ReportSection>
        </div>
      </article>
    </main>
  );
}
