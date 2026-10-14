import type { Metadata } from "next";
import { site } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <PageWrapper>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <p className="kicker text-lime">Contact — {site.availability}</p>
            <h1 className="display mt-5 max-w-md text-[clamp(2.6rem,5vw,4.4rem)]">Start a project.</h1>
            <a
              href={`mailto:${site.email}`}
              className="mt-10 block text-2xl tracking-[-0.04em] break-all transition-colors hover:text-lime sm:text-3xl"
            >
              {site.email}
            </a>
            <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">{site.location}</p>
            <ul className="mt-10 border-t border-white/10">
              {site.socials.map((item) => (
                <li key={item.label} className="border-b border-white/10">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between py-4 text-sm tracking-[-0.02em] transition-colors hover:text-lime"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel p-6 sm:p-8 lg:col-span-7">
            <p className="kicker">Write</p>
            <h2 className="mt-3 text-2xl tracking-[-0.04em]">Tell me what you are building.</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}
