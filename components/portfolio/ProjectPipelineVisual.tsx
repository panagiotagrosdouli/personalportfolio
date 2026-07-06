import type { Project } from "@/data/projects";

function getPipeline(project: Project) {
  if (project.slug.includes("trajectory")) {
    return ["Smart Intersection", "Agent History", "Trajectory Forecast", "Uncertainty", "Safe Decision"];
  }

  if (project.slug.includes("vio") || project.slug.includes("segmentation")) {
    return ["Sensor Data", "Perception", "State / Scene Model", "Uncertainty", "Robotic Action"];
  }

  if (project.slug.includes("dynnav") || project.slug.includes("uav")) {
    return ["Environment", "Risk Model", "Planner", "Policy", "Safe Navigation"];
  }

  if (project.slug.includes("neuromorphic")) {
    return ["Stimulus", "Spiking Model", "Robot Response", "Behavior", "Evaluation"];
  }

  return ["Problem", "Method", "Experiment", "Analysis", "Next Step"];
}

export function ProjectPipelineVisual({ project }: { project: Project }) {
  const pipeline = getPipeline(project);

  return (
    <section className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Visual Pipeline</p>
          <h2 className="mt-3 font-serif text-4xl leading-none tracking-[-0.04em] text-white md:text-5xl">
            From input to research signal.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-stone-500">
          A simplified view of how this project converts observations into evaluation, insight, or autonomous behavior.
        </p>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-5">
        {pipeline.map((step, index) => (
          <div key={step} className="relative rounded-2xl border border-white/10 bg-stone-950/70 p-5">
            <p className="font-mono text-[10px] text-emerald-400">0{index + 1}</p>
            <p className="mt-4 min-h-12 text-sm font-semibold leading-6 text-stone-200">{step}</p>
            {index < pipeline.length - 1 && (
              <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-emerald-400/50 md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
