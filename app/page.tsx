import Image from "next/image";
import { FiArrowDown, FiMail } from "react-icons/fi";

const facts = [
  ["Degree", "MEng Electrical & Computer Engineering"],
  ["Institution", "Democritus University of Thrace"],
  ["Status", "Diploma thesis · in progress"],
  ["Field", "Trajectory prediction for intelligent mobility"],
];

const methodology = [
  { number: "01", title: "Represent", text: "Prepare synchronized agent trajectories and scene context from smart-intersection observations." },
  { number: "02", title: "Predict", text: "Compare reproducible motion baselines with learning-based and probabilistic forecasting models." },
  { number: "03", title: "Evaluate", text: "Measure displacement error, uncertainty quality, and safety-relevant failure cases under one protocol." },
];

const metrics = [
  "Average Displacement Error (ADE)",
  "Final Displacement Error (FDE)",
  "Multi-modal trajectory diversity",
  "Uncertainty calibration",
  "Failure-case analysis",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent-soft)]">
      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#" className="focus-ring font-semibold tracking-[-0.03em]">Panagiota Grosdouli</a>
          <nav aria-label="Primary navigation" className="flex items-center gap-5 text-sm text-[var(--muted)]">
            <a className="focus-ring transition hover:text-[var(--foreground)]" href="#method">Method</a>
            <a className="focus-ring transition hover:text-[var(--foreground)]" href="#evaluation">Evaluation</a>
            <a className="focus-ring transition hover:text-[var(--foreground)]" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="research-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Diploma thesis · 2025–present</p>
          <h1 className="mt-7 max-w-5xl font-serif text-5xl leading-[0.93] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Predicting vulnerable road-user trajectories at smart intersections.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl md:leading-9">
            A focused study of how autonomous systems can forecast pedestrian and cyclist motion, represent multiple plausible futures, and expose uncertainty before safety-critical decisions are made.
          </p>
          <a href="#research" className="focus-ring mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent)]">
            Read the research <FiArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="research" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[0.34fr_0.66fr]">
        <aside>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Research record</p>
          <dl className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {facts.map(([label, value]) => (
              <div key={label} className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{label}</dt>
                <dd className="mt-2 text-sm leading-6">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <article>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Abstract</p>
          <div className="mt-6 space-y-6 text-lg leading-9 text-[var(--muted)]">
            <p>Motion prediction is essential when autonomous vehicles operate near pedestrians and cyclists. At intersections, each agent responds to traffic, infrastructure, and other road users, so a single deterministic forecast can hide important uncertainty.</p>
            <p>This thesis develops a reproducible trajectory-forecasting pipeline for smart-intersection scenes. It compares transparent baselines with learned approaches and evaluates both prediction accuracy and uncertainty, with particular attention to failure cases that matter for downstream planning.</p>
          </div>
          <div className="mt-10 rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Research question</p>
            <p className="mt-4 font-serif text-3xl leading-tight tracking-[-0.04em] md:text-4xl">
              How can an autonomous system forecast human motion without hiding ambiguity behind one overconfident trajectory?
            </p>
          </div>
        </article>
      </section>

      <section id="method" className="border-y border-[var(--line)] bg-[var(--panel)]/45">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Method</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl tracking-[-0.05em] md:text-6xl">One clear experimental pipeline.</h2>
          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {methodology.map((step) => (
              <article key={step.number} className="grid gap-3 py-7 md:grid-cols-[64px_160px_1fr] md:items-center">
                <span className="font-mono text-xs text-[var(--accent)]">{step.number}</span>
                <h3 className="font-serif text-3xl tracking-[-0.04em]">{step.title}</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="evaluation" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
        <figure className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-white p-4">
          <Image src="/evidence/thesis/prediction-error-vs-horizon.png" alt="Prediction error plotted against forecasting horizon" width={1200} height={800} sizes="(max-width: 1024px) 100vw, 620px" className="h-auto w-full" />
          <figcaption className="border-t border-stone-200 px-2 pt-4 text-xs leading-5 text-stone-600">
            Current thesis analysis artifact: prediction error as forecasting horizon increases.
          </figcaption>
        </figure>
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Evaluation</p>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.05em] md:text-5xl">Accuracy is only part of the result.</h2>
          <p className="mt-5 leading-7 text-[var(--muted)]">
            The evaluation combines standard forecasting metrics with uncertainty and qualitative inspection. Claims will remain limited to results supported by reproducible experiments.
          </p>
          <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {metrics.map((metric) => <li key={metric} className="py-3 text-sm">{metric}</li>)}
          </ul>
        </div>
      </section>

      <footer id="contact" className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="font-semibold">Panagiota Grosdouli</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Electrical & Computer Engineering</p>
          </div>
          <a href="mailto:p.g2a15@gmail.com" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline">
            <FiMail aria-hidden="true" /> Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
