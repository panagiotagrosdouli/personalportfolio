import Link from "next/link";

export function HomeAbout() {
  return (
    <section id="about" className="border-t border-white/10 bg-stone-950 px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.38fr_0.62fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Positioning</p>
          <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-white md:text-6xl">
            A concise profile for serious academic review.
          </h2>
        </div>

        <div>
          <p className="font-serif text-2xl leading-[1.45] tracking-[-0.02em] text-stone-200 md:text-3xl">
            I&apos;m an MEng student in Electrical &amp; Computer Engineering, preparing for PhD applications in robotics and autonomous systems. My current work focuses on trajectory prediction for vulnerable road users, with independent projects in SLAM, perception, and risk-aware navigation.
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-400">
            The goal of this website is to make the research path easy to evaluate: what I study, why it matters, what I have built, and what I am improving next.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/phd-fit" className="rounded-full border border-emerald-400/50 px-5 py-3 text-sm font-medium text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200">
              Read PhD fit
            </Link>
            <Link href="/contact" className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-stone-300 transition hover:border-white/30 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
