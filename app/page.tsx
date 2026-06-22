const projects = [
  {
    title: "DynNav",
    category: "Autonomous Navigation",
    status: "Research project",
    desc: "Dynamic rerouting for robots operating in unknown or changing environments, with emphasis on safe decisions under uncertainty.",
    impact: "Focus: path planning, uncertainty, adaptive navigation.",
    tech: ["Robotics", "Path Planning", "Optimization"],
    github: "https://github.com/panagiotagrosdouli",
  },
  {
    title: "Trajectory Prediction",
    category: "Intelligent Transportation",
    status: "Machine learning project",
    desc: "Prediction models for vulnerable road users in autonomous driving scenarios, connecting machine learning with mobility safety.",
    impact: "Focus: motion forecasting, risk-aware mobility, data-driven prediction.",
    tech: ["Machine Learning", "Computer Vision", "Python"],
    github: "https://github.com/panagiotagrosdouli",
  },
  {
    title: "AI Decision Systems",
    category: "Research Systems",
    status: "AI systems project",
    desc: "Planning and reasoning pipelines that combine prediction, optimization, and interpretable control decisions.",
    impact: "Focus: decision-making, explainability, intelligent control.",
    tech: ["AI", "Planning", "Uncertainty"],
    github: "https://github.com/panagiotagrosdouli",
  },
];

const skills = [
  "Autonomous Navigation",
  "Machine Learning",
  "Robotics",
  "Path Planning",
  "Trajectory Prediction",
  "AI Systems",
  "Optimization",
  "Computer Vision",
  "Research Writing",
  "Technical Communication",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.18),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-slate-300">
        <a href="#top" className="font-bold tracking-wide text-white">PG.</a>
        <div className="hidden gap-6 md:flex">
          <a href="#about" className="transition hover:text-cyan-300">About</a>
          <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
          <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
        </div>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-300">
            Robotics · AI · Autonomous Systems
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-8xl">
            Panagiota
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Grosdouli
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Electrical & Computer Engineering student building research-driven systems at the intersection of autonomous navigation, trajectory prediction, machine learning, and intelligent decision-making.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-cyan-300 px-8 py-4 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200">
              View Case Studies
            </a>

            <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:-translate-y-1 hover:bg-white/10">
              GitHub
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Portfolio standard</p>
          <h2 className="mt-4 text-3xl font-bold">Professional project presentation, not just a simple list.</h2>
          <div className="mt-8 grid gap-4">
            {["Problem-driven project cards", "GitHub link per project", "Clear research and technical focus"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">About</p>
            <h2 className="mt-4 text-4xl font-bold">Research-minded engineering portfolio</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              My work focuses on algorithms and software for autonomous systems, especially where perception, prediction, planning, and uncertainty need to be combined into reliable behaviour.
            </p>
            <p>
              This portfolio presents selected academic and technical projects with clear problem definitions, reproducible methods, and practical engineering outcomes.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Selected Work</p>
            <h2 className="mt-4 text-4xl font-bold">Project Case Studies</h2>
          </div>
          <p className="max-w-xl text-slate-400">
            Each card presents the project like a professional portfolio item: context, technical focus, tools, and a direct GitHub link.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group flex min-h-full flex-col rounded-3xl border border-white/10 bg-white/[0.055] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/60">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-cyan-300">{project.category}</p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{project.status}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.desc}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{project.impact}</p>
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

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[40px] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-10 backdrop-blur-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Skills</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {skills.map((item) => (
              <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm text-cyan-50">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl md:p-12">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-4xl font-bold">Let&apos;s connect research with real systems.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Open to academic collaboration, research projects, and technical work related to robotics, AI, autonomous systems, and intelligent mobility.
          </p>
          <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-100">
            GitHub Profile
          </a>
        </div>
      </section>
    </main>
  );
}
