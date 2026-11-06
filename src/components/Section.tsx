export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20" aria-labelledby={`${id}-title`}>
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-strong">{eyebrow}</p>
      <h2 id={`${id}-title`} className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-bg px-2.5 py-0.5 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
