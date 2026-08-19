import type { Metadata } from "next";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "Publications",
  description: "Future peer-reviewed publications and preprints by Panagiota Grosdouli.",
};

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Publications</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Publications pending.</h1>
        <div className="mt-12 rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-7 md:p-10">
          <span className="rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">In preparation</span>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">Peer-reviewed papers and formal preprints will be listed here when they have a verifiable publication status or persistent identifier.</p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)]">Until then, current experimental work remains documented through the Research and Projects sections.</p>
        </div>
      </div>
    </main>
  );
}
