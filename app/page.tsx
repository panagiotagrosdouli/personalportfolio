import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiCpu, FiMap, FiShield } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

const focusAreas = [
  {
    title: "Perception",
    text: "Reliable sensing in uncertain environments.",
    Icon: FiCpu,
  },
  {
    title: "Localization",
    text: "Robust VIO, SLAM, and sensor fusion.",
    Icon: FiMap,
  },
  {
    title: "Safe autonomy",
    text: "Risk-aware planning and navigation.",
    Icon: FiShield,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent-soft)]">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="absolute inset-0 research-grid opacity-60" aria-hidden="true" />
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[var(--accent-soft)] blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto grid min-h-[calc(100vh-68px)] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Robotics · AI · Research
            </div>

            <h1 className="mt-8 max-w-4xl font-serif text-6xl leading-[0.88] tracking-[-0.075em] md:text-8xl lg:text-[7.4rem]">
              Panagiota
              <span className="block text-[var(--accent)]">Grosdouli.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--muted)] md:text-2xl md:leading-9">
              Building autonomous systems that understand uncertainty before they act.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent)]">
                View projects <FiArrowUpRight aria-hidden="true" />
              </Link>
              <Link href="/about" className="focus-ring rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--accent)]">
                About me
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
            <div className="command-panel relative overflow-hidden rounded-[2.5rem] p-3">
              <Image
                src="/profile.jpg"
                alt="Panagiota Grosdouli"
                width={720}
                height={900}
                className="aspect-[4/5] w-full rounded-[2rem] object-cover grayscale-[12%] saturate-[0.9]"
                priority
              />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.4rem] border border-white/15 bg-black/65 p-4 text-white backdrop-blur-xl">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#9be7cf]">Research focus</p>
                <p className="mt-2 text-sm font-medium">Robust autonomy under uncertainty</p>
              </div>
            </div>
            <div className="absolute -left-5 top-10 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-xs font-semibold shadow-xl backdrop-blur-xl">
              Perception
            </div>
            <div className="absolute -right-4 bottom-24 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-xs font-semibold shadow-xl backdrop-blur-xl">
              Safety
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Research direction</p>
            <h2 className="mt-4 max-w-lg font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Autonomy that knows its limits.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map(({ title, text, Icon }) => (
              <article key={title} className="group rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]">
                <Icon className="text-xl text-[var(--accent)]" aria-hidden="true" />
                <h3 className="mt-8 font-serif text-2xl tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]/45">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Selected work</p>
              <h2 className="mt-4 font-serif text-5xl tracking-[-0.06em]">Current projects.</h2>
            </div>
            <Link href="/projects" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline">
              All projects <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="focus-ring group flex min-h-72 flex-col rounded-[1.75rem] border border-[var(--line)] bg-[var(--background)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-[var(--muted)]">0{index + 1}</span>
                  <FiArrowUpRight className="text-[var(--muted)] transition group-hover:text-[var(--accent)]" aria-hidden="true" />
                </div>
                <div className="mt-auto">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">{project.domain}</p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.05em]">{project.shortTitle}</h3>
                  <p className="mt-4 text-sm text-[var(--muted)]">{project.status}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="research-grid overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--accent-soft)] p-8 md:flex md:items-center md:justify-between md:p-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Explore</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.05em] md:text-5xl">Research, projects, and ideas.</h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-0">
            <Link href="/research-map" className="focus-ring rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)]">Research map</Link>
            <Link href="/contact" className="focus-ring rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold">Contact</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
