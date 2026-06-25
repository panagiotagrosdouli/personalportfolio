export function Footer() {
  return (
    <footer id="contact" className="bg-[#fbfaf7] px-6 py-20 text-stone-950 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-stone-200 pt-12 md:grid-cols-[0.38fr_0.62fr] md:items-end">
        <div>
          <p className="font-serif text-3xl tracking-tight text-stone-950">Panagiota Grosdouli</p>
          <p className="mt-3 text-xs uppercase tracking-[0.26em] text-emerald-900">
            Trajectory Prediction · Autonomous Systems
          </p>
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-stone-950 md:text-6xl">
            Research at the intersection of prediction, autonomy, and safety.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-650 md:text-lg">
            Open to PhD opportunities, research internships, and collaborations related to robotics, autonomous systems, machine learning, and intelligent transportation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <a href="mailto:panagiota.grosdouli@gmail.com" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">Email</a>
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">GitHub</a>
            <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">LinkedIn</a>
          </div>
          <p className="mt-10 text-xs text-stone-400">© 2025 Panagiota Grosdouli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
