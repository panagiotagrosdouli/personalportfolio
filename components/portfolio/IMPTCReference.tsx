import Image from "next/image";

type ProjectDomain = "forecasting" | "scene" | "navigation" | "estimation" | "cross-domain";

const categories: Record<string, ProjectDomain> = {
  "safecrossai": "forecasting",
  "diploma-thesis": "forecasting",
  "urban-segmentation-delivery-robot": "scene",
  "real-time-driving-scene-segmentation": "scene",
  "dynnav": "navigation",
  "uncertainty-aware-navigation": "navigation",
  "risk-aware-uav-return-to-home": "cross-domain",
  "aether": "cross-domain",
  "formula-1-race-simulation": "cross-domain",
  "shield-vio": "estimation",
  "aegis-vio": "estimation",
  "adaptive-multimodal-slam": "estimation",
  "openuwoc-ai": "cross-domain",
  "neuromorphic-robot-snn": "cross-domain",
};

const explanations: Record<ProjectDomain, string> = {
  forecasting:
    "These observed vulnerable road-user trajectories illustrate the real-world motion-forecasting problem: agents follow different routes through the same urban intersection. The figures come from the published IMPTC dataset; they are not predictions produced by this project.",
  scene:
    "The recorded paths and intersection ground-classification map provide real-world scene context for perception research. The map is an upstream dataset annotation, not a semantic-segmentation output produced by this project.",
  navigation:
    "These measured road-user paths illustrate dynamic human environments in which a navigation planner might operate. They are an external illustration, not an executed planning benchmark, simulated robot path, or evaluation result for this project.",
  estimation:
    "These are actual tracked road-user paths from a camera/LiDAR-equipped intersection. They provide an external motion-data reference, not robot pose ground truth, a visual-inertial odometry run, or evidence that this project's estimator has been evaluated on IMPTC.",
  "cross-domain":
    "This is a cross-domain reference from the broader research portfolio. IMPTC records urban road-user motion, not experiments in this project's particular domain; its data must not be interpreted as this project's measurements, predictions, or validation.",
};

const trackFigures = [
  {
    src: "/datasets/imptc/sample_01_vru_tracks.jpg",
    label: "IMPTC sample 01",
    alt: "Actual IMPTC vulnerable road-user tracks plotted on a top-down urban-intersection map, sample 01",
    kind: "Observed trajectories",
  },
  {
    src: "/datasets/imptc/sample_02_vru_tracks.jpg",
    label: "IMPTC sample 02",
    alt: "Measured pedestrian and cyclist trajectories across an urban intersection, IMPTC sample 02",
    kind: "Observed trajectories",
  },
  {
    src: "/datasets/imptc/sample_04_vru_tracks.jpg",
    label: "IMPTC sample 04",
    alt: "Actual road-user motion paths across an intersection, IMPTC sample 04",
    kind: "Observed trajectories",
  },
];

const groundFigure = {
  src: "/datasets/imptc/ground_plane.png",
  label: "IMPTC ground classification",
  alt: "Original IMPTC color-coded ground classification map showing road, crosswalk, sidewalk and related surface regions",
  kind: "Published dataset map",
};

export function IMPTCReference({ projectSlug, variant = "default" }: { projectSlug: string; variant?: "default" | "stone" }) {
  const domain = categories[projectSlug] ?? "cross-domain";
  const figures =
    domain === "forecasting" ? trackFigures :
    domain === "scene" ? [trackFigures[1], groundFigure] :
    domain === "navigation" ? [trackFigures[0], trackFigures[2]] :
    domain === "estimation" ? [trackFigures[1]] : [trackFigures[0]];

  const stone = variant === "stone";
  const muted = stone ? "text-stone-600" : "text-[var(--muted)]";
  const foreground = stone ? "text-stone-950" : "text-[var(--foreground)]";
  const accent = stone ? "text-emerald-900" : "text-[var(--accent)]";
  const border = stone ? "border-stone-200" : "border-[var(--line)]";
  const surface = stone ? "bg-white" : "bg-[var(--panel)]";

  return (
    <section aria-labelledby={"imptc-reference-" + projectSlug} className={stone ? "px-6 py-16 md:px-10 lg:px-12" : ""}>
      <div className={stone ? "mx-auto max-w-7xl border-y border-stone-200 py-14 md:py-20" : ""}>
        <div className="grid gap-7 lg:grid-cols-[220px_1fr]">
          <div>
            <p className={`font-mono text-[11px] font-semibold uppercase tracking-[.19em] ${accent}`}>
              External research dataset
            </p>
            <p className={`mt-3 text-xs leading-6 ${muted}`}>
              {domain === "forecasting" ? "Directly related research problem" :
                domain === "cross-domain" ? "Cross-domain reference only" : "Contextual reference only"}
            </p>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 id={"imptc-reference-" + projectSlug} className={`font-serif text-3xl leading-tight tracking-[-.04em] md:text-4xl ${foreground}`}>
                Real recorded trajectories from IMPTC
              </h2>
              <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[.12em] ${border} ${accent}`}>
                Observed · not predicted
              </span>
            </div>
            <p className={`mt-5 max-w-4xl text-sm leading-7 ${muted}`}>{explanations[domain]}</p>
            <div className={`mt-7 grid gap-4 ${figures.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-[minmax(0,360px)_1fr]"}`}>
              {figures.map((fig) => (
                <figure key={fig.src} className={`max-w-lg overflow-hidden rounded-[1.25rem] border p-3 ${border} ${surface}`}>
                  <Image
                    src={fig.src}
                    alt={fig.alt}
                    width={fig.src.endsWith(".png") ? 1200 : 320}
                    height={fig.src.endsWith(".png") ? 900 : 320}
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, 35vw"
                    className="aspect-[4/3] w-full rounded-xl bg-[#e9efeb] object-contain"
                  />
                  <figcaption className="flex flex-wrap items-center justify-between gap-2 px-1 pt-4">
                    <span className={`font-mono text-[11px] ${foreground}`}>{fig.label}</span>
                    <span className={`text-[10px] font-medium ${muted}`}>{fig.kind}</span>
                  </figcaption>
                </figure>
              ))}
              {figures.length === 1 && (
                <div className={`self-center border-l pl-5 text-sm leading-7 ${border} ${muted}`}>
                  <p>These tracks were recorded at an instrumented urban intersection using external research infrastructure.</p>
                  <p className="mt-3">They are not robot-localization trajectories, hardware test runs, or performance measurements from this project.</p>
                </div>
              )}
            </div>
            <p className={`mt-6 max-w-4xl text-xs leading-6 ${muted}`}>
              Source: M. Hetzel et al., <em>The IMPTC Dataset: An Infrastructural Multi-Person Trajectory and Context Dataset</em>,
              IEEE Intelligent Vehicles Symposium (2023). Original figures from the official IMPTC repository.
              This external reference does not establish that the project used IMPTC for training or evaluation.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="https://github.com/mh-kav-institute/imptc-dataset" target="_blank" rel="noopener noreferrer" className={`focus-ring underline underline-offset-4 hover:opacity-70 ${accent}`}>
                Original dataset and figures
              </a>
              <a href="https://doi.org/10.1109/IV55152.2023.10186776" target="_blank" rel="noopener noreferrer" className={`focus-ring underline underline-offset-4 hover:opacity-70 ${accent}`}>
                Research paper (DOI)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
