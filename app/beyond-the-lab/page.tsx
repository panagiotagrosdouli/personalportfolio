import type { Metadata } from "next";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = {
  title: "Beyond the Lab",
  description:
    "Creative work, writing, music, radio, photography, and communication interests beyond robotics research.",
};

const creativeWork = [
  {
    title: "Writing",
    subtitle: "17+ published stories",
    text: "I write speculative fiction, mystery, and science-inspired stories that explore artificial intelligence, memory, autonomy, neuroscience, and the future of human-technology interaction.",
  },
  {
    title: "Music",
    subtitle: "DJing and sound discovery",
    text: "Music is one of the ways I study emotion, rhythm, attention, and collective experience. DJing has taught me how to read a room, build flow, and communicate without overexplaining.",
  },
  {
    title: "Radio",
    subtitle: "Voice, timing, and audience",
    text: "Radio shaped the way I think about communication: clarity, pacing, presence, and the ability to make ideas accessible to people with different backgrounds.",
  },
  {
    title: "Photography",
    subtitle: "Observation as practice",
    text: "Photography trains careful attention to detail, composition, motion, light, and context — the same habit of observation that matters in research and engineering.",
  },
];

const selectedStories = [
  "The Architecture of Restraint",
  "The Signal Beyond the Lattice",
  "The Memory of Tomorrow",
  "The Archive of the Universe",
  "The Infinite Shelf",
];

export default function BeyondTheLabPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <SiteNav theme="dark" />

      <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(52,211,153,0.10),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(148,163,184,0.08),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Beyond the Lab</p>
          <h1 className="max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-white md:text-8xl">
            Curiosity rarely stays inside one discipline.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-300 md:text-2xl md:leading-[3rem]">
            My work in robotics and artificial intelligence is shaped by engineering, but also by writing, music, radio, photography, and communication.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Creative Practice</p>
            <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-white md:text-6xl">
              A different way of training attention.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {creativeWork.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400">{item.subtitle}</p>
                <h3 className="mt-4 font-serif text-3xl leading-none tracking-[-0.03em] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Writing as Inquiry</p>
            <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-white md:text-6xl">
              Stories about intelligence, memory, and possible futures.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-stone-300">
              I use long-form fiction as a way to explore questions that also appear in research: prediction, human cognition, control, autonomy, artificial intelligence, and the social consequences of emerging technology.
            </p>
            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {selectedStories.map((story) => (
                <div key={story} className="grid gap-3 py-4 md:grid-cols-[220px_1fr]">
                  <p className="font-serif text-2xl tracking-[-0.03em] text-white">{story}</p>
                  <p className="text-sm leading-7 text-stone-500">selected fiction work exploring technology, identity, intelligence, or memory</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Why it matters</p>
          <p className="max-w-4xl font-serif text-3xl leading-[1.35] tracking-[-0.03em] text-white md:text-4xl">
            Engineering builds systems. Creativity helps us imagine better ones — and communication makes them understandable.
          </p>
          <p className="mt-7 max-w-3xl text-base leading-8 text-stone-400">
            I see creativity not as a distraction from research, but as a way to become more observant, more precise, and more capable of explaining complex ideas across disciplines.
          </p>
        </div>
      </section>

      <Footer theme="dark" />
    </main>
  );
}
