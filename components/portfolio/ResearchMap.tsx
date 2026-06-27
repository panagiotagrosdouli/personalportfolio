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
          <div className="relative">
            <div className="absolute left-4 top-6 hidden h-px w-[calc(100%-2rem)] bg-stone-300 md:block" />
            <div className="grid gap-5 md:grid-cols-5">
              {steps.map((step, index) => (
                <div key={step} className="relative bg-[#fbfaf7]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-900 bg-[#fbfaf7] text-xs font-semibold text-emerald-900">
                    {index + 1}
                  </div>
                  <p className="mt-5 font-serif text-3xl leading-none tracking-[-0.04em] text-stone-950">
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
