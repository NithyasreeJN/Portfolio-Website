"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pt-16 pb-14">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent"
      >
        Strategy & Operations → AI-Accelerated Builder
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl"
      >
        Hi, I&apos;m Nithya.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-5 max-w-2xl text-lg text-muted"
      >
        {profile.subheading}. {profile.blurb}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          View Projects
        </a>
        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Resume
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-muted underline-offset-4 hover:text-accent hover:underline"
        >
          LinkedIn ↗
        </a>
      </motion.div>
    </section>
  );
}
