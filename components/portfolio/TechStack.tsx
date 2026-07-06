const stack = [
  { category: "Core", items: ["Python", "C / C++", "MATLAB", "Linux", "Git"] },
  { category: "Research Computing", items: ["NumPy", "Pandas", "Scikit-Learn", "Plotly", "Streamlit"] },
  { category: "Robotics", items: ["ROS 2", "SLAM", "State Estimation", "Motion Planning", "Navigation"] },
  { category: "Perception", items: ["Computer Vision", "Segmentation", "Sensor Fusion", "Event Cameras"] },
  { category: "Evaluation", items: ["Baselines", "Ablations", "Failure Cases", "Technical Reports"] },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="border-t border-white/10 bg-stone-950 px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Technical Toolkit</p>
            <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-white md:text-6xl">
              Tools selected for research, not decoration.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {stack.map((group) => (
              <div key={group.category} className="border-t border-white/10 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">{group.category}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-stone-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
