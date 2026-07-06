const impact = [
  {
    label: "Current Thesis",
    title: "Trajectory Prediction of Vulnerable Road Users",
    text: "A safety-critical forecasting problem at smart intersections, focused on how autonomous systems reason about people before acting.",
  },
  {
    label: "Active Research Projects",
    title: "Prediction, Perception, Navigation",
    text: "Independent research threads connect trajectory forecasting, visual-inertial odometry, risk-aware navigation, UAV autonomy, and scene understanding.",
  },
  {
    label: "Research Outputs",
    title: "Reports, Repositories, Experiments",
    text: "Projects are structured as research artifacts with questions, methodology, experiments, limitations, and future work.",
  },
  {
    label: "Long-Term Direction",
    title: "Safe Human-Centered Autonomy",
    text: "The goal is to contribute to autonomous systems that understand uncertainty and make safer decisions around people.",
  },
];

export function ResearchImpact() {
  return (
    <section className="border-y border-white/10 bg-stone-950 px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Impact</p>
            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.055em] text-white md:text-6xl">
              A clear path from thesis to research contribution.
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {impact.map((item, index) => (
              <article key={item.label} className="grid gap-5 py-7 md:grid-cols-[70px_1fr]">
                <p className="font-mono text-xs text-stone-500">0{index + 1}</p>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-400">{item.label}</p>
                  <h3 className="mt-3 font-serif text-3xl leading-none tracking-[-0.035em] text-white">{item.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-400">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
