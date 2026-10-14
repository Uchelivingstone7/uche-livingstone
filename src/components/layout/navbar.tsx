"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";
import { cn, navProjects, site } from "@/lib";
import Logo from "@/components/brand/logo";
import ProjectMedia from "@/components/work/project-media";

const Navbar = () => {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [preview, setPreview] = useState<number | null>(null);
  const settled = useRef<number | null>(null);
  const settleTimer = useRef(0);

  const chooseProject = (index: number) => {
    setPreview(index);
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      settled.current = index;
    }, 160);
  };

  const closeWork = () => {
    window.clearTimeout(settleTimer.current);
    setPreview(settled.current);
    setWorkOpen(false);
  };

  useEffect(() => {
    setOpen(false);
    setWorkOpen(false);
  }, [pathname]);

  useEffect(() => () => window.clearTimeout(settleTimer.current), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const currentNav = navProjects[preview ?? 0] ?? navProjects[0];

  const active = (href: string) =>
    href === "/work" ? pathname.startsWith("/work") : pathname === href;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
        <div className="width-layout flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
          <Link href="/" aria-label="Uche Livingstone, home" className="group flex shrink-0 items-center gap-3 outline-none">
            <span className="relative grid h-10 w-10 place-items-center">
              <Logo className="relative h-9 w-9 transition-transform duration-500 group-hover:scale-105" />
            </span>
            <span className="hidden text-sm tracking-[-0.03em] sm:block">{site.name}</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {site.nav.map((item) =>
              item.href === "/work" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setWorkOpen(true)}
                  onMouseLeave={closeWork}
                  onFocus={() => setWorkOpen(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) closeWork();
                  }}
                >
                  <Link
                    href={item.href}
                    data-active={active(item.href) ? "true" : "false"}
                    className={cn(
                      "nav-link px-2.5 py-2 text-[13px] text-foreground/75 outline-none hover:text-foreground",
                      (active(item.href) || workOpen) && "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {workOpen ? (
                      <motion.div
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0, y: 6 }}
                        transition={{ duration: 0.28, ease }}
                        className="absolute top-full left-0 z-50 w-[min(34rem,calc(100vw-2.5rem))] pt-4"
                      >
                        <div className="panel grid grid-cols-[9.5rem_minmax(0,1fr)] items-start gap-2 p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                          <Link
                            href={`/work/${currentNav.slug}`}
                            className="relative aspect-[4/3] overflow-hidden rounded-xl"
                          >
                            <ProjectMedia
                              cover={currentNav.cover}
                              title={currentNav.title}
                              className="absolute inset-0 h-full w-full !aspect-auto rounded-xl border-0"
                              imageClassName="!object-cover object-top"
                            />
                          </Link>
                          <ul className="flex flex-col items-stretch justify-start py-0.5 text-left">
                            {navProjects.map((project, index) => (
                              <li key={project.slug} className="w-full">
                                <Link
                                  href={`/work/${project.slug}`}
                                  onMouseEnter={() => chooseProject(index)}
                                  onFocus={() => chooseProject(index)}
                                  aria-current={index === preview ? "true" : undefined}
                                  className={cn(
                                    "block w-full rounded-lg px-3 py-1.5 text-left text-sm leading-snug transition-colors",
                                    index === preview ? "text-foreground" : "text-foreground/75 hover:text-foreground",
                                  )}
                                >
                                  {project.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active(item.href) ? "true" : "false"}
                  className={cn(
                    "nav-link px-2.5 py-2 text-[13px] text-foreground/75 outline-none hover:text-foreground",
                    active(item.href) && "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <p className="hidden items-center gap-2 text-xs text-foreground/70 xl:flex">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_10px_#f0a45a]" />
              {site.availability}
            </p>
            <Link
              href="/contact"
              className="btn-lime hidden rounded-full px-4 py-2 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
            >
              <span className="btn-ink">Let&apos;s talk</span>
            </Link>
            <button
              type="button"
              className="font-mono text-[11px] tracking-[0.16em] uppercase lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-0 z-[45] flex h-dvh w-full min-w-0 flex-col overflow-x-hidden overflow-y-auto bg-background px-[5%] pt-[4.75rem] pb-[max(1.25rem,env(safe-area-inset-bottom))] xl:px-[70px]"
          >
            <ul className="flex flex-1 flex-col justify-start gap-0 pt-2">
              {site.nav.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45, delay: reduce ? 0 : 0.05 + index * 0.05, ease }}
                >
                  <Link href={item.href} className="block py-2 text-[1.75rem] font-medium tracking-[-0.05em]">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="space-y-5">
              <div className="flex min-w-0 touch-pan-x gap-2 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {navProjects.map((project, index) => (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    className="w-[5.4rem] shrink-0 overflow-hidden rounded-2xl min-[390px]:w-28"
                  >
                    <ProjectMedia
                      cover={project.cover}
                      title={project.title}
                      className="aspect-[4/3] border-0"
                      imageClassName="!object-cover object-center"
                    />
                  </Link>
                ))}
              </div>
              <p className="flex items-center gap-2 text-sm text-foreground/70">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-lime" />
                {site.availability}
              </p>
              <Link href="/contact" className="btn-lime inline-flex rounded-full px-5 py-3 text-sm font-medium">
                <span className="btn-ink">Let&apos;s talk</span>
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
