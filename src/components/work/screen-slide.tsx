import type { ProjectScreen } from "@/lib/projects";
import ProjectMedia from "@/components/work/project-media";

type Props = {
  screens: ProjectScreen[];
  title: string;
  className?: string;
};

const ScreenSlide = ({ screens, title, className }: Props) => {
  if (screens.length === 0) return null;

  return (
    <div className={className} data-screen-slide>
      <div
        aria-label={`${title} screens`}
        className="flex snap-x snap-mandatory touch-pan-x gap-4 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [scroll-padding-inline:0px] [&::-webkit-scrollbar]:hidden"
      >
        {screens.map((screen) => (
          <figure
            key={screen.label}
            data-slide
            className="w-[min(82%,20.5rem)] shrink-0 snap-start snap-always last:snap-end"
          >
            <div className="overflow-hidden rounded-[22px] border border-border">
              <ProjectMedia
                cover={screen.cover}
                title={title}
                alt={`${title} — ${screen.label}`}
                className="aspect-[16/10] rounded-none border-0"
                imageClassName="!object-cover object-center"
                sizes="82vw"
              />
            </div>
            <figcaption className="mt-4">
              <p className="kicker text-foreground/80">{screen.label}</p>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">{screen.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ScreenSlide;
