"use client";

import { useRef, type PointerEvent } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Props = {
  priority?: boolean;
};

const Portrait = ({ priority = false }: Props) => {
  const frame = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [20, -20]);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = frame.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    node.style.setProperty("--px", `${((x - 0.5) * 8).toFixed(2)}px`);
    node.style.setProperty("--py", `${((y - 0.5) * 6).toFixed(2)}px`);
  };

  const reset = () => {
    const node = frame.current;
    if (!node) return;
    node.style.setProperty("--px", "0px");
    node.style.setProperty("--py", "0px");
  };

  return (
    <figure ref={root}>
      <div
        ref={frame}
        onPointerMove={move}
        onPointerLeave={reset}
        className="portrait-frame relative aspect-[4/5] overflow-hidden border border-white/15 bg-[#101010]"
      >
        <div className="portrait-reveal absolute inset-0">
          <motion.div style={{ y }} className="absolute inset-[-8%]">
            <Image
              src="/images/uche/Profile.jpeg"
              alt="Uche Livingstone"
              fill
              priority={priority}
              quality={90}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="portrait-photo object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
      <figcaption className="portrait-meta mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
        <span>Uche Livingstone</span>
        <span>Design operations × product × management</span>
      </figcaption>
    </figure>
  );
};

export default Portrait;
