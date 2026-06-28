import Link from "next/link";

const focus = [
  "Trajectory Prediction",
  "Autonomous Systems",
  "Risk-Aware Planning",
  "Motion Forecasting",
  "Robotics",
  "Machine Learning",
];

const stats = [
  { value: "03", label: "Research directions" },
  { value: "02", label: "Active projects" },
  { value: "01", label: "Robotics internship" },
  { value: "2026", label: "Expected graduation" },
];

const activeResearch = [
  {
    title: "Diploma Thesis",
    badge: "Current Research",
    status: "Active",
    progress: 72,
    href: "/research",
    description:
      "Trajectory prediction of vulnerable road users at smart intersections for safer autonomous decision making.",
  },
  {
    title: "DynNav",
    badge: "Independent Project",
    status: "Active",
    progress: 58,
    href: "/projects",
    description:
      "Risk-aware navigation in dynamic environments using ROS2-based experimentation, CVaR-inspired reasoning, and multi-agent coordination.",
  },
  {
    title: "F1 AI Forecasting Platform",
    badge: "Applied ML",
    status: "Complete",
    progress: 100,
    href: "/projects",
    description:
      "Probabilistic race-outcome forecasting with telemetry analysis, uncertainty modelling, and Monte Carlo simulation.",
  },
];

const recentActivity = [
  {
    label: "Latest research focus",
    title: "Human motion prediction under uncertainty",
    text: "Studying how autonomous systems can anticipate vulnerable road-user trajectories in complex intersections.",
    href: "/research",
  },
  {
    label: "Active project",
    title: "DynNav risk-aware navigation",
    text: "Exploring navigation decisions that account for unsafe outcomes rather than only average performance.",
    href: "/projects",
  },
  {
    label: "Research note",
    title: "Why uncertainty matters in trajectory prediction",
    text: "Motion forecasting becomes safety-critical when autonomous systems operate around pedestrians.",
    href: "/notes",
  },
];

const timeline = [
  {
    year: "2020",
    type: "Education",
    title: "Electrical & Computer Engineering",
    desc: "Democritus University of Thrace.",
  },
  {
    year: "2025",
    type: "Experience",
    title: "Robotics & Computer Vision Internship",
    desc: "Applied perception work at OZZIE Robotics.",
  },
  {
    year: "2025",
    type: "Research",
    title: "Trajectory Prediction Thesis",
    desc: "Diploma thesis on vulnerable road users at smart intersections.",
  },
  {
    year: "2026",
    type: "Future",
    title: "Graduate research applications",
    desc: "Targeting PhD opportunities in autonomous systems and intelligent transportation.",
  },
];

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center border border-stone-200 bg-white px-2.5 py-1 font-mono text-[11px] text-stone-600">
      {label}
    </span>
  );
}

function StatusDot({ active }: { active?: boolean }) {
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${active ? "bg-emerald-600" : "bg-stone-400"}`} />;
}

export function FeaturedHome() {
  return (
    <section className="bg-[#fbfaf7]">
      <div className="border-y border-stone-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-6 md:px-10 lg:px-12">
          <span className="section-kicker mr-3">Currently investigating</span>
          {focus.map((item) => (
            <Chip key={item} label={item} />
          ))}
        </div>
      </div>

      <div className="border-b border-stone-200">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 md:grid-cols-4 md:px-10 lg:px-12">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-stone-200 pl-5 first:border-l-0 first:pl-0">
              <div className="font-serif text-4xl font-semibold tracking-[-0.04em] text-stone-950">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[3fr_2fr] lg:px-12">
        <div>
          <p className="section-kicker mb-6">Active Research</p>
          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {activeResearch.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group grid gap-6 px-0 py-7 transition hover:bg-white/60 md:grid-cols-[1fr_120px] md:px-4"
              >
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 border border-emerald-900/25 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-900">
                      <StatusDot active={project.status === "Active"} />
                      {project.status}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">{project.badge}</span>
                  </div>
                  <h3 className="font-serif text-3xl leading-none tracking-[-0.04em] text-stone-950 group-hover:text-emerald-950 md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-650">{project.description}</p>
                </div>
                <div className="hidden text-right md:block">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{project.progress}%</div>
                  <div className="mt-3 h-px bg-stone-200">
                    <div className="h-px bg-stone-950" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/projects" className="mt-5 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
            View all projects →
          </Link>
        </div>

        <aside className="space-y-10">
          {recentActivity.map((item) => (
            <div key={item.title}>
              <p className="section-kicker mb-4">{item.label}</p>
              <Link href={item.href} className="group block">
                <h3 className="text-lg font-semibold leading-7 tracking-tight text-stone-950 group-hover:text-emerald-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-650">{item.text}</p>
              </Link>
            </div>
          ))}
        </aside>
      </div>

      <div className="border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
          <p className="section-kicker mb-8">Academic Timeline</p>
          <div className="relative space-y-6 border-l border-stone-200 pl-6">
            {timeline.map((item) => (
              <div key={`${item.year}-${item.title}`} className="relative flex items-start gap-5">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border border-stone-300 bg-[#fbfaf7] ring-4 ring-[#fbfaf7]" />
                <span className="w-12 shrink-0 pt-0.5 font-mono text-xs text-stone-500">{item.year}</span>
                <div>
                  <span className="mr-2 border border-stone-200 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                    {item.type}
                  </span>
                  <span className="text-sm font-semibold text-stone-950">{item.title}</span>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
