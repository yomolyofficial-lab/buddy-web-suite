import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  highlight,
  description,
  action,
  children,
  id,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            {title}{" "}
            {highlight && <span className="text-gradient-gold">{highlight}</span>}
          </h2>
          {description && (
            <p className="mt-3 text-muted-foreground">{description}</p>
          )}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
