import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = { title: "Contact", description: "Academic contact links for Panagiota Grosdouli." };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Contact</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Academic contact and research conversations.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">I welcome conversations about PhD opportunities, research internships, thesis work, and collaborations in robotics, SLAM, sensor fusion, intelligent mobility, and safe autonomous systems.</p>
        <section className="mt-14 grid gap-8 border-t border-[var(--line)] pt-12 lg:grid-cols-2">
          <article className="rounded-[1.5rem] border border-[var(--line)] p-6"><h2 className="font-serif text-3xl tracking-[-0.04em]">Links</h2><div className="mt-6 space-y-4 text-sm"><p><span className="mr-4 font-semibold text-[var(--foreground)]">Email</span><a href="mailto:p.g2a15@gmail.com" className="text-[var(--accent)] underline-offset-4 hover:underline">p.g2a15@gmail.com</a></p><p><span className="mr-4 font-semibold text-[var(--foreground)]">GitHub</span><a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="text-[var(--accent)] underline-offset-4 hover:underline">panagiotagrosdouli</a></p><p><span className="mr-4 font-semibold text-[var(--foreground)]">CV</span><Link href="/cv" className="text-[var(--accent)] underline-offset-4 hover:underline">View CV</Link></p></div></article>
          <article className="rounded-[1.5rem] border border-[var(--line)] p-6"><h2 className="font-serif text-3xl tracking-[-0.04em]">Research areas</h2><ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--muted)]"><li className="border-l border-[var(--accent)] pl-4">Trajectory prediction and vulnerable-road-user safety</li><li className="border-l border-[var(--accent)] pl-4">Robotic perception, SLAM, VIO, and sensor fusion</li><li className="border-l border-[var(--accent)] pl-4">Planning and navigation under uncertainty</li><li className="border-l border-[var(--accent)] pl-4">Risk-aware robotics and AI for autonomy</li></ul></article>
        </section>
      </div>
    </main>
  );
}
