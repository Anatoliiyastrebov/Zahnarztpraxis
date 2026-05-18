import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  id,
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto", className)}>
      <p className="text-sm font-semibold uppercase tracking-wider text-medical-600">
        {label}
      </p>
      <h2
        id={id}
        className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      )}
    </div>
  );
}
