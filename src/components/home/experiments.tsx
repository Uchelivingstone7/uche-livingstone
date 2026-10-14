import { pipeline } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";
import Rise from "@/components/motion/rise";

const Pipeline = () => {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
      <PageWrapper className="relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Rise>
            <p className="kicker text-lime">Design + frontend</p>
            <h2 className="display mt-4 text-[clamp(2.8rem,5vw,4.8rem)]">
              From pixels
              <br />
              to production.
            </h2>
          </Rise>
        </div>
        <ol className="lg:col-span-6 lg:col-start-7">
          {pipeline.map((step, index) => (
            <Rise key={step} delay={index * 0.04}>
              <li className="flex items-center gap-4 border-b border-white/10 py-4">
                <span className="font-mono text-[11px] tracking-[0.16em] text-lime">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">{step}</span>
                {index < pipeline.length - 1 ? (
                  <span className="ml-auto text-foreground/30" aria-hidden>
                    ↓
                  </span>
                ) : (
                  <span className="ml-auto h-2 w-2 rounded-full bg-lime shadow-[0_0_12px_#f0a45a]" />
                )}
              </li>
            </Rise>
          ))}
        </ol>
      </PageWrapper>
    </section>
  );
};

export default Pipeline;
