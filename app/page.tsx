import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { HomeGateway } from "@/components/portfolio/HomeGateway";
import { HomeSummary } from "@/components/portfolio/HomeSummary";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] text-stone-950">
      <Hero />
      <HomeSummary />
      <HomeGateway />
      <Footer />
    </main>
  );
}
