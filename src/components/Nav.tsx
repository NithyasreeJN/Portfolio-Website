"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/data/content";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#frameworks", label: "Frameworks" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#home" className="font-display text-lg font-semibold tracking-tight">
          {profile.shortName}
        </Link>

        <ul className="hidden gap-8 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:inline-block"
        >
          Resume
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
        <ul className="flex flex-col gap-1 border-t border-border px-6 pb-4 text-sm font-medium text-muted md:hidden">
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
            <a href={profile.resumeHref} target="_blank" rel="noreferrer" className="block py-2 text-accent">
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
