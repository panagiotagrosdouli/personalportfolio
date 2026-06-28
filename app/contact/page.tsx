import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <div>
            <p className="section-kicker">Contact</p>
            <h1 className="mt-4 font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl">
              Robotics research conversations.
            </h1>
          </div>
          <div>
            <p className="max-w-4xl text-xl leading-10 text-stone-700 md:text-2xl md:leading-[3rem]">
              I welcome conversations about PhD opportunities, research internships, and collaborations in robotics, autonomous systems, trajectory prediction, robot perception, and decision making under uncertainty.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
              <a href="mailto:panagros1@ee.duth.gr" className="rounded-full border border-emerald-950 bg-emerald-950 px-5 py-3 text-white transition hover:bg-stone-950">Academic Email</a>
              <a href="mailto:panagiotagrosdouli@gmail.com" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">Personal Email</a>
              <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">GitHub</a>
              <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
