import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl font-medium tracking-tight">Let&apos;s Talk</h2>
      <p className="mt-3 max-w-xl text-muted">
        Open to strategy, business transformation, program management, and sustainability roles.
        Reach out if you want to talk about any of it.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Email Me
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
        >
          LinkedIn
        </a>
        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
