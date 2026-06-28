import Link from "next/link";
import { projects } from "@/data/projects";

const focus = [
  "Trajectory Prediction",
  "Robot Perception",
  "Visual-Inertial Odometry",
  "Risk-Aware Navigation",
  "Autonomous Driving",
  "Embodied AI",
];

const featuredSlugs = ["trajectory-prediction-vrus", "aegis-vio", "dynnav"];
const researchThreads = projects.filter((project) => featuredSlugs.includes(project.slug));

const recentActivity = [
  {
    label: "Latest research focus",
    title: "Human motion prediction under uncertainty",
    text: "Studying how autonomous systems can anticipate vulnerable road-user trajectories in complex intersections.",
    href: "/research",
  },
  {
    label: "Perception direction",
    title: "VIO, segmentation, and robot perception",
    text: "Building a coherent perception foundation across visual-inertial odometry and autonomous-driving scene understanding.",
    href: "/projects/aegis-vio",
  },
  {
    label: "Risk-aware autonomy",
    title: "Navigation and UAV decision making",
    text: "Connecting DynNav and UAV return-to-home policies through uncertainty-aware planning and unsafe-outcome reasoning.",
    href: "/projects/dynnav",
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
    year: "2023",
    type: "Perception",
    title: "Autonomous Driving Scene Segmentation",
    desc: "Computer vision work for real-time driving-scene understanding.",
  },
  {
    year: "2024",
    type: "Robotics",
    title: "AEGIS-VIO and Risk-Aware UAV Autonomy",
    desc: "Visual-inertial odometry and safety-aware return-to-home decision making.",
  },
  {
    year: "2025",
    type: "Research",
    title: "Trajectory Prediction Thesis and DynNav",
    desc: "Human motion forecasting and risk-aware navigation for autonomous systems.",
  },
];

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center border border-stone-200 bg-white px-2.5 py-1 font-mono text-[11px] text-stone-600">
      {label}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const className =
    status === "Active"
      ? "border-emerald-600 text-emerald-700"
      : status === "Complete"
        ? "border-stone-300 text-stone-500"
        : "border-amber-500 text-amber-700";

  return (
    <span className={`border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] ${className}`}>
      {status}
    </span>
  );
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

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[3fr_2fr] lg:px-12">
        <div>
          <div className="mb-7 max-w-2xl">
            <p className="section-kicker mb-4">Current Research Threads</p>
            <p className="text-sm leading-7 text-stone-600">
              A focused research path across prediction, perception, and risk-aware decision making for autonomous robotic systems.
            </p>
          </div>

          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {researchThreads.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex items-start gap-8 px-0 py-7 transition hover:bg-white/60 md:px-6"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <StatusBadge status={project.status} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">{project.badge}</span>
                    <span className="font-mono text-[10px] text-stone-400">{project.year}</span>
                  </div>
                  <h3 className="font-serif text-3xl leading-none tracking-[-0.04em] text-stone-950 group-hover:text-emerald-950 md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-650">{project.objective}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="border border-stone-200 bg-white px-2 py-0.5 font-mono text-[10px] text-stone-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs italic text-stone-400">↳ {project.latestUpdate}</p>
                </div>

                <div className="hidden shrink-0 flex-col items-end gap-2 pt-1 sm:flex">
                  <span className="font-mono text-xs text-stone-500">{project.progress}%</span>
                  <div className="h-px w-20 bg-stone-200">
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
