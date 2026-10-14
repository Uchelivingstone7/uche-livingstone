import Link from "next/link";
import PageWrapper from "@/components/layout/page-wrapper";
import { TechCorners } from "@/components/layout/tech-marks";
import Rise from "@/components/motion/rise";

const ContactBanner = () => {
  return (
    <section className="border-t border-white/10 py-20 md:py-16">
      <PageWrapper>
        <div className="panel relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 md:hidden">
          <TechCorners />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <p className="kicker text-lime">Next</p>
              <h2 className="display mt-4 text-4xl">Let’s work together.</h2>
            </div>
            <Link
              href="/contact"
              className="btn-lime inline-flex w-fit shrink-0 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="btn-ink">Let’s connect</span>
            </Link>
          </div>
        </div>
        <Rise className="panel relative hidden overflow-hidden px-6 py-8 sm:px-10 sm:py-10 md:block">
          <TechCorners />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <p className="kicker text-lime">Next</p>
              <h2 className="display mt-3 text-[clamp(1.85rem,6vw,3.6rem)]">Let’s work together.</h2>
            </div>
            <Link
              href="/contact"
              className="btn-lime inline-flex w-fit shrink-0 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="btn-ink">Let’s connect</span>
            </Link>
          </div>
        </Rise>
      </PageWrapper>
    </section>
  );
};

export default ContactBanner;
