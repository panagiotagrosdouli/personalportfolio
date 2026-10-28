import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiArrowDown, FiMail } from "react-icons/fi";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { projects } from "@/data/projects";

const featuredSlugs = ["shield-vio", "safecrossai", "dynnav"];
const featuredProjects = featuredSlugs.map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is (typeof projects)[number] => Boolean(project));
const photo = `${process.env.GITHUB_ACTIONS === "true" ? "/personalportfolio" : ""}/profile.png`;
const eyloLogo = `${process.env.GITHUB_ACTIONS === "true" ? "/personalportfolio" : ""}/brands/eylo.png`;

export default function Home() {
  return (
    <main className="editorial-portfolio min-h-screen">
      <SiteNav />
      <section className="editorial-hero relative isolate overflow-hidden" aria-labelledby="hero-heading">
        <div className="editorial-orb editorial-orb-one" aria-hidden="true" />
        <div className="editorial-orb editorial-orb-two" aria-hidden="true" />
        <div className="editorial-stars" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-20 md:px-10 lg:min-h-[840px] lg:grid-cols-[1.13fr_0.87fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24">
          <div className="relative z-10">
            <div className="eyebrow flex flex-wrap items-center gap-3"><span className="editorial-dot" /> ROBOTICS RESEARCHER <span className="text-white/30">/</span> AI & AUTONOMOUS SYSTEMS</div>
            <p className="mt-10 text-sm font-medium tracking-[0.06em] text-[#b8bed7]">Hello, I&apos;m Panagiota Grosdouli.</p>
            <h1 id="hero-heading" className="editorial-display mt-5 max-w-3xl text-[clamp(4rem,8.5vw,8.5rem)] leading-[0.88] tracking-[-0.065em]">
              Building<br /><span className="editorial-gradient-text italic">intelligent</span><br />autonomy<span className="text-[#b5a5ff]">.</span>
            </h1>
            <p className="mt-9 max-w-xl text-base leading-8 text-[#b8bed7] md:text-lg">I explore how robots perceive uncertain environments, make safer decisions, and adapt when real-world sensing is imperfect.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link className="editorial-button-primary" href="/projects">Explore my work <FiArrowUpRight aria-hidden="true" /></Link>
              <Link className="editorial-button-secondary" href="/cv">View academic CV <FiArrowUpRight aria-hidden="true" /></Link>
            </div>
            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-[#929ab5]">
              <a href="#selected-work" className="inline-flex items-center gap-2 transition hover:text-white">Scroll to discover <FiArrowDown /></a>
              <span className="hidden sm:inline">Research · Engineering · Innovation</span>
            </div>
          </div>
          <div className="editorial-portrait-wrap relative mx-auto w-full max-w-[480px]">
            <div className="editorial-portrait-halo" aria-hidden="true" />
            <div className="editorial-portrait relative overflow-hidden rounded-[2rem]">
              <Image src={photo} alt="Portrait of Panagiota Grosdouli" width={720} height={900} priority sizes="(max-width: 1024px) 90vw, 480px" className="aspect-[4/5] h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c1023]/95 via-[#0c1023]/35 to-transparent px-7 pb-7 pt-24">
                <div className="eyebrow text-[#d2c8ff]">PANAGIOTA GROSDOULI</div>
                <p className="mt-2 text-sm text-white/80">Electrical & Computer Engineering</p>
              </div>
            </div>
            <div className="editorial-float editorial-float-top">✦ &nbsp; Perception & SLAM</div>
            <div className="editorial-float editorial-float-bottom">↗ &nbsp; Safe autonomy</div>
          </div>
        </div>
      </section>

      <section className="editorial-section relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32" aria-labelledby="approach-heading">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><p className="eyebrow">01 / RESEARCH PHILOSOPHY</p><h2 id="approach-heading" className="editorial-heading mt-6">Curiosity meets <em>precision.</em></h2></div>
          <div className="lg:pt-12"><p className="max-w-2xl text-xl leading-relaxed text-[#c5c9dd] md:text-2xl">I am interested in the space where <span className="text-white">machine intelligence, robotic perception, and real-world safety</span> come together.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[["01","Perceive","Understand the world through sensing and estimation."],["02","Reason","Represent uncertainty and evaluate risk."],["03","Adapt","Plan, recover, and act with resilience."]].map(([n,title,body]) => <div key={n} className="editorial-mini-card"><span className="eyebrow">{n}</span><h3 className="mt-7 text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-[#aeb5cd]">{body}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="border-y border-white/10 bg-[#11162c]/60 py-24 md:py-32" aria-labelledby="work-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">02 / SELECTED WORK</p><h2 id="work-heading" className="editorial-heading mt-5">Ideas in <em>motion.</em></h2></div><Link href="/projects" className="editorial-text-link">All projects <FiArrowUpRight /></Link></div>
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project,index) => <Link href={`/projects/${project.slug}`} key={project.slug} className="editorial-project group">
              <div className="flex items-center justify-between"><span className="eyebrow">PROJECT 0{index+1}</span><FiArrowUpRight className="text-2xl text-[#c6bcff] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              <div className="editorial-project-art" aria-hidden="true"><span>{index===0?"◎":index===1?"✧":"⌁"}</span><div className="editorial-project-ring" /></div>
              <div><p className="eyebrow">{project.domain}</p><h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">{project.shortTitle}</h3><p className="mt-4 line-clamp-3 text-sm leading-7 text-[#acb3cb]">{project.technicalContribution}</p><span className="mt-7 inline-block text-xs uppercase tracking-[0.12em] text-[#bcaeff]">Discover project ↗</span></div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32" aria-labelledby="venture-heading">
        <p className="eyebrow">03 / FROM RESEARCH TO REALITY</p>
        <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#191f39] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="editorial-eylo-art flex min-h-[320px] items-center justify-center p-12"><div className="w-full max-w-xs rounded-[1.5rem] bg-white p-10 shadow-2xl"><Image src={eyloLogo} alt="EYLO AI logo" width={720} height={420} className="h-auto w-full object-contain" /></div></div>
          <div className="flex flex-col justify-center p-8 md:p-14"><span className="eyebrow">INDEPENDENT VENTURE</span><h2 id="venture-heading" className="editorial-heading mt-5">Meet <em>EYLO AI.</em></h2><p className="mt-6 max-w-xl text-base leading-8 text-[#c4c9dc]">An AI-assisted research workspace connecting scholarly discovery, source-backed reasoning, funding information, and project execution. Designed to keep evidence, inference, and uncertainty distinct.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a className="editorial-button-primary" href="https://eyloai.vercel.app/" target="_blank" rel="noreferrer">Explore EYLO <FiArrowUpRight /></a><a className="editorial-button-secondary" href="https://github.com/panagiotagrosdouli/eyloai" target="_blank" rel="noreferrer"><FiGithub /> Source code</a></div>
          </div>
        </div>
      </section>

      <section className="editorial-contact border-t border-white/10 px-6 py-24 text-center md:px-10 md:py-32">
        <p className="eyebrow">04 / LET'S CONNECT</p><h2 className="editorial-heading mx-auto mt-6 max-w-4xl">Let's explore what's <em>possible.</em></h2><p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#b8bed7]">Open to conversations about research, collaboration, and meaningful work in intelligent autonomous systems.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3"><Link href="/contact" className="editorial-button-primary"><FiMail /> Get in touch</Link><Link href="/about" className="editorial-button-secondary">More about me <FiArrowUpRight /></Link></div>
      </section>
    </main>
  );
}
