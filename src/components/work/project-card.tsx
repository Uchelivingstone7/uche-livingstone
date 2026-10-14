import Link from "next/link";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib";
import ProjectMedia from "@/components/work/project-media";

type Props = {
  project: Project;
  className?: string;
  priority?: boolean;
};

const ProjectCard = ({ project, className, priority = false }: Props) => {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group flex flex-col outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <ProjectMedia cover={project.cover} title={project.title} priority={priority} />
      <div className="flex flex-col gap-2 pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        <p className="text-sm text-muted-foreground sm:text-base">{project.summary}</p>
        <p className="text-sm font-medium text-foreground/80">{project.role}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
