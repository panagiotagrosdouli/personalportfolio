import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projectMap, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function ReportSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-stone-800 py-10">
      <div className="grid gap-5 md:grid-cols-[180px_1fr]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-400">{label}</p>
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
      <article className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <Link href="/projects" className="text-sm text-stone-500 transition hover:text-emerald-400">Back to projects</Link>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Project Report</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white md:text-7xl">
          {project.title}
        </h1>
        <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">{project.subtitle}</p>

        <div className="mt-8 max-w-xs">
          <div className="mb-2 flex items-center justify-between font-mono text-xs text-stone-500">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="h-px bg-stone-800">
            <div className="h-px bg-emerald-400" style={{ width: `${project.progress}%` }} />
          </div>
        </div>

        <div className="mt-14">
          <ReportSection label="Overview">
            <p className="max-w-3xl text-base leading-8 text-stone-400">{project.overview}</p>
          </ReportSection>

          <ReportSection label="Research Questions">
            <ul className="space-y-3">
              {project.questions.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-stone-400"><span className="text-stone-600">-</span>{item}</li>
              ))}
            </ul>
          </ReportSection>

          <ReportSection label="Methodology">
            <div className="flex flex-wrap gap-2">
              {project.methodology.map((item) => (
                <span key={item} className="border border-stone-800 bg-stone-900 px-3 py-1.5 font-mono text-[11px] text-stone-400">{item}</span>
              ))}
            </div>
          </ReportSection>

          <ReportSection label="Experiments">
            <ul className="space-y-3">
              {project.experiments.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-stone-400"><span className="text-stone-600">-</span>{item}</li>
              ))}
            </ul>
          </ReportSection>

          <ReportSection label="Related Literature">
            <div className="flex flex-wrap gap-2">
              {project.literature.map((item) => (
                <span key={item} className="border border-stone-800 bg-stone-900 px-3 py-1.5 font-mono text-[11px] text-stone-400">{item}</span>
              ))}
            </div>
          </ReportSection>

          <ReportSection label="Future Work">
            <ul className="space-y-3">
              {project.future.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-stone-400"><span className="text-stone-600">-</span>{item}</li>
              ))}
            </ul>
          </ReportSection>
        </div>
      </article>
      <Footer theme="dark" />
    </main>
  );
}
