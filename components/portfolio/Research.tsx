import { dynNavPoints, thesisHighlights } from "@/data/portfolio";

function CheckIcon() {
  return <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-emerald-800 text-[10px] text-emerald-900">✓</span>;
}

export function Research() {
  return (
    <section id="research" className="bg-[#f8f6f0] px-6 py-16 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="section-kicker">Current Research</p>
          <article className="mt-4 min-h-full rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_30px_90px_-72px_rgba(28,25,23,0.75)] md:p-10">
            <p className="text-sm font-medium text-stone-500">2025–2026 · Diploma Thesis</p>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-[-0.035em] text-stone-950 md:text-5xl">
              Trajectory Prediction of Vulnerable Road Users at Smart Intersections
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700 md:text-lg">
              My diploma thesis focuses on predicting the future trajectories of vulnerable road users in smart-intersection environments. The goal is to support autonomous systems that anticipate human behaviour more accurately and make safer, more socially-aware decisions.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {thesisHighlights.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-stone-700">
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-8 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
              Discuss this research →
            </a>
          </article>
        </div>

        <div>
          <p className="section-kicker">Independent Research Initiative</p>
          <article className="mt-4 min-h-full rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_30px_90px_-72px_rgba(28,25,23,0.75)] md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-2xl text-emerald-50">⌁</div>
              <div>
                <p className="text-sm font-medium text-stone-500">Self-directed research project · 2025–Present</p>
                <h2 className="mt-2 font-serif text-4xl tracking-[-0.035em] text-stone-950">DynNav</h2>
              </div>
            </div>
            <p className="mt-6 text-base leading-8 text-stone-700">
              DynNav explores risk-aware navigation and decision making for robots in dynamic environments. The project was shaped after academic discussion and developed independently, focusing on ROS2-based experimentation, CVaR-inspired risk reasoning, reinforcement learning, and multi-agent coordination.
            </p>
            <div className="mt-8 grid gap-3">
              {dynNavPoints.map((point) => (
                <div key={point} className="flex gap-3 text-sm leading-6 text-stone-700">
                  <CheckIcon />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="mt-8 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
              Explore DynNav on GitHub →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
