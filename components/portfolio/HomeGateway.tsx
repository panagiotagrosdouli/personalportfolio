const gatewayItems = [
  {
    title: "Research",
    href: "/research",
    label: "Current focus",
    description: "Trajectory prediction, uncertainty-aware autonomy, and safe decision making around people.",
  },
  {
    title: "Projects",
    href: "/projects",
    label: "Technical work",
    description: "Robotics, visual-inertial navigation, risk-aware planning, perception, and autonomous systems.",
  },
  {
    title: "CV",
    href: "/cv",
    label: "Academic profile",
    description: "Education, experience, research toolkit, and technical preparation for graduate research.",
  },
  {
    title: "Contact",
    href: "/contact",
    label: "Opportunities",
    description: "For PhD opportunities, research internships, collaborations, and robotics-related conversations.",
  },
];

export function HomeGateway() {
  return (
    <section className="bg-[#f8f6f0] px-6 py-16 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-end">
          <div>
            <p className="section-kicker">Explore</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-stone-950 md:text-5xl">
              A research homepage designed for focused reading.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-stone-700">
            The homepage gives the short version. Use the sections below to go directly to research, technical projects, CV, or contact information.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {gatewayItems.map((item) => (
            <a key={item.title} href={item.href} className="group rounded-sm border border-stone-200 bg-white/86 p-7 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)] transition hover:-translate-y-1 hover:border-emerald-900/40">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900">{item.label}</p>
              <h3 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-stone-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-700">{item.description}</p>
              <p className="mt-5 text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 group-hover:decoration-emerald-950">
                Open {item.title} →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
