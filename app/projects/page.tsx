import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects", description: "Selected machine learning, computer vision and robotics projects." };

const priority = ["safecrossai", "shield-vio", "dynnav", "adaptive-multimodal-slam"];
const sorted = [...projects].sort((a, b) => {
  const ai = priority.indexOf(a.slug);
  const bi = priority.indexOf(b.slug);
  return (ai === -1 ? 100 : ai) - (bi === -1 ? 100 : bi);
});

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Portfolio</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">Projects<span className="text-[var(--muted)]">.</span></h1>
        <p className="mt-5 max-w-xl text-base text-[var(--muted)]">Selected work in machine learning, perception and autonomy.</p>
        <div className="mt-12 grid gap-3">
          {sorted.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group grid gap-3 rounded-xl border border-[var(--line)] p-6 transition hover:border-[var(--foreground)] md:grid-cols-[1fr_2fr_auto] md:items-center">
              <span className="text-xs text-[var(--muted)]">{project.slug === "safecrossai" ? "Diploma thesis" : project.status}</span>
              <div>
                <h2 className="text-lg font-semibold">{project.shortTitle}</h2>
                <p className="mt-1 text-sm text-[var(--muted)]">{project.domain}</p>
              </div>
              <span className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)]">View ↗</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
