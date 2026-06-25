export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#12150f] px-6 py-12 text-white md:px-10 lg:px-12">
      <div className="absolute bottom-0 left-6 hidden text-7xl opacity-90 md:block" aria-hidden="true">
        🐈‍⬛
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.45fr_0.55fr] md:items-end">
        <div className="md:pl-28">
          <p className="text-sm font-medium text-white/55">Thanks for stopping by.</p>
          <p className="mt-2 text-xs uppercase tracking-[0.26em] text-emerald-200/80">Academic research portfolio</p>
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
            Interested in autonomous systems, trajectory prediction, and research collaborations.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-lg">
            Open to research internships, graduate opportunities, and engineering collaborations related to robotics, autonomous systems, machine learning, and intelligent transportation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <a href="mailto:panagiota.grosdouli@gmail.com" className="rounded-full border border-white/18 px-5 py-3 text-white/88 transition hover:border-emerald-200 hover:text-emerald-100">Email</a>
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="rounded-full border border-white/18 px-5 py-3 text-white/88 transition hover:border-emerald-200 hover:text-emerald-100">GitHub</a>
            <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="rounded-full border border-white/18 px-5 py-3 text-white/88 transition hover:border-emerald-200 hover:text-emerald-100">LinkedIn</a>
          </div>
          <p className="mt-10 text-xs text-white/42">© 2025 Panagiota Grosdouli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
