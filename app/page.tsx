import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";
import { projects } from "@/data/projects";

const selected = ["safecrossai", "shield-vio", "dynnav"]
  .map((slug) => projects.find((item) => item.slug === slug))
  .filter((item): item is (typeof projects)[number] => Boolean(item));

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-10 md:py-28">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Electrical & Computer Engineer · MEng</p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.06em] md:text-7xl">Panagiota<br />Grosdouli<span className="text-[var(--muted)]">.</span></h1>
          <p className="mt-7 max-w-xl text-xl leading-8 text-[var(--muted)]">Machine Learning. Computer Vision. Robotics.</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">I work on trajectory prediction and robotic perception, with experience in deep learning research and YOLO-based segmentation.</p>
          <div className="mt-9 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/projects" className="rounded-full bg-[var(--foreground)] px-6 py-3 text-[var(--background)]">View work ↗</Link>
            <Link href="/contact" className="rounded-full border border-[var(--line)] px-6 py-3">Get in touch</Link>
          </div>
          <p className="mt-8 text-xs text-[var(--muted)]">Open to junior engineering and research opportunities.</p>
        </div>
        <div className="mx-auto w-full max-w-[360px]">
          <Image src={`${process.env.GITHUB_ACTIONS === "true" ? "/personalportfolio" : ""}/profile.png`} alt="Panagiota Grosdouli" width={720} height={900} priority sizes="(max-width: 768px) 90vw, 360px" className="aspect-[4/5] w-full rounded-2xl object-cover grayscale-[12%]" />
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight">Selected work</h2>
            <Link href="/projects" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">All projects ↗</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {selected.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group flex min-h-52 flex-col justify-between rounded-xl border border-[var(--line)] p-6 transition hover:border-[var(--foreground)]">
                <span className="text-xs text-[var(--muted)]">{project.slug === "safecrossai" ? "Diploma thesis" : project.status}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{project.shortTitle}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.domain}</p>
                </div>
                <span className="mt-5 text-sm">Explore ↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-[1fr_2fr] md:px-10">
          <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
          <div>
            <p className="text-lg font-semibold">OZZIE Robotics <span className="font-normal text-[var(--muted)]">· Computer Vision Intern</span></p>
            <p className="mt-2 text-sm text-[var(--muted)]">2025 · YOLO-based road and sidewalk segmentation for an autonomous delivery robot.</p>
            <p className="mt-8 text-lg font-semibold">Democritus University of Thrace <span className="font-normal text-[var(--muted)]">· Integrated MEng</span></p>
            <p className="mt-2 text-sm text-[var(--muted)]">2026 · Diploma thesis in vulnerable road-user trajectory prediction (10/10).</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
