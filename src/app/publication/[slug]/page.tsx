import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { books, getBook } from "@/lib/writing";
import PageWrapper from "@/components/layout/page-wrapper";
import TextLink from "@/components/shared/text-link";
import ContactBanner from "@/components/shared/contact-banner";

type Params = { slug: string };
type Search = { from?: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return { title: "Publication" };
  return { title: book.title, description: book.summary };
}

export default async function BookPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Search>;
}) {
  const { slug } = await params;
  const { from } = await searchParams;
  const book = getBook(slug);
  if (!book) notFound();
  const fromHome = from === "home";

  return (
    <article>
      <section className="border-b border-border pt-28 pb-16 md:pt-36 md:pb-24">
        <PageWrapper>
          <TextLink
            href={fromHome ? `/#book-${book.slug}` : `/publication#book-${book.slug}`}
            direction="back"
            className="text-sm"
          >
            Back
          </TextLink>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-[#101010] lg:col-span-5">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="kicker text-lime">Book</p>
              <h1 className="mt-3 max-w-4xl font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.045em]">
                {book.title}
              </h1>
              <p className="mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">{book.summary}</p>
              <a
                href={book.purchase}
                target="_blank"
                rel="noreferrer"
                className="btn-lime mt-8 inline-flex rounded-full px-5 py-2.5 text-sm font-medium"
              >
                <span className="btn-ink">Buy the book</span>
              </a>
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="kicker">Details</p>
                <div className="mt-5 grid gap-4">
                  {book.details.map((line) => (
                    <p key={line} className="max-w-xl text-sm text-muted-foreground sm:text-base">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </section>
      <ContactBanner />
    </article>
  );
}
