import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research direction of Panagiota Grosdouli in human-aware robotics, trajectory prediction, robotic perception, planning under uncertainty, and safe autonomous systems.",
};

const themes = [
  ["Human motion prediction", "Forecasting pedestrian and vulnerable road-user motion in dynamic traffic scenes, with emphasis on uncertainty, multi-modal futures, and safety-relevant evaluation."],
  ["Robotic perception", "Perception and localization pipelines for robots, including SLAM, visual-inertial odometry, and sensor fusion under noisy or incomplete sensing."],
  ["Planning under uncertainty", "Prediction-aware navigation and rerouting in changing environments where average-case performance is not sufficient."],
  ["Safe human-aware autonomy", "Autonomous systems that reason about people before acting, especially in smart intersections and shared human-robot environments."],
];

const methods = [
  ["Problem formulation", "Start from safety-relevant failure modes: missed intention, overconfident prediction, unsafe replanning, or brittle perception."],
  ["Technical pipeline", "Connect perception, prediction, uncertainty representation, and downstream planning in a reproducible system."],
  ["Evaluation", "Study calibration, corner cases, near misses, limitations, and the gap between prediction quality and decision quality."],
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-[#090909] dark:text-neutral-100">
      <nav className="border-b border-neutral-200 px-5 py-4 text-sm dark:border-neutral-800 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-semibold text-neutral-950 transition hover:text-[#e0001b] dark:text-neutral-50">Panagiota Grosdouli</Link>
          <div className="flex gap-5 text-neutral-600 dark:text-neutral-400">
            <Link href="/projects" className="hover:text-[#e0001b]">Projects</Link>
            <Link href="/publications" className="hover:text-[#e0001b]">Publications</Link>
            <Link href="/cv" className="hover:text-[#e0001b]">CV</Link>
            <Link href="/contact" className="hover:text-[#e0001b]">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e0001b] dark:text-[#ff5a66]">Research statement</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-neutral-950 dark:text-neutral-50 md:text-7xl">Prediction, perception, and safe autonomy.</h1>
          <p className="mt-8 text-xl leading-9 text-neutral-700 dark:text-neutral-300">I want to build autonomous systems that do not only perceive the present, but reason about what could happen next before they act.</p>
        </header>

        <section className="mt-16 grid gap-8 border-t border-neutral-200 pt-12 dark:border-neutral-800 lg:grid-cols-[220px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0001b] dark:text-[#ff5a66]">Vision</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Safer robots begin with better anticipation.</h2></div>
          <div className="max-w-3xl space-y-5 text-base leading-8 text-neutral-700 dark:text-neutral-300">
            <p>Autonomous systems increasingly operate in environments shaped by people: intersections, campuses, laboratories, streets, and shared indoor spaces. In these settings, safety depends not only on perceiving the present, but on reasoning about what may happen next.</p>
            <p>My research direction connects trajectory prediction, uncertainty-aware perception, and robot decision making. The goal is to represent multiple possible futures, understand the limits of prediction, and use that information to act more safely around humans.</p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-t border-neutral-200 pt-12 dark:border-neutral-800 lg:grid-cols-[220px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0001b] dark:text-[#ff5a66]">Themes</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Research areas</h2></div>
          <div className="grid gap-5 md:grid-cols-2">
            {themes.map(([title, text]) => (
              <article key={title} className="border border-neutral-200 p-6 transition hover:-translate-y-1 hover:border-[#e0001b] dark:border-neutral-800 dark:hover:border-[#ff5a66]">
                <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-t border-neutral-200 pt-12 dark:border-neutral-800 lg:grid-cols-[220px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0001b] dark:text-[#ff5a66]">Method</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">How projects become research</h2></div>
          <div className="space-y-6">
            {methods.map(([title, text]) => (
              <article key={title} className="grid gap-3 border-b border-neutral-200 pb-6 text-sm leading-7 dark:border-neutral-800 md:grid-cols-[220px_1fr]">
                <h3 className="font-semibold text-neutral-950 dark:text-neutral-50">{title}</h3>
                <p className="text-neutral-700 dark:text-neutral-300">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-neutral-200 pt-12 dark:border-neutral-800">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0001b] dark:text-[#ff5a66]">Current research</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em]">Trajectory prediction at smart intersections.</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-700 dark:text-neutral-300">My diploma thesis studies the prediction of vulnerable road-user motion at sensor-equipped intersections. The central question is how autonomous systems can reason about pedestrians, cyclists, and other agents before committing to an action.</p>
          <Link href="/projects" className="mt-6 inline-block text-sm font-medium text-[#e0001b] hover:underline dark:text-[#ff5a66]">View research evidence</Link>
        </section>
      </div>
    </main>
  );
}
