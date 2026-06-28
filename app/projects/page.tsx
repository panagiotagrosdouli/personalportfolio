import { Footer } from "@/components/portfolio/Footer";
import { Leadership } from "@/components/portfolio/Leadership";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { SiteNav } from "@/components/portfolio/SiteNav";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Research Work</p>
          <h1 className="mt-4 max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl">
            Work shaped by prediction, perception, and uncertainty.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
            A focused view of robotics and autonomy projects that support a coherent research direction toward safer autonomous systems.
          </p>
        </div>
      </section>
      <SelectedWork />
      <Leadership />
      <Footer />
    </main>
  );
}
