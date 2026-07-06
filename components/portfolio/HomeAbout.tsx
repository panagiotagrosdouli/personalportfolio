export function HomeAbout() {
  return (
    <section id="about" className="border-t border-stone-800 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">About</p>
        <p className="max-w-3xl font-serif text-2xl leading-[1.5] tracking-[-0.02em] text-stone-200 md:text-3xl">
          I&apos;m an MEng student in Electrical &amp; Computer Engineering at the Democritus University of Thrace,
          finishing a diploma thesis on trajectory prediction for vulnerable road users. Alongside coursework,
          I build independent research projects in SLAM and risk-aware navigation, and completed an applied
          robotics and computer vision internship at OZZIE Robotics.
        </p>
      </div>
    </section>
  );
}
