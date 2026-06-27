const featured = [
  {
    title: "Diploma Thesis",
    subtitle: "Trajectory prediction at smart intersections",
    href: "/research",
    description: "Current research on predicting the motion of vulnerable road users to support safer autonomous decision making.",
  },
  {
    title: "AEGIS-VIO",
    subtitle: "Uncertainty-aware visual-inertial navigation",
    href: "https://github.com/PanagiotaGr/aegis-vio",
    description: "A robotics prototype connecting state estimation, uncertainty metrics, risk scoring, and ROS2-based navigation.",
  },
  {
    title: "DynNav",
    subtitle: "Risk-aware robot navigation",
    href: "/projects",
    description: "Independent research project exploring CVaR-inspired decision making, reinforcement learning, and multi-agent coordination.",
  },
];

export function FeaturedHome() {
  return (
    <section className="bg-[#fbfaf7] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 border-t border-stone-200 pt-10 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Featured Work</p>
            <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-7xl">
              Three threads: prediction, estimation, and risk-aware robotics.
            </h2>
          </div>
          <a href="/projects" className="text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
            View all projects →
          </a>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {featured.map((item, index) => (
            <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group border-t border-stone-300 pt-6 transition hover:border-emerald-900">
              <p className="font-serif text-5xl tracking-[-0.05em] text-stone-300">0{index + 1}</p>
              <h3 className="mt-6 font-serif text-4xl leading-none tracking-[-0.04em] text-stone-950">{item.title}</h3>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-emerald-900">{item.subtitle}</p>
              <p className="mt-5 text-base leading-8 text-stone-700">{item.description}</p>
              <p className="mt-6 text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 group-hover:decoration-emerald-950">
                Open →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
