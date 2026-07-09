"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FiBookOpen, FiSearch } from "react-icons/fi";
import { missionLogs } from "@/data/missionLogs";
import { projectMap } from "@/data/projects";

const allTags = Array.from(new Set(missionLogs.flatMap((log) => log.tags))).sort();

export function MissionLogsClient() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");

  const visible = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return missionLogs.filter((log) => {
      const matchesTag = tag === "All" || log.tags.includes(tag);
      const haystack = [log.title, log.objective, log.experiment, log.observation, log.result, log.nextStep, ...log.tags].join(" ").toLowerCase();
      const matchesQuery = normalizedQuery.length === 0 || haystack.includes(normalizedQuery);
      return matchesTag && matchesQuery;
    });
  }, [query, tag]);

  return (
    <section className="mt-12" aria-label="Mission log research notebook">
      <div className="command-panel rounded-[2rem] p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--background)]/50 px-4 py-3">
            <FiSearch className="text-[var(--accent)]" aria-hidden="true" />
            <span className="sr-only">Search mission logs</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search observations, experiments, tags..." className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]" />
          </label>
          <div className="flex flex-wrap gap-2">
            {["All", ...allTags].map((item) => (
              <button key={item} type="button" onClick={() => setTag(item)} className={tag === item ? "focus-ring rounded-full border border-[var(--accent)] bg-[var(--accent)] px-3 py-2 text-xs font-semibold text-[var(--background)]" : "focus-ring rounded-full border border-[var(--line)] px-3 py-2 text-xs font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5">
        {visible.map((log) => {
          const project = projectMap[log.relatedProjectSlug];
          return (
            <article key={log.id} className="command-panel rounded-[1.7rem] p-6">
              <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                <aside className="border-b border-[var(--line)] pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--accent)]">Mission Log {log.id}</p>
                  <p className="mt-3 text-sm text-[var(--muted)]">{log.date}</p>
                  <p className="mt-3 inline-flex rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{log.status}</p>
                  {project ? <Link href={`/projects/${project.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"><FiBookOpen aria-hidden="true" />{project.shortTitle}</Link> : null}
                </aside>
                <div>
                  <h2 className="font-serif text-4xl leading-tight tracking-[-0.05em]">{log.title}</h2>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <section className="rounded-2xl border border-[var(--line)] p-4"><p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)]">Objective</p><p className="mt-2 text-sm leading-7 text-[var(--muted)]">{log.objective}</p></section>
                    <section className="rounded-2xl border border-[var(--line)] p-4"><p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)]">Experiment</p><p className="mt-2 text-sm leading-7 text-[var(--muted)]">{log.experiment}</p></section>
                    <section className="rounded-2xl border border-[var(--line)] p-4"><p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)]">Observation</p><p className="mt-2 text-sm leading-7 text-[var(--muted)]">{log.observation}</p></section>
                    <section className="rounded-2xl border border-[var(--line)] p-4"><p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)]">Next step</p><p className="mt-2 text-sm leading-7 text-[var(--muted)]">{log.nextStep}</p></section>
                  </div>
                  <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)]/20 p-4">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)]">Result</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{log.result}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {log.tags.map((item) => <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{item}</span>)}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
