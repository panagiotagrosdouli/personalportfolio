import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
export const metadata: Metadata = { title: "Contact", description: "Contact Panagiota Grosdouli for research and collaboration." };
export default function ContactPage() {
  return <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"><SiteNav />
    <div className="mx-auto max-w-3xl px-6 py-24 md:px-10"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Contact</p><h1 className="mt-5 font-serif text-6xl tracking-[-0.05em]">Let's connect.</h1>
      <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">Open to research conversations and collaborations in robotics and AI.</p>
      <div className="mt-12 divide-y divide-[var(--line)] border-t border-[var(--line)]">
        <div className="flex flex-wrap justify-between gap-3 py-5"><span>Email</span><a className="text-[var(--accent)] hover:underline" href="mailto:p.g2a15@gmail.com">p.g2a15@gmail.com ↗</a></div>
        <div className="flex flex-wrap justify-between gap-3 py-5"><span>GitHub</span><a className="text-[var(--accent)] hover:underline" href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer">panagiotagrosdouli ↗</a></div>
        <div className="flex flex-wrap justify-between gap-3 py-5"><span>CV</span><Link className="text-[var(--accent)] hover:underline" href="/cv">View academic CV ↗</Link></div>
      </div>
    </div>
  </main>;
}
