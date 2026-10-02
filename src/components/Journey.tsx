"use client";

import { motion } from "framer-motion";
import { journey } from "@/data/content";

export default function Journey() {
  return (
    <div className="overflow-x-auto border-b border-border">
      <div className="mx-auto flex max-w-6xl min-w-max items-stretch gap-0 px-6 py-8">
        {journey.map((stop, i) => (
          <motion.div
            key={stop.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center"
          >
            <div className="flex min-w-[170px] flex-col gap-1 px-5 text-left">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                {stop.place}
              </span>
              <span className="font-display text-base font-medium">{stop.label}</span>
              <span className="text-xs text-muted">
                {stop.sub} · {stop.years}
              </span>
            </div>
            {i < journey.length - 1 && (
              <div className="h-px w-10 shrink-0 bg-border md:w-16" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
