import { Footer } from "@/components/portfolio/Footer";
import { Leadership } from "@/components/portfolio/Leadership";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { SiteNav } from "@/components/portfolio/SiteNav";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Research Projects</p>
          <h1 className="mt-4 max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl">
            Robotics work shaped by prediction, perception, and uncertainty.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-700 md:text-2xl md:leading-[3rem]">
            These projects are selected not as isolated demos, but as evidence of a coherent preparation for graduate research in robotics and autonomous systems.
          </p>
        </div>
      </section>
      <SelectedWork />
      <Leadership />
      <Footer />
    </main>
  );
}
