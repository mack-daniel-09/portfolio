import Image from "next/image";
import { Section, Tag } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import {
  education,
  experience,
  languages,
  profile,
  skills,
} from "@/data/profile";
import { projects } from "@/data/projects";
// Certifications: uncomment these imports and the section below when ready.
// import { CertificationCard } from "@/components/CertificationCard";
// import { certifications } from "@/data/certifications";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,91,219,0.15),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span
                className="h-2 w-2 rounded-full bg-green-500"
                aria-hidden="true"
              />
              Open to new opportunities
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-6xl">
              Hi, I&apos;m {profile.shortName}.
            </h1>
            <p className="mt-3 text-xl font-semibold text-accent-strong sm:text-2xl">
              {profile.title}
            </p>
            <p className="mt-1 text-muted">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-accent-strong px-5 py-2.5 font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Contact me
              </a>
              <a
                href={profile.cv}
                download
                className="rounded-lg border border-border bg-surface px-5 py-2.5 font-semibold text-text transition hover:border-accent-strong"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="mx-auto md:mx-0">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-surface shadow-xl ring-1 ring-border sm:h-64 sm:w-64">
              <Image
                src="/profile.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                quality={90}
                sizes="256px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About" title="A little about me">
        <div className="space-y-4 leading-relaxed text-muted">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <div className="border-y border-border bg-surface/50">
        <Section id="skills" eyebrow="Skills" title="Tools I work with">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-semibold text-text">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Projects */}
      <Section id="projects" eyebrow="Projects" title="Things I'm building">
        <p className="-mt-4 mb-8 max-w-3xl text-muted">
          Personal projects I&apos;m building to practice and show my skills
          with React, Next.js, and modern tools.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </Section>

      {/* Experience */}
      <div className="border-y border-border bg-surface/50">
        <Section id="experience" eyebrow="Experience" title="Where I've worked">
          <ol className="relative space-y-10 border-l-2 border-border pl-8">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span
                  className="absolute -left-10.25 top-1.5 h-4 w-4 rounded-full border-4 border-bg bg-accent-strong"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-text">
                    {job.role}{" "}
                    <span className="text-muted">· {job.company}</span>
                  </h3>
                  <span className="text-sm text-muted">{job.period}</span>
                </div>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted marker:text-accent-strong">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      {/* Education */}
      <div>
        <Section id="education" eyebrow="Education" title="Where I studied">
          <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-text">
                {education.degree}
              </h3>
              <p className="text-muted">{education.school}</p>
            </div>
            <span className="text-sm text-muted">{education.period}</span>
          </div>
          <p className="mt-4 text-muted">
            <span className="font-semibold text-text">Languages:</span>{" "}
            {languages.join(", ")}
          </p>
        </Section>
      </div>

      {/* Certifications */}
      {/* <div className="border-y border-border bg-surface/50">
        <Section id="certifications" eyebrow="Certifications" title="Certificates I've earned">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <CertificationCard key={`${c.name}-${i}`} cert={c} />
            ))}
          </div>
        </Section>
      </div> */}

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Let's work together">
        <div className="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
          <p className="mx-auto max-w-xl text-muted">
            I&apos;m looking for a frontend or web developer role where I can
            own features and ship useful products. The fastest way to reach me
            is by email.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-accent-strong px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 font-semibold text-text transition hover:border-accent-strong"
            >
              GitHub
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-5 py-2.5 font-semibold text-text transition hover:border-accent-strong"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
