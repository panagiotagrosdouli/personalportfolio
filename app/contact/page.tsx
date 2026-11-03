import type { Metadata } from "next";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";

export const metadata: Metadata = { title: "Contact", description: "Contact Panagiota Grosdouli." };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-36">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Contact</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">Let's connect.</h1>
        <p className="mt-5 max-w-lg text-lg text-[var(--muted)]">Open to junior engineering and research opportunities.</p>
        <div className="mt-12 flex flex-col items-start gap-5 text-base">
          <a href="mailto:p.g2a15@gmail.com" className="underline underline-offset-4">Email ↗</a>
          <a href="https://www.linkedin.com/in/panagiota-g-b468b0201/" target="_blank" rel="noreferrer" className="underline underline-offset-4">LinkedIn ↗</a>
          <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="underline underline-offset-4">GitHub ↗</a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
