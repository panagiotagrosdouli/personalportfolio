import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { MissionLogsClient } from "@/components/portfolio/MissionLogsClient";
import { missionLogs } from "@/data/missionLogs";

export const metadata: Metadata = {
  title: "Mission Logs",
  description: "Research notebook entries for robotics, uncertainty-aware autonomy, VIO, SLAM, navigation, simulation and intelligent mobility projects.",
};

export default function MissionLogsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Mission logs</p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">A robotics research notebook, not a generic blog.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">Mission Logs document objectives, experiments, observations, results, and next steps. Draft entries are clearly labelled because the goal is scientific traceability, not exaggerated marketing.</p>

        <section className="mt-10 grid gap-4 border-y border-[var(--line)] py-6 md:grid-cols-3">
          <div><p className="font-serif text-4xl tracking-[-0.05em]">{missionLogs.length}</p><p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Research notes</p></div>
          <div><p className="font-serif text-4xl tracking-[-0.05em]">MDX-ready</p><p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Future equations and figures</p></div>
          <div><p className="font-serif text-4xl tracking-[-0.05em]">Linked</p><p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Projects and graph</p></div>
        </section>

        <MissionLogsClient />

        <section className="mt-10 rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Notebook policy</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">Unfinished entries remain marked as Draft or Planned. Results are not presented as benchmarks until reproducible experiments, data, and metrics are available.</p>
          <Link href="/research-map" className="mt-5 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">Return to research map</Link>
        </section>
      </div>
    </main>
  );
}
