export function Footer() {
  return (
    <footer id="contact" className="bg-[#11130f] px-6 py-20 text-white md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-12 md:grid-cols-[0.38fr_0.62fr] md:items-end">
        <div>
          <p className="font-serif text-3xl tracking-tight text-white">Panagiota Grosdouli</p>
          <p className="mt-3 text-xs uppercase tracking-[0.26em] text-emerald-200/80">
            Trajectory Prediction · Autonomous Systems
          </p>
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
            Interested in research at the intersection of prediction, autonomy, and safety.
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
