"use client";

import { motion } from "framer-motion";
import { frameworks, whatIDo } from "@/data/content";

export default function Frameworks() {
  return (
    <section id="frameworks" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-medium tracking-tight">What I Do</h2>
        <p className="mt-2 text-muted">Core pillars bridging business strategy with AI execution.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {whatIDo.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <span className="font-display text-sm text-terracotta">{item.number}</span>
              <h3 className="mt-2 font-display text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="mt-20 font-display text-3xl font-medium tracking-tight">Frameworks</h2>
        <p className="mt-2 text-muted">Mental models I use to turn ambiguity into action.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {frameworks.map((fw, i) => (
            <motion.div
              key={fw.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <span className="text-2xl">{fw.emoji}</span>
              <h3 className="mt-3 font-display text-lg font-medium">{fw.name}</h3>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">Definition</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{fw.definition}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">In Practice</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{fw.practice}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
