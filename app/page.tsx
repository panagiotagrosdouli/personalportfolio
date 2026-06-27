import { FeaturedHome } from "@/components/portfolio/FeaturedHome";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { HomeGateway } from "@/components/portfolio/HomeGateway";
import { HomeSummary } from "@/components/portfolio/HomeSummary";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <Hero />
      <HomeSummary />
      <FeaturedHome />
      <HomeGateway />
      <Footer />
    </main>
  );
}
