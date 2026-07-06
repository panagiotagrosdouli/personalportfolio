import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-[#090909] dark:text-neutral-100">
      <nav className="border-b border-neutral-200 px-5 py-4 text-sm dark:border-neutral-800 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-semibold text-neutral-950 transition hover:text-[#e0001b] dark:text-neutral-50">Panagiota Grosdouli</Link>
          <div className="flex gap-5 text-neutral-600 dark:text-neutral-400">
            <Link href="/research" className="hover:text-[#e0001b]">Research</Link>
            <Link href="/projects" className="hover:text-[#e0001b]">Projects</Link>
            <Link href="/publications" className="hover:text-[#e0001b]">Publications</Link>
            <Link href="/cv" className="hover:text-[#e0001b]">CV</Link>
          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e0001b] dark:text-[#ff5a66]">Contact</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-neutral-950 dark:text-neutral-50 md:text-7xl">Academic contact.</h1>
          <p className="mt-8 text-xl leading-9 text-neutral-700 dark:text-neutral-300">I welcome conversations about PhD opportunities, thesis work, research internships, and collaborations in robotics and autonomous systems.</p>
        </header>
        <section className="mt-16 grid gap-12 border-t border-neutral-200 pt-12 dark:border-neutral-800 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-neutral-950 dark:text-neutral-50">Links</h2>
            <div className="mt-6 space-y-5 text-sm">
              <p><span className="mr-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Email</span><a href="mailto:panagros1@ee.duth.gr" className="text-[#e0001b] hover:underline dark:text-[#ff5a66]">panagros1@ee.duth.gr</a></p>
              <p><span className="mr-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">GitHub</span><a href="https://github.com/panagiotagrosdouli" target="_blank" rel="noreferrer" className="text-[#e0001b] hover:underline dark:text-[#ff5a66]">panagiotagrosdouli</a></p>
              <p><span className="mr-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">LinkedIn</span><span className="text-neutral-500">Add profile link</span></p>
              <p><span className="mr-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Scholar</span><span className="text-neutral-500">Add Google Scholar profile</span></p>
              <p><span className="mr-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">ORCID</span><span className="text-neutral-500">Add ORCID identifier</span></p>
              <p><span className="mr-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">CV</span><Link href="/cv" className="text-[#e0001b] hover:underline dark:text-[#ff5a66]">View CV</Link></p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-neutral-950 dark:text-neutral-50">Research conversations</h2>
            <p className="mt-5 text-base leading-8 text-neutral-700 dark:text-neutral-300">My current focus is building a coherent research path around human motion prediction, uncertainty-aware modelling, and safer autonomous systems.</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
              <li className="border-l border-[#e0001b] pl-4 dark:border-[#ff5a66]">Trajectory prediction and human motion forecasting</li>
              <li className="border-l border-[#e0001b] pl-4 dark:border-[#ff5a66]">Robotic perception, SLAM, VIO, and sensor fusion</li>
              <li className="border-l border-[#e0001b] pl-4 dark:border-[#ff5a66]">Planning and navigation under uncertainty</li>
              <li className="border-l border-[#e0001b] pl-4 dark:border-[#ff5a66]">Safe human-aware autonomy and intelligent intersections</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
