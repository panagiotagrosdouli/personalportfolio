import type { Metadata } from "next";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = { title: "Interactive Demos", description: "Placeholder demos for trajectory visualization, SLAM, sensor fusion, risk, segmentation, UAV simulation and point clouds." };

const demos = ["Trajectory visualization", "SLAM map viewer", "Sensor fusion animation", "Risk estimation visualization", "Semantic segmentation demo", "UAV simulation", "3D point cloud viewer"];

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Interactive demos</p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Demonstrations for robotics concepts and research communication.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">These modules currently use placeholder/demo data and must not be interpreted as final experimental results.</p>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => <article key={demo} className="rounded-[1.5rem] border border-[var(--line)] p-6"><div className="mb-5 h-36 rounded-xl border border-dashed border-[var(--line)] bg-[var(--accent-soft)]/25 research-grid" /><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Demonstration placeholder</p><h2 className="mt-3 font-serif text-2xl tracking-[-0.04em]">{demo}</h2><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Coming Soon. This section is prepared for verified interactive visualizations using project data when available.</p></article>)}
        </div>
      </div>
    </main>
  );
}
