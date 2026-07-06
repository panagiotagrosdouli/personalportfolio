const interests = [
  {
    title: "Trajectory Prediction",
    text: "Forecasting future motion of people and vehicles under uncertainty.",
  },
  {
    title: "Autonomous Systems",
    text: "Decision making for robots and vehicles operating around people.",
  },
  {
    title: "Visual SLAM",
    text: "Multi-modal simultaneous localization and mapping under uncertainty.",
  },
  {
    title: "Robotics",
    text: "Navigation, planning, and control for mobile and aerial robots.",
  },
  {
    title: "Risk-Aware Planning",
    text: "Reasoning about unsafe outcomes rather than only average-case behaviour.",
  },
  {
    title: "Intelligent Transportation",
    text: "Perception and prediction for safer human-centered mobility systems.",
  },
];

export function ResearchInterests() {
  return (
    <section id="research-interests" className="border-t border-stone-800 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Interests</p>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-[-0.03em] text-white md:text-5xl">
          Where my work is headed.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-stone-800 bg-stone-800 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((item) => (
            <div key={item.title} className="bg-stone-950 p-7 transition hover:bg-stone-900">
              <h3 className="text-lg font-semibold tracking-tight text-stone-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
