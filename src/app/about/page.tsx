import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib";
import { about, experience, skills } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import ContactBanner from "@/components/shared/contact-banner";
import Portrait from "@/components/about/portrait";
import Study from "@/components/about/study";
import Rise from "@/components/motion/rise";
import MaskLines from "@/components/shared/mask-lines";

export const metadata: Metadata = {
  title: "About",
  description:
    "Uche Livingstone is a design operations lead and product designer in Lagos. He designs products and the workflows that get them made.",
};

const bands = [
  { group: "Design", tone: "text-lime" },
  { group: "Operations", tone: "text-lime" },
  { group: "Technology", tone: "text-lime" },
];

export default function AboutPage() {
  return (
    <article>
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <TechMarks />
        <PageWrapper className="relative grid items-end gap-14 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <p className="kicker text-lime">About — {site.location}</p>
            <h1 className="display mt-6 text-[clamp(3.2rem,7vw,6.2rem)]">
              <MaskLines lines={["I’m Uche."]} />
            </h1>
            <p className="load-rise load-d2 mt-8 max-w-xl text-2xl leading-tight tracking-[-0.04em] text-lime">
              {about.heading[0]} {about.heading[1]}
            </p>
            <div className="load-rise load-d3 mt-8 max-w-xl space-y-5 text-sm text-muted-foreground sm:text-base">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="load-rise load-d4 mt-8 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              {site.location} · {site.availability}
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Portrait priority />
          </div>
        </PageWrapper>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-20 md:py-28">
        <PageWrapper className="relative">
          <Rise>
            <p className="kicker text-lime">Marks</p>
            <h2 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">What the work has added up to.</h2>
          </Rise>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {about.marks.map((mark, index) => (
              <Rise key={mark} delay={index * 0.06}>
                <p className="panel h-full p-8 text-2xl leading-snug tracking-[-0.04em] sm:text-3xl">
                  {mark}
                </p>
              </Rise>
            ))}
          </div>
        </PageWrapper>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-20 md:py-28">
        <PageWrapper className="relative">
          <Rise>
            <p className="kicker text-lime">Experience</p>
            <div className="mt-4 flex items-start justify-between gap-4 md:items-end">
              <h2 className="display min-w-0 text-4xl sm:text-6xl">Roles, in order.</h2>
              <Link href="/experience" className="shrink-0 text-sm text-lime underline-offset-4 hover:underline md:mb-1">
                Full experience →
              </Link>
            </div>
          </Rise>
          <div className="mt-12 grid gap-4 md:hidden">
            {experience.slice(0, 2).map((item) => (
              <article key={`${item.org}-${item.dates}`} className="panel flex h-full flex-col p-5">
                <p className="font-mono text-[11px] tracking-[0.16em] text-foreground/40">{item.dates}</p>
                <h3 className="mt-5 text-2xl tracking-[-0.04em]">
                  {item.title}
                  <span className="text-muted-foreground"> · {item.org}</span>
                </h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">{item.body}</p>
                <p className="mt-5 text-sm text-lime">{item.place}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 hidden gap-4 md:grid">
            {experience.slice(0, 2).map((item, index) => (
              <Rise key={`${item.org}-${item.dates}`} delay={index * 0.05}>
                <article className="panel grid gap-2 px-5 py-4 sm:grid-cols-12 sm:px-6 sm:py-5">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-lime uppercase sm:col-span-3">
                    {item.dates}
                  </p>
                  <div className="min-w-0 sm:col-span-9">
                    <h3 className="text-lg tracking-[-0.03em]">
                      {item.title}
                      <span className="text-muted-foreground"> · {item.org}</span>
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground sm:text-base">{item.place}</p>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{item.body}</p>
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </PageWrapper>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-20 md:py-28">
        <PageWrapper className="relative">
          <Rise>
            <p className="kicker text-lime">Toolkit</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">Tools I work in.</h2>
          </Rise>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {skills.map((group) => {
              const tone = bands.find((band) => band.group === group.group);
              return (
                <Rise key={group.group}>
                  <article className="panel h-full p-6 sm:p-8">
                    <p className={`kicker ${tone?.tone ?? "text-lime"}`}>{group.group}</p>
                    <ul className="mt-6 space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="border-t border-white/10 pt-3 text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Rise>
              );
            })}
          </div>
        </PageWrapper>
      </section>

      <Study />

      <ContactBanner />
    </article>
  );
}
