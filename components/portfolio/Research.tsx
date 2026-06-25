import { dynNavPoints, thesisPanels } from "@/data/portfolio";

function CheckIcon() {
  return <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-emerald-800 text-[10px] text-emerald-900">✓</span>;
}

export function Research() {
  return (
    <section id="research" className="bg-[#f8f6f0] px-6 py-16 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <div>
            <p className="section-kicker">Current Research</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] text-stone-950 md:text-6xl">
              Trajectory prediction of vulnerable road users.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-stone-700">
            My diploma thesis focuses on predicting future human motion at smart intersections, with the goal of supporting safer autonomous driving and intelligent transportation systems.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {thesisPanels.map((panel) => (
            <article key={panel.title} className="rounded-sm border border-stone-200 bg-white/88 p-7 shadow-[0_30px_90px_-72px_rgba(28,25,23,0.75)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900">{panel.title}</p>
              <p className="mt-5 text-base leading-8 text-stone-700">{panel.text}</p>
            </article>
          ))}
        </div>

        <article className="mt-10 grid gap-8 rounded-sm border border-stone-200 bg-white/88 p-7 shadow-[0_30px_90px_-72px_rgba(28,25,23,0.75)] md:p-10 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">Independent Research Project</p>
            <h2 className="mt-4 font-serif text-5xl tracking-[-0.045em] text-stone-950">DynNav</h2>
            <p className="mt-3 text-sm text-stone-500">Self-directed research project · 2025–Present</p>
          </div>
          <div>
            <p className="text-base leading-8 text-stone-700 md:text-lg">
              DynNav explores risk-aware navigation and decision making for robots in dynamic environments. The project was shaped after academic discussion and developed independently, focusing on ROS2-based experimentation, CVaR-inspired risk reasoning, reinforcement learning, and multi-agent coordination.
            </p>
            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {dynNavPoints.map((point) => (
                <div key={point} className="flex gap-3 text-sm leading-6 text-stone-700">
                  <CheckIcon />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="mt-8 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
              Explore related work on GitHub →
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
