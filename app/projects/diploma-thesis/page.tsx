import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "Diploma Thesis",
  description:
    "Diploma thesis research page on trajectory prediction of vulnerable road users at smart intersections for safer autonomous systems.",
};

const thesisFacts = [
  { label: "Status", value: "Active diploma thesis" },
  { label: "Degree", value: "MEng Electrical & Computer Engineering" },
  { label: "Institution", value: "Democritus University of Thrace" },
  { label: "Research Area", value: "Trajectory Prediction" },
  { label: "Focus", value: "Vulnerable road users at smart intersections" },
];

const sections = [
  {
    title: "Research Question",
    body:
      "How can autonomous systems forecast the motion of vulnerable road users in dynamic intersection scenes before making safety-critical decisions?",
  },
  {
    title: "Motivation",
    body:
      "Autonomous systems operating near people must reason about uncertainty, intent, and interaction. At intersections, pedestrians, cyclists, and vehicles may change speed or direction in ways that are difficult to capture with deterministic motion models. A useful prediction system should represent multiple plausible futures and expose uncertainty rather than producing a single overconfident trajectory.",
  },
  {
    title: "Methodology",
    body:
      "The thesis is structured around data preparation, trajectory representation, baseline forecasting models, probabilistic prediction, and evaluation with standard motion-forecasting metrics. The emphasis is on connecting prediction quality to downstream safety reasoning rather than treating forecasting as an isolated machine-learning task.",
  },
  {
    title: "Dataset & Scene Representation",
    body:
      "The work focuses on sensor-equipped smart-intersection scenarios where multiple agents interact in shared space. The representation is expected to include agent trajectories, temporal context, and scene-level information that can support interaction-aware forecasting.",
  },
  {
    title: "Experimental Pipeline",
    body:
      "The research pipeline begins with preprocessing and synchronization, continues with baseline models such as constant-velocity or recurrent forecasting approaches, and then evaluates learned models using trajectory accuracy and uncertainty-aware criteria. Future iterations may include visual context, map priors, or graph-based interaction modeling.",
  },
  {
    title: "Expected Contribution",
    body:
      "The expected contribution is a clear experimental study of vulnerable road-user trajectory prediction for safety-oriented autonomy: a reproducible pipeline, carefully documented baselines, uncertainty-aware evaluation, and a discussion of failure cases relevant to robot decision making.",
  },
];

const metrics = [
  "Average Displacement Error",
  "Final Displacement Error",
  "Multi-modal trajectory diversity",
  "Uncertainty calibration",
  "Qualitative failure-case analysis",
];

const futureWork = [
  "Integrate richer scene context from camera or map-based information.",
  "Compare deterministic and probabilistic forecasting models under the same evaluation protocol.",
  "Study how prediction uncertainty can influence risk-aware planning decisions.",
  "Document failure cases where forecasting models become overconfident or miss agent interaction.",
];

export default function DiplomaThesisPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link href="/projects" className="text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
            ← Back to projects
          </Link>
          <p className="section-kicker mt-12">Diploma Thesis</p>
          <h1 className="mt-4 max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl">
            Trajectory prediction of vulnerable road users at smart intersections.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-700 md:text-2xl md:leading-[3rem]">
            A research study on forecasting human motion in dynamic traffic scenes so autonomous systems can reason more safely under uncertainty.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 border-y border-stone-200 py-16 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">Thesis Record</p>
            <dl className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
              {thesisFacts.map((fact) => (
                <div key={fact.label} className="py-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">{fact.label}</dt>
                  <dd className="mt-2 text-sm leading-7 text-stone-700">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <article>
            <p className="section-kicker">Abstract</p>
            <div className="mt-5 space-y-7 text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
              <p>
                Predicting the motion of vulnerable road users is a central problem for autonomous systems that operate in human environments. At smart intersections, pedestrians and cyclists interact with vehicles, infrastructure, and each other, creating multiple plausible future trajectories. This thesis investigates trajectory prediction as a safety-relevant component of autonomous decision making.
              </p>
              <p>
                The work aims to build a reproducible forecasting pipeline for dynamic intersection scenes, evaluate baseline and learning-based approaches, and examine how prediction uncertainty can support safer planning. Rather than treating trajectory prediction as a purely numerical benchmark, the thesis emphasizes failure cases, uncertainty representation, and the connection between forecasting and autonomous-system behavior.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">Research Structure</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              Framed as a small research paper.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
            {sections.map((section) => (
              <section key={section.title} className="grid gap-8 py-9 md:grid-cols-[0.32fr_0.68fr] md:px-4">
                <h3 className="font-serif text-4xl leading-none tracking-[-0.04em] text-stone-950 md:text-5xl">
                  {section.title}
                </h3>
                <p className="text-base leading-8 text-stone-700 md:text-lg md:leading-9">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 border-y border-stone-200 py-16 lg:grid-cols-2">
          <div>
            <p className="section-kicker">Evaluation</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              Metrics should explain behavior, not only accuracy.
            </h2>
            <ul className="mt-10 grid gap-4 text-base leading-8 text-stone-700">
              {metrics.map((metric) => (
                <li key={metric} className="border-t border-stone-200 pt-4">
                  {metric}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-kicker">Future Work</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              From prediction toward decision making.
            </h2>
            <ul className="mt-10 grid gap-4 text-base leading-8 text-stone-700">
              {futureWork.map((item) => (
                <li key={item} className="border-t border-stone-200 pt-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-stone-200 pt-16 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
          <div>
            <p className="section-kicker">Next Step</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              This page will grow with the thesis.
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-9 text-stone-700">
              As experiments mature, this page can include dataset details, diagrams, qualitative trajectory visualizations, ablation studies, and a thesis PDF. The structure is ready for real research artifacts without changing the design.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
              <Link href="/research" className="rounded-full border border-emerald-950 bg-emerald-950 px-5 py-3 text-white transition hover:bg-stone-950">
                Research page
              </Link>
              <Link href="/cv" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">
                View CV
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
