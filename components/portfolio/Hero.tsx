import { researchInterests } from "@/data/portfolio";

const contactLinks = [
  { label: "Email", href: "mailto:panagiota.grosdouli@gmail.com" },
  { label: "GitHub", href: "https://github.com/PanagiotaGr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#11130f] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.86),rgba(0,0,0,0.55),rgba(0,0,0,0.20))]" />
      <div
        className="absolute inset-y-0 right-0 hidden w-[48%] bg-cover bg-center opacity-95 lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(17,19,15,0.20),rgba(17,19,15,0.04)), url('/profile.png')",
        }}
      />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 md:px-10 lg:px-12">
        <nav className="flex items-center justify-between border-b border-white/10 py-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/74">
          <a href="#top" className="font-serif text-2xl normal-case tracking-tight text-white">PG</a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#research" className="transition hover:text-emerald-200">Research</a>
            <a href="#experience" className="transition hover:text-emerald-200">Experience</a>
            <a href="#skills" className="transition hover:text-emerald-200">Skills</a>
            <a href="#notes" className="transition hover:text-emerald-200">Notes</a>
            <a href="#contact" className="transition hover:text-emerald-200">Contact</a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[0.56fr_0.44fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.58em] text-emerald-300/70">
              Panagiota
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-7xl leading-[0.86] tracking-[-0.06em] text-white md:text-8xl lg:text-9xl">
              Grosdouli
            </h1>
            <div className="mt-9 h-px w-16 bg-emerald-300" />
            <p className="mt-7 max-w-2xl text-2xl font-semibold uppercase leading-snug tracking-[0.22em] text-emerald-100 md:text-3xl">
              Trajectory Prediction<br />Autonomous Systems<br />Risk-Aware Navigation
            </p>
            <p className="mt-7 max-w-xl text-lg leading-9 text-white/76">
              I study how intelligent systems predict human motion, reason under uncertainty, and make safer decisions in dynamic environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span key={interest} className="rounded-full border border-white/18 bg-white/6 px-3 py-1.5 text-xs font-medium text-white/82 backdrop-blur">
                  {interest}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="rounded-full border border-white/18 px-5 py-3 text-white/88 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-100">
                  {link.label}
                </a>
              ))}
              <a href="#research" className="rounded-full border border-emerald-200 bg-emerald-100 px-5 py-3 text-emerald-950 transition hover:-translate-y-0.5 hover:bg-white">
                Current Research
              </a>
            </div>
          </div>

          <div className="block lg:hidden">
            <div
              className="h-[440px] border border-white/12 bg-cover bg-center shadow-[0_30px_100px_-70px_rgba(0,0,0,0.95)]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,rgba(17,19,15,0.03),rgba(17,19,15,0.16)), url('/profile.png')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
