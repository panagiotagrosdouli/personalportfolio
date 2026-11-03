import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";

export const metadata: Metadata = { title: "About", description: "About Panagiota Grosdouli — Machine Learning, Computer Vision and Robotics." };

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteNav />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.7fr_1.3fr] md:items-center md:px-10 md:py-28">
        <Image src={`${process.env.GITHUB_ACTIONS === "true" ? "/personalportfolio" : ""}/profile.png`} alt="Panagiota Grosdouli" width={720} height={900} sizes="(max-width: 768px) 90vw, 360px" className="w-full max-w-[340px] rounded-2xl object-cover" />
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">About me</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight">Engineering meets research.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">I'm an Electrical and Computer Engineer (Integrated MEng, 2026) focused on Machine Learning, Computer Vision and Robotics.</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">My diploma thesis explored vulnerable road-user trajectory prediction. At OZZIE Robotics, I trained a YOLO-based segmentation model for an autonomous delivery robot.</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">I'm open to junior engineering, research and relevant PhD opportunities.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/cv" className="rounded-full border border-[var(--line)] px-5 py-3">View CV</Link>
            <Link href="/contact" className="rounded-full bg-[var(--foreground)] px-5 py-3 text-[var(--background)]">Contact ↗</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
