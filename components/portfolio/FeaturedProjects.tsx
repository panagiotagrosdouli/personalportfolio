import Link from "next/link";

type ProjectCard = {
  title: string;
  status: string;
  description: string;
  relevance: string;
  evidence: string;
  tags: string[];
  href: string;
};

const projects: ProjectCard[] = [
  {
    title: "Trajectory Prediction of VRUs at Smart Intersections",
    status: "Diploma Thesis / Active",
    description: "Forecasting vulnerable road-user motion in smart-intersection environments.",
    relevance: "Core evidence for human-aware autonomous systems and safety-oriented prediction.",
    evidence: "Dataset framing · model comparison · uncertainty-aware evaluation",
    tags: ["Forecasting", "Uncertainty", "Smart Intersections"],
    href: "/projects/trajectory-prediction-vrus",
  },
  {
    title: "DynNav: Risk-Aware Navigation",
    status: "Independent Research",
    description: "Navigation and rerouting under uncertainty in dynamic environments.",
    relevance: "Connects perception uncertainty to downstream planning and more reliable robot behavior.",
    evidence: "Problem formulation · planning logic · limitations",
    tags: ["ROS 2", "Risk", "Planning"],
    href: "/projects/dynnav",
  },
  {
    title: "AEGIS-VIO",
    status: "Independent Research",
    description: "Uncertainty-aware visual-inertial odometry for robotic state estimation.",
    relevance: "Strengthens the perception and estimation side of the robotics profile.",
    evidence: "Sensor fusion · state estimation · robustness analysis",
    tags: ["VIO", "SLAM", "Sensor Fusion"],
    href: "/projects/aegis-vio",
  },
  {
    title: "Real-Time Driving Scene Segmentation",
    status: "Computer Vision",
    description: "Semantic perception for autonomous-driving scenes and intelligent transportation.",
    relevance: "Connects computer vision to prediction and downstream autonomy.",
    evidence: "Segmentation pipeline · real-time constraints · visual outputs",
    tags: ["Segmentation", "Perception", "Autonomous Driving"],
    href: "/projects/real-time-driving-scene-segmentation",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-white/10 bg-stone-950 px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Featured Research</p>
            <h2 className="max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-white md:text-6xl">
              Evidence, not claims.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-500">
              The strongest projects now surface what a reviewer needs to see quickly: the research role, the technical contribution, and the evidence behind it.
            </p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-stone-400 underline decoration-stone-700 underline-offset-4 transition hover:text-emerald-300 hover:decoration-emerald-400">
            View all research cases
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.title} href={project.href} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-white/[0.055]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400">{project.status}</p>
              <h3 className="mt-4 font-serif text-2xl leading-snug tracking-[-0.02em] text-white transition group-hover:text-emerald-200">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">{project.description}</p>
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
