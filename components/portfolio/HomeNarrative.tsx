export function HomeNarrative() {
  return (
    <section className="bg-[#fbfaf7] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl border-y border-stone-200 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <div>
            <p className="section-kicker">Research Direction</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-7xl">
              Safe autonomy begins with understanding motion.
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
            <p>
              My work is centered on autonomous systems that operate around people: systems that must perceive dynamic scenes, anticipate human motion, and make decisions under uncertainty.
            </p>
            <p>
              This connects my current thesis on trajectory prediction with robotics projects in visual-inertial navigation, risk-aware planning, and intelligent transportation.
            </p>
            <div className="grid gap-4 pt-4 md:grid-cols-3">
              <a href="/research" className="border-t border-stone-300 pt-5 text-sm font-medium text-stone-900 transition hover:border-emerald-900 hover:text-emerald-900">
                Research focus →
              </a>
              <a href="/projects" className="border-t border-stone-300 pt-5 text-sm font-medium text-stone-900 transition hover:border-emerald-900 hover:text-emerald-900">
                Technical work →
              </a>
              <a href="/cv" className="border-t border-stone-300 pt-5 text-sm font-medium text-stone-900 transition hover:border-emerald-900 hover:text-emerald-900">
                Academic profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
