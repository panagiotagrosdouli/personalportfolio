import Image from "next/image";

const facts = [
  ["Programme", "MEng Electrical & Computer Engineering"],
  ["Institution", "Democritus University of Thrace"],
  ["Status", "In progress"],
  ["Topic", "Trajectory prediction at smart intersections"],
];

const methods = [
  ["Data preparation", "Synchronization and representation of road-user trajectories and scene context."],
  ["Prediction", "Comparison of motion baselines and learning-based forecasting methods."],
  ["Evaluation", "ADE, FDE, uncertainty calibration, and qualitative analysis of failure cases."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 md:px-8">
          <p className="font-medium">Panagiota Grosdouli</p>
          <a href="mailto:p.g2a15@gmail.com" className="focus-ring text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
            Contact
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-4xl">
          <p className="text-sm font-medium text-[var(--accent)]">Diploma thesis · 2025–present</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-[-0.045em] md:text-6xl">
            Trajectory prediction of vulnerable road users at smart intersections
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            A study of pedestrian and cyclist motion forecasting for autonomous systems operating in dynamic intersection scenes.
          </p>
        </header>

        <section className="mt-16 grid gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-[0.32fr_0.68fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Overview</h2>
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              Road users at intersections can change speed and direction in response to vehicles, infrastructure, and one another. This makes their future motion uncertain and limits the usefulness of a single deterministic prediction.
            </p>
            <p>
              The thesis develops a reproducible forecasting pipeline and compares baseline and learning-based approaches. The evaluation examines prediction error, uncertainty, and failure cases relevant to downstream planning.
            </p>
          </div>
        </section>

        <section className="mt-14 grid gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-[0.32fr_0.68fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Research question</h2>
          <p className="font-serif text-3xl leading-tight tracking-[-0.025em]">
            How can autonomous systems forecast the motion of vulnerable road users while representing uncertainty in dynamic intersection scenes?
          </p>
        </section>

        <section className="mt-14 grid gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-[0.32fr_0.68fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Method</h2>
          <dl className="divide-y divide-[var(--line)]">
            {methods.map(([title, description]) => (
              <div key={title} className="py-5 first:pt-0">
                <dt className="font-medium">{title}</dt>
                <dd className="mt-2 text-sm leading-7 text-[var(--muted)]">{description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14 grid gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-[0.32fr_0.68fr]">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Current output</h2>
            <dl className="mt-8 space-y-5">
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{label}</dt>
                  <dd className="mt-1 text-sm">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure>
            <div className="overflow-hidden border border-[var(--line)] bg-white p-3">
              <Image
                src="/evidence/thesis/prediction-error-vs-horizon.png"
                alt="Prediction error plotted against forecasting horizon"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 650px"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-5 text-[var(--muted)]">
              Prediction error as the forecasting horizon increases. Results shown here reflect the current stage of the thesis.
            </figcaption>
          </figure>
        </section>
      </article>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-[var(--muted)] md:px-8">
          Panagiota Grosdouli · Electrical & Computer Engineering
        </div>
      </footer>
    </main>
  );
}
