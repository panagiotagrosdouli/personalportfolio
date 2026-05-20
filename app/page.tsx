export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300">
          AI · Robotics · Dynamic Navigation
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Panagiota Grosdouli
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Research portfolio focused on autonomous navigation, dynamic rerouting,
          unknown environments, robotics, and intelligent decision-making systems.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Selected Research Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "DynNav",
              text: "Dynamic navigation and rerouting in unknown environments using adaptive planning methods.",
            },
            {
              title: "Autonomous Systems",
              text: "Robotics-oriented decision-making under uncertainty and partial environmental knowledge.",
            },
            {
              title: "AI Path Planning",
              text: "Intelligent route optimization for changing, complex, and uncertain spaces.",
            },
          ].map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20"
            >
              <h3 className="text-xl font-semibold text-cyan-200">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Research Focus</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Dynamic Rerouting",
            "Path Planning",
            "Autonomous Navigation",
            "Unknown Environments",
            "Robotics",
            "Artificial Intelligence",
            "Optimization",
            "Decision Systems",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-8">
          <h2 className="text-3xl font-bold">Let&apos;s connect</h2>
          <p className="mt-4 text-slate-300">
            Available for academic collaboration, research discussions, and AI/robotics projects.
          </p>
        </div>
      </section>
    </main>
  );
}
