import Link from "next/link";

const accent = "text-[#1f5a44]";
const link = "text-[#1f5a44] underline-offset-4 transition hover:underline";

const researchThemes = [
  "Robust visual-inertial odometry and SLAM under perceptual degradation",
  "Uncertainty-aware sensor fusion for mobile robots and UAVs",
  "Risk-sensitive navigation and replanning in unknown environments",
  "Trajectory prediction and safety analysis for vulnerable road users",
  "Interpretable autonomy signals for failure diagnosis and recovery",
];

const selectedResearch = [
  {
    title: "SHIELD-VIO",
    role: "Flagship PhD-level robotics direction",
    question:
      "Can a visual-inertial odometry system detect degradation, diagnose likely causes, and select recovery actions before localization failure?",
    contribution:
      "Python research prototype for degradation-aware VIO with health monitoring, Bayesian failure diagnosis, recovery policies, and a Navigation Health Index.",
    methods: "VIO · degradation monitoring · uncertainty · diagnosis · recovery",
    href: "https://github.com/panagiotagrosdouli/SHIELD-VIO",
  },
  {
    title: "Adaptive Multi-Modal SLAM",
    role: "Robust perception and sensor-fusion research",
    question:
      "Can a SLAM system estimate sensor reliability online and adapt its fusion strategy under blur, low light, texture scarcity, or sensor dropout?",
    contribution:
      "Research framework for uncertainty-aware fusion of visual, inertial, and event-based sensing with EuRoC-style evaluation and ORB-SLAM3 baseline integration.",
    methods: "SLAM · sensor fusion · EuRoC · ATE/RPE · event cameras",
    href: "https://github.com/panagiotagrosdouli/Adaptive-Multi-Modal-SLAM-with-Uncertainty-Aware-Sensor-Fusion",
  },
  {
    title: "DynNav",
    role: "Risk-aware navigation research",
    question:
      "How should robots plan and replan when they move through unknown environments with uncertain maps and dynamic obstacles?",
    contribution:
      "Navigation research repository focused on risk-sensitive planning, belief-aware route selection, returnability constraints, and safety monitoring.",
    methods: "mobile robots · CVaR-style risk · replanning · ROS 2",
    href: "https://github.com/panagiotagrosdouli/DynNav-Dynamic-Navigation-Rerouting-in-Unknown-Environments",
  },
  {
    title: "Uncertainty-Aware Navigation",
    role: "Focused planning benchmark",
    question:
      "Can uncertainty-weighted planning reduce unsafe navigation behaviour compared with classical shortest-path planning?",
    contribution:
      "A focused research scaffold for comparing classical planners with uncertainty-aware navigation in controlled map scenarios.",
    methods: "A* · Dijkstra · uncertainty maps · safety metrics",
    href: "https://github.com/panagiotagrosdouli/uncertainty-aware-navigation",
  },
  {
    title: "SafeCrossAI",
    role: "Intelligent mobility and VRU safety",
    question:
      "How can intelligent intersections predict vulnerable road-user motion and support safer connected or autonomous mobility?",
    contribution:
      "AI research platform for trajectory prediction, interaction modelling, time-to-collision reasoning, and safety-aware smart-intersection research.",
    methods: "trajectory prediction · VRU safety · social graphs · TTC",
    href: "https://github.com/panagiotagrosdouli/SafeCrossAI",
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
      <div className="grid gap-10 border-t border-[#ddd9d0] pt-10 md:grid-cols-[230px_1fr]">
        <div>
          <p className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${accent}`}>{label}</p>
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#1c1c1a] md:text-5xl">{title}</h2>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#1c1c1a] selection:bg-[#d7ede4] selection:text-[#12372a]">
      <nav className="sticky top-0 z-40 border-b border-[#ddd9d0] bg-[#faf8f4]/92 px-5 py-4 backdrop-blur-md md:px-8" aria-label="Main navigation">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight text-[#1c1c1a] transition hover:text-[#1f5a44]">
            Panagiota Grosdouli
          </Link>
          <div className="hidden items-center gap-7 text-sm text-[#5e5e5a] md:flex">
            <Link href="#about" className="transition hover:text-[#1f5a44]">About</Link>
            <Link href="#agenda" className="transition hover:text-[#1f5a44]">Research Agenda</Link>
            <Link href="#projects" className="transition hover:text-[#1f5a44]">Projects</Link>
            <Link href="#phd" className="transition hover:text-[#1f5a44]">PhD Fit</Link>
            <Link href="/cv" className="transition hover:text-[#1f5a44]">CV</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="grid min-h-[82vh] gap-14 py-20 md:grid-cols-[1fr_340px] md:items-center lg:py-28">
          <div>
            <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${accent}`}>Robotics · SLAM · Safe Autonomy</p>
            <h1 className="mt-8 max-w-4xl font-serif text-6xl leading-[0.95] tracking-[-0.06em] text-[#1c1c1a] md:text-8xl">
              Panagiota Grosdouli
            </h1>
            <p className="mt-8 max-w-3xl text-3xl leading-tight tracking-[-0.035em] text-[#1c1c1a] md:text-4xl">
              Research portfolio for robust, uncertainty-aware autonomy.
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5e5e5a]">
              Electrical and Computer Engineering student preparing for graduate research in robotics, visual-inertial localization, adaptive SLAM, risk-aware navigation, and safety-aware intelligent mobility.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium">
              <Link href="#projects" className="border border-[#1f5a44] px-5 py-3 text-[#1f5a44] transition hover:bg-[#1f5a44] hover:text-[#faf8f4]">Selected Research</Link>
              <Link href="/cv" className="border border-[#ddd9d0] px-5 py-3 text-[#5e5e5a] transition hover:border-[#1f5a44] hover:text-[#1f5a44]">Academic CV</Link>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="border border-[#ddd9d0] px-5 py-3 text-[#5e5e5a] transition hover:border-[#1f5a44] hover:text-[#1f5a44]">GitHub</a>
            </div>
          </div>
          <aside>
            <div className="border border-[#ddd9d0] bg-[#f4f0e8] p-6">
              <p className="font-serif text-3xl leading-tight tracking-[-0.035em] text-[#1c1c1a]">Research focus</p>
              <p className="mt-5 text-sm leading-7 text-[#5e5e5a]">
                Making autonomous robots more reliable when perception is degraded, localization is uncertain, maps are incomplete, and planning must account for risk.
              </p>
              <dl className="mt-8 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-[#1c1c1a]">Current direction</dt>
                  <dd className="mt-1 text-[#5e5e5a]">Robust autonomy under uncertainty</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1c1c1a]">Target labs</dt>
                  <dd className="mt-1 text-[#5e5e5a]">Robotics, SLAM, autonomous systems, intelligent mobility</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1c1c1a]">Looking for</dt>
                  <dd className="mt-1 text-[#5e5e5a]">PhD opportunities and research collaborations</dd>
                </div>
              </dl>
            </div>
          </aside>
        </header>

        <Section id="about" label="Profile" title="I study autonomy as a coupled problem of perception, estimation, planning, and safety.">
          <div className="max-w-3xl space-y-6 text-lg leading-9 text-[#5e5e5a]">
            <p>
              My work is organized around the question of how robots can remain useful and safe when real-world assumptions fail: visual features disappear, inertial estimates drift, maps are incomplete, pedestrians behave unpredictably, and shortest paths are not necessarily safe paths.
            </p>
            <p>
              The portfolio is intentionally structured like a graduate research profile: each project states a research question, a technical contribution, evaluation metrics, and its relationship to a broader research agenda in robust autonomous systems.
            </p>
          </div>
        </Section>

        <Section id="agenda" label="Research Agenda" title="Robust autonomy under uncertainty.">
          <div className="grid gap-10 md:grid-cols-[1fr_280px]">
            <div className="space-y-5 text-base leading-8 text-[#5e5e5a]">
              <p>
                The central research direction is to connect uncertainty-aware perception with downstream decision making. Rather than treating perception, localization, and planning as isolated modules, I am interested in autonomy stacks that expose reliability signals and use them before failure becomes safety-critical.
              </p>
              <ul className="space-y-3">
                {researchThemes.map((theme) => (
                  <li key={theme} className="flex gap-3">
                    <span className="mt-3 h-px w-5 shrink-0 bg-[#1f5a44]" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-[#ddd9d0] pt-5 text-sm leading-7 text-[#5e5e5a] md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <p className="font-semibold text-[#1c1c1a]">Keywords</p>
              <p className="mt-2">VIO, SLAM, sensor fusion, ROS 2, risk-aware planning, CVaR-style reasoning, trajectory prediction, VRU safety.</p>
              <p className="mt-6 font-semibold text-[#1c1c1a]">Evaluation mindset</p>
              <p className="mt-2">Baselines, uncertainty calibration, failure cases, repeatable experiments, and clear separation between implemented work and future plans.</p>
            </div>
          </div>
        </Section>

        <Section id="projects" label="Selected Research" title="Repositories organized as a PhD research portfolio.">
          <div className="divide-y divide-[#ddd9d0]">
            {selectedResearch.map((item) => (
              <article key={item.title} className="grid gap-6 py-8 md:grid-cols-[240px_1fr]">
                <div>
                  <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#1c1c1a]">{item.title}</h3>
                  <p className={`mt-2 text-xs font-semibold uppercase tracking-[0.2em] ${accent}`}>{item.role}</p>
                </div>
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5e5e5a]">Research question</p>
                  <p className="mt-2 text-lg leading-8 text-[#1c1c1a]">{item.question}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#5e5e5a]">Technical contribution</p>
                  <p className="mt-2 text-base leading-8 text-[#5e5e5a]">{item.contribution}</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-[#5e5e5a]">{item.methods}</p>
                  <a href={item.href} target="_blank" rel="noreferrer" className={`mt-5 inline-flex text-sm font-semibold ${link}`}>
                    Repository
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="phd" label="PhD Fit" title="Research groups I would fit best.">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Robotics & SLAM", "Visual-inertial localization, adaptive SLAM, robust perception, sensor fusion, and field robotics."],
              ["Safe Autonomy", "Risk-aware planning, uncertainty-aware decision making, monitoring, diagnosis, and recovery before unsafe outcomes."],
              ["Intelligent Mobility", "Trajectory prediction, vulnerable road-user safety, smart intersections, and cooperative perception."],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-[#ddd9d0] pt-5">
                <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#1c1c1a]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5e5e5a]">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <footer className="border-t border-[#ddd9d0] py-10 text-sm text-[#5e5e5a]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© Panagiota Grosdouli</p>
            <div className="flex flex-wrap gap-5">
              <a href="mailto:p.g2a15@gmail.com" className="transition hover:text-[#1f5a44]">Email</a>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="transition hover:text-[#1f5a44]">GitHub</a>
              <Link href="/cv" className="transition hover:text-[#1f5a44]">CV</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
