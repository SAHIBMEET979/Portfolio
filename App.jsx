import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Download, Briefcase, GraduationCap, Code2, Award, Moon, Sun } from "lucide-react";

/**
 * ⭐ How to use this starter
 * 1) Edit the DATA object below with your info (name, roles, links, skills, projects, education, courses, etc.)
 * 2) Press the “Run/Preview” button to see your live site.
 * 3) When you're happy, export and deploy (e.g., Netlify / Vercel / GitHub Pages).
 */

const DATA = {
  name: "SAHIBMEET SINGH",
  title: "Automation / Electrical Designer",
  location: "Montréal, QC, Canada",
  summary:
    "Electrical engineer (M.Eng., Concordia) with 3+ years across electrical design, network modeling, and industrial automation. Strong in EMS/ADMS data modeling, SQL-based integration, and CAD/CAE (AutoCAD Electrical, Revit MEP, EPLAN). I deliver fabrication-ready electrical packages and clean documentation.",
  avatar:
    "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
  links: {
    github: "https://github.com/yourname", // add your real GitHub
    linkedin: "https://www.linkedin.com/in/sahibmeet-singh/",
    email: "sahibmeet.singh1@gmail.com",
    resumeUrl: "#",
  },
  roles: [
    "Electrical Design (CEC/CSA C22.1)",
    "Automation – PLC/HMI/SCADA",
    "CAD/CAE – AutoCAD Electrical, Revit, EPLAN",
    "Quality & Safety – ISO 9001, LOTO, CSA Z462",
  ],
  skills: {
    core: [
      "Single-line diagrams",
      "Panel schedules",
      "Conductor/OCPD sizing",
      "Grounding & bonding",
      "Wiring schematics",
      "Terminal plans",
      "BOMs & Cable schedules",
      "As-built & A→B revisions",
    ],
    cad_cae: [
      "AutoCAD Electrical",
      "Revit MEP",
      "EPLAN",
      "Bluebeam",
      "Autodesk Vault",
      "ETAP",
    ],
    automation: [
      "PLC (Ladder/FBD)",
      "Studio 5000 (Allen‑Bradley)",
      "Siemens TIA Portal",
      "HMI/SCADA",
      "VFD",
      "I/O lists & PLC tag lists",
    ],
    qa_safety: [
      "ISO 9001",
      "WHMIS",
      "Lockout/Tagout (LOTO)",
      "CSA Z462",
      "ASP Card",
      "CNESST / PPE",
    ],
    soft: ["Documentation", "Cross‑team collaboration", "Problem solving"],
  },
  projects: [
    {
      name: "Fabrication‑Ready Electrical Packages (Smardt)",
      description:
        "Produced single‑lines, wiring schematics, and panel layouts; standardized tagging and cross‑references; prepared BOMs and cable schedules.",
      stack: ["AutoCAD Electrical", "CEC/CSA", "Bluebeam"],
      links: { demo: "#", source: "#" },
      highlight: true,
    },
    {
      name: "Substation Automation (PSTCL 220 kV)",
      description:
        "PLC/HMI/SCADA functional design, I/O lists, structured tag lists, interlocks, alarm matrices; FAT/SAT and commissioning support.",
      stack: ["PLC", "HMI/SCADA", "TIA Portal", "Studio 5000"],
      links: { demo: "#", source: "#" },
      highlight: false,
    },
    {
      name: "Aircraft Cabin Wiring QA (Safran)",
      description:
        "Read schematics, performed panel wiring and QC (continuity, polarity, insulation), created redlines to drive as‑built updates.",
      stack: ["EWIS", "QC", "Traceability"],
      links: { demo: "#", source: "#" },
      highlight: false,
    },
  ],
  experience: [
    {
      company: "Safran Cabin Co",
      role: "Aircraft Electrical Technician (Contract)",
      period: "Dec 2023 – May 2024",
      bullets: [
        "Read aircraft schematics, performed panel wiring, and created redlines to drive as‑built updates.",
        "Prepared materials lists and tagging/terminal tables to keep drawings and shop aligned.",
        "Performed QC checks (continuity, polarity, insulation) and troubleshooting to reduce rework and ensure compliance.",
        "Worked to CEC/CSA good practices and aviation QA (ECR/ECN, traceability).",
      ],
    },
    {
      company: "Smardt",
      role: "Electrical Design Technician (Seasonal)",
      period: "May 2023 – Nov 2023",
      bullets: [
        "Produced single‑lines, wiring schematics, panel layouts with standardized layers/blocks — fabrication‑ready deliverables.",
        "Built BOMs and cable schedules; standardized tagging/numbering and cross‑references to prevent errors.",
        "Coordinated A→B revisions, issued as‑built sets, and maintained revision history (Bluebeam reviews).",
        "Aligned documentation with CEC/CSA; EPLAN (exposure).",
      ],
    },
    {
      company: "Skill India & National Development Corporation",
      role: "Electrical Designer",
      period: "Aug 2021 – Aug 2022",
      bullets: [
        "Designed drawing packages (single‑line, wiring, terminal plans, panel layouts, cable schedules) in AutoCAD Electrical — fabrication‑ready.",
        "Conductor/protection sizing and grounding/bonding per CEC/CSA (exposure)/IEC; consistent device tagging.",
        "Authored BOMs and work instructions; managed revisions and engineering data in Autodesk Vault.",
      ],
    },
    {
      company: "Punjab State Power Corporation Limited (PSTCL)",
      role: "Automation Designer",
      period: "Jan 2021 – Jun 2021",
      bullets: [
        "Functional design of PLC/HMI/SCADA for 220 kV substations with comprehensive I/O and tag lists, interlocks, and alarm matrices.",
        "Developed/tuned ladder logic and FBD; built HMI synoptics; executed FAT/SAT; supported commissioning.",
        "SCADA and telecontrol integration; produced FDS, control schematics, I/O wiring to industry practices.",
      ],
    },
  ],
  education: [
    {
      school: "Concordia University",
      degree: "Master of Electrical & Computer Engineering",
      period: "Aug 2022 – Dec 2024",
    },
    {
      school: "Thapar Institute of Engineering & Technology (TIET)",
      degree: "Bachelor of Electrical Engineering",
      period: "Jul 2018 – Jul 2021",
    },
  ],
  courses: [
    "EPLAN Udemy Certificate",
    "ETAP (exposure)",
    "PLC Programming – Ladder/FBD",
  ],
  languages: ["English", "French"],
};

// ---- UI helpers ----
const container = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SectionTitle({ icon: Icon, title, id }: { icon: any; title: string; id?: string }) {
  return (
    <div id={id} className="flex items-center gap-2 mb-6">
      <Icon className="h-5 w-5" />
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border px-3 py-1 text-sm leading-6">
      {children}
    </span>
  );
}

function ProjectCard({ p }: { p: (typeof DATA.projects)[number] }) {
  return (
    <motion.div variants={container} className="rounded-2xl border p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="mt-1 text-sm opacity-80">{p.description}</p>
        </div>
        <div className="flex gap-3">
          {p.links?.demo && (
            <a href={p.links.demo} className="inline-flex items-center gap-1 text-sm underline" target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" /> Demo
            </a>
          )}
          {p.links?.source && (
            <a href={p.links.source} className="inline-flex items-center gap-1 text-sm underline" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((s, i) => (
          <Chip key={i}>{s}</Chip>
        ))}
      </div>
    </motion.div>
  );
}

function useDarkMode() {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return { dark, setDark } as const;
}

export default function Portfolio() {
  const { dark, setDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md dark:bg-zinc-900/70">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-semibold tracking-tight">{DATA.name}</a>
          <div className="flex items-center gap-4">
            <a href="#projects" className="text-sm opacity-90 hover:opacity-100">Projects</a>
            <a href="#experience" className="text-sm opacity-90 hover:opacity-100">Experience</a>
            <a href="#skills" className="text-sm opacity-90 hover:opacity-100">Skills</a>
            <a href="#education" className="text-sm opacity-90 hover:opacity-100">Education</a>
            <a href="#contact" className="text-sm opacity-90 hover:opacity-100">Contact</a>
            <button
              className="rounded-xl border px-3 py-1 text-sm"
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main id="top" className="mx-auto max-w-6xl px-4">
        <section className="grid gap-8 py-10 md:grid-cols-[1fr,2fr] md:py-16">
          <motion.div initial="hidden" animate="visible" variants={container} className="flex flex-col items-center md:items-start">
            <img
              src={DATA.avatar}
              alt={DATA.name}
              className="h-28 w-28 rounded-2xl object-cover shadow-md"
            />
            <h1 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">{DATA.name}</h1>
            <p className="mt-1 text-sm opacity-80">{DATA.title}</p>
            <p className="mt-4 max-w-prose text-sm opacity-90">{DATA.summary}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {DATA.links.github && (
                <a href={DATA.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-sm">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
              {DATA.links.linkedin && (
                <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-sm">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
              {DATA.links.email && (
                <a href={`mailto:${DATA.links.email}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-sm">
                  <Mail className="h-4 w-4" /> Email
                </a>
              )}
              {DATA.links.resumeUrl && DATA.links.resumeUrl !== "#" && (
                <a href={DATA.links.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-sm">
                  <Download className="h-4 w-4" /> Resume
                </a>
              )}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
            <div className="grid gap-3 md:grid-cols-2">
              {DATA.roles.map((r, i) => (
                <div key={i} className="rounded-2xl border p-4 text-sm shadow-sm">
                  <span className="opacity-60">Focus</span>
                  <p className="mt-1 font-medium">{r}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-2xl border p-4 text-sm shadow-sm">
              <p><strong>Based in:</strong> {DATA.location}</p>
              <p className="mt-1 opacity-80">
                Open to roles in Electrical Design, Automation, SQA, or Cloud-adjacent engineering.
              </p>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-10 md:py-14">
          <SectionTitle icon={Code2} title="Projects" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2">
            {DATA.projects.map((p, i) => (
              <ProjectCard p={p} key={i} />
            ))}
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-10 md:py-14">
          <SectionTitle icon={Briefcase} title="Experience" />
          <div className="grid gap-5">
            {DATA.experience.map((job, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={container}
                className="rounded-2xl border p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="opacity-80">{job.company}</p>
                  </div>
                  <span className="text-sm opacity-70">{job.period}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm opacity-90">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-10 md:py-14">
          <SectionTitle icon={Award} title="Skills" />
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(DATA.skills).map(([group, items]) => (
              <div key={group} className="rounded-2xl border p-5 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((s: string, i: number) => (
                    <Chip key={i}>{s}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-10 md:py-14">
          <SectionTitle icon={GraduationCap} title="Education" />
          <div className="grid gap-5 md:grid-cols-2">
            {DATA.education.map((e, i) => (
              <div key={i} className="rounded-2xl border p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{e.school}</h3>
                <p className="text-sm opacity-80">{e.degree}</p>
                <p className="text-sm opacity-70">{e.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COURSES / CERTS */}
        <section className="py-10 md:py-14">
          <SectionTitle icon={Award} title="Courses & Certifications" />
          <div className="flex flex-wrap gap-2">
            {DATA.courses.map((c, i) => (
              <Chip key={i}>{c}</Chip>
            ))}
          </div>
        </section>

        {/* LANGUAGES */}
        <section className="py-10 md:py-14">
          <SectionTitle icon={Award} title="Languages" />
          <div className="flex flex-wrap gap-2">
            {DATA.languages.map((l, i) => (
              <Chip key={i}>{l}</Chip>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pb-16">
          <div className="rounded-2xl border p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold">Let's build something.</h3>
            <p className="mt-2 text-sm opacity-80">
              I'm open to roles and collaborations. Email me or ping me on LinkedIn.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              {DATA.links.email && (
                <a href={`mailto:${DATA.links.email}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-sm">
                  <Mail className="h-4 w-4" /> {DATA.links.email}
                </a>
              )}
              {DATA.links.linkedin && (
                <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-sm">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} {DATA.name}. Built with React + Tailwind + Framer Motion.
      </footer>
    </div>
  );
}
