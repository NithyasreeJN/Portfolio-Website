"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pt-20 pb-16">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-muted"
      >
        Strategy & Operations — AI-Accelerated Builder
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl"
      >
        Hi, I&apos;m Nithya.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
      >
        {profile.subheading}. {profile.blurb}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-9 flex flex-wrap items-center gap-6"
      >
        <a
          href="#projects"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          View Projects
        </a>
        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          Resume ↗
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          LinkedIn ↗
        </a>
      </motion.div>
    </section>
  );
}
