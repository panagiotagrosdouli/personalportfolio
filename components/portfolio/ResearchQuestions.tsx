const questions = [
  {
    question: "How can autonomous systems anticipate human behavior before they act?",
    text: "Trajectory prediction becomes safety-critical when robots and vehicles share space with pedestrians, cyclists, and other uncertain agents.",
  },
  {
    question: "How should robots reason when perception is uncertain?",
    text: "A reliable system should know when its observations are incomplete, noisy, or not enough to support confident decisions.",
  },
  {
    question: "Can prediction improve navigation safety?",
    text: "Forecasting possible futures can help navigation policies avoid near misses, unsafe interactions, and brittle average-case behavior.",
  },
  {
    question: "What makes an intelligent system trustworthy?",
    text: "Trust requires evaluation beyond accuracy: calibration, failure cases, transparency, robustness, and clear limitations.",
  },
];

export function ResearchQuestions() {
  return (
    <section className="border-y border-white/10 bg-stone-950 px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Current Research Questions</p>
          <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.055em] text-white md:text-7xl">
            The questions behind the code.
          </h2>
        </div>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {questions.map((item, index) => (
            <article key={item.question} className="grid gap-8 py-9 md:grid-cols-[110px_1fr_0.75fr] md:items-start">
              <p className="font-mono text-xs text-stone-500">0{index + 1}</p>
              <h3 className="font-serif text-3xl leading-tight tracking-[-0.035em] text-white md:text-4xl">
                {item.question}
              </h3>
              <p className="text-sm leading-7 text-stone-400 md:pt-2">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
