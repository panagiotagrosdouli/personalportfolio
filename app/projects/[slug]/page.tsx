import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

const projects = {
  "trajectory-prediction-vrus": {
    title: "Trajectory Prediction of Vulnerable Road Users",
    subtitle: "Diploma Thesis · Active · 2025–2026",
    progress: 72,
    overview:
      "This research investigates how autonomous systems can anticipate the future motion of vulnerable road users at smart intersections. The project connects trajectory prediction, uncertainty-aware modelling, and safety-relevant decision making for intelligent transportation systems.",
    questions: [
      "How can future pedestrian and vulnerable road-user trajectories be forecast in complex intersection scenarios?",
      "How should uncertainty be represented when multiple future motions are plausible?",
      "Which failure cases matter most when trajectory prediction is used for autonomous decision making?",
    ],
    methodology: ["Trajectory preprocessing", "Input-output sequence modelling", "Baseline forecasting evaluation", "ADE/FDE and failure-case inspection"],
    experiments: ["Baseline trajectory forecasting", "Uncertainty-aware evaluation design", "Smart-intersection scenario analysis"],
    literature: ["Social GAN", "Trajectron++", "Wayformer", "Interaction-aware trajectory forecasting"],
    future: ["Add stronger sequence models", "Evaluate multi-modal predictions", "Study calibration and rare unsafe cases"],
  },
  dynnav: {
    title: "DynNav: Risk-Aware Navigation in Dynamic Environments",
    subtitle: "Independent Research Project · Active · 2025–Present",
    progress: 58,
    overview:
      "DynNav is a self-directed research project exploring robot navigation under uncertainty. The work focuses on dynamic agents, unsafe outcomes, CVaR-inspired risk reasoning, ROS2-based experimentation, reinforcement learning, and multi-agent coordination.",
    questions: [
      "How can navigation systems reason about low-probability but high-cost unsafe outcomes?",
      "When does risk-aware planning become too conservative?",
      "How should robots behave around moving agents with uncertain intent?",
    ],
    methodology: ["ROS2 simulation", "Risk-aware scenario design", "CVaR-inspired decision logic", "Multi-agent interaction analysis"],
    experiments: ["Dynamic-agent navigation scenarios", "Near-miss and collision-risk analysis", "Risk sensitivity comparison"],
    literature: ["Risk-sensitive planning", "Safe robot navigation", "CVaR in decision making", "Multi-agent reinforcement learning"],
    future: ["Tune risk sensitivity", "Expand scenario diversity", "Compare with nominal navigation baselines"],
  },
  "f1-ai-forecasting": {
    title: "F1 AI Forecasting Platform",
    subtitle: "Applied Machine Learning · Complete · 2025",
    progress: 100,
    overview:
      "A probabilistic forecasting platform for race-outcome analysis using historical racing data, feature engineering, uncertainty modelling, Monte Carlo simulation, and interactive visual analytics.",
    questions: [
      "How can probabilistic simulation make forecasts more informative than deterministic ranking?",
      "Which features most influence race-outcome uncertainty?",
      "How can uncertainty be communicated clearly through interactive tools?",
    ],
    methodology: ["Feature engineering", "Probabilistic modelling", "Monte Carlo simulation", "Interactive visualization"],
    experiments: ["Race-outcome simulations", "Distributional forecast analysis", "Prediction uncertainty inspection"],
    literature: ["Forecasting methods", "Monte Carlo simulation", "Probabilistic modelling"],
    future: ["Add richer contextual features", "Improve calibration", "Evaluate over multiple race weekends"],
  },
  "robotics-vision-internship": {
    title: "Robotics & Computer Vision Work",
    subtitle: "Applied Robotics · Complete · 2025",
    progress: 100,
    overview:
      "Applied perception work in a robotics engineering environment, connecting computer vision pipelines with autonomy and robotic decision making.",
    questions: [
      "How do perception pipelines support downstream robotic autonomy?",
      "Which engineering constraints appear when vision systems move from prototypes to applied robotics?",
      "How can perception work inform safer autonomous-system design?",
    ],
    methodology: ["Computer vision pipeline work", "Robotics engineering context", "Applied perception analysis"],
    experiments: ["Perception pipeline development", "Robotic vision system support"],
    literature: ["Computer vision for robotics", "Perception for autonomous systems"],
    future: ["Connect perception outputs with prediction and planning", "Study robustness in real-world robotic settings"],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

function ReportSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-stone-200 py-10">
      <div className="grid gap-5 md:grid-cols-[180px_1fr]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">{label}</p>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <article className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <Link href="/projects" className="text-sm text-stone-500 transition hover:text-stone-950">← Back to projects</Link>
        <p className="section-kicker mt-10">Project Report</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.94] tracking-[-0.055em] md:text-7xl">
          {project.title}
        </h1>
        <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-stone-400">{project.subtitle}</p>

        <div className="mt-8 max-w-xs">
          <div className="mb-2 flex items-center justify-between font-mono text-xs text-stone-500">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="h-px bg-stone-200">
            <div className="h-px bg-stone-950" style={{ width: `${project.progress}%` }} />
          </div>
        </div>

        <div className="mt-14">
          <ReportSection label="Overview">
            <p className="max-w-3xl text-base leading-8 text-stone-650">{project.overview}</p>
          </ReportSection>

          <ReportSection label="Research Questions">
            <ul className="space-y-3">
              {project.questions.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-stone-650"><span className="text-stone-300">—</span>{item}</li>
              ))}
            </ul>
          </ReportSection>

          <ReportSection label="Methodology">
            <div className="flex flex-wrap gap-2">
              {project.methodology.map((item) => (
                <span key={item} className="border border-stone-200 bg-white px-3 py-1.5 font-mono text-[11px] text-stone-600">{item}</span>
              ))}
            </div>
          </ReportSection>

          <ReportSection label="Experiments">
            <ul className="space-y-3">
              {project.experiments.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-stone-650"><span className="text-stone-300">—</span>{item}</li>
              ))}
            </ul>
          </ReportSection>

          <ReportSection label="Related Literature">
            <div className="flex flex-wrap gap-2">
              {project.literature.map((item) => (
                <span key={item} className="border border-stone-200 bg-white px-3 py-1.5 font-mono text-[11px] text-stone-600">{item}</span>
              ))}
            </div>
          </ReportSection>

          <ReportSection label="Future Work">
            <ul className="space-y-3">
              {project.future.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-stone-650"><span className="text-stone-300">—</span>{item}</li>
              ))}
            </ul>
          </ReportSection>
        </div>
      </article>
      <Footer />
    </main>
  );
}
