import { cn } from "@/lib";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={cn("h-9 w-9", className)}>
      <rect width="48" height="48" rx="14" fill="#f0a45a" />
      <path
        d="M15 15v11.5a6.5 6.5 0 0 0 13 0V15"
        fill="none"
        stroke="#1c140c"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M32 15v16h8"
        fill="none"
        stroke="#1c140c"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
