import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";

export const metadata: Metadata = { title: "About", description: "About Panagiota Grosdouli, her education, interests, and research." };
export default function AboutPage() {
  return <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"><SiteNav />
    <div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">About</p>
      <div className="mt-6 grid gap-10 md:grid-cols-[1fr_220px] md:items-start">
        <div><h1 className="font-serif text-5xl leading-tight tracking-[-0.05em] md:text-6xl">Research, curiosity, and building things.</h1>
          <p className="mt-7 text-lg leading-8 text-[var(--muted)]">I am an Electrical and Computer Engineering student interested in robotics, autonomous systems, and the role of uncertainty in reliable decision-making.</p>
          <div className="mt-7 flex gap-6 text-sm font-semibold"><Link href="/projects" className="text-[var(--accent)] hover:underline">Projects ↗</Link><Link href="/cv" className="text-[var(--accent)] hover:underline">Academic CV ↗</Link></div>
        </div>
        <Image src={`${process.env.GITHUB_ACTIONS === "true" ? "/personalportfolio" : ""}/profile.png`} alt="Panagiota Grosdouli" width={440} height={550} sizes="(max-width: 768px) 200px, 220px" className="w-48 rounded-2xl object-cover md:w-full" />
      </div>
      <section className="mt-16 grid gap-5 border-t border-[var(--line)] pt-9 sm:grid-cols-[180px_1fr]"><h2 className="font-semibold">Education</h2><div><p className="font-medium">MEng, Electrical & Computer Engineering</p><p className="mt-1 text-sm text-[var(--muted)]">Democritus University of Thrace · 2020–2026</p><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Thesis focus: trajectory prediction of vulnerable road users at smart intersections.</p></div></section>
      <section className="mt-10 grid gap-5 border-t border-[var(--line)] pt-9 sm:grid-cols-[180px_1fr]"><h2 className="font-semibold">Research interests</h2><p className="leading-8 text-[var(--muted)]">SLAM, visual-inertial odometry, sensor fusion, uncertainty-aware perception, intelligent mobility, and safe navigation.</p></section>
      <section className="mt-10 grid gap-5 border-t border-[var(--line)] pt-9 sm:grid-cols-[180px_1fr]"><h2 className="font-semibold">Beyond research</h2><div><p className="leading-8 text-[var(--muted)]">I also enjoy writing, music production, radio, photography, and running.</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--accent)]"><a href="https://www.wattpad.com/user/user34912981" target="_blank" rel="noreferrer">Wattpad ↗</a><a href="https://suno.com/@panagiotagrosdouli" target="_blank" rel="noreferrer">Music ↗</a></div></div></section>
    </div>
  </main>;
}
