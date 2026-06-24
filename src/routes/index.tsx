import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImg from "@/assets/deepak-hero.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepak S — Full Stack Developer & Data Analyst" },
      { name: "description", content: "Portfolio of Deepak S — Full Stack Developer, Junior Data Analyst & AI & Data Science student. Projects, skills, certifications and blog." },
      { property: "og:title", content: "Deepak S — Full Stack Developer & Data Analyst" },
      { property: "og:description", content: "Building scalable web applications and turning data into actionable insights." },
    ],
  }),
  component: Index,
});

const SKILLS: { title: string; items: string[] }[] = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Python"] },
  { title: "Databases", items: ["MySQL", "MongoDB"] },
  { title: "Data Analytics", items: ["Python", "Pandas", "NumPy", "SQL", "Excel", "Power BI"] },
  { title: "Languages", items: ["Python", "JavaScript", "C++", "SQL"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter", "Postman"] },
];

const PROJECTS = [
  { tag: "Full Stack", title: "Student Management System", status: "Completed",
    desc: "Web app for managing student records with registration, attendance tracking, and record management features.",
    stack: ["React", "Node.js", "Express", "MySQL"] },
  { tag: "Frontend", title: "Personal Portfolio Website", status: "Live",
    desc: "Responsive portfolio site showcasing projects, skills, and GitHub activity with dark mode and smooth animations.",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"], code: "https://github.com/DEEPAKS110" },
  { tag: "Data Analytics", title: "Sales Analytics Dashboard", status: "Completed",
    desc: "Interactive Power BI dashboard visualizing business KPIs, sales trends, and regional performance.",
    stack: ["Power BI", "SQL", "Excel"] },
  { tag: "Machine Learning", title: "ML Prediction Model", status: "Completed",
    desc: "Python-based predictive model using scikit-learn to deliver data-driven insights on real-world datasets.",
    stack: ["Python", "Pandas", "scikit-learn", "Jupyter"] },
];

const FILTERS = ["All", "Full Stack", "Frontend", "Data Analytics", "Machine Learning"];

const BLOG = [
  { tag: "Full Stack Development", status: "Completed", date: "Jun 2025", read: "5 min read",
    title: "Building a Comprehensive Students Management Software",
    desc: "A full-stack project streamlining student records, enrollment, grades and attendance with robust DB design and an intuitive interface.",
    highlights: ["Student record management", "Enrollment & registration", "Grade tracking", "Attendance reporting", "Admin dashboard with filters"],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "MySQL"] },
  { tag: "Enterprise Software", status: "Live in Production", date: "Aug 2025", read: "7 min read",
    title: "Creating a Luxury Hotel Management System: Aurum Five Star",
    desc: "Enterprise-level application handling bookings, guest management, billing, reservations and staff coordination.",
    highlights: ["Room booking & reservations", "Real-time availability & billing", "Payment gateway", "Multi-user dashboard", "Reporting & email"],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Payment API"],
    demo: "https://preview--aurum-dishes.lovable.app/" },
  { tag: "Web Development", status: "Live", date: "Nov 2025", read: "4 min read",
    title: "Building My Professional Portfolio: A Developer's Showcase",
    desc: "A responsive portfolio to showcase skills, projects and experience — a central hub for employers and clients.",
    highlights: ["Component-based React", "Mobile-first Tailwind CSS", "Smooth animations", "Projects, certs & blog", "SEO-optimized"],
    stack: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    demo: "https://deepak-fullstackdeveloper.lovable.app/" },
  { tag: "Data Visualization", status: "Live", date: "Sep 2025", read: "6 min read",
    title: "Building an Interactive Sales Analytics Dashboard",
    desc: "Real-time insights into sales metrics, revenue trends and business performance — meaningful BI built on solid data viz fundamentals.",
    highlights: ["Real-time tracking", "Interactive charts & KPI cards", "Date range filters", "PDF / Excel export", "Geographic distribution"],
    stack: ["React", "Chart.js", "JavaScript", "REST API"] },
];

const CERTS = [
  { title: "Data Analytics Internship", issuer: "Internship Training Program", date: "Aug 2025" },
  { title: "Python for Data Science, AI & Development", issuer: "IBM · Coursera", date: "Feb 2025" },
  { title: "Python Project for Data Science", issuer: "IBM · Coursera", date: "Mar 2025" },
  { title: "Tools for Data Science", issuer: "IBM · Coursera", date: "Mar 2025" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]" />
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "radial-gradient(80% 60% at 80% 20%, color-mix(in oklch, var(--accent) 18%, transparent), transparent 70%), radial-gradient(60% 50% at 10% 10%, color-mix(in oklch, var(--primary) 14%, transparent), transparent 70%)" }} />
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-[fadeUp_0.7s_ease-out]">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75 animate-ping" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]" /></span>
            Available for opportunities
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]">
              Deepak S
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Full Stack Developer · Junior Data Analyst · AI & Data Science Student
          </p>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Building scalable web applications and transforming data into actionable insights. Passionate about user-centric apps, clean code, and machine learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] shadow-md hover:shadow-lg transition-shadow">
              View Projects <span aria-hidden>›</span>
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card font-medium hover:bg-secondary transition-colors">
              ⬇ Resume
            </a>
            <a href="https://github.com/DEEPAKS110" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card font-medium hover:bg-secondary transition-colors">
              GitHub
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card font-medium hover:bg-secondary transition-colors">
              ✉ Contact
            </a>
          </div>
          <div className="mt-8 flex gap-3">
            {[
              { href: "https://www.linkedin.com/in/deepak-s-1605ba322", label: "LinkedIn", icon: "in" },
              { href: "https://github.com/DEEPAKS110", label: "GitHub", icon: "gh" },
              { href: "mailto:deepak366409@gmail.com", label: "Email", icon: "✉" },
              { href: "tel:+916379366409", label: "Phone", icon: "☎" },
            ].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-border bg-card text-sm hover:bg-secondary transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative animate-[fadeUp_0.9s_ease-out]">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] opacity-25 blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-xl">
            <img src={heroImg} alt="Deepak S — professional headshot" width={1024} height={1024} className="w-full h-auto block" />
          </div>
          <div className="absolute -top-4 -right-4 rounded-xl border border-border bg-card/95 backdrop-blur px-4 py-2 shadow-md">
            <p className="text-xs font-semibold text-primary">Full Stack</p>
            <p className="text-xs text-muted-foreground">+ Data Analytics</p>
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card/95 backdrop-blur px-4 py-2 shadow-md">
            <p className="text-xs font-semibold">B.Tech</p>
            <p className="text-xs text-muted-foreground">AI & Data Science</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { v: "10+", l: "Projects" },
    { v: "4", l: "Certifications" },
    { v: "4", l: "Languages" },
    { v: "2", l: "Focus areas" },
  ];
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionLabel>About me</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">A developer who loves data and design</h2>
          <p className="mt-5 text-muted-foreground">
            I'm a passionate Full Stack Developer and Junior Data Analyst with a strong foundation in web development, data analysis, and machine learning. I enjoy building user-centric applications, analyzing complex datasets, and turning ideas into impactful digital solutions.
          </p>
          <p className="mt-3 text-muted-foreground">
            I continuously explore emerging technologies and strive to create innovative, data-driven solutions that solve real-world problems. I'm seeking opportunities to apply my technical skills in real-world environments.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Pursuing B.Tech in Artificial Intelligence and Data Science",
              "Passionate about full-stack development, ML, and analytics",
              "Strong problem-solving and continuous-learning mindset",
              "Hands-on experience via academic and personal projects",
            ].map((t) => (
              <li key={t} className="flex gap-2"><span className="text-primary">✓</span>{t}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 self-center">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-md transition-shadow">
              <p className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]">{s.v}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center">
          <SectionLabel>Toolbox</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Skills & technologies</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center">
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Featured projects</h2>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                filter === f
                  ? "border-transparent text-white bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
                  : "border-border bg-card hover:bg-secondary"
              }`}>{f}</button>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {list.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white">{p.tag}</span>
                <span className="text-xs text-muted-foreground">{p.status}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">{s}</span>)}
              </div>
              {p.code && (
                <a href={p.code} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm text-primary hover:underline">Code →</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="py-20 scroll-mt-20 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>Project stories</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Blog & project stories</h2>
          <p className="mt-3 text-muted-foreground">
            Insights and behind-the-scenes write-ups from the projects I've built — what I designed, how I built it, and what I learned along the way.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {BLOG.map((b) => (
            <article key={b.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{b.tag}</span>
                <span className="text-muted-foreground">{b.status}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{b.date} · {b.read}</p>
              <p className="mt-3 text-sm text-muted-foreground">{b.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {b.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-muted-foreground"><span className="text-primary">•</span>{h}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {b.stack.map((s) => <span key={s} className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{s}</span>)}
              </div>
              {b.demo && (
                <a href={b.demo} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm text-primary hover:underline">Live demo →</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center">
          <SectionLabel>Credentials</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Certifications</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTS.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--brand-from)]/15 to-[var(--brand-to)]/15 flex items-center justify-center text-4xl">🏅</div>
              <div className="p-5">
                <h3 className="font-semibold text-sm leading-snug">{c.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{c.issuer}</p>
                <p className="text-xs text-muted-foreground">{c.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const items = [
    { years: "2023 – 2027", title: "B.Tech – Artificial Intelligence and Data Science", inst: "Dhanalakshmi Srinivasan Engineering College", meta: "GPA: 8.02 (Up to Fifth Semester)" },
    { years: "2023", title: "XII – Higher Secondary Education", inst: "Tamilnadu State Board", meta: "Percentage: 79.33%" },
  ];
  return (
    <section id="education" className="py-20 scroll-mt-20 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center">
          <SectionLabel>Learning path</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Education</h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--brand-from)] to-[var(--brand-to)]" />
          {items.map((e) => (
            <div key={e.title} className="relative pl-12 pb-8 last:pb-0">
              <span className="absolute left-2 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] ring-4 ring-background" />
              <p className="text-xs font-medium text-primary">{e.years}</p>
              <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.inst}</p>
              <p className="text-sm text-muted-foreground">{e.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Let's build something together</h2>
          <p className="mt-3 text-muted-foreground">
            Have a project, role, or idea you'd like to discuss? I'd love to hear from you. Drop a message or reach me directly via the channels below.
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            {[
              { l: "Email", v: "deepak366409@gmail.com", h: "mailto:deepak366409@gmail.com", i: "✉" },
              { l: "Phone", v: "+91 6379366409", h: "tel:+916379366409", i: "☎" },
              { l: "LinkedIn", v: "deepak-s-1605ba322", h: "https://www.linkedin.com/in/deepak-s-1605ba322", i: "in" },
              { l: "GitHub", v: "DEEPAKS110", h: "https://github.com/DEEPAKS110", i: "gh" },
            ].map((c) => (
              <a key={c.l} href={c.h} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-md hover:-translate-y-0.5 transition-all">
                <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] text-white inline-flex items-center justify-center font-semibold">{c.i}</span>
                <div><p className="text-xs text-muted-foreground">{c.l}</p><p className="font-medium">{c.v}</p></div>
              </a>
            ))}
            <p className="text-sm text-muted-foreground pt-2">📍 India</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name *"><input required className="field" /></Field>
              <Field label="Email *"><input required type="email" className="field" /></Field>
            </div>
            <Field label="Subject"><input className="field" /></Field>
            <Field label="Message *"><textarea required rows={5} className="field resize-none" /></Field>
            <button className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] shadow hover:shadow-lg transition-shadow">
              {sent ? "✓ Message sent!" : "Send message"}
            </button>
          </form>
        </div>
      </div>
      <style>{`
        .field { width: 100%; padding: 0.6rem 0.875rem; border-radius: 0.5rem; border: 1px solid var(--color-border); background: var(--color-background); outline: none; font-size: 0.875rem; transition: border-color .15s, box-shadow .15s; }
        .field:focus { border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in oklch, var(--color-primary) 18%, transparent); }
        @keyframes fadeUp { from { opacity:0; transform: translateY(16px);} to { opacity:1; transform: translateY(0);} }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">{label}</span>
      {children}
    </label>
  );
}
