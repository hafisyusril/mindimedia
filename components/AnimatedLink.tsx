import Link from "next/link";
import { ReactNode } from "react";

type AnimatedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  underlineColor?: string;
};

export default function AnimatedLink({
  href,
  children,
  className = "",
  underlineColor = "bg-[#c69c4f]",
}: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      className={`relative inline-block group ${className}`}
    >
      {children}

      {/* underline */}
      <span
        className={`absolute left-0 -bottom-1 h-px w-full
          origin-left scale-x-0
          transition-transform duration-300 ease-out
          group-hover:scale-x-100
          ${underlineColor}
        `}
      />
    </Link>
  );
}
