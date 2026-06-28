import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

const searchAreas = [
  ["Research", "/research", "Current thesis direction and independent research projects."],
  ["Projects", "/projects", "Research threads, applied machine-learning work, and engineering projects."],
  ["Experiments", "/experiments", "Lab notebook entries with methods, metrics, failures, and next steps."],
  ["Reading Notes", "/reading-notes", "Paper notes and literature reflections."],
  ["CV", "/cv", "Academic background, skills, and contact information."],
];

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <p className="section-kicker mb-4">Search</p>
        <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.055em] md:text-7xl">
          Find research material.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-stone-650">
          A lightweight guide to the main research sections of this website. Full-text search can be added later as the research archive grows.
        </p>

        <div className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
          {searchAreas.map(([title, href, desc]) => (
            <Link key={href} href={href} className="group grid gap-3 py-6 transition hover:bg-white/60 md:grid-cols-[180px_1fr] md:px-6">
              <h2 className="text-sm font-semibold text-stone-950 group-hover:text-emerald-950">{title}</h2>
              <p className="text-sm leading-7 text-stone-600">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
