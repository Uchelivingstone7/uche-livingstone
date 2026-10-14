import Link from "next/link";
import { publications } from "@/lib/publications";
import PageWrapper from "@/components/layout/page-wrapper";
import Rise from "@/components/motion/rise";

const Publications = () => {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <PageWrapper>
        <Rise className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker text-lime">Press</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">Featured publications</h2>
          </div>
          <Link href="/publications" className="text-sm text-lime underline-offset-4 hover:underline">
            All press →
          </Link>
        </Rise>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {publications.map((item, index) => (
            <Rise key={item.href} delay={index * 0.05} className="h-full">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="panel flex h-full flex-col p-6 transition-colors duration-300 hover:border-lime/40"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="kicker text-[10px] tracking-[0.14em] whitespace-nowrap text-lime">{item.outlet}</p>
                  <p className="shrink-0 font-mono text-[11px] tracking-[0.16em] text-foreground/50">{item.year}</p>
                </div>
                <h3 className="mt-4 text-2xl leading-snug tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">{item.summary}</p>
                <span className="mt-auto pt-6 text-sm text-lime">Read the piece →</span>
              </a>
            </Rise>
          ))}
        </div>
      </PageWrapper>
    </section>
  );
};

export default Publications;
