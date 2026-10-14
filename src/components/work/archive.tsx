"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { cn, projects } from "@/lib";
import { Arrow } from "@/components/shared/text-link";
import { TechCorners } from "@/components/layout/tech-marks";
import PageWrapper from "@/components/layout/page-wrapper";
import ProjectMedia from "@/components/work/project-media";
import { usePinnedWork } from "@/components/work/use-pinned-work";

const Archive = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { setHovered, shown } = usePinnedWork(sectionRef, projects.length, reduce);
  const current = projects[shown];

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("hide-scrollbar");
    return () => root.classList.remove("hide-scrollbar");
  }, []);

  useLayoutEffect(() => {
    const root = listRef.current;
    const item = root?.querySelector<HTMLElement>(`[data-work-item="${shown}"]`);
    if (!root || !item) return;
    const rootRect = root.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    if (itemRect.top < rootRect.top) root.scrollTop -= rootRect.top - itemRect.top;
    else if (itemRect.bottom > rootRect.bottom) root.scrollTop += itemRect.bottom - rootRect.bottom;
  }, [shown]);

  if (reduce) {
    return (
      <PageWrapper className="pb-20 md:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-10" onMouseLeave={() => setHovered(null)}>
          <div className="lg:col-span-5">
            <ProjectList active={shown} onHover={setHovered} mobileImages />
          </div>
          <div className="relative hidden min-h-[28rem] lg:col-span-7 lg:flex lg:flex-col">
            <Preview shown={shown} project={current} />
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <div className="pb-20 md:pb-28">
      <section className="lg:hidden">
        <PageWrapper>
          <ProjectList active={shown} onHover={setHovered} mobileImages />
        </PageWrapper>
      </section>
      <section
        ref={sectionRef}
        className="relative hidden lg:block"
        data-work-pin
        style={{ height: `${(projects.length + 0.5) * 78}vh` }}
      >
        <div className="sticky top-[4.5rem] overflow-hidden pt-4 pb-8" style={{ height: "calc(100svh - 4.5rem)" }}>
          <PageWrapper className="h-full">
            <div
              className="grid h-full content-start items-stretch gap-10 pt-4 lg:grid-cols-12 lg:pt-0"
              onMouseLeave={() => setHovered(null)}
            >
              <div
                ref={listRef}
                className="flex h-full min-h-0 flex-col justify-start overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:col-span-5"
              >
                <ProjectList active={shown} onHover={setHovered} />
              </div>
              <div className="relative hidden min-h-0 lg:col-span-7 lg:flex lg:flex-col">
                <Preview shown={shown} project={current} />
              </div>
            </div>
          </PageWrapper>
        </div>
      </section>
    </div>
  );
};

function ProjectList({
  active,
  onHover,
  mobileImages = false,
}: {
  active: number;
  onHover: (index: number) => void;
  mobileImages?: boolean;
}) {
  return (
    <ul>
      {projects.map((project, index) => {
        const selected = index === active;
        return (
          <li key={project.slug} data-work-item={index} className="border-b border-border last:border-b-0">
            <Link
              href={`/work/${project.slug}`}
              data-cursor="Open"
              data-active={selected ? "true" : "false"}
              onMouseEnter={() => onHover(index)}
              onFocus={() => onHover(index)}
              className={cn(
                "group flex items-center justify-between gap-4 py-3.5 outline-none lg:py-4",
                selected ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="min-w-0">
                <span className="block text-[clamp(1.7rem,4vw,3.2rem)] leading-[0.95] font-medium tracking-[-0.05em] break-words">
                  {project.title}
                </span>
                <span className="mt-2 block font-mono text-[11px] tracking-[0.14em] text-lime/80 uppercase">
                  {project.label}
                  <span className="whitespace-nowrap"> · {project.year}</span>
                </span>
              </span>
              <Arrow />
            </Link>
            {mobileImages ? (
              <div className="pb-6 lg:hidden">
                <Link href={`/work/${project.slug}`} className="block overflow-hidden rounded-[22px] outline-none">
                  <ProjectMedia
                    cover={project.cover}
                    title={project.title}
                    className="rounded-[22px]"
                    imageClassName="!object-cover object-center"
                  />
                </Link>
                <p className="mt-4 text-sm text-muted-foreground sm:text-base">{project.summary}</p>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function Preview({
  shown,
  project,
}: {
  shown: number;
  project: (typeof projects)[number];
}) {
  return (
    <Link href={`/work/${project.slug}`} data-cursor="Open" className="group flex h-full min-h-0 flex-col outline-none">
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[24px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
        <TechCorners />
        {projects.map((item, index) => (
          <div
            key={item.slug}
            className={cn("absolute inset-0", shown === index ? "z-[1] opacity-100" : "z-0 opacity-0")}
            aria-hidden={shown !== index}
          >
            <ProjectMedia
              cover={item.cover}
              title={item.title}
              priority={index < 3}
              loading="eager"
              className="!aspect-auto h-full w-full rounded-none border-0"
              imageClassName="!object-cover object-center"
            />
          </div>
        ))}
        <div className="hero-scan pointer-events-none absolute inset-x-0 top-0 z-[2] h-16 bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
      </div>
      <div className="mt-5 flex shrink-0 items-start justify-between gap-6">
        <p className="max-w-md text-sm text-muted-foreground sm:text-base">{project.summary}</p>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm text-lime">
          Open
          <Arrow />
        </span>
      </div>
    </Link>
  );
}

export default Archive;
