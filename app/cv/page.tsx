import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";

export const metadata: Metadata = { title: "CV", description: "Education, experience and skills of Panagiota Grosdouli." };

export default function CVPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteNav />
      <div className="mx-auto max-w-4xl px-5 py-20 md:px-10 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Curriculum vitae</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight">Panagiota Grosdouli</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">Electrical & Computer Engineer · Integrated MEng</p>
        <div className="mt-14 space-y-12">
          <section className="border-t border-[var(--line)] pt-7">
            <h2 className="text-sm font-semibold">Education</h2>
            <p className="mt-4 text-base font-medium">Democritus University of Thrace · 2026</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Five-year Integrated MEng in Electrical and Computer Engineering · GPA 7.58/10</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Diploma thesis: Trajectory Prediction of Vulnerable Road Users · 10/10</p>
          </section>
          <section className="border-t border-[var(--line)] pt-7">
            <h2 className="text-sm font-semibold">Experience</h2>
            <p className="mt-4 text-base font-medium">OZZIE Robotics · Computer Vision Intern</p>
            <p className="mt-1 text-sm text-[var(--muted)]">July–August 2025 · YOLO-based road and sidewalk semantic segmentation for an autonomous delivery robot. Model training, video testing and ground-truth annotation.</p>
          </section>
          <section className="border-t border-[var(--line)] pt-7">
            <h2 className="text-sm font-semibold">Skills</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Python · C++ · PyTorch · OpenCV · YOLO · Deep Learning · Computer Vision · Trajectory Forecasting · ROS 2 · Gazebo</p>
          </section>
          <section className="border-t border-[var(--line)] pt-7">
            <h2 className="text-sm font-semibold">Interests</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Machine Learning · Robotics · Autonomous Systems · Intelligent Mobility</p>
          </section>
        </div>
        <div className="mt-14 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/projects" className="rounded-full border border-[var(--line)] px-5 py-3">Projects</Link>
          <Link href="/contact" className="rounded-full bg-[var(--foreground)] px-5 py-3 text-[var(--background)]">Contact ↗</Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
