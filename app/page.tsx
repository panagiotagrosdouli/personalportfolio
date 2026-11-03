import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";
import { projects } from "@/data/projects";

const selected = ["safecrossai", "shield-vio"]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

export default function Home() {
 return <main className="min-h-screen">
  <SiteNav/>
  <section className="relative overflow-hidden bg-[#142d29] text-[#faf6ee]">
   <div className="editorial-grid absolute inset-0 opacity-50" aria-hidden="true"/>
   <div className="absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full border border-[#ffffff23]" aria-hidden="true"/>
   <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-20 md:grid-cols-[1.25fr_.75fr] md:items-center md:px-10 md:pb-28 md:pt-28">
    <div>
     <p className="text-xs font-semibold uppercase tracking-[.23em] text-[#c6ded4]">Engineer · Researcher · Curious mind</p>
     <h1 className="mt-8 font-serif text-[5.6rem] font-medium leading-[.78] tracking-[-.065em] sm:text-[7rem] md:text-[8rem]">Panagiota <span className="italic text-[#edaa96]">Grosdouli.</span></h1>
     <p className="mt-10 max-w-xl text-xl leading-8 text-[#e3eee8]">Making sense of motion, perception and intelligent systems.</p>
     <p className="mt-5 max-w-lg text-sm leading-7 text-[#c8d9d1]">Electrical & Computer Engineer (Integrated MEng). Machine Learning · Computer Vision · Robotics.</p>
     <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold">
      <Link href="/projects" className="bg-[#edaa96] px-6 py-3 text-[#142d29] transition hover:bg-white">Explore my work ↗</Link>
      <Link href="/about" className="border border-[#819a8e] px-6 py-3 text-white transition hover:border-white">About me</Link>
     </div>
    </div>
    <div className="relative mx-auto w-full max-w-[345px]">
      <div className="absolute -bottom-5 -right-5 h-full w-full rounded-t-full border border-[#edaa96]"/>
      <Image src={`${process.env.GITHUB_ACTIONS === "true" ? "/personalportfolio" : ""}/profile.png`} alt="Panagiota Grosdouli" width={720} height={900} priority sizes="(max-width: 768px) 85vw, 345px" className="relative aspect-[4/5] w-full rounded-t-full object-cover"/>
      <span className="absolute -bottom-7 -left-5 rotate-[-5deg] bg-[#edaa96] px-5 py-3 font-serif text-2xl italic text-[#142d29]">hello, world.</span>
    </div>
   </div>
   <div className="relative border-t border-[#ffffff2b] px-6 py-5 text-center text-[11px] uppercase tracking-[.23em] text-[#b2c9be]">Research × Creativity × Technology</div>
  </section>

  <section className="academic-page">
   <div className="mb-11 flex flex-wrap items-end justify-between gap-4">
    <div><p className="academic-kicker">01 / Work</p><h2 className="mt-3 font-serif text-6xl leading-none tracking-[-.05em]">Ideas, <span className="italic text-[var(--accent)]">explored.</span></h2></div>
    <Link href="/projects" className="text-sm font-semibold text-[var(--accent)]">Research projects ↗</Link>
   </div>
   <div className="grid gap-5 md:grid-cols-2">
    {selected.map((project,index)=><Link href={`/projects/${project.slug}`} key={project.slug} className="academic-card group flex min-h-[340px] flex-col justify-between overflow-hidden p-8">
      <div className="flex items-start justify-between"><span className="academic-kicker">{index===0?"Diploma thesis · 10/10":"Research prototype"}</span><span className="editorial-number">{index===0?"01":"02"}</span></div>
      <div><h3 className="font-serif text-4xl font-semibold leading-[1.02] tracking-tight">{index===0?"Predicting human motion.": "SHIELD-VIO."}</h3>
       <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">{index===0?"Deep learning for vulnerable road-user trajectory prediction.":"Understanding uncertainty in robotic localization."}</p>
       <span className="mt-7 inline-block text-sm font-semibold text-[var(--accent)]">Discover project ↗</span>
      </div>
    </Link>)}
   </div>
  </section>

  <section className="bg-[#f0d9cb]">
   <div className="mx-auto grid max-w-6xl gap-7 px-6 py-16 md:grid-cols-[.8fr_1.2fr] md:items-center md:px-10">
     <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#8b473a]">02 / Experience</p><h2 className="mt-4 font-serif text-5xl font-semibold leading-tight">From theory <span className="italic">to reality.</span></h2></div>
     <div><p className="text-lg font-semibold">OZZIE Robotics · Computer Vision Intern</p><p className="mt-3 max-w-lg text-base leading-8 text-[#675a53]">Trained YOLO segmentation models for road and sidewalk perception on an autonomous delivery robot.</p><p className="mt-4 text-xs font-semibold tracking-wide text-[#8b473a]">2025 · Thessaloniki</p></div>
   </div>
  </section>

  <section className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-7 px-6 py-20 md:px-10">
    <div><p className="academic-kicker">03 / What's next</p><h2 className="mt-3 font-serif text-5xl leading-tight">Let's build <span className="italic text-[var(--accent)]">something meaningful.</span></h2><p className="mt-4 text-sm text-[var(--muted)]">Open to junior engineering, research and PhD opportunities.</p></div>
    <Link href="/contact" className="bg-[#142d29] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[var(--accent)]">Get in touch ↗</Link>
  </section>
  <Footer/>
 </main>;
}
