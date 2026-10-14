"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { certifications, education } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";
import Rise from "@/components/motion/rise";

const NAV = 72;

const Study = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [desktop, setDesktop] = useState(false);
  const [viewH, setViewH] = useState(0);
  const [travel, setTravel] = useState(0);
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const pin = Boolean(desktop && !reduce && travel > 0);

  useLayoutEffect(() => {
    const measure = () => {
      const view = cardsRef.current?.offsetHeight ?? 0;
      const list = listRef.current?.scrollHeight ?? listRef.current?.offsetHeight ?? 0;
      setViewH(view);
      setTravel(Math.max(0, list - view));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (cardsRef.current) ro.observe(cardsRef.current);
    if (listRef.current) ro.observe(listRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [desktop, reduce]);

  useEffect(() => {
    if (!desktop || reduce || travel <= 0) {
      setShift(0);
      return;
    }
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, (NAV - top) / travel));
      setShift(-travel * progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [desktop, reduce, travel]);

  return (
    <section
      ref={sectionRef}
      data-study
      className="relative border-t border-white/10"
      style={pin ? { height: `calc(100svh - 4.5rem + ${travel}px)` } : undefined}
    >
      <div
        className={pin ? "sticky top-[4.5rem] flex items-center overflow-hidden bg-background" : undefined}
        style={pin ? { height: "calc(100svh - 4.5rem)" } : undefined}
      >
        <PageWrapper className="w-full py-20 md:py-28">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <Rise>
                <p className="kicker text-lime">Study</p>
                <h2 className="display mt-4 text-4xl sm:text-5xl">Education.</h2>
              </Rise>
              <div ref={cardsRef} className="mt-10 grid gap-3">
                {education.map((item) => (
                  <article
                    key={item.title}
                    className="panel grid gap-4 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-x-16 sm:px-5 sm:py-3.5"
                  >
                    <span>
                      <span className="block text-2xl tracking-[-0.04em]">{item.title}</span>
                      <span className="mt-1 block text-sm text-muted-foreground sm:text-base">{item.org}</span>
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.16em] text-lime uppercase sm:pl-10 sm:text-right">
                      {item.dates}
                    </span>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <Rise>
                <p className="kicker text-lime">Proof</p>
                <h2 className="display mt-4 text-4xl sm:text-5xl">Certificates.</h2>
              </Rise>
              <div
                className={`mt-10 ${pin ? "overflow-hidden" : ""}`}
                style={pin && viewH ? { height: viewH } : undefined}
              >
                <div
                  ref={listRef}
                  className="space-y-4 will-change-transform"
                  style={pin ? { transform: `translateY(${shift}px)` } : undefined}
                >
                  {certifications.map((item) => (
                    <article
                      key={`${item.org}-${item.title}-${item.dates}`}
                      className="panel grid gap-4 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-x-16 sm:p-6"
                    >
                      <span>
                        <span className="block text-2xl tracking-[-0.04em]">{item.title}</span>
                        <span className="mt-1 block text-sm text-muted-foreground sm:text-base">{item.org}</span>
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.16em] text-lime uppercase sm:pl-10 sm:text-right">
                        {item.dates}
                      </span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </div>
    </section>
  );
};

export default Study;
