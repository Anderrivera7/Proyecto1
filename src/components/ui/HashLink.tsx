"use client";

import { scrollToHash } from "@/lib/utils";

type HashLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function HashLink({ href, className, children }: HashLinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        scrollToHash(href);
      }}
    >
      {children}
    </a>
  );
}
