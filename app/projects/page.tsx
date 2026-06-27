import { Footer } from "@/components/portfolio/Footer";
import { Leadership } from "@/components/portfolio/Leadership";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { SiteNav } from "@/components/portfolio/SiteNav";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] text-stone-950">
      <SiteNav />
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Projects</p>
          <h1 className="mt-4 max-w-5xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] text-stone-950 md:text-8xl">
            Technical work in robotics, perception, and autonomy.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
            A focused collection of research-oriented and engineering projects connected by autonomous systems, robot perception, risk-aware navigation, and intelligent transportation.
          </p>
        </div>
      </section>
      <SelectedWork />
      <Leadership />
      <Footer />
    </main>
  );
}
