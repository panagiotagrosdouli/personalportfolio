import { notes, skillGroups } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="bg-[#f8f6f0] px-6 py-12 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.42fr_0.58fr]">
        <div>
          <p className="section-kicker">Experience</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-stone-950 md:text-5xl">Applied robotics work</h2>
        </div>
        <article className="rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)] md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-900">Robotics & Computer Vision Intern</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">OZZIE Robotics</h3>
          <p className="mt-2 text-sm text-stone-500">Jul–Aug 2025</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
            Worked on perception pipelines and robotic vision systems in an applied engineering environment, strengthening my interest in perception, autonomy, and safe robotic decision making.
          </p>
        </article>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-[#f8f6f0] px-6 py-12 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Research Toolkit</p>
        <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-stone-950 md:text-5xl">Technical preparation for robotics research</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)]">
              <h3 className="text-lg font-semibold tracking-tight text-stone-950">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-650">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Notes() {
  return (
    <section id="notes" className="bg-[#f8f6f0] px-6 py-12 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Research Notes</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl tracking-[-0.035em] text-stone-950 md:text-5xl">Questions I keep returning to</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {notes.map((note) => (
            <article key={note.title} className="rounded-sm border border-stone-200 bg-white/84 p-6 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)] transition hover:-translate-y-1 hover:border-emerald-900/30">
              <h3 className="text-lg font-semibold leading-7 tracking-tight text-stone-950">{note.title}</h3>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-400">{note.date}</p>
              <p className="mt-4 text-sm leading-7 text-stone-650">{note.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="bg-[#f8f6f0] px-6 py-12 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.42fr_0.58fr]">
        <div>
          <p className="section-kicker">Education</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-stone-950 md:text-5xl">Academic training</h2>
        </div>
        <div className="grid gap-5">
          <article className="rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)]">
            <h3 className="text-2xl font-semibold tracking-tight text-stone-950">Electrical & Computer Engineering</h3>
            <p className="mt-2 text-sm text-stone-500">Democritus University of Thrace · 2020–2026</p>
            <p className="mt-5 leading-8 text-stone-700">Expected graduation: 2026. Diploma thesis on trajectory prediction of vulnerable road users at smart intersections.</p>
          </article>
          <article className="rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)]">
            <h3 className="text-2xl font-semibold tracking-tight text-stone-950">Artificial Intelligence for Robotics</h3>
            <p className="mt-2 text-sm text-stone-500">University of Ljubljana · AI Robotics Academy · 2025</p>
          </article>
        </div>
      </div>
    </section>
  );
}
