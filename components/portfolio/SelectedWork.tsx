import Link from "next/link";

const selectedWork = [
  {
    title: "Diploma Thesis",
    subtitle: "Trajectory Prediction of Vulnerable Road Users",
    label: "Current research",
    href: "/projects/diploma-thesis",
    description:
      "Forecasting vulnerable road-user motion at smart intersections for safer autonomous decision making.",
    tech: ["Trajectory Prediction", "Motion Forecasting", "Autonomous Driving", "Uncertainty"],
    featured: true,
  },
  {
    title: "AEGIS-VIO",
    subtitle: "Uncertainty-Aware Visual-Inertial Navigation",
    label: "Research prototype",
    href: "https://github.com/PanagiotaGr/aegis-vio",
    description:
      "A robotics prototype connecting state estimation, uncertainty signals, and ROS2-based navigation logic.",
    tech: ["Python", "ROS2", "EKF", "VIO", "Uncertainty", "Navigation"],
  },
  {
    title: "DynNav",
    subtitle: "Risk-Aware Navigation",
    label: "Independent research",
    href: "https://github.com/PanagiotaGr",
    description:
      "Risk-aware robot navigation in dynamic environments with reinforcement learning and multi-agent coordination.",
    tech: ["ROS2", "Risk-Aware Navigation", "RL", "Multi-Agent Systems"],
  },
  {
    title: "Risk-Aware Return-to-Home Policy for UAVs",
    label: "Autonomy under uncertainty",
    href: "https://github.com/PanagiotaGr/Risk-Aware-Return-to-Home-Policy-for-UAVs-under-Battery-Uncertainty-and-Wind-Disturbances",
    description:
      "Safe return-to-home decisions under battery uncertainty and wind disturbances.",
    tech: ["UAVs", "Risk-Aware Planning", "Simulation", "Autonomy"],
  },
  {
    title: "Semantic Segmentation for Autonomous Driving",
    label: "Computer vision",
    href: "https://github.com/PanagiotaGr/Semantic-Segmentation-for-Road-and-Dynamic-Object-Understanding-in-Autonomous-Driving",
    description:
      "Road and dynamic-object understanding for autonomous driving perception.",
    tech: ["Computer Vision", "Segmentation", "Autonomous Driving", "Deep Learning"],
  },
  {
    title: "Neuromorphic Robot SNN",
    label: "Bio-inspired robotics",
    href: "https://github.com/PanagiotaGr/neuromorphic-robot-snn",
    description:
      "Spiking neural networks for robot perception, control, and efficient decision making.",
    tech: ["SNN", "Robotics", "Python", "Neuromorphic AI"],
  },
  {
    title: "Robotic Arm Project",
    label: "Robotics engineering",
    href: "https://github.com/PanagiotaGr/robotic_arm_project",
    description:
      "Robotic arm control and engineering implementation for embodied autonomy.",
    tech: ["Robotics", "Control", "Kinematics", "Engineering"],
  },
];

export function SelectedWork() {
  const [featuredProject, ...otherProjects] = selectedWork;

  return (
    <section id="work" className="bg-[#f8f6f0] px-6 py-12 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <div>
            <p className="section-kicker">Research Work</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-stone-950 md:text-5xl">
              Selected work, kept concise.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-stone-700">
            Each project supports a focused path through prediction, perception, uncertainty, and robotics.
          </p>
        </div>

        <article className="mt-8 grid gap-8 border-y border-stone-200 py-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900">{featuredProject.label}</p>
            <h3 className="mt-4 font-serif text-5xl tracking-[-0.045em] text-stone-950">{featuredProject.title}</h3>
            {featuredProject.subtitle ? <p className="mt-3 text-sm leading-6 text-stone-500">{featuredProject.subtitle}</p> : null}
          </div>
          <div>
            <p className="text-base leading-8 text-stone-700 md:text-lg">{featuredProject.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.tech.map((item) => (
                <span key={item} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-650">
                  {item}
                </span>
              ))}
            </div>
            <Link href={featuredProject.href} className="mt-6 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
              Open →
            </Link>
          </div>
        </article>

        <div className="mt-4 divide-y divide-stone-200 border-y border-stone-200">
          {otherProjects.map((project) => (
            <a key={project.title} href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group grid gap-5 py-6 transition hover:bg-white/50 md:grid-cols-[0.34fr_0.66fr] md:px-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-900">{project.label}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.035em] text-stone-950">{project.title}</h3>
                {project.subtitle ? <p className="mt-2 text-sm leading-6 text-stone-500">{project.subtitle}</p> : null}
              </div>
              <div>
                <p className="max-w-2xl text-sm leading-7 text-stone-700">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-650">
                      {item}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 group-hover:decoration-emerald-950">
                  Open →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
