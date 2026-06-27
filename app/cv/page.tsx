import { Footer } from "@/components/portfolio/Footer";
import { Education, Experience, Skills } from "@/components/portfolio/ProfileSections";
import { SiteNav } from "@/components/portfolio/SiteNav";

export default function CVPage() {
  return (
    <main id="cv" className="min-h-screen bg-[#f8f6f0] text-stone-950">
      <SiteNav />
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">CV</p>
          <h1 className="mt-4 max-w-5xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] text-stone-950 md:text-8xl">
            Academic profile and research preparation.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
            Electrical and Computer Engineering student focused on trajectory prediction, autonomous systems, robot perception, and decision making under uncertainty.
          </p>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full border border-emerald-950 bg-emerald-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-stone-950">
            Download PDF CV
          </a>
        </div>
      </section>
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}
