import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

const accent = "text-[#1f5a44]";
const link = "text-[#1f5a44] underline-offset-4 transition hover:underline";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[#ddd9d0] py-14">
      <div className="grid gap-6 sm:grid-cols-[210px_1fr]">
        <p className={`pt-0.5 text-[11px] font-semibold uppercase tracking-[0.24em] ${accent}`}>{label}</p>
        <div>{children}</div>
      </div>
    </section>
  );
}

const researchInterests = [
  ["Robust Autonomy", "autonomous systems that remain reliable under perception, localization, and map uncertainty"],
  ["Visual-Inertial Odometry & SLAM", "degradation monitoring, adaptive sensor fusion, and self-healing localization"],
  ["Risk-Aware Navigation", "planning and replanning under uncertainty, collision risk, and safety constraints"],
  ["Intelligent Mobility", "trajectory prediction and vulnerable road-user safety at smart intersections"],
  ["Computer Vision for Robotics", "scene understanding, semantic perception, and failure-case analysis"],
];

const skills = [
  ["Robotics & Autonomy", ["Visual-Inertial Odometry", "SLAM", "Sensor Fusion", "Motion Planning", "ROS 2", "Navigation"]],
  ["AI & Vision", ["Python", "PyTorch", "Computer Vision", "Trajectory Prediction", "Uncertainty-Aware Evaluation", "Data Analysis"]],
  ["Research Engineering", ["NumPy", "Pandas", "OpenCV", "Matplotlib", "Git", "Linux", "Docker", "Reproducible Experiments"]],
];

export default function CVPage() {
  return (
    <main id="cv" className="min-h-screen bg-[#faf8f4] text-[#1c1c1a] selection:bg-[#d7ede4] selection:text-[#12372a]">
      <SiteNav />
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <div className="flex flex-wrap items-start justify-between gap-6 pb-12">
          <div>
            <p className={`mb-4 text-xs font-bold uppercase tracking-[0.26em] ${accent}`}>Academic CV · PhD Applications</p>
            <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.055em] text-[#1c1c1a] md:text-7xl">Panagiota Grosdouli</h1>
            <p className="mt-3 text-[#5e5e5a]">Robotics · Robust Autonomy · Uncertainty-Aware AI</p>
          </div>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center border border-[#1f5a44] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1f5a44] transition hover:bg-[#1f5a44] hover:text-[#faf8f4]">
            Download PDF CV
          </a>
        </div>

        <Section label="Profile">
          <p className="max-w-3xl text-base leading-8 text-[#5e5e5a]">
            Electrical and Computer Engineering student building a PhD-oriented research portfolio in robust autonomy, visual-inertial localization, adaptive SLAM, uncertainty-aware sensor fusion, risk-aware navigation, and intelligent mobility safety.
          </p>
        </Section>

        <Section label="Research Direction">
          <div className="max-w-3xl space-y-4 text-base leading-8 text-[#5e5e5a]">
            <p>
              My central research interest is how autonomous systems can remain reliable when perception, localization, mapping, and planning become uncertain.
            </p>
            <p>
              I am particularly interested in graduate research groups working on SLAM, field robotics, UAV autonomy, safe robot navigation, uncertainty-aware perception, and intelligent transportation systems.
            </p>
          </div>
        </Section>

        <Section label="Education">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h2 className="text-lg font-semibold tracking-tight text-[#1c1c1a]">MEng Electrical & Computer Engineering</h2>
              <span className="mt-1.5 shrink-0 font-mono text-xs text-[#5e5e5a]">2020–2026</span>
            </div>
            <p className="mt-1 text-sm text-[#5e5e5a]">Democritus University of Thrace, Xanthi, Greece</p>
            <p className="mt-2 text-sm italic text-[#5e5e5a]">Thesis direction: Trajectory Prediction of Vulnerable Road Users at Smart Intersections</p>
          </div>
        </Section>

        <Section label="Research Interests">
          <ul className="space-y-2">
            {researchInterests.map(([title, desc]) => (
              <li key={title} className="flex items-start gap-3 text-sm leading-7 text-[#5e5e5a]">
                <span className="shrink-0 text-[#1f5a44]">-</span>
                <span><span className="font-semibold text-[#1c1c1a]">{title}</span>: {desc}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Research Projects">
          <div className="divide-y divide-[#ddd9d0]">
            {projects.map((project) => (
              <div key={project.slug} className="flex items-start gap-6 py-5">
                <span className="mt-0.5 w-28 shrink-0 font-mono text-xs text-[#5e5e5a]">{project.year}</span>
                <div>
                  <p className="text-sm font-semibold text-[#1c1c1a]">{project.title}</p>
                  <p className="mt-0.5 text-xs text-[#5e5e5a]">{project.badge}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5e5e5a]">{project.objective}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section label="Technical Toolkit">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(([category, items]) => (
              <div key={category as string}>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1f5a44]">{category as string}</p>
                <ul className="space-y-2">
                  {(items as string[]).map((skill) => (
                    <li key={skill} className="text-sm text-[#5e5e5a]">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section label="Open Research Repositories">
          <ul className="space-y-3">
            {projects.filter((project) => project.repositoryUrl).map((project) => (
              <li key={project.slug}>
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className={`font-mono text-sm ${link}`}>
                  {project.title}
                </a>
                <span className="ml-2 text-xs text-[#5e5e5a]">- {project.badge}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="PhD Fit">
          <p className="max-w-3xl text-sm leading-7 text-[#5e5e5a]">
            Interested in PhD opportunities and research collaborations related to robust robotic perception, visual-inertial localization, adaptive SLAM, risk-aware navigation, uncertainty-aware autonomy, UAV systems, and intelligent mobility safety.
          </p>
        </Section>

        <Section label="Contact">
          <div className="space-y-2 text-sm">
            <p><span className="inline-block w-32 font-mono text-xs text-[#5e5e5a]">Email</span><a href="mailto:p.g2a15@gmail.com" className={link}>p.g2a15@gmail.com</a></p>
            <p><span className="inline-block w-32 font-mono text-xs text-[#5e5e5a]">GitHub</span><a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className={link}>github.com/panagiotagrosdouli</a></p>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}
