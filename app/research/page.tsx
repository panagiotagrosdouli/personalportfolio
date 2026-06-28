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
  {
    title: "Trajectory Prediction",
    description:
      "Modeling how vulnerable road users move through dynamic environments, with emphasis on uncertainty, multi-modal futures, and safety-critical interaction at intersections.",
  },
  {
    title: "Autonomous Systems",
    description:
      "Studying how robots and autonomous agents can perceive, forecast, and act reliably when operating around people and incomplete information.",
  },
  {
    title: "Robot Learning",
    description:
      "Exploring learning-based policies that connect perception, prediction, and decision making while remaining interpretable enough for real robotic systems.",
  },
  {
    title: "Computer Vision & Navigation",
    description:
      "Building perception and navigation pipelines that support embodied agents, from visual-inertial state estimation to semantic scene understanding.",
  },
];

const selectedProjects = [
  {
    title: "Diploma Thesis",
    focus: "Trajectory prediction of vulnerable road users at smart intersections.",
    question:
      "How can autonomous systems anticipate human motion before making safety-critical decisions?",
    contribution:
      "A research direction around probabilistic forecasting, interaction-aware prediction, and evaluation of multi-modal trajectories.",
    status: "Active research",
    href: "/projects",
  },
  {
    title: "AEGIS-VIO",
    focus: "Uncertainty-aware visual-inertial odometry.",
    question:
      "How can state-estimation uncertainty be converted into actionable signals for navigation?",
    contribution:
      "A prototype direction connecting VIO, uncertainty estimates, and ROS2-based navigation logic.",
    status: "Research prototype",
    href: "https://github.com/PanagiotaGr/aegis-vio",
  },
  {
    title: "DynNav",
    focus: "Risk-aware navigation in dynamic environments.",
    question:
      "How should robots plan motion when nearby agents behave unpredictably?",
    contribution:
      "A navigation direction centered on risk-aware reasoning, dynamic scenes, and multi-agent interaction.",
    status: "In development",
    href: "/projects",
  },
];

const futureDirections = [
  "Human motion prediction for safety-critical robotics",
  "Embodied AI systems that reason under uncertainty",
  "Risk-aware robot navigation in human environments",
  "Learning-based decision making with interpretable failure modes",
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Research</p>
          <h1 className="mt-4 max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl">
            Prediction, uncertainty, and safe autonomy.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-700 md:text-2xl md:leading-[3rem]">
            My research interests focus on autonomous systems that must understand dynamic scenes, anticipate human motion, and make safe decisions under uncertainty.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 border-y border-stone-200 py-16 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">Research Vision</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              Safer robots begin with better anticipation.
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
            <p>
              Autonomous systems increasingly operate in environments shaped by people: intersections, campuses, laboratories, streets, and shared indoor spaces. In these settings, safety depends not only on perceiving the present, but on reasoning about what may happen next.
            </p>
            <p>
              I am interested in the connection between trajectory prediction, uncertainty-aware perception, and robot decision making. My goal is to develop systems that can represent multiple possible futures, understand the limits of their own predictions, and use that information to act more safely around humans.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">Research Areas</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              Four connected directions.
            </h2>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {researchAreas.map((area) => (
              <article key={area.title} className="border-t border-stone-200 pt-6">
                <h3 className="font-serif text-3xl leading-none tracking-[-0.03em] text-stone-950 md:text-4xl">
                  {area.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-stone-700 md:text-lg md:leading-9">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 border-y border-stone-200 py-16 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="section-kicker">Current Research</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              Trajectory prediction at smart intersections.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
              My diploma thesis studies the prediction of vulnerable road-user motion at sensor-equipped intersections. The work is motivated by a central safety question: how can autonomous systems reason about pedestrians, cyclists, and other agents before committing to an action?
            </p>
            <dl className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="border-t border-stone-200 pt-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">Problem</dt>
                <dd className="mt-3 text-sm leading-7 text-stone-700">Multi-agent motion forecasting in dynamic traffic scenes.</dd>
              </div>
              <div className="border-t border-stone-200 pt-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">Method</dt>
                <dd className="mt-3 text-sm leading-7 text-stone-700">Probabilistic prediction, uncertainty modeling, and trajectory evaluation.</dd>
              </div>
              <div className="border-t border-stone-200 pt-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">Status</dt>
                <dd className="mt-3 text-sm leading-7 text-stone-700">Active diploma thesis research.</dd>
              </div>
            </dl>
            <Link href="/projects" className="mt-10 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
              View related projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
            <div>
              <p className="section-kicker">Selected Research</p>
              <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
                Work connected by prediction and uncertainty.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-9 text-stone-700">
              These projects are presented as research evidence rather than a broad project list. Each one connects perception, forecasting, navigation, or uncertainty-aware reasoning.
            </p>
          </div>

          <div className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
            {selectedProjects.map((project) => {
              const content = (
                <>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">{project.status}</p>
                    <h3 className="mt-3 font-serif text-4xl leading-none tracking-[-0.04em] text-stone-950 md:text-5xl">{project.title}</h3>
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">{project.focus}</p>
                  </div>
                  <div className="space-y-5 text-base leading-8 text-stone-700">
                    <p><span className="font-semibold text-stone-950">Research question:</span> {project.question}</p>
                    <p><span className="font-semibold text-stone-950">Technical contribution:</span> {project.contribution}</p>
                  </div>
                </>
              );

              return project.href.startsWith("http") ? (
                <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="grid gap-8 py-9 transition hover:bg-white/50 md:grid-cols-[0.36fr_0.64fr] md:px-4">
                  {content}
                </a>
              ) : (
                <Link key={project.title} href={project.href} className="grid gap-8 py-9 transition hover:bg-white/50 md:grid-cols-[0.36fr_0.64fr] md:px-4">
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-stone-200 pt-16 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">Future Directions</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              Questions I want to pursue next.
            </h2>
          </div>
          <div>
            <ul className="grid gap-5 text-lg leading-9 text-stone-700 md:grid-cols-2">
              {futureDirections.map((direction) => (
                <li key={direction} className="border-t border-stone-200 pt-5">
                  {direction}
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
              <Link href="/cv" className="rounded-full border border-emerald-950 bg-emerald-950 px-5 py-3 text-white transition hover:bg-stone-950">
                View CV
              </Link>
              <Link href="/contact" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
