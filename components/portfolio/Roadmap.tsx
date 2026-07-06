const stages = [
  {
    label: "Current",
    title: "Uncertainty-aware trajectory prediction",
    text: "Finishing a diploma thesis on VRU motion forecasting at smart intersections.",
  },
  {
    label: "Learning Next",
    title: "Deeper visual SLAM and state estimation",
    text: "Extending multi-modal SLAM work toward more rigorous evaluation and robustness testing.",
  },
  {
    label: "Long-Term Goal",
    title: "PhD in robotics or autonomous systems",
    text: "Applying to PhD programs for Fall 2026, focused on safe, uncertainty-aware autonomy.",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-stone-800 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Current Focus</p>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-[-0.03em] text-white md:text-5xl">
          Where I am, and where I&apos;m going.
        </h2>

        <div className="relative mt-14 space-y-10 border-l border-stone-800 pl-8">
          {stages.map((stage) => (
            <div key={stage.label} className="relative">
              <span className="absolute -left-[35px] top-1 h-3 w-3 rounded-full border border-emerald-400 bg-stone-950" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-400">{stage.label}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{stage.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-stone-400">{stage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
