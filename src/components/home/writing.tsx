import Image from "next/image";
import Link from "next/link";
import { books } from "@/lib/writing";
import PageWrapper from "@/components/layout/page-wrapper";
import Rise from "@/components/motion/rise";

const Writing = () => {
  return (
    <section id="publication" className="scroll-mt-28 border-t border-border py-20 md:py-28">
      <PageWrapper>
        <Rise>
          <p className="kicker text-lime">Books</p>
          <h2 className="display mt-4 text-4xl sm:text-6xl">Publication</h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A collection of books thoughtfully designed by Uche.
          </p>
        </Rise>
        <div className="mt-12 grid items-start gap-4 lg:grid-cols-2">
          {books.map((book, index) => (
            <Rise key={book.slug} delay={index * 0.04} className="h-full">
              <Link
                id={`book-${book.slug}`}
                href={`/publication/${book.slug}?from=home`}
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
                  <h3 className="mt-3 text-xl leading-snug tracking-[-0.04em] sm:text-2xl">{book.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground sm:text-base">{book.summary}</p>
                  <span className="mt-6 inline-flex text-sm text-lime">Read more →</span>
                </span>
              </Link>
            </Rise>
          ))}
        </div>
      </PageWrapper>
    </section>
  );
};

export default Writing;
