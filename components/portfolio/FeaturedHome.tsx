import Link from "next/link";

const featured = [
  {
    title: "Diploma Thesis",
    subtitle: "Trajectory prediction at smart intersections",
    href: "/research",
    description: "Research question: how can autonomous systems anticipate vulnerable road-user motion before making safety-critical decisions?",
  },
  {
    title: "AEGIS-VIO",
    subtitle: "Uncertainty-aware visual-inertial navigation",
    href: "https://github.com/PanagiotaGr/aegis-vio",
    description: "Technical focus: connecting state estimation, uncertainty signals, and ROS2-based navigation logic for more reliable robot behavior.",
  },
  {
    title: "DynNav",
    subtitle: "Risk-aware robot navigation",
    href: "/projects",
    description: "Research direction: navigation in dynamic environments using risk-aware reasoning and multi-agent coordination.",
  },
];

export function FeaturedHome() {
  return (
    <section className="bg-[#fbfaf7] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-t border-stone-200 pt-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
          <div>
            <p className="section-kicker">Selected Work</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-7xl">
              Research evidence, not a project list.
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-9 text-stone-700">
              A small selection of work that supports one direction: prediction, uncertainty, and safer autonomous systems.
            </p>
            <Link href="/projects" className="mt-6 inline-block text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 transition hover:decoration-emerald-950">
              View all projects →
            </Link>
          </div>
        </div>

        <div className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
          {featured.map((item) => {
            const className = "group grid gap-6 py-8 transition hover:bg-white/50 md:grid-cols-[0.32fr_0.68fr] md:px-4";
            const content = (
              <>
                <div>
                  <h3 className="font-serif text-4xl leading-none tracking-[-0.04em] text-stone-950 md:text-5xl">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-emerald-900">{item.subtitle}</p>
                </div>
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                  <p className="max-w-2xl text-base leading-8 text-stone-700">{item.description}</p>
                  <span className="shrink-0 text-sm font-medium text-emerald-900 underline decoration-emerald-900/25 underline-offset-4 group-hover:decoration-emerald-950">
                    Open →
                  </span>
                </div>
              </>
            );

            return item.href.startsWith("http") ? (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
              </a>
            ) : (
              <Link key={item.title} href={item.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
