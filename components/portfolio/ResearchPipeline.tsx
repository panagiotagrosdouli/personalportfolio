const steps = [
  {
    title: "Sensors",
    text: "Cameras, inertial signals, scene data, or smart-intersection observations become the input to the system.",
  },
  {
    title: "Perception",
    text: "The system extracts structure from the scene: agents, motion, semantics, state estimates, or spatial context.",
  },
  {
    title: "Prediction",
    text: "Possible future trajectories are estimated instead of assuming that one deterministic future is enough.",
  },
  {
    title: "Uncertainty",
    text: "The model should expose when it is unsure, where failures may occur, and what assumptions are fragile.",
  },
  {
    title: "Risk",
    text: "Prediction quality is connected to downstream consequences such as near misses, collisions, or unsafe actions.",
  },
  {
    title: "Action",
    text: "A safer autonomous system acts only after reasoning about people, context, and uncertainty.",
  },
];

export function ResearchPipeline() {
  return (
    <section className="bg-stone-950 px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Pipeline</p>
            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.055em] text-white md:text-6xl">
              Perception to safe action.
            </h2>
            <p className="mt-6 text-sm leading-7 text-stone-400">
              A compact diagram of the research thread connecting computer vision, prediction, uncertainty, and autonomous decision making.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="group relative rounded-2xl border border-white/10 bg-stone-950/70 p-5 transition hover:border-emerald-400/50 hover:bg-stone-900">
                <p className="font-mono text-[10px] text-emerald-400">0{index + 1}</p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                <p className="mt-3 text-xs leading-6 text-stone-500 transition group-hover:text-stone-400">{step.text}</p>
                {index < steps.length - 1 && (
                  <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-emerald-400/40 lg:block" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
