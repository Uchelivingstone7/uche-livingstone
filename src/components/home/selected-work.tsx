"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { cn, featuredProjects } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import { Arrow } from "@/components/shared/text-link";
import { TechCorners } from "@/components/layout/tech-marks";
import ProjectMedia from "@/components/work/project-media";
import WorkCardsSlide from "@/components/work/work-cards-slide";
import { pinTrackHeight, usePinnedWork } from "@/components/work/use-pinned-work";

const selected = featuredProjects.slice(0, 3);

const SelectedWork = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { setHovered, shown } = usePinnedWork(sectionRef, selected.length, reduce);
  const project = selected[shown];

  useLayoutEffect(() => {
    const root = listRef.current;
    const item = root?.querySelector<HTMLElement>(`[data-work-item="${shown}"]`);
    if (!root || !item) return;
    const rootRect = root.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    if (itemRect.top < rootRect.top) root.scrollTop -= rootRect.top - itemRect.top;
    else if (itemRect.bottom > rootRect.bottom) root.scrollTop += itemRect.bottom - rootRect.bottom;
  }, [shown]);

  return (
    <div id="work" className="lg:pb-28">
      <section className="border-t border-border py-20 lg:hidden">
        <PageWrapper>
          <div className="mb-6 flex w-full flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <h2 className="display min-w-0 text-[clamp(2rem,8vw,3rem)]">Selected work</h2>
            <Link href="/work" className="shrink-0 text-sm text-lime underline-offset-4 hover:underline">
              Full work →
            </Link>
          </div>
          <WorkCardsSlide projects={selected} label="Selected work" />
        </PageWrapper>
      </section>
      <section
        ref={reduce ? undefined : sectionRef}
        data-work-stage={project.slug}
        data-work-count={selected.length}
        className="relative hidden border-t border-border lg:block"
        data-work-pin
        style={reduce ? undefined : { height: pinTrackHeight(selected.length) }}
      >
        <div className="sticky top-[4.5rem] overflow-hidden pt-8 pb-8" style={{ height: "calc(100svh - 4.5rem)" }}>
          <PageWrapper className="flex h-full flex-col">
            <div className="flex w-full shrink-0 items-end justify-between gap-6 pb-5">
              <p className="kicker text-lime">Selected work</p>
              <Link href="/work" className="shrink-0 text-sm text-lime underline-offset-4 hover:underline">
                Full work →
              </Link>
            </div>
            <div
              className="grid min-h-0 flex-1 grid-cols-12 content-start items-stretch gap-10"
              onMouseLeave={() => setHovered(null)}
            >
              <div
                ref={listRef}
                className="col-span-5 h-full min-h-0 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                <ProjectList items={selected} active={shown} onHover={setHovered} />
              </div>
              <div className="relative col-span-7 min-h-0 pt-4">
                <Preview items={selected} shown={shown} project={project} />
              </div>
            </div>
          </PageWrapper>
        </div>
      </section>
    </div>
  );
};

function ProjectList({
  items,
  active,
  onHover,
}: {
  items: typeof selected;
  active: number;
  onHover: (index: number) => void;
}) {
  return (
    <ul>
      {items.map((project, index) => {
        const on = index === active;
        return (
          <li key={project.slug} data-work-item={index} className="border-b border-border last:border-b-0">
            <Link
              href={`/work/${project.slug}`}
              data-cursor="Open"
              data-active={on ? "true" : "false"}
              onMouseEnter={() => onHover(index)}
              onFocus={() => onHover(index)}
              className={cn(
                "group flex items-center justify-between gap-4 py-3.5 outline-none lg:py-4",
                on ? "text-foreground" : "text-muted-foreground hover:text-foreground",
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
          </li>
        );
      })}
    </ul>
  );
}

function Preview({
  items,
  shown,
  project,
}: {
  items: typeof selected;
  shown: number;
  project: (typeof selected)[number];
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="Open"
      className="group flex h-full flex-col justify-start outline-none"
    >
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
        <TechCorners />
        {items.map((item, index) => (
          <div
            key={item.slug}
            className={cn(
              index === 0 ? "relative" : "absolute inset-0",
              shown === index ? "z-[1] opacity-100" : "z-0 opacity-0",
            )}
            aria-hidden={shown !== index}
          >
            <ProjectMedia
              cover={item.cover}
              title={item.title}
              priority={index < 3}
              loading="eager"
              className="rounded-none border-0"
              imageClassName="!object-cover object-center"
            />
          </div>
        ))}
        <div className="hero-scan pointer-events-none absolute inset-x-0 top-0 z-[2] h-16 bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <p className="max-w-md text-sm text-muted-foreground sm:text-base">{project.summary}</p>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm text-lime">
          Open
          <Arrow />
        </span>
      </div>
    </Link>
  );
}

export default SelectedWork;
