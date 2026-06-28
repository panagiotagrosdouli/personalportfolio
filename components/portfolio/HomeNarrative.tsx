export function HomeNarrative() {
  return (
    <section className="bg-[#fbfaf7] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl border-y border-stone-200 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <div>
            <p className="section-kicker">Research Direction</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-7xl">
              Safe autonomy begins with anticipating people.
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
            <p>
              I study autonomous systems that need to read dynamic scenes, forecast human motion, and act safely around people.
            </p>
            <p>
              My work connects trajectory prediction, visual-inertial navigation, risk-aware planning, and intelligent transportation into one robotics research path.
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
