import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { ResearchQuestions } from "@/components/portfolio/ResearchQuestions";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { ResearchPhilosophy } from "@/components/portfolio/ResearchPhilosophy";
import { EditorialResearchTimeline } from "@/components/portfolio/EditorialResearchTimeline";
import { LabFitStrip } from "@/components/portfolio/LabFitStrip";
import { TechStack } from "@/components/portfolio/TechStack";
import { HomeAbout } from "@/components/portfolio/HomeAbout";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <Hero />
      <ResearchQuestions />
      <FeaturedProjects />
      <ResearchPhilosophy />
      <EditorialResearchTimeline />
      <LabFitStrip />
      <TechStack />
      <HomeAbout />
      <Footer theme="dark" />
    </main>
  );
}
