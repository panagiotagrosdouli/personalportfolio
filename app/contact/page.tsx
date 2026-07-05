import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

const links = [
  { label: "Academic Email", value: "panagros1@ee.duth.gr", href: "mailto:panagros1@ee.duth.gr" },
  { label: "Personal Email", value: "panagiotagrosdouli@gmail.com", href: "mailto:panagiotagrosdouli@gmail.com" },
  { label: "GitHub", value: "github.com/PanagiotaGr", href: "https://github.com/PanagiotaGr" },
  { label: "LinkedIn", value: "linkedin.com/in/panagiota-grosdouli-b468b0201", href: "https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" },
];

const interests = [
  ["Trajectory Prediction", "forecasting human motion in dynamic environments"],
  ["Autonomous Systems", "safer decision making around people"],
  ["Risk-Aware Navigation", "planning under uncertainty and unsafe outcomes"],
  ["Intelligent Transportation", "smart intersections and vulnerable road users"],
  ["Robot Learning", "learning-based autonomy with interpretable behaviour"],
];

const professorLinks = [
  ["Research statement", "/research"],
  ["PhD fit", "/phd-fit"],
  ["Research evidence", "/projects"],
  ["CV", "/cv"],
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Contact</p>
          <h1 className="mt-4 max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl">
            Let&apos;s talk about research.
          </h1>

          <div className="mt-14 grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
                I am an Electrical & Computer Engineering student building a focused research path around trajectory prediction, uncertainty-aware autonomy, and safer robotic decision making. I welcome conversations about PhD opportunities, thesis work, research internships, and collaborations in robotics and intelligent transportation.
              </p>
              <p className="mt-6 text-lg leading-9 text-stone-700">
                The best way to reach me is by email. A strong conversation usually starts with one of the topics below: trajectory forecasting, uncertainty, risk-aware planning, or human-aware autonomous systems.
              </p>

              <div className="mt-10 space-y-5">
                {links.map((link) => (
                  <div key={link.label} className="grid gap-2 text-sm md:grid-cols-[150px_1fr]">
                    <span className="pt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                      {link.label}
                    </span>
                    <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-stone-950 transition hover:text-emerald-900">
                      {link.value}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-12 border-y border-stone-200 py-7">
                <p className="section-kicker mb-5">For professors</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {professorLinks.map(([label, href]) => (
                    <Link key={label} href={href} className="border border-stone-200 bg-white/70 px-4 py-3 text-sm font-medium text-stone-800 transition hover:border-emerald-900 hover:text-emerald-950">
                      {label} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="section-kicker mb-5">Research Interests</p>
              <p className="mb-6 text-base leading-8 text-stone-650">
                I am particularly interested in conversations touching on:
              </p>
              <ul className="space-y-4">
                {interests.map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-3 text-sm leading-7">
                    <span className="mt-0.5 shrink-0 text-stone-300">—</span>
                    <div>
                      <span className="font-semibold text-stone-950">{title}</span>
                      <span className="text-stone-600"> · {desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-stone-200 pt-8">
                <p className="section-kicker mb-4">Academic Direction</p>
                <p className="text-base leading-8 text-stone-650">
                  My current focus is building a coherent research path around human motion prediction, uncertainty-aware modelling, and safer autonomous systems. The strongest next step is converting active thesis and independent robotics work into publishable research artifacts with baselines, metrics, ablations, and documented limitations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
