import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research Agenda",
  description:
    "Academic research agenda of Panagiota Grosdouli on trajectory prediction, safe autonomy, SLAM, and uncertainty-aware robotics.",
};

const interests = [
  "Trajectory Prediction",
  "Safe Autonomy",
  "Human-Aware Robotics",
  "Visual-Inertial SLAM",
  "Planning Under Uncertainty",
];

const agenda = [
  {
    question: "How should an autonomous system act before a person's future trajectory is fully observable?",
    answer:
      "Most prediction models are evaluated on accuracy alone. I am interested in how uncertainty in a forecast should propagate into a decision, particularly in mixed-traffic settings involving pedestrians and cyclists.",
  },
  {
    question: "Can perception systems know when they are wrong?",
    answer:
      "Visual and visual-inertial estimation can degrade quietly under blur, low light, or sensor dropout. I want to study how a system can detect its own degradation and recover rather than fail silently.",
  },
  {
    question: "What does it mean for an intersection, rather than a single vehicle, to reason about safety?",
    answer:
      "Infrastructure-level sensing offers a vantage point no single agent has. I am interested in how shared perception and prediction could reduce risk for vulnerable road users.",
  },
  {
    question: "How should a robot plan when its map of the world is incomplete?",
    answer:
      "Navigation in unknown, dynamic environments requires continual decisions about whether the current plan is still trustworthy or should be revised.",
  },
];

const themes = [
  "Trajectory Prediction",
  "Safe Autonomous Systems",
  "Intelligent Intersections",
  "Human Motion Forecasting",
  "Visual-Inertial SLAM",
  "Adaptive Multi-Modal Perception",
  "Navigation Under Uncertainty",
];

const projects = [
  {
    title: "Diploma Thesis",
    status: "In progress",
    question:
      "How can autonomous systems forecast vulnerable-road-user motion before making safety-critical decisions at intersections?",
    motivation:
      "Pedestrian and cyclist behavior is variable and only partially observable at decision time. Prediction should therefore be evaluated not only by accuracy, but by how uncertainty affects downstream decisions.",
    contribution:
      "Trajectory-prediction models and an uncertainty-aware evaluation protocol for smart-intersection scenarios involving vulnerable road users.",
    href: null,
  },
  {
    title: "SafeCrossAI",
    status: "Active",
    question:
      "How can intelligent intersections model interactions between vulnerable road users and connected or autonomous vehicles?",
    motivation:
      "Infrastructure-level sensors observe interactions that no single vehicle can, offering an opportunity to reason about risk collectively rather than agent by agent.",
    contribution:
      "An infrastructure-level perception and prediction framework for safety-aware reasoning around vulnerable road users at intersections.",
    href: "https://github.com/panagiotagrosdouli/SafeCrossAI",
  },
  {
    title: "Self-Healing VIO",
    status: "Exploratory",
    question:
      "How can visual-inertial SLAM remain reliable when tracking quality degrades under blur, low light, sensor noise, or frame dropout?",
    motivation:
      "Visual-inertial estimators tend to fail quietly under adverse conditions, without a clear internal signal that tracking has degraded.",
    contribution:
      "A self-healing VIO approach that predicts tracking degradation and adapts its sensing or recovery strategy for robust UAV navigation.",
    href: "https://github.com/panagiotagrosdouli/Self-Healing-VIO-for-Robust-UAV-Navigation",
  },
  {
    title: "Adaptive Multi-Modal SLAM",
    status: "Exploratory",
    question:
      "How can high-speed UAV navigation adaptively fuse visual foundation models, event cameras, and uncertainty-aware sensing?",
    motivation:
      "No single sensing modality is reliable across all conditions; combining modalities with explicit uncertainty may allow graceful degradation.",
    contribution:
      "A multi-modal SLAM framework with uncertainty-aware sensor fusion for high-speed navigation in visually challenging conditions.",
    href: "https://github.com/panagiotagrosdouli/Adaptive-Multi-Modal-SLAM-with-Uncertainty-Aware-Sensor-Fusion",
  },
  {
    title: "DynNav",
    status: "Exploratory",
    question:
      "How should a robot re-plan when it moves through unknown environments containing dynamic obstacles?",
    motivation:
      "Navigation in unmapped, dynamic settings requires deciding whether a current plan is still trustworthy or should be revised.",
    contribution:
      "A dynamic navigation and rerouting approach for unknown environments, combining obstacle avoidance with planning under uncertainty.",
    href: "https://github.com/panagiotagrosdouli/DynNav-Dynamic-Navigation-Rerouting-in-Unknown-Environments",
  },
];

const news = [
  ["2026", "Started diploma thesis research on trajectory prediction and uncertainty-aware autonomy for vulnerable road users."],
  ["2025", "Began development of SafeCrossAI, an intelligent-intersection research project."],
  ["2025", "Opened research repositories for Self-Healing VIO, Adaptive Multi-Modal SLAM, and DynNav."],
];

function Section({
  id,
  label,
  title,
  children,
}: {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-[#dbd6c9] py-16 md:py-20">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#1f5a44]">{label}</p>
      <h2 className="mb-8 max-w-[68ch] font-serif text-3xl font-medium leading-snug tracking-[-0.02em] text-[#232220]">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ResearchAgendaPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#232220] selection:bg-[#d7ede4] selection:text-[#12372a]">
      <header className="sticky top-0 z-20 border-b border-[#dbd6c9] bg-[#faf8f4]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[760px] flex-wrap items-baseline justify-between gap-x-7 gap-y-2 px-7 py-5">
          <Link href="/" className="font-serif text-xl font-medium tracking-tight text-[#232220] hover:text-[#1f5a44]">
            Panagiota Grosdouli
          </Link>
          <nav className="flex flex-wrap gap-5 text-sm font-medium text-[#54524d]">
            <a href="#research" className="hover:text-[#1f5a44]">Research</a>
            <a href="#projects" className="hover:text-[#1f5a44]">Projects</a>
            <Link href="/cv" className="hover:text-[#1f5a44]">CV</Link>
            <a href="#publications" className="hover:text-[#1f5a44]">Publications</a>
            <a href="#contact" className="hover:text-[#1f5a44]">Contact</a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-[760px] px-7">
        <section className="border-b border-[#dbd6c9] py-16 md:py-20">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.12em] text-[#1f5a44]">Academic homepage</p>
          <h1 className="font-serif text-5xl font-medium leading-tight tracking-[-0.03em] text-[#232220]">
            Panagiota Grosdouli
          </h1>
          <p className="mt-5 max-w-[68ch] font-serif text-2xl italic leading-snug text-[#232220]">
            I study how autonomous systems can perceive, predict, and act safely around people under uncertainty.
          </p>
          <p className="mt-5 max-w-[68ch] text-[15px] leading-7 text-[#54524d]">
            Diploma candidate in Electrical & Computer Engineering, Democritus University of Thrace — preparing for doctoral study in robotics and autonomous systems.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {interests.map((item) => (
              <li key={item} className="border border-[#c8c2b2] px-3 py-1 font-mono text-xs tracking-wide text-[#54524d]">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[68ch] text-base leading-8 text-[#54524d]">
            My work treats autonomy as a coupled problem of perception, prediction, planning, and safety, rather than a single engineering pipeline. I am interested in how a system can represent what it does not yet know and how that representation should shape what it does next.
          </p>
          <div className="mt-8 flex gap-6 text-sm font-medium">
            <a href="#research" className="text-[#1f5a44] hover:underline">Research agenda</a>
            <a href="#projects" className="text-[#1f5a44] hover:underline">Selected projects</a>
            <a href="https://github.com/panagiotagrosdouli" className="text-[#1f5a44] hover:underline">GitHub</a>
          </div>
        </section>

        <Section id="research" label="Research agenda" title="Questions I want to spend the next years answering">
          <ul className="space-y-8">
            {agenda.map((item) => (
              <li key={item.question} className="border-l-2 border-[#1f5a44] pl-5">
                <p className="font-serif text-xl italic leading-8 text-[#232220]">{item.question}</p>
                <p className="mt-2 text-[15px] leading-7 text-[#54524d]">{item.answer}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Current research" title="Trajectory prediction and uncertainty-aware autonomy for vulnerable road users">
          <div className="space-y-5 text-base leading-8 text-[#54524d]">
            <p>
              My diploma thesis is the primary line of research I am pursuing at present. It addresses the forecasting of pedestrian and vulnerable-road-user motion in traffic scenes where an autonomous system must commit to a decision before the future trajectory is fully observable.
            </p>
            <p>
              This direction connects to Self-Healing VIO, which studies how perception degrades and recovers under adverse sensing conditions, and DynNav, which extends the same robustness perspective to planning and navigation in unknown environments.
            </p>
          </div>
        </Section>

        <Section label="Research themes" title="Areas my work is organized around">
          <ul className="grid border-t border-[#dbd6c9] md:grid-cols-2">
            {themes.map((theme) => (
              <li key={theme} className="border-b border-[#dbd6c9] py-3 pr-4 font-serif text-lg text-[#232220]">
                <span className="text-[#1f5a44]">—</span> {theme}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" label="Selected research projects" title="Five research directions">
          <div>
            {projects.map((project) => (
              <article key={project.title} className="border-t border-[#dbd6c9] py-9 first:border-t-0 first:pt-0">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-serif text-2xl font-medium text-[#232220]">{project.title}</h3>
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#1f5a44]">{project.status}</span>
                </div>
                <div className="space-y-4">
                  <Field label="Research question" value={project.question} />
                  <Field label="Scientific motivation" value={project.motivation} />
                  <Field label="Technical contribution" value={project.contribution} />
                </div>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm font-medium text-[#1f5a44] hover:underline">
                    Repository →
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section label="Research vision" title="Where I want this work to be in five years">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-base font-semibold text-[#232220]">Scientific challenges</h3>
              <p className="text-[15px] leading-7 text-[#54524d]">
                Building prediction models whose confidence is calibrated enough to support safety-critical decisions; developing perception systems that can recognize their own degradation; and planning under incomplete maps and unobserved agents.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-base font-semibold text-[#232220]">Longer-term direction</h3>
              <p className="text-[15px] leading-7 text-[#54524d]">
                I hope to contribute to research connecting human-motion forecasting, robust multi-modal perception, and safe decision-making, narrowing the gap between benchmark performance and systems that can share space with people.
              </p>
            </div>
          </div>
        </Section>

        <Section id="publications" label="Publications" title="Publications">
          <div className="border border-dashed border-[#c8c2b2] p-6">
            <p className="text-[15px] leading-7 text-[#54524d]">
              No publications yet. This section will list peer-reviewed papers, preprints, and technical reports as they become available, organized chronologically with links to PDFs and code.
            </p>
          </div>
        </Section>

        <Section label="News" title="News">
          <ul>
            {news.map(([date, text]) => (
              <li key={`${date}-${text}`} className="flex gap-5 border-t border-[#dbd6c9] py-3 text-[15px] leading-7 last:border-b">
                <span className="min-w-16 font-mono text-sm text-[#1f5a44]">{date}</span>
                <span className="text-[#54524d]">{text}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" label="Contact" title="Contact">
          <div className="flex flex-col gap-2 text-base">
            <a href="mailto:panagros1@ee.duth.gr" className="text-[#1f5a44] hover:underline">panagros1@ee.duth.gr</a>
            <a href="https://github.com/panagiotagrosdouli" className="text-[#1f5a44] hover:underline">github.com/panagiotagrosdouli</a>
          </div>
        </Section>
      </div>

      <footer className="mx-auto flex max-w-[760px] flex-wrap justify-between gap-2 px-7 pb-12 pt-6 font-mono text-xs text-[#54524d]">
        <span>© 2026 Panagiota Grosdouli</span>
        <span>Last updated July 2026</span>
      </footer>
    </main>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="mb-1 block font-mono text-[11px] uppercase tracking-[0.12em] text-[#54524d]">{label}</span>
      <p className="text-[15px] leading-7 text-[#232220]">{value}</p>
    </div>
  );
}
