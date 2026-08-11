import React from "react";
import { createRoot } from "react-dom/client";
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, Cloud, Server, Database, Code2, Megaphone, ShieldCheck, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import "./index.css";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: .55 } }
};

const skills = {
  "Backend": ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma", "JWT", "bcrypt"],
  "Frontend": ["React", "Vite", "JavaScript", "HTML", "CSS"],
  "Cloud & DevOps": ["AWS EC2", "S3", "CloudFront", "Route 53", "IAM", "Nginx", "GitHub Actions"],
  "Growth & Ops": ["Meta Ads", "Google Ads", "Technical SEO", "Social Media", "DNS", "Email troubleshooting", "Web3"],
};

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24">
      <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }}>
        <p className="mb-3 font-mono text-xs uppercase tracking-[.28em] text-indigo-300">{eyebrow}</p>
        <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-5xl -translate-x-1/2">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-2xl">
          <a href="#" className="font-mono font-semibold tracking-tight">irban<span className="text-indigo-400">.</span></a>
          <div className="hidden gap-6 text-sm text-zinc-400 sm:flex">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#story" className="hover:text-white">Story</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href="#contact" className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-zinc-200">Let's talk</a>
        </nav>
      </header>

      <main>
        <section className="grid-bg relative flex min-h-screen items-center">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-32 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <motion.div variants={fade} initial="hidden" animate="show">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 font-mono text-xs text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
                Building in production
              </div>
              <h1 className="max-w-4xl text-5xl font-extrabold leading-[.98] tracking-[-.045em] sm:text-7xl">
                I don't just write code.
                <span className="gradient-text block">I build the system behind the product.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
I'm Irban, a backend-focused developer and aspiring Cloud & DevOps engineer. I build real-world products, work with cloud infrastructure and automation, and continuously learn by turning ideas into reliable systems.

              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black hover:bg-zinc-200">View my work <ArrowUpRight size={17} /></a>
                <a href="mailto:irbankhan.work@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-white hover:bg-white/5">Contact me <Mail size={17} /></a>
              </div>
              <div className="mt-10 flex flex-wrap gap-2 font-mono text-xs text-zinc-500">
                {["Backend", "AWS", "DevOps", "Product", "Web3"].map(x => <span key={x} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">{x}</span>)}
              </div>
            </motion.div>

            <motion.div className="glass glow rounded-3xl p-5" variants={fade} initial="hidden" animate="show" transition={{ delay: .15 }}>
              <div className="mb-4 flex items-center gap-2 font-mono text-xs text-zinc-500"><Terminal size={14} /> ~/irban</div>
              <div className="rounded-2xl border border-white/10 bg-black/50 p-5 font-mono text-sm leading-8 text-zinc-300">
                <p><span className="text-indigo-400">$</span> whoami</p>
                <p className="pl-4 text-white">Developer · Cloud · Product Builder</p>
                <p className="mt-3"><span className="text-indigo-400">$</span> currently</p>
                <p className="pl-4 text-zinc-400">building → deploying → automating</p>
                <p className="mt-3"><span className="text-indigo-400">$</span> uptime</p>
                <p className="pl-4 text-emerald-400">always learning_</p>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id="work" eyebrow="01 — selected work" title="Things I've actually built.">
          <div className="grid gap-5 lg:grid-cols-2">
            <Project
              number="01"
              icon={<Code2 size={20} />}
              title="Production CMS"
              desc="A custom content management system built to replace repetitive manual blog publishing and make the content workflow faster."
              tags={["React", "Vite", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "AWS"]}
              featured
            />
            <Project
              number="02"
              icon={<Cloud size={20} />}
              title="Production Cloud & Deployment"
              desc="Hands-on work deploying and maintaining websites on AWS, including EC2, Nginx, S3, CloudFront, DNS and production workflows."
              tags={["AWS EC2", "Nginx", "S3", "CloudFront", "DNS", "Deployment"]}
            />
            <Project
              number="03"
              icon={<Megaphone size={20} />}
              title="Web3 Product Operations"
              desc="Supporting multiple Web3 products across development, social platforms, content, technical operations and growth."
              tags={["Web3", "Social", "SEO", "Meta Ads", "Google Ads"]}
            />
            <Project
              number="04"
              icon={<ShieldCheck size={20} />}
              title="Technical Troubleshooting"
              desc="Handling production issues, account recovery, infrastructure problems, DNS/email checks and other technical operations when they appear."
              tags={["Security", "DNS", "Email", "Troubleshooting", "Operations"]}
            />
          </div>
        </Section>

        <Section id="skills" eyebrow="02 — toolbox" title="A wide toolbox. One direction.">
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items], i) => (
              <motion.div key={group} className="glass rounded-2xl p-6" whileHover={{ y: -4 }}>
                <div className="mb-5 flex items-center gap-3">
                  {[Database, Code2, Server, Megaphone][i] && React.createElement([Database, Code2, Server, Megaphone][i], { size: 19, className: "text-indigo-300" })}
                  <h3 className="font-semibold">{group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => <span key={skill} className="rounded-lg border border-white/10 bg-white/[.025] px-3 py-2 font-mono text-xs text-zinc-300">{skill}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="infra" eyebrow="03 — behind the scenes" title="The system behind the screen.">
          <div className="glass rounded-3xl p-6 sm:p-10">
            <div className="grid gap-4 text-center md:grid-cols-5 md:items-center">
              {[
                ["Users", "01"],
                ["CloudFront", "02"],
                ["EC2 / Nginx", "03"],
                ["API / Backend", "04"],
                ["PostgreSQL", "05"],
              ].map(([name, n], i) => (
                <React.Fragment key={name}>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="font-mono text-[10px] text-zinc-600">{n}</p>
                    <p className="mt-2 font-semibold">{name}</p>
                  </div>
                  {i < 4 && <span className="hidden text-zinc-700 md:block">→</span>}
                </React.Fragment>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-zinc-500">
              From infrastructure to application logic, I like understanding what happens after the code leaves the editor.
            </p>
          </div>
        </Section>

        <Section id="story" eyebrow="04 — my story" title="I started as an IT guy.">
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr]">
            <div className="space-y-5 text-lg leading-8 text-zinc-400">
              <p>Then I started writing code.</p>
              <p>Then I started deploying it.</p>
              <p>Then I started managing infrastructure, marketing, content and technical operations.</p>
              <p>Eventually, I realized I wasn't just interested in writing code.</p>
              <p className="text-xl font-semibold text-white">I liked building the whole system.</p>
            </div>
            <div className="glass rounded-3xl p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">current direction</p>
              <h3 className="mt-4 text-2xl font-bold">Backend Engineering + Cloud / DevOps</h3>
              <p className="mt-3 leading-7 text-zinc-400">Going deeper instead of trying to be everything at once.</p>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "72%" }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-300" />
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="05 — contact" title="Have a problem worth building?">
          <div className="glass glow rounded-3xl p-7 sm:p-10">
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="max-w-xl text-lg leading-8 text-zinc-400">Let's talk about products, engineering, cloud infrastructure, automation or something interesting you want to build.</p>
                <a href="mailto:irbankhan786@gmail.com" className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-indigo-300">irbankhan786@gmail.com <ExternalLink size={17} /></a>
              </div>
              <div className="flex gap-3">
                <a aria-label="GitHub" href="https://github.com/Irbanology" className="rounded-xl border border-white/10 p-3 hover:bg-white/5"><Github size={20} /></a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/irbankhan/" className="rounded-xl border border-white/10 p-3 hover:bg-white/5"><Linkedin size={20} /></a>
                <a aria-label="Email" href="mailto:irbankhan.work@gmail.com" className="rounded-xl border border-white/10 p-3 hover:bg-white/5"><Mail size={20} /></a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/5 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Irban.</span>
          <span className="font-mono">20 · building in public</span>
        </div>
      </footer>
    </div>
  );
}

function Project({ number, icon, title, desc, tags, featured }) {
  return (
    <motion.article className={`glass group rounded-3xl p-6 ${featured ? "lg:col-span-2" : ""}`} whileHover={{ y: -5 }}>
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.03] text-indigo-300">{icon}</div>
        <span className="font-mono text-xs text-zinc-700">{number}</span>
      </div>
      <h3 className="mt-7 text-2xl font-bold">{title}</h3>
      <p className="mt-3 max-w-3xl leading-7 text-zinc-400">{desc}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map(tag => <span key={tag} className="rounded-lg bg-white/[.04] px-2.5 py-1.5 font-mono text-[11px] text-zinc-400">{tag}</span>)}
      </div>
    </motion.article>
  );
}

createRoot(document.getElementById("root")).render(<App />);
