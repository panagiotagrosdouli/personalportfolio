import Link from "next/link";

const accent = "text-[#245c49]";

const selectedResearch = [
  {
    title: "Diploma Thesis",
    question: "How can autonomous systems predict vulnerable road-user motion before making safety-critical decisions?",
    contribution: "Trajectory prediction and uncertainty-aware evaluation for smart-intersection scenarios.",
    status: "In progress",
    href: null,
  },
  {
    title: "DynNav",
    question: "How should robots re-plan when the environment changes around moving humans?",
    contribution: "Dynamic navigation and rerouting in unknown environments with obstacle avoidance and planning under uncertainty.",
    status: "Public repository",
    href: "https://github.com/panagiotagrosdouli/DynNav-Dynamic-Navigation-Rerouting-in-Unknown-Environments",
  },
  {
    title: "Self-Healing VIO",
    question: "How can visual-inertial odometry recover from degraded state estimation during UAV navigation?",
    contribution: "A robust UAV navigation direction focused on resilient visual-inertial estimation and failure-aware recovery.",
    status: "Public repository",
    href: "https://github.com/panagiotagrosdouli/Self-Healing-VIO-for-Robust-UAV-Navigation",
  },
  {
    title: "PC-FMCW VRU Framework",
    question: "How can sensing pipelines support vulnerable road-user analysis in traffic environments?",
    contribution: "A framework direction for point-cloud/FMCW-style perception and vulnerable road-user scene analysis.",
    status: "Repository work",
    href: null,
  },
  {
    title: "CASim",
    question: "How can parametric cellular automata support controlled simulation experiments?",
    contribution: "A simulator-oriented project for exploring rule-based dynamics, scenario generation, and computational modeling.",
    status: "Repository work",
    href: null,
  },
  {
    title: "Probabilistic Search Simulations",
    question: "How can uncertainty be represented when the target state or location is only partially observable?",
    contribution: "Simulation work around probabilistic search, decision support, and uncertainty-aware exploration.",
    status: "Repository work",
    href: null,
  },
];

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="grid gap-10 border-t border-stone-300 pt-10 md:grid-cols-[220px_1fr]">
        <div>
          <p className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${accent}`}>{label}</p>
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-stone-950 md:text-5xl">{title}</h2>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950 selection:bg-[#d7ede4] selection:text-[#12372a]">
      <nav className="sticky top-0 z-40 border-b border-stone-200 bg-[#fbfaf7]/92 px-5 py-4 backdrop-blur-md md:px-8" aria-label="Main navigation">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight text-stone-950 transition hover:text-[#245c49]">
            Panagiota Grosdouli
          </Link>
          <div className="hidden items-center gap-7 text-sm text-stone-600 md:flex">
            <Link href="#research" className="transition hover:text-stone-950">Research</Link>
            <Link href="#current" className="transition hover:text-stone-950">Current Work</Link>
            <Link href="#selected" className="transition hover:text-stone-950">Projects</Link>
            <Link href="/cv" className="transition hover:text-stone-950">CV</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="grid min-h-[82vh] gap-14 py-20 md:grid-cols-[1fr_340px] md:items-center lg:py-28">
          <div>
            <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${accent}`}>Robotics · Human Motion · Safe Autonomy</p>
            <h1 className="mt-8 max-w-4xl font-serif text-6xl leading-[0.95] tracking-[-0.06em] text-stone-950 md:text-8xl">
              Panagiota Grosdouli
            </h1>
            <p className="mt-8 max-w-3xl text-3xl leading-tight tracking-[-0.035em] text-stone-950 md:text-4xl">
              Research software for safer autonomous systems.
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600">
              Building and documenting projects in human-aware robotics, trajectory prediction, visual-inertial estimation, simulation, and uncertainty-aware decision making.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium">
              <Link href="#research" className="border border-stone-950 px-5 py-3 text-stone-950 transition hover:bg-stone-950 hover:text-white">Research</Link>
              <Link href="#selected" className="border border-stone-300 px-5 py-3 text-stone-700 transition hover:border-stone-950 hover:text-stone-950">Projects</Link>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="border border-stone-300 px-5 py-3 text-stone-700 transition hover:border-stone-950 hover:text-stone-950">GitHub</a>
            </div>
          </div>
          <div>
            <img src="profile.png" alt="Portrait of Panagiota Grosdouli" className="aspect-[4/5] w-full object-cover grayscale" />
            <p className="mt-5 border-l border-stone-400 pl-4 text-sm leading-6 text-stone-600">
              MEng Electrical & Computer Engineering · research direction in human-aware robotics, prediction, perception, and planning under uncertainty.
            </p>
          </div>
        </header>

        <Section id="research" label="Research Direction" title="Autonomy should reason about people, uncertainty, and failure before acting.">
          <div className="max-w-3xl space-y-6 text-lg leading-9 text-stone-700">
            <p>
              My work is organized around autonomous systems as coupled perception, prediction, planning, and simulation problems. The goal is not only to build demos, but to produce research software that makes assumptions visible and supports systematic evaluation.
            </p>
            <p>
              The projects below connect trajectory prediction, visual-inertial estimation, dynamic navigation, cellular automata simulation, and probabilistic search into a coherent technical direction: robust decision making under uncertainty.
            </p>
          </div>
        </Section>

        <Section id="current" label="Current Research" title="Trajectory prediction and uncertainty-aware autonomy for vulnerable road users.">
          <div className="grid gap-10 md:grid-cols-[1fr_260px]">
            <div className="space-y-6 text-base leading-8 text-stone-700">
              <p>
                The current thesis work focuses on forecasting pedestrian and vulnerable road-user motion in traffic scenes where autonomous systems must make decisions before the future trajectory is fully observable.
              </p>
              <p>
                This direction is supported by related GitHub work in dynamic navigation, sensing frameworks, simulation, and robust state estimation. The portfolio presents those repositories as research questions rather than as isolated software demos.
              </p>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="inline-flex text-sm font-semibold text-[#245c49] underline-offset-4 hover:underline">
                View GitHub profile
              </a>
            </div>
            <div className="border-t border-stone-300 pt-5 text-sm leading-7 text-stone-600 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <p className="font-semibold text-stone-950">Focus</p>
              <p className="mt-2">Trajectory prediction, robust perception, smart intersections, dynamic navigation.</p>
              <p className="mt-6 font-semibold text-stone-950">Methods</p>
              <p className="mt-2">Simulation, motion forecasting, VIO, point-cloud sensing, planning under uncertainty.</p>
            </div>
          </div>
        </Section>

        <Section id="selected" label="Selected Projects" title="GitHub projects presented as research contributions.">
          <div className="divide-y divide-stone-300">
            {selectedResearch.map((item) => (
              <article key={item.title} className="grid gap-6 py-8 md:grid-cols-[190px_1fr]">
                <div>
                  <h3 className="font-serif text-2xl tracking-[-0.03em] text-stone-950">{item.title}</h3>
                  <p className={`mt-2 text-xs font-semibold uppercase tracking-[0.2em] ${accent}`}>{item.status}</p>
                </div>
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Research question</p>
                  <p className="mt-2 text-lg leading-8 text-stone-800">{item.question}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Technical contribution</p>
                  <p className="mt-2 text-base leading-8 text-stone-700">{item.contribution}</p>
                  {item.href && (
                    <a href={item.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#245c49] underline-offset-4 hover:underline">
                      Repository
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <footer className="border-t border-stone-300 py-10 text-sm text-stone-500">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© Panagiota Grosdouli</p>
            <div className="flex gap-5">
              <a href="mailto:panagros1@ee.duth.gr" className="transition hover:text-stone-950">Email</a>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="transition hover:text-stone-950">GitHub</a>
              <Link href="/cv" className="transition hover:text-stone-950">CV</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
