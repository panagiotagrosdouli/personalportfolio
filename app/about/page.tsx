import type { Metadata } from "next";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Reveal } from "@/components/portfolio/Reveal";

export const metadata: Metadata = { title: "About", description: "Academic profile, research journey, skills and goals of Panagiota Grosdouli." };

const groups = [
  ["Programming languages", ["Python", "TypeScript", "JavaScript", "C/C++", "MATLAB"]],
  ["Robotics stack", ["ROS 2", "SLAM", "VIO", "motion planning", "sensor fusion", "simulation"]],
  ["AI stack", ["PyTorch", "NumPy", "Pandas", "model evaluation", "uncertainty analysis"]],
  ["Computer vision stack", ["OpenCV", "feature tracking", "segmentation demos", "trajectory analysis", "visualization"]],
  ["Research engineering", ["Git", "Linux", "Docker", "testing", "reproducible experiments", "technical writing"]],
  ["Languages spoken", ["Greek", "English"]],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">About</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Research journey toward robust, uncertainty-aware autonomy.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">My academic direction connects electrical and computer engineering with robotics, perception, estimation, planning, and safety. The portfolio intentionally avoids inflated claims and presents each repository as an evolving research object.</p>
        </Reveal>

        <section className="mt-16 grid gap-10 border-t border-[var(--line)] pt-12 lg:grid-cols-[260px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Education</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Academic background</h2></div>
          <Reveal><article className="rounded-[1.5rem] border border-[var(--line)] p-6"><div className="flex flex-wrap justify-between gap-4"><h3 className="text-lg font-semibold">MEng Electrical & Computer Engineering</h3><span className="font-mono text-xs text-[var(--muted)]">2020–2026</span></div><p className="mt-2 text-sm text-[var(--muted)]">Democritus University of Thrace, Xanthi, Greece</p><p className="mt-4 text-sm leading-7 text-[var(--muted)]">Thesis direction: trajectory prediction of vulnerable road users at smart intersections.</p></article></Reveal>
        </section>

        <section className="mt-16 grid gap-10 border-t border-[var(--line)] pt-12 lg:grid-cols-[260px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Technical skills</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Tools used for research software.</h2></div>
          <div className="grid gap-5 md:grid-cols-2">
            {groups.map(([title, items]) => <Reveal key={title as string}><article className="rounded-[1.5rem] border border-[var(--line)] p-6"><h3 className="font-semibold">{title as string}</h3><div className="mt-4 flex flex-wrap gap-2">{(items as string[]).map((item) => <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{item}</span>)}</div></article></Reveal>)}
          </div>
        </section>

        <section className="mt-16 grid gap-10 border-t border-[var(--line)] pt-12 lg:grid-cols-[260px_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Career goals</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Graduate research fit.</h2></div>
          <Reveal><div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)]"><p>I am preparing for PhD-level research in robotics and AI laboratories focused on robust perception, SLAM, safe navigation, uncertainty-aware autonomy, UAV systems, and intelligent mobility.</p><p>The long-term goal is to build autonomous systems whose internal uncertainty is visible, testable, and useful for downstream decision making.</p></div></Reveal>
        </section>
      </div>
    </main>
  );
}
