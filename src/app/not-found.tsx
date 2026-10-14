import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import TextLink from "@/components/shared/text-link";

export default function NotFound() {
  return (
    <section className="relative min-h-[70svh] overflow-hidden pt-32 pb-24 md:pt-40">
      <TechMarks />
      <PageWrapper className="relative max-w-3xl">
        <p className="kicker text-lime">404</p>
        <h1 className="display mt-5 text-[clamp(3rem,7vw,5.5rem)]">This page isn’t here.</h1>
        <p className="mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
          The link may be out of date. The work is still where it was.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4">
          <TextLink href="/work">View work</TextLink>
          <TextLink href="/">Home</TextLink>
        </div>
      </PageWrapper>
    </section>
  );
}
