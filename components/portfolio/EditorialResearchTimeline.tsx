const timeline = [
  {
    year: "2020",
    title: "MEng Electrical & Computer Engineering",
    text: "Built the technical foundation in systems, computation, mathematics, and engineering practice.",
  },
  {
    year: "2023",
    title: "Computer Vision and intelligent systems",
    text: "Moved toward perception, scene understanding, forecasting, and applied AI systems.",
  },
  {
    year: "2024",
    title: "Robotics and uncertainty",
    text: "Developed research threads in visual-inertial odometry, UAV autonomy, sensor fusion, and risk-aware decision making.",
  },
  {
    year: "2025",
    title: "Thesis on trajectory prediction",
    text: "Focused on vulnerable road-user forecasting at smart intersections and safety-relevant evaluation.",
  },
  {
    year: "2026",
    title: "PhD applications",
    text: "Preparing a focused research profile around prediction, perception, uncertainty, and safe autonomous systems.",
  },
];

export function EditorialResearchTimeline() {
  return (
    <section className="border-t border-white/10 bg-stone-950 px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Timeline</p>
          <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.055em] text-white md:text-6xl">
            From engineering foundations to PhD research direction.
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {timeline.map((item) => (
            <article key={item.year} className="grid gap-6 py-7 md:grid-cols-[120px_1fr]">
              <p className="font-mono text-xs text-emerald-400">{item.year}</p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-400">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
