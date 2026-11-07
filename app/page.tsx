import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";

const base = process.env.GITHUB_ACTIONS === "true" ? "/personalportfolio" : "";

const studies = [
  {
    number: "01",
    type: "MEng diploma thesis",
    title: "Predicting human motion.",
    subtitle: "Trajectory forecasting for vulnerable road users",
    description: "Deep learning for safer smart intersections.",
    href: "/projects/safecrossai",
    image: "/datasets/imptc/sample_01_vru_tracks.jpg",
    alt: "Sample vulnerable road-user tracks from the thesis dataset",
    tags: ["Deep learning", "Motion forecasting", "Intelligent transport"],
    color: "bg-[#eaf0f3]",
  },
  {
    number: "02",
    type: "Research prototype",
    title: "SHIELD-VIO.",
    subtitle: "Reliable visual–inertial state estimation",
    description: "Localization that knows when sensing degrades.",
    href: "/projects/shield-vio",
    image: "/evidence/shield-vio/trajectory-evidence.svg",
    alt: "SHIELD-VIO trajectory research evidence visualization",
    tags: ["Visual–inertial odometry", "Uncertainty", "Robotics"],
    color: "bg-[#e9f1f2]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9faf9] text-[#101c3a]">
      <SiteNav />
      <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_70%_45%,#e2f1fb_0%,#f5f9fe_38%,#fbfaf8_73%)]">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" style={{backgroundImage:"linear-gradient(#c9d9e8 1px,transparent 1px),linear-gradient(90deg,#c9d9e8 1px,transparent 1px)",backgroundSize:"66px 66px",maskImage:"linear-gradient(90deg,transparent 20%,black 100%)"}} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-14 pt-20 md:px-10 lg:min-h-[645px] lg:grid-cols-[.96fr_1.04fr] lg:items-center lg:py-24">
          <div className="relative z-10">
            <p className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[.27em] text-[#203459]"><span className="h-[2px] w-11 bg-[#13bdda]" />AI · Computer Vision · Robotics</p>
            <h1 className="mt-9 max-w-[700px] font-serif text-[5rem] font-semibold leading-[.82] tracking-[-.07em] text-[#101b3b] sm:text-[7rem] lg:text-[8rem]">Curiosity<br />in motion<span className="text-[#08b9d7]">.</span></h1>
            <p className="mt-9 max-w-lg text-xl leading-8 text-[#344362]">Perception. Prediction. Autonomy.</p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#64728b]">Panagiota Grosdouli · Electrical & Computer Engineer (MEng).</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="#research" className="rounded-md bg-[#14254a] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#254777]">Explore research ↗</Link>
              <Link href="/about" className="rounded-md border border-[#14254a] px-7 py-3.5 text-sm font-semibold text-[#14254a] transition hover:bg-white">About me ↗</Link>
            </div>
          </div>
          <div className="relative mx-auto flex min-h-[370px] w-full max-w-[650px] items-center justify-center lg:min-h-[510px]">
            <div className="absolute inset-4 rounded-full bg-[#b9e7ef]/50 blur-3xl" aria-hidden="true" />
            <svg viewBox="0 0 680 510" role="img" aria-label="Conceptual robotics illustration of an autonomous vehicle navigating a mapped environment" className="relative h-auto w-full drop-shadow-[0_25px_35px_rgba(20,50,90,.13)]">
              <defs><linearGradient id="road" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#dceaf8"/><stop offset="1" stopColor="#9dbddc"/></linearGradient><linearGradient id="glass" x1="0" x2="1"><stop stopColor="#1a3879"/><stop offset="1" stopColor="#31d1e9"/></linearGradient></defs>
              <g opacity=".55" stroke="#7fa9d8" strokeWidth="1" fill="none"><path d="M40 390 405 150 650 366 258 505Z" fill="url(#road)" opacity=".4"/>{Array.from({length:13},(_,i)=><path key={i} d={`M${65+i*44} 375 ${375+i*16} 160`} />)}{Array.from({length:9},(_,i)=><path key={i} d={`M${70+i*25} ${370+i*17} ${415+i*28} ${164+i*24}`} />)}</g>
              <g fill="#7cb0ec" opacity=".72">{Array.from({length:95},(_,i)=><circle key={i} cx={45+(i*73)%570} cy={95+(i*41)%275} r={i%4===0?2.4:1.1}/>)}</g>
              <path d="M110 431 Q230 352 317 363 T585 259" stroke="#04c0db" strokeWidth="9" fill="none" opacity=".16"/><path d="M110 431 Q230 352 317 363 T585 259" stroke="#04b8d4" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="12 12"/>
              <g transform="translate(247 247)"><ellipse cx="100" cy="138" rx="145" ry="31" fill="#132b57" opacity=".14"/><path d="M0 90 93 42 219 91 130 142Z" fill="#fefefe" stroke="#225a98" strokeWidth="3"/><path d="M0 90V127L130 179V142ZM130 142V179L219 130V91Z" fill="#b9d8ee" stroke="#225a98" strokeWidth="3"/><path d="M38 77 92 52 174 81 122 107Z" fill="url(#glass)" opacity=".9"/><circle cx="39" cy="146" r="23" fill="#122750"/><circle cx="39" cy="146" r="11" fill="#7194c2"/><circle cx="178" cy="151" r="23" fill="#122750"/><circle cx="178" cy="151" r="11" fill="#7194c2"/><path d="M97 48V5" stroke="#25477b" strokeWidth="8"/><ellipse cx="97" cy="0" rx="33" ry="13" fill="#1b3561"/><rect x="67" y="-18" width="60" height="17" rx="6" fill="#3b81bb"/><ellipse cx="97" cy="-18" rx="30" ry="9" fill="#a2eafb"/></g>
              <g stroke="#51b9dc" strokeWidth="1.5" opacity=".6" fill="none"><path d="M320 244 180 87M371 235 528 85M416 257 631 161"/><circle cx="180" cy="87" r="11"/><circle cx="528" cy="85" r="11"/><circle cx="631" cy="161" r="11"/></g>
              <g fill="#163764" fontSize="12" fontFamily="Arial,sans-serif" letterSpacing="2"><text x="84" y="65">PERCEPTION</text><text x="483" y="53">STATE ESTIMATION</text><text x="490" y="454">NAVIGATION</text></g>
              <g fill="#03bcd4"><circle cx="180" cy="87" r="4"/><circle cx="528" cy="85" r="4"/><circle cx="550" cy="278" r="5"/></g>
            </svg>
            <div className="absolute bottom-4 right-4 rounded-lg border border-white/80 bg-white/80 px-4 py-3 text-[10px] font-semibold uppercase tracking-[.18em] text-[#345477] shadow-sm backdrop-blur">Conceptual research visualization</div>
          </div>
        </div>
      </section>


      <section id="research" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:px-10 lg:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-[11px] font-bold uppercase tracking-[.25em] text-[#05aeca]">01 / Selected work</p><h2 className="mt-3 font-serif text-6xl font-semibold tracking-[-.06em] md:text-7xl">Research, <span className="italic text-[#08b9d7]">seen.</span></h2></div>
          <Link href="/projects" className="border-b border-[#08aeca] pb-2 text-sm font-semibold text-[#17355a]">All projects ↗</Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {studies.map(study=><Link key={study.number} href={study.href} className="group overflow-hidden rounded-2xl border border-[#d9e3ef] bg-white shadow-[0_8px_35px_rgba(25,48,90,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(25,48,90,.13)]">
            <div className={`relative h-[310px] overflow-hidden ${study.color} sm:h-[400px]`}><Image src={`${base}${study.image}`} alt={study.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-4 transition duration-500 group-hover:scale-[1.05]"/><span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#344b70] shadow-sm backdrop-blur">{study.type}</span></div>
            <div className="flex items-center justify-between gap-4 p-6 md:p-8"><div><h3 className="font-serif text-4xl font-semibold tracking-[-.045em] md:text-5xl">{study.title}</h3><p className="mt-2 text-sm text-[#64758d]">{study.description}</p></div><span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#dff5fa] text-xl text-[#164568]">↗</span></div>
          </Link>)}
        </div>
      </section>

      <section className="border-y border-[#dce6ee] bg-[#edf5f9]"><div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5"><div><p className="text-[11px] font-bold uppercase tracking-[.25em] text-[#0baac4]">02 / Inside the research</p><h2 className="mt-3 font-serif text-5xl font-semibold tracking-[-.05em] md:text-6xl">A visual research journal.</h2></div><p className="max-w-xs text-xs leading-6 text-[#63758b]">Selected dataset examples and project visualizations. See individual case studies for methods and limitations.</p></div>
        <div className="grid gap-4 md:grid-cols-12">
          <Link href="/projects/safecrossai" className="group relative overflow-hidden rounded-xl bg-white md:col-span-7"><div className="relative h-64 sm:h-80"><Image src={`${base}/datasets/imptc/sample_01_overview.jpg`} alt="Example smart-intersection scene from the thesis dataset" fill sizes="(max-width:768px) 100vw, 58vw" className="object-contain p-3 transition duration-500 group-hover:scale-105"/></div><div className="flex items-center justify-between px-5 pb-5 text-sm font-semibold text-[#294565]">Smart intersection scene <span>↗</span></div></Link>
          <Link href="/projects/shield-vio" className="group relative overflow-hidden rounded-xl bg-white md:col-span-5"><div className="relative h-64 sm:h-80"><Image src={`${base}/evidence/shield-vio/estimator-health-evidence.svg`} alt="SHIELD-VIO estimator health research visualization" fill sizes="(max-width:768px) 100vw, 42vw" className="object-contain p-3 transition duration-500 group-hover:scale-105"/></div><div className="flex items-center justify-between px-5 pb-5 text-sm font-semibold text-[#294565]">Estimator health visualization <span>↗</span></div></Link>
          <Link href="/projects/safecrossai" className="group relative overflow-hidden rounded-xl bg-white md:col-span-5"><div className="relative h-56 sm:h-64"><Image src={`${base}/datasets/imptc/sample_02_vru_tracks.jpg`} alt="Sample vulnerable road-user trajectories" fill sizes="(max-width:768px) 100vw, 42vw" className="object-contain p-3 transition duration-500 group-hover:scale-105"/></div><div className="flex items-center justify-between px-5 pb-5 text-sm font-semibold text-[#294565]">Vulnerable road-user tracks <span>↗</span></div></Link>
          <Link href="/projects/shield-vio" className="group relative overflow-hidden rounded-xl bg-white md:col-span-7"><div className="relative h-56 sm:h-64"><Image src={`${base}/project-media/shield-vio-pipeline.svg`} alt="SHIELD-VIO research pipeline diagram" fill sizes="(max-width:768px) 100vw, 58vw" className="object-contain p-3 transition duration-500 group-hover:scale-105"/></div><div className="flex items-center justify-between px-5 pb-5 text-sm font-semibold text-[#294565]">Localization research pipeline <span>↗</span></div></Link>
        </div>
      </div></section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:py-24">
        <div><p className="text-[11px] font-bold uppercase tracking-[.25em] text-[#08aeca]">03 / Experience</p><h2 className="mt-4 font-serif text-5xl font-semibold leading-none tracking-[-.04em] md:text-6xl">From the lab<br/>to the world.</h2><p className="mt-5 text-sm font-semibold text-[#3c5471]">OZZIE Robotics · Computer Vision Intern · 2025</p><p className="mt-3 max-w-md text-sm leading-7 text-[#64768c]">YOLO-based road and sidewalk segmentation for an autonomous delivery robot.</p><Link href="/about" className="mt-5 inline-block border-b border-[#10afc9] pb-2 text-sm font-semibold text-[#117e9e]">About my experience ↗</Link></div>
        <div className="grid grid-cols-2 gap-4"><div className="relative col-span-2 h-64 overflow-hidden rounded-2xl bg-[#e7f1f7] sm:h-80"><Image src={`${base}/profile.png`} alt="Portrait of Panagiota Grosdouli" fill sizes="(max-width:1024px) 100vw, 55vw" className="object-contain"/></div><div className="rounded-xl border border-[#dce6ef] bg-[#f4f9fc] px-5 py-6"><p className="text-xs uppercase tracking-widest text-[#6b829a]">Research</p><p className="mt-3 font-serif text-3xl font-semibold">AI & Robotics</p></div><div className="rounded-xl border border-[#dce6ef] bg-[#f4f9fc] px-5 py-6"><p className="text-xs uppercase tracking-widest text-[#6b829a]">Training</p><p className="mt-3 font-serif text-3xl font-semibold">Integrated MEng</p></div></div>
      </section>

      <section className="bg-[#13254c] text-white"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-16 md:px-10"><div><p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#6be2f0]">Let's connect</p><h2 className="mt-4 font-serif text-5xl md:text-6xl">Curious about what's next?</h2><p className="mt-4 text-sm text-[#c8d7eb]">Open to research collaborations, engineering opportunities and relevant PhD conversations.</p></div><Link href="/contact" className="rounded-md bg-[#10c0dc] px-7 py-3.5 text-sm font-semibold text-[#10234a] transition hover:bg-white">Contact me ↗</Link></div></section>
      <Footer />
    </main>
  );
}
