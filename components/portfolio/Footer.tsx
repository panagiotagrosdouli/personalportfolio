export function Footer() {
  return (
    <footer className="bg-[#fbfaf7] px-6 py-20 text-stone-950 md:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-stone-200 pt-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-tight text-stone-950">Panagiota Grosdouli</p>
          <p className="mt-3 text-base leading-7 text-stone-600">
            MEng Electrical & Computer Engineering · Democritus University of Thrace
          </p>
        </div>

        <div className="flex gap-8 text-base text-stone-600">
          <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="transition hover:text-stone-950">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="transition hover:text-stone-950">
            LinkedIn
          </a>
          <a href="mailto:panagros1@ee.duth.gr" className="transition hover:text-stone-950">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
