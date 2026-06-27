import { AcademicFuture } from "@/components/portfolio/AcademicFuture";
import { Footer } from "@/components/portfolio/Footer";
import { ResearchFocus } from "@/components/portfolio/ResearchFocus";
import { ResearchV6 as Research } from "@/components/portfolio/ResearchV6";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Vision } from "@/components/portfolio/Vision";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] text-stone-950">
      <SiteNav />
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Research</p>
          <h1 className="mt-4 max-w-5xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] text-stone-950 md:text-8xl">
            Human motion prediction, uncertainty, and safe autonomy.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
            My research direction focuses on autonomous systems that can anticipate how people move, reason under uncertainty, and make safer decisions in dynamic environments.
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
