const work = [
  {
    title: "DynNav",
    meta: "Independent Research Project · DUTH · 2025–Present",
    text:
      "DynNav investigates risk-aware robotic navigation in dynamic environments under academic supervision at the Democritus University of Thrace. The project connects ROS2-based experimentation, reinforcement learning, multi-agent coordination, and uncertainty-aware decision making for safer autonomous behaviour.",
    details: ["Institution: DUTH", "Status: Active", "Focus: Risk-aware navigation"],
    tech: ["ROS2", "Python", "CVaR", "Reinforcement Learning", "Multi-Agent Systems"],
    link: "https://github.com/PanagiotaGr",
  },
  {
    title: "F1 AI Forecasting Platform",
    meta: "Applied machine learning · 2024–2025",
    text:
      "A probabilistic forecasting platform for Formula 1 race outcomes using machine learning, Elo ratings, weather modelling, FastF1 telemetry analysis, and Monte Carlo simulation. The work demonstrates end-to-end experimental thinking: data collection, feature engineering, uncertainty modelling, and interactive scenario analysis.",
    details: ["Type: Engineering project", "Focus: Forecasting", "Output: Interactive analysis"],
    tech: ["Python", "Scikit-Learn", "FastF1", "Pandas", "Streamlit"],
    link: "https://github.com/PanagiotaGr",
  },
];

const notes = [
  {
    number: "01",
    title: "Why trajectory prediction matters for autonomous systems",
    desc: "Motion forecasting is a prerequisite for safe planning, interaction, and decision making in autonomous driving scenarios.",
  },
  {
    number: "02",
    title: "Risk-aware planning under uncertainty",
    desc: "Robots should reason about unsafe outcomes, not only optimize expected performance under average-case assumptions.",
  },
  {
    number: "03",
    title: "Human behaviour modelling in intelligent transportation",
    desc: "Pedestrians and vulnerable road users introduce uncertainty that makes real-world mobility systems difficult to model and deploy.",
  },
];

const skills = [
  "Python",
  "C/C++",
  "MATLAB",
  "ROS2",
  "Machine Learning",
  "Computer Vision",
  "Motion Planning",
  "Linux",
  "Git",
];

const sectionLabel = "text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700";
const sectionClass = "border-t border-stone-200 py-20 md:py-24";
const cardClass =
  "border border-stone-200 bg-white/75 p-6 shadow-[0_24px_80px_-55px_rgba(41,37,36,0.65)] transition duration-300 hover:-translate-y-1 hover:border-emerald-700/40 hover:shadow-[0_28px_90px_-50px_rgba(21,128,61,0.45)]";
const linkClass =
  "font-medium text-emerald-800 underline decoration-emerald-800/30 underline-offset-4 transition hover:text-emerald-950 hover:decoration-emerald-950";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-stone-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(21,128,61,0.13),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(68,64,60,0.09),transparent_28%)]" />

      <div className="mx-auto max-w-6xl px-6 py-8 md:px-8 lg:px-10">
        <nav className="sticky top-0 z-20 -mx-6 flex items-center justify-between border-b border-stone-200 bg-[#f7f4ed]/88 px-6 py-5 text-sm text-stone-600 backdrop-blur md:-mx-8 md:px-8 lg:-mx-10 lg:px-10">
          <a href="#top" className="font-semibold tracking-tight text-stone-950">
            Panagiota Grosdouli
          </a>
          <div className="hidden gap-7 md:flex">
            <a href="#research" className="transition hover:text-emerald-800">Research</a>
            <a href="#work" className="transition hover:text-emerald-800">Work</a>
            <a href="#notes" className="transition hover:text-emerald-800">Notes</a>
            <a href="#contact" className="transition hover:text-emerald-800">Contact</a>
          </div>
        </nav>

        <section id="top" className="grid gap-12 py-24 md:grid-cols-[1fr_0.42fr] md:items-start md:py-32">
          <div>
            <p className={sectionLabel}>
              Robotics · Motion Prediction · Autonomous Systems
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-stone-950 md:text-7xl md:leading-[0.95]">
              Researching motion, navigation, and uncertainty in autonomous systems.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
              Electrical & Computer Engineering student focused on trajectory prediction, risk-aware robotic navigation, and machine learning for intelligent mobility systems.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="border border-stone-300 bg-stone-950 px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-emerald-900">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="border border-stone-300 bg-white/70 px-5 py-3 text-stone-950 transition hover:-translate-y-0.5 hover:border-emerald-800 hover:text-emerald-900">
                LinkedIn
              </a>
              <a href="#research" className="border border-stone-300 bg-white/70 px-5 py-3 text-stone-950 transition hover:-translate-y-0.5 hover:border-emerald-800 hover:text-emerald-900">
                Research summary
              </a>
            </div>
          </div>

          <aside className="h-fit border border-stone-200 bg-white/75 p-7 text-sm shadow-[0_24px_80px_-55px_rgba(41,37,36,0.65)] backdrop-blur">
            <p className="font-semibold uppercase tracking-[0.25em] text-emerald-700">Current focus</p>
            <div className="mt-6 space-y-6">
              <div className="border-l border-stone-300 pl-4">
                <p className="text-stone-500">Thesis</p>
                <p className="mt-1 font-medium text-stone-950">Trajectory prediction at smart intersections</p>
              </div>
              <div className="border-l border-stone-300 pl-4">
                <p className="text-stone-500">Research project</p>
                <p className="mt-1 font-medium text-stone-950">DynNav risk-aware robotic navigation</p>
              </div>
              <div className="border-l border-stone-300 pl-4">
                <p className="text-stone-500">Experience</p>
                <p className="mt-1 font-medium text-stone-950">Robotics & computer vision internship</p>
              </div>
            </div>
          </aside>
        </section>

        <section id="research" className={sectionClass}>
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className={sectionLabel}>Featured Research</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">Diploma Thesis</h2>
            </div>
            <p className="hidden text-sm font-medium text-stone-500 md:block">2025–2026</p>
          </div>

          <article className="grid gap-8 md:grid-cols-[1fr_0.36fr]">
            <div className={cardClass}>
              <h3 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
                Trajectory Prediction of Vulnerable Road Users at Smart Intersections
              </h3>
              <p className="mt-6 text-lg leading-9 text-stone-700">
                This thesis studies future-motion prediction for vulnerable road users in smart-intersection scenarios. The work is motivated by autonomous driving systems that must anticipate pedestrian behaviour before making safe planning decisions. The focus is on motion forecasting, uncertainty, and data-driven modelling for intelligent transportation environments.
              </p>
              <a href="#contact" className={`mt-8 inline-block text-sm ${linkClass}`}>
                Discuss research direction →
              </a>
            </div>

            <div className="grid gap-3 text-sm text-stone-600">
              {[
                ["Institution", "Democritus University of Thrace"],
                ["Field", "Autonomous driving"],
                ["Methods", "ML · Motion prediction · Data analysis"],
              ].map(([label, value]) => (
                <div key={label} className="border border-stone-200 bg-white/75 p-5 shadow-[0_18px_60px_-50px_rgba(41,37,36,0.55)]">
                  <p className="font-medium text-emerald-700">{label}</p>
                  <p className="mt-2 text-stone-900">{value}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="work" className={sectionClass}>
          <p className={sectionLabel}>Selected Work</p>
          <div className="mt-10 space-y-8">
            {work.map((item) => (
              <article key={item.title} className={`${cardClass} grid gap-8 md:grid-cols-[0.32fr_0.68fr]`}>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-stone-950">{item.title}</h3>
                  <p className="mt-2 text-sm text-stone-500">{item.meta}</p>
                  <div className="mt-6 space-y-2 text-sm text-stone-600">
                    {item.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-base leading-8 text-stone-700">{item.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={item.link} target="_blank" rel="noreferrer" className={`mt-6 inline-block text-sm ${linkClass}`}>
                    GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <p className={sectionLabel}>Initiative</p>
          <div className={`${cardClass} mt-8 grid gap-6 md:grid-cols-[0.32fr_0.68fr]`}>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-950">EYLO AI</h2>
              <p className="mt-2 text-sm text-stone-500">Founder · Early-stage idea</p>
            </div>
            <p className="text-base leading-8 text-stone-700">
              EYLO AI is an early-stage initiative focused on connecting researchers, engineers, and innovators across countries and disciplines. The goal is to explore a shared network for collaboration, research opportunities, and knowledge exchange without presenting the idea as a finished product before it matures.
            </p>
          </div>
        </section>

        <section id="notes" className={sectionClass}>
          <p className={sectionLabel}>Notes</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">Research questions worth writing down</h2>
          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200 bg-white/50">
            {notes.map((note) => (
              <article key={note.title} className="grid gap-4 px-5 py-7 transition duration-300 hover:bg-white/80 md:grid-cols-[0.12fr_0.88fr]">
                <p className="text-sm font-medium text-emerald-700">{note.number}</p>
                <div>
                  <h3 className="text-lg font-semibold text-stone-950">{note.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{note.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <p className={sectionLabel}>Experience</p>
          <div className={`${cardClass} mt-8`}>
            <article>
              <h3 className="text-2xl font-semibold tracking-tight text-stone-950">Robotics & Computer Vision Intern</h3>
              <p className="mt-2 text-sm text-stone-500">OZZIE Robotics · Jul–Aug 2025</p>
              <p className="mt-5 max-w-3xl leading-8 text-stone-700">
                Developed perception pipelines and contributed to robotic vision systems in an applied engineering environment.
              </p>
            </article>
          </div>
        </section>

        <section className={sectionClass}>
          <p className={sectionLabel}>Education</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className={cardClass}>
              <h3 className="text-2xl font-semibold tracking-tight text-stone-950">Electrical & Computer Engineering</h3>
              <p className="mt-2 text-sm text-stone-500">Democritus University of Thrace · 2020–2026</p>
            </article>
            <article className={cardClass}>
              <h3 className="text-2xl font-semibold tracking-tight text-stone-950">Artificial Intelligence for Robotics</h3>
              <p className="mt-2 text-sm text-stone-500">University of Ljubljana · AI Robotics Academy · 2025</p>
            </article>
          </div>
        </section>

        <section className={sectionClass}>
          <p className={sectionLabel}>Skills</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="border border-stone-200 bg-white/75 px-4 py-2 text-sm font-medium text-stone-700 shadow-[0_14px_45px_-35px_rgba(41,37,36,0.55)] transition hover:-translate-y-0.5 hover:border-emerald-700/40 hover:text-emerald-900">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-stone-200 py-20 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">Contact</h2>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-stone-700">
            Open to research internships, engineering collaborations, and opportunities related to robotics, autonomous systems, machine learning, and intelligent transportation.
          </p>
          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className={linkClass}>GitHub</a>
            <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a>
          </div>
        </section>
      </div>
    </main>
  );
}
