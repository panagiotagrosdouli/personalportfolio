import { researchInterests } from "@/data/portfolio";

const contactLinks = [
  { label: "Academic Email", href: "mailto:panagros1@ee.duth.gr" },
  { label: "GitHub", href: "https://github.com/PanagiotaGr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#fbfaf7] text-stone-950">
      <div className="absolute inset-x-0 top-0 h-px bg-stone-200" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 md:px-10 lg:px-12">
        <nav className="flex items-center justify-between border-b border-stone-200 py-6 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
          <a href="#top" className="font-serif text-2xl normal-case tracking-tight text-stone-950">PG</a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#research" className="transition hover:text-emerald-900">Research</a>
            <a href="#experience" className="transition hover:text-emerald-900">Experience</a>
            <a href="#skills" className="transition hover:text-emerald-900">Toolkit</a>
            <a href="#notes" className="transition hover:text-emerald-900">Notes</a>
            <a href="#contact" className="transition hover:text-emerald-900">Contact</a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[0.58fr_0.42fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.58em] text-emerald-900/70">
              Panagiota Grosdouli
            </p>
            <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-[0.9] tracking-[-0.06em] text-stone-950 md:text-8xl lg:text-9xl">
              Predicting human motion for safer autonomous systems.
            </h1>
            <div className="mt-9 h-px w-20 bg-emerald-900" />
            <div className="mt-7 grid gap-5 text-stone-700 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">Academic profile</p>
                <p className="mt-2 text-base leading-7">Electrical & Computer Engineering<br />Democritus University of Thrace</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">Research interests</p>
                <p className="mt-2 text-base leading-7">Trajectory Prediction · Autonomous Systems · Intelligent Transportation</p>
              </div>
            </div>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-stone-650 md:text-xl md:leading-10">
              I study how intelligent systems predict human motion, reason under uncertainty, and make safer decisions in dynamic environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span key={interest} className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 shadow-[0_14px_45px_-38px_rgba(28,25,23,0.55)]">
                  {interest}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
              <a href="#research" className="rounded-full border border-emerald-950 bg-emerald-950 px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-stone-950">
                Current Research
              </a>
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:-translate-y-0.5 hover:border-emerald-900 hover:text-emerald-950">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 border-l border-t border-emerald-900/30" />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 border-b border-r border-emerald-900/30" />
            <div
              className="relative h-[520px] border border-stone-200 bg-stone-100 bg-cover bg-center shadow-[0_36px_120px_-80px_rgba(28,25,23,0.82)] md:h-[640px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.04)), url('/profile.png')",
              }}
            />
            <p className="mt-4 text-right text-xs uppercase tracking-[0.22em] text-stone-400">
              Research profile · PhD applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
