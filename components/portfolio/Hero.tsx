import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";

function StatusDot() {
  return <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />;
}

const evidence = [
  { label: "Research axis", value: "Prediction · Uncertainty · Safe Autonomy" },
  { label: "Current thesis", value: "VRU trajectory forecasting at smart intersections" },
  { label: "PhD fit", value: "Robotics, autonomous systems, embodied AI, intelligent transportation" },
];

const proofPoints = [
  "Diploma thesis on human motion forecasting in safety-critical traffic scenes",
  "Independent robotics projects spanning VIO, risk-aware navigation, UAV autonomy, and neuromorphic control",
  "Research portfolio organized around questions, methods, experiments, limitations, and next steps",
];

export function Hero() {
  return (
    <section id="top" className="bg-[#fbfaf7] text-stone-950">
      <SiteNav />

      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 pb-20 pt-16 md:grid-cols-[1fr_310px] md:px-10 md:pb-28 md:pt-20 lg:px-12">
        <div>
          <p className="section-kicker mb-5">Research Homepage · Robotics · Autonomous Systems</p>
          <h1 className="max-w-5xl font-serif text-6xl font-bold leading-[0.92] tracking-[-0.065em] text-stone-950 md:text-8xl lg:text-9xl">
            Panagiota Grosdouli
          </h1>
          <p className="mt-7 max-w-4xl font-serif text-3xl leading-[1.12] tracking-[-0.035em] text-stone-650 md:text-5xl lg:text-6xl">
            I study how robots can anticipate human motion before they act.
          </p>
          <p className="mt-7 max-w-3xl text-base leading-8 text-stone-650 md:text-lg md:leading-9">
            My work connects vulnerable road-user trajectory prediction, uncertainty-aware perception, and risk-aware navigation. I am interested in autonomous systems that represent multiple possible futures, recognize their own uncertainty, and make safer decisions around people.
          </p>

          <div className="mt-9 grid max-w-4xl gap-3 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point} className="border-t border-stone-200 pt-4 text-sm leading-7 text-stone-700">
                {point}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-2 text-sm leading-7 text-stone-600 md:text-base">
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

          <div className="mt-11 flex flex-wrap gap-3">
            <Link href="/research" className="inline-flex items-center bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-80">
              Read Research Statement →
            </Link>
            <Link href="/projects" className="inline-flex items-center border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-50">
              View Research Evidence
            </Link>
            <Link href="/contact" className="inline-flex items-center px-5 py-3 text-sm font-medium text-stone-500 transition hover:text-stone-950">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:pt-8">
          <div
            className="aspect-[3/4] w-40 bg-stone-100 bg-cover bg-center shadow-[0_30px_80px_rgba(28,25,23,0.08)] md:w-full"
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
