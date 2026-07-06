import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";

const signals = [
  { label: "Research area", value: "Robotics · Perception · Prediction" },
  { label: "Current thesis", value: "VRU trajectory forecasting at smart intersections" },
  { label: "Direction", value: "Human-aware autonomy under uncertainty" },
];

const proofPoints = [
  "Trajectory prediction for people in shared traffic environments",
  "Robotic perception through SLAM, VIO, and sensor fusion",
  "Navigation and planning under uncertainty through DynNav-style work",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0b0f0d] text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(52,211,153,0.14),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <SiteNav theme="dark" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-14 md:grid-cols-[1fr_390px] md:px-10 md:pb-32 md:pt-20 lg:px-12">
        <div>
          <div className="mb-7 inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
            MEng Student · Robotics Research · PhD Track
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">Panagiota Grosdouli</p>
          <h1 className="mt-4 max-w-5xl font-serif text-6xl font-semibold leading-[0.88] tracking-[-0.06em] text-white md:text-8xl lg:text-9xl">
            Human-aware robotics, from perception to prediction.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-stone-300 md:text-2xl md:leading-10">
            I am building a research profile around autonomous systems that perceive uncertain scenes, forecast human motion, and plan more responsibly around people.
          </p>

          <div className="mt-9 grid max-w-4xl gap-3 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-stone-300">
                {point}
              </div>
            ))}
          </div>

          <div className="mt-11 flex flex-wrap gap-3">
            <Link href="/research" className="inline-flex items-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-emerald-300">
              Research Direction
            </Link>
            <Link href="/phd-fit" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-stone-100 transition hover:border-emerald-400 hover:text-emerald-300">
              PhD Fit
            </Link>
            <Link href="/cv" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium text-stone-400 transition hover:text-white">
              Academic CV
            </Link>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur">
          <div
            className="aspect-[4/5] rounded-[1.5rem] bg-stone-900 bg-cover bg-center ring-1 ring-white/10"
            style={{ backgroundImage: "url('/profile.png')" }}
            aria-label="Panagiota Grosdouli profile photo"
          />

          <div className="mt-5 rounded-3xl border border-white/10 bg-stone-950/60 p-4">
            <p className="font-serif text-2xl leading-tight tracking-[-0.03em] text-white">Research question</p>
            <p className="mt-3 text-xs leading-6 text-stone-400">
              How can robots use prediction and uncertainty to behave better around people?
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
