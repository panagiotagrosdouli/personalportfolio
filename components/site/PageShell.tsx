import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["Research", "/research"],
  ["Projects", "/projects"],
  ["CV", "/cv"],
  ["Notes", "/notes"],
  ["Contact", "/contact"],
];

export function PageShell({
  title,
  eyebrow,
  description,
  children,
}: {
  title: string;
  eyebrow: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <header className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <nav className="flex items-center justify-between border-b border-stone-200 py-6 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
          <Link href="/" className="font-serif text-2xl normal-case tracking-tight text-stone-950">
            PG
          </Link>
          <div className="hidden gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-emerald-900">
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <p className="section-kicker">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.98] tracking-[-0.055em] md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-9 text-stone-650 md:text-xl md:leading-10">
          {description}
        </p>
        <div className="mt-12">{children}</div>
      </section>
    </main>
  );
}
