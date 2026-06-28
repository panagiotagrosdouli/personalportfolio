export type ProjectStatus = "Active" | "Prototype" | "Complete";

export type Project = {
  slug: string;
  status: ProjectStatus;
  badge: string;
  year: string;
  title: string;
  objective: string;
  tags: string[];
  latestUpdate?: string;
  progress: number;
  github: boolean;
  subtitle: string;
  overview: string;
  questions: string[];
  methodology: string[];
  experiments: string[];
  literature: string[];
  future: string[];
};

export const projects: Project[] = [
  {
    slug: "trajectory-prediction-vrus",
    status: "Active",
    badge: "Diploma Thesis",
    year: "2025–2026",
    title: "Trajectory Prediction of VRUs at Smart Intersections",
    objective:
      "Develop trajectory forecasting methods for vulnerable road users in smart-intersection environments, with attention to uncertainty and safety-relevant decision making.",
    tags: ["trajectory prediction", "VRU", "smart intersections", "uncertainty"],
    latestUpdate: "Current focus: uncertainty-aware modelling and evaluation design.",
    progress: 72,
    github: false,
    subtitle: "Diploma Thesis · Active · 2025–2026",
    overview:
      "This research investigates how autonomous systems can anticipate the future motion of vulnerable road users at smart intersections. The project connects trajectory prediction, uncertainty-aware modelling, and safety-relevant decision making for intelligent transportation systems.",
    questions: [
      "How can future pedestrian and vulnerable road-user trajectories be forecast in complex intersection scenarios?",
      "How should uncertainty be represented when multiple future motions are plausible?",
      "Which failure cases matter most when trajectory prediction is used for autonomous decision making?",
    ],
    methodology: ["Trajectory preprocessing", "Input-output sequence modelling", "Baseline forecasting evaluation", "ADE/FDE and failure-case inspection"],
    experiments: ["Baseline trajectory forecasting", "Uncertainty-aware evaluation design", "Smart-intersection scenario analysis"],
    literature: ["Social GAN", "Trajectron++", "Wayformer", "Interaction-aware trajectory forecasting"],
    future: ["Add stronger sequence models", "Evaluate multi-modal predictions", "Study calibration and rare unsafe cases"],
  },
  {
    slug: "dynnav",
    status: "Active",
    badge: "Independent Research",
    year: "2025–Present",
    title: "DynNav: Risk-Aware Navigation in Dynamic Environments",
    objective:
      "Explore robot navigation policies that reason about unsafe outcomes, dynamic agents, and multi-agent coordination rather than optimizing only average-case behaviour.",
    tags: ["ROS2", "risk-aware navigation", "CVaR", "multi-agent"],
    latestUpdate: "Project shaped after academic discussion and developed independently.",
    progress: 58,
    github: true,
    subtitle: "Independent Research Project · Active · 2025–Present",
    overview:
      "DynNav is a self-directed research project exploring robot navigation under uncertainty. The work focuses on dynamic agents, unsafe outcomes, CVaR-inspired risk reasoning, ROS2-based experimentation, reinforcement learning, and multi-agent coordination.",
    questions: [
      "How can navigation systems reason about low-probability but high-cost unsafe outcomes?",
      "When does risk-aware planning become too conservative?",
      "How should robots behave around moving agents with uncertain intent?",
    ],
    methodology: ["ROS2 simulation", "Risk-aware scenario design", "CVaR-inspired decision logic", "Multi-agent interaction analysis"],
    experiments: ["Dynamic-agent navigation scenarios", "Near-miss and collision-risk analysis", "Risk sensitivity comparison"],
    literature: ["Risk-sensitive planning", "Safe robot navigation", "CVaR in decision making", "Multi-agent reinforcement learning"],
    future: ["Tune risk sensitivity", "Expand scenario diversity", "Compare with nominal navigation baselines"],
  },
  {
    slug: "f1-ai-forecasting",
    status: "Complete",
    badge: "Applied ML",
    year: "2025",
    title: "F1 AI Forecasting Platform",
    objective:
      "Build a probabilistic race-forecasting platform using historical data, feature engineering, uncertainty modelling, Monte Carlo simulation, and interactive visual analysis.",
    tags: ["forecasting", "simulation", "probability", "data analysis"],
    latestUpdate: "Completed as an applied machine-learning project with distributional outputs.",
    progress: 100,
    github: true,
    subtitle: "Applied Machine Learning · Complete · 2025",
    overview:
      "A probabilistic forecasting platform for race-outcome analysis using historical racing data, feature engineering, uncertainty modelling, Monte Carlo simulation, and interactive visual analytics.",
    questions: [
      "How can probabilistic simulation make forecasts more informative than deterministic ranking?",
      "Which features most influence race-outcome uncertainty?",
      "How can uncertainty be communicated clearly through interactive tools?",
    ],
    methodology: ["Feature engineering", "Probabilistic modelling", "Monte Carlo simulation", "Interactive visualization"],
    experiments: ["Race-outcome simulations", "Distributional forecast analysis", "Prediction uncertainty inspection"],
    literature: ["Forecasting methods", "Monte Carlo simulation", "Probabilistic modelling"],
    future: ["Add richer contextual features", "Improve calibration", "Evaluate over multiple race weekends"],
  },
  {
    slug: "robotics-vision-internship",
    status: "Complete",
    badge: "Applied Robotics",
    year: "2025",
    title: "Robotics & Computer Vision Work",
    objective:
      "Applied perception work in a robotics engineering environment, strengthening the connection between computer vision, autonomy, and safe decision making.",
    tags: ["robotics", "computer vision", "perception"],
    latestUpdate: "Completed internship at OZZIE Robotics.",
    progress: 100,
    github: false,
    subtitle: "Applied Robotics · Complete · 2025",
    overview:
      "Applied perception work in a robotics engineering environment, connecting computer vision pipelines with autonomy and robotic decision making.",
    questions: [
      "How do perception pipelines support downstream robotic autonomy?",
      "Which engineering constraints appear when vision systems move from prototypes to applied robotics?",
      "How can perception work inform safer autonomous-system design?",
    ],
    methodology: ["Computer vision pipeline work", "Robotics engineering context", "Applied perception analysis"],
    experiments: ["Perception pipeline development", "Robotic vision system support"],
    literature: ["Computer vision for robotics", "Perception for autonomous systems"],
    future: ["Connect perception outputs with prediction and planning", "Study robustness in real-world robotic settings"],
  },
];

export const projectMap = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<string, Project>;
