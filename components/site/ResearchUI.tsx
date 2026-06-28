import Link from "next/link";

export function PageIntro({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
}) {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">{eyebrow}</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <h1 className="max-w-6xl font-serif text-6xl leading-[0.9] tracking-[-0.06em] text-stone-950 md:text-8xl">
            {title}
          </h1>
          {(description || action) && (
            <div>
              {description && <p className="text-lg leading-9 text-stone-700 md:text-xl md:leading-10">{description}</p>}
              {action && (
                <Link href={action.href} className="mt-6 inline-block rounded-full border border-emerald-950 bg-emerald-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-stone-950">
                  {action.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectionFrame({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-14 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl border-t border-stone-200 pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">{eyebrow}</p>
            {title && <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] text-stone-950 md:text-5xl">{title}</h2>}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

export function ResearchCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <article className={`rounded-sm border border-stone-200 bg-white/84 p-7 shadow-[0_26px_80px_-66px_rgba(28,25,23,0.72)] ${className}`}>
      {children}
    </article>
  );
}

export function MonoBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center border border-stone-200 bg-white px-2.5 py-1 font-mono text-[11px] text-stone-600">
      {children}
    </span>
  );
}
