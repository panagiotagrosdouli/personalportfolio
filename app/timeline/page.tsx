import type { Metadata } from "next";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Reveal } from "@/components/portfolio/Reveal";

export const metadata: Metadata = { title: "Timeline", description: "Research timeline of education, projects, milestones and future milestones." };

const timeline = [
  ["2020", "Education", "Started MEng Electrical & Computer Engineering at Democritus University of Thrace."],
  ["2025", "Research milestone", "Focused portfolio direction around robust autonomy, trajectory prediction, and risk-aware robotics."],
  ["2025–2026", "Thesis", "Trajectory prediction of vulnerable road users at smart intersections."],
  ["2026", "Major projects", "SHIELD-VIO, Adaptive Multi-Modal SLAM, DynNav, SafeCrossAI, and uncertainty-aware navigation organized as research repositories."],
  ["Future", "Future milestone", "Submit research outputs only when experiments, reports, or publications are mature and verifiable."],
];

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Timeline</p>
        <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Research development over time.</h1>
        <div className="mt-14 space-y-0 border-l border-[var(--line)]">
          {timeline.map(([year, type, text], index) => <Reveal key={`${year}-${type}`} delay={index * 0.04}><article className="relative border-b border-[var(--line)] py-8 pl-8"><span className="absolute -left-2 top-9 h-4 w-4 rounded-full border border-[var(--accent)] bg-[var(--background)]" /><p className="font-mono text-xs text-[var(--accent)]">{year}</p><h2 className="mt-2 font-serif text-3xl tracking-[-0.04em]">{type}</h2><p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text}</p></article></Reveal>)}
        </div>
      </div>
    </main>
  );
}
