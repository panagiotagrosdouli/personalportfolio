export function AcademicFuture() {
  return (
    <section className="bg-[#f8f6f0] px-6 py-12 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Research Outputs</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <article className="rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)]">
            <h2 className="font-serif text-4xl tracking-[-0.035em] text-stone-950">Publications</h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              This section will be updated as publications become available.
            </p>
          </article>
          <article className="rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)]">
            <h2 className="font-serif text-4xl tracking-[-0.035em] text-stone-950">Preprints</h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Research drafts and technical reports will be listed here.
            </p>
          </article>
          <article className="rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)]">
            <h2 className="font-serif text-4xl tracking-[-0.035em] text-stone-950">Talks</h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              Future presentations, seminars, and posters will be added here.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
