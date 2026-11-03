import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";
export const metadata:Metadata={title:"About",description:"Background and interests of Panagiota Grosdouli."};
const interests=[
 {title:"Writing & books",detail:"Fiction, characters and imagined worlds.",href:"https://www.wattpad.com/user/user34912981",action:"Read stories ↗"},
 {title:"Music & radio",detail:"Songwriting, DJing and radio production.",href:"https://suno.com/@panagiotagrosdouli",action:"Listen ↗"},
 {title:"Photography & running",detail:"Finding perspective through movement and observation."},
 {title:"Film & making",detail:"Film, series and creative side projects."},
 {title:"Aviation",detail:"A long-term ambition to become a pilot."}
];
export default function About(){
 return <main className="min-h-screen"><SiteNav/>
 <div className="academic-page">
  <p className="academic-kicker">Profile</p><h1 className="mt-5 font-serif text-6xl font-semibold md:text-7xl">More than <span className="italic text-[var(--accent)]">code.</span></h1>
  <div className="mt-12 grid gap-12 md:grid-cols-[.6fr_1.4fr] md:items-start">
   <Image src={`${process.env.GITHUB_ACTIONS==="true"?"/personalportfolio":""}/profile.png`} alt="Panagiota Grosdouli" width={720} height={900} sizes="(max-width: 768px) 80vw, 300px" className="w-full max-w-[300px] object-cover"/>
   <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
    <p className="font-semibold text-[var(--foreground)]">Electrical & Computer Engineer (Integrated MEng), Democritus University of Thrace.</p>
    <p>My diploma thesis (10/10) focused on predicting vulnerable road-user trajectories. At OZZIE Robotics, I trained a YOLO segmentation model for an autonomous delivery robot.</p>
    <p>I am interested in Machine Learning, Computer Vision, Robotics and research opportunities.</p>
    <div className="flex gap-3 pt-3 text-sm font-semibold"><Link href="/cv" className="border border-[var(--foreground)] px-5 py-3 text-[var(--foreground)]">CV</Link><Link href="/contact" className="bg-[var(--foreground)] px-5 py-3 text-white">Contact ↗</Link></div>
   </div>
  </div>
  <section className="mt-20 border-t border-[var(--line)] pt-14"><p className="academic-kicker">Expertise</p><h2 className="mt-4 font-serif text-4xl font-semibold">Technical interests</h2><div className="mt-7 flex flex-wrap gap-2">{["Deep Learning","Computer Vision","PyTorch","Python","YOLO","Trajectory Prediction","ROS 2","Autonomous Systems"].map(x=><span key={x} className="border border-[var(--line)] bg-white px-4 py-2 text-sm">{x}</span>)}</div></section>
  <section className="mt-20 border-t border-[var(--line)] pt-14"><p className="academic-kicker">Beyond engineering</p><h2 className="mt-4 font-serif text-5xl font-semibold">Beyond the <span className="italic text-[var(--accent)]">screen.</span></h2>
   <div className="mt-9 grid gap-4 md:grid-cols-2">{interests.map(i=><div key={i.title} className="academic-card rounded-2xl p-7"><h3 className="font-serif text-3xl font-semibold">{i.title}</h3><p className="mt-2 text-sm leading-7 text-[var(--muted)]">{i.detail}</p>{"href" in i&&i.href?<a className="mt-4 inline-block text-xs font-semibold text-[var(--accent)]" href={i.href} target="_blank" rel="noreferrer">{i.action}</a>:null}</div>)}</div>
  </section>
 </div><Footer/></main>;
}
