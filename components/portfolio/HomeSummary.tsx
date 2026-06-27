const points = [
  "Human motion prediction",
  "Risk-aware navigation",
  "Robotics and intelligent transportation",
];

export function HomeSummary() {
  return (
    <section className="bg-[#fbfaf7] px-6 py-16 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 border-y border-stone-200 py-14 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
        <div>
          <p className="section-kicker">Research Identity</p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-7xl">
            Focused on prediction, autonomy, and safety.
          </h2>
        </div>
        <div>
          <p className="text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
            My work connects prediction, perception, and uncertainty-aware decision making for autonomous systems in dynamic environments.
          </p>
          <div className="mt-8 grid gap-3">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-4 border-l border-emerald-900/50 bg-white/70 px-5 py-4 text-sm font-medium text-stone-800">
                <span className="h-2 w-2 rounded-full bg-emerald-900" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
