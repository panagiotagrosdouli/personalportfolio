import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research direction, current work, and future interests of Panagiota Grosdouli in robotics, trajectory prediction, autonomous systems, and uncertainty-aware decision making.",
};

const researchAreas = [
  ["Trajectory Prediction", "Modeling vulnerable road-user motion with multi-modal futures, calibrated uncertainty, and safety-relevant evaluation."],
  ["Autonomous Systems", "Studying how robots can perceive, forecast, and act reliably around people under incomplete information."],
  ["Risk-Aware Navigation", "Connecting prediction and uncertainty to downstream planning decisions where average-case performance is not enough."],
  ["Computer Vision and SLAM", "Building perception and state-estimation pipelines for mobile and aerial robotic systems."],
];

const methods = [
  ["Problem", "Start from a safety-relevant failure mode: missed pedestrian intention, overconfident prediction, or unsafe replanning."],
  ["Pipeline", "Build minimal reproducible systems with inputs, assumptions, baselines, metrics, and limitations documented."],
  ["Evaluation", "Inspect uncertainty, calibration, corner cases, near misses, and the gap between prediction quality and decision quality."],
];

const selected = [
  ["Diploma Thesis", "Trajectory prediction of vulnerable road users at smart intersections.", "/projects/trajectory-prediction-vrus"],
  ["DynNav", "Risk-aware navigation and rerouting in unknown dynamic environments.", "/projects/dynnav"],
  ["SafeCrossAI", "Infrastructure-based perception and risk reasoning for intelligent intersections.", "/projects/safecrossai"],
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <SiteNav theme="dark" />

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Statement</p>
          <h1 className="max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-white md:text-8xl">
            Prediction, uncertainty, and safe autonomy.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-300 md:text-2xl md:leading-[3rem]">
            I want to build autonomous systems that do not only perceive the present, but reason about what could happen next before they act.
          </p>
        </div>
      </section>

      <section className="border-y border-stone-800 px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Vision</p>
            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-white md:text-6xl">
              Safer robots begin with better anticipation.
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-stone-300 md:text-xl md:leading-10">
            <p>
              Autonomous systems increasingly operate in environments shaped by people: intersections, campuses, laboratories, streets, and shared indoor spaces. In these settings, safety depends not only on perceiving the present, but on reasoning about what may happen next.
            </p>
            <p>
              My research direction connects trajectory prediction, uncertainty-aware perception, and robot decision making. The goal is to represent multiple possible futures, understand the limits of prediction, and use that information to act more safely around humans.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Method</p>
          <h2 className="max-w-3xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-white md:text-6xl">
            How I turn projects into research.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {methods.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-stone-800 bg-stone-900/40 p-7">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-800 px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Areas</p>
          <h2 className="max-w-3xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-white md:text-6xl">
            Four connected directions.
          </h2>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {researchAreas.map(([title, description]) => (
              <article key={title} className="border-t border-stone-800 pt-6">
                <h3 className="font-serif text-3xl leading-none tracking-[-0.03em] text-white md:text-4xl">{title}</h3>
                <p className="mt-5 text-base leading-8 text-stone-400 md:text-lg md:leading-9">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Current Research</p>
            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-white md:text-6xl">
              Trajectory prediction at smart intersections.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-stone-300 md:text-xl md:leading-10">
              My diploma thesis studies the prediction of vulnerable road-user motion at sensor-equipped intersections. The central question is how autonomous systems can reason about pedestrians, cyclists, and other agents before committing to an action.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {["Problem", "Method", "Status"].map((label, index) => (
                <div key={label} className="border-t border-stone-800 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">{label}</p>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {index === 0 && "Multi-agent motion forecasting in dynamic traffic scenes."}
                    {index === 1 && "Probabilistic prediction, uncertainty modeling, and trajectory evaluation."}
                    {index === 2 && "Active diploma thesis research."}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/projects" className="mt-10 inline-block text-sm font-medium text-emerald-400 underline decoration-emerald-400/30 underline-offset-4 transition hover:text-emerald-300">
              View research evidence
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-800 px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Selected Research</p>
          <div className="divide-y divide-stone-800 border-y border-stone-800">
            {selected.map(([title, text, href]) => (
              <Link key={title} href={href} className="grid gap-4 py-7 transition hover:bg-stone-900/50 md:grid-cols-[260px_1fr] md:px-6">
                <h3 className="font-serif text-3xl tracking-[-0.03em] text-white">{title}</h3>
                <p className="text-sm leading-7 text-stone-400">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer theme="dark" />
    </main>
  );
}
