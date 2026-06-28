import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";

function StatusDot() {
  return <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />;
}

export function Hero() {
  return (
    <section id="top" className="bg-[#fbfaf7] text-stone-950">
      <SiteNav />

      <div className="mx-auto grid max-w-5xl items-start gap-12 px-6 pb-20 pt-16 md:grid-cols-[1fr_220px]">
        <div>
          <p className="section-kicker mb-5">Robotics · Autonomous Systems · AI</p>
          <h1 className="font-serif text-6xl font-bold leading-[1.02] tracking-[-0.055em] text-stone-950 md:text-7xl">
            Panagiota Grosdouli
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-3xl leading-[1.25] tracking-[-0.02em] text-stone-500 md:text-4xl">
            Researching trajectory prediction, autonomous systems, and embodied AI for safe human-robot interaction.
          </p>

          <div className="mt-8 flex flex-col gap-2 text-sm leading-7 text-stone-600 md:text-base">
            <span className="flex items-start gap-3">
              <StatusDot />
              MEng Electrical & Computer Engineering — Democritus University of Thrace
            </span>
            <span className="flex items-start gap-3">
              <StatusDot />
              Applying to PhD programs · Fall 2026
            </span>
            <span className="flex items-start gap-3">
              <StatusDot />
              Open for research collaborations
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/research" className="inline-flex items-center bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-80">
              Explore Research →
            </Link>
            <Link href="/projects" className="inline-flex items-center border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-50">
              Projects
            </Link>
            <Link href="/cv" className="inline-flex items-center px-5 py-3 text-sm font-medium text-stone-500 transition hover:text-stone-950">
              Curriculum Vitae
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:pt-8">
          <div
            className="aspect-[3/4] w-36 bg-stone-100 bg-cover bg-center grayscale md:w-full"
            style={{ backgroundImage: "url('/profile.png')" }}
            aria-label="Panagiota Grosdouli profile photo"
          />
          <div className="space-y-1 text-xs leading-6 text-stone-500">
            <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="block transition hover:text-stone-950">
              github.com/PanagiotaGr
            </a>
            <a href="mailto:panagros1@ee.duth.gr" className="block transition hover:text-stone-950">
              panagros1@ee.duth.gr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
