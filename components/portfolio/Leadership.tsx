export function Leadership() {
  return (
    <section id="leadership" className="bg-[#f8f6f0] px-6 py-12 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
        <div>
          <p className="section-kicker">Research Initiative</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-stone-950 md:text-5xl">
            Founder, EYLO AI
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-600">
            Building research infrastructure for turning early ideas into evidence-based projects.
          </p>
        </div>
        <article className="rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)] md:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900">
              AI-powered research and innovation platform
            </p>
            <a href="https://eylo.base44.app/" target="_blank" rel="noreferrer" className="rounded-full border border-emerald-950 bg-emerald-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-stone-950">
              Visit EYLO
            </a>
          </div>
          <p className="mt-5 text-base leading-8 text-stone-700 md:text-lg">
            EYLO AI is an AI-powered research and innovation platform designed to help transform ideas into evidence-based projects by connecting people with trusted research, collaborators, and funding opportunities.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-700 md:text-lg">
            Powered by EYRA, the platform reflects my broader interest in building tools that support research workflows, scientific discovery, and the transition from early ideas to well-grounded research initiatives.
          </p>
        </article>
      </div>
    </section>
  );
}
