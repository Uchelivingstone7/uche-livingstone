import type { Metadata } from "next";
import { site } from "@/lib";
import { experience, training } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import Rise from "@/components/motion/rise";
import MaskLines from "@/components/shared/mask-lines";
import ContactBanner from "@/components/shared/contact-banner";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Design operations, product design, and automotive production with Uche Livingstone: EN1 Technologies, Codematic.io, Oatomedia, Hertechtrail, and OWENICO CONSULT.",
};

export default function ExperiencePage() {
  return (
    <article>
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
        <TechMarks />
        <PageWrapper className="relative">
          <p className="kicker text-lime">Experience — {site.location}</p>
          <h1 className="display mt-6 max-w-5xl text-[clamp(3.2rem,7.4vw,6.6rem)]">
            <MaskLines lines={["The work", "so far."]} />
          </h1>
          <p className="load-rise load-d2 mt-8 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Design operations, product design, product management, and production. The roles below are the practice, including Codematic.io.
          </p>
        </PageWrapper>
      </section>

      <section className="pb-20 md:pb-28">
        <PageWrapper className="space-y-3">
          {experience.map((item, index) => (
            <Rise key={`${item.org}-${item.dates}`} delay={index * 0.04}>
              <article className="panel grid gap-2 px-5 py-4 sm:grid-cols-12 sm:px-6 sm:py-5">
                <div className="sm:col-span-4">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-lime uppercase">{item.dates}</p>
                  <p className="mt-1 text-sm text-muted-foreground sm:text-base">{item.place}</p>
                </div>
                <div className="min-w-0 sm:col-span-8">
                  <h2 className="text-2xl tracking-[-0.04em]">{item.title}</h2>
                  <p className="mt-0.5 text-sm text-muted-foreground sm:text-base">{item.org}</p>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{item.body}</p>
                </div>
              </article>
            </Rise>
          ))}
        </PageWrapper>
      </section>

      <section className="border-t border-white/10 py-20 md:py-28">
        <PageWrapper>
          <Rise>
            <p className="kicker text-lime">Training</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">Study, continued.</h2>
          </Rise>
          <div className="mt-10 grid items-stretch gap-4 md:grid-cols-2">
            {training.map((item) => (
              <Rise key={item.title} className="h-full">
                <article className="panel flex h-full min-h-[14.5rem] flex-col p-6 sm:p-8">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-lime uppercase">{item.dates}</p>
                  <h3 className="mt-4 text-2xl tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground sm:text-base">{item.org}</p>
                  <p className="mt-4 text-sm text-muted-foreground sm:text-base">{item.body}</p>
                </article>
              </Rise>
            ))}
          </div>
        </PageWrapper>
      </section>

      <ContactBanner />
    </article>
  );
}
