import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#1c1c1a] selection:bg-[#d7ede4] selection:text-[#12372a]">
      <nav className="border-b border-[#ddd9d0] px-5 py-4 text-sm md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-serif font-semibold text-[#1c1c1a] transition hover:text-[#1f5a44]">Panagiota Grosdouli</Link>
          <div className="flex gap-5 text-[#5e5e5a]">
            <Link href="/research" className="transition hover:text-[#1f5a44]">Research</Link>
            <Link href="/projects" className="transition hover:text-[#1f5a44]">Projects</Link>
            <Link href="/publications" className="transition hover:text-[#1f5a44]">Publications</Link>
            <Link href="/cv" className="transition hover:text-[#1f5a44]">CV</Link>
          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#1f5a44]">Contact</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.06em] text-[#1c1c1a] md:text-7xl">Academic contact.</h1>
          <p className="mt-8 text-xl leading-9 text-[#5e5e5a]">I welcome conversations about PhD opportunities, thesis work, research internships, and collaborations in robotics and autonomous systems.</p>
        </header>
        <section className="mt-16 grid gap-12 border-t border-[#ddd9d0] pt-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-[-0.03em] text-[#1c1c1a]">Links</h2>
            <div className="mt-6 space-y-5 text-sm">
              <p><span className="mr-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#5e5e5a]">Email</span><a href="mailto:panagros1@ee.duth.gr" className="text-[#1f5a44] hover:underline">panagros1@ee.duth.gr</a></p>
              <p><span className="mr-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#5e5e5a]">GitHub</span><a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="text-[#1f5a44] hover:underline">panagiotagrosdouli</a></p>
              <p><span className="mr-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#5e5e5a]">CV</span><Link href="/cv" className="text-[#1f5a44] hover:underline">View CV</Link></p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-[-0.03em] text-[#1c1c1a]">Research conversations</h2>
            <p className="mt-5 text-base leading-8 text-[#5e5e5a]">My current focus is building a coherent research path around human motion prediction, uncertainty-aware modelling, and safer autonomous systems.</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#5e5e5a]">
              <li className="border-l border-[#1f5a44] pl-4">Trajectory prediction and human motion forecasting</li>
              <li className="border-l border-[#1f5a44] pl-4">Robotic perception, SLAM, VIO, and sensor fusion</li>
              <li className="border-l border-[#1f5a44] pl-4">Planning and navigation under uncertainty</li>
              <li className="border-l border-[#1f5a44] pl-4">Human-aware autonomy and intelligent intersections</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
