const navLinks = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Portfolio", href: "/projects" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-30 border-b border-stone-200 bg-[#fbfaf7]/90 px-6 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 backdrop-blur md:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="font-serif text-2xl normal-case tracking-tight text-stone-950">
          PG
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-emerald-900">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
