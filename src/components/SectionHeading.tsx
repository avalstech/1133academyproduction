import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
