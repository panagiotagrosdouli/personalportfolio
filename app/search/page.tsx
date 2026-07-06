import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

const searchAreas = [
  ["Research", "/research", "Current thesis direction and independent research projects."],
  ["Projects", "/projects", "Research threads, applied machine-learning work, and engineering projects."],
  ["Research Agenda", "/research-agenda", "A focused path toward prediction, uncertainty, and safer autonomy."],
  ["Reading Notes", "/reading-notes", "Paper notes and literature reflections."],
  ["CV", "/cv", "Academic background, skills, and contact information."],
];

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <SiteNav theme="dark" />
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Search</p>
        <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.055em] text-white md:text-7xl">
          Find research material.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-stone-400">
          A lightweight guide to the main research sections of this website. Full-text search can be added later as the research archive grows.
        </p>

        <div className="mt-12 divide-y divide-stone-800 border-y border-stone-800">
          {searchAreas.map(([title, href, desc]) => (
            <Link key={href} href={href} className="group grid gap-3 py-6 transition hover:bg-stone-900/60 md:grid-cols-[180px_1fr] md:px-6">
              <h2 className="text-sm font-semibold text-white group-hover:text-emerald-400">{title}</h2>
              <p className="text-sm leading-7 text-stone-400">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer theme="dark" />
    </main>
  );
}
