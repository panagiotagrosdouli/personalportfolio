import Link from "next/link";
import { projects } from "@/data/projects";

const summary = [
  ["Research threads", projects.length.toString()],
  ["Open repositories", projects.filter((project) => project.github).length.toString()],
  ["Active directions", projects.filter((project) => project.status === "Active").length.toString()],
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-[#090909] dark:text-neutral-100">
      <nav className="border-b border-neutral-200 px-5 py-4 text-sm dark:border-neutral-800 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-semibold text-neutral-950 transition hover:text-[#e0001b] dark:text-neutral-50">Panagiota Grosdouli</Link>
          <div className="flex gap-5 text-neutral-600 dark:text-neutral-400">
            <Link href="/research" className="hover:text-[#e0001b]">Research</Link>
            <Link href="/publications" className="hover:text-[#e0001b]">Publications</Link>
            <Link href="/cv" className="hover:text-[#e0001b]">CV</Link>
            <Link href="/contact" className="hover:text-[#e0001b]">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e0001b] dark:text-[#ff5a66]">Projects</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-neutral-950 dark:text-neutral-50 md:text-7xl">Research contributions, not portfolio cards.</h1>
          <p className="mt-8 text-xl leading-9 text-neutral-700 dark:text-neutral-300">Each project is framed as a research case: question, method, experiment, limitations, and next steps.</p>
        </header>

        <section className="mt-14 grid gap-0 border-y border-neutral-200 dark:border-neutral-800 md:grid-cols-3">
          {summary.map(([label, value]) => (
            <div key={label} className="border-b border-neutral-200 py-6 last:border-b-0 dark:border-neutral-800 md:border-b-0 md:border-r md:last:border-r-0">
              <p className="text-4xl font-semibold tracking-[-0.05em] text-neutral-950 dark:text-neutral-50">{value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{label}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 space-y-10">
          {projects.map((project) => (
            <article key={project.slug} className="border-t border-neutral-200 pt-8 dark:border-neutral-800">
              <div className="grid gap-8 lg:grid-cols-[1fr_240px]">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    <span>{project.status}</span>
                    <span>{project.badge}</span>
                    <span>{project.year}</span>
                  </div>
                  <h2 className="text-3xl font-semibold tracking-[-0.04em] text-neutral-950 dark:text-neutral-50">
                    <Link href={`/projects/${project.slug}`} className="transition hover:text-[#e0001b] dark:hover:text-[#ff5a66]">{project.title}</Link>
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-700 dark:text-neutral-300">{project.objective}</p>
                  <div className="mt-6 grid gap-4 text-sm leading-7 md:grid-cols-2">
                    <p><span className="font-semibold text-[#e0001b] dark:text-[#ff5a66]">Problem.</span> {project.questions[0]}</p>
                    <p><span className="font-semibold text-[#e0001b] dark:text-[#ff5a66]">Method.</span> {project.methodology.join(" · ")}</p>
                    <p><span className="font-semibold text-[#e0001b] dark:text-[#ff5a66]">Evidence.</span> {project.experiments.join(" · ")}</p>
                    <p><span className="font-semibold text-[#e0001b] dark:text-[#ff5a66]">Next steps.</span> {project.future.join(" · ")}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="border border-neutral-200 px-2 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">{tag}</span>
                    ))}
                  </div>
                </div>
                <aside className="border-t border-neutral-200 pt-5 dark:border-neutral-800 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Maturity</p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 dark:text-neutral-50">{project.progress}%</p>
                  <div className="mt-4 h-px bg-neutral-200 dark:bg-neutral-800"><div className="h-px bg-[#e0001b] dark:bg-[#ff5a66]" style={{ width: `${project.progress}%` }} /></div>
                  <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-400">{project.github ? "Code path available or planned through project page." : "Research documentation in progress."}</p>
                </aside>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
