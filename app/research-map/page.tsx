import { SiteNav } from "@/components/portfolio/SiteNav";
export default function Page() {
 return <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"><SiteNav />
 <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
 <h1 className="font-serif text-5xl tracking-[-0.055em] md:text-7xl">Research map</h1>
 <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">Explore how perception, estimation, uncertainty, and planning connect.</p>
 <div className="mt-10 flex flex-wrap gap-6"><a href="/projects"  className="text-sm font-semibold text-[var(--accent)] hover:underline">Projects ↗</a></div>
 </section></main>;
}