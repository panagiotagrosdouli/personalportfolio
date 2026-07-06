import type { Project } from "@/data/projects";

export function ProjectAbstractPanel({ project }: { project: Project }) {
  return (
    <section className="mt-14 grid gap-6 border-y border-white/10 py-8 md:grid-cols-[0.32fr_0.68fr]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Abstract</p>
        <div className="mt-6 max-w-xs">
          <div className="mb-2 flex items-center justify-between font-mono text-xs text-stone-500">
            <span>Research maturity</span>
            <span>{project.progress}%</span>
          </div>
          <div className="h-px bg-stone-800">
            <div className="h-px bg-emerald-400" style={{ width: `${project.progress}%` }} />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg leading-9 text-stone-300">{project.overview}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="border-t border-white/10 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">Problem</p>
            <p className="mt-3 text-sm leading-7 text-stone-400">{project.questions[0]}</p>
          </div>
          <div className="border-t border-white/10 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">Method</p>
            <p className="mt-3 text-sm leading-7 text-stone-400">{project.methodology.slice(0, 2).join(" · ")}</p>
          </div>
          <div className="border-t border-white/10 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">Status</p>
            <p className="mt-3 text-sm leading-7 text-stone-400">{project.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
