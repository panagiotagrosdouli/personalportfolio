import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "PhD Fit",
  description:
    "PhD research fit statement for Panagiota Grosdouli, focused on robotics, trajectory prediction, uncertainty-aware autonomy, and human-aware intelligent systems.",
};

const fitArguments = [
  ["Coherent axis", "Prediction, uncertainty, and safe autonomy form one connected research direction rather than separate demos."],
  ["Technical base", "Trajectory forecasting, VIO, segmentation, UAV autonomy, risk-aware navigation, and neuromorphic robot control."],
  ["Research mindset", "Projects are framed through questions, methods, evaluation, limitations, and next steps."],
];

const topics = [
  "Trajectory prediction for vulnerable road users at smart intersections",
  "Uncertainty representation in prediction and perception pipelines",
  "Risk-aware planning when average-case performance is not enough",
  "How perception failures propagate into downstream robot decisions",
  "Evaluation of rare but safety-critical failure cases",
  "Turning independent projects into publishable research artifacts",
];

export default function PhDFitPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">PhD Fit</p>
          <h1 className="mt-4 max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl">
            Why this profile belongs in a robotics PhD conversation.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-700 md:text-2xl md:leading-[3rem]">
            I am looking for PhD environments where prediction, perception, uncertainty, and decision making are studied as one connected problem in autonomous systems.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {fitArguments.map(([title, text]) => (
            <article key={title} className="border-t border-stone-200 pt-6">
              <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] text-stone-950">{title}</h2>
              <p className="mt-5 text-sm leading-7 text-stone-650">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white/45 px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">Interview Topics</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950">
              Concrete things a professor can ask me about.
            </h2>
          </div>
          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {topics.map((topic) => (
              <div key={topic} className="py-4 text-base leading-8 text-stone-700">
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl border-t border-stone-200 pt-12">
          <p className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] text-stone-950">
            The strongest next step is to turn the active thesis and independent robotics projects into publishable research artifacts with baselines, metrics, ablations, and documented limitations.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <Link href="/research" className="rounded-full border border-emerald-950 bg-emerald-950 px-5 py-3 text-white transition hover:bg-stone-950">
              Research Statement
            </Link>
            <Link href="/projects" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">
              Research Evidence
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
