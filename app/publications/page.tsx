import type { Metadata } from "next";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "Publications & Research Outputs",
  description:
    "Publications, manuscripts, technical reports, and research artifacts by Panagiota Grosdouli in trajectory prediction, robotics, and autonomous systems.",
};

const outputs = [
  {
    title: "Manuscripts in Preparation",
    text: "Trajectory prediction of vulnerable road users at smart intersections. Current work is organized around probabilistic forecasting, uncertainty-aware evaluation, and safety-relevant failure cases.",
  },
  {
    title: "Technical Reports",
    text: "Project reports and reproducible research notes will document methodology, baselines, experiments, limitations, and future work for active robotics and autonomy projects.",
  },
  {
    title: "Open Research Artifacts",
    text: "Selected repositories, experiment logs, model notes, diagrams, and evaluation summaries are linked from the project pages to make the research process visible.",
  },
  {
    title: "Reading Notes",
    text: "Paper notes are maintained as a research notebook, with emphasis on trajectory forecasting, robot perception, risk-aware planning, and embodied AI.",
  },
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <SiteNav theme="dark" />
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Publications & Research Outputs</p>
        <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.055em] text-white md:text-7xl">
          Research outputs, not empty placeholders.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-stone-400">
          Until peer-reviewed publications are listed, the emphasis is on transparent research progress: well-scoped questions, reproducible documentation, technical reports, and open artifacts.
        </p>

        <div className="mt-12 divide-y divide-stone-800 border-y border-stone-800">
          {outputs.map((item) => (
            <div key={item.title} className="grid gap-4 py-7 md:grid-cols-[220px_1fr]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-400">{item.title}</p>
              <p className="text-sm leading-7 text-stone-400">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l border-emerald-400/40 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Current priority</p>
          <p className="mt-3 max-w-2xl text-lg leading-9 text-stone-300">
            Convert active thesis and independent robotics projects into publication-ready artifacts: clear hypotheses, baseline comparisons, evaluation metrics, ablation studies, and documented limitations.
          </p>
        </div>
      </section>
      <Footer theme="dark" />
    </main>
  );
}
