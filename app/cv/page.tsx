import { Footer } from "@/components/portfolio/Footer";
import { SiteNav } from "@/components/portfolio/SiteNav";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-stone-200 py-14">
      <div className="grid gap-6 sm:grid-cols-[210px_1fr]">
        <p className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-400">{label}</p>
        <div>{children}</div>
      </div>
    </section>
  );
}

const researchInterests = [
  ["Trajectory Prediction", "forecasting vulnerable road-user motion in dynamic environments"],
  ["Autonomous Systems", "perception, prediction, and decision making around people"],
  ["Risk-Aware Navigation", "planning under uncertainty and safety-critical outcomes"],
  ["Intelligent Transportation", "smart intersections and human-centered mobility"],
  ["Robot Learning", "learning-based autonomy with interpretable behaviour"],
];

const projects = [
  ["2025–2026", "Trajectory Prediction of VRUs at Smart Intersections", "Diploma Thesis"],
  ["2025–Present", "DynNav: Risk-Aware Navigation in Dynamic Environments", "Independent Research Project"],
  ["2025", "F1 AI Forecasting Platform", "Applied Machine Learning Project"],
  ["2025", "Robotics & Computer Vision Work", "OZZIE Robotics Internship"],
];

const skills = [
  ["Machine Learning & Data", ["Python", "Scikit-Learn", "Computer Vision", "Forecasting", "Data Analysis"]],
  ["Robotics & Autonomy", ["ROS2", "Motion Planning", "Navigation", "Multi-Agent Systems", "Risk-Aware Decision Making"]],
  ["Scientific Computing", ["C/C++", "MATLAB", "Pandas", "NumPy", "Plotly", "Streamlit", "Linux", "Git"]],
];

export default function CVPage() {
  return (
    <main id="cv" className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <SiteNav />
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <div className="flex flex-wrap items-start justify-between gap-6 pb-12">
          <div>
            <p className="section-kicker">Academic CV</p>
            <h1 className="mt-4 font-serif text-6xl leading-[0.9] tracking-[-0.055em] md:text-7xl">
              Panagiota Grosdouli
            </h1>
            <p className="mt-3 text-stone-500">Curriculum Vitae · 2026</p>
          </div>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center rounded-full border border-emerald-950 bg-emerald-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-stone-950">
            Download PDF CV ↓
          </a>
        </div>

        <Section label="Profile">
          <p className="max-w-3xl text-base leading-8 text-stone-700">
            Electrical and Computer Engineering student with a research direction in trajectory prediction, autonomous systems, risk-aware navigation, and intelligent transportation.
          </p>
        </Section>

        <Section label="Education">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h2 className="text-lg font-semibold tracking-tight text-stone-950">MEng Electrical & Computer Engineering</h2>
              <span className="mt-1.5 shrink-0 font-mono text-xs text-stone-500">2020–2026</span>
            </div>
            <p className="mt-1 text-sm text-stone-500">Democritus University of Thrace, Xanthi, Greece</p>
            <p className="mt-2 text-sm italic text-stone-600">
              Thesis: Trajectory Prediction of Vulnerable Road Users at Smart Intersections
            </p>
          </div>
        </Section>

        <Section label="Research Interests">
          <ul className="space-y-2">
            {researchInterests.map(([title, desc]) => (
              <li key={title} className="flex items-start gap-3 text-sm leading-7 text-stone-600">
                <span className="shrink-0 text-stone-300">—</span>
                <span><span className="font-semibold text-stone-950">{title}</span>: {desc}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Research Projects">
          <div className="divide-y divide-stone-200">
            {projects.map(([year, title, role]) => (
              <div key={title} className="flex items-start gap-6 py-5">
                <span className="mt-0.5 w-28 shrink-0 font-mono text-xs text-stone-500">{year}</span>
                <div>
                  <p className="text-sm font-semibold text-stone-950">{title}</p>
                  <p className="mt-0.5 text-xs text-stone-500">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section label="Technical Toolkit">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(([category, items]) => (
              <div key={category as string}>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">{category as string}</p>
                <ul className="space-y-2">
                  {(items as string[]).map((skill) => (
                    <li key={skill} className="text-sm text-stone-700">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section label="Open Source">
          <ul className="space-y-3">
            <li>
              <a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="font-mono text-sm text-stone-950 transition hover:text-emerald-900">
                github.com/PanagiotaGr
              </a>
              <span className="ml-2 text-xs text-stone-500">— research and engineering repositories</span>
            </li>
          </ul>
        </Section>

        <Section label="Graduate Research">
          <p className="max-w-3xl text-sm leading-7 text-stone-600">
            Interested in PhD opportunities and research collaborations related to trajectory prediction, autonomous systems, robotics, machine learning, and intelligent transportation.
          </p>
        </Section>

        <Section label="Contact">
          <div className="space-y-2 text-sm">
            <p><span className="inline-block w-32 font-mono text-xs text-stone-500">Academic</span><a href="mailto:panagros1@ee.duth.gr" className="text-stone-950 hover:text-emerald-900">panagros1@ee.duth.gr</a></p>
            <p><span className="inline-block w-32 font-mono text-xs text-stone-500">Personal</span><a href="mailto:panagiotagrosdouli@gmail.com" className="text-stone-950 hover:text-emerald-900">panagiotagrosdouli@gmail.com</a></p>
            <p><span className="inline-block w-32 font-mono text-xs text-stone-500">GitHub</span><a href="https://github.com/PanagiotaGr" target="_blank" rel="noreferrer" className="text-stone-950 hover:text-emerald-900">github.com/PanagiotaGr</a></p>
            <p><span className="inline-block w-32 font-mono text-xs text-stone-500">LinkedIn</span><a href="https://www.linkedin.com/in/panagiota-grosdouli-b468b0201/" target="_blank" rel="noreferrer" className="text-stone-950 hover:text-emerald-900">linkedin.com/in/panagiota-grosdouli-b468b0201</a></p>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}
