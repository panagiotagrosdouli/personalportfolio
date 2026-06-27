export function Vision() {
  return (
    <section className="bg-[#f8f6f0] px-6 py-14 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-stone-200 pb-14 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
        <div>
          <p className="section-kicker">Research Philosophy</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] text-stone-950 md:text-5xl">
            Predictive, risk-aware autonomy for real environments.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
          <p>
            I am interested in autonomous systems that can anticipate human motion, reason under uncertainty, and make decisions that remain safe in complex environments.
          </p>
          <p>
            My work connects trajectory prediction, robot perception, and risk-aware decision making, with the long-term goal of contributing to trustworthy autonomous technologies around people.
          </p>
        </div>
      </div>
    </section>
  );
}
