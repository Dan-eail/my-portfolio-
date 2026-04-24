import { useEffect, useRef, useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const skills = [
  { name: "React / Next.js", type: "Frontend Framework", icon: "⚛", pct: 92 },
  { name: "TypeScript", type: "Language", icon: "Ts", pct: 88 },
  { name: "Tailwind CSS", type: "Styling", icon: "🎨", pct: 95 },
  { name: "Node.js / Express", type: "Backend", icon: "🟢", pct: 85 },
  { name: "Python / Django", type: "Backend", icon: "🐍", pct: 80 },
  { name: "PostgreSQL", type: "Database", icon: "🗄️", pct: 78 },
  { name: "Figma", type: "UI/UX Design", icon: "🖌️", pct: 90 },
  { name: "Docker / AWS", type: "DevOps & Cloud", icon: "☁️", pct: 72 },
];

const projects = [
  {
    title: "SecondLoop E-commerce",
    desc: "Sustainable e-commerce platform for second-hand products with secure checkout and smooth browsing experience.",
    emoji: "🛍️",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "#",
    code: "#",
  },
  {
    title: "AI Advertisement Collaboration Platform (AACP)",
    desc: "Collaborative platform for planning and generating AI-driven advertisements with team workflows.",
    emoji: "🤖",
    stack: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
    live: "#",
    code: "#",
  },
  {
    title: "Campus Student Dating App",
    desc: "Student-focused dating app for campus communities with profile matching and real-time chat.",
    emoji: "💕",
    stack: ["React Native", "Firebase", "TypeScript"],
    live: "#",
    code: "#",
  },
  {
    title: "Finder",
    desc: "Finder platform to help users quickly discover people, places, and useful resources with smart search.",
    emoji: "🔎",
    stack: ["React", "TypeScript", "Tailwind", "Node.js"],
    live: "#",
    code: "#",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#05061a]/90 backdrop-blur-xl border-b border-amber-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="font-extrabold text-xl bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Portfolio.
        </span>
        <ul className="hidden md:flex gap-8 list-none">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-amber-400 text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="bg-amber-400 hover:bg-orange-400 text-black font-bold text-sm px-5 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

function HeroAvatar() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="relative w-72 h-72 md:w-80 md:h-80">
        {/* Spinning rings */}
        <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-spin" style={{ animationDuration: "20s" }} />
        <div className="absolute inset-4 rounded-full border border-dashed border-amber-500/10 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
        {/* Core */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#10133a] to-[#0d1035] border-2 border-amber-500/30 flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 200 220" className="w-52" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f5c5a3" />
                <stop offset="100%" stopColor="#e8a882" />
              </linearGradient>
              <linearGradient id="shirt" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="hair" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2d1b00" />
                <stop offset="100%" stopColor="#1a0f00" />
              </linearGradient>
            </defs>
            <ellipse cx="100" cy="185" rx="55" ry="40" fill="url(#shirt)" />
            <rect x="52" y="155" width="96" height="50" rx="20" fill="url(#shirt)" />
            <rect x="88" y="135" width="24" height="25" rx="8" fill="url(#skin)" />
            <ellipse cx="100" cy="118" rx="38" ry="42" fill="url(#skin)" />
            <ellipse cx="100" cy="90" rx="38" ry="25" fill="url(#hair)" />
            <path d="M62 100 Q58 130 64 145" stroke="#1a0f00" strokeWidth="12" fill="none" strokeLinecap="round" />
            <path d="M138 100 Q142 130 136 145" stroke="#1a0f00" strokeWidth="10" fill="none" strokeLinecap="round" />
            <ellipse cx="100" cy="88" rx="36" ry="22" fill="url(#hair)" />
            <rect x="72" y="112" width="22" height="16" rx="6" fill="none" stroke="#555" strokeWidth="2.5" />
            <rect x="106" y="112" width="22" height="16" rx="6" fill="none" stroke="#555" strokeWidth="2.5" />
            <line x1="94" y1="120" x2="106" y2="120" stroke="#555" strokeWidth="2" />
            <ellipse cx="83" cy="120" rx="7" ry="6" fill="#fff" />
            <circle cx="83" cy="120" r="3" fill="#2d1b00" />
            <ellipse cx="117" cy="120" rx="7" ry="6" fill="#fff" />
            <circle cx="117" cy="120" r="3" fill="#2d1b00" />
            <path d="M90 135 Q100 143 110 135" stroke="#c77a56" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <rect x="40" y="160" width="120" height="70" rx="8" fill="#1e293b" />
            <rect x="45" y="165" width="110" height="58" rx="5" fill="#0f1629" />
            <rect x="20" y="228" width="160" height="8" rx="4" fill="#1e293b" />
            <rect x="50" y="170" width="100" height="48" rx="4" fill="#0d1035" />
            <text x="56" y="184" fontFamily="monospace" fontSize="7" fill="#f59e0b">const dev = () =&gt; {"{"}</text>
            <text x="60" y="195" fontFamily="monospace" fontSize="7" fill="#c084fc">{"  return ("}</text>
            <text x="64" y="206" fontFamily="monospace" fontSize="7" fill="#34d399">{"    <Portfolio />"}</text>
            <text x="60" y="217" fontFamily="monospace" fontSize="7" fill="#c084fc">{"  );"}</text>
            <text x="56" y="224" fontFamily="monospace" fontSize="7" fill="#f59e0b">{"}"}</text>
          </svg>
        </div>
        {/* Floating badges */}
        {[
          { label: "Re", top: "-10px", left: "30px", color: "#61dafb", bg: "rgba(97,218,251,.1)" },
          { label: "Ts", top: "30px", right: "-15px", color: "#3b82f6", bg: "rgba(59,130,246,.1)" },
          { label: "Tw", bottom: "40px", right: "-20px", color: "#06b6d4", bg: "rgba(6,182,212,.1)" },
          { label: "Py", bottom: "10px", left: "10px", color: "#c084fc", bg: "rgba(192,132,252,.1)" },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 rounded-xl border border-amber-500/20 flex items-center justify-center font-bold text-sm shadow-xl"
            style={{ top: b.top, left: b.left, right: b.right, bottom: b.bottom, color: b.color, background: b.bg }}
          >
            {b.label}
          </div>
        ))}
      </div>
      {/* Code snippet */}
      <div className="absolute -bottom-2 -right-4 bg-[#0d1035] border border-amber-500/20 rounded-xl p-3 font-mono text-xs shadow-2xl hidden lg:block">
        <div><span className="text-purple-400">const</span> <span className="text-amber-400">skills</span> = {"["}</div>
        <div>&nbsp;&nbsp;<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Node.js"</span>,</div>
        <div>&nbsp;&nbsp;<span className="text-emerald-400">"UI/UX"</span>, <span className="text-emerald-400">"Python"</span></div>
        <div>{"];"}</div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 text-xs text-amber-400 font-semibold mb-6">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Daniel Birhanu
            </span>
          </h1>
          <p className="text-amber-400 font-bold text-lg mb-4 tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            CS & Engineering Student · Full-Stack · UI/UX
          </p>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
            Passionate about building elegant, performant web experiences. I bridge the gap between beautiful design and powerful engineering — from pixel-perfect interfaces to scalable back-end systems.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold px-6 py-3 rounded-xl hover:shadow-amber-500/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              ⬇ Download CV
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:border-amber-400 hover:text-amber-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              ✉ Contact Me
            </a>
          </div>
          <div className="flex gap-3">
            {[
              { label: "GitHub", href: "#", path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" },
              { label: "LinkedIn", href: "#", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:border-amber-400 hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <HeroAvatar />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0b0d2a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">01 — Who I Am</span>
          <h2 className="text-4xl font-extrabold mt-2 mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            About <span className="text-amber-400">Me</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mb-6 mt-3" />
          <p className="text-slate-400 leading-relaxed mb-4">
            I'm a Computer Science & Engineering student with a passion for crafting seamless digital experiences. I specialize in full-stack development and UI/UX design — building products that are both technically sound and delightful to use.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            Whether it's architecting a REST API, designing a component system, or optimizing database queries — I approach every problem with curiosity, precision, and a strong eye for quality.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { num: "3+", label: "Years Coding" },
              { num: "20+", label: "Projects Built" },
              { num: "3.3", label: "GPA" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0d1035] border border-amber-500/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-amber-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.num}</div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {["React / Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Figma", "Docker", "AWS"].map((t) => (
              <span key={t} className="bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full px-3 py-1 text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200">
            Learn More →
          </button>
        </div>
        <div className="bg-gradient-to-br from-[#0d1035] to-[#10133a] border border-amber-500/20 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full opacity-5 animate-spin" style={{ animationDuration: "10s", background: "conic-gradient(from 0deg, transparent, #f59e0b, transparent)" }} />
          <div className="relative z-10 space-y-4">
            {[
              { icon: "🎓", title: "B.S. Computer Science and Engineering", sub: "Adama Science and Technology University (ASTU)", bg: "rgba(245,158,11,.15)" },
              { icon: "💼", title: "Full-Stack Intern", sub: "Eaglion System Company", bg: "rgba(59,130,246,.15)" },
              { icon: "🎨", title: "UI/UX Designer", sub: "Freelance · 2024–Present", bg: "rgba(192,132,252,.15)" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4 bg-[#0a0b20] border border-amber-500/10 rounded-xl p-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: item.bg }}>
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-sm">{item.title}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-500/20 rounded-xl p-4 mt-2">
              <div className="text-xs text-slate-400 font-bold mb-2 tracking-wider">CURRENTLY EXPLORING</div>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning"].map((t) => (
                  <span key={t} className="bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full px-3 py-1 text-xs font-semibold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !animated) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  useEffect(() => {
    if (animated && barRef.current) {
      barRef.current.style.width = `${skill.pct}%`;
    }
  }, [animated, skill.pct]);

  return (
    <div ref={ref} className="group bg-[#0d1035] border border-amber-500/20 rounded-2xl p-5 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-lg">{skill.icon}</div>
        <div>
          <div className="font-bold text-sm">{skill.name}</div>
          <div className="text-xs text-slate-400">{skill.type}</div>
        </div>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-1.5">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-1000 ease-out"
          style={{ width: "0%" }}
        />
      </div>
      <div className="text-right text-xs font-bold text-amber-400">{skill.pct}%</div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">02 — What I Know</span>
          <h2 className="text-4xl font-extrabold mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            My <span className="text-amber-400">Skills</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">Technologies and tools I work with to craft exceptional digital products and robust engineering solutions.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s) => <SkillCard key={s.name} skill={s} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group bg-[#0d1035] border border-amber-500/20 rounded-2xl overflow-hidden flex flex-col hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
      <div className="h-44 relative flex items-center justify-center text-5xl bg-gradient-to-br from-[#10133a] to-[#0d1035]">
        {project.emoji}
        <span className="absolute top-3 right-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold px-2 py-0.5 rounded-md">LIVE</span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((t) => (
            <span key={t} className="bg-amber-500/8 border border-amber-500/20 text-amber-400 rounded-md px-2 py-0.5 text-xs font-semibold">{t}</span>
          ))}
        </div>
        <div className="flex gap-2">
          <a href={project.code} className="flex-1 text-center py-2 rounded-lg text-xs font-semibold border border-white/15 text-slate-400 hover:border-amber-400 hover:text-amber-400 transition-all duration-200">⟨ Code</a>
          <a href={project.live} className="flex-1 text-center py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-amber-400 to-orange-400 text-black hover:opacity-90 transition-opacity duration-200">Demo →</a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0b0d2a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">03 — What I Built</span>
            <h2 className="text-4xl font-extrabold mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              My <span className="text-amber-400">Projects</span>
            </h2>
          </div>
          <button className="hidden md:flex border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:border-amber-400 hover:text-amber-400 transition-all duration-200">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">04 — Let's Talk</span>
          <h2 className="text-4xl font-extrabold mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Get In <span className="text-amber-400">Touch</span>
          </h2>
          <p className="text-slate-400 mt-3">Have a project in mind? Let's build something amazing together.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Let's discuss your <span className="text-amber-400">project</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">I'm always open to discussing new opportunities, creative ideas, or ways to contribute to exciting projects. Drop me a message!</p>
            <div className="space-y-4">
              {[
                { icon: "✉", label: "EMAIL", value: "birhanudaniel724@gmail.com" },
                { icon: "📍", label: "LOCATION", value: "Adiss Abeba, Ethiopia" },
                { icon: "💬", label: "AVAILABILITY", value: "Open to opportunities", highlight: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-[#0d1035] border border-amber-500/20 rounded-xl p-4">
                  <div className="w-11 h-11 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold tracking-wider">{item.label}</div>
                    <div className={`font-semibold text-sm mt-0.5 ${item.highlight ? "text-amber-400" : ""}`}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0d1035] border border-amber-500/20 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-slate-400 font-bold tracking-wider mb-1.5">FIRST NAME</label>
                <input type="text" placeholder="John" className="w-full bg-[#0a0b20] border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 transition-all text-white placeholder-slate-600" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 font-bold tracking-wider mb-1.5">LAST NAME</label>
                <input type="text" placeholder="Doe" className="w-full bg-[#0a0b20] border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 transition-all text-white placeholder-slate-600" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs text-slate-400 font-bold tracking-wider mb-1.5">EMAIL ADDRESS</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-[#0a0b20] border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 transition-all text-white placeholder-slate-600" />
            </div>
            <div className="mb-4">
              <label className="block text-xs text-slate-400 font-bold tracking-wider mb-1.5">PHONE NUMBER</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-[#0a0b20] border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 transition-all text-white placeholder-slate-600" />
            </div>
            <div className="mb-5">
              <label className="block text-xs text-slate-400 font-bold tracking-wider mb-1.5">YOUR MESSAGE</label>
              <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-[#0a0b20] border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 transition-all text-white placeholder-slate-600 resize-y" />
            </div>
            <button className="w-full bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200">
              Send Message ✈
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b0d2a] border-t border-amber-500/20 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-extrabold text-lg bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Portfolio.</span>
        <p className="text-slate-400 text-sm">© 2026 Daniel Birhanu · Full-Stack Developer & UI/UX Designer</p>
        <div className="flex gap-6">
          {["Home", "About", "Skills", "Projects"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export default function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;700;800&display=swap";
    document.head.appendChild(link);

    document.body.style.backgroundColor = "#05061a";
    document.body.style.color = "#e2e8f0";
    document.body.style.fontFamily = "'Space Grotesk', sans-serif";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
