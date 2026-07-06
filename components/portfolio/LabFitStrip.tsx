const labs = ["Vision for Robotics", "Autonomous Systems", "Computer Vision", "Human-Aware Robotics", "Intelligent Transportation"];

const fit = [
  "trajectory forecasting",
  "visual perception",
  "uncertainty modeling",
  "risk-aware navigation",
  "reproducible experiments",
];

export function LabFitStrip() {
  return (
    <section className="bg-stone-950 px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Lab Fit</p>
            <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-white md:text-5xl">
              Built for robotics labs that value disciplined research.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-stone-300">
              The site is structured to help a professor quickly see the research question, technical direction, evidence, and next steps — not just a list of repositories.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {labs.map((lab) => (
                <span key={lab} className="rounded-full border border-white/10 bg-stone-950/60 px-3 py-1.5 text-xs text-stone-300">
                  {lab}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {fit.map((item) => (
                <div key={item} className="border-t border-white/10 pt-4 text-sm leading-6 text-stone-400">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
