import { cn } from "@/lib";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

const SectionHeading = ({ eyebrow, title, description, className }: Props) => {
  return (
    <div className={cn("max-w-2xl space-y-4", className)}>
      {eyebrow ? (
        <p className="text-sm font-medium text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-sm text-muted-foreground sm:text-base">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
