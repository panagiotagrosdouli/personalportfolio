import { Footer } from "@/components/portfolio/Footer";
import { Education, Experience, Skills } from "@/components/portfolio/ProfileSections";
import { SiteNav } from "@/components/portfolio/SiteNav";

export default function CVPage() {
  return (
    <main id="cv" className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Academic CV</p>
          <h1 className="mt-4 max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl">
            Preparation for graduate research in robotics.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-700 md:text-2xl md:leading-[3rem]">
            Electrical and Computer Engineering student with a research direction in trajectory prediction, robot perception, risk-aware navigation, and decision making under uncertainty.
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
