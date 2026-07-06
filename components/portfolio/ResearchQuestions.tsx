const questions = [
  {
    question: "How can robots anticipate human motion before they move?",
    text: "My central research interest is trajectory prediction for people in shared environments, especially where robotic or intelligent-transportation systems must act with incomplete information.",
  },
  {
    question: "How should perception expose uncertainty?",
    text: "SLAM, VIO, sensor fusion, and scene understanding are more useful for autonomy when they also communicate confidence, ambiguity, and failure modes.",
  },
  {
    question: "How can prediction inform navigation and planning?",
    text: "Forecasting possible futures should not remain an isolated model output; it should shape how robots plan, reroute, and behave around dynamic agents.",
  },
  {
    question: "What makes a robotics project ready for research?",
    text: "A strong project needs a question, baseline, evaluation, limitations, and future work. This portfolio is being organized around that standard.",
  },
];

export function ResearchQuestions() {
  return (
    <section className="border-y border-white/10 bg-stone-950 px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-emerald-400">Research Questions</p>
          <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.055em] text-white md:text-7xl">
            The robotics questions behind the code.
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
