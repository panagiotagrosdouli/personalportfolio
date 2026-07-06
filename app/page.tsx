import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { ResearchInterests } from "@/components/portfolio/ResearchInterests";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { TechStack } from "@/components/portfolio/TechStack";
import { Roadmap } from "@/components/portfolio/Roadmap";
import { HomeAbout } from "@/components/portfolio/HomeAbout";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <Hero />
      <ResearchInterests />
      <FeaturedProjects />
      <TechStack />
      <Roadmap />
      <HomeAbout />
      <Footer theme="dark" />
    </main>
  );
}
