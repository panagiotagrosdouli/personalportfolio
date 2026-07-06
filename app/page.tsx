import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Work", href: "#work" },
  { label: "Agenda", href: "#agenda" },
  { label: "Publications", href: "#publications" },
  { label: "CV", href: "/cv" },
];

const researchThemes = [
  ["Human Motion Prediction", "Trajectory forecasting for pedestrians, cyclists, and vulnerable road users in dynamic traffic scenes, with attention to multiple possible futures and uncertainty-aware evaluation."],
  ["Robotic Perception", "Perception and localization pipelines for robots, including SLAM, visual-inertial odometry, and sensor fusion under noisy or incomplete sensing."],
  ["Navigation under Uncertainty", "Navigation and rerouting in changing environments where perception, prediction, and planning must remain connected rather than treated as isolated modules."],
  ["Safe Human-Aware Autonomy", "Autonomous systems that reason about people before acting, especially in shared spaces such as smart intersections and human-robot environments."],
];

const work = [
  ["Trajectory Prediction of Vulnerable Road Users", "Diploma thesis · smart intersections · motion forecasting", "Current thesis work on forecasting vulnerable road-user motion so autonomous systems can anticipate human behavior before committing to an action.", "/projects/trajectory-prediction-vrus"],
  ["SafeCrossAI", "Human-aware autonomy · crossing behavior · intelligent intersections", "Prototype work centered on human crossing behavior, perception, and safer autonomous interaction in traffic scenes.", "/projects/safecrossai"],
  ["DynNav", "ROS 2 · dynamic navigation · planning under uncertainty", "Navigation and rerouting work in changing environments, connecting uncertainty in perception to downstream robot behavior.", "/projects/dynnav"],
  ["SLAM, VIO, and Sensor Fusion", "Robotic perception · state estimation · robustness", "Independent robotics work on perception and localization pipelines for systems operating with noisy and incomplete sensing.", "/projects"],
];

const agenda = [
  "How can robots forecast human motion before selecting an action?",
  "How should perception systems expose uncertainty, confidence, and failure modes to planning modules?",
  "How can prediction improve navigation around people in dynamic environments?",
  "How can early-stage robotics prototypes be evaluated rigorously enough to become publishable research?",
];

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="scroll-mt-24 border-b border-neutral-200 pb-2 text-xl font-semibold tracking-tight text-neutral-950">{children}</h2>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <nav className="border-b border-neutral-200 bg-white px-5 py-4 text-sm md:px-8" aria-label="Main navigation">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="text-base font-semibold text-neutral-950">Panagiota Grosdouli</Link>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-neutral-600">
            {navLinks.map((link) => <Link key={link.label} href={link.href} className="hover:text-neutral-950">{link.label}</Link>)}
            <a href="mailto:panagros1@ee.duth.gr" className="hover:text-neutral-950">Contact</a>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
        <section id="about" className="grid gap-8 md:grid-cols-[1fr_210px] md:items-start">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">Panagiota Grosdouli</h1>
            <p className="mt-2 text-lg text-neutral-700">MEng Electrical &amp; Computer Engineering · Human-aware robotics</p>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-neutral-800">
              <p>I am an MEng Electrical &amp; Computer Engineering student focused on human-aware robotics, trajectory prediction, robotic perception, uncertainty-aware navigation, and safe autonomous systems.</p>
              <p>My current work studies trajectory prediction of vulnerable road users at smart intersections. I am interested in how autonomous systems can perceive uncertain scenes, forecast human motion, and plan more safely around people.</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <a href="mailto:panagros1@ee.duth.gr" className="text-emerald-700 hover:text-neutral-950">Email</a>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="text-emerald-700 hover:text-neutral-950">GitHub</a>
              <Link href="/projects" className="text-emerald-700 hover:text-neutral-950">Projects</Link>
              <Link href="/research" className="text-emerald-700 hover:text-neutral-950">Research statement</Link>
            </div>
          </div>
          <img src="profile.png" alt="Portrait of Panagiota Grosdouli" className="w-44 border border-neutral-200 object-cover md:w-full" />
        </section>

        <section className="mt-12">
          <SectionTitle id="education">Education &amp; Current Work</SectionTitle>
          <div className="mt-5 space-y-6 text-[15px] leading-7">
            <article className="grid gap-2 md:grid-cols-[150px_1fr]"><p className="text-neutral-500">Current</p><div><h3 className="font-semibold text-neutral-950">MEng Electrical &amp; Computer Engineering</h3><p className="text-neutral-700">Research direction in human-aware robotics, trajectory prediction, robotic perception, uncertainty-aware navigation, and safe autonomous systems.</p></div></article>
            <article className="grid gap-2 md:grid-cols-[150px_1fr]"><p className="text-neutral-500">Current thesis</p><div><h3 className="font-semibold text-neutral-950">Trajectory Prediction of Vulnerable Road Users at Smart Intersections</h3><p className="text-neutral-700">Diploma thesis work on forecasting pedestrian and vulnerable road-user motion for safer autonomous-system reasoning.</p></div></article>
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle id="research">Research Interests</SectionTitle>
          <div className="mt-5 space-y-5">
            {researchThemes.map(([title, text]) => <article key={title} className="text-[15px] leading-7"><h3 className="font-semibold text-neutral-950">{title}</h3><p className="mt-1 text-neutral-700">{text}</p></article>)}
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle id="work">Selected Work</SectionTitle>
          <div className="mt-5 space-y-7">
            {work.map(([title, meta, text, href]) => <article key={title} className="text-[15px] leading-7"><h3 className="font-semibold text-neutral-950"><Link href={href} className="hover:text-emerald-700">{title}</Link></h3><p className="text-neutral-500">{meta}</p><p className="mt-1 text-neutral-700">{text}</p></article>)}
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle id="agenda">Research Agenda</SectionTitle>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-[15px] leading-7 text-neutral-700">
            {agenda.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </section>

        <section className="mt-12">
          <SectionTitle id="publications">Publications / Thesis</SectionTitle>
          <p className="mt-4 text-sm text-neutral-600">No peer-reviewed publications are listed yet. Current thesis and manuscripts are presented transparently as work in preparation.</p>
          <div className="mt-5 space-y-6 text-[15px] leading-7">
            <article><h3 className="font-semibold text-neutral-950">Trajectory Prediction of Vulnerable Road Users at Smart Intersections</h3><p className="text-neutral-700">Diploma thesis in preparation</p><p className="mt-1 text-sm text-neutral-500">Thesis in preparation</p></article>
            <article><h3 className="font-semibold text-neutral-950">SafeCrossAI, DynNav, and perception project write-ups</h3><p className="text-neutral-700">Technical notes and manuscripts in preparation</p><p className="mt-1 text-sm text-neutral-500">Project documentation in progress</p></article>
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle id="contact">Contact</SectionTitle>
          <p className="mt-4 text-[15px] leading-7 text-neutral-700">I am interested in PhD opportunities in robotic perception, human motion prediction, planning under uncertainty, and safe human-aware autonomy.</p>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">Email: <a href="mailto:panagros1@ee.duth.gr" className="text-emerald-700 hover:text-neutral-950">panagros1@ee.duth.gr</a></p>
        </section>

        <footer className="mt-14 border-t border-neutral-200 pt-5 text-sm text-neutral-500">Panagiota Grosdouli</footer>
      </div>
    </main>
  );
}
