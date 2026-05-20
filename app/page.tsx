export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-400">
            Robotics · AI · Autonomous Systems
          </p>

          <h1 className="text-6xl font-black leading-tight md:text-8xl">
            Panagiota
            <span className="block text-cyan-400">Grosdouli</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Electrical & Computer Engineering student focused on autonomous
            navigation, trajectory prediction, machine learning, and intelligent
            systems operating under uncertainty.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              Explore Research
            </a>

            <a
              href="https://github.com/panagiotagrosdouli"
              target="_blank"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Research & Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "DynNav",
              desc: "Dynamic rerouting and autonomous navigation in unknown environments.",
            },
            {
              title: "Trajectory Prediction",
              desc: "Prediction models for vulnerable road users in autonomous driving systems.",
            },
            {
              title: "AI Decision Systems",
              desc: "Intelligent planning and uncertainty-aware robotic systems.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="mb-6 h-2 w-16 rounded-full bg-cyan-400" />

              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-10 backdrop-blur-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
            Research Interests
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {[
              "Autonomous Navigation",
              "Machine Learning",
              "Robotics",
              "Path Planning",
              "Trajectory Prediction",
              "AI Systems",
              "Optimization",
              "Computer Vision",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
