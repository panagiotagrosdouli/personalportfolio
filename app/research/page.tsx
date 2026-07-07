import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description: "Research direction of Panagiota Grosdouli in robotics, trajectory prediction, perception, and safe autonomous systems.",
};

const themes = [
  ["Human motion prediction", "Forecasting pedestrian and vulnerable road-user motion in dynamic traffic scenes."],
  ["Robotic perception", "SLAM, visual-inertial odometry, and sensor fusion under noisy or incomplete sensing."],
  ["Planning under uncertainty", "Prediction-aware navigation and rerouting in changing environments."],
  ["Safe human-aware autonomy", "Autonomous systems that reason about people before acting."],
];

const methods = [
  ["Problem formulation", "Start from safety-relevant failure modes and uncertainty."],
  ["Technical pipeline", "Connect perception, prediction, uncertainty representation, and planning."],
  ["Evaluation", "Study calibration, corner cases, limitations, and decision quality."],
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#1c1c1a] selection:bg-[#d7ede4] selection:text-[#12372a]">
      <nav className="border-b border-[#ddd9d0] px-5 py-4 text-sm md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-serif font-semibold text-[#1c1c1a] transition hover:text-[#1f5a44]">Panagiota Grosdouli</Link>
          <div className="flex gap-5 text-[#5e5e5a]">
            <Link href="/projects" className="transition hover:text-[#1f5a44]">Projects</Link>
            <Link href="/publications" className="transition hover:text-[#1f5a44]">Publications</Link>
            <Link href="/cv" className="transition hover:text-[#1f5a44]">CV</Link>
            <Link href="/contact" className="transition hover:text-[#1f5a44]">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#1f5a44]">Research statement</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.06em] text-[#1c1c1a] md:text-7xl">Prediction, perception, and safe autonomy.</h1>
          <p className="mt-8 text-xl leading-9 text-[#5e5e5a]">I want to build autonomous systems that perceive the present and reason about what could happen next before they act.</p>
        </header>

        <section className="mt-16 grid gap-8 border-t border-[#ddd9d0] pt-12 lg:grid-cols-[220px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f5a44]">Vision</p><h2 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.04em] text-[#1c1c1a]">Safer robots begin with better anticipation.</h2></div>
          <div className="max-w-3xl space-y-5 text-base leading-8 text-[#5e5e5a]">
            <p>Autonomous systems increasingly operate in environments shaped by people: intersections, campuses, laboratories, streets, and shared indoor spaces.</p>
            <p>My research direction connects trajectory prediction, uncertainty-aware perception, and robot decision making.</p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-t border-[#ddd9d0] pt-12 lg:grid-cols-[220px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f5a44]">Themes</p><h2 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.04em] text-[#1c1c1a]">Research areas</h2></div>
          <div className="grid gap-5 md:grid-cols-2">
            {themes.map(([title, text]) => (
              <article key={title} className="border border-[#ddd9d0] p-6 transition hover:-translate-y-1 hover:border-[#1f5a44]">
                <h3 className="text-lg font-semibold text-[#1c1c1a]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5e5e5a]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-t border-[#ddd9d0] pt-12 lg:grid-cols-[220px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f5a44]">Method</p><h2 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.04em] text-[#1c1c1a]">How projects become research</h2></div>
          <div className="space-y-6">
            {methods.map(([title, text]) => (
              <article key={title} className="grid gap-3 border-b border-[#ddd9d0] pb-6 text-sm leading-7 md:grid-cols-[220px_1fr]">
                <h3 className="font-semibold text-[#1c1c1a]">{title}</h3>
                <p className="text-[#5e5e5a]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-[#ddd9d0] pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f5a44]">Current research</p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold tracking-[-0.04em] text-[#1c1c1a]">Trajectory prediction at smart intersections.</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e5e5a]">My diploma thesis studies the prediction of vulnerable road-user motion at sensor-equipped intersections.</p>
          <Link href="/projects" className="mt-6 inline-block text-sm font-medium text-[#1f5a44] hover:underline">View research evidence</Link>
        </section>
      </div>
    </main>
  );
}
