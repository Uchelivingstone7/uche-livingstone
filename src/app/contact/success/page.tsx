import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CONTACT_SUCCESS_COOKIE, site } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import TextLink from "@/components/shared/text-link";

export const metadata = {
  title: "Message sent",
  robots: { index: false, follow: false },
};

export default async function ContactSuccessPage() {
  const jar = await cookies();
  const ref = jar.get(CONTACT_SUCCESS_COOKIE)?.value;

  if (!ref) {
    redirect("/contact");
  }

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40">
      <TechMarks />
      <PageWrapper className="relative max-w-3xl">
        <p className="kicker text-lime">Sent</p>
        <h1 className="display mt-5 text-[clamp(3rem,7vw,5.5rem)]">Thanks. I have your note.</h1>
        <p className="mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
          I’ll reply to the email you shared, usually within two working days.
          If it’s urgent, write directly to {site.email}.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4">
          <TextLink href="/work">Browse work</TextLink>
          <TextLink href="/">Back home</TextLink>
        </div>
      </PageWrapper>
    </section>
  );
}
