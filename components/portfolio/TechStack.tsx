const stack = [
  { category: "Languages", items: ["Python", "C / C++", "MATLAB"] },
  { category: "AI / ML", items: ["Scikit-Learn", "Forecasting", "Data Analysis"] },
  { category: "Computer Vision", items: ["Computer Vision", "Event Cameras", "Sensor Fusion"] },
  { category: "Robotics", items: ["ROS 2", "Motion Planning", "Navigation", "Multi-Agent Systems", "Risk-Aware Decision Making"] },
  { category: "Tools", items: ["Pandas", "NumPy", "Plotly", "Streamlit", "Linux", "Git"] },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="border-t border-stone-800 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Technical Stack</p>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-[-0.03em] text-white md:text-5xl">
          Tools I build with.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <div key={group.category} className="border-t border-stone-800 pt-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">{group.category}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-stone-800 bg-stone-900/50 px-3 py-1.5 text-sm text-stone-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
