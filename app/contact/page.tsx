import Link from "next/link";
import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

const links = [
  { label: "Academic Email", value: "panagros1@ee.duth.gr", href: "mailto:panagros1@ee.duth.gr" },
  { label: "Personal Email", value: "panagiotagrosdouli@gmail.com", href: "mailto:panagiotagrosdouli@gmail.com" },
  { label: "GitHub", value: "github.com/panagiotagrosdouli", href: "https://github.com/panagiotagrosdouli" },
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
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <SiteNav theme="dark" />
      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Contact</p>
          <h1 className="max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-white md:text-8xl">
            Let&apos;s talk about research.
          </h1>

          <div className="mt-14 grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-9 text-stone-300 md:text-xl md:leading-10">
                I am an Electrical & Computer Engineering student building a focused research path around trajectory prediction, uncertainty-aware autonomy, and safer robotic decision making.
              </p>
              <p className="mt-6 text-lg leading-9 text-stone-400">
                I welcome conversations about PhD opportunities, thesis work, research internships, and collaborations in robotics and intelligent transportation.
              </p>

              <div className="mt-10 space-y-5">
                {links.map((link) => (
                  <div key={link.label} className="grid gap-2 text-sm md:grid-cols-[150px_1fr]">
                    <span className="pt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">{link.label}</span>
                    <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-stone-200 transition hover:text-emerald-400">
                      {link.value}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-12 border-y border-stone-800 py-7">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">For professors</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {professorLinks.map(([label, href]) => (
                    <Link key={label} href={href} className="border border-stone-800 bg-stone-900/60 px-4 py-3 text-sm font-medium text-stone-300 transition hover:border-emerald-400 hover:text-emerald-400">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Interests</p>
              <p className="mb-6 text-base leading-8 text-stone-400">I am particularly interested in conversations touching on:</p>
              <ul className="space-y-4">
                {interests.map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-3 text-sm leading-7">
                    <span className="mt-0.5 shrink-0 text-stone-600">-</span>
                    <div>
                      <span className="font-semibold text-stone-200">{title}</span>
                      <span className="text-stone-500"> · {desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-stone-800 pt-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Academic Direction</p>
                <p className="text-base leading-8 text-stone-400">
                  My current focus is building a coherent research path around human motion prediction, uncertainty-aware modelling, and safer autonomous systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer theme="dark" />
    </main>
  );
}
