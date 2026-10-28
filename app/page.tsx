import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

const featured = ["safecrossai", "shield-vio", "dynnav"]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <section className="grid min-h-[70vh] items-center gap-12 border-b border-[var(--line)] py-20 md:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Robotics · AI · Autonomous Systems</p>
            <h1 className="mt-6 font-serif text-6xl leading-[0.96] tracking-[-0.06em] md:text-8xl">Panagiota<br />Grosdouli<span className="text-[var(--accent)]">.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Electrical & Computer Engineering researcher interested in reliable robotic perception and autonomy under uncertainty.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-semibold">
              <Link className="focus-ring inline-flex items-center gap-2 border-b border-[var(--accent)] pb-1 text-[var(--accent)]" href="/projects">View projects <FiArrowUpRight /></Link>
              <Link className="focus-ring inline-flex items-center gap-2 border-b border-[var(--line)] pb-1" href="/cv">Academic CV <FiArrowUpRight /></Link>
              <Link className="focus-ring inline-flex items-center gap-2 border-b border-[var(--line)] pb-1" href="/contact">Contact <FiArrowUpRight /></Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[260px]">
            <Image src={`${process.env.GITHUB_ACTIONS === "true" ? "/personalportfolio" : ""}/profile.png`} alt="Portrait of Panagiota Grosdouli" width={520} height={650} priority sizes="(max-width: 768px) 260px, 260px" className="aspect-[4/5] w-full rounded-2xl object-cover" />
          </div>
        </section>

        <section className="py-20" aria-labelledby="selected-projects">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4"><h2 id="selected-projects" className="font-serif text-4xl tracking-[-0.045em] md:text-5xl">Selected work</h2><Link href="/projects" className="text-sm text-[var(--accent)] hover:underline">All projects ↗</Link></div>
          <div className="divide-y divide-[var(--line)] border-t border-b border-[var(--line)]">
            {featured.map((project, i) => <Link key={project.slug} href={`/projects/${project.slug}`} className="focus-ring group grid gap-3 py-7 transition hover:text-[var(--accent)] sm:grid-cols-[40px_1fr_auto] sm:items-center">
              <span className="font-mono text-xs text-[var(--muted)]">0{i + 1}</span>
              <div><h3 className="text-xl font-semibold tracking-tight">{project.shortTitle}</h3><p className="mt-1 text-sm text-[var(--muted)]">{project.domain}</p></div><FiArrowUpRight className="text-lg" aria-hidden="true" />
            </Link>)}
          </div>
        </section>

        <section className="grid gap-7 border-t border-[var(--line)] py-20 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="font-serif text-4xl tracking-[-0.04em]">Research focus</h2>
          <div><p className="max-w-xl text-lg leading-8 text-[var(--muted)]">Visual-inertial odometry, SLAM, sensor fusion, and risk-aware navigation.</p><Link href="/about" className="mt-5 inline-block text-sm font-semibold text-[var(--accent)] hover:underline">More about me ↗</Link></div>
        </section>

        <section className="flex flex-wrap items-center justify-between gap-6 border-t border-[var(--line)] py-16">
          <div><p className="font-serif text-3xl">EYLO AI</p><p className="mt-2 max-w-lg text-sm leading-7 text-[var(--muted)]">An independent workspace for AI-assisted research discovery and project execution.</p></div>
          <a href="https://eyloai.vercel.app/" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">Visit EYLO <FiArrowUpRight /></a>
        </section>
      </div>
    </main>
  );
}
