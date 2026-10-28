import { SiteNav } from "@/components/portfolio/SiteNav";
export default function Page() {
 return <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"><SiteNav />
 <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
 <h1 className="font-serif text-5xl tracking-[-0.055em] md:text-7xl">Timeline</h1>
 <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">Key milestones in engineering education and research.</p>
 <div className="mt-10 flex flex-wrap gap-6"><a href="/about"  className="text-sm font-semibold text-[var(--accent)] hover:underline">About ↗</a>
<a href="/cv"  className="text-sm font-semibold text-[var(--accent)] hover:underline">CV ↗</a></div>
 </section></main>;
}