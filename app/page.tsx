import Link from "next/link";
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { SegmentationConcept, TrajectoryConcept } from "@/components/portfolio/TrajectoryConcept";
import { projects } from "@/data/projects";

const linkedIn = "https://www.linkedin.com/in/panagiota-g-b468b0201";
const github = "https://github.com/panagiotagrosdouli";
const interests = [
  "Trajectory prediction & behavior forecasting",
  "Probabilistic machine learning & uncertainty",
  "Visual perception for autonomous robots",
  "Human-aware and risk-aware navigation",
  "Robust localization and SLAM — future research direction",
];
const methods = ["LSTM", "GRU", "Transformers", "Graph Neural Networks", "Mixture Density Networks", "Deterministic prediction", "Probabilistic forecasting"];
const toolbox = ["Python", "Deep Learning", "Computer Vision", "Semantic Segmentation", "YOLO", "Trajectory Prediction", "Transformers", "LSTM / GRU", "GNNs", "MDNs", "Robotics"];
const explorationSlugs = ["shield-vio", "safecrossai", "dynnav"];
const explorations = explorationSlugs.map((slug) => projects.find((p) => p.slug === slug)).filter((p): p is (typeof projects)[number] => Boolean(p));

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{children}</p>;
}
function SectionHeading({ number, label, title, description }: { number: string; label: string; title: string; description?: string }) {
  return (
    <div className="mb-12 grid gap-5 lg:grid-cols-[.32fr_1fr] lg:gap-12">
      <Kicker>{number} / {label}</Kicker>
      <div>
        <h2 className="max-w-4xl font-serif text-5xl leading-[.96] tracking-[-.055em] sm:text-6xl">{title}</h2>
        {description && <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">{description}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <section id="top" className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="research-grid absolute inset-0 opacity-35" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 md:px-8 md:py-24 lg:grid-cols-[1.04fr_.96fr] lg:gap-16">
          <div>
            <Kicker>Electrical &amp; Computer Engineer · Research portfolio</Kicker>
            <h1 className="mt-7 max-w-3xl font-serif text-[clamp(3.4rem,6.8vw,6.9rem)] leading-[.9] tracking-[-.065em]">
              Understanding motion.
              <span className="mt-4 block italic font-normal text-[var(--accent)]">Building intelligent perception.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              I work at the intersection of machine learning, computer vision and autonomous systems — from predicting vulnerable road users&apos; trajectories to robotic scene understanding.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#research" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent)]">
                Explore my research <FiArrowDown aria-hidden="true" />
              </a>
              <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--accent)]">
                <FiLinkedin aria-hidden="true" /> LinkedIn <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-[var(--line)] pt-6">
              <div><p className="font-mono text-[11px] uppercase tracking-[.17em] text-[var(--muted)]">Degree</p><p className="mt-1 font-serif text-2xl">MEng · 2026</p></div>
              <div><p className="font-mono text-[11px] uppercase tracking-[.17em] text-[var(--muted)]">Diploma thesis</p><p className="mt-1 font-serif text-2xl">10 / 10</p></div>
              <div><p className="font-mono text-[11px] uppercase tracking-[.17em] text-[var(--muted)]">Research domains</p><p className="mt-1 font-serif text-2xl">AI · Robotics</p></div>
            </div>
          </div>
          <div className="w-full max-w-2xl justify-self-end">
            <TrajectoryConcept />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading number="01" label="About" title="From human motion to reliable autonomy." />
          <div className="grid gap-10 lg:grid-cols-[.32fr_1fr] lg:gap-12">
            <div className="hidden lg:block"><span className="font-serif text-7xl italic text-[var(--accent)]">PG.</span></div>
            <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr]">
              <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
                <p>I recently completed my five-year Integrated Master&apos;s degree in Electrical and Computer Engineering at Democritus University of Thrace, Greece.</p>
                <p>My diploma thesis investigated deep-learning approaches to motion prediction for vulnerable road users at smart intersections. During my robotics internship, I also worked on perception for an autonomous delivery robot.</p>
                <p>These experiences motivated my interest in autonomous systems that perceive uncertain environments, anticipate human motion and support safer decisions. I am seeking opportunities to develop these questions further through doctoral research.</p>
              </div>
              <div>
                <Kicker>Research interests</Kicker>
                <ol className="mt-5 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {interests.map((item, i) => (
                    <li key={item} className="flex gap-4 py-3.5">
                      <span className="pt-1 font-mono text-xs text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-serif text-xl leading-6">{item}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs leading-5 italic text-[var(--muted)]">Research interests are directions for future study, not claims of completed work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="scroll-mt-24 border-b border-[var(--line)] bg-[var(--panel)]/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading number="02" label="Featured research" title="Predicting the next movement." description="Diploma thesis — real-world road-user motion forecasting at urban intersections." />
          <div className="grid gap-9 lg:grid-cols-[.32fr_1fr] lg:gap-12">
            <div>
              <div className="inline-flex rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] px-4 py-2 font-mono text-xs font-semibold text-[var(--accent)]">Diploma Thesis · 2026</div>
              <p className="mt-5 font-mono text-xs text-[var(--muted)]">Democritus University of Thrace</p>
              <p className="mt-1 font-serif text-3xl">Grade: 10 / 10</p>
            </div>
            <article>
              <h3 className="max-w-4xl font-serif text-3xl leading-tight tracking-[-.04em] sm:text-4xl">
                Trajectory Prediction of Vulnerable Road Users at Smart Intersections for Road Safety and Autonomous Driving Applications
              </h3>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <p className="text-base leading-8 text-[var(--muted)]">
                  I developed and evaluated deep learning models for predicting future trajectories of pedestrians, cyclists, e-scooter riders and motorcyclists, using real-world traffic data.
                </p>
                <p className="text-base leading-8 text-[var(--muted)]">
                  The work explored deterministic and probabilistic forecasting, uncertainty, contextual information and interactions between road users across recurrent, attention-based, graph-based and density-based model families.
                </p>
              </div>
              <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
                <div className="bg-[var(--background)] p-5"><Kicker>Road users</Kicker><p className="mt-3 font-serif text-xl">Pedestrians, cyclists, e-scooters &amp; motorcyclists</p></div>
                <div className="bg-[var(--background)] p-5"><Kicker>Approach</Kicker><p className="mt-3 font-serif text-xl">Deterministic &amp; probabilistic prediction</p></div>
                <div className="bg-[var(--background)] p-5"><Kicker>Model families</Kicker><p className="mt-3 font-serif text-xl">RNN · Attention · GNN · MDN</p></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {methods.map((t) => <span key={t} className="rounded-full border border-[var(--line)] px-3 py-1.5 font-mono text-[11px] text-[var(--muted)]">{t}</span>)}
              </div>
              <Link href="/projects/diploma-thesis" className="focus-ring mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline">
                Explore the thesis research page <FiArrowUpRight aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading number="03" label="Projects" title="Perception in practice." description="Practical robotics experience alongside independent research prototypes and explorations." />
          <article className="grid items-center gap-12 rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6 md:p-9 lg:grid-cols-[1fr_1fr]">
            <div>
              <Kicker>OZZIE Robotics / Summer 2025</Kicker>
              <h3 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-.04em] sm:text-5xl">
                Semantic Segmentation for an Autonomous Delivery Robot
              </h3>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
                During my internship, I curated and annotated a task-specific dataset, then trained and evaluated a YOLO-based semantic segmentation model to support scene understanding for an autonomous delivery robot.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Computer Vision", "YOLO", "Data annotation", "Robot perception"].map((t) => <span key={t} className="rounded-full border border-[var(--line)] px-3 py-1.5 font-mono text-xs text-[var(--muted)]">{t}</span>)}
              </div>
            </div>
            <SegmentationConcept />
          </article>
          <div className="mt-16 flex flex-wrap items-end justify-between gap-5">
            <div>
              <Kicker>Additional work</Kicker>
              <h3 className="mt-3 font-serif text-4xl tracking-[-.04em] sm:text-5xl">Research prototypes &amp; directions</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">Selected work already documented in this portfolio. Each project page describes its scope and maturity.</p>
            </div>
            <Link href="/projects" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline">All projects <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {explorations.map((project) => (
              <Link key={project.slug} href={"/projects/" + project.slug} className="focus-ring group flex min-h-72 flex-col rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-[.13em] text-[var(--accent)]">{project.domain}</span>
                  <span className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[10px] text-[var(--muted)]">{project.status}</span>
                </div>
                <h4 className="mt-9 font-serif text-3xl tracking-[-.04em]">{project.shortTitle}</h4>
                <p className="mt-4 flex-grow text-sm leading-7 text-[var(--muted)]">{project.technicalContribution}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold group-hover:text-[var(--accent)]">Read project <FiArrowUpRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
          <div className="mt-14 border-t border-[var(--line)] pt-9">
            <Kicker>Methods &amp; toolbox</Kicker>
            <ul className="mt-5 flex flex-wrap gap-2">
              {toolbox.map((t) => <li key={t} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--muted)]">{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 border-b border-[var(--line)] bg-[var(--panel)]/45">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading number="04" label="Experience" title="Building with real robotic systems." />
          <div className="grid gap-8 lg:grid-cols-[.32fr_1fr] lg:gap-12">
            <p className="font-mono text-xs leading-6 text-[var(--muted)]">Jul 2025 – Aug 2025<br />Thessaloniki, Greece</p>
            <article className="border-t border-[var(--line)] pt-6">
              <h3 className="font-serif text-3xl">OZZIE Robotics — Robotics / Computer Vision Intern</h3>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-8 text-[var(--muted)] marker:text-[var(--accent)]">
                <li>Curated and annotated a task-specific image dataset.</li>
                <li>Trained and evaluated a YOLO-based semantic segmentation model for autonomous delivery robot perception.</li>
                <li>Contributed to a scene-understanding pipeline in Python.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-24 border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading number="05" label="Education" title="A foundation in engineering and intelligent systems." />
          <div className="grid gap-8 lg:grid-cols-[.32fr_1fr] lg:gap-12">
            <p className="font-mono text-xs leading-6 text-[var(--muted)]">Oct 2020 – Oct 2026</p>
            <article className="border-t border-[var(--line)] pt-6">
              <h3 className="font-serif text-3xl sm:text-4xl">Democritus University of Thrace</h3>
              <p className="mt-3 text-lg text-[var(--muted)]">Integrated Master (MEng) in Electrical and Computer Engineering · 300 ECTS</p>
              <div className="mt-6 flex flex-wrap gap-9">
                <div><Kicker>GPA</Kicker><p className="mt-2 font-serif text-3xl">7.58 / 10</p></div>
                <div><Kicker>Diploma thesis</Kicker><p className="mt-2 font-serif text-3xl">10 / 10</p></div>
                <div><Kicker>Graduated</Kicker><p className="mt-2 font-serif text-3xl">2026</p></div>
              </div>
            </article>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-[.32fr_1fr] lg:gap-12">
            <p className="font-mono text-xs leading-6 text-[var(--muted)]">Oct 2025<br />Selected training</p>
            <article className="border-t border-[var(--line)] pt-6">
              <h3 className="font-serif text-3xl">Artificial Intelligence for Robotics</h3>
              <p className="mt-3 text-base text-[var(--muted)]">University of Ljubljana, Faculty of Mechanical Engineering</p>
              <p className="mt-2 text-sm text-[var(--muted)]">AI Robotics Academy · EIT Deep Tech Talent Initiative · 60 hours</p>
            </article>
          </div>
          <div className="mt-12 flex flex-wrap gap-3 lg:ml-[calc(32%+3rem)]">
            <Link href="/cv" className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--accent)]">View academic CV <FiArrowUpRight aria-hidden="true" /></Link>
            <Link href="/about" className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--accent)]">Extended profile <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--panel)]/50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 md:px-8 lg:grid-cols-[.32fr_1fr] lg:gap-12">
          <Kicker>Independent development</Kicker>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl">EYLO AI</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">An independent research workspace exploring source-backed scholarly discovery, AI-assisted workflows and evidence-aware project execution.</p>
            </div>
            <a href="https://eyloai.vercel.app/" target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline">Explore EYLO <FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#122924] text-[#f4faf5]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[.32fr_1fr] lg:gap-12">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[.2em] text-[#9cd9c6]">06 / Contact</p>
          <div>
            <h2 className="max-w-4xl font-serif text-5xl leading-[.96] tracking-[-.05em] sm:text-6xl">
              Open to research collaborations, <em className="text-[#9cd9c6]">PhD opportunities</em> and engineering roles.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c6d9d0]">
              I welcome conversations about machine learning for robotics, human motion prediction, robot perception, and safe autonomy.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#eff7f2] px-6 py-3 text-sm font-semibold text-[#122924] transition hover:bg-[#c6e5d9]"><FiLinkedin aria-hidden="true"/>Connect on LinkedIn <FiArrowUpRight aria-hidden="true"/></a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#53786b] px-6 py-3 text-sm font-semibold transition hover:bg-[#24453a]"><FiGithub aria-hidden="true"/>GitHub <FiArrowUpRight aria-hidden="true"/></a>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-[#2f5547] bg-[#122924] text-[#c6d9d0]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-7 text-xs md:flex-row md:px-8">
          <span>© 2026 Panagiota Grosdouli</span>
          <span className="font-serif text-base italic">Motion, perception, and the people in between.</span>
        </div>
      </footer>
    </main>
  );
}
