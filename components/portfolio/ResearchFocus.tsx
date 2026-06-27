const focusAreas = [
  "Human Motion Prediction",
  "Robot Perception",
  "Autonomous Systems",
  "Decision Making Under Uncertainty",
  "Intelligent Transportation",
];

export function ResearchFocus() {
  return (
    <section className="bg-[#f8f6f0] px-6 py-12 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 border-y border-stone-200 py-12 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
        <div>
          <p className="section-kicker">Research Focus</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-stone-950 md:text-5xl">
            Safe autonomy around people.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area} className="border-l border-emerald-900/40 bg-white/50 px-4 py-3 text-sm font-medium text-stone-800">
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
