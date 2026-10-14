"use client";

import { useRef } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import ProjectMedia from "@/components/work/project-media";

type Props = {
  projects: Project[];
  label: string;
  className?: string;
};

const WorkCardsSlide = ({ projects, label, className }: Props) => {
  const origin = useRef({ x: 0, y: 0, left: 0 });

  return (
    <div className={className} data-work-slide data-work-count={projects.length}>
      <div
        aria-label={label}
        className="flex snap-x snap-mandatory scroll-auto gap-4 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [scroll-padding-inline:0px] [touch-action:pan-x_pan-y] [&::-webkit-scrollbar]:hidden"
        onTouchStart={(event) => {
          const touch = event.changedTouches[0];
          origin.current = { x: touch.clientX, y: touch.clientY, left: event.currentTarget.scrollLeft };
        }}
        onTouchEnd={(event) => {
          const scroller = event.currentTarget;
          const touch = event.changedTouches[0];
          const dx = origin.current.x - touch.clientX;
          const dy = origin.current.y - touch.clientY;
          if (Math.abs(dx) < 28 || Math.abs(dx) < Math.abs(dy)) return;
          const card = scroller.querySelector<HTMLElement>("[data-slide]");
          if (!card) return;
          const step = card.offsetWidth + 16;
          const count = scroller.querySelectorAll("[data-slide]").length;
          const current = Math.round(origin.current.left / step);
          const next = Math.min(count - 1, Math.max(0, current + (dx > 0 ? 1 : -1)));
          if (next === current) return;
          const left = next === count - 1 ? scroller.scrollWidth - scroller.clientWidth : next * step;
          scroller.style.scrollSnapType = "none";
          scroller.scrollTo({ left, behavior: "smooth" });
          window.setTimeout(() => {
            scroller.style.scrollSnapType = "";
          }, 450);
        }}
      >
        {projects.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            data-slide
            className="panel w-[min(82%,20.5rem)] shrink-0 snap-start overflow-hidden last:snap-end"
          >
            <ProjectMedia
              cover={item.cover}
              title={item.title}
              className="aspect-[16/10] rounded-none border-0"
              imageClassName="!object-cover object-center"
              sizes="82vw"
            />
            <div className="p-4 sm:p-5">
              <p className="kicker text-lime">
                {item.label}
                <span className="whitespace-nowrap"> · {item.year}</span>
              </p>
              <h3 className="mt-2 text-xl break-words sm:text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">{item.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorkCardsSlide;
