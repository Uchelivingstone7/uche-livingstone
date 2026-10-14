import type { Metadata } from "next";
import { Compass, ListChecks, Workflow, Car, GraduationCap } from "lucide-react";
import { focus, pipeline, services } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import Rise from "@/components/motion/rise";
import MaskLines from "@/components/shared/mask-lines";
import ContactBanner from "@/components/shared/contact-banner";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Product design, product management, design operations, automotive product development, and design coaching with Uche Livingstone.",
};

const icons = [Compass, ListChecks, Workflow, Car, GraduationCap];

const seen = [
  "Geoplex, Havara, Conviso, Okeyson Transports, and Genflow.",
  "EN1 Technologies and Codematic.io.",
  "EN1 Technologies, Codematic.io, and OWENICO CONSULT.",
  "Front bumper systems and accessories for the Toyota Camry, Lexus ES350, and Honda Accord.",
  "Hertechtrail, with 300+ students in product design.",
];

export default function PracticePage() {
  return (
    <article>
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
        <TechMarks />
        <PageWrapper className="relative">
          <p className="kicker text-lime">Practice</p>
          <h1 className="display mt-6 max-w-5xl text-[clamp(3.2rem,7.4vw,6.6rem)]">
            <MaskLines lines={["Design, and", "the system around it."]} />
          </h1>
          <p className="load-rise load-d2 mt-8 max-w-2xl text-sm text-muted-foreground sm:text-base">
            I design the product, manage the work, and keep the workflow that gets it made. Research, prototypes, review, and production sit in one practice.
          </p>
        </PageWrapper>
      </section>

      <section className="pb-20 md:pb-28">
        <PageWrapper className="grid gap-4">
          {services.map((item, index) => {
            const Icon = icons[index] ?? Compass;
            return (
              <Rise key={item.index} delay={index * 0.04}>
                <article className="panel grid gap-6 p-6 transition-colors duration-300 hover:border-lime/40 sm:p-8 lg:grid-cols-12">
                  <div className="flex items-start justify-between lg:col-span-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 text-lime">
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.16em] text-foreground/40">{item.index}</span>
                  </div>
                  <div className="lg:col-span-8">
                    <h2 className="text-2xl tracking-[-0.04em] sm:text-3xl">{item.title}</h2>
                    <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">{item.body}</p>
                    <p className="mt-6 text-sm text-foreground/80">
                      <span className="kicker mr-3 text-lime">Seen in</span>
                      {seen[index]}
                    </p>
                  </div>
                </article>
              </Rise>
            );
          })}
        </PageWrapper>
      </section>

      <section className="border-t border-white/10 py-20 md:py-28">
        <PageWrapper>
          <Rise>
            <p className="kicker text-lime">Range</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">Where the work lands.</h2>
          </Rise>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {focus.map((item) => (
              <article key={item.title} className="panel h-full p-6 sm:p-8">
                <h3 className="text-2xl tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">{item.body}</p>
              </article>
            ))}
          </div>
        </PageWrapper>
      </section>

      <section className="border-t border-white/10 py-20 md:py-28">
        <PageWrapper>
          <Rise>
            <p className="kicker text-lime">Sequence</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">From research to delivery.</h2>
          </Rise>
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((step, index) => (
              <li key={step} className="panel flex items-center justify-between px-5 py-4">
                <span className="font-mono text-[11px] tracking-[0.16em] text-lime">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm tracking-[-0.02em]">{step}</span>
              </li>
            ))}
          </ol>
        </PageWrapper>
      </section>
      <ContactBanner />
    </article>
  );
}
