import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOtherProjects, getProject, projects, site } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import { TechCorners } from "@/components/layout/tech-marks";
import TextLink, { Arrow } from "@/components/shared/text-link";
import ProjectMedia from "@/components/work/project-media";
import WorkCardsSlide from "@/components/work/work-cards-slide";
import TokenBoard from "@/components/work/token-board";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = getOtherProjects(project.slug, 3);
  const notes = [
    ["Challenge", project.challenge],
    ["Approach", project.approach],
    ["Outcome", project.outcome],
  ];

  return (
    <article>
      <section className="border-b border-border pt-28 pb-10 md:pt-36 md:pb-12">
        <PageWrapper>
          <div className="flex items-center justify-between gap-4">
            <TextLink href="/work" direction="back" className="text-sm">
              Work
            </TextLink>
            <p className="kicker">{project.year}</p>
          </div>
          <div className="mt-8 grid items-end gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <p className="kicker text-lime">{project.label}</p>
              <h1 className="mt-3 font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.045em]">
                {project.title}
              </h1>
            </div>
            <div className="lg:col-span-6">
              <p className="max-w-xl text-sm text-muted-foreground sm:text-base">{project.summary}</p>
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm text-lime"
                >
                  Open live site →
                </a>
              ) : null}
            </div>
          </div>
          <dl className="mt-8 grid gap-px border-t border-border sm:grid-cols-3">
            {[
              ["Role", project.role],
              ["Services", project.services.join(", ")],
              ["Focus", project.design.slice(0, 3).join(" · ")],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-border py-4 sm:border-b-0 sm:py-5 sm:pr-8">
                <dt className="kicker">{label}</dt>
                <dd className="mt-2 text-left text-sm leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </PageWrapper>
      </section>

      <section className="py-12 md:py-16">
        <PageWrapper>
          <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
            <div>
              <p className="kicker text-lime">Screens</p>
              <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">Key screens.</h2>
            </div>
            <p className="kicker">01 — 06</p>
          </div>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
            {project.screens.map((screen, index) => (
              <figure key={`${screen.label}-${screen.cover}`} className="panel flex h-full flex-col overflow-hidden text-left">
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-lime">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="kicker text-foreground/80">{screen.label}</p>
                </div>
                <ProjectMedia
                  cover={screen.cover}
                  title={project.title}
                  priority={index === 0}
                  alt={`${project.title} — ${screen.label}`}
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="aspect-[16/10] rounded-none border-x-0 border-b-0"
                  imageClassName="!object-cover object-top"
                />
                <figcaption className="px-4 py-4">
                  <p className="text-sm text-muted-foreground sm:text-base">{screen.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </PageWrapper>
      </section>

      <section className="border-t border-border py-20 md:py-24">
        <PageWrapper>
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:sticky lg:top-28 lg:col-span-4">
              <p className="kicker text-lime">Notes</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em]">How the work was shaped.</h2>
            </div>
            <ol className="lg:col-span-8">
              {notes.map(([label, value]) => (
                <li key={label} className="border-t border-border py-6 text-left first:border-t-0 first:pt-0">
                  <p className="kicker">{label}</p>
                  <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">{value}</p>
                </li>
              ))}
            </ol>
          </div>
          {project.system ? (
            <div className="mt-16 text-left">
              <p className="kicker">Tokens</p>
              <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Color and type</h2>
              <div className="mt-8">
                <TokenBoard typeface={project.system.typeface} colors={project.system.colors} />
              </div>
            </div>
          ) : null}
          {project.stack?.length ? (
            <p className="mt-8 text-left font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              {project.stack.join(" · ")}
            </p>
          ) : null}
        </PageWrapper>
      </section>

      <section className="border-t border-border" data-other-projects>
        <PageWrapper className="py-20 md:py-24">
          <p className="kicker text-lime">Other projects</p>
          <h2 className="display mt-3 text-2xl break-words sm:text-3xl">More from the archive.</h2>
          <WorkCardsSlide projects={others} label="More from the archive" className="mt-10 md:hidden" />
          <div className="mt-10 hidden items-start gap-4 md:grid md:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                data-cursor="Open"
                className="panel group relative flex w-full flex-col overflow-hidden text-left outline-none transition-colors hover:border-lime/40"
              >
                <TechCorners />
                <ProjectMedia
                  cover={item.cover}
                  title={item.title}
                  className="w-full rounded-none border-0"
                  imageClassName="!object-cover object-top"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="p-5 text-left">
                  <p className="kicker text-lime">
                    {item.label} — {item.year}
                  </p>
                  <p className="mt-3 flex items-end justify-between gap-3 text-left text-2xl tracking-[-0.04em]">
                    {item.title}
                    <Arrow />
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-left text-sm text-muted-foreground">
            A project with {site.name}?{" "}
            <Link href="/contact" className="text-foreground underline underline-offset-4">
              Start here
            </Link>
            .
          </p>
        </PageWrapper>
      </section>
    </article>
  );
}
