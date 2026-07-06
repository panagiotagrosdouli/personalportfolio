import Link from "next/link";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#selected-work" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "#contact" },
];

const researchThemes = [
  {
    title: "Human Motion Prediction",
    text: "Trajectory forecasting for pedestrians, cyclists, and other vulnerable road users in traffic scenes, with emphasis on multi-modal futures and uncertainty-aware evaluation.",
  },
  {
    title: "Robotic Perception",
    text: "Perception and localization pipelines for robots, including SLAM, visual-inertial odometry, and sensor fusion under noisy or incomplete sensing.",
  },
  {
    title: "Navigation under Uncertainty",
    text: "Navigation and rerouting in dynamic environments where perception, prediction, and planning must remain connected rather than treated as isolated modules.",
  },
  {
    title: "Safe Human-Aware Autonomy",
    text: "Autonomous systems that reason about people before acting, especially in shared spaces such as smart intersections and human-robot environments.",
  },
];

const selectedWork = [
  {
    title: "Trajectory Prediction of Vulnerable Road Users",
    meta: "Diploma thesis · smart intersections · motion forecasting",
    text: "Current thesis work on forecasting vulnerable road-user motion so autonomous systems can anticipate human behavior before committing to an action.",
    href: "/projects/trajectory-prediction-vrus",
  },
  {
    title: "SafeCrossAI",
    meta: "Human-aware autonomy · crossing behavior · intelligent intersections",
    text: "Prototype work centered on human crossing behavior, perception, and safer autonomous interaction in traffic scenes.",
    href: "/projects/safecrossai",
  },
  {
    title: "DynNav",
    meta: "ROS 2 · dynamic navigation · planning under uncertainty",
    text: "Navigation and rerouting work in changing environments, connecting uncertainty in perception to downstream robot behavior.",
    href: "/projects/dynnav",
  },
  {
    title: "SLAM, VIO, and Sensor Fusion",
    meta: "Robotic perception · state estimation · robustness",
    text: "Independent robotics work on perception and localization pipelines for systems operating with noisy and incomplete sensing.",
    href: "/projects",
  },
];

const agenda = [
  "How can robots forecast human motion before selecting an action?",
  "How should perception systems expose uncertainty, confidence, and failure modes to planning modules?",
  "How can prediction improve navigation around people in dynamic environments?",
  "How can early-stage robotics prototypes be evaluated rigorously enough to become publishable research?",
];

const publications = [
  {
    title: "Trajectory Prediction of Vulnerable Road Users at Smart Intersections",
    status: "Diploma thesis in preparation",
    text: "Current research thread focused on motion forecasting, uncertainty, and safety-relevant evaluation for autonomous systems.",
  },
  {
    title: "Selected robotics project write-ups",
    status: "Manuscripts and technical notes in preparation",
    text: "Ongoing effort to document SafeCrossAI, DynNav, and perception-related work as reproducible research evidence.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#161411]">
      <header className="border-b border-stone-200/80 px-6 md:px-10 lg:px-12">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 py-5" aria-label="Main navigation">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-[-0.035em] text-stone-950">
            Panagiota Grosdouli
          </Link>
          <div className="hidden items-center gap-7 text-sm text-stone-600 md:flex">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-emerald-900">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_280px] md:items-start">
          <div>
            <SectionLabel>Robotics · Prediction · Perception · Safe autonomy</SectionLabel>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-stone-950 md:text-7xl">
              Human-aware robotics from perception to prediction.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-stone-800">
              I study how autonomous systems can perceive uncertain scenes, forecast human motion, and plan more safely around people.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-650 text-stone-700">
              I am an MEng Electrical &amp; Computer Engineering student building a research profile around human-aware robotics, trajectory prediction, robotic perception, uncertainty-aware navigation, and safe autonomous systems. My current work focuses on trajectory prediction of vulnerable road users at smart intersections.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link href="/research" className="border-b border-emerald-800 pb-1 font-medium text-emerald-900 hover:text-stone-950">
                Research statement
              </Link>
              <Link href="/projects" className="border-b border-stone-300 pb-1 text-stone-600 hover:text-stone-950">
                Projects
              </Link>
              <Link href="/phd-fit" className="border-b border-stone-300 pb-1 text-stone-600 hover:text-stone-950">
                PhD fit
              </Link>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="border-b border-stone-300 pb-1 text-stone-600 hover:text-stone-950">
                GitHub
              </a>
            </div>
          </div>
          <aside className="md:pt-2">
            <img
              src="profile.png"
              alt="Portrait of Panagiota Grosdouli"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
            <p className="mt-4 border-t border-stone-200 pt-4 text-sm leading-7 text-stone-600">
              Current thesis: trajectory prediction of vulnerable road users at smart intersections.
            </p>
          </aside>
        </div>
      </section>

      <section id="research" className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl border-t border-stone-200 pt-10">
          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
            <div>
              <SectionLabel>Research</SectionLabel>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] text-stone-950">Themes</h2>
            </div>
            <div className="divide-y divide-stone-200">
              {researchThemes.map((item) => (
                <article key={item.title} className="grid gap-3 py-7 first:pt-0 md:grid-cols-[260px_1fr]">
                  <h3 className="font-serif text-3xl leading-tight tracking-[-0.035em] text-stone-950">{item.title}</h3>
                  <p className="max-w-3xl text-base leading-8 text-stone-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl border-t border-stone-200 pt-10">
          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] text-stone-950">Research evidence</h2>
            </div>
            <div className="divide-y divide-stone-200">
              {selectedWork.map((item) => (
                <article key={item.title} className="py-7 first:pt-0">
                  <div className="grid gap-3 md:grid-cols-[260px_1fr]">
                    <div>
                      <h3 className="font-serif text-3xl leading-tight tracking-[-0.035em] text-stone-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-stone-500">{item.meta}</p>
                    </div>
                    <div>
                      <p className="max-w-3xl text-base leading-8 text-stone-700">{item.text}</p>
                      <Link href={item.href} className="mt-4 inline-block text-sm text-emerald-900 underline decoration-emerald-900/30 underline-offset-4 hover:text-stone-950">
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="agenda" className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl border-t border-stone-200 pt-10">
          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
            <div>
              <SectionLabel>Research agenda</SectionLabel>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] text-stone-950">Open questions</h2>
            </div>
            <ol className="divide-y divide-stone-200 border-y border-stone-200 text-base leading-8 text-stone-700">
              {agenda.map((item, index) => (
                <li key={item} className="grid gap-4 py-5 md:grid-cols-[72px_1fr]">
                  <span className="font-serif text-3xl text-emerald-900">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="publications" className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl border-t border-stone-200 pt-10">
          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
            <div>
              <SectionLabel>Publications / thesis</SectionLabel>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] text-stone-950">Current status</h2>
            </div>
            <div className="divide-y divide-stone-200">
              {publications.map((item) => (
                <article key={item.title} className="grid gap-3 py-7 first:pt-0 md:grid-cols-[260px_1fr]">
                  <div>
                    <h3 className="font-serif text-3xl leading-tight tracking-[-0.035em] text-stone-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-500">{item.status}</p>
                  </div>
                  <p className="max-w-3xl text-base leading-8 text-stone-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-12 pb-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl border-t border-stone-200 pt-10">
          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] text-stone-950">Academic contact</h2>
            </div>
            <div className="max-w-3xl text-base leading-8 text-stone-700">
              <p>
                I am interested in PhD opportunities at the intersection of robotic perception, human motion prediction, planning under uncertainty, and safe autonomy.
              </p>
              <p className="mt-5">
                Email: <a href="mailto:panagros1@ee.duth.gr" className="text-emerald-900 underline decoration-emerald-900/30 underline-offset-4 hover:text-stone-950">panagros1@ee.duth.gr</a>
              </p>
              <p>
                GitHub: <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="text-emerald-900 underline decoration-emerald-900/30 underline-offset-4 hover:text-stone-950">panagiotagrosdouli</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
