const steps = [
  "Human Motion",
  "Prediction",
  "Uncertainty",
  "Decision Making",
  "Safe Robotics",
];

export function ResearchMap() {
  return (
    <section className="bg-[#fbfaf7] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl border-y border-stone-200 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
          <div>
            <p className="section-kicker">Research Map</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-7xl">
              From human motion to safer autonomous decisions.
            </h2>
          </div>
          <div>
            <div className="grid gap-4 md:grid-cols-5 md:items-stretch">
              {steps.map((step) => (
                <div key={step} className="group border-t border-stone-300 pt-5 transition hover:border-emerald-900">
                  <p className="font-serif text-3xl leading-none tracking-[-0.04em] text-stone-950">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-3xl text-lg leading-9 text-stone-700">
              This is the organizing thread behind my work: anticipating motion, representing uncertainty, and using that information to support safer robotic behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
