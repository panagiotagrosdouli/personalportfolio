import Link from "next/link";

type ProjectCard = {
  title: string;
  theme: string;
  status: string;
  description: string;
  relevance: string;
  evidence: string;
  tags: string[];
  href: string;
};

const projects: ProjectCard[] = [
  {
    title: "VRU Trajectory Prediction",
    theme: "Human Motion Prediction",
    status: "Diploma Thesis / Active",
    description: "Forecasting pedestrian and vulnerable road-user motion in smart-intersection environments.",
    relevance: "The core thesis direction: robotic systems need to anticipate people before choosing how to move.",
    evidence: "Prediction framing · traffic scenes · uncertainty-aware evaluation",
    tags: ["Trajectory Forecasting", "VRU", "Smart Intersections"],
    href: "/projects/trajectory-prediction-vrus",
  },
  {
    title: "SafeCrossAI",
    theme: "Human-Aware Robotics",
    status: "Research Prototype",
    description: "A crossing-behavior research thread around prediction, scene context, and autonomy near people.",
    relevance: "Shows how the thesis interest expands from forecasting to human-centered robotic behavior.",
    evidence: "Human-centered scenario · prediction objective · robotics motivation",
    tags: ["Human-Aware AI", "Prediction", "Robotics"],
    href: "/projects/trajectory-prediction-vrus",
  },
  {
    title: "DynNav: Risk-Aware Navigation",
    theme: "Navigation and Planning",
    status: "Independent Robotics Project",
    description: "Navigation and rerouting under uncertainty in dynamic or partially known environments.",
    relevance: "Connects perception and prediction uncertainty to downstream robot planning.",
    evidence: "Planning logic · rerouting · limitations analysis",
    tags: ["ROS 2", "Risk", "Planning"],
    href: "/projects/dynnav",
  },
  {
    title: "SLAM / VIO / Sensor Fusion",
    theme: "Robotic Perception",
    status: "Independent Robotics Projects",
    description: "Work across adaptive multi-modal SLAM, visual-inertial odometry, and uncertainty-aware state estimation.",
    relevance: "Builds the perception foundation behind autonomous systems that must localize, map, and estimate confidence.",
    evidence: "SLAM · VIO · sensor fusion · robustness reasoning",
    tags: ["SLAM", "VIO", "Sensor Fusion"],
    href: "/projects/aegis-vio",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-white/10 bg-stone-950 px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Evidence</p>
            <h2 className="max-w-3xl font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-white md:text-6xl">
              Robotics projects organized as research signals.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-500">
              The goal is not to show many unrelated repositories. The strongest work is grouped around one academic identity: prediction, perception, navigation, and autonomous robotics.
            </p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-stone-400 underline decoration-stone-700 underline-offset-4 transition hover:text-emerald-300 hover:decoration-emerald-400">
            View all research cases
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.title} href={project.href} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-white/[0.055]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400">{project.theme}</p>
              <h3 className="mt-4 font-serif text-2xl leading-snug tracking-[-0.02em] text-white transition group-hover:text-emerald-200">
                {project.title}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">{project.status}</p>
              <p className="mt-4 text-sm leading-7 text-stone-400">{project.description}</p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-stone-950/50 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">Evidence shown</p>
                <p className="mt-2 text-xs leading-6 text-stone-300">{project.evidence}</p>
              </div>
              <p className="mt-4 border-l border-white/10 pl-4 text-xs italic leading-6 text-stone-500">{project.relevance}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-stone-950/70 px-2.5 py-1 font-mono text-[10px] text-stone-400">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
