import Link from "next/link";

const research = [
  {
    title: "Human motion prediction",
    text: "I study trajectory forecasting for pedestrians and vulnerable road users in traffic scenes. My current thesis uses this setting to ask how autonomous systems can anticipate human motion before deciding how to act.",
  },
  {
    title: "Robotic perception",
    text: "My robotics work connects SLAM, visual-inertial odometry, and sensor fusion with a focus on uncertainty-aware state estimation. I am interested in perception systems that expose confidence and failure modes, not only predictions.",
  },
  {
    title: "Navigation under uncertainty",
    text: "Through DynNav-style work, I explore how perception and prediction should affect downstream robot navigation, rerouting, and planning in partially known or dynamic environments.",
  },
];

const work = [
  {
    title: "Trajectory Prediction of Vulnerable Road Users",
    meta: "Diploma thesis · smart intersections · motion forecasting",
    text: "Forecasting pedestrian and vulnerable road-user motion so autonomous systems can reason before acting. This is the central research thread of my current profile.",
  },
  {
    title: "SafeCrossAI",
    meta: "Human-aware autonomy · crossing behavior · safety motivation",
    text: "A robotics-oriented prototype around human crossing behavior, prediction, and safer autonomous interaction in traffic scenes.",
  },
  {
    title: "DynNav",
    meta: "ROS 2 · dynamic navigation · planning under uncertainty",
    text: "Navigation and rerouting in changing environments, connecting uncertainty in perception to downstream robot behavior.",
  },
  {
    title: "SLAM, VIO, and Sensor Fusion",
    meta: "Robotic perception · state estimation · robustness",
    text: "Independent work on perception and localization pipelines for robots operating with noisy and incomplete sensing.",
  },
];

const agenda = [
  "How can robots forecast human motion before choosing an action?",
  "How should perception systems represent uncertainty and failure modes?",
  "How can prediction improve navigation around people?",
  "What makes an independent robotics project mature enough for publication?",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#171512]">
      <nav className="border-b border-stone-200 px-6 py-5 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-[-0.03em]">
            Panagiota Grosdouli
          </Link>
          <div className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
            <a href="#research" className="hover:text-stone-950">Research</a>
            <a href="#work" className="hover:text-stone-950">Work</a>
            <a href="#agenda" className="hover:text-stone-950">Agenda</a>
            <Link href="/cv" className="hover:text-stone-950">CV</Link>
            <Link href="/contact" className="hover:text-stone-950">Contact</Link>
          </div>
        </div>
      </nav>

      <header className="px-6 py-16 md:px-10 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_260px] md:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-stone-500">
              Robotics · Prediction · Perception · Planning
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Human-aware robotics from perception to prediction.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700">
              I am an MEng student in Electrical and Computer Engineering building a research profile around autonomous systems that understand uncertain scenes, forecast human motion, and plan more responsibly around people.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
              My current direction is shaped for robotics labs working at the intersection of perception, prediction, planning, and safe autonomy, including the kind of research ecosystem found in Zurich robotics groups.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <Link href="/research" className="border-b border-stone-900 pb-1 font-medium text-stone-950">Research statement</Link>
              <Link href="/projects" className="border-b border-stone-300 pb-1 text-stone-600 hover:text-stone-950">Projects</Link>
              <Link href="/phd-fit" className="border-b border-stone-300 pb-1 text-stone-600 hover:text-stone-950">PhD fit</Link>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="border-b border-stone-300 pb-1 text-stone-600 hover:text-stone-950">GitHub</a>
            </div>
          </div>
          <aside>
            <div className="aspect-[4/5] bg-stone-200 bg-cover bg-center" style={{ backgroundImage: "url('/profile.png')" }} />
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Current thesis: trajectory prediction of vulnerable road users at smart intersections.
            </p>
          </aside>
        </div>
      </header>

      <section id="research" className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl border-t border-stone-200 pt-10">
          <div className="grid gap-8 md:grid-cols-[180px_1fr]">
            <h2 className="font-serif text-3xl tracking-[-0.035em]">Research</h2>
            <div className="divide-y divide-stone-200">
              {research.map((item) => (
                <article key={item.title} className="py-7 first:pt-0">
                  <h3 className="font-serif text-3xl tracking-[-0.035em]">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-8 text-stone-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl border-t border-stone-200 pt-10">
          <div className="grid gap-8 md:grid-cols-[180px_1fr]">
            <h2 className="font-serif text-3xl tracking-[-0.035em]">Selected work</h2>
            <div className="divide-y divide-stone-200">
              {work.map((item) => (
                <article key={item.title} className="py-7 first:pt-0">
                  <h3 className="font-serif text-3xl tracking-[-0.035em]">{item.title}</h3>
                  <p className="mt-1 text-sm text-stone-500">{item.meta}</p>
                  <p className="mt-3 max-w-3xl text-base leading-8 text-stone-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="agenda" className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl border-t border-stone-200 pt-10">
          <div className="grid gap-8 md:grid-cols-[180px_1fr]">
            <h2 className="font-serif text-3xl tracking-[-0.035em]">Research agenda</h2>
            <ol className="space-y-4 text-base leading-8 text-stone-700">
              {agenda.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl border-t border-stone-200 pt-10">
          <div className="grid gap-8 md:grid-cols-[180px_1fr]">
            <h2 className="font-serif text-3xl tracking-[-0.035em]">Contact</h2>
            <div className="text-base leading-8 text-stone-700">
              <p>Email: <a href="mailto:panagros1@ee.duth.gr" className="underline underline-offset-4">panagros1@ee.duth.gr</a></p>
              <p>GitHub: <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="underline underline-offset-4">panagiotagrosdouli</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
