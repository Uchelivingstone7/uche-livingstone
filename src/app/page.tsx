import Hero from "@/components/home/hero";
import SelectedWork from "@/components/home/selected-work";
import Publications from "@/components/home/publications";
import ServicesGrid from "@/components/home/approach";
import ExperienceStrip from "@/components/home/experience";
import ContactCta from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <SelectedWork />
      <Publications />
      <ServicesGrid />
      <ExperienceStrip />
      <ContactCta />
    </div>
  );
}
