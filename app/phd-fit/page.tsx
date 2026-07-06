import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "Zurich PhD Fit",
  description:
    "Zurich-focused PhD research fit statement for Panagiota Grosdouli, focused on robotics, trajectory prediction, uncertainty-aware autonomy, and human-aware intelligent systems.",
};

const fitArguments = [
  ["Zurich-aligned axis", "Prediction, uncertainty, perception, and planning are presented as one research direction for robotics and intelligent transportation."],
  ["Technical base", "Trajectory forecasting, SLAM, UAV autonomy, risk-aware navigation, and robotics-oriented software systems."],
  ["Research maturity", "Projects are framed through questions, methods, evaluation, limitations, and next steps instead of only implementation details."],
];

const zurichLabs = [
  {
    name: "ETH Zurich robotics and autonomous systems",
    fit: "Strong match for mobile robotics, perception, mapping, planning, and autonomy in dynamic environments.",
  },
  {
    name: "Vision-for-robotics research directions",
    fit: "Natural fit for visual perception, SLAM/VIO, UAV autonomy, and real-time robotic intelligence.",
  },
  {
    name: "UZH Robotics and Perception Group ecosystem",
    fit: "Strong overlap with vision-based autonomy, agile robotic navigation, drones, and perception-driven control.",
  },
];

const topics = [
  "Trajectory prediction for vulnerable road users at smart intersections",
  "Uncertainty representation in prediction and perception pipelines",
  "Risk-aware planning when average-case performance is not enough",
  "How perception failures propagate into downstream robot decisions",
  "Evaluation of rare but safety-relevant failure cases",
  "Turning independent projects into publishable research artifacts",
];

export default function PhDFitPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <SiteNav theme="dark" />

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Zurich PhD Fit</p>
          <h1 className="max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-white md:text-8xl">
            A focused case for robotics research in Zurich.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-300 md:text-2xl md:leading-[3rem]">
            I am targeting PhD environments where perception, prediction, uncertainty, and decision making are studied together for autonomous systems that operate around people.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {fitArguments.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-stone-800 bg-stone-900/40 p-7">
              <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] text-white">{title}</h2>
              <p className="mt-5 text-sm leading-7 text-stone-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-800 bg-stone-900/40 px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Zurich Lab Fit</p>
            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-white">
              The match is specific, not generic.
            </h2>
          </div>
          <div className="grid gap-4">
            {zurichLabs.map((lab) => (
              <article key={lab.name} className="rounded-3xl border border-stone-800 bg-stone-950/50 p-6">
                <h3 className="font-serif text-3xl leading-none tracking-[-0.04em] text-white">{lab.name}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-400">{lab.fit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Interview Topics</p>
            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-white">
              Concrete things a professor can ask me about.
            </h2>
          </div>
          <div className="divide-y divide-stone-800 border-y border-stone-800">
            {topics.map((topic) => (
              <div key={topic} className="py-4 text-base leading-8 text-stone-400">{topic}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl border-t border-stone-800 pt-12">
          <p className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] text-white">
            The strongest next step is to turn the active thesis and independent robotics projects into Zurich-ready research evidence: baselines, metrics, ablations, documented limitations, and a concise statement of fit for each target lab.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <Link href="/research" className="rounded-full border border-emerald-400 bg-emerald-400 px-5 py-3 text-stone-950 transition hover:bg-emerald-300">
              Research Statement
            </Link>
            <Link href="/projects" className="rounded-full border border-stone-700 px-5 py-3 text-stone-300 transition hover:border-stone-400 hover:text-white">
              Research Evidence
            </Link>
          </div>
        </div>
      </section>

      <Footer theme="dark" />
    </main>
  );
}
