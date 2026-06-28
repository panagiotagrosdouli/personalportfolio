import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

const entries = [
  {
    week: "Week 01",
    date: "2025",
    title: "Trajectory prediction problem framing",
    summary: "Defined the thesis direction around vulnerable road users, smart intersections, and safety-relevant forecasting.",
    next: "Prepare dataset structure and baseline evaluation plan.",
  },
  {
    week: "Week 02",
    date: "2025",
    title: "Baseline experiment planning",
    summary: "Outlined input-output trajectory windows, core metrics, and expected failure cases for motion forecasting experiments.",
    next: "Begin preprocessing and inspect edge cases in turning and crossing behaviour.",
  },
  {
    week: "Week 03",
    date: "2025",
    title: "Risk-aware navigation notes",
    summary: "Connected DynNav ideas to uncertainty-aware decision making and failure-case analysis in dynamic environments.",
    next: "Define simple scenarios for near-miss and unsafe-outcome inspection.",
  },
];

export default function ResearchLogPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <p className="section-kicker mb-4">Research Log</p>
        <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.055em] md:text-7xl">
          A record of research progress.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-stone-650">
          Short notes on questions, experiments, observations, and next steps. The goal is to make the research process visible, not only the final outputs.
        </p>

        <div className="mt-12 space-y-8 border-l border-stone-200 pl-6">
          {entries.map((entry) => (
            <article key={entry.week} className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border border-stone-300 bg-[#fbfaf7] ring-4 ring-[#fbfaf7]" />
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-stone-500">{entry.week}</span>
                <span className="border border-stone-200 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400">{entry.date}</span>
              </div>
              <h2 className="text-lg font-semibold tracking-tight text-stone-950">{entry.title}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-stone-600">{entry.summary}</p>
              <p className="mt-3 text-xs italic text-stone-400">Next: {entry.next}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
