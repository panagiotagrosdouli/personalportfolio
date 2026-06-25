export function Vision() {
  return (
    <section className="bg-[#f8f6f0] px-6 py-16 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-stone-200 pb-16 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
        <div>
          <p className="section-kicker">Research Vision</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] text-stone-950 md:text-5xl">
            Predicting motion for safer autonomous systems.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-9 text-stone-700 md:text-xl md:leading-10">
          <p>
            I am interested in how autonomous systems perceive, predict, and interact with people in complex environments. My current work focuses on trajectory prediction and risk-aware decision making for intelligent transportation systems.
          </p>
          <p>
            My long-term goal is to contribute to autonomous technologies that are not only accurate, but also safer, more interpretable, and more reliable around humans.
          </p>
        </div>
      </div>
    </section>
  );
}
