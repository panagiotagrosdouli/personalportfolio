import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <p className="section-kicker mb-4">Publications</p>
        <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.055em] md:text-7xl">
          Publications and manuscripts.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-stone-650">
          This page will list preprints, conference papers, journal papers, and technical reports as they become available.
        </p>

        <div className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
          {[
            ["Preprints", "Coming soon."],
            ["Conference Papers", "Coming soon."],
            ["Journal Papers", "Coming soon."],
            ["Technical Reports", "Coming soon."],
          ].map(([title, text]) => (
            <div key={title} className="grid gap-4 py-6 md:grid-cols-[180px_1fr]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">{title}</p>
              <p className="text-sm leading-7 text-stone-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
