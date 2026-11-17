import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";

const base = process.env.GITHUB_ACTIONS === "true" ? "/personalportfolio" : "";
const projects = [
  { n:"01", title:"Human Motion Prediction", description:"Forecasting the trajectories of vulnerable road users for safer intelligent intersections.", image:"/datasets/imptc/sample_01_vru_tracks.jpg", alt:"Vulnerable road-user trajectory visualization", href:"/projects/safecrossai", tags:["Motion forecasting","Deep learning"] },
  { n:"02", title:"Computer Vision & Perception", description:"Learning to understand complex visual scenes in robotics and intelligent mobility.", image:"/datasets/imptc/sample_01_overview.jpg", alt:"Smart intersection dataset visualization", href:"/projects", tags:["Computer vision","Perception"] },
  { n:"03", title:"Autonomous Robotics", description:"Exploring uncertainty-aware navigation, sensor fusion and safety-conscious autonomous systems.", image:"/datasets/imptc/sample_02_vru_tracks.jpg", alt:"Trajectory visualization from autonomous systems research", href:"/projects", tags:["Robotics","Safe autonomy"] }
];
export default function Home() {
 return <main className="min-h-screen bg-[#fff] text-[#101010]">
  <SiteNav/>
  <section className="relative isolate overflow-hidden border-b border-[#e8e8e8]">
   <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[49%_51%]">
    <div className="relative z-10 flex flex-col justify-center px-6 pb-14 pt-16 md:px-12 lg:min-h-[540px] lg:py-20 xl:px-16">
     <p className="text-sm text-[#656565]">Research Portfolio <span className="mx-3 text-[#bd0e16]">/</span> Electrical & Computer Engineer</p>
     <h1 className="mt-8 text-[clamp(3.8rem,6.5vw,7.4rem)] font-bold leading-[.94] tracking-[-.075em]">Panagiota<br/>Grosdouli<span className="text-[#c40012]">.</span></h1>
     <p className="mt-6 text-lg font-medium text-[#555] md:text-2xl">Artificial Intelligence <span className="text-[#be0011]">·</span> Computer Vision <span className="text-[#be0011]">·</span> Robotics</p>
     <span className="mt-7 h-[3px] w-12 bg-[#c40012]" aria-hidden="true"/>
     <p className="mt-5 max-w-[570px] text-base leading-8 text-[#575757]">Exploring intelligent perception, human motion prediction and autonomous systems through research-driven engineering.</p>
     <div className="mt-9 flex flex-wrap gap-4">
      <Link href="#research" className="rounded bg-[#ba0010] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#88000b]">Research Projects <span className="ml-3">→</span></Link>
      <Link href="/cv" className="rounded border border-[#858585] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#f3f3f3]">Academic CV <span className="ml-3">↗</span></Link>
     </div>
    </div>
    <div className="relative min-h-[360px] bg-[#f2f2f2] sm:min-h-[460px] lg:min-h-[540px]">
     <Image src={`${base}/profile.png`} alt="Portrait of Panagiota Grosdouli" fill priority sizes="(max-width: 1024px) 100vw, 51vw" className="object-cover object-center grayscale-[15%]"/>
     <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-white to-transparent lg:block" aria-hidden="true"/>
    </div>
   </div>
  </section>
  <section id="research" className="mx-auto max-w-[1440px] scroll-mt-24 border-b border-[#e8e8e8] px-6 py-16 md:px-12 lg:px-16 lg:py-20">
   <div className="grid gap-10 lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr]">
    <div><p className="text-sm font-bold text-[#c40012]">01</p><h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-.055em]">Research<br/>Projects</h2><p className="mt-5 max-w-[230px] text-sm leading-6 text-[#626262]">Selected work at the intersection of AI, computer vision and robotics.</p><Link href="/projects" className="mt-7 inline-block border-b border-black pb-1 text-sm font-semibold">View all projects →</Link></div>
    <div className="grid gap-7 md:grid-cols-3">
     {projects.map(project=><Link key={project.n} href={project.href} className="group block">
      <div className="relative aspect-[1.7] overflow-hidden bg-[#f0f0f0]"><Image src={`${base}${project.image}`} alt={project.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain grayscale transition duration-500 group-hover:scale-[1.045] group-hover:grayscale-0"/></div>
      <div className="mt-4 flex items-start justify-between gap-2"><h3 className="text-lg font-bold leading-tight tracking-[-.03em]">{project.title}</h3><span className="text-xl transition group-hover:translate-x-1">→</span></div>
      <p className="mt-2 text-sm leading-6 text-[#626262]">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">{project.tags.map(tag=><span className="bg-[#f3f3f3] px-2.5 py-1 text-[11px] text-[#555]" key={tag}>{tag}</span>)}</div>
     </Link>)}
    </div>
   </div>
  </section>
  <section className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 md:px-12 lg:grid-cols-[220px_minmax(0,1fr)_minmax(230px,.75fr)] lg:px-16 lg:py-20 xl:grid-cols-[260px_minmax(0,1fr)_minmax(230px,.75fr)]">
    <div><p className="text-sm font-bold text-[#c40012]">02</p><h2 className="mt-3 text-4xl font-bold tracking-[-.055em]">About Me</h2></div>
    <div><p className="max-w-xl text-lg leading-8 text-[#333]">I am an Electrical & Computer Engineer (Integrated MEng) interested in how intelligent systems perceive, predict and act in complex, real-world environments.</p><p className="mt-4 text-sm leading-7 text-[#666]">My work explores human motion forecasting, computer vision and safe autonomous robotics. I am open to PhD, research and engineering opportunities.</p><Link href="/about" className="mt-6 inline-block border-b border-[#c40012] pb-1 text-sm font-semibold">More about me →</Link></div>
    <div className="border-t border-[#e4e4e4] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c40012]">Background & focus</p><p className="mt-4 text-sm font-semibold">Electrical & Computer Engineer</p><p className="mt-1 text-sm text-[#666]">Integrated MEng</p><p className="mt-5 text-sm font-semibold">Research interests</p><p className="mt-1 text-sm leading-6 text-[#666]">AI · Computer Vision · Human Motion Prediction · Robotics</p><p className="mt-5 text-sm font-semibold">Industry experience</p><p className="mt-1 text-sm text-[#666]">OZZIE Robotics — Computer Vision Intern</p></div>
  </section>
  <section className="border-t border-[#e8e8e8] bg-[#fafafa]"><div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-6 py-14 md:px-12 lg:px-16"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c40012]">Get in touch</p><h2 className="mt-3 text-3xl font-bold tracking-[-.04em]">Let&apos;s explore what&apos;s next.</h2></div><Link href="/contact" className="rounded bg-[#ba0010] px-6 py-3 text-sm font-semibold text-white hover:bg-[#88000b]">Contact me →</Link></div></section>
  <Footer/>
 </main>;
}
