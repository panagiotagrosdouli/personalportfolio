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
    slug: "aegis-vio",
    status: "Complete",
    badge: "Independent Research",
    year: "2024",
    title: "AEGIS-VIO: Uncertainty-Aware Visual-Inertial Odometry",
    objective:
      "Explore visual-inertial odometry with emphasis on uncertainty, robustness, sensor fusion, and state estimation for autonomous robotic systems.",
    tags: ["visual-inertial odometry", "robot perception", "uncertainty", "sensor fusion"],
    latestUpdate: "Repository available as part of the robotics and autonomy research portfolio.",
    progress: 100,
    github: true,
    repositoryUrl: "https://github.com/PanagiotaGr/aegis-vio",
    subtitle: "Independent Research · Complete · 2024",
    overview:
      "AEGIS-VIO focuses on uncertainty-aware visual-inertial odometry, a core perception capability for autonomous robots. The project strengthens the portfolio's perception side by connecting estimation, robustness, and uncertainty-aware autonomy.",
    questions: [
      "How can visual and inertial signals be combined for more reliable robot state estimation?",
      "Where does uncertainty appear in visual-inertial odometry pipelines?",
      "How can uncertainty-aware perception support safer downstream navigation and planning?",
    ],
    methodology: ["Visual-inertial estimation", "Sensor fusion", "Uncertainty-aware analysis", "Robotic perception pipeline design"],
    experiments: ["VIO pipeline implementation", "State-estimation robustness inspection", "Uncertainty-focused analysis"],
    literature: ["Visual-inertial odometry", "SLAM", "Robot perception", "State estimation"],
    future: ["Connect VIO uncertainty to navigation risk", "Compare robustness under challenging motion", "Document failure cases more explicitly"],
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
    slug: "risk-aware-uav-return-home",
    status: "Complete",
    badge: "Research Project",
    year: "2024",
    title: "Risk-Aware Return-to-Home Policy for UAVs",
    objective:
      "Study UAV return-to-home decision making under battery uncertainty and wind disturbances, emphasizing risk-aware autonomy in safety-critical settings.",
    tags: ["UAV", "battery uncertainty", "wind disturbances", "risk-aware control"],
    latestUpdate: "Repository available with a focused safety-critical autonomy problem.",
    progress: 100,
    github: true,
    repositoryUrl: "https://github.com/PanagiotaGr/Risk-Aware-Return-to-Home-Policy-for-UAVs-under-Battery-Uncertainty-and-Wind-Disturbances",
    subtitle: "Research Project · Complete · 2024",
    overview:
      "This project investigates risk-aware return-to-home behaviour for UAVs operating under uncertain battery conditions and wind disturbances. It supports the broader research direction of safe autonomous decision making under uncertainty.",
    questions: [
      "How should a UAV decide when to return home under battery uncertainty?",
      "How do wind disturbances affect safety margins and mission reliability?",
      "How can risk-aware policies reduce unsafe outcomes compared with nominal decision rules?",
    ],
    methodology: ["Uncertainty modelling", "Risk-aware policy design", "Battery and wind disturbance scenarios", "Safety-margin analysis"],
    experiments: ["Return-to-home scenario evaluation", "Battery uncertainty analysis", "Wind disturbance sensitivity study"],
    literature: ["Risk-aware autonomy", "UAV planning", "Decision making under uncertainty", "Safe robotics"],
    future: ["Compare with learning-based policies", "Add richer disturbance models", "Connect with CVaR-style risk objectives"],
  },
  {
    slug: "neuromorphic-robot-snn",
    status: "Complete",
    badge: "Research Project",
    year: "2023",
    title: "Neuromorphic Robot with Spiking Neural Networks",
    objective:
      "Explore neuromorphic control and perception through spiking neural networks for robotic behaviour and embodied intelligence.",
    tags: ["neuromorphic robotics", "SNN", "robot learning", "embodied AI"],
    latestUpdate: "Repository included as part of the embodied-AI research trajectory.",
    progress: 100,
    github: true,
    repositoryUrl: "https://github.com/PanagiotaGr/neuromorphic-robot-snn",
    subtitle: "Research Project · Complete · 2023",
    overview:
      "This project explores robotic behaviour through spiking neural networks and neuromorphic computing. It provides an early research thread connecting robot learning, biologically inspired computation, and embodied AI.",
    questions: [
      "How can spiking neural networks be used for robotic behaviour?",
      "What makes neuromorphic approaches different from conventional neural control?",
      "How can biologically inspired computation support embodied intelligence?",
    ],
    methodology: ["Spiking neural networks", "Robotic behaviour design", "Neuromorphic computation", "Embodied AI experimentation"],
    experiments: ["SNN-based robotic behaviour", "Control and response inspection", "Neuromorphic model exploration"],
    literature: ["Spiking neural networks", "Neuromorphic computing", "Robot learning", "Embodied intelligence"],
    future: ["Compare SNN behaviour with conventional controllers", "Document robustness and limitations", "Explore event-based sensing connections"],
  },
  {
    slug: "real-time-driving-scene-segmentation",
    status: "Complete",
    badge: "Computer Vision",
    year: "2023",
    title: "Real-Time Driving Scene Segmentation",
    objective:
      "Develop real-time semantic segmentation for autonomous driving scenes, connecting computer vision, perception, and intelligent transportation.",
    tags: ["semantic segmentation", "autonomous driving", "computer vision", "perception"],
    latestUpdate: "Repository available as a perception-focused autonomous driving project.",
    progress: 100,
    github: true,
    repositoryUrl: "https://github.com/PanagiotaGr/real-time-driving-scene-segmentation",
    subtitle: "Computer Vision Project · Complete · 2023",
    overview:
      "This project focuses on real-time semantic segmentation for driving scenes. It strengthens the perception foundation of the portfolio and connects naturally to autonomous driving, trajectory prediction, and intelligent transportation systems.",
    questions: [
      "How can driving-scene semantics be extracted efficiently in real time?",
      "Which perception errors matter most for downstream autonomous driving decisions?",
      "How can segmentation support safer prediction and planning pipelines?",
    ],
    methodology: ["Semantic segmentation", "Real-time computer vision", "Autonomous-driving scene analysis", "Perception pipeline development"],
    experiments: ["Driving-scene segmentation pipeline", "Qualitative perception inspection", "Real-time performance consideration"],
    literature: ["Semantic segmentation", "Autonomous driving perception", "Scene understanding", "Computer vision for robotics"],
    future: ["Evaluate segmentation failure cases", "Connect scene semantics with trajectory prediction", "Improve documentation with visual examples"],
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
