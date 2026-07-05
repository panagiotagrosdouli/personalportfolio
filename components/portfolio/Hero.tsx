import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";

function StatusDot() {
  return <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />;
}

const evidence = [
  { label: "Research axis", value: "Prediction · Uncertainty · Safe Autonomy" },
  { label: "Current thesis", value: "VRU trajectory forecasting at smart intersections" },
  { label: "Target fit", value: "Robotics, autonomous systems, and embodied AI labs" },
];

export function Hero() {
  return (
    <section id="top" className="bg-[#fbfaf7] text-stone-950">
      <SiteNav />

      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 pb-20 pt-16 md:grid-cols-[1fr_260px] md:pb-24 md:pt-20">
        <div>
          <p className="section-kicker mb-5">Research Homepage · Robotics · Autonomous Systems</p>
          <h1 className="font-serif text-6xl font-bold leading-[1.02] tracking-[-0.055em] text-stone-950 md:text-8xl">
            Panagiota Grosdouli
          </h1>
          <p className="mt-6 max-w-3xl font-serif text-3xl leading-[1.2] tracking-[-0.025em] text-stone-600 md:text-5xl">
            Building prediction and perception systems for robots that must act safely around people.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-650 md:text-lg md:leading-9">
            I work across vulnerable road-user trajectory prediction, uncertainty-aware robot perception, and risk-aware navigation, with the long-term goal of developing autonomous systems that reason about multiple possible futures before making safety-critical decisions.
          </p>

          <div className="mt-8 flex flex-col gap-2 text-sm leading-7 text-stone-600 md:text-base">
            <span className="flex items-start gap-3">
              <StatusDot />
              MEng Electrical & Computer Engineering — Democritus University of Thrace
            </span>
            <span className="flex items-start gap-3">
              <StatusDot />
              Diploma thesis: trajectory prediction of vulnerable road users at smart intersections
            </span>
            <span className="flex items-start gap-3">
              <StatusDot />
              Applying to PhD programs · Fall 2026 · open for research collaborations
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/research" className="inline-flex items-center bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-80">
              Read Research Statement →
            </Link>
            <Link href="/projects" className="inline-flex items-center border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-50">
              Evidence & Projects
            </Link>
            <Link href="/cv" className="inline-flex items-center px-5 py-3 text-sm font-medium text-stone-500 transition hover:text-stone-950">
              Academic CV
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:pt-8">
          <div
            className="aspect-[3/4] w-36 bg-stone-100 bg-cover bg-center md:w-full"
            style={{ backgroundImage: "url('/profile.png')" }}
            aria-label="Panagiota Grosdouli profile photo"
          />
          <div className="space-y-1 text-xs leading-6 text-stone-500">
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="block transition hover:text-stone-950">
              github.com/PanagiotaGr
            </a>
            <a href="mailto:panagros1@ee.duth.gr" className="block transition hover:text-stone-950">
              panagros1@ee.duth.gr
            </a>
          </div>

          <div className="mt-3 divide-y divide-stone-200 border-y border-stone-200 text-xs leading-6 text-stone-600">
            {evidence.map((item) => (
              <div key={item.label} className="py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400">{item.label}</p>
                <p className="mt-1 font-medium text-stone-800">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
