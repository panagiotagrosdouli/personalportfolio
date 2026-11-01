import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "AEGIS-VIO",
  description:
    "AEGIS-VIO project page: uncertainty-aware visual-inertial navigation for safer autonomous systems.",
};

const projectFacts = [
  { label: "Type", value: "Research prototype" },
  { label: "Area", value: "Visual-inertial navigation" },
  { label: "Focus", value: "Uncertainty-aware state estimation" },
  { label: "Stack", value: "Python, ROS2, EKF, VIO" },
  { label: "Repository", value: "github.com/PanagiotaGr/aegis-vio" },
];

const architecture = [
  "Camera and IMU streams provide complementary motion and perception signals.",
  "A visual-inertial odometry module estimates motion while tracking uncertainty.",
  "Covariance or confidence signals are converted into navigation-relevant risk indicators.",
  "The system can then expose uncertainty to downstream planning or monitoring logic.",
];

const sections = [
  {
    title: "Research Motivation",
    body:
      "Visual-inertial odometry is often evaluated by pose accuracy, but safe autonomy also requires knowing when the estimate may be unreliable. AEGIS-VIO frames state-estimation uncertainty as a signal that can inform navigation, monitoring, and risk-aware decision making.",
  },
  {
    title: "Problem Setting",
    body:
      "A robot or mobile agent receives asynchronous visual and inertial measurements while moving through an environment. The goal is not only to estimate motion, but also to represent uncertainty in a way that can be used by the rest of the autonomy stack.",
  },
  {
    title: "Technical Direction",
    body:
      "The project connects visual-inertial estimation, filtering concepts, covariance reasoning, and ROS2-based robotics architecture. The core idea is to treat uncertainty as part of the output, not as an implementation detail hidden inside the estimator.",
  },
  {
    title: "Why It Matters",
    body:
      "When pose estimates degrade, downstream planners can become overconfident. Exposing uncertainty makes it possible to slow down, re-localize, switch behavior, or trigger safety-aware fallback logic before errors become dangerous.",
  },
];

const futureWork = [
  "Benchmark uncertainty estimates against trajectory error and failure cases.",
  "Integrate risk indicators with a navigation planner or behavior selector.",
  "Improve uncertainty propagation across perception, estimation, and control modules.",
  "Document system diagrams, ROS2 topics, and reproducible launch instructions.",
];

export default function AegisVioPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link href="/projects" className="text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
            ← Back to projects
          </Link>
          <p className="section-kicker mt-12">Research Prototype</p>
          <h1 className="mt-4 max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl">
            AEGIS-VIO: uncertainty-aware visual-inertial navigation.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-700 md:text-2xl md:leading-[3rem]">
            A robotics prototype exploring how visual-inertial state estimation can expose uncertainty signals for safer autonomous navigation.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 border-y border-stone-200 py-16 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">Project Record</p>
            <dl className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
              {projectFacts.map((fact) => (
                <div key={fact.label} className="py-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">{fact.label}</dt>
                  <dd className="mt-2 text-sm leading-7 text-stone-700">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <a href="https://github.com/PanagiotaGr/aegis-vio" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
              Open GitHub repository →
            </a>
          </aside>

          <article>
            <p className="section-kicker">Overview</p>
            <div className="mt-5 space-y-7 text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
              <p>
                AEGIS-VIO is a research prototype around visual-inertial odometry and uncertainty-aware navigation. It sits at the intersection of robot perception, state estimation, and safety-oriented autonomy.
              </p>
              <p>
                The project is designed to support a central robotics question: how can a system communicate when its own localization or motion estimate may be uncertain enough to affect navigation decisions?
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">System Architecture</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              From sensor fusion to risk-aware signals.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {architecture.map((step, index) => (
              <article key={step} className="border-t border-stone-200 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">Step {index + 1}</p>
                <p className="mt-4 text-sm leading-7 text-stone-700">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {sections.map((section) => (
              <section key={section.title} className="grid gap-8 py-9 md:grid-cols-[0.32fr_0.68fr] md:px-4">
                <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] text-stone-950 md:text-5xl">
                  {section.title}
                </h2>
                <p className="text-base leading-8 text-stone-700 md:text-lg md:leading-9">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 border-y border-stone-200 py-16 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">Implementation Notes</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              Built as a robotics research artifact.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-stone-700">
            <p>
              The page intentionally presents AEGIS-VIO as a technical research prototype rather than a finished product. This leaves room for implementation notes, diagrams, benchmarks, and reproducibility details as the repository matures.
            </p>
            <p>
              The strongest future version of this page would include a system diagram, ROS2 topic graph, launch instructions, sample trajectories, covariance plots, and a short analysis of failure modes.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-stone-200 pt-16 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">Future Work</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              Toward safety-aware navigation.
            </h2>
          </div>
          <div>
            <ul className="grid gap-5 text-lg leading-9 text-stone-700 md:grid-cols-2">
              {futureWork.map((item) => (
                <li key={item} className="border-t border-stone-200 pt-5">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
              <Link href="/research" className="rounded-full border border-emerald-950 bg-emerald-950 px-5 py-3 text-white transition hover:bg-stone-950">
                Research page
              </Link>
              <a href="https://github.com/PanagiotaGr/aegis-vio" target="_blank" rel="noopener noreferrer" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">
                GitHub repo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
