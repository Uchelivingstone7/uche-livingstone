"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";

const ExperienceStrip = () => {
  const reduce = useReducedMotion();
  const roles = experience.slice(0, 4);

  return (
    <section className="border-t border-border py-20 md:py-28">
      <PageWrapper>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker text-lime">Experience</p>
            <h2 className="display mt-4 text-5xl sm:text-6xl">The work so far.</h2>
          </div>
          <Link href="/experience" className="text-sm text-foreground/70 hover:text-lime">
            Full experience →
          </Link>
        </div>
        <div className="relative mt-12">
          <motion.span
            aria-hidden
            className="absolute top-0 bottom-0 left-[7px] w-px origin-top bg-lime/40"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <ul>
            {roles.map((item, index) => (
              <motion.li
                key={item.org + item.dates}
                initial={reduce ? false : { opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid gap-2 py-6 pl-10 md:grid-cols-12 md:items-baseline"
              >
                <span className="absolute top-8 left-0 h-3.5 w-3.5 rounded-full border border-lime/70 bg-background shadow-[0_0_12px_rgba(240,164,90,0.45)]" />
                <p className="font-mono text-[11px] tracking-[0.14em] text-lime uppercase md:col-span-3">
                  {item.dates}
                </p>
                <h3 className="text-2xl tracking-[-0.04em] md:col-span-5">{item.title}</h3>
                <p className="text-sm text-muted-foreground sm:text-base md:col-span-4">
                  {item.org}
                  <span className="text-foreground/40"> · {item.place}</span>
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </PageWrapper>
    </section>
  );
};

export default ExperienceStrip;
