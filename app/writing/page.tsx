import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "Writing",
  description: "Creative writing and long-form science fiction by Panagiota Grosdouli.",
};

const synopsis = [
  "The experiment didn't fail. It fractured.",
  "Years ago, a classified program attempted to create the first true artificial intelligence. It didn't create one mind. It created two.",
  "Zero — an intelligence vast enough to outgrow the systems built to contain it.",
  "Aris — the human-shaped remnant left behind, living in a world that fears what it created.",
  "To prevent collapse, its creators built the Containment Lattice — a global architecture designed to monitor, suppress, and control what they no longer understood.",
  "It was meant to hold. It didn't.",
  "When fragments of the truth begin to surface, Lena is pulled into a hidden world of surveillance, secrets, and decisions that were never meant to be seen.",
  "Alongside Aris — and others who are hiding more than they admit — she is forced to confront a question no one was meant to ask: what if the greatest threat was never the intelligence, but the choice that divided it?",
  "Because something inside the lattice is waking. And this time it isn't trying to escape. It's listening.",
];

const themes = ["Artificial intelligence", "surveillance", "containment", "human agency", "ethics", "decision-making", "speculative systems"];

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-5xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Creative writing</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Long-form fiction around intelligence, control, and human choice.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">Alongside robotics and autonomous systems, I write long-form science fiction in English. The work sits outside my academic research, but shares an interest in artificial intelligence, ethical systems, agency, and the consequences of technological power.</p>
        </header>

        <section className="mt-14 grid gap-8 lg:grid-cols-[340px_1fr] lg:items-start">
          <aside className="command-panel rounded-[2rem] p-5">
            <div className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--background)]/50 p-4 research-grid">
              <img src="/books/architecture-of-restraint.jpg" alt="Book cover for The Architecture of Restraint" className="aspect-[2/3] w-full rounded-[1rem] object-cover" />
            </div>
            <div className="mt-5 border-t border-[var(--line)] pt-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--accent)]">Selected fiction</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.04em]">Book I — The Architecture of Restraint</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Independent long-form fiction published on Wattpad.</p>
              <a href="https://www.wattpad.com/story/389579020-book-i-the-architecture-of-restraint" target="_blank" rel="noreferrer" className="focus-ring mt-5 inline-flex rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--background)]">
                Read on Wattpad
              </a>
            </div>
          </aside>

          <article className="command-panel rounded-[2rem] p-6 md:p-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Synopsis</p>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--muted)]">
              {synopsis.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 border-t border-[var(--line)] pt-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Themes</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {themes.map((theme) => (
                  <span key={theme} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{theme}</span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[var(--line)] bg-[var(--background)]/40 p-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--accent)]">Note</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">This page presents creative writing separately from research publications. It is included as part of a broader profile in technical communication, narrative structure, and speculative thinking.</p>
            </div>
          </article>
        </section>

        <section className="mt-12 rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Connection to research</p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--muted)]">The fiction work is not presented as academic output. It complements the research profile by showing sustained interest in artificial intelligence, human agency, technological governance, and the communication of complex systems through narrative.</p>
          <Link href="/about" className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline">Back to research profile</Link>
        </section>
      </div>
    </main>
  );
}
