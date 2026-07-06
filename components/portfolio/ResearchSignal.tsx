const signals = [
  {
    metric: "01",
    title: "Research problem",
    text: "Autonomous systems must reason about people before committing to action.",
  },
  {
    metric: "02",
    title: "Technical direction",
    text: "Trajectory prediction, uncertainty-aware perception, and risk-sensitive planning.",
  },
  {
    metric: "03",
    title: "Evidence base",
    text: "Thesis work and independent robotics projects documented as research artifacts.",
  },
];

export function ResearchSignal() {
  return (
    <section className="border-y border-white/10 bg-stone-950 px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Signal</p>
          <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-white md:text-6xl">
            A focused profile is stronger than a crowded portfolio.
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {signals.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-xs text-emerald-300">{item.metric}</p>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
