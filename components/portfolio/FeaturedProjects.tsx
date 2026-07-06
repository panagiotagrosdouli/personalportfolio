type ProjectCard = {
  title: string;
  status: string;
  description: string;
  relevance: string;
  tags: string[];
  githubUrl?: string;
};

const projects: ProjectCard[] = [
  {
    title: "Trajectory Prediction of VRUs at Smart Intersections",
    status: "Diploma Thesis / Active",
    description: "Forecasting the future motion of vulnerable road users in smart-intersection environments.",
    relevance: "Directly addresses uncertainty-aware prediction for safety-critical autonomous decision making.",
    tags: ["Trajectory Prediction", "Uncertainty", "Intelligent Transportation"],
  },
  {
    title: "Adaptive Multi-Modal SLAM with Uncertainty-Aware Sensor Fusion",
    status: "Independent Research",
    description: "SLAM using vision foundation models and event cameras for high-speed UAV navigation.",
    relevance: "Connects visual perception, sensor fusion, and state estimation for robotic autonomy.",
    tags: ["SLAM", "Event Cameras", "Sensor Fusion", "UAV"],
    githubUrl: "https://github.com/panagiotagrosdouli/Adaptive-Multi-Modal-SLAM-with-Uncertainty-Aware-Sensor-Fusion",
  },
  {
    title: "DynNav - Dynamic Navigation and Rerouting",
    status: "Independent Research",
    description: "Uncertainty-aware, risk-sensitive navigation and replanning in unknown environments with ROS 2.",
    relevance: "Studies risk-sensitive planning and learning-augmented replanning for mobile robots.",
    tags: ["ROS 2", "Risk-Aware Planning", "Navigation"],
    githubUrl: "https://github.com/panagiotagrosdouli/DynNav-Dynamic-Navigation-Rerouting-in-Unknown-Environments",
  },
  {
    title: "SafeCrossAI",
    status: "Independent Research",
    description: "An AI-driven intelligent intersection that perceives and predicts risk between vulnerable road users and vehicles.",
    relevance: "Applies infrastructure-based perception and cooperative intelligence to intersection safety.",
    tags: ["Perception", "Cooperative Intelligence", "Autonomous Vehicles"],
    githubUrl: "https://github.com/panagiotagrosdouli/SafeCrossAI",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-stone-800 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Featured Projects</p>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-[-0.03em] text-white md:text-5xl">
          Evidence, not claims.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col justify-between rounded-2xl border border-stone-800 bg-stone-900/40 p-7 transition hover:border-stone-700 hover:bg-stone-900/70">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400">{project.status}</p>
                <h3 className="mt-3 font-serif text-2xl leading-snug tracking-[-0.02em] text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-400">{project.description}</p>
                <p className="mt-3 text-xs italic leading-5 text-stone-500">{project.relevance}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-stone-800 bg-stone-950 px-2 py-0.5 font-mono text-[10px] text-stone-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex gap-5 text-sm font-medium">
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-stone-300 underline decoration-stone-600 underline-offset-4 transition hover:text-white hover:decoration-white">
                    GitHub
                  </a>
                ) : (
                  <span className="text-stone-600">Private thesis in progress</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
