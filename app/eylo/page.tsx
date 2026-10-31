import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";

export const metadata: Metadata = {
  title: "EYLO — Research Software Case Study",
  description: "EYLO: an evidence-aware AI-assisted research discovery and project workspace developed by Panagiota Grosdouli.",
};

const architecture = [
  ["Discovery", "Retrieve academic metadata from OpenAlex, arXiv, Europe PMC, Crossref and Semantic Scholar."],
  ["Evidence", "Deduplicate records, preserve source links and distinguish retrieved facts from AI inference."],
  ["Workspace", "Save literature, researchers and projects through authenticated user-scoped workflows."],
  ["Reasoning", "Use EYRA to propose research next steps with human verification and explicit uncertainty."],
];

export default function EyloPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Research software · Technical case study</p>
        <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.95] tracking-[-0.06em] md:text-8xl">EYLO<span className="text-[var(--accent)]">.</span></h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-[var(--muted)]">
          An AI-assisted research environment designed to move from scholarly discovery to traceable evidence and actionable research planning.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="focus-ring rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)]" href="https://eyloai.vercel.app/" target="_blank" rel="noreferrer">Explore EYLO</a>
          <Link className="focus-ring rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold" href="/cv">Academic CV</Link>
        </div>
        <section className="mt-20 grid gap-8 border-t border-[var(--line)] pt-12 md:grid-cols-[0.65fr_1.35fr]">
          <h2 className="font-serif text-4xl tracking-[-0.05em]">The problem</h2>
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>Research discovery is fragmented across literature search, source evaluation, team context and execution. A fluent AI answer is not necessarily verifiable evidence.</p>
            <p>EYLO explores how to connect scholarly retrieval and AI guidance while preserving provenance, uncertainty and user judgment. It is an independent software engineering project, not a peer-reviewed research result.</p>
          </div>
        </section>
        <section className="mt-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">System architecture</p>
          <h2 className="mt-3 font-serif text-5xl tracking-[-0.05em]">From question to evidence.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {architecture.map(([title, desc], i) => (
              <article key={title} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-7">
                <span className="font-mono text-xs text-[var(--accent)]">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{desc}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-20 grid gap-8 border-t border-[var(--line)] pt-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl tracking-[-0.05em]">Engineering decisions</h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">React and Vite frontend, Supabase authentication and persistence, server-side API integrations, OpenAI-assisted research workflows, and Vercel deployment infrastructure.</p>
          </div>
          <div>
            <h2 className="font-serif text-4xl tracking-[-0.05em]">Limitations & next steps</h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">Retrieved metadata may be incomplete; generated synthesis requires verification. Product adoption, comprehensive discovery benchmarks and scientific impact have not been established. Priorities include human-judged retrieval evaluation and end-to-end regression tests.</p>
          </div>
        </section>
        <div className="mt-16 border-t border-[var(--line)] pt-8 text-sm text-[var(--muted)]">
          <Link href="/projects" className="text-[var(--accent)] hover:underline">Return to research projects</Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
