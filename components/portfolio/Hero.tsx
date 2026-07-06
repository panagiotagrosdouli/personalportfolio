import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";

const signals = [
  { label: "Research axis", value: "Prediction · Uncertainty · Safe Autonomy" },
  { label: "Current thesis", value: "VRU trajectory forecasting at smart intersections" },
  { label: "Personal lens", value: "Robots should understand people before they move" },
];

const proofPoints = [
  "Diploma thesis on human motion forecasting in safety-critical traffic scenes",
  "Research cases across SLAM, risk-aware navigation, UAV autonomy, and intersection perception",
  "A portfolio built around evidence: question, method, evaluation, limits, and next steps",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-stone-950 text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_10%,rgba(52,211,153,0.16),transparent_32%),radial-gradient(circle_at_82%_14%,rgba(251,191,36,0.08),transparent_26%),linear-gradient(120deg,rgba(255,255,255,0.04),transparent_34%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-emerald-300/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <SiteNav theme="dark" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-16 px-6 pb-24 pt-16 md:grid-cols-[1fr_360px] md:px-10 md:pb-32 md:pt-20 lg:px-12">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300 shadow-2xl shadow-emerald-950/20">
            PhD Applicant · Robotics · Human-Aware Autonomy
          </div>

          <h1 className="max-w-5xl font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.06em] text-white md:text-8xl lg:text-9xl">
            Panagiota Grosdouli
          </h1>

          <p className="mt-7 max-w-4xl font-serif text-3xl leading-[1.12] tracking-[-0.035em] text-stone-200 md:text-5xl">
            I study how autonomous systems can forecast human motion before they decide how to act.
          </p>

          <p className="mt-7 max-w-3xl text-base leading-8 text-stone-400 md:text-lg md:leading-9">
            My work connects trajectory prediction, uncertainty-aware perception, and risk-aware planning for robots and intelligent transportation systems operating around people.
          </p>

          <div className="mt-8 max-w-3xl rounded-[1.5rem] border border-emerald-300/15 bg-emerald-300/[0.045] p-5 text-sm leading-7 text-stone-300">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300">Why this direction</p>
            <p className="mt-3">
              I am drawn to autonomy problems where perception is not enough: the system must reason about uncertainty, anticipate people, and choose safer behavior under incomplete information.
            </p>
          </div>

          <div className="mt-10 grid max-w-4xl gap-3 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-stone-300 transition hover:border-emerald-300/40 hover:bg-white/[0.05]">
                {point}
              </div>
            ))}
          </div>

          <div className="mt-11 flex flex-wrap gap-3">
            <Link href="/research" className="inline-flex items-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-emerald-300">
              Research Statement
            </Link>
            <Link href="/projects" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-stone-100 transition hover:border-emerald-400 hover:text-emerald-300">
              View Projects
            </Link>
            <Link href="/cv" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium text-stone-400 transition hover:text-white">
              Academic CV
            </Link>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur md:mt-4">
          <div
            className="aspect-[4/5] rounded-[1.5rem] bg-stone-900 bg-cover bg-center ring-1 ring-white/10"
            style={{ backgroundImage: "url('/profile.png')" }}
            aria-label="Panagiota Grosdouli profile photo"
          />

          <div className="mt-5 rounded-3xl border border-white/10 bg-stone-950/60 p-4">
            <p className="font-serif text-2xl leading-tight tracking-[-0.03em] text-white">Prediction is a safety problem.</p>
            <p className="mt-3 text-xs leading-6 text-stone-400">
              My portfolio is organized as a research dossier for labs working on robotics, computer vision, and autonomous systems.
            </p>
          </div>

          <div className="mt-5 divide-y divide-white/10 border-y border-white/10 text-xs leading-6 text-stone-400">
            {signals.map((item) => (
              <div key={item.label} className="py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">{item.label}</p>
                <p className="mt-1 font-medium text-stone-200">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-1 text-xs leading-6 text-stone-500">
            <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="block transition hover:text-white">
              github.com/panagiotagrosdouli
            </a>
            <a href="mailto:panagros1@ee.duth.gr" className="block transition hover:text-white">
              panagros1@ee.duth.gr
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
