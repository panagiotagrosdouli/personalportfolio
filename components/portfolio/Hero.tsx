import { SiteNav } from "@/components/portfolio/SiteNav";

const contactLinks = [
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "CV", href: "/cv" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#fbfaf7] text-stone-950">
      <div className="absolute inset-x-0 top-0 h-px bg-stone-200" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 md:px-10 lg:px-12">
        <div className="-mx-6 md:-mx-10 lg:-mx-12">
          <SiteNav />
        </div>

        <div className="grid flex-1 items-center gap-16 py-24 lg:grid-cols-[0.6fr_0.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.58em] text-emerald-900/70">
              Panagiota Grosdouli
            </p>
            <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.06em] text-stone-950 md:text-8xl lg:text-[7.6rem]">
              Predicting human motion for safe autonomous systems.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-stone-700 md:text-2xl md:leading-10">
              Research in robotics, machine learning, and intelligent transportation, with a focus on prediction, uncertainty, and safer decision making around people.
            </p>

            <div className="mt-10 grid max-w-3xl gap-4 border-y border-stone-200 py-7 md:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">Current</p>
                <p className="mt-2 text-sm leading-6 text-stone-700">Diploma thesis on trajectory prediction</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">Direction</p>
                <p className="mt-2 text-sm leading-6 text-stone-700">Safe autonomy and robot perception</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">Academic</p>
                <p className="mt-2 text-sm leading-6 text-stone-700">ECE, Democritus University of Thrace</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
              {contactLinks.map((link, index) => (
                <a key={link.label} href={link.href} className={index === 0 ? "rounded-full border border-emerald-950 bg-emerald-950 px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-stone-950" : "rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-800 transition hover:-translate-y-0.5 hover:border-emerald-900 hover:text-emerald-950"}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 border-l border-t border-emerald-900/30" />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 border-b border-r border-emerald-900/30" />
            <div
              className="relative h-[560px] border border-stone-200 bg-stone-100 bg-cover bg-center shadow-[0_36px_120px_-80px_rgba(28,25,23,0.82)] md:h-[700px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.04)), url('/profile.png')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
