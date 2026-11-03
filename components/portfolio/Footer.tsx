export function Footer({theme:_theme}:{theme?:"light"|"dark"}) {
 return <footer className="border-t border-[var(--line)] bg-[var(--background)] px-6 py-10 md:px-10"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
  <div><p className="font-serif text-2xl font-semibold">Panagiota Grosdouli</p><p className="mt-1 text-xs text-[var(--muted)]">Electrical & Computer Engineering · Integrated MEng</p></div>
  <div className="flex gap-6 text-sm text-[var(--muted)]"><a href="https://www.linkedin.com/in/panagiota-g-b468b0201/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:p.g2a15@gmail.com">Email</a></div>
 </div></footer>;
}
