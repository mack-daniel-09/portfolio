import Image from "next/image";
import type { Certification } from "@/data/certifications";

function CertificateIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M7 8h10M7 11h6" />
      <circle cx="16" cy="17" r="2.5" />
      <path d="M14.8 19.2 14 22l2-1 2 1-.8-2.8" />
    </svg>
  );
}

export function CertificationCard({ cert }: { cert: Certification }) {
  if (cert.placeholder) {
    return (
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-dashed border-border bg-surface/60">
        <div className="flex h-40 flex-col items-center justify-center gap-2 text-muted">
          <CertificateIcon />
          <span className="text-xs font-medium uppercase tracking-wider">Coming soon</span>
        </div>
        <div className="border-t border-dashed border-border p-5">
          <h3 className="font-semibold text-muted">{cert.name}</h3>
          <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
          <p className="mt-1 text-xs text-muted">{cert.date}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-700 text-white/90">
        {cert.image ? (
          <a href={cert.image} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
            <Image src={cert.image} alt={`${cert.name} certificate`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            <span className="sr-only">Open the full {cert.name} certificate</span>
          </a>
        ) : (
          <CertificateIcon />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-text">{cert.name}</h3>
        <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
        <p className="mt-1 text-xs text-muted">{cert.date}</p>
        {cert.credentialUrl && (
          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="mt-auto pt-4 text-sm font-semibold text-accent-strong hover:underline">
            Verify credential ↗<span className="sr-only"> for {cert.name}</span>
          </a>
        )}
      </div>
    </article>
  );
}
