import type { Metadata } from "next";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = { title: "Research Blog", description: "Research notes on robotics, SLAM, sensor fusion, AI and autonomous systems." };

const topics = ["robotics", "SLAM", "sensor fusion", "AI", "autonomous systems", "research notes"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Research blog</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Technical notes for reproducible robotics research.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">The blog is prepared for Markdown/MDX posts with syntax highlighting, LaTeX equations, figures, citations, tags, categories, and estimated reading time.</p>
        <section className="mt-14 rounded-[2rem] border border-dashed border-[var(--line)] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Coming Soon</p>
          <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">No posts published yet.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">Planned topics include failure cases in VIO, uncertainty calibration, SLAM evaluation metrics, sensor-fusion design, and research software reproducibility.</p>
          <div className="mt-6 flex flex-wrap gap-2">{topics.map((topic) => <span key={topic} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{topic}</span>)}</div>
        </section>
      </div>
    </main>
  );
}
