import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { ResearchMapClient } from "@/components/portfolio/ResearchMapClient";
import { researchEdges, researchNodes } from "@/data/researchGraph";

export const metadata: Metadata = {
  title: "Research Map",
  description: "Interactive robotics research map connecting perception, state estimation, uncertainty, risk, planning, navigation, safety and simulation projects.",
};

export default function ResearchMapPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Research graph</p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">A connected research ecosystem, not isolated project cards.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">This map organizes projects around the central theme of robust autonomy under uncertainty. Nodes represent research pillars, methods, and repositories. Edges explain how perception, state estimation, uncertainty, risk, planning, navigation, safety, and simulation support one coherent agenda.</p>

        <section className="mt-10 grid gap-4 border-y border-[var(--line)] py-6 md:grid-cols-3">
          <div><p className="font-serif text-4xl tracking-[-0.05em]">{researchNodes.length}</p><p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Research nodes</p></div>
          <div><p className="font-serif text-4xl tracking-[-0.05em]">{researchEdges.length}</p><p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Conceptual links</p></div>
          <div><p className="font-serif text-4xl tracking-[-0.05em]">Connected</p><p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Research themes</p></div>
        </section>

        <div className="mt-10">
          <ResearchMapClient />
        </div>

        <section className="mt-10 rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Explore the research map</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">Follow the connections between perception, estimation, uncertainty and planning. Open a node to explore the methods and projects behind each research direction.</p>
          <Link href="/mission-logs" className="mt-5 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">Explore research updates</Link>
        </section>
      </div>
    </main>
  );
}
