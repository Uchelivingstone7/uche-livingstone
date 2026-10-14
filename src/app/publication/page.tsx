import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { books } from "@/lib/writing";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import Rise from "@/components/motion/rise";
import MaskLines from "@/components/shared/mask-lines";
import ContactBanner from "@/components/shared/contact-banner";

export const metadata: Metadata = {
  title: "Publication",
  description: "A collection of books thoughtfully designed by Uche.",
};

export default function WritingPage() {
  return (
    <article>
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
        <TechMarks />
        <PageWrapper className="relative">
          <p className="kicker text-lime">Books</p>
          <h1 className="display mt-6 max-w-5xl text-[clamp(3.2rem,7.4vw,6.6rem)]">
            <MaskLines lines={["Publication."]} />
          </h1>
          <p className="load-rise load-d2 mt-8 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A collection of books thoughtfully designed by Uche.
          </p>
        </PageWrapper>
      </section>

      <section className="pb-20 md:pb-28">
        <PageWrapper className="grid items-start gap-4 lg:grid-cols-2">
          {books.map((book, index) => (
            <Rise key={book.slug} delay={index * 0.04} className="h-full">
              <Link
                id={`book-${book.slug}`}
                href={`/publication/${book.slug}`}
                className="panel grid h-full scroll-mt-28 grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-4 p-4 transition-colors duration-300 hover:border-lime/40 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-6 sm:p-5"
              >
                <span className="relative block aspect-square overflow-hidden rounded-2xl bg-[#101010]">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    quality={90}
                    sizes="152px"
                    className="object-cover"
                  />
                </span>
                <span className="min-w-0">
                  <p className="kicker text-lime">Book</p>
                  <h2 className="mt-3 text-xl leading-snug tracking-[-0.04em] sm:text-2xl">{book.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground sm:text-base">{book.summary}</p>
                  <span className="mt-6 inline-flex text-sm text-lime">Read more →</span>
                </span>
              </Link>
            </Rise>
          ))}
        </PageWrapper>
      </section>
      <ContactBanner />
    </article>
  );
}
