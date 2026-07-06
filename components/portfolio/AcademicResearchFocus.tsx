const focusAreas = [
  {
    number: "01",
    title: "Human Motion Prediction",
    text: "Forecasting the future motion of pedestrians and vulnerable road users in traffic scenes, with emphasis on uncertainty and safety-relevant behavior.",
    evidence: "VRU thesis · SafeCrossAI · smart intersections",
  },
  {
    number: "02",
    title: "Robotic Perception",
    text: "Building the perception layer behind autonomy: SLAM, VIO, sensor fusion, and confidence-aware state estimation for robots that operate in real environments.",
    evidence: "Adaptive SLAM · Self-Healing VIO · sensor fusion",
  },
  {
    number: "03",
    title: "Navigation and Planning",
    text: "Connecting perception and prediction to robot behavior through rerouting, risk-aware navigation, and planning under partial information.",
    evidence: "DynNav · ROS 2 · planning under uncertainty",
  },
];

export function AcademicResearchFocus() {
  return (
    <section className="bg-[#f7f3ea] px-6 py-24 text-stone-950 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.26em] text-emerald-700">Research Focus</p>
            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.055em] md:text-7xl">
              Where my robotics work is heading.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-stone-600">
              The site is organized like an academic profile: research direction first, projects as supporting evidence.
            </p>
          </div>

          <div className="divide-y divide-stone-300 border-y border-stone-300">
            {focusAreas.map((area) => (
              <article key={area.title} className="grid gap-6 py-8 md:grid-cols-[72px_1fr]">
                <p className="font-mono text-xs text-stone-500">{area.number}</p>
                <div>
                  <h3 className="font-serif text-4xl leading-none tracking-[-0.045em]">{area.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">{area.text}</p>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-700">{area.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
