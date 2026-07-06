import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications, thesis work, manuscripts, and research artifacts by Panagiota Grosdouli in robotics, trajectory prediction, and autonomous systems.",
};

const outputs = [
  {
    authors: "Panagiota Grosdouli",
    title: "Trajectory Prediction of Vulnerable Road Users at Smart Intersections",
    venue: "Diploma thesis in preparation",
    year: "Current",
    doi: "—",
    note: "Current thesis work on motion forecasting, uncertainty-aware evaluation, and safety-relevant autonomous-system reasoning.",
    links: ["PDF pending", "BibTeX pending", "Code pending"],
    featured: true,
  },
  {
    authors: "Panagiota Grosdouli",
    title: "SafeCrossAI, DynNav, and Robotic Perception Technical Notes",
    venue: "Technical reports and project write-ups in preparation",
    year: "Current",
    doi: "—",
    note: "Research documentation for active robotics projects, including methodology, experiments, limitations, and next steps.",
    links: ["PDF pending", "Code pending", "Demo pending"],
    featured: false,
  },
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-[#090909] dark:text-neutral-100">
      <nav className="border-b border-neutral-200 px-5 py-4 text-sm dark:border-neutral-800 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-semibold text-neutral-950 transition hover:text-[#e0001b] dark:text-neutral-50">Panagiota Grosdouli</Link>
          <div className="flex gap-5 text-neutral-600 dark:text-neutral-400">
            <Link href="/research" className="hover:text-[#e0001b]">Research</Link>
            <Link href="/projects" className="hover:text-[#e0001b]">Projects</Link>
            <Link href="/cv" className="hover:text-[#e0001b]">CV</Link>
            <Link href="/contact" className="hover:text-[#e0001b]">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e0001b] dark:text-[#ff5a66]">Publications</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-neutral-950 dark:text-neutral-50 md:text-7xl">Research outputs.</h1>
          <p className="mt-8 text-xl leading-9 text-neutral-700 dark:text-neutral-300">Current work is presented transparently as thesis research, manuscripts, technical notes, and reproducible artifacts in preparation.</p>
        </header>

        <section className="mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
          <p className="max-w-3xl text-sm leading-7 text-neutral-600 dark:text-neutral-400">No peer-reviewed publications are listed yet. This page is structured like a university publication page so that accepted papers, DOI links, PDFs, BibTeX entries, and code artifacts can be added cleanly when available.</p>
          <div className="mt-10 space-y-6">
            {outputs.map((item) => (
              <article key={item.title} className={`border p-6 ${item.featured ? "border-[#e0001b]" : "border-neutral-200 dark:border-neutral-800"}`}>
                {item.featured && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e0001b] dark:text-[#ff5a66]">Featured thesis</p>}
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.authors}</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-neutral-950 dark:text-neutral-50">{item.title}</h2>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{item.venue} · {item.year} · DOI: {item.doi}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-700 dark:text-neutral-300">{item.note}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-neutral-500 dark:text-neutral-500">
                  {item.links.map((link) => <span key={link}>{link}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
