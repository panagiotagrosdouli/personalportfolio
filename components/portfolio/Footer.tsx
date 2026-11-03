export function Footer({ theme: _theme }: { theme?: "light" | "dark" }) {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)] px-5 py-10 text-sm text-[var(--muted)] md:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-5">
        <span>© 2026 Panagiota Grosdouli</span>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/panagiota-g-b468b0201/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:p.g2a15@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
