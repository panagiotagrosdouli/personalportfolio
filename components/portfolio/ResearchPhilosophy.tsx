export function ResearchPhilosophy() {
  return (
    <section className="border-y border-white/10 bg-stone-950 px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Philosophy</p>
        <blockquote className="max-w-6xl font-serif text-5xl leading-[1.02] tracking-[-0.055em] text-white md:text-7xl">
          I am interested in autonomous systems that understand uncertainty before they make decisions.
        </blockquote>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <p className="text-sm leading-7 text-stone-400">
            Prediction matters when action depends on what may happen next, not only on what is visible now.
          </p>
          <p className="text-sm leading-7 text-stone-400">
            Evaluation matters when average performance hides unsafe edge cases and brittle behavior.
          </p>
          <p className="text-sm leading-7 text-stone-400">
            Communication matters because research becomes useful only when assumptions, failures, and limits are clear.
          </p>
        </div>
      </div>
    </section>
  );
}
