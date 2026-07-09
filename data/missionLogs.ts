export type MissionLogStatus = "Draft" | "Active" | "Planned" | "Published Note";

export type MissionLog = {
  id: string;
  title: string;
  date: string;
  status: MissionLogStatus;
  relatedProjectSlug: string;
  tags: string[];
  objective: string;
  experiment: string;
  observation: string;
  result: string;
  nextStep: string;
};

export const missionLogs: MissionLog[] = [
  {
    id: "001",
    title: "Why Uncertainty Matters in Robotics",
    date: "2026-07-09",
    status: "Draft",
    relatedProjectSlug: "shield-vio",
    tags: ["Uncertainty", "Safety", "VIO"],
    objective: "Frame uncertainty as an operational signal rather than a decorative confidence score.",
    experiment: "Map where uncertainty enters the robotics stack: sensing, estimation, prediction, planning, and control.",
    observation: "Most autonomy failures are not caused only by wrong predictions, but by systems acting as if uncertain estimates were certain.",
    result: "The portfolio should expose uncertainty explicitly in every project page, demo, and metric table.",
    nextStep: "Connect SHIELD-VIO health scores to DynNav risk-aware planning scenarios.",
  },
  {
    id: "002",
    title: "From VIO to Risk-Aware Navigation",
    date: "2026-07-09",
    status: "Draft",
    relatedProjectSlug: "dynnav",
    tags: ["VIO", "Navigation", "Risk"],
    objective: "Show how localization confidence can become a planning input.",
    experiment: "Define a conceptual interface from VIO health monitoring to navigation risk cost.",
    observation: "A planner that ignores localization health may choose paths that are geometrically short but operationally unsafe.",
    result: "Research map edge SHIELD-VIO → DynNav now represents localization-health-aware navigation.",
    nextStep: "Prototype a synthetic demo where rising VIO uncertainty increases path risk.",
  },
  {
    id: "003",
    title: "Semantic Perception for Delivery Robots",
    date: "2026-07-09",
    status: "Draft",
    relatedProjectSlug: "urban-segmentation-delivery-robot",
    tags: ["Perception", "Computer Vision", "Navigation"],
    objective: "Treat semantic segmentation as a navigation support module, not only a computer-vision output.",
    experiment: "List semantic classes that matter for sidewalk and urban delivery navigation.",
    observation: "The useful output is not only class accuracy; the robot needs traversability, uncertainty, and failure-case awareness.",
    result: "The delivery robot project is connected to Perception and Navigation in the research map.",
    nextStep: "Add placeholder-to-real demo path for semantic maps and safe local navigation overlays.",
  },
  {
    id: "004",
    title: "Building Research Repositories Like Lab Software",
    date: "2026-07-09",
    status: "Draft",
    relatedProjectSlug: "adaptive-multimodal-slam",
    tags: ["Reproducibility", "Software", "SLAM"],
    objective: "Define repository standards for research software: clear assumptions, pending metrics, and reproducible commands.",
    experiment: "Review project pages for claims that need to be marked as planned, synthetic, or pending.",
    observation: "Scientific honesty is a design feature: it helps reviewers understand what is implemented and what is future work.",
    result: "Project pages use implementation-status tables and limitation sections.",
    nextStep: "Add GitHub Actions checks and per-project experiment manifests.",
  },
  {
    id: "005",
    title: "Simulation as a Tool for Robotics Research",
    date: "2026-07-09",
    status: "Draft",
    relatedProjectSlug: "formula-1-race-simulation",
    tags: ["Simulation", "Planning", "Evaluation"],
    objective: "Use simulation to test edge cases while real robot data and benchmarks are pending.",
    experiment: "Separate synthetic demos from verified experimental results across the portfolio.",
    observation: "Synthetic demos are valuable when clearly labelled; they become misleading only when presented as real benchmarks.",
    result: "The demos page and project pages should keep synthetic, planned, and real artifacts visually distinct.",
    nextStep: "Create seeded simulation cards for navigation, VIO uncertainty, and strategy optimization.",
  },
  {
    id: "006",
    title: "Communication Uncertainty in Underwater Autonomy",
    date: "2026-07-09",
    status: "Planned",
    relatedProjectSlug: "openuwoc-ai",
    tags: ["Communications", "Uncertainty", "AI"],
    objective: "Extend the uncertainty theme beyond perception and localization into communication-constrained autonomy.",
    experiment: "Draft a mapping from channel reliability to robot decision constraints.",
    observation: "A communication link is another uncertain sensorimotor resource, especially in underwater systems.",
    result: "OpenUWOC-AI is represented as a communication uncertainty branch of the research ecosystem.",
    nextStep: "Define channel metrics and avoid claims until simulation results are reproducible.",
  },
];
