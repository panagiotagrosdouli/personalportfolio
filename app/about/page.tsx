import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Reveal } from "@/components/portfolio/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Research profile, academic background, technical interests, and research direction of Panagiota Grosdouli.",
};

const groups = [
  ["Robotics systems", ["Visual-inertial localization", "SLAM", "sensor fusion", "motion planning", "ROS 2", "simulation"]],
  ["Learning and perception", ["computer vision", "trajectory prediction", "uncertainty-aware evaluation", "PyTorch", "OpenCV", "data analysis"]],
  ["Research engineering", ["Python", "C/C++", "TypeScript", "Linux", "Git", "Docker", "technical writing"]],
  ["Scientific practice", ["failure-case analysis", "reproducible experiments", "metric design", "ablation planning", "limitations reporting"]],
];

const directions = [
  ["Robust localization", "How can VIO and SLAM systems expose degradation early enough for downstream safety decisions?"],
  ["Uncertainty-aware navigation", "How should robots adapt plans when localization, perception, or map information becomes unreliable?"],
  ["Intelligent mobility", "How can trajectory prediction and interaction reasoning improve safety for vulnerable road users?"],
];

const principles = [
  "Claims should be traceable to implementation status, data, or clearly marked future work.",
  "A robotics system should report uncertainty in a form that a planner or safety layer can actually use.",
  "Research software is strongest when assumptions, limitations, and failure modes are visible to the reader.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <header className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <div className="command-panel overflow-hidden rounded-[2rem] p-3">
              <Image src="/profile.jpg" alt="Panagiota Grosdouli" width={720} height={900} className="aspect-[4/5] w-full rounded-[1.55rem] object-cover grayscale-[15%] saturate-[0.88]" />
            </div>
          </Reveal>
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">About</p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Building a research path in robust autonomous systems.</h1>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-[var(--muted)]">
              <p>I am an Electrical and Computer Engineering student working toward a focused research profile in robotics, perception, localization, planning, and uncertainty-aware autonomy.</p>
              <p>My portfolio is structured as a research environment rather than a project showcase. Each module is framed through a scientific question, current implementation status, limitations, and next experiments.</p>
              <p>The central theme is robust autonomy under uncertainty: how autonomous systems can perceive, estimate, plan, and recover when their inputs are incomplete, degraded, or unreliable.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/research-map" className="focus-ring rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--background)]">Research map</Link>
              <Link href="/cv" className="focus-ring rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--accent)]">Academic CV</Link>
            </div>
          </Reveal>
        </header>

        <section className="mt-20 grid gap-10 border-t border-[var(--line)] pt-12 lg:grid-cols-[300px_1fr]">
          <div><p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Education</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Academic background</h2></div>
          <Reveal><article className="command-panel rounded-[1.5rem] p-6"><div className="flex flex-wrap justify-between gap-4"><h3 className="text-lg font-semibold">MEng Electrical & Computer Engineering</h3><span className="font-mono text-xs text-[var(--muted)]">2020–2026</span></div><p className="mt-2 text-sm text-[var(--muted)]">Democritus University of Thrace, Xanthi, Greece</p><p className="mt-4 text-sm leading-7 text-[var(--muted)]">Thesis direction: trajectory prediction of vulnerable road users at smart intersections, with emphasis on intelligent mobility, uncertainty, and safety-critical decision support.</p></article></Reveal>
        </section>

        <section className="mt-20 grid gap-10 border-t border-[var(--line)] pt-12 lg:grid-cols-[300px_1fr]">
          <div><p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Research directions</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Questions guiding the work.</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {directions.map(([title, text]) => <Reveal key={title}><article className="command-panel h-full rounded-[1.5rem] p-6"><h3 className="font-serif text-2xl tracking-[-0.035em]">{title}</h3><p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p></article></Reveal>)}
          </div>
        </section>

        <section className="mt-20 grid gap-10 border-t border-[var(--line)] pt-12 lg:grid-cols-[300px_1fr]">
          <div><p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Technical profile</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Tools for research software.</h2></div>
          <div className="grid gap-5 md:grid-cols-2">
            {groups.map(([title, items]) => <Reveal key={title as string}><article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6"><h3 className="font-semibold">{title as string}</h3><div className="mt-4 flex flex-wrap gap-2">{(items as string[]).map((item) => <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{item}</span>)}</div></article></Reveal>)}
          </div>
        </section>

        <section className="mt-20 grid gap-10 border-t border-[var(--line)] pt-12 lg:grid-cols-[300px_1fr]">
          <div><p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Research principles</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">How the site presents work.</h2></div>
          <Reveal><div className="command-panel rounded-[1.5rem] p-6"><ul className="space-y-4 text-sm leading-7 text-[var(--muted)]">{principles.map((item) => <li key={item} className="border-l border-[var(--accent)] pl-4">{item}</li>)}</ul></div></Reveal>
        </section>
      </div>
    </main>
  );
}
