const stages = [
  {
    label: "Now",
    title: "Thesis as the anchor",
    text: "Trajectory prediction for vulnerable road users at smart intersections, with uncertainty-aware evaluation.",
  },
  {
    label: "Next",
    title: "Stronger research artifacts",
    text: "Baselines, ablations, failure-case analysis, technical reports, and reproducible experiment logs.",
  },
  {
    label: "Then",
    title: "Robotics PhD applications",
    text: "A focused application narrative around prediction, perception, uncertainty, and safe autonomous decision making.",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-white/10 bg-stone-950 px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Trajectory</p>
          <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-white md:text-6xl">
            A path that reads like research preparation.
          </h2>
        </div>

        <div className="relative space-y-6">
          {stages.map((stage) => (
            <article key={stage.label} className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[110px_1fr]">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-400">{stage.label}</p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{stage.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-stone-400">{stage.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
