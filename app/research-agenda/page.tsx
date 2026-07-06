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
    evidence: "Diploma thesis on VRU trajectory prediction and related work in autonomous-driving scene understanding.",
  },
  {
    question: "How should robots use uncertainty before acting?",
    direction: "Connect uncertainty estimates from perception and forecasting to downstream planning, risk scoring, and safer decision logic.",
    evidence: "SLAM, risk-aware navigation, UAV autonomy, and DynNav research threads.",
  },
  {
    question: "When does average-case performance hide unsafe behavior?",
    direction: "Study rare failure cases, near misses, calibration, and low-probability high-cost outcomes in navigation and prediction tasks.",
    evidence: "Risk-aware navigation, safety-focused documentation, and failure-case evaluation.",
  },
];

const milestones = [
  "Formalize thesis baselines, datasets, metrics, and failure-case categories.",
  "Add stronger trajectory-prediction models and uncertainty-aware evaluation.",
  "Prepare a technical report or preprint-style artifact from the strongest research thread.",
  "Connect prediction outputs with risk-aware navigation or decision-making experiments.",
];

export default function ResearchAgendaPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <SiteNav theme="dark" />

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Agenda</p>
          <h1 className="max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-white md:text-8xl">
            A PhD direction around prediction, uncertainty, and action.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-300 md:text-2xl md:leading-[3rem]">
            My long-term goal is to develop autonomous systems that can forecast human motion, understand the limits of their predictions, and use uncertainty to make safer decisions.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl divide-y divide-stone-800 border-y border-stone-800">
          {agenda.map((item) => (
            <article key={item.question} className="grid gap-8 py-10 lg:grid-cols-[0.36fr_0.64fr]">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Question</p>
                <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] text-white md:text-5xl">{item.question}</h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-stone-400">
                <p><span className="font-semibold text-stone-200">Direction:</span> {item.direction}</p>
                <p><span className="font-semibold text-stone-200">Current evidence:</span> {item.evidence}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-800 bg-stone-900/40 px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Next Milestones</p>
            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-white">
              What turns this into publishable work.
            </h2>
          </div>
          <ol className="divide-y divide-stone-800 border-y border-stone-800">
            {milestones.map((item, index) => (
              <li key={item} className="grid gap-4 py-5 text-base leading-8 text-stone-400 md:grid-cols-[70px_1fr]">
                <span className="font-mono text-xs text-stone-500">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl border-t border-stone-800 pt-12">
          <p className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] text-white">
            The agenda is intentionally narrow: safer autonomy through prediction, uncertainty, and decision making.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <Link href="/phd-fit" className="rounded-full border border-emerald-400 bg-emerald-400 px-5 py-3 text-stone-950 transition hover:bg-emerald-300">
              PhD Fit
            </Link>
            <Link href="/projects" className="rounded-full border border-stone-700 px-5 py-3 text-stone-300 transition hover:border-stone-400 hover:text-white">
              Research Evidence
            </Link>
          </div>
        </div>
      </section>

      <Footer theme="dark" />
    </main>
  );
}
