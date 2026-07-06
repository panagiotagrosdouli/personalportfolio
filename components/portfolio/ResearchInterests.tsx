const interests = [
  {
    title: "Human Motion Forecasting",
    text: "Predicting plausible futures for pedestrians, cyclists, and vulnerable road users.",
  },
  {
    title: "Uncertainty-Aware Perception",
    text: "Understanding when a model should be confident, uncertain, or cautious.",
  },
  {
    title: "Visual SLAM & State Estimation",
    text: "Building perception pipelines that support localization, mapping, and navigation.",
  },
  {
    title: "Risk-Aware Planning",
    text: "Evaluating unsafe outcomes rather than optimizing only average-case behaviour.",
  },
  {
    title: "Autonomous Systems",
    text: "Connecting perception, prediction, and decision making for robots around people.",
  },
  {
    title: "Intelligent Transportation",
    text: "Studying smart intersections and human-centered mobility systems.",
  },
];

export function ResearchInterests() {
  return (
    <section id="research-interests" className="bg-stone-950 px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Interests</p>
            <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-white md:text-6xl">
              A compact research map.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {interests.map((item) => (
              <article key={item.title} className="bg-stone-950 p-7 transition hover:bg-stone-900/80">
                <h3 className="text-lg font-semibold tracking-tight text-stone-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
