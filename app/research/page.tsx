import { AcademicFuture } from "@/components/portfolio/AcademicFuture";
import { Footer } from "@/components/portfolio/Footer";
import { ResearchFocus } from "@/components/portfolio/ResearchFocus";
import { ResearchV6 as Research } from "@/components/portfolio/ResearchV6";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Vision } from "@/components/portfolio/Vision";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Research</p>
          <h1 className="mt-4 max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl">
            Prediction and uncertainty for safer autonomous systems.
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-stone-700 md:text-2xl md:leading-[3rem]">
            I am building toward robotics research that connects human motion prediction, robot perception, and decision making under uncertainty. The goal is to support autonomous systems that behave more safely around people.
          </p>
        </div>
      </section>
      <ResearchFocus />
      <Vision />
      <Research />
      <AcademicFuture />
      <Footer />
    </main>
  );
}
