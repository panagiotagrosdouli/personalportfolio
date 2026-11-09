import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

const accent = "text-[var(--accent)]";
const link = "text-[var(--accent)] underline-offset-4 transition hover:underline";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[var(--line)] py-14">
      <div className="grid gap-6 sm:grid-cols-[210px_1fr]">
        <p className={`pt-0.5 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] ${accent}`}>{label}</p>
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
    <main id="cv" className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent-soft)]">
      <SiteNav />
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <div className="command-panel rounded-[2rem] p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-6 pb-10">
            <div>
              <p className={`mb-4 font-mono text-xs font-bold uppercase tracking-[0.26em] ${accent}`}>Curriculum Vitae</p>
              <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.055em] text-[var(--foreground)] md:text-7xl">Panagiota Grosdouli</h1>
              <p className="mt-3 text-[var(--muted)]">Robotics · Robust Autonomy · Uncertainty-Aware AI</p>
            </div>
            <a href="https://www.linkedin.com/in/panagiota-g-b468b0201" target="_blank" rel="noopener noreferrer" className="focus-ring mt-2 inline-flex items-center rounded-full border border-[var(--accent)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]">
              LinkedIn profile
            </a>
          </div>

          <Section label="Profile">
            <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
              Electrical and Computer Engineer (Integrated MEng, 2026), with experience in machine learning, computer vision and robotic perception.
            </p>
          </Section>


          <Section label="Education">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--background)]/40 p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">Five-year Diploma in Electrical & Computer Engineering (Integrated Master&apos;s level)</h2>
                <span className="mt-1.5 shrink-0 font-mono text-xs text-[var(--muted)]">2020–2026</span>
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">Democritus University of Thrace, Xanthi, Greece</p>
              <p className="mt-2 text-sm italic text-[var(--muted)]">Diploma thesis (10/10): Trajectory Prediction of Vulnerable Road Users at Smart Intersections for Road Safety and Autonomous Driving Applications. Overall grade: 7.58/10.</p>
            </div>
          </Section>

          <Section label="Industry Experience">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--background)]/40 p-5">
              <h2 className="text-lg font-semibold">OZZIE Robotics — Robotics and Computer Vision Internship</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">July–August 2025 · Thessaloniki, Greece</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Curated and annotated a task-specific dataset, trained and evaluated a YOLO-based semantic segmentation model, and contributed to the scene-understanding pipeline for an autonomous delivery robot.</p>
            </div>
          </Section>


          <Section label="Selected Research Projects">
            <div className="divide-y divide-[var(--line)] overflow-hidden rounded-2xl border border-[var(--line)]">
              {["safecrossai", "dynnav", "adaptive-multimodal-slam"].map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is (typeof projects)[number] => Boolean(project)).map((project) => (
                <div key={project.slug} className="flex items-start gap-6 p-5">
                  <span className="mt-0.5 w-28 shrink-0 font-mono text-xs text-[var(--muted)]">{project.year}</span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">{project.title}</p>
                    <p className="mt-0.5 text-xs text-[var(--muted)]">{project.badge}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">{project.objective}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section label="Technical Toolkit">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map(([category, items]) => (
                <div key={category as string} className="rounded-2xl border border-[var(--line)] bg-[var(--background)]/40 p-5">
                  <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{category as string}</p>
                  <ul className="space-y-2">
                    {(items as string[]).map((skill) => (
                      <li key={skill} className="text-sm text-[var(--muted)]">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>



          <Section label="Contact">
            <div className="space-y-2 text-sm">
              <p><span className="inline-block w-32 font-mono text-xs text-[var(--muted)]">Email</span><a href="mailto:p.g2a15@gmail.com" className={link}>p.g2a15@gmail.com</a></p>
              <p><span className="inline-block w-32 font-mono text-xs text-[var(--muted)]">GitHub</span><a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className={link}>github.com/panagiotagrosdouli</a></p>
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
