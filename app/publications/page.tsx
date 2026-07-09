import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Publications and Research Outputs",
  description: "Honest publication-ready sections for manuscripts, technical reports, posters, preprints and thesis work without fabricating accepted outputs.",
};

const outputSections = [
  ["Accepted journal papers", "Coming Soon", "No verified accepted journal publications are listed yet."],
  ["Accepted conference papers", "Coming Soon", "No verified accepted conference publications are listed yet."],
  ["Technical reports", "In Progress", "Project reports will be added when reproducible experiments and figures are available."],
  ["Preprints", "Coming Soon", "Preprints will be linked only after they are publicly available."],
  ["Thesis work", "Coming Soon", "Thesis material will be added when formally available."],
  ["Posters", "Planned", "Poster entries will be added only when a poster exists."],
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Publications and outputs</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Prepared for research outputs, honest about what exists.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          This page intentionally separates accepted publications from planned manuscripts, technical reports and research notes. Nothing here should imply acceptance, affiliation, award status or peer review unless explicitly verified.
        </p>

        <section className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]" aria-label="Publication status sections">
          {outputSections.map(([section, status, note]) => (
            <section key={section} className="grid gap-4 py-8 md:grid-cols-[260px_1fr]">
              <div>
                <h2 className="font-serif text-3xl tracking-[-0.04em]">{section}</h2>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)]">{status}</p>
              </div>
              <p className="text-sm leading-7 text-[var(--muted)]">{note}</p>
            </section>
          ))}
        </section>

        <section className="mt-14" aria-labelledby="planned-manuscripts">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Planned manuscripts</p>
          <h2 id="planned-manuscripts" className="mt-3 font-serif text-4xl tracking-[-0.04em]">Future paper titles linked to project directions.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.slice(0, 8).map((project) => (
              <article key={project.slug} className="rounded-2xl border border-[var(--line)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">Planned manuscript · not accepted</p>
                <h3 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.035em]">{project.scientificQuestion}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Potential title direction: {project.technicalContribution}</p>
                <Link href={`/projects/${project.slug}`} className="mt-5 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">
                  View project basis
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
