const work = [
  {
    title: "DynNav",
    meta: "Independent Research Project · DUTH · 2025–Present",
    text:
      "DynNav is an independent research project developed under academic supervision at the Democritus University of Thrace. The project explores risk-aware navigation in dynamic environments through ROS2-based experimentation, reinforcement learning, multi-agent coordination, and adaptive decision-making methods under uncertainty.",
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
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-8">
        <nav className="flex items-center justify-between border-b border-stone-300 pb-6 text-sm text-stone-600">
          <a href="#top" className="font-medium text-stone-950">
            Panagiota Grosdouli
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#research" className="hover:text-[#4d7c0f]">Research</a>
            <a href="#work" className="hover:text-[#4d7c0f]">Work</a>
            <a href="#notes" className="hover:text-[#4d7c0f]">Notes</a>
            <a href="#contact" className="hover:text-[#4d7c0f]">Contact</a>
          </div>
        </nav>

        <section id="top" className="py-24 md:py-32">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#4d7c0f]">
            Robotics · Motion Prediction · Autonomous Systems
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl">
            Understanding motion, navigation, and decision making in dynamic environments.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-700">
            I am an Electrical & Computer Engineering student at Democritus University of Thrace, working on trajectory prediction, risk-aware robotic navigation, and machine learning for intelligent mobility systems.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="border border-stone-400 px-4 py-2 text-stone-950 hover:border-[#4d7c0f] hover:text-[#4d7c0f]">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="border border-stone-400 px-4 py-2 text-stone-950 hover:border-[#4d7c0f] hover:text-[#4d7c0f]">
              LinkedIn
            </a>
            <a href="#research" className="border border-stone-400 px-4 py-2 text-stone-950 hover:border-[#4d7c0f] hover:text-[#4d7c0f]">
              Current research
            </a>
          </div>
        </section>

        <section id="research" className="border-t border-stone-300 py-20">
          <div className="mb-10 flex items-end justify-between gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#4d7c0f]">Current Research</p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-950">Diploma Thesis</h2>
            </div>
            <p className="hidden text-sm text-stone-500 md:block">2025–2026</p>
          </div>

          <article className="max-w-4xl">
            <h3 className="text-3xl font-semibold tracking-tight text-stone-950">
              Trajectory Prediction of Vulnerable Road Users at Smart Intersections
            </h3>
            <p className="mt-6 text-lg leading-9 text-stone-700">
              This thesis studies the prediction of future motion for vulnerable road users in smart-intersection scenarios. The work is motivated by autonomous driving systems that must reason about pedestrians and other road users before making safe planning decisions. The focus is on motion forecasting, uncertainty, and data-driven modelling for intelligent transportation environments.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-stone-600 md:grid-cols-3">
              <div className="border border-stone-300 bg-stone-50 p-4">
                <p className="text-[#4d7c0f]">Institution</p>
                <p className="mt-2 text-stone-900">Democritus University of Thrace</p>
              </div>
              <div className="border border-stone-300 bg-stone-50 p-4">
                <p className="text-[#4d7c0f]">Area</p>
                <p className="mt-2 text-stone-900">Autonomous driving</p>
              </div>
              <div className="border border-stone-300 bg-stone-50 p-4">
                <p className="text-[#4d7c0f]">Methods</p>
                <p className="mt-2 text-stone-900">ML · Motion prediction · Data analysis</p>
              </div>
            </div>
          </article>
        </section>

        <section id="work" className="border-t border-stone-300 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#4d7c0f]">Ongoing Work</p>
          <div className="mt-10 space-y-12">
            {work.map((item) => (
              <article key={item.title} className="grid gap-6 md:grid-cols-[0.35fr_0.65fr]">
                <div>
                  <h3 className="text-2xl font-semibold text-stone-950">{item.title}</h3>
                  <p className="mt-2 text-sm text-stone-500">{item.meta}</p>
                </div>
                <div>
                  <p className="text-base leading-8 text-stone-700">{item.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="border border-stone-300 bg-stone-50 px-3 py-1 text-xs text-stone-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={item.link} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm text-[#4d7c0f] underline underline-offset-4">
                    GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-stone-300 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#4d7c0f]">Initiative</p>
          <div className="mt-8 grid gap-6 md:grid-cols-[0.35fr_0.65fr]">
            <div>
              <h2 className="text-2xl font-semibold text-stone-950">EYLO AI</h2>
              <p className="mt-2 text-sm text-stone-500">Founder · Early-stage idea</p>
            </div>
            <p className="text-base leading-8 text-stone-700">
              EYLO AI is an early-stage initiative focused on connecting researchers, engineers, and innovators across countries and disciplines. The goal is to explore a shared network for collaboration, research opportunities, and knowledge exchange without presenting the idea as a finished product before it matures.
            </p>
          </div>
        </section>

        <section id="notes" className="border-t border-stone-300 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#4d7c0f]">Notes</p>
          <h2 className="mt-3 text-3xl font-semibold text-stone-950">Research questions I am thinking about</h2>
          <div className="mt-8 divide-y divide-stone-300 border-y border-stone-300">
            {notes.map((note) => (
              <div key={note} className="py-5 text-stone-700 transition hover:text-[#4d7c0f]">
                {note}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-stone-300 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#4d7c0f]">Experience</p>
          <div className="mt-8 space-y-8">
            <article>
              <h3 className="text-2xl font-semibold text-stone-950">Robotics & Computer Vision Intern</h3>
              <p className="mt-2 text-sm text-stone-500">OZZIE Robotics · Jul–Aug 2025</p>
              <p className="mt-4 max-w-3xl leading-8 text-stone-700">
                Developed perception pipelines and contributed to robotic vision systems in an applied engineering environment.
              </p>
            </article>
          </div>
        </section>

        <section className="border-t border-stone-300 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#4d7c0f]">Education</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <article>
              <h3 className="text-2xl font-semibold text-stone-950">Electrical & Computer Engineering</h3>
              <p className="mt-2 text-sm text-stone-500">Democritus University of Thrace · 2020–2026</p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold text-stone-950">Artificial Intelligence for Robotics</h3>
              <p className="mt-2 text-sm text-stone-500">University of Ljubljana · AI Robotics Academy · 2025</p>
            </article>
          </div>
        </section>

        <section className="border-t border-stone-300 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#4d7c0f]">Skills</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="border border-stone-300 bg-stone-50 px-3 py-2 text-sm text-stone-700">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-stone-300 py-20">
          <h2 className="text-3xl font-semibold text-stone-950">Contact</h2>
          <p className="mt-4 max-w-3xl leading-8 text-stone-700">
            Open to research internships, engineering collaborations, and opportunities related to robotics, autonomous systems, machine learning, and intelligent transportation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="text-[#4d7c0f] underline underline-offset-4">GitHub</a>
            <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="text-[#4d7c0f] underline underline-offset-4">LinkedIn</a>
          </div>
        </section>
      </div>
    </main>
  );
}
