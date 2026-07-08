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
  repositoryUrl?: string;
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
    slug: "shield-vio",
    status: "Prototype",
    badge: "Flagship Robotics Research",
    year: "2026–Present",
    title: "SHIELD-VIO: Self-Healing Visual-Inertial Odometry",
    objective:
      "Study whether visual-inertial odometry systems can detect degradation, diagnose likely failure causes, and select recovery actions before localization failure.",
    tags: ["visual-inertial odometry", "SLAM", "failure diagnosis", "robust autonomy"],
    latestUpdate: "Positioned as the main PhD-level robotics repository in the portfolio.",
    progress: 62,
    github: true,
    repositoryUrl: "https://github.com/panagiotagrosdouli/SHIELD-VIO",
    subtitle: "PhD-level research prototype · Active · 2026–Present",
    overview:
      "SHIELD-VIO frames localization robustness as a closed-loop autonomy problem: the robot should monitor localization health, reason about degradation causes, and select recovery actions before failure becomes safety-critical.",
    questions: [
      "Can VIO degradation be represented as a continuous health signal before tracking loss?",
      "Can onboard signals infer a useful posterior over degradation causes?",
      "Can diagnosis-conditioned recovery improve uptime and estimator consistency?",
    ],
    methodology: ["Health monitoring", "Bayesian failure diagnosis", "Navigation Health Index", "Rule-based recovery policies"],
    experiments: ["Synthetic degradation demo", "Detector range tests", "Diagnosis normalization tests", "Recovery-action smoke tests"],
    literature: ["Visual-inertial odometry", "Robust SLAM", "Perception-aware autonomy", "Fault diagnosis in robotics"],
    future: ["Integrate with OpenVINS or ORB-SLAM3", "Add ROS 2 health monitor node", "Evaluate on degraded EuRoC/TUM-VI sequences"],
  },
  {
    slug: "adaptive-multimodal-slam",
    status: "Active",
    badge: "Robust SLAM Research",
    year: "2026–Present",
    title: "Adaptive Multi-Modal SLAM with Uncertainty-Aware Sensor Fusion",
    objective:
      "Investigate adaptive fusion of visual, inertial, and event-based sensing under perceptual degradation such as blur, low light, texture scarcity, and rapid motion.",
    tags: ["SLAM", "sensor fusion", "uncertainty", "event cameras"],
    latestUpdate: "Aligned with SHIELD-VIO as the robust SLAM and sensor-fusion branch of the portfolio.",
    progress: 58,
    github: true,
    repositoryUrl: "https://github.com/panagiotagrosdouli/Adaptive-Multi-Modal-SLAM-with-Uncertainty-Aware-Sensor-Fusion",
    subtitle: "Robust perception research · Active · 2026–Present",
    overview:
      "This project studies whether SLAM systems can estimate sensor reliability online and adapt their fusion strategy before visual degradation causes severe localization failure.",
    questions: [
      "Can a SLAM system estimate sensor reliability online?",
      "When should a robot reduce reliance on visual measurements and increase reliance on inertial or event-based sensing?",
      "How should robustness be evaluated under controlled perceptual degradation?",
    ],
    methodology: ["Uncertainty-aware fusion", "ORB-SLAM3 EuRoC wrapper", "ATE/RPE evaluation", "Degradation-aware benchmarking"],
    experiments: ["EuRoC parsing", "Trajectory matching", "Adaptive fusion prototype", "Baseline SLAM evaluation scaffold"],
    literature: ["ORB-SLAM3", "VINS-Fusion", "OpenVINS", "Event-based vision", "Uncertainty calibration"],
    future: ["Complete real ORB-SLAM3 baseline runs", "Add event-camera degradation experiments", "Compare fixed and adaptive fusion strategies"],
  },
  {
    slug: "dynnav",
    status: "Active",
    badge: "Risk-Aware Navigation",
    year: "2025–Present",
    title: "DynNav: Uncertainty-Aware Risk-Sensitive Navigation",
    objective:
      "Develop and evaluate navigation methods that reason about map uncertainty, collision risk, returnability, and safe replanning in unknown environments.",
    tags: ["mobile robotics", "risk-aware navigation", "CVaR", "ROS 2"],
    latestUpdate: "Structured as a research repository for uncertainty-aware navigation and formal safety monitoring.",
    progress: 70,
    github: true,
    repositoryUrl: "https://github.com/panagiotagrosdouli/DynNav-Dynamic-Navigation-Rerouting-in-Unknown-Environments",
    subtitle: "Independent robotics research · Active · 2025–Present",
    overview:
      "DynNav connects belief-aware planning, risk-sensitive route selection, returnability constraints, and safety monitoring for robots navigating previously unmapped environments.",
    questions: [
      "How can a robot plan safely when the map is incomplete or uncertain?",
      "Can risk-sensitive planning reduce collision or entrapment rate compared with expected-cost planning?",
      "How should a robot trade off path efficiency against safety and returnability?",
    ],
    methodology: ["Risk-weighted planning", "CVaR-style reasoning", "Returnability constraints", "STL/CBF-style safety monitoring"],
    experiments: ["Uncertainty estimation", "Belief-space planning", "Safe-mode navigation", "Formal safety shield experiments"],
    literature: ["Risk-sensitive planning", "Control Barrier Functions", "Signal Temporal Logic", "Belief-space planning"],
    future: ["Report seeds and variance", "Add reproducible benchmark tables", "Expand hardware or simulation evaluation"],
  },
  {
    slug: "uncertainty-aware-navigation",
    status: "Prototype",
    badge: "Focused Planning Benchmark",
    year: "2026–Present",
    title: "Uncertainty-Aware Navigation",
    objective:
      "Create a focused benchmark for comparing classical shortest-path planning with uncertainty-weighted navigation in controlled map scenarios.",
    tags: ["A*", "Dijkstra", "uncertainty maps", "planning benchmark"],
    latestUpdate: "Reframed as a clean planning benchmark within the broader robotics portfolio.",
    progress: 45,
    github: true,
    repositoryUrl: "https://github.com/panagiotagrosdouli/uncertainty-aware-navigation",
    subtitle: "Planning benchmark · Prototype · 2026–Present",
    overview:
      "This repository isolates the planning question: when a map is uncertain, does uncertainty-aware cost reduce unsafe navigation behavior compared with classical shortest-path planning?",
    questions: [
      "Can uncertainty-weighted planning reduce unsafe navigation behavior?",
      "What path-length or computation-cost tradeoff appears when uncertainty is penalized?",
      "Which safety metrics are most useful for controlled navigation experiments?",
    ],
    methodology: ["Grid-map simulation", "Classical planner baselines", "Uncertainty cost maps", "Safety metric reporting"],
    experiments: ["Shortest path vs uncertainty-weighted planning", "Collision-rate analysis", "Accumulated risk-cost comparison"],
    literature: ["A* planning", "Dijkstra", "Navigation under uncertainty", "Robotic path planning"],
    future: ["Add executable first benchmark", "Generate plots", "Connect benchmark results to DynNav"],
  },
  {
    slug: "safecrossai",
    status: "Active",
    badge: "Intelligent Mobility Research",
    year: "2025–Present",
    title: "SafeCrossAI: Intelligent Intersection Safety",
    objective:
      "Develop a research platform for vulnerable road-user trajectory prediction, interaction modelling, risk assessment, and intelligent intersection safety.",
    tags: ["trajectory prediction", "VRU safety", "intelligent intersections", "multi-agent systems"],
    latestUpdate: "Includes baseline predictors, ADE/FDE evaluation, and social-interaction utilities.",
    progress: 68,
    github: true,
    repositoryUrl: "https://github.com/panagiotagrosdouli/SafeCrossAI",
    subtitle: "AI mobility research · Active · 2025–Present",
    overview:
      "SafeCrossAI investigates how infrastructure-based AI can understand multi-agent traffic scenes, predict vulnerable road-user motion, and estimate safety-critical interactions at smart intersections.",
    questions: [
      "How can infrastructure perception improve vulnerable road-user trajectory prediction?",
      "Which social interaction features are useful for safety-critical forecasting?",
      "How can uncertainty-aware prediction support connected and autonomous mobility?",
    ],
    methodology: ["Baseline trajectory prediction", "ADE/FDE evaluation", "Social interaction graphs", "Time-to-collision utilities"],
    experiments: ["Constant-velocity baseline", "Neighbor search", "Pairwise social features", "Interaction graph construction"],
    literature: ["Trajectory forecasting", "Social interaction modelling", "VRU safety", "Intelligent transportation systems"],
    future: ["Add public dataset loaders", "Integrate graph neural predictors", "Build visualization dashboard"],
  },
  {
    slug: "trajectory-prediction-vrus",
    status: "Active",
    badge: "Diploma Thesis",
    year: "2025–2026",
    title: "Trajectory Prediction of VRUs at Smart Intersections",
    objective:
      "Develop trajectory forecasting methods for vulnerable road users in smart-intersection environments, with attention to uncertainty and safety-relevant decision making.",
    tags: ["trajectory prediction", "VRU", "smart intersections", "uncertainty"],
    latestUpdate: "Current thesis focus: uncertainty-aware modelling and evaluation design.",
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
];

export const projectMap = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<string, Project>;
