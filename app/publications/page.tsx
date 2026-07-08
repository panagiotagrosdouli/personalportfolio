import type { Metadata } from "next";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = { title: "Publications", description: "Publication-ready sections for papers, theses, reports, preprints and posters." };

const sections = ["Journal papers", "Conference papers", "Theses", "Technical reports", "Preprints", "Poster presentations"];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Publications</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Research outputs will be added as projects mature.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">This page is prepared for formal academic outputs. It intentionally does not list unpublished, unaccepted, or unverifiable papers as publications.</p>
        <div className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {sections.map((section) => <section key={section} className="grid gap-4 py-8 md:grid-cols-[260px_1fr]"><h2 className="font-serif text-3xl tracking-[-0.04em]">{section}</h2><div><p className="text-sm leading-7 text-[var(--muted)]">Coming Soon.</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">No verified entries yet.</p></div></section>)}
        </div>
      </div>
    </main>
  );
}
