const researchInterests = [
  "Trajectory Prediction",
  "Autonomous Driving",
  "Risk-Aware Planning",
  "Motion Forecasting",
  "Robotics",
  "Machine Learning",
];

const thesisHighlights = [
  ["Problem", "Forecasting vulnerable road-user motion in smart-intersection scenarios."],
  ["Research direction", "Trajectory prediction, uncertainty-aware modelling, and data-driven analysis."],
  ["Application", "Safer decision making for autonomous driving and intelligent transportation systems."],
];

const work = [
  {
    title: "DynNav",
    eyebrow: "Independent Research Initiative",
    meta: "Self-directed research project · 2025–Present",
    text:
      "DynNav explores risk-aware robotic navigation in dynamic environments. The project was shaped after academic discussion and developed independently, focusing on ROS2-based experimentation, CVaR-inspired risk reasoning, reinforcement learning, multi-agent coordination, and decision making under uncertainty.",
    details: ["Risk-aware navigation", "ROS2 experimentation", "Decision making under uncertainty"],
    tech: ["ROS2", "Python", "CVaR", "Reinforcement Learning", "Multi-Agent Systems"],
    link: "https://github.com/PanagiotaGr",
  },
  {
    title: "F1 AI Forecasting Platform",
    eyebrow: "Applied Machine Learning",
    meta: "Forecasting and simulation · 2024–2025",
    text:
      "A probabilistic forecasting platform for Formula 1 race outcomes using machine learning, Elo ratings, weather modelling, FastF1 telemetry analysis, and Monte Carlo simulation. The work demonstrates end-to-end experimental thinking: data collection, feature engineering, uncertainty modelling, and interactive scenario analysis.",
    details: ["Probabilistic forecasting", "Telemetry analysis", "Interactive simulation"],
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

const skillGroups = [
  {
    title: "Machine Learning",
    items: ["Machine Learning", "Computer Vision", "Scikit-Learn", "Data Analysis", "Forecasting"],
  },
  {
    title: "Robotics & Autonomy",
    items: ["ROS2", "Motion Planning", "Navigation", "Multi-Agent Systems", "Risk-Aware Decision Making"],
  },
  {
    title: "Engineering Tools",
    items: ["Python", "C/C++", "MATLAB", "Pandas", "NumPy", "Plotly", "Streamlit", "Linux", "Git"],
  },
];

const sectionLabel = "text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700";
const sectionClass = "border-t border-stone-200 py-24 md:py-32";
const cardClass =
  "border border-stone-200 bg-white/78 p-7 shadow-[0_30px_100px_-70px_rgba(28,25,23,0.75)] transition duration-300 hover:-translate-y-1 hover:border-emerald-800/35 hover:bg-white/90 hover:shadow-[0_32px_105px_-62px_rgba(21,128,61,0.38)]";
const linkClass =
  "font-medium text-emerald-800 underline decoration-emerald-800/30 underline-offset-4 transition hover:text-emerald-950 hover:decoration-emerald-950";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-stone-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_0%,rgba(21,128,61,0.12),transparent_28%),radial-gradient(circle_at_85%_8%,rgba(28,25,23,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.58),rgba(247,244,237,0))]" />

      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <nav className="sticky top-0 z-20 -mx-6 flex items-center justify-between border-b border-stone-200 bg-[#f7f4ed]/90 px-6 py-5 text-sm text-stone-600 backdrop-blur md:-mx-10 md:px-10 lg:-mx-12 lg:px-12">
          <a href="#top" className="font-semibold tracking-tight text-stone-950">
            Panagiota Grosdouli
          </a>
          <div className="hidden gap-7 md:flex">
            <a href="#research" className="transition hover:text-emerald-800">Research</a>
            <a href="#work" className="transition hover:text-emerald-800">Work</a>
            <a href="#experience" className="transition hover:text-emerald-800">Experience</a>
            <a href="#contact" className="transition hover:text-emerald-800">Contact</a>
          </div>
        </nav>

        <section id="top" className="grid min-h-[78vh] gap-14 py-24 md:grid-cols-[1fr_0.46fr] md:items-center md:py-32">
          <div>
            <p className={sectionLabel}>Autonomous Systems · Trajectory Prediction · Robotics</p>
            <h1 className="mt-8 max-w-5xl text-6xl font-semibold tracking-[-0.07em] text-stone-950 md:text-8xl md:leading-[0.88]">
              Panagiota Grosdouli
            </h1>
            <p className="mt-8 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] text-stone-900 md:text-5xl md:leading-[1.02]">
              Investigating how intelligent systems predict motion, reason under uncertainty, and make safer decisions.
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-650 md:text-xl md:leading-10">
              Research-oriented Electrical & Computer Engineering student focused on autonomous driving, vulnerable road-user trajectory prediction, and risk-aware robotic navigation.
            </p>

            <div className="mt-9 flex max-w-4xl flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span key={interest} className="border border-emerald-800/20 bg-white/75 px-3 py-1.5 text-xs font-semibold text-emerald-950 shadow-[0_14px_40px_-34px_rgba(21,128,61,0.7)]">
                  {interest}
                </span>
              ))}
            </div>

            <div className="mt-11 flex flex-wrap gap-3 text-sm">
              <a href="#research" className="border border-stone-950 bg-stone-950 px-5 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-emerald-950">
                Current research
              </a>
              <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="border border-stone-300 bg-white/80 px-5 py-3 font-medium text-stone-950 transition hover:-translate-y-0.5 hover:border-emerald-800 hover:text-emerald-900">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="border border-stone-300 bg-white/80 px-5 py-3 font-medium text-stone-950 transition hover:-translate-y-0.5 hover:border-emerald-800 hover:text-emerald-900">
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden border border-stone-200 bg-stone-950 p-8 text-white shadow-[0_36px_120px_-70px_rgba(0,0,0,0.75)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.28),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.09),transparent_45%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">Research signal</p>
              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-sm text-stone-400">Current thesis</p>
                  <p className="mt-2 text-2xl font-semibold leading-tight tracking-tight">Trajectory prediction at smart intersections</p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-6">
                  <div>
                    <p className="text-4xl font-semibold tracking-tight">2025</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-stone-400">Research track</p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold tracking-tight">ROS2</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-stone-400">Autonomy stack</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-stone-400">Independent initiative</p>
                  <p className="mt-2 text-lg font-medium leading-7">DynNav — risk-aware navigation, multi-agent coordination, and decision making under uncertainty.</p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="research" className={sectionClass}>
          <div className="mb-12 grid gap-5 md:grid-cols-[0.36fr_0.64fr] md:items-end">
            <div>
              <p className={sectionLabel}>Current Research</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl">Diploma thesis</h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-stone-650">
              The strongest part of this profile is a focused research direction: motion forecasting for autonomous systems in human-centered environments.
            </p>
          </div>

          <article className="grid gap-8 md:grid-cols-[1fr_0.42fr]">
            <div className="border border-stone-200 bg-white/82 p-8 shadow-[0_32px_100px_-72px_rgba(28,25,23,0.72)] md:p-10">
              <p className="text-sm font-medium text-emerald-800">2025–2026 · Democritus University of Thrace</p>
              <h3 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl md:leading-[0.98]">
                Trajectory Prediction of Vulnerable Road Users at Smart Intersections
              </h3>
              <p className="mt-8 max-w-4xl text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
                This thesis investigates future trajectory prediction for vulnerable road users in smart-intersection environments. The research focuses on motion forecasting, uncertainty-aware modelling, and data-driven methods that can support safer decision making in autonomous driving systems.
              </p>
              <a href="#contact" className={`mt-8 inline-block text-sm ${linkClass}`}>
                Discuss research direction →
              </a>
            </div>

            <div className="grid gap-3 text-sm text-stone-650">
              {thesisHighlights.map(([label, value]) => (
                <div key={label} className="border border-stone-200 bg-white/75 p-6 shadow-[0_20px_70px_-55px_rgba(41,37,36,0.58)]">
                  <p className="font-semibold uppercase tracking-[0.22em] text-emerald-700">{label}</p>
                  <p className="mt-3 text-base leading-7 text-stone-900">{value}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="work" className={sectionClass}>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={sectionLabel}>Research & Technical Work</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl">Selected work</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-stone-650">
              Projects are presented as evidence of research readiness: problem framing, implementation, experimentation, and technical communication.
            </p>
          </div>

          <div className="space-y-8">
            {work.map((item) => (
              <article key={item.title} className={`${cardClass} grid gap-8 md:grid-cols-[0.34fr_0.66fr] md:p-8`}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{item.eyebrow}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-stone-950">{item.title}</h3>
                  <p className="mt-3 text-sm text-stone-500">{item.meta}</p>
                  <div className="mt-7 space-y-2 text-sm text-stone-650">
                    {item.details.map((detail) => (
                      <p key={detail} className="border-l border-stone-300 pl-3">{detail}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-lg leading-9 text-stone-700">{item.text}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={item.link} target="_blank" rel="noreferrer" className={`mt-7 inline-block text-sm ${linkClass}`}>
                    GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className={sectionClass}>
          <div className="grid gap-8 md:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className={sectionLabel}>Experience</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl">Applied robotics</h2>
            </div>
            <div className={cardClass}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">Robotics & Computer Vision Internship</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-stone-950">OZZIE Robotics</h3>
              <p className="mt-2 text-sm text-stone-500">Jul–Aug 2025</p>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-stone-700">
                Developed perception pipelines and contributed to robotic vision systems in an applied engineering environment.
              </p>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="grid gap-8 md:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className={sectionLabel}>Education</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl">Training</h2>
            </div>
            <div className="grid gap-5">
              <article className={cardClass}>
                <h3 className="text-2xl font-semibold tracking-tight text-stone-950">Electrical & Computer Engineering</h3>
                <p className="mt-2 text-sm text-stone-500">Democritus University of Thrace · 2020–2026</p>
                <p className="mt-5 leading-8 text-stone-700">Diploma thesis on trajectory prediction of vulnerable road users at smart intersections.</p>
              </article>
              <article className={cardClass}>
                <h3 className="text-2xl font-semibold tracking-tight text-stone-950">Artificial Intelligence for Robotics</h3>
                <p className="mt-2 text-sm text-stone-500">University of Ljubljana · AI Robotics Academy · 2025</p>
              </article>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <p className={sectionLabel}>Technical Profile</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl">Skills</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className={cardClass}>
                <h3 className="text-xl font-semibold tracking-tight text-stone-950">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="notes" className={sectionClass}>
          <p className={sectionLabel}>Research Notes</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl">Questions I keep returning to</h2>
          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200 bg-white/50">
            {notes.map((note) => (
              <article key={note.title} className="grid gap-4 px-5 py-8 transition duration-300 hover:bg-white/80 md:grid-cols-[0.12fr_0.88fr]">
                <p className="text-sm font-semibold text-emerald-700">{note.number}</p>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-stone-950">{note.title}</h3>
                  <p className="mt-2 max-w-3xl leading-7 text-stone-650">{note.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <p className={sectionLabel}>Initiative</p>
          <div className={`${cardClass} mt-8 grid gap-6 md:grid-cols-[0.34fr_0.66fr]`}>
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-stone-950">EYLO AI</h2>
              <p className="mt-2 text-sm text-stone-500">Founder · Early-stage idea</p>
            </div>
            <p className="text-lg leading-9 text-stone-700">
              EYLO AI is an early-stage initiative focused on connecting researchers, engineers, and innovators across countries and disciplines. The goal is to explore a shared network for collaboration, research opportunities, and knowledge exchange without presenting the idea as a finished product before it matures.
            </p>
          </div>
        </section>

        <section id="contact" className="border-t border-stone-200 py-24 md:py-32">
          <p className={sectionLabel}>Contact</p>
          <h2 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-stone-950 md:text-7xl md:leading-[0.92]">
            Interested in autonomous systems, trajectory prediction, and research collaborations.
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
            Open to research internships, graduate opportunities, and engineering collaborations related to robotics, autonomous systems, machine learning, and intelligent transportation.
          </p>
          <div className="mt-10 flex flex-wrap gap-5 text-sm">
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className={linkClass}>GitHub</a>
            <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a>
          </div>
        </section>
      </div>
    </main>
  );
}
