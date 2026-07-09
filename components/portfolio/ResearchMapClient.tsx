"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FiExternalLink, FiGitBranch, FiTarget } from "react-icons/fi";
import { researchEdges, researchNodes, type ResearchNode } from "@/data/researchGraph";

const statusClass: Record<ResearchNode["status"], string> = {
  Core: "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--foreground)]",
  Active: "border-[var(--accent)] bg-[var(--panel)] text-[var(--foreground)]",
  Prototype: "border-blue-400/60 bg-[var(--panel)] text-[var(--foreground)]",
  Planned: "border-[var(--warning)] bg-[var(--panel)] text-[var(--foreground)]",
  Draft: "border-[var(--line)] bg-[var(--panel)] text-[var(--muted)]",
};

function nodeById(id: string) {
  return researchNodes.find((node) => node.id === id);
}

export function ResearchMapClient() {
  const [activeId, setActiveId] = useState("robust-autonomy");
  const active = nodeById(activeId) ?? researchNodes[0];

  const connectedIds = useMemo(() => {
    const ids = new Set<string>([activeId]);
    for (const edge of researchEdges) {
      if (edge.source === activeId) ids.add(edge.target);
      if (edge.target === activeId) ids.add(edge.source);
    }
    return ids;
  }, [activeId]);

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
      <section className="command-panel relative min-h-[680px] overflow-hidden rounded-[2rem] p-4 research-grid" aria-label="Interactive robotics research map">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" role="img" aria-label="Research graph edges">
          {researchEdges.map((edge) => {
            const source = nodeById(edge.source);
            const target = nodeById(edge.target);
            if (!source || !target) return null;
            const activeEdge = connectedIds.has(edge.source) && connectedIds.has(edge.target);
            return (
              <g key={`${edge.source}-${edge.target}`}>
                <line
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="var(--accent)"
                  strokeOpacity={activeEdge ? 0.72 : 0.18}
                  strokeWidth={activeEdge ? 0.42 : 0.22}
                  strokeDasharray="1.2 1.2"
                />
                {activeEdge ? <circle r="0.65" fill="var(--accent)"><animateMotion dur="5s" repeatCount="indefinite" path={`M${source.x},${source.y} L${target.x},${target.y}`} /></circle> : null}
              </g>
            );
          })}
        </svg>

        {researchNodes.map((node) => {
          const isActive = node.id === activeId;
          const isConnected = connectedIds.has(node.id);
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveId(node.id)}
              className={`focus-ring absolute max-w-[172px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-4 py-3 text-left shadow-lg backdrop-blur transition hover:-translate-y-[54%] hover:border-[var(--accent)] ${statusClass[node.status]} ${isActive ? "ring-2 ring-[var(--accent)]" : ""} ${isConnected ? "opacity-100" : "opacity-45"}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              aria-pressed={isActive}
            >
              <span className="block font-mono text-[0.58rem] uppercase tracking-[0.18em] text-[var(--muted)]">{node.status}</span>
              <span className="mt-1 block text-sm font-semibold leading-5">{node.label}</span>
            </button>
          );
        })}
      </section>

      <aside className="command-panel rounded-[2rem] p-6" aria-label="Research node inspector">
        <div className="flex items-center gap-3 border-b border-[var(--line)] pb-5">
          <FiGitBranch className="text-[var(--accent)]" aria-hidden="true" />
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--muted)]">Inspector</p>
            <h2 className="mt-1 font-serif text-3xl tracking-[-0.04em]">{active.label}</h2>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <section>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">Summary</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{active.summary}</p>
          </section>
          <section>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">Scientific question</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{active.question}</p>
          </section>
          <section>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">Contribution</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{active.contribution}</p>
          </section>
          <section>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">Future work</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)]">
              {active.futureWork.map((item) => <li key={item} className="border-l border-[var(--accent)] pl-3">{item}</li>)}
            </ul>
          </section>
          <div className="flex flex-wrap gap-2">
            {active.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{tag}</span>)}
          </div>
          <div className="flex flex-wrap gap-3">
            {active.projectSlug ? <Link href={`/projects/${active.projectSlug}`} className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent)]"><FiTarget aria-hidden="true" />Open project</Link> : null}
            {active.repoUrl ? <a href={active.repoUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold hover:border-[var(--accent)]"><FiExternalLink aria-hidden="true" />Repository</a> : null}
          </div>
        </div>
      </aside>
    </div>
  );
}
