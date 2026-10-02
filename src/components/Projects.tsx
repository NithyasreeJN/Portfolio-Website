"use client";

import { motion } from "framer-motion";
import { categories, projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl font-medium tracking-tight">Projects</h2>
      <p className="mt-2 max-w-2xl text-muted">
        Different problems call for different tools. Grouped below by the kind of problem, not
        just the tech stack, so you can see how I pick the approach, not just that I can build.
      </p>

      <div className="mt-14 flex flex-col gap-16">
        {categories.map((category) => {
          const categoryProjects = projects.filter((p) => p.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="font-display text-xl font-medium text-accent">{category}</h3>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {categoryProjects.map((project, i) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`flex flex-col rounded-2xl border border-border bg-surface p-7 ${
                      categoryProjects.length === 1 ? "sm:col-span-2" : ""
                    } ${project.comingSoon ? "opacity-60" : ""}`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h4 className="mt-4 font-display text-xl font-medium">{project.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

                    {project.metrics.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                        {project.metrics.map((metric) => (
                          <span key={metric} className="text-sm font-semibold text-accent">
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    {!project.comingSoon && (
                      <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
                        {project.storyHref && (
                          <a href={project.storyHref} className="text-accent hover:underline">
                            Read the Story →
                          </a>
                        )}
                        {project.appHref ? (
                          <a
                            href={project.appHref}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted hover:text-accent"
                          >
                            View App
                          </a>
                        ) : (
                          <span className="text-muted/50">View App (coming soon)</span>
                        )}
                        {project.codeHref ? (
                          <a
                            href={project.codeHref}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted hover:text-accent"
                          >
                            Code
                          </a>
                        ) : (
                          <span className="text-muted/50">Code (coming soon)</span>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
