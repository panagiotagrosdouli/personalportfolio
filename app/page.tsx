const projects = [
  {
    title: "DynNav Research Framework",
    category: "Risk-Aware Robotics",
    status: "2025–Present",
    problem:
      "Autonomous navigation in dynamic environments where agents must adapt under uncertainty and changing risk conditions.",
    method:
      "ROS2-based framework with CVaR risk-aware planning, multi-agent coordination, reinforcement-learning rerouting, and simulation analytics.",
    outcome:
      "Built a Streamlit and Plotly dashboard to inspect navigation behaviour, rerouting decisions, and simulation metrics.",
    tech: ["ROS2", "Python", "Reinforcement Learning", "CVaR", "Plotly"],
    github: "https://github.com/PanagiotaGr",
  },
  {
    title: "Trajectory Prediction of Vulnerable Road Users",
    category: "Autonomous Driving Thesis",
    status: "Diploma Thesis",
    problem:
      "Predicting the future motion of pedestrians and other vulnerable road users at smart intersections for autonomous driving applications.",
    method:
      "Machine-learning approach focused on motion prediction, data analysis, and intelligent transportation scenarios.",
    outcome:
      "Diploma thesis topic connecting autonomous systems, traffic safety, and trajectory forecasting.",
    tech: ["Machine Learning", "Python", "Motion Prediction", "Autonomous Driving"],
    github: "https://github.com/PanagiotaGr",
  },
  {
    title: "F1 AI Forecasting Platform",
    category: "Applied Machine Learning",
    status: "2024–2025",
    problem:
      "Forecast Formula 1 race outcomes by combining performance history, telemetry, weather, and uncertainty-aware simulation.",
    method:
      "Machine-learning prediction pipeline using Elo ratings, weather modelling, FastF1 telemetry analysis, and Monte Carlo simulation.",
    outcome:
      "Created an interactive forecasting workflow for race analysis and scenario exploration.",
    tech: ["Python", "Scikit-Learn", "FastF1", "Pandas", "Streamlit"],
    github: "https://github.com/PanagiotaGr",
  },
];

const skills = {
  Programming: ["Python", "C/C++", "MATLAB"],
  Robotics: ["ROS2", "Motion Planning", "Autonomous Navigation", "Multi-Agent Systems"],
  "AI / ML": ["Reinforcement Learning", "Scikit-Learn", "Computer Vision", "Trajectory Prediction"],
  Tools: ["Git", "Linux", "Pandas", "NumPy", "Plotly", "Streamlit"],
};

const timeline = [
  {
    title: "Diploma in Electrical & Computer Engineering",
    meta: "Democritus University of Thrace · 2020–2026",
    details:
      "Thesis: Trajectory Prediction of Vulnerable Road Users at Smart Intersections.",
  },
  {
    title: "Robotics & Computer Vision Intern",
    meta: "OZZIE Robotics · Jul–Aug 2025",
    details:
      "Developed perception pipelines and contributed to robotic vision systems.",
  },
  {
    title: "Artificial Intelligence for Robotics",
    meta: "University of Ljubljana · AI Robotics Academy · 2025",
    details: "EQF Level 7–8 certification in AI and robotics.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_85%_5%,rgba(168,85,247,0.16),transparent_28%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:auto,auto,64px_64px,64px_64px]" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-slate-300">
        <a href="#top" className="font-bold tracking-wide text-white">
          Panagiota Grosdouli
        </a>
        <div className="hidden gap-6 md:flex">
          <a href="#research" className="transition hover:text-cyan-300">Research</a>
          <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
          <a href="#experience" className="transition hover:text-cyan-300">Experience</a>
          <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
        </div>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-cyan-300">
            Robotics · Autonomous Systems · Machine Learning
          </p>
          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
            Panagiota
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Grosdouli
            </span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Electrical & Computer Engineering student specializing in robotics,
            autonomous systems, and machine learning, with research work on
            risk-aware navigation and vulnerable road user trajectory prediction.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-cyan-300 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-200">
              View Research Projects
            </a>
            <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:-translate-y-1 hover:bg-white/10">
              LinkedIn
            </a>
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:-translate-y-1 hover:bg-white/10">
              GitHub
            </a>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Research profile</p>
          <h2 className="mt-4 text-3xl font-bold">Building intelligent systems that perceive, predict, plan, and adapt.</h2>
          <div className="mt-8 grid gap-4">
            {[
              ["Thesis", "Trajectory prediction at smart intersections"],
              ["Framework", "DynNav risk-aware robotic navigation"],
              ["Internship", "Robotics & computer vision at OZZIE Robotics"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">{label}</p>
                <p className="mt-2 text-slate-200">{value}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="research" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Research Direction</p>
            <h2 className="mt-4 text-4xl font-bold">Autonomous systems under uncertainty</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              My academic work focuses on intelligent robotic systems that must operate in dynamic environments, reason about uncertainty, and make safe decisions in real time.
            </p>
            <p>
              I am especially interested in autonomous navigation, vulnerable road user trajectory prediction, reinforcement learning, computer vision, and risk-aware planning for smart mobility systems.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Selected Work</p>
            <h2 className="mt-4 text-4xl font-bold">Research & Engineering Projects</h2>
          </div>
          <p className="max-w-xl text-slate-400">
            Projects are presented as compact case studies: problem, method, outcome, technologies, and source-code access.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group flex min-h-full flex-col rounded-3xl border border-white/10 bg-white/[0.055] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/60 hover:bg-white/[0.08]">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-cyan-300">{project.category}</p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{project.status}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>

              <div className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
                <p><span className="font-semibold text-white">Problem:</span> {project.problem}</p>
                <p><span className="font-semibold text-white">Method:</span> {project.method}</p>
                <p><span className="font-semibold text-white">Outcome:</span> {project.outcome}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>

              <a href={project.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950">
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Education & Experience</p>
          <h2 className="mt-4 text-4xl font-bold">Academic trajectory</h2>
        </div>
        <div className="grid gap-6">
          {timeline.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl">
              <p className="text-sm text-cyan-300">{item.meta}</p>
              <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[40px] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 backdrop-blur-2xl md:p-10">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Technical Skills</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
                <h3 className="font-bold text-white">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl md:p-12">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-4xl font-bold">Open to robotics, AI, and autonomous systems opportunities.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Interested in academic collaboration, research internships, and engineering projects at the intersection of robotics, machine learning, and intelligent transportation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-100">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-8 py-4 font-semibold transition hover:-translate-y-1 hover:bg-white/10">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
