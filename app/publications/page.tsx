import type { Metadata } from "next";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Publications and Outputs",
  description: "Honest publication and research-output page with planned manuscripts, technical reports, thesis work, posters, and preprints clearly marked as forthcoming.",
};

const sections = ["Accepted journal papers", "Accepted conference papers", "Preprints", "Technical reports", "Thesis work", "Posters"];

function plannedTitle(title: string) {
  if (title.includes("SHIELD")) return "Self-Healing Visual-Inertial Odometry for Robust Autonomy under Degraded Sensing";
  if (title.includes("SLAM")) return "Uncertainty-Aware Multi-Modal Sensor Fusion for Robust SLAM";
  if (title.includes("DynNav")) return "Risk-Sensitive Navigation in Unknown Environments with Map-Uncertainty Costs";
  if (title.includes("SafeCross")) return "Uncertainty-Aware Vulnerable Road-User Forecasting for Intelligent Intersection Safety";
  if (title.includes("Segmentation")) return "Semantic Perception and Traversability Estimation for Urban Delivery Robots";
  if (title.includes("UAV")) return "Risk-Aware Return-to-Home Planning for UAV Autonomy under Localization Uncertainty";
  return `${title}: Research Notes and Reproducible Prototype Report`;
}

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Publications and research outputs</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Prepared for academic outputs without inventing publications.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">This page intentionally does not list unaccepted or unverifiable work as publications. It separates accepted outputs from planned manuscripts, technical reports, thesis work, and posters.</p>

        <div className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {sections.map((section) => <section key={section} className="grid gap-4 py-8 md:grid-cols-[260px_1fr]"><h2 className="font-serif text-3xl tracking-[-0.04em]">{section}</h2><div><p className="text-sm leading-7 text-[var(--muted)]">Coming Soon.</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">No verified accepted entries yet.</p></div></section>)}
        </div>

        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Planned manuscripts</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em]">Future paper/report titles — explicitly marked as planned.</h2>
          <div className="mt-8 grid gap-4">
            {projects.slice(0, 8).map((project) => (
              <article key={project.slug} className="rounded-[1.3rem] border border-[var(--line)] p-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">“{plannedTitle(project.title)}”</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">Planned manuscript / technical report connected to {project.shortTitle}. Status: {project.status}. Not submitted or accepted unless this page is updated with verified bibliographic information.</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
