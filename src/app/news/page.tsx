import type { Metadata } from "next";
import { publications } from "@/lib/publications";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import Rise from "@/components/motion/rise";
import MaskLines from "@/components/shared/mask-lines";
import ContactBanner from "@/components/shared/contact-banner";

export const metadata: Metadata = {
  title: "News",
  description: "News on EN1 Technologies, connected to Uche Livingstone.",
};

export default function PublicationsPage() {
  return (
    <article>
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
        <TechMarks />
        <PageWrapper className="relative">
          <p className="kicker text-lime">News</p>
          <h1 className="display mt-6 max-w-5xl text-[clamp(3.2rem,7.4vw,6.6rem)]">
            <MaskLines lines={["News."]} />
          </h1>
          <p className="load-rise load-d2 mt-8 max-w-2xl text-sm text-muted-foreground sm:text-base">
            News that sits next to my work at EN1 Technologies.
          </p>
        </PageWrapper>
      </section>

      <section className="pb-20 md:pb-28">
        <PageWrapper className="grid gap-4">
          {publications.map((item, index) => (
            <Rise key={item.href} delay={index * 0.04}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="panel grid gap-4 p-6 transition-colors duration-300 hover:border-lime/40 sm:p-8 lg:grid-cols-12"
              >
                <div className="flex items-baseline justify-between gap-3 lg:col-span-3 lg:flex-col lg:items-start lg:justify-start">
                  <p className="kicker whitespace-nowrap text-lime">{item.outlet}</p>
                  <p className="shrink-0 font-mono text-[11px] tracking-[0.16em] text-foreground/50">{item.year}</p>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-2xl leading-snug tracking-[-0.04em] sm:text-3xl">{item.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">{item.summary}</p>
                  <span className="mt-6 inline-flex text-sm text-lime">Read the piece →</span>
                </div>
              </a>
            </Rise>
          ))}
        </PageWrapper>
      </section>
      <ContactBanner />
    </article>
  );
}
