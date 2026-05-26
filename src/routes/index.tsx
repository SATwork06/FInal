import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mail, Linkedin, Download, ArrowRight, ArrowUpRight,
  Code2, Network, FileText, Monitor, Search, Users, MessageCircle,
  Sparkles, GraduationCap, Briefcase, Award,
  Database, LayoutDashboard, LogIn, Palette,
} from "lucide-react";
import sean from "@/assets/sean.png";
import ciscoBadge from "@/assets/cisco-badge.png";
import login1 from "@/assets/login-retro.png";
import ui1 from "@/assets/concept-parent-overview.png";

export const Route = createFileRoute("/")({ component: Portfolio });

const LINKEDIN = "https://www.linkedin.com/in/sean-andrei-tan-0b6301409/";
const EMAIL = "tansean811@gmail.com";
const CV_URL = "/Sean-Andrei-Tan-CV.pdf";
const BADGE_URL = "https://www.credly.com/badges/7d51e757-54a3-4dc7-9cef-69b8acc7c53d";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Nav active={active} />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav({ active }: { active: string }) {
  return (
    <header className="sticky top-0 z-50 mx-auto mt-4 max-w-6xl px-6">
      <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
        <a href="#home" className="flex items-center gap-2 text-sm font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground">S</span>
          <span className="hidden sm:inline">Sean Andrei</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  active === n.id
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => { e.preventDefault(); window.open(LINKEDIN, "_blank", "noopener,noreferrer"); }}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          <Linkedin className="h-3.5 w-3.5" /> LinkedIn
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for Internship
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">
            Sean Andrei <span className="gradient-text">D. Tan</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-muted-foreground md:text-xl">
            BSIS Student · Aspiring IT Professional
          </p>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground/80">
            Bachelor of Science in Information Systems · Davao del Norte State College
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Passionate about technology, problem-solving, and continuous learning — building toward a future in modern systems, networks, and thoughtful software.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
              View Portfolio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={CV_URL} download className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" />
          <div className="animate-float overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-2xl">
            <img
              src={sean}
              alt="Sean Andrei D. Tan"
              className="aspect-square w-full object-cover"
              width={512}
              height={512}
            />
          </div>
          <div className="glass absolute -bottom-5 -left-5 rounded-2xl px-4 py-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Focus</div>
            <div className="text-sm font-semibold">Information Systems</div>
          </div>
          <div className="glass absolute -top-5 -right-5 rounded-2xl px-4 py-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <div className="text-sm font-semibold">Class of 2029</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mb-12 max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function About() {
  const interests = [
    { icon: Code2, label: "Web Development" },
    { icon: Network, label: "Networking" },
    { icon: Palette, label: "UI / UX" },
    { icon: LayoutDashboard, label: "Information Systems" },
    { icon: Database, label: "Software Solutions" },
  ];
  return (
    <Section id="about" eyebrow="About" title="A student building real things.">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm Sean — a Bachelor of Science in Information Systems student at Davao del Norte State College. I'm fascinated by how thoughtful software and reliable networks quietly shape the way people work, learn, and connect.
          </p>
          <p>
            Right now I'm sharpening the fundamentals: web development, basic networking, documentation, and the design thinking that turns features into experiences. My goal is to grow into an IT professional who ships clean, useful systems and keeps learning every step of the way.
          </p>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Interests</div>
          <ul className="mt-4 space-y-3">
            {interests.map((i) => (
              <li key={i.label} className="flex items-center gap-3 text-sm">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary">
                  <i.icon className="h-4 w-4" />
                </span>
                {i.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  const tech = [
    { icon: Monitor, label: "Microsoft Office" },
    { icon: Network, label: "Basic Networking" },
    { icon: FileText, label: "Documentation" },
    { icon: Code2, label: "Computer Skills" },
    { icon: Search, label: "Research" },
  ];
  const soft = ["Teamwork", "Communication", "Adaptability", "Fast Learner"];
  return (
    <Section id="skills" eyebrow="Skills" title="The toolkit I'm growing.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Code2 className="h-4 w-4 text-primary" /> Technical
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {tech.map((t) => (
              <div key={t.label} className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/40 px-4 py-3 text-sm">
                <t.icon className="h-4 w-4 text-primary" /> {t.label}
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-8">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Users className="h-4 w-4 text-accent" /> Soft Skills
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {soft.map((s) => (
              <span key={s} className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border/50 bg-card/40 p-4 text-sm text-muted-foreground">
            <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            I work best in teams where ideas move fast and people communicate clearly.
          </div>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  const items = [
    {
      to: "/services/login-pages" as const,
      icon: LogIn,
      title: "Login Page",
      desc: "Responsive authentication screens — from glassmorphism to brutalism. Click to explore 5 design examples.",
      tags: ["Auth", "Forms", "Responsive"],
      cover: login1,
      count: "5 examples",
    },
    {
      to: "/services/ui-concepts" as const,
      icon: Palette,
      title: "UI Design Concepts",
      desc: "A connected school Performance Monitoring System — login, parent portal, teacher tools, and admin analytics.",
      tags: ["Dashboards", "Education", "System UI"],
      cover: ui1,
      count: "7 examples",
    },
  ];
  return (
    <Section id="services" eyebrow="Services" title="What I design & build.">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((s) => (
          <Link
            key={s.title}
            to={s.to}
            className="group relative block overflow-hidden rounded-3xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative overflow-hidden">
              <img
                src={s.cover}
                alt={`${s.title} preview`}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
                <s.icon className="h-3.5 w-3.5 text-primary" /> {s.count}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const points = [
    "Handled office documentation and filing of records",
    "Participated in field work alongside the BFAR team",
    "Collaborated with staff on day-to-day responsibilities",
    "Practiced communication and accountability in a professional setting",
  ];
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've shown up.">
      <div className="glass rounded-3xl p-8 md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Briefcase className="h-3.5 w-3.5" /> Immersion
            </div>
            <h3 className="mt-2 text-2xl font-semibold">BFAR — Bureau of Fisheries and Aquatic Resources</h3>
            <p className="mt-1 text-sm text-muted-foreground">Work Immersion Program</p>
          </div>
          <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            On-site
          </span>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Currently studying.">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative flex flex-wrap items-start gap-6">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Davao del Norte State College</h3>
            <p className="mt-1 text-base text-muted-foreground">
              Bachelor of Science in Information Systems
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              Expected Graduation · 2029
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Certificates() {
  return (
    <Section id="certificates" eyebrow="Certificates" title="Verified credentials.">
      <a
        href={BADGE_URL}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col gap-6 rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 md:flex-row md:items-center md:p-8"
      >
        <div className="relative shrink-0">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 blur-xl opacity-60 transition-opacity group-hover:opacity-100" />
          <img
            src={ciscoBadge}
            alt="Cisco Networking Academy — Introduction to Networks badge"
            width={160}
            height={160}
            loading="lazy"
            className="relative h-32 w-32 md:h-40 md:w-40"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Award className="h-3.5 w-3.5" /> Cisco Networking Academy
          </div>
          <h3 className="mt-2 text-xl font-semibold md:text-2xl">Introduction to Networks</h3>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground">
            Foundational training in network architectures, models, protocols, and the fundamentals of how data moves across modern networks.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            View verified badge on Credly
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </a>
      <p className="mt-6 text-xs text-muted-foreground">
        More to come — TESDA, Coursera, Google, and freeCodeCamp tracks in progress.
      </p>
    </Section>
  );
}

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: LINKEDIN },
    { icon: Download, label: "Resume", value: "Download my CV", href: CV_URL },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something.">
      <div className="glass overflow-hidden rounded-3xl p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">
              Open to <span className="gradient-text">internships</span> and collaborations.
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              The fastest way to reach me is email or LinkedIn — I usually respond within a day.
            </p>
          </div>
          <div className="grid gap-3">
            {items.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={c.href.startsWith("http") ? (e) => { e.preventDefault(); window.open(c.href, "_blank", "noopener,noreferrer"); } : undefined}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-6xl px-6 pb-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Sean Andrei D. Tan</span>
        <span>Built with React, TypeScript & Tailwind.</span>
      </div>
    </footer>
  );
}
