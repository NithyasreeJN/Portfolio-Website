"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl font-medium tracking-tight">Professional Experience</h2>

      <div className="mt-10 flex flex-col gap-10">
        {experience.map((entry, i) => (
          <motion.div
            key={entry.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="grid gap-4 border-b border-border pb-10 last:border-none sm:grid-cols-[220px_1fr]"
          >
            <div>
              <h3 className="font-display text-lg font-medium">{entry.company}</h3>
              <p className="text-sm text-muted">{entry.companySub}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-terracotta">{entry.location}</p>
            </div>

            <div className="flex flex-col gap-6">
              {entry.roles.map((role) => (
                <div key={role.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-medium">{role.title}</h4>
                    <span className="text-sm text-muted">{role.dates}</span>
                  </div>
                  <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-relaxed text-muted">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="mt-16 font-display text-2xl font-medium tracking-tight">Education</h3>
      <div className="mt-6 flex flex-col gap-5">
        {education.map((edu) => (
          <div key={edu.school} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-5 last:border-none">
            <div>
              <p className="font-medium">{edu.school}</p>
              <p className="text-sm text-muted">{edu.degree}</p>
            </div>
            <span className="text-sm text-muted">{edu.dates}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
