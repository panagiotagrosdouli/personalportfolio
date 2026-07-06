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
  "Independent robotics research spanning multi-modal SLAM, UAV navigation, and intersection perception",
  "Research portfolio organized around questions, methods, experiments, limitations, and next steps",
];

export function Hero() {
  return (
    <section id="top" className="bg-stone-950 text-stone-100">
      <SiteNav theme="dark" />

      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 pb-20 pt-16 md:grid-cols-[1fr_310px] md:px-10 md:pb-28 md:pt-20 lg:px-12">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">
            Research Homepage · Robotics · Autonomous Systems
          </p>
          <h1 className="max-w-5xl font-serif text-6xl font-bold leading-[0.92] tracking-[-0.065em] text-white md:text-8xl lg:text-9xl">
            Panagiota Grosdouli
          </h1>
          <p className="mt-7 max-w-4xl font-serif text-3xl leading-[1.12] tracking-[-0.035em] text-stone-300 md:text-5xl lg:text-6xl">
            I study how robots can anticipate human motion before they act.
          </p>
          <p className="mt-7 max-w-3xl text-base leading-8 text-stone-400 md:text-lg md:leading-9">
            My work connects vulnerable road-user trajectory prediction, uncertainty-aware perception, and risk-aware navigation. I am interested in autonomous systems that represent multiple possible futures, recognize their own uncertainty, and make safer decisions around people.
          </p>

          <div className="mt-9 grid max-w-4xl gap-3 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point} className="border-t border-stone-800 pt-4 text-sm leading-7 text-stone-300">
                {point}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-2 text-sm leading-7 text-stone-400 md:text-base">
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
            <Link href="/projects" className="inline-flex items-center bg-emerald-500 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-emerald-400">
              View Projects →
            </Link>
            <Link href="/contact" className="inline-flex items-center border border-stone-700 px-5 py-3 text-sm font-medium text-stone-100 transition hover:border-stone-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:pt-8">
          <div
            className="aspect-[3/4] w-40 bg-stone-900 bg-cover bg-center shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:w-full"
            style={{ backgroundImage: "url('/profile.png')" }}
            aria-label="Panagiota Grosdouli profile photo"
          />
          <div className="space-y-1 text-xs leading-6 text-stone-500">
            <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="block transition hover:text-white">
              github.com/panagiotagrosdouli
            </a>
            <a href="mailto:panagros1@ee.duth.gr" className="block transition hover:text-white">
              panagros1@ee.duth.gr
            </a>
          </div>

          <div className="mt-3 divide-y divide-stone-800 border-y border-stone-800 text-xs leading-6 text-stone-400">
            {evidence.map((item) => (
              <div key={item.label} className="py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">{item.label}</p>
                <p className="mt-1 font-medium text-stone-200">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
