import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight, FiBookOpen, FiCode } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "Publications & Research Outputs",
  description: "Diploma thesis, manuscripts in preparation, and open-source research software by Panagiota Grosdouli.",
};

const software = [
  {
    year: "2026",
    title: "SHIELD-VIO",
    subtitle: "Estimator introspection, calibrated failure prediction, and protective navigation for visual–inertial autonomy",
    href: "https://github.com/panagiotagrosdouli/SHIELD-VIO",
    note: "Open-source research prototype · MIT",
  },
  {
    year: "2025–Present",
    title: "DynNav",
    subtitle: "Planning to preserve escape options in partially observed and dynamically changing environments",
    href: "https://github.com/panagiotagrosdouli/DynNav",
    note: "Open-source research software · Apache-2.0",
  },
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-5xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Publications & research outputs</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Work that can be read, inspected, and reproduced.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">Academic publications, thesis work, manuscripts in preparation, and research software are listed separately. Repositories are not presented as peer-reviewed papers.</p>
        </header>

        <section className="mt-16 border-t border-[var(--line)] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
            <div><p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Diploma thesis</p><p className="mt-3 text-sm text-[var(--muted)]">2025–Present · In progress</p></div>
            <article className="rounded-[1.75rem] border border-[var(--accent)] bg-[var(--accent-soft)] p-7 md:p-9">
              <FiBookOpen className="text-2xl text-[var(--accent)]" aria-hidden="true" />
              <h2 className="mt-6 max-w-4xl font-serif text-4xl tracking-[-0.05em]">Trajectory Prediction of Vulnerable Road Users at Smart Intersections for Road Safety and Autonomous Driving Applications</h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)]">An experimental comparison of recurrent, attention-based, graph-based, state-space, and probabilistic predictors across pedestrian, cyclist, scooter, and motorcycle trajectories.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/projects/safecrossai" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-semibold text-[var(--background)]">Thesis case study <FiArrowUpRight aria-hidden="true" /></Link>
                <span className="rounded-full border border-[var(--line)] px-4 py-2.5 text-xs text-[var(--muted)]">Final citation metadata pending</span>
              </div>
            </article>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
            <div><p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Research software</p><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Public repositories with executable evidence.</p></div>
            <div className="grid gap-5">
              {software.map((item) => (
                <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="focus-ring group rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6 transition hover:border-[var(--accent)]">
                  <div className="flex items-center justify-between gap-3"><span className="font-mono text-xs text-[var(--accent)]">{item.year}</span><FiCode className="text-[var(--muted)] group-hover:text-[var(--accent)]" aria-hidden="true" /></div>
                  <h2 className="mt-4 font-serif text-3xl tracking-[-0.04em]">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.subtitle}</p>
                  <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">{item.note}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
            <div><p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">In preparation</p><p className="mt-3 text-sm text-[var(--muted)]">Not submitted · not peer reviewed</p></div>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[1.5rem] border border-[var(--line)] p-6"><h2 className="font-serif text-2xl tracking-[-0.04em]">Failure-aware visual–inertial autonomy</h2><p className="mt-4 text-sm leading-7 text-[var(--muted)]">A manuscript direction based on SHIELD-VIO’s estimator-health, calibration, domain-shift, and protective-navigation experiments.</p></article>
              <article className="rounded-[1.5rem] border border-[var(--line)] p-6"><h2 className="font-serif text-2xl tracking-[-0.04em]">Recoverability-aware online replanning</h2><p className="mt-4 text-sm leading-7 text-[var(--muted)]">A manuscript direction based on DynNav’s four-planner comparison and irreversible-failure evaluation programme.</p></article>
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Status policy</p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--muted)]">Peer-reviewed work will appear as such only after acceptance. Future preprints will include a persistent identifier and version; software outputs link to their public repositories.</p>
        </section>
      </div>
    </main>
  );
}
