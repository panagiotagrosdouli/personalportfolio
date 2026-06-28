import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

const repos = [
  {
    name: "DynNav",
    type: "Independent Research Project",
    description: "Risk-aware navigation in dynamic environments, with emphasis on uncertainty, unsafe outcomes, and multi-agent interaction.",
    tags: ["ROS2", "navigation", "risk-aware planning"],
    href: "https://github.com/PanagiotaGr",
  },
  {
    name: "F1 AI Forecasting Platform",
    type: "Applied Machine Learning",
    description: "Probabilistic forecasting and simulation platform for race-outcome analysis using historical data and uncertainty modelling.",
    tags: ["forecasting", "simulation", "data analysis"],
    href: "https://github.com/PanagiotaGr",
  },
];

export default function OpenSourcePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <p className="section-kicker mb-4">Open Source</p>
        <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.055em] md:text-7xl">
          Research code and engineering projects.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-stone-650">
          Selected repositories connected to robotics, forecasting, autonomous systems, and applied machine learning.
        </p>

        <div className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
          {repos.map((repo) => (
            <a key={repo.name} href={repo.href} target="_blank" rel="noreferrer" className="group block py-7 transition hover:bg-white/60 md:px-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="border border-stone-200 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">{repo.type}</span>
                {repo.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] text-stone-400">{tag}</span>
                ))}
              </div>
              <h2 className="font-serif text-3xl leading-none tracking-[-0.04em] text-stone-950 group-hover:text-emerald-950 md:text-4xl">{repo.name}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">{repo.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4">View repository →</span>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
