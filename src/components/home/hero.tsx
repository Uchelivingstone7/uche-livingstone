"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib";

const lines = [
  { text: "I lead design", accent: "" },
  { text: "and the systems", accent: "systems" },
  { text: "behind it.", accent: "" },
];

const total = lines.reduce((sum, line) => sum + line.text.length, 0);

function revealed(lineIndex: number, count: number) {
  let before = 0;
  for (let index = 0; index < lineIndex; index += 1) before += lines[index].text.length;
  return Math.min(lines[lineIndex].text.length, Math.max(0, count - before));
}

function Line({
  text,
  accent,
  count,
  caret,
}: {
  text: string;
  accent: string;
  count: number;
  caret: number | null;
}) {
  const at = accent ? text.indexOf(accent) : -1;
  const words = text.split(" ");
  let consumed = 0;
  return (
    <span className="relative block whitespace-normal sm:whitespace-nowrap">
      {caret === 0 ? <span className="caret absolute top-[0.12em] left-0" /> : null}
      {words.map((word, wordIndex) => {
        const start = consumed;
        consumed += word.length + 1;
        return (
          <span key={`${word}-${wordIndex}`}>
            {wordIndex > 0 ? (
              <span className={`hero-char hero-space${start - 1 < count ? " is-on" : ""}`}> </span>
            ) : null}
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((character, index) => {
                const absolute = start + index;
                const lime = at >= 0 && absolute >= at && absolute < at + accent.length;
                return (
                  <span
                    key={`${character}-${absolute}`}
                    className={`hero-char relative${absolute < count ? " is-on" : ""}${lime ? " text-lime" : ""}`}
                  >
                    {character}
                    {caret === absolute + 1 ? <span className="caret absolute top-[0.12em] -right-1" /> : null}
                  </span>
                );
              })}
            </span>
          </span>
        );
      })}
    </span>
  );
}

const Hero = () => {
  const [mode, setMode] = useState<"rest" | "type">("rest");
  const [count, setCount] = useState(total);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let interval = 0;
    let safety = 0;
    if (!reduce) {
      setMode("type");
      setCount(0);
      let written = 0;
      interval = window.setInterval(() => {
        written += 1;
        setCount(written);
        if (written >= total) {
          window.clearInterval(interval);
          setMode("rest");
        }
      }, 62);
      safety = window.setTimeout(() => {
        setCount(total);
        setMode("rest");
      }, 8000);
    }

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(safety);
    };
  }, []);

  const typed = mode === "rest" ? total : count;
  let caretLine = lines.length - 1;
  let caretAt: number | null = lines[lines.length - 1].text.length;
  if (mode === "type") {
    let before = 0;
    caretLine = lines.length - 1;
    caretAt = null;
    for (let index = 0; index < lines.length; index += 1) {
      const length = lines[index].text.length;
      const local = typed - before;
      if (local >= 0 && local < length) {
        caretLine = index;
        caretAt = local;
        break;
      }
      if (index === lines.length - 1) {
        caretLine = index;
        caretAt = length;
      }
      before += length;
    }
  }

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="hero-wash hero-wash-a hero-wash-stage" />

      <div className="width-layout relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div data-hero-copy className="min-w-0 lg:col-span-7">
            <p className="kicker text-lime">{site.role}</p>
            <h1
              className={`display mt-4 text-[clamp(2.8rem,5vw,4.15rem)] leading-[1.02] text-foreground sm:leading-[0.9]${mode === "type" ? " hero-write" : ""}`}
              data-typing={mode}
            >
              {lines.map((line, index) => (
                <Line
                  key={line.text}
                  text={line.text}
                  accent={line.accent}
                  count={mode === "type" ? revealed(index, typed) : line.text.length}
                  caret={caretLine === index ? caretAt : null}
                />
              ))}
            </h1>
            <p className="mt-5 max-w-md text-sm text-muted-foreground sm:text-base">{site.statement}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="btn-lime inline-flex rounded-full px-5 py-2.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="btn-ink">View my work</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm transition-colors hover:border-lime/40 hover:text-lime"
              >
                Let&apos;s work together
              </Link>
            </div>
          </div>

          <Link href="/about" className="@container group panel relative block overflow-hidden lg:col-span-5">
            <div className="relative aspect-[4/5] w-full bg-[#101010] lg:aspect-auto lg:h-[min(125cqw,calc(100svh-15.5rem))]">
              <Image
                src="/images/uche/Profile.jpeg"
                alt="Uche Livingstone"
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-5">
              <div className="min-w-0">
                <p className="truncate text-sm tracking-[-0.03em]">Uche Livingstone</p>
                <p className="kicker mt-1">Design operations × product × management</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="font-mono text-[10px] tracking-[0.22em] text-foreground/70 uppercase">{site.location}</p>
          <a href="#about" className="scroll-cue font-mono text-[10px] tracking-[0.22em] text-foreground/70 uppercase">
            Scroll to explore ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
