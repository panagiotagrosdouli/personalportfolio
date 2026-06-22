const work = [
  {
    title: "DynNav",
    meta: "Risk-aware robotic navigation · 2025–Present",
    text:
      "A ROS2-based research framework for navigation in dynamic environments. The work explores CVaR-based risk-aware planning, multi-agent coordination, reinforcement-learning rerouting, and simulation analytics through Streamlit and Plotly.",
    tech: ["ROS2", "Python", "CVaR", "Reinforcement Learning", "Plotly"],
    link: "https://github.com/PanagiotaGr",
  },
  {
    title: "F1 AI Forecasting Platform",
    meta: "Applied machine learning · 2024–2025",
    text:
      "A forecasting platform for Formula 1 race outcomes using machine learning, Elo ratings, weather modelling, FastF1 telemetry analysis, and Monte Carlo simulation. The project focuses on probabilistic race analysis and interactive scenario exploration.",
    tech: ["Python", "Scikit-Learn", "FastF1", "Pandas", "Streamlit"],
    link: "https://github.com/PanagiotaGr",
  },
];

const notes = [
  "Why trajectory prediction matters for autonomous systems",
  "Risk-aware planning under uncertainty",
  "Human behaviour modelling in intelligent transportation",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-8">
        <nav className="flex items-center justify-between border-b border-zinc-800 pb-6 text-sm text-zinc-400">
          <a href="#top" className="font-medium text-zinc-100">
            Panagiota Grosdouli
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#research" className="hover:text-zinc-100">Research</a>
            <a href="#work" className="hover:text-zinc-100">Work</a>
            <a href="#notes" className="hover:text-zinc-100">Notes</a>
            <a href="#contact" className="hover:text-zinc-100">Contact</a>
          </div>
        </nav>

        <section id="top" className="py-24 md:py-32">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
            Robotics · Motion Prediction · Autonomous Systems
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-50 md:text-7xl">
            Understanding motion, navigation, and decision making in dynamic environments.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            I am an Electrical & Computer Engineering student at Democritus University of Thrace, working on trajectory prediction, risk-aware robotic navigation, and machine learning for intelligent mobility systems.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="border border-zinc-700 px-4 py-2 text-zinc-100 hover:border-zinc-100">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="border border-zinc-700 px-4 py-2 text-zinc-100 hover:border-zinc-100">
              LinkedIn
            </a>
            <a href="#research" className="border border-zinc-700 px-4 py-2 text-zinc-100 hover:border-zinc-100">
              Current research
            </a>
          </div>
        </section>

        <section id="research" className="border-t border-zinc-800 py-20">
          <div className="mb-10 flex items-end justify-between gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Current Research</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-50">Diploma Thesis</h2>
            </div>
            <p className="hidden text-sm text-zinc-500 md:block">2025–2026</p>
          </div>

          <article className="max-w-4xl">
            <h3 className="text-3xl font-semibold tracking-tight text-zinc-50">
              Trajectory Prediction of Vulnerable Road Users at Smart Intersections
            </h3>
            <p className="mt-6 text-lg leading-9 text-zinc-300">
              This thesis studies the prediction of future motion for vulnerable road users in smart-intersection scenarios. The work is motivated by autonomous driving systems that must reason about pedestrians and other road users before making safe planning decisions. The focus is on motion forecasting, uncertainty, and data-driven modelling for intelligent transportation environments.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-zinc-400 md:grid-cols-3">
              <div className="border border-zinc-800 p-4">
                <p className="text-zinc-500">Institution</p>
                <p className="mt-2 text-zinc-200">Democritus University of Thrace</p>
              </div>
              <div className="border border-zinc-800 p-4">
                <p className="text-zinc-500">Area</p>
                <p className="mt-2 text-zinc-200">Autonomous driving</p>
              </div>
              <div className="border border-zinc-800 p-4">
                <p className="text-zinc-500">Methods</p>
                <p className="mt-2 text-zinc-200">ML · Motion prediction · Data analysis</p>
              </div>
            </div>
          </article>
        </section>

        <section id="work" className="border-t border-zinc-800 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Ongoing Work</p>
          <div className="mt-10 space-y-12">
            {work.map((item) => (
              <article key={item.title} className="grid gap-6 md:grid-cols-[0.35fr_0.65fr]">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-50">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-500">{item.meta}</p>
                </div>
                <div>
                  <p className="text-base leading-8 text-zinc-300">{item.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={item.link} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm text-zinc-100 underline underline-offset-4">
                    GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Initiative</p>
          <div className="mt-8 grid gap-6 md:grid-cols-[0.35fr_0.65fr]">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-50">EYLO AI</h2>
              <p className="mt-2 text-sm text-zinc-500">Founder · Early-stage idea</p>
            </div>
            <p className="text-base leading-8 text-zinc-300">
              EYLO AI is an early-stage initiative focused on connecting researchers, engineers, and innovators across countries and disciplines. The goal is to explore a shared network for collaboration, research opportunities, and knowledge exchange without presenting the idea as a finished product before it matures.
            </p>
          </div>
        </section>

        <section id="notes" className="border-t border-zinc-800 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Notes</p>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-50">Research questions I am thinking about</h2>
          <div className="mt-8 divide-y divide-zinc-800 border-y border-zinc-800">
            {notes.map((note) => (
              <div key={note} className="py-5 text-zinc-300">
                {note}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Experience</p>
          <div className="mt-8 space-y-8">
            <article>
              <h3 className="text-2xl font-semibold text-zinc-50">Robotics & Computer Vision Intern</h3>
              <p className="mt-2 text-sm text-zinc-500">OZZIE Robotics · Jul–Aug 2025</p>
              <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
                Developed perception pipelines and contributed to robotic vision systems in an applied engineering environment.
              </p>
            </article>
          </div>
        </section>

        <section className="border-t border-zinc-800 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Education</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <article>
              <h3 className="text-2xl font-semibold text-zinc-50">Electrical & Computer Engineering</h3>
              <p className="mt-2 text-sm text-zinc-500">Democritus University of Thrace · 2020–2026</p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold text-zinc-50">Artificial Intelligence for Robotics</h3>
              <p className="mt-2 text-sm text-zinc-500">University of Ljubljana · AI Robotics Academy · 2025</p>
            </article>
          </div>
        </section>

        <section className="border-t border-zinc-800 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Skills</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="border border-zinc-800 px-3 py-2 text-sm text-zinc-300">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-zinc-800 py-20">
          <h2 className="text-3xl font-semibold text-zinc-50">Contact</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            Open to research internships, engineering collaborations, and opportunities related to robotics, autonomous systems, machine learning, and intelligent transportation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="underline underline-offset-4">GitHub</a>
            <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="underline underline-offset-4">LinkedIn</a>
          </div>
        </section>
      </div>
    </main>
  );
}
