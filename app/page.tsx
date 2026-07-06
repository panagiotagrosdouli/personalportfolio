import Link from "next/link";

const accent = "text-emerald-700 dark:text-emerald-300";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const researchThemes = [
  {
    title: "Robot Learning",
    description: "Learning-based models for robots that operate in dynamic, uncertain, human-centered environments.",
    interests: "Trajectory prediction, uncertainty, generalization, safety-relevant evaluation.",
    methods: "Probabilistic modeling, deep learning, sequence modeling, calibrated prediction.",
    technologies: "Python, PyTorch, ROS 2, simulation pipelines.",
  },
  {
    title: "Autonomous Systems",
    description: "Autonomous agents that integrate perception, prediction, and planning before acting around people.",
    interests: "Safe autonomy, intelligent intersections, human-aware decision making.",
    methods: "System integration, risk reasoning, experimental validation, scenario analysis.",
    technologies: "ROS 2, C++, Python, sensor-processing pipelines.",
  },
  {
    title: "Manipulation",
    description: "Robotic interaction with physical environments through perception-grounded planning and control.",
    interests: "Perception-to-action pipelines and reliable behavior under uncertainty.",
    methods: "Planning, state estimation, simulation-first prototyping.",
    technologies: "MoveIt, Gazebo, Isaac Sim, MuJoCo.",
  },
  {
    title: "Computer Vision",
    description: "Visual perception for robots that need robust state estimates rather than only object-level predictions.",
    interests: "SLAM, visual-inertial odometry, sensor fusion, scene understanding.",
    methods: "Geometry, filtering, feature pipelines, learning-assisted perception.",
    technologies: "OpenCV, Python, C++, MATLAB.",
  },
  {
    title: "Reinforcement Learning",
    description: "Learning decision policies for robots while keeping safety, uncertainty, and evaluation central.",
    interests: "Policy learning, safe exploration, sim-to-real evaluation.",
    methods: "RL baselines, reward design, ablation studies, simulation experiments.",
    technologies: "PyTorch, TensorFlow, MuJoCo, Isaac Sim.",
  },
  {
    title: "Motion Planning",
    description: "Planning under incomplete information in environments shaped by moving humans and uncertain predictions.",
    interests: "Dynamic navigation, rerouting, prediction-aware planning.",
    methods: "Graph search, sampling-based planning, risk-aware cost functions.",
    technologies: "ROS 2, Gazebo, C++, Python.",
  },
  {
    title: "Human-Robot Interaction",
    description: "Human-aware autonomy where robots explicitly reason about human motion, intent, and safety margins.",
    interests: "Crossing behavior, social navigation, vulnerable road users.",
    methods: "Trajectory analysis, interaction modeling, safety-driven metrics.",
    technologies: "Python, ROS 2, perception datasets, visualization tools.",
  },
];

const projects = [
  {
    title: "Trajectory Prediction of Vulnerable Road Users",
    problem: "Autonomous systems need reliable forecasts of pedestrian and vulnerable road-user motion before committing to actions.",
    methodology: "Motion forecasting, uncertainty-aware evaluation, trajectory analysis at smart intersections.",
    implementation: "Research code and experiments in preparation as part of diploma thesis work.",
    results: "Ongoing thesis; results will be reported when finalized.",
    technologies: "Python, trajectory modeling, evaluation pipelines.",
    links: ["paper in preparation", "code planned"],
  },
  {
    title: "SafeCrossAI",
    problem: "Human crossing behavior creates safety-critical uncertainty for autonomous systems in traffic scenes.",
    methodology: "Infrastructure-aware perception and risk reasoning for intelligent intersections.",
    implementation: "Prototype research system focused on human-aware autonomous interaction.",
    results: "Project documentation in progress.",
    technologies: "Python, perception, safety reasoning, smart intersections.",
    links: ["GitHub", "demo planned"],
  },
  {
    title: "DynNav",
    problem: "Robots navigating changing environments need to adapt routes when perception and scene dynamics change.",
    methodology: "Prediction-aware navigation, rerouting, and planning under uncertainty.",
    implementation: "ROS 2-oriented dynamic navigation prototype.",
    results: "Technical notes in preparation.",
    technologies: "ROS 2, Python, C++, dynamic planning.",
    links: ["GitHub", "video planned"],
  },
];

const publications = [
  {
    featured: true,
    authors: "Panagiota Grosdouli",
    title: "Trajectory Prediction of Vulnerable Road Users at Smart Intersections",
    venue: "Diploma thesis in preparation",
    year: "Current",
    doi: "—",
    links: ["PDF pending", "BibTeX pending", "Code pending"],
  },
  {
    featured: false,
    authors: "Panagiota Grosdouli",
    title: "SafeCrossAI, DynNav, and Robotic Perception Technical Notes",
    venue: "Manuscripts and project write-ups in preparation",
    year: "Current",
    doi: "—",
    links: ["PDF pending", "BibTeX pending", "Code pending"],
  },
];

const timeline = [
  ["Current", "MEng Electrical & Computer Engineering", "Research direction in human-aware robotics, trajectory prediction, perception, planning under uncertainty, and safe autonomy."],
  ["Current", "Diploma thesis", "Trajectory prediction of vulnerable road users at smart intersections."],
  ["In progress", "Research development", "Preparing project write-ups for SafeCrossAI, DynNav, and perception-related robotics work."],
];

const skills = [
  ["Programming", "Python, C++, MATLAB"],
  ["Robotics", "ROS 2, MoveIt, Gazebo, Isaac Sim"],
  ["Machine Learning", "PyTorch, TensorFlow"],
  ["Vision", "OpenCV, SLAM, visual-inertial odometry"],
  ["Simulation", "MuJoCo, NVIDIA Isaac Sim, Gazebo"],
];

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-stone-300 py-16 dark:border-stone-800">
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${accent}`}>{label}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-stone-900 selection:bg-emerald-200 selection:text-emerald-950 dark:bg-stone-950 dark:text-stone-100">
      <nav className="sticky top-0 z-40 border-b border-stone-300 bg-[#f7f3ea]/95 px-5 py-4 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/90 md:px-8" aria-label="Main navigation">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8">
          <Link href="/" className="text-sm font-semibold tracking-tight text-stone-950 transition hover:text-emerald-800 dark:text-stone-50 dark:hover:text-emerald-300">Panagiota Grosdouli</Link>
          <div className="hidden items-center gap-6 text-sm text-stone-600 dark:text-stone-400 md:flex">
            {navLinks.map((link) => <Link key={link.label} href={link.href} className="transition hover:text-emerald-800 dark:hover:text-emerald-300">{link.label}</Link>)}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="grid min-h-[78vh] gap-12 py-20 md:grid-cols-[1fr_300px] md:items-center lg:py-28">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${accent}`}>Robotics · Prediction · Perception · Planning</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-stone-950 dark:text-stone-50 md:text-7xl">Panagiota Grosdouli</h1>
            <p className="mt-5 text-xl text-stone-700 dark:text-stone-300">Prospective Robotics PhD researcher</p>
            <p className="mt-7 max-w-3xl text-2xl leading-10 tracking-[-0.02em] text-stone-950 dark:text-stone-100">I study how autonomous systems can perceive uncertain scenes, forecast human motion, and plan safely around people.</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-400">MEng Electrical &amp; Computer Engineering student focused on human-aware robotics, trajectory prediction, robotic perception, uncertainty-aware navigation, and safe autonomous systems.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              {["Research", "Publications", "CV", "Contact"].map((item) => (
                <Link key={item} href={item === "CV" ? "/cv" : `#${item.toLowerCase()}`} className="border border-stone-300 px-4 py-2 text-sm font-medium text-stone-900 transition hover:border-emerald-700 hover:text-emerald-800 dark:border-stone-700 dark:text-stone-100 dark:hover:border-emerald-300 dark:hover:text-emerald-300">{item}</Link>
              ))}
            </div>
          </div>
          <div>
            <img src="profile.png" alt="Portrait of Panagiota Grosdouli" className="aspect-[4/5] w-full object-cover grayscale transition duration-500 hover:grayscale-0" />
            <p className="mt-4 border-l-2 border-emerald-700 pl-4 text-sm leading-6 text-stone-600 dark:border-emerald-300 dark:text-stone-400">Current thesis: trajectory prediction of vulnerable road users at smart intersections.</p>
          </div>
        </header>

        <Section id="about" label="About" title="Scientific motivation">
          <div className="max-w-3xl space-y-5 text-base leading-8 text-stone-700 dark:text-stone-300">
            <p>My research motivation is to build autonomous systems that do not treat perception, prediction, and planning as separate engineering blocks, but as a coupled scientific problem. In human-centered environments, a robot must reason about what it sees, what may happen next, and how uncertainty should change its behavior.</p>
            <p>I am especially interested in robotics problems where geometric perception, learning-based prediction, and safety-aware decision making meet: smart intersections, dynamic navigation, human motion forecasting, and perception systems that expose their confidence and limitations.</p>
          </div>
        </Section>

        <Section id="research" label="Research" title="Research themes">
          <div className="grid gap-4 md:grid-cols-2">
            {researchThemes.map((theme) => (
              <article key={theme.title} className="group border border-stone-300 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-700 dark:border-stone-800 dark:hover:border-emerald-300">
                <h3 className="text-lg font-semibold text-stone-950 dark:text-stone-50">{theme.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-700 dark:text-stone-300">{theme.description}</p>
                <dl className="mt-5 space-y-3 text-sm leading-6">
                  <div><dt className={accent}>Current interests</dt><dd className="text-stone-600 dark:text-stone-400">{theme.interests}</dd></div>
                  <div><dt className={accent}>Methodologies</dt><dd className="text-stone-600 dark:text-stone-400">{theme.methods}</dd></div>
                  <div><dt className={accent}>Technologies</dt><dd className="text-stone-600 dark:text-stone-400">{theme.technologies}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </Section>

        <Section id="publications" label="Publications" title="Thesis & manuscripts">
          <div className="space-y-5">
            {publications.map((pub) => (
              <article key={pub.title} className={`border p-6 ${pub.featured ? "border-emerald-700 dark:border-emerald-300" : "border-stone-300 dark:border-stone-800"}`}>
                {pub.featured && <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${accent}`}>Featured</p>}
                <p className="text-sm text-stone-500 dark:text-stone-400">{pub.authors}</p>
                <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-stone-950 dark:text-stone-50">{pub.title}</h3>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{pub.venue} · {pub.year} · DOI: {pub.doi}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {pub.links.map((link) => <span key={link} className="text-stone-500 dark:text-stone-500">{link}</span>)}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" label="Projects" title="Research contributions">
          <div className="space-y-6">
            {projects.map((project) => (
              <article key={project.title} className="border-b border-stone-300 pb-6 dark:border-stone-800">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-stone-950 dark:text-stone-50">{project.title}</h3>
                <div className="mt-4 grid gap-4 text-sm leading-7 md:grid-cols-2">
                  <p><span className={accent}>Problem.</span> {project.problem}</p>
                  <p><span className={accent}>Methodology.</span> {project.methodology}</p>
                  <p><span className={accent}>Implementation.</span> {project.implementation}</p>
                  <p><span className={accent}>Results.</span> {project.results}</p>
                  <p><span className={accent}>Technologies.</span> {project.technologies}</p>
                  <p><span className={accent}>Links.</span> {project.links.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" label="Experience" title="Academic timeline">
          <div className="space-y-6">
            {timeline.map(([date, title, detail]) => (
              <article key={`${date}-${title}`} className="grid gap-3 text-sm leading-7 md:grid-cols-[140px_1fr]">
                <p className="text-stone-500 dark:text-stone-500">{date}</p>
                <div><h3 className="font-semibold text-stone-950 dark:text-stone-50">{title}</h3><p className="text-stone-700 dark:text-stone-300">{detail}</p></div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" label="Skills" title="Technical foundation">
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map(([group, list]) => (
              <div key={group} className="border-t border-stone-300 pt-4 dark:border-stone-800">
                <h3 className="font-semibold text-stone-950 dark:text-stone-50">{group}</h3>
                <p className="mt-1 text-sm leading-7 text-stone-600 dark:text-stone-400">{list}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" label="Contact" title="Academic contact">
          <div className="max-w-3xl text-base leading-8 text-stone-700 dark:text-stone-300">
            <p>I am interested in PhD opportunities and collaborations in robotic perception, human motion prediction, planning under uncertainty, and safe human-aware autonomy.</p>
            <div className="mt-6 grid gap-2 text-sm md:grid-cols-2">
              <a href="mailto:panagros1@ee.duth.gr" className="text-emerald-700 hover:underline dark:text-emerald-300">panagros1@ee.duth.gr</a>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline dark:text-emerald-300">GitHub</a>
              <span className="text-stone-500">LinkedIn: add URL</span>
              <span className="text-stone-500">Google Scholar: add profile</span>
              <span className="text-stone-500">ORCID: add identifier</span>
              <Link href="/cv" className="text-emerald-700 hover:underline dark:text-emerald-300">CV</Link>
            </div>
          </div>
        </Section>

        <footer className="border-t border-stone-300 py-8 text-sm text-stone-500 dark:border-stone-800">© Panagiota Grosdouli</footer>
      </div>
    </main>
  );
}
