import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";

export default function Home(){
 return <main className="min-h-screen">
 <SiteNav/>
 <section className="relative isolate overflow-hidden bg-[#132521] text-[#f8f6ef]">
  <div className="editorial-grid absolute inset-0 opacity-80" aria-hidden="true"/>
  <div className="absolute -right-36 top-0 h-[570px] w-[570px] rounded-full border border-white/10" aria-hidden="true"/>
  <div className="absolute -right-16 top-28 h-[440px] w-[440px] rounded-full border border-white/10" aria-hidden="true"/>
  <div className="relative mx-auto grid min-h-[690px] max-w-6xl items-center gap-14 px-6 pb-20 pt-20 md:grid-cols-[1.18fr_.82fr] md:px-10 md:py-28">
   <div className="relative z-10">
    <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#b7c8be]">Panagiota Grosdouli / Research & Engineering</p>
    <div className="mt-8 h-[2px] w-16 bg-[#f2a68e]"/>
    <h1 className="mt-9 max-w-2xl font-serif text-[5.3rem] font-medium leading-[.81] tracking-[-.065em] sm:text-[7rem] lg:text-[8.15rem]">Curiosity<br/>in <span className="italic text-[#f3ad97]">motion.</span></h1>
    <p className="mt-9 max-w-xl text-xl leading-8 text-[#edf0e7]">Machine Learning · Computer Vision · Robotics</p>
    <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#b8c9bf]">Electrical & Computer Engineer (Integrated MEng). Exploring how intelligent systems perceive and predict the world.</p>
    <div className="mt-10 flex flex-wrap items-center gap-4">
     <Link href="/projects" className="focus-ring bg-[#f3ad97] px-7 py-3.5 text-sm font-semibold text-[#132521] transition hover:bg-white">Explore research <span aria-hidden="true">↗</span></Link>
     <Link href="/about" className="focus-ring border-b border-[#c1d0c8] py-2 text-sm font-semibold text-[#f8f6ef] transition hover:text-[#f3ad97]">Meet Panagiota <span aria-hidden="true">↗</span></Link>
    </div>
   </div>
   <div className="relative mx-auto w-full max-w-[360px]">
     <div className="absolute -right-4 -top-4 h-full w-full rounded-t-[185px] border border-[#f3ad97]/80"/>
     <Image src={`${process.env.GITHUB_ACTIONS==="true"?"/personalportfolio":""}/profile.png`} alt="Portrait of Panagiota Grosdouli" width={720} height={900} priority sizes="(max-width: 768px) 82vw, 360px" className="relative aspect-[4/5] w-full rounded-t-[185px] object-cover"/>
     <div className="absolute -bottom-7 -left-7 max-w-[210px] bg-[#f6f5f0] px-5 py-4 text-[#132521] shadow-xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#aa583e]">Currently exploring</p><p className="mt-2 font-serif text-2xl italic leading-6">AI for the physical world.</p></div>
   </div>
  </div>
  <div className="relative border-t border-white/15"><div className="mx-auto flex max-w-6xl flex-wrap gap-5 px-6 py-5 text-[10px] font-semibold uppercase tracking-[.23em] text-[#a7c0b4] md:justify-between md:px-10"><span>MEng · Democritus University of Thrace</span><span>Deep Learning / Autonomous Systems</span></div></div>
 </section>

 <section className="academic-page">
  <div className="mb-12 grid gap-7 md:grid-cols-[.85fr_1.15fr] md:items-end">
   <div><p className="academic-kicker">01 — Selected research</p><h2 className="mt-4 font-serif text-6xl font-semibold tracking-[-.05em] md:text-7xl">Research<br/><span className="italic text-[var(--accent)]">in focus.</span></h2></div>
   <p className="max-w-md text-base leading-8 text-[var(--muted)]">Two projects connecting deep learning, uncertainty and autonomous systems.</p>
  </div>
  <div className="grid gap-6 md:grid-cols-2">
   <Link href="/projects/safecrossai" className="academic-card group block overflow-hidden">
    <div className="project-visual flex h-48 items-center justify-center md:h-56">
     <svg viewBox="0 0 480 220" className="h-full w-full" role="img" aria-label="Illustration of predicted trajectories">
      <path d="M25 180 Q140 80 245 135 T455 37" fill="none" stroke="#667f74" strokeWidth="2" strokeDasharray="6 8"/>
      <path d="M25 180 Q140 80 245 135 T455 37" fill="none" stroke="#c74d31" strokeWidth="4"/>
      <path d="M25 180 Q145 120 260 60 T455 150" fill="none" stroke="#6b9280" strokeWidth="2" strokeDasharray="6 7"/>
      <path d="M25 180 Q100 185 230 190 T455 176" fill="none" stroke="#6b9280" strokeWidth="2" strokeDasharray="6 7"/>
      <circle cx="25" cy="180" r="7" fill="#c74d31"/><circle cx="455" cy="37" r="7" fill="#c74d31"/>
      <circle cx="245" cy="135" r="5" fill="#fff" stroke="#c74d31" strokeWidth="3"/>
     </svg>
    </div>
    <div className="p-7 md:p-9"><div className="flex items-center justify-between"><p className="academic-kicker">01 / Diploma thesis</p><span className="text-xs text-[var(--muted)]">2026 · 10/10</span></div><h3 className="mt-6 font-serif text-4xl font-semibold leading-[1.05]">Predicting human motion.</h3><p className="mt-4 text-sm leading-7 text-[var(--muted)]">Deep learning for vulnerable road-user trajectory forecasting at smart intersections.</p><p className="mt-8 text-sm font-semibold text-[var(--accent)]">View research <span aria-hidden="true">↗</span></p></div>
   </Link>
   <Link href="/projects/shield-vio" className="academic-card group block overflow-hidden">
    <div className="project-visual flex h-48 items-center justify-center bg-[#dfe5e5] md:h-56">
     <svg viewBox="0 0 480 220" className="h-full w-full" role="img" aria-label="Illustration of visual-inertial localization">
      <g fill="none" stroke="#829c9b" strokeWidth="1.5"><circle cx="240" cy="110" r="86"/><circle cx="240" cy="110" r="58"/><circle cx="240" cy="110" r="24"/><path d="M30 110H450M240 10V210"/></g>
      <path d="M85 158L145 132 206 157 258 77 337 92 392 53" fill="none" stroke="#c74d31" strokeWidth="4"/><g fill="#c74d31"><circle cx="85" cy="158" r="5"/><circle cx="206" cy="157" r="5"/><circle cx="258" cy="77" r="5"/><circle cx="392" cy="53" r="5"/></g>
     </svg>
    </div>
    <div className="p-7 md:p-9"><div className="flex items-center justify-between"><p className="academic-kicker">02 / Research prototype</p><span className="text-xs text-[var(--muted)]">2026</span></div><h3 className="mt-6 font-serif text-4xl font-semibold leading-[1.05]">SHIELD-VIO.</h3><p className="mt-4 text-sm leading-7 text-[var(--muted)]">Exploring degradation detection and uncertainty in visual-inertial localization.</p><p className="mt-8 text-sm font-semibold text-[var(--accent)]">View research <span aria-hidden="true">↗</span></p></div>
   </Link>
  </div>
 </section>
 <section className="bg-[#e7e9e1]"><div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[.8fr_1.2fr] md:px-10">
  <div><p className="academic-kicker">02 — Experience</p><h2 className="mt-5 font-serif text-5xl font-semibold leading-[1.05]">Built beyond<br/><span className="italic">the classroom.</span></h2></div>
  <div className="border-l-2 border-[#c74d31] pl-7"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[var(--muted)]">2025 · OZZIE Robotics</p><h3 className="mt-4 text-xl font-semibold">Computer Vision Intern</h3><p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">Developed and trained a YOLO-based semantic segmentation model for roads and sidewalks on an autonomous delivery robot.</p><p className="mt-5 text-sm text-[var(--muted)]">Model evaluation · Video analysis · Ground-truth annotation</p></div>
 </div></section>
 <section className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-6 py-20 md:px-10 md:py-28"><div><p className="academic-kicker">03 — Beyond the work</p><h2 className="mt-4 max-w-2xl font-serif text-5xl font-semibold leading-[1.05]">An engineer with<br/><span className="italic text-[var(--accent)]">a creative side.</span></h2><p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">Writing, music, photography and a love of learning new things.</p></div><Link href="/about" className="border-b-2 border-[var(--accent)] pb-2 text-sm font-semibold">Get to know me ↗</Link></section>
 <section className="bg-[#142521] text-white"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-7 px-6 py-16 md:px-10"><div><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#e3aa95]">Let's connect</p><h2 className="mt-4 font-serif text-5xl">Curious about what's next?</h2><p className="mt-3 text-sm text-[#c4d1c8]">Open to junior engineering, research and relevant PhD opportunities.</p></div><Link href="/contact" className="bg-[#f3ad97] px-7 py-3.5 text-sm font-semibold text-[#142521]">Contact me ↗</Link></div></section>
 <Footer/>
 </main>
}
