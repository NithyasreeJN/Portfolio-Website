"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/data/content";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#frameworks", label: "Frameworks" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="#home" className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground font-display text-sm font-semibold">
          N
        </Link>

        <ul className="hidden gap-10 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noreferrer"
          className="hidden text-sm font-medium underline-offset-4 hover:underline md:inline-block"
        >
          Resume ↗
        </a>

        <button
          className="text-sm font-medium md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 pb-4 text-sm text-muted md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resumeHref} target="_blank" rel="noreferrer" className="block py-2 font-medium text-foreground">
              Resume ↗
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
