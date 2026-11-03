import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Footer } from "@/components/portfolio/Footer";
export const metadata:Metadata={title:"About",description:"About Panagiota Grosdouli: engineer, researcher, writer and creative mind."};
const interests=[
{number:"01",title:"Stories & writing",text:"Books, characters and imagined worlds.",url:"https://www.wattpad.com/user/user34912981",link:"Wattpad ↗"},
{number:"02",title:"Music & radio",text:"Songwriting, DJing, radio and podcasts.",url:"https://suno.com/@panagiotagrosdouli",link:"My music ↗"},
{number:"03",title:"Photography & running",text:"Motion, observation and new perspectives."},
{number:"04",title:"Film & side projects",text:"Visual stories and making ideas real."},
{number:"05",title:"Aviation",text:"Learning to fly is a personal ambition."}
];
export default function AboutPage(){
 return <main className="min-h-screen"><SiteNav/>
  <section className="bg-[#142521] text-white"><div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24"><p className="text-[11px] font-semibold uppercase tracking-[.23em] text-[#efb09d]">The person behind the work</p><h1 className="mt-6 font-serif text-7xl leading-[.9] tracking-tight md:text-8xl">More than <span className="italic text-[#efb09d]">code.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#c5d2ca]">Engineer by training. Curious by nature.</p></div></section>
  <section className="academic-page"><div className="grid gap-12 md:grid-cols-[.66fr_1.34fr] md:items-start">
   <div className="relative max-w-[330px]"><div className="absolute -right-3 -bottom-3 h-full w-full border border-[var(--accent)]"/><Image src={`${process.env.GITHUB_ACTIONS==="true"?"/personalportfolio":""}/profile.png`} alt="Portrait of Panagiota Grosdouli" width={720} height={900} sizes="(max-width:768px) 85vw,330px" className="relative aspect-[4/5] w-full object-cover"/></div>
   <div><p className="academic-kicker">01 / Background</p><h2 className="mt-5 font-serif text-5xl font-semibold leading-tight">Hello, I'm Panagiota.</h2><div className="mt-7 space-y-5 text-base leading-8 text-[var(--muted)]"><p>I'm an Electrical and Computer Engineer (Integrated MEng, 2026) from Democritus University of Thrace.</p><p>My diploma thesis (10/10) focused on predicting vulnerable road-user trajectories. At OZZIE Robotics, I developed a YOLO-based segmentation model for an autonomous delivery robot.</p><p>I'm interested in Machine Learning, Computer Vision, Robotics and autonomous systems.</p></div>
   <div className="mt-8 flex flex-wrap gap-4"><Link className="bg-[#142521] px-6 py-3 text-sm font-semibold text-white" href="/cv">View CV ↗</Link><Link className="border border-[var(--foreground)] px-6 py-3 text-sm font-semibold" href="/contact">Contact</Link></div></div>
  </div></section>
  <section className="border-y border-[var(--line)] bg-[#e7e9e1]"><div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20"><p className="academic-kicker">02 / Toolkit</p><h2 className="mt-4 font-serif text-5xl font-semibold">What I work with.</h2><div className="mt-9 flex flex-wrap gap-3">{["Deep Learning","Computer Vision","Trajectory Prediction","YOLO","Python","PyTorch","OpenCV","ROS 2","Robotics"].map(x=><span key={x} className="border border-[#bfcbc1] bg-[#f8faf5] px-4 py-2.5 text-sm">{x}</span>)}</div></div></section>
  <section className="academic-page"><p className="academic-kicker">03 / Beyond engineering</p><h2 className="mt-4 font-serif text-6xl font-semibold leading-tight">The creative <span className="italic text-[var(--accent)]">side.</span></h2><p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">Technology is one part of who I am. Here's what else I enjoy.</p>
   <div className="mt-11 grid gap-4 md:grid-cols-2">{interests.map(x=><article key={x.number} className="academic-card flex min-h-[180px] flex-col justify-between p-7"><div><p className="academic-kicker">{x.number}</p><h3 className="mt-3 font-serif text-3xl font-semibold">{x.title}</h3><p className="mt-2 text-sm leading-7 text-[var(--muted)]">{x.text}</p></div>{"url" in x&&x.url?<a href={x.url} target="_blank" rel="noreferrer" className="mt-5 text-sm font-semibold text-[var(--accent)]">{x.link}</a>:null}</article>)}</div>
   <p className="mt-8 text-sm text-[var(--muted)]">Also: <a className="font-semibold underline underline-offset-4" href="https://stream.zeno.fm/0eptqs75m5zuv" target="_blank" rel="noreferrer">listen to my radio stream ↗</a></p>
  </section><Footer/>
 </main>;
}
