const selectedWork = [
  {
    title: "AEGIS-VIO",
    label: "Research prototype",
    href: "https://github.com/PanagiotaGr/aegis-vio",
    description:
      "Uncertainty-aware visual-inertial navigation system for challenging environments. The project combines error-state EKF estimation, visual tracking, uncertainty quantification, risk scoring, and ROS2 integration so a robot can adapt its behavior when state estimates become less reliable.",
    details: [
      "Error-state EKF for visual-inertial estimation",
      "Uncertainty metrics and calibrated risk score",
      "Risk-aware navigation modes for safer robot behavior",
      "ROS2 package, evaluation scripts, and unit tests",
    ],
    tech: ["Python", "ROS2", "EKF", "VIO", "Uncertainty", "Navigation"],
    featured: true,
  },
  {
    title: "Risk-Aware Return-to-Home Policy for UAVs",
    label: "Autonomy under uncertainty",
    href: "https://github.com/PanagiotaGr/Risk-Aware-Return-to-Home-Policy-for-UAVs-under-Battery-Uncertainty-and-Wind-Disturbances",
    description:
      "A UAV decision-making project focused on safe return-to-home behavior under battery uncertainty and wind disturbances, connecting autonomy, risk-aware planning, and robust control decisions.",
    details: ["Battery uncertainty", "Wind disturbances", "Return-to-home policy", "Risk-aware UAV autonomy"],
    tech: ["UAVs", "Risk-Aware Planning", "Simulation", "Autonomy"],
  },
  {
    title: "Neuromorphic Robot SNN",
    label: "Bio-inspired robotics",
    href: "https://github.com/PanagiotaGr/neuromorphic-robot-snn",
    description:
      "A neuromorphic robotics project exploring spiking neural networks for robot perception and control, with emphasis on bio-inspired computation and efficient decision making.",
    details: ["Spiking neural networks", "Neuromorphic computing", "Robot control", "Bio-inspired intelligence"],
    tech: ["SNN", "Robotics", "Python", "Neuromorphic AI"],
  },
  {
    title: "Robotic Arm Project",
    label: "Robotics engineering",
    href: "https://github.com/PanagiotaGr/robotic_arm_project",
    description:
      "A robotic manipulation project focused on robotic arm control and engineering implementation, supporting my broader interest in embodied autonomy and robotic systems.",
    details: ["Robotic manipulation", "Control implementation", "Arm kinematics", "Engineering prototype"],
    tech: ["Robotics", "Control", "Kinematics", "Engineering"],
  },
  {
    title: "Semantic Segmentation for Autonomous Driving",
    label: "Computer vision for autonomy",
    href: "https://github.com/PanagiotaGr/Semantic-Segmentation-for-Road-and-Dynamic-Object-Understanding-in-Autonomous-Driving",
    description:
      "A computer vision project for road and dynamic-object understanding in autonomous driving scenarios, focused on semantic segmentation as a perception layer for intelligent mobility systems.",
    details: ["Road-scene understanding", "Dynamic object perception", "Semantic segmentation", "Autonomous driving context"],
    tech: ["Computer Vision", "Segmentation", "Autonomous Driving", "Deep Learning"],
  },
];

export function SelectedWork() {
  const [featuredProject, ...otherProjects] = selectedWork;

  return (
    <section id="work" className="bg-[#f8f6f0] px-6 py-12 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <div>
            <p className="section-kicker">Selected Technical Work</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-stone-950 md:text-5xl">
              Robotics, autonomy, and perception projects.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-stone-700">
            Technical projects that support my research direction in autonomous systems, uncertainty-aware navigation, robotics, and intelligent transportation.
          </p>
        </div>

        <article className="mt-8 grid gap-8 rounded-sm border border-stone-200 bg-white/88 p-7 shadow-[0_30px_90px_-72px_rgba(28,25,23,0.75)] md:p-9 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900">{featuredProject.label}</p>
            <h3 className="mt-4 font-serif text-5xl tracking-[-0.045em] text-stone-950">{featuredProject.title}</h3>
            <a href={featuredProject.href} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
              View repository
            </a>
          </div>
          <div>
            <p className="text-base leading-8 text-stone-700 md:text-lg">{featuredProject.description}</p>
            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {featuredProject.details.map((detail) => (
                <div key={detail} className="flex gap-3 text-sm leading-6 text-stone-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-900" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {featuredProject.tech.map((item) => (
                <span key={item} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-650">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article key={project.title} className="rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900">{project.label}</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.035em] text-stone-950">{project.title}</h3>
              <p className="mt-5 text-sm leading-7 text-stone-700">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-650">
                    {item}
                  </span>
                ))}
              </div>
              <a href={project.href} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
                View repository
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
