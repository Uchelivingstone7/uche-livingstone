import Link from "next/link";
import { Compass, ListChecks, Workflow } from "lucide-react";
import { services } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";
import Rise from "@/components/motion/rise";

const icons = [Compass, ListChecks, Workflow];

const ServicesGrid = () => {
  return (
    <section id="practice" className="border-t border-border py-20 md:py-28">
      <PageWrapper>
        <Rise className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker text-lime">Practice</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">What I do</h2>
          </div>
          <Link href="/practice" className="text-sm text-lime underline-offset-4 hover:underline">
            See all →
          </Link>
        </Rise>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.slice(0, 3).map((item, index) => {
            const Icon = icons[index] ?? Compass;
            return (
              <Rise key={item.index} delay={index * 0.05} className="h-full">
                <Link
                  href="/practice"
                  className="panel group flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime/40 hover:shadow-[0_18px_50px_rgba(240,164,90,0.12)] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 text-lime transition-transform duration-300 group-hover:rotate-6 group-hover:bg-lime group-hover:text-ink">
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.16em] text-foreground/40">{item.index}</span>
                  </div>
                  <h3 className="mt-5 text-2xl tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">{item.body}</p>
                </Link>
              </Rise>
            );
          })}
        </div>
      </PageWrapper>
    </section>
  );
};

export default ServicesGrid;
