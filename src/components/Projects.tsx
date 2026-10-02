"use client";

import { motion } from "framer-motion";
import { categories, projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-display text-3xl font-medium tracking-tight">Projects</h2>
      <p className="mt-3 max-w-xl text-muted">
        Grouped by the kind of problem solved, not the tech stack, since the judgment on which
        tool fits is the point.
      </p>

      <div className="mt-16 flex flex-col gap-20">
        {categories.map((category) => {
          const categoryProjects = projects.filter((p) => p.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                {category}
              </h3>

              <div className="mt-6 flex flex-col gap-10">
                {categoryProjects.map((project, i) => (
                  <motion.article
                    key={project.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className={`border-t border-border pt-8 ${project.comingSoon ? "opacity-50" : ""}`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h4 className="font-display text-2xl font-medium">{project.title}</h4>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
                        {project.tags.map((tag, idx) => (
                          <span key={tag}>
                            {tag}
                            {idx < project.tags.length - 1 && <span className="ml-3">·</span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.comingSoon ? (
                      <p className="mt-4 text-sm leading-relaxed text-muted">{project.goal}</p>
                    ) : (
                      <div className="mt-6 flex flex-col">
                        {[
                          { label: "Goal", body: <p>{project.goal}</p> },
                          { label: "My Approach", body: <p>{project.approach}</p> },
                          { label: "Solution", body: <p>{project.solution}</p> },
                          {
                            label: "Impact",
                            body: (
                              <ul className="flex flex-col gap-1">
                                {project.impact.map((item) => (
                                  <li key={item} className="font-medium text-foreground">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            ),
                          },
                        ].map((row) => (
                          <div
                            key={row.label}
                            className="grid grid-cols-1 gap-2 border-b border-border py-5 first:pt-0 last:border-none sm:grid-cols-[140px_1fr] sm:gap-8"
                          >
                            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                              {row.label}
                            </p>
                            <div className="max-w-2xl text-sm leading-relaxed text-muted">{row.body}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {!project.comingSoon && (
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        {project.appHref && (
                          <a
                            href={project.appHref}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                          >
                            View Demo
                          </a>
                        )}
                        {project.storyHref && (
                          <a
                            href={project.storyHref}
                            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
                          >
                            View Story
                          </a>
                        )}
                        {project.codeHref && (
                          <a
                            href={project.codeHref}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
                          >
                            Code ↗
                          </a>
                        )}
                      </div>
                    )}
                  </motion.article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
