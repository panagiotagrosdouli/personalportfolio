import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "Research Agenda",
  description:
    "Research agenda for Panagiota Grosdouli, focused on trajectory prediction, uncertainty-aware perception, and risk-aware decision making for autonomous systems.",
};

const agenda = [
  {
    question: "How can autonomous systems forecast multiple plausible human futures?",
    direction: "Develop and evaluate trajectory-prediction pipelines for vulnerable road users in smart-intersection and dynamic urban scenes.",
    evidence: "Diploma thesis on VRU trajectory prediction; related work in autonomous-driving scene understanding.",
  },
  {
    question: "How should robots use uncertainty before acting?",
    direction: "Connect uncertainty estimates from perception and forecasting to downstream planning, risk scoring, and safer decision logic.",
    evidence: "AEGIS-VIO, risk-aware UAV autonomy, and DynNav research threads.",
  },
  {
    question: "When does average-case performance hide unsafe behavior?",
    direction: "Study rare failure cases, near misses, calibration, and low-probability high-cost outcomes in navigation and prediction tasks.",
    evidence: "Risk-aware navigation, CVaR-inspired reasoning, and safety-focused project documentation.",
  },
];

const milestones = [
  "Formalize thesis baselines, datasets, metrics, and failure-case categories.",
  "Add stronger trajectory-prediction models and uncertainty-aware evaluation.",
  "Prepare technical report or preprint-style artifact from the strongest research thread.",
  "Connect prediction outputs with risk-aware navigation or decision-making experiments.",
];

export default function ResearchAgendaPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Research Agenda</p>
          <h1 className="mt-4 max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl">
            A PhD direction around prediction, uncertainty, and action.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-700 md:text-2xl md:leading-[3rem]">
            My long-term research goal is to develop autonomous systems that can forecast human motion, understand the limits of their predictions, and use that uncertainty to make safer decisions.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl divide-y divide-stone-200 border-y border-stone-200">
          {agenda.map((item) => (
            <article key={item.question} className="grid gap-8 py-10 lg:grid-cols-[0.36fr_0.64fr]">
              <div>
                <p className="section-kicker mb-4">Research Question</p>
                <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] text-stone-950 md:text-5xl">
                  {item.question}
                </h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-stone-700">
                <p><span className="font-semibold text-stone-950">Direction:</span> {item.direction}</p>
                <p><span className="font-semibold text-stone-950">Current evidence:</span> {item.evidence}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white/45 px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">Next Milestones</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950">
              What turns this into publishable work.
            </h2>
          </div>
          <ol className="divide-y divide-stone-200 border-y border-stone-200">
            {milestones.map((item, index) => (
              <li key={item} className="grid gap-4 py-5 text-base leading-8 text-stone-700 md:grid-cols-[70px_1fr]">
                <span className="font-mono text-xs text-stone-400">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl border-t border-stone-200 pt-12">
          <p className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] text-stone-950">
            This agenda is intentionally narrow: safer autonomy through prediction, uncertainty, and decision making. That focus makes it easier to evaluate fit with robotics, embodied AI, and intelligent transportation labs.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <Link href="/phd-fit" className="rounded-full border border-emerald-950 bg-emerald-950 px-5 py-3 text-white transition hover:bg-stone-950">
              PhD Fit
            </Link>
            <Link href="/projects" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">
              Research Evidence
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
