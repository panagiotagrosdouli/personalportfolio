export type ProjectCover = {
  src: string;
  alt: string;
  label: string;
  provenance: "Original research figure" | "Simulation output" | "Research architecture";
};

export const projectCovers: Record<string, ProjectCover> = {
  "shield-vio": {
    src: "/project-media/shield-vio-pipeline.svg",
    alt: "The project's visual-inertial estimation and protective-monitoring pipeline",
    label: "SHIELD-VIO architecture",
    provenance: "Research architecture",
  },
  "adaptive-multimodal-slam": {
    src: "/project-media/adaptive-slam-pipeline.svg",
    alt: "The project's adaptive multi-sensor SLAM architecture",
    label: "Adaptive SLAM pipeline",
    provenance: "Research architecture",
  },
  "dynnav": {
    src: "/project-media/dynnav-routes.png",
    alt: "DynNav simulated path comparison for hard irreversibility constraints and soft risk penalties",
    label: "DynNav simulated paths",
    provenance: "Simulation output",
  },
  "openuwoc-ai": {
    src: "/project-media/openuwoc-pipeline.svg",
    alt: "Original OpenUWOC-AI underwater optical channel and AI receiver pipeline",
    label: "Underwater communication pipeline",
    provenance: "Research architecture",
  },
  "formula-1-race-simulation": {
    src: "/project-media/f1-strategy.png",
    alt: "F1 race simulator's comparison of synthetic compound strategy scenarios",
    label: "F1 strategy simulation",
    provenance: "Simulation output",
  },
  "uncertainty-aware-navigation": {
    src: "/project-media/uncertainty-nav-pipeline.svg",
    alt: "Original uncertainty-aware navigation pipeline for belief, risk and planning",
    label: "Uncertainty-aware navigation",
    provenance: "Research architecture",
  },
} as const;
