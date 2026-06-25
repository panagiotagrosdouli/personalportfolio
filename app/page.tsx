import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { AcademicFuture } from "@/components/portfolio/AcademicFuture";
import { Education, Experience, Notes, Skills } from "@/components/portfolio/ProfileSections";
import { ResearchV6 as Research } from "@/components/portfolio/ResearchV6";
import { Vision } from "@/components/portfolio/Vision";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] text-stone-950">
      <Hero />
      <Vision />
      <Research />
      <Experience />
      <Skills />
      <Education />
      <Notes />
      <AcademicFuture />
      <Footer />
    </main>
  );
}
