import type { Metadata } from "next";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = { title: "Research Notes", description: "Draft research notes on uncertainty-aware robotics, VIO, semantic perception, simulation, and reproducible robotics repositories." };

const posts = [
  { title: "Why Uncertainty Matters in Robotics", status: "Draft", summary: "A conceptual note on why autonomy systems should expose confidence, calibration, and failure modes instead of only reporting nominal accuracy." },
  { title: "From VIO to Risk-Aware Navigation", status: "Draft", summary: "A bridge between localization health, estimator consistency, and planner-level risk in mobile robots and UAVs." },
  { title: "Semantic Perception for Delivery Robots", status: "Draft", summary: "How segmentation outputs can become traversability and safety signals for sidewalk robots." },
  { title: "Simulation as a Research Tool", status: "Draft", summary: "A note on simulation assumptions, seeded experiments, ablations, and reproducibility." },
  { title: "How to Build Reproducible Robotics Repositories", status: "Draft", summary: "A practical template for READMEs, configs, metrics, plots, CI, and honest limitations." },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Research notes</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Technical notes for reproducible robotics research.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">This section is prepared for MDX-based research writing. Posts below are intentionally marked as drafts until full notes, figures, equations, citations, and reproducible examples are added.</p>
        <section className="mt-14 grid gap-5">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[1.5rem] border border-[var(--line)] p-6">
              <div className="flex flex-wrap items-center gap-2"><span className="rounded-full border border-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{post.status}</span><span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">MDX scaffold</span></div>
              <h2 className="mt-4 font-serif text-3xl tracking-[-0.04em]">{post.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">{post.summary}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
