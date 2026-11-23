import Image from "next/image";
import type { Project } from "@/data/projects";
import { Tag } from "./Section";

const statusStyles: Record<string, string> = {
  Live: "bg-green-500/90 text-white",
  "In progress": "bg-black/35 text-white",
  Planned: "bg-black/35 text-white",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${project.accent}`}>
        {project.image ? (
          <Image src={project.image} alt={`Screenshot of ${project.name}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
        ) : (
          <span className="text-4xl font-extrabold tracking-tight text-white/90 drop-shadow-sm" aria-hidden="true">
            {project.icon}
          </span>
        )}
        {project.status && (
          <span className={`absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-medium backdrop-blur ${statusStyles[project.status]}`}>
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-text">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted marker:text-accent-strong">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-auto flex gap-3 pt-5 text-sm font-semibold">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent-strong hover:underline">
                Live demo ↗<span className="sr-only"> of {project.name}</span>
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-accent-strong hover:underline">
                Source code ↗<span className="sr-only"> for {project.name}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
