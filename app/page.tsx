import Link from "next/link";

const accent = "text-[#1f5a44]";
const link = "text-[#1f5a44] underline-offset-4 transition hover:underline";

const selectedResearch = [
  {
    title: "Diploma Thesis",
    question: "How can autonomous systems forecast vulnerable road-user motion before making safety-critical decisions?",
    contribution: "Trajectory prediction and uncertainty-aware evaluation for smart-intersection scenarios.",
    status: "Current research",
    href: null,
  },
  {
    title: "SafeCrossAI",
    question: "How can intelligent intersections model interactions between vulnerable road users and connected or autonomous vehicles?",
    contribution: "AI-driven intersection intelligence for infrastructure-level perception, motion prediction, and safety-aware reasoning around vulnerable road users.",
    status: "Public repository · Python · MIT License",
    href: "https://github.com/panagiotagrosdouli/SafeCrossAI",
  },
  {
    title: "Self-Healing VIO for Robust UAV Navigation",
    question: "How can visual-inertial SLAM remain reliable when tracking quality degrades under blur, low light, noise, or frame dropout?",
    contribution: "A self-healing VIO direction that predicts tracking degradation and adapts sensing or recovery strategy for robust UAV navigation.",
    status: "Public repository · Python",
    href: "https://github.com/panagiotagrosdouli/Self-Healing-VIO-for-Robust-UAV-Navigation",
  },
  {
    title: "Adaptive Multi-Modal SLAM",
    question: "How can high-speed UAV navigation adaptively fuse visual foundation models, event cameras, and uncertainty-aware sensing?",
    contribution: "Adaptive multi-modal SLAM with uncertainty-aware sensor fusion for high-speed UAV navigation in visually challenging conditions.",
    status: "Public repository · Python",
    href: "https://github.com/panagiotagrosdouli/Adaptive-Multi-Modal-SLAM-with-Uncertainty-Aware-Sensor-Fusion",
  },
  {
    title: "DynNav",
    question: "How should robots re-plan when they move through unknown environments with dynamic obstacles?",
    contribution: "Dynamic navigation and rerouting in unknown environments, with obstacle avoidance and planning under uncertainty.",
    status: "Public repository",
    href: "https://github.com/panagiotagrosdouli/DynNav-Dynamic-Navigation-Rerouting-in-Unknown-Environments",
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
      <div className="grid gap-10 border-t border-[#ddd9d0] pt-10 md:grid-cols-[220px_1fr]">
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
            <Link href="#research" className="transition hover:text-[#1f5a44]">Research</Link>
            <Link href="#current" className="transition hover:text-[#1f5a44]">Current Work</Link>
            <Link href="#selected" className="transition hover:text-[#1f5a44]">Projects</Link>
            <Link href="/cv" className="transition hover:text-[#1f5a44]">CV</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="grid min-h-[82vh] gap-14 py-20 md:grid-cols-[1fr_340px] md:items-center lg:py-28">
          <div>
            <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${accent}`}>Robotics · Human Motion · Safe Autonomy</p>
            <h1 className="mt-8 max-w-4xl font-serif text-6xl leading-[0.95] tracking-[-0.06em] text-[#1c1c1a] md:text-8xl">
              Panagiota Grosdouli
            </h1>
            <p className="mt-8 max-w-3xl text-3xl leading-tight tracking-[-0.035em] text-[#1c1c1a] md:text-4xl">
              Research software for safer autonomous systems.
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5e5e5a]">
              Building and documenting research projects in intelligent intersections, trajectory prediction, robust visual-inertial SLAM, adaptive multi-modal perception, and uncertainty-aware navigation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium">
              <Link href="#research" className="border border-[#1f5a44] px-5 py-3 text-[#1f5a44] transition hover:bg-[#1f5a44] hover:text-[#faf8f4]">Research</Link>
              <Link href="#selected" className="border border-[#ddd9d0] px-5 py-3 text-[#5e5e5a] transition hover:border-[#1f5a44] hover:text-[#1f5a44]">Projects</Link>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="border border-[#ddd9d0] px-5 py-3 text-[#5e5e5a] transition hover:border-[#1f5a44] hover:text-[#1f5a44]">GitHub</a>
            </div>
          </div>
          <div>
            <img src="profile.png" alt="Portrait of Panagiota Grosdouli" className="aspect-[4/5] w-full object-cover grayscale" />
            <p className="mt-5 border-l border-[#1f5a44] pl-4 text-sm leading-6 text-[#5e5e5a]">
              MEng Electrical & Computer Engineering · research direction in human-aware robotics, prediction, perception, and planning under uncertainty.
            </p>
          </div>
        </header>

        <Section id="research" label="Research Direction" title="Autonomy should reason about people, uncertainty, and failure before acting.">
          <div className="max-w-3xl space-y-6 text-lg leading-9 text-[#5e5e5a]">
            <p>
              My work is organized around autonomous systems as coupled perception, prediction, planning, and safety problems. The goal is to build research software that makes uncertainty, degradation, and interaction risk visible before an autonomous system commits to an action.
            </p>
            <p>
              The selected work connects vulnerable road-user prediction, intelligent intersections, visual-inertial SLAM degradation, event-camera perception, foundation-model-assisted sensing, and dynamic navigation.
            </p>
          </div>
        </Section>

        <Section id="current" label="Current Research" title="Trajectory prediction and uncertainty-aware autonomy for vulnerable road users.">
          <div className="grid gap-10 md:grid-cols-[1fr_260px]">
            <div className="space-y-6 text-base leading-8 text-[#5e5e5a]">
              <p>
                The current thesis work focuses on forecasting pedestrian and vulnerable road-user motion in traffic scenes where autonomous systems must make decisions before the future trajectory is fully observable.
              </p>
              <p>
                SafeCrossAI connects this research direction to intelligent intersections, while the SLAM and DynNav projects extend the same robustness perspective to perception degradation and navigation in unknown environments.
              </p>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className={`inline-flex text-sm font-semibold ${link}`}>
                View GitHub profile
              </a>
            </div>
            <div className="border-t border-[#ddd9d0] pt-5 text-sm leading-7 text-[#5e5e5a] md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <p className="font-semibold text-[#1c1c1a]">Focus</p>
              <p className="mt-2">VRU safety, intelligent intersections, robust SLAM, adaptive perception, dynamic navigation.</p>
              <p className="mt-6 font-semibold text-[#1c1c1a]">Methods</p>
              <p className="mt-2">Motion prediction, VIO, multi-modal SLAM, event cameras, sensor fusion, planning under uncertainty.</p>
            </div>
          </div>
        </Section>

        <Section id="selected" label="Selected Projects" title="Five research contributions, one visual language.">
          <div className="divide-y divide-[#ddd9d0]">
            {selectedResearch.map((item) => (
              <article key={item.title} className="grid gap-6 py-8 md:grid-cols-[220px_1fr]">
                <div>
                  <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#1c1c1a]">{item.title}</h3>
                  <p className={`mt-2 text-xs font-semibold uppercase tracking-[0.2em] ${accent}`}>{item.status}</p>
                </div>
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5e5e5a]">Research question</p>
                  <p className="mt-2 text-lg leading-8 text-[#1c1c1a]">{item.question}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#5e5e5a]">Technical contribution</p>
                  <p className="mt-2 text-base leading-8 text-[#5e5e5a]">{item.contribution}</p>
                  {item.href && (
                    <a href={item.href} target="_blank" rel="noreferrer" className={`mt-5 inline-flex text-sm font-semibold ${link}`}>
                      Repository
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <footer className="border-t border-[#ddd9d0] py-10 text-sm text-[#5e5e5a]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© Panagiota Grosdouli</p>
            <div className="flex gap-5">
              <a href="mailto:panagros1@ee.duth.gr" className="transition hover:text-[#1f5a44]">Email</a>
              <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="transition hover:text-[#1f5a44]">GitHub</a>
              <Link href="/cv" className="transition hover:text-[#1f5a44]">CV</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
