import Link from "next/link";

const researchThemes = [
  {
    number: "01",
    title: "Human Motion Prediction",
    text: "Forecasting how pedestrians and vulnerable road users move in shared traffic environments. This is the core of my current thesis and the anchor of my doctoral research direction.",
    evidence: "VRU trajectory forecasting · SafeCrossAI · smart intersections",
  },
  {
    number: "02",
    title: "Robotic Perception",
    text: "Perception systems for autonomy should not only estimate the world; they should communicate confidence, ambiguity, and failure modes.",
    evidence: "SLAM · VIO · sensor fusion · uncertainty-aware estimation",
  },
  {
    number: "03",
    title: "Navigation under Uncertainty",
    text: "Prediction becomes valuable when it changes how robots plan, reroute, and behave around dynamic agents in partially known environments.",
    evidence: "DynNav · risk-aware planning · ROS 2 navigation",
  },
];

const selectedWork = [
  {
    title: "VRU Trajectory Prediction",
    label: "Diploma thesis",
    text: "A forecasting problem at smart intersections, focused on how autonomous systems reason about pedestrians and vulnerable road users before acting.",
  },
  {
    title: "SafeCrossAI",
    label: "Human-aware autonomy",
    text: "A robotics-oriented research prototype around crossing behavior, prediction, and safer interaction with people in traffic scenes.",
  },
  {
    title: "DynNav",
    label: "Navigation and planning",
    text: "Dynamic navigation and rerouting under uncertainty, connecting perception limits to downstream robot behavior.",
  },
  {
    title: "SLAM / VIO / Sensor Fusion",
    label: "Robotic perception",
    text: "Independent work on state estimation and perception pipelines for robots that must operate with noisy, incomplete information.",
  },
];

const questions = [
  "How can robots anticipate human motion before they act?",
  "How should robotic perception represent its own uncertainty?",
  "How can prediction improve navigation decisions around people?",
  "What evidence makes an independent robotics project research-ready?",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-stone-950">
      <nav className="sticky top-0 z-40 border-b border-stone-300 bg-[#f7f3ea]/95 px-6 py-4 backdrop-blur md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-[-0.03em]">
            Panagiota Grosdouli
          </Link>
          <div className="hidden items-center gap-7 text-sm text-stone-600 md:flex">
            <a href="#research" className="transition hover:text-stone-950">Research</a>
            <a href="#work" className="transition hover:text-stone-950">Work</a>
            <a href="#agenda" className="transition hover:text-stone-950">Agenda</a>
            <Link href="/cv" className="transition hover:text-stone-950">CV</Link>
            <Link href="/contact" className="rounded-full border border-emerald-800/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800 transition hover:border-emerald-900 hover:text-emerald-950">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">
              MEng ECE · Robotics Research · Doctoral track
            </p>
            <h1 className="mt-6 max-w-5xl font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-8xl lg:text-9xl">
              Human-aware robotics from perception to prediction.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-stone-700 md:text-2xl md:leading-10">
              I am building a research profile around autonomous systems that perceive uncertain scenes, forecast human motion, and plan more responsibly around people.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/research" className="rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800">
                Research direction
              </Link>
              <Link href="/projects" className="rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-950">
                Research evidence
              </Link>
              <Link href="/phd-fit" className="rounded-full border border-emerald-800/30 px-5 py-3 text-sm font-medium text-emerald-900 transition hover:border-emerald-900">
                Doctoral fit
              </Link>
            </div>
          </div>

          <aside className="border-t border-stone-300 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="aspect-[4/5] rounded-[1.6rem] bg-stone-200 bg-cover bg-center shadow-sm ring-1 ring-stone-300" style={{ backgroundImage: "url('/profile.png')" }} />
            <div className="mt-6 space-y-5 text-sm leading-7 text-stone-700">
              <p className="font-serif text-3xl leading-tight tracking-[-0.04em] text-stone-950">
                Target direction: robotics labs working on perception, prediction, planning, and safe autonomy.
              </p>
              <div className="border-y border-stone-300 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
                Motion prediction · SLAM/VIO · Risk-aware navigation
              </div>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="block text-stone-600 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-950">
                github.com/panagiotagrosdouli
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="research" className="border-y border-stone-300 bg-[#fffaf0] px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.26em] text-emerald-800">Research focus</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.055em] md:text-7xl">
              A coherent path into robotics research.
            </h2>
          </div>
          <div className="divide-y divide-stone-300 border-y border-stone-300">
            {researchThemes.map((theme) => (
              <article key={theme.title} className="grid gap-6 py-8 md:grid-cols-[72px_1fr]">
                <p className="font-mono text-xs text-stone-500">{theme.number}</p>
                <div>
                  <h3 className="font-serif text-4xl leading-none tracking-[-0.045em]">{theme.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">{theme.text}</p>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-800">{theme.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 border-b border-stone-300 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.26em] text-emerald-800">Selected work</p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.92] tracking-[-0.055em] md:text-7xl">
                Projects as research evidence.
              </h2>
            </div>
            <Link href="/projects" className="text-sm font-medium text-stone-600 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-950">
              View full project archive
            </Link>
          </div>

          <div className="grid gap-px border-b border-stone-300 bg-stone-300 md:grid-cols-2">
            {selectedWork.map((work) => (
              <article key={work.title} className="bg-[#f7f3ea] p-7 md:p-9">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-800">{work.label}</p>
                <h3 className="mt-4 font-serif text-4xl leading-none tracking-[-0.045em]">{work.title}</h3>
                <p className="mt-5 text-sm leading-7 text-stone-700">{work.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="bg-stone-950 px-6 py-24 text-stone-100 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.26em] text-emerald-300">Research agenda</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.055em] md:text-7xl">
              Questions I want to pursue next.
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {questions.map((question, index) => (
              <div key={question} className="grid gap-6 py-6 md:grid-cols-[64px_1fr]">
                <p className="font-mono text-xs text-stone-500">0{index + 1}</p>
                <p className="font-serif text-3xl leading-tight tracking-[-0.035em] text-white">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-stone-300 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-stone-600">
            This site is being redesigned as an academic research profile for robotics doctoral applications, with a strategic fit for labs in perception, prediction, planning, and safe autonomy.
          </p>
          <div className="flex gap-4 text-sm text-stone-600">
            <a href="mailto:panagros1@ee.duth.gr" className="underline decoration-stone-300 underline-offset-4 transition hover:text-stone-950">Email</a>
            <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="underline decoration-stone-300 underline-offset-4 transition hover:text-stone-950">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
}
