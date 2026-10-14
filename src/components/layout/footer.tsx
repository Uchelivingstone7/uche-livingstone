import Link from "next/link";
import { site } from "@/lib";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="width-layout grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="text-3xl font-medium tracking-[-0.045em] sm:text-4xl">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground sm:text-base">
            {site.role}. {site.location}.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-3 md:col-span-3">
          <p className="kicker">Index</p>
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link w-fit text-sm outline-none hover:text-lime">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3 md:col-span-3">
          <p className="kicker">Connect</p>
          <a href={`mailto:${site.email}`} className="text-sm hover:text-lime">
            Email
          </a>
          {site.socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="text-sm hover:text-lime">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2 border-t border-border pt-6 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between md:col-span-12">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p className="flex items-center gap-2">
            <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-lime" />
            {site.availability}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
