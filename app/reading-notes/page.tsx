"use client";

import { useMemo, useState } from "react";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

const paperNotes = [
  {
    id: "social-gan",
    venue: "CVPR",
    year: "2018",
    tags: ["trajectory", "social interaction", "GAN"],
    title: "Social GAN: Socially Acceptable Trajectories with Generative Adversarial Networks",
    authors: "Gupta et al.",
    summary: "A trajectory prediction method that models socially plausible pedestrian futures using adversarial learning.",
    mainIdea: "Human motion is multi-modal and socially influenced, so prediction should generate multiple plausible futures.",
    method: "Sequence modelling with generative adversarial training and pooling over nearby agents.",
    strengths: ["Highlights multi-modal future trajectories", "Accounts for social interactions", "Useful baseline for pedestrian forecasting"],
    weaknesses: ["Limited interpretability", "Evaluation can under-represent rare unsafe cases", "GAN training may be unstable"],
    ideas: ["Compare multi-modal prediction quality under safety-critical intersection cases."],
  },
  {
    id: "trajnet",
    venue: "ECCV",
    year: "2020",
    tags: ["forecasting", "benchmarks", "evaluation"],
    title: "Trajectory Forecasting Benchmarking and Evaluation Notes",
    authors: "Trajectory prediction literature",
    summary: "Notes on how trajectory forecasting models are compared and where common metrics can hide important failure modes.",
    mainIdea: "Prediction accuracy alone is not enough when models are used inside autonomous systems.",
    method: "Compare ADE/FDE-style metrics with qualitative failure-case inspection and uncertainty-aware evaluation.",
    strengths: ["Clarifies evaluation trade-offs", "Connects forecasting to downstream autonomy", "Encourages failure-case analysis"],
    weaknesses: ["Benchmarks may not capture all real-world safety constraints", "Metrics can reward average-case behaviour"],
    ideas: ["Add explicit failure-case summaries to thesis experiments."],
  },
  {
    id: "risk-aware-navigation",
    venue: "ICRA",
    year: "2021",
    tags: ["risk", "navigation", "uncertainty"],
    title: "Risk-Aware Robot Navigation Under Uncertainty",
    authors: "Robotics literature notes",
    summary: "A reading thread around navigation methods that reason about unsafe outcomes rather than only expected cost.",
    mainIdea: "Robots should reason about tail-risk events in dynamic environments.",
    method: "Risk-sensitive objectives, scenario analysis, and conservative planning criteria.",
    strengths: ["Relevant to safety-critical autonomy", "Connects planning with uncertainty", "Useful for DynNav direction"],
    weaknesses: ["Risk tuning can be difficult", "Over-conservative policies may reduce progress"],
    ideas: ["Use near-miss cases as a qualitative diagnostic for DynNav experiments."],
  },
];

const allVenues = ["All", ...Array.from(new Set(paperNotes.map((paper) => paper.venue)))];

export default function ReadingNotesPage() {
  const [search, setSearch] = useState("");
  const [venue, setVenue] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return paperNotes.filter((paper) => {
      const matchVenue = venue === "All" || paper.venue === venue;
      const matchSearch =
        !query ||
        paper.title.toLowerCase().includes(query) ||
        paper.authors.toLowerCase().includes(query) ||
        paper.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchVenue && matchSearch;
    });
  }, [search, venue]);

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <SiteNav theme="dark" />
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Literature</p>
        <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.055em] text-white md:text-7xl">
          Reading Notes
        </h1>
        <p className="mb-10 mt-6 max-w-2xl text-base leading-8 text-stone-400">
          Structured notes on papers and research ideas shaping my thinking in trajectory prediction, autonomy, uncertainty, and risk-aware navigation.
        </p>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Search papers..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="flex-1 border border-stone-800 bg-stone-900 px-4 py-2 text-sm text-stone-100 placeholder:text-stone-600 focus:border-emerald-400 focus:outline-none"
          />
          <div className="flex flex-wrap gap-2">
            {allVenues.map((item) => (
              <button
                key={item}
                onClick={() => setVenue(item)}
                className={`border px-3 py-1.5 font-mono text-[11px] transition-colors ${
                  venue === item ? "border-emerald-400 bg-emerald-400 text-stone-950" : "border-stone-800 text-stone-400 hover:border-stone-500"
                }`}
              >
                {item === "All" ? "All venues" : item}
              </button>
            ))}
          </div>
        </div>

        <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">
          {filtered.length} paper{filtered.length !== 1 ? "s" : ""}
        </p>

        <div className="divide-y divide-stone-800 border-y border-stone-800">
          {filtered.map((note) => (
            <div key={note.id}>
              <button onClick={() => setExpanded(expanded === note.id ? null : note.id)} className="w-full px-0 py-6 text-left transition-colors hover:bg-stone-900/60 md:px-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="border border-stone-800 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-stone-400">
                        {note.venue} {note.year}
                      </span>
                      {note.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] text-stone-500">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-sm font-semibold leading-snug text-white">{note.title}</h3>
                    <p className="mt-1 text-xs text-stone-500">{note.authors}</p>
                  </div>
                  <span className="shrink-0 text-xl font-light text-stone-500">{expanded === note.id ? "-" : "+"}</span>
                </div>
              </button>

              {expanded === note.id && (
                <div className="space-y-7 border-t border-stone-800 px-0 pb-8 pt-6 md:px-6">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-400">Summary</p>
                    <p className="text-sm leading-7 text-stone-400">{note.summary}</p>
                  </div>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Main Idea</p>
                      <p className="text-sm leading-7 text-stone-400">{note.mainIdea}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Method</p>
                      <p className="text-sm leading-7 text-stone-400">{note.method}</p>
                    </div>
                  </div>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Strengths</p>
                      <ul className="space-y-1.5">
                        {note.strengths.map((strength) => (
                          <li key={strength} className="flex items-start gap-2 text-sm leading-7 text-stone-400"><span className="text-emerald-400">+</span>{strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Weaknesses</p>
                      <ul className="space-y-1.5">
                        {note.weaknesses.map((weakness) => (
                          <li key={weakness} className="flex items-start gap-2 text-sm leading-7 text-stone-400"><span className="text-stone-600">-</span>{weakness}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="border border-stone-800 bg-stone-900 px-4 py-4">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-400">Research Ideas Inspired</p>
                    {note.ideas.map((idea) => (
                      <p key={idea} className="text-sm leading-7 text-stone-300">{idea}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer theme="dark" />
    </main>
  );
}
