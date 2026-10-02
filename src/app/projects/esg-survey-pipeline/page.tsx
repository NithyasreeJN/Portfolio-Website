import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ESG Survey Pipeline | Nithyasree Jagannathan",
};

export default function EsgCaseStudy() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-16">
          <Link href="/#projects" className="text-sm font-medium text-accent hover:underline">
            ← Back to Projects
          </Link>

          <h1 className="mt-6 font-display text-4xl font-medium tracking-tight">
            ESG Survey Pipeline: Two Ways to Solve the Same Problem
          </h1>

          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-accent">
            Sustainability Problems Reimagined
          </p>

          <section className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-muted">
            <div>
              <h2 className="font-display text-xl font-medium text-foreground">The Problem</h2>
              <p className="mt-2">
                A global manufacturing company collects an annual ESG (environmental, social,
                governance) survey from every site it operates, covering water use, energy, waste
                handling, safety, and certifications. Historically this ran through email and
                spreadsheets: slow, error prone, and impossible to benchmark across sites in real
                time.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-medium text-foreground">
                The Brief Was Narrow. The Fix Wasn&apos;t.
              </h2>
              <p className="mt-2">
                My manager&apos;s ask was simply &quot;improve this survey.&quot; I could have
                patched the existing email-and-spreadsheet process, tightened a few templates, and
                called it done, that would have satisfied the brief. Instead I proposed something
                nobody asked for: a centralized database feeding live dashboards, so leadership
                could see compliance signals across sites in real time instead of waiting on a
                manual rollup. That reframing, not the tooling, was the actual decision.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-medium text-foreground">
                Track 1: The Real Build
              </h2>
              <p className="mt-2">
                During my MBA internship, I designed and manually built a no-code data pipeline for
                a 70+ site global rollout: Microsoft Forms feeding Power Automate, landing in
                append-only SharePoint Lists, visualized in a six-page Power BI dashboard suite.
                121 survey questions across 3 parts. On-time submission went from roughly 60% the
                prior cycle to 85%+ this cycle.
              </p>
              <p className="mt-2">
                This track is proven through a written case study, not code, because the right tool
                for a governed multi-site rollout with non-technical maintainers is a no-code
                enterprise stack that fits existing IT governance, not a custom app.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-medium text-foreground">
                Track 2: The AI-Accelerated Rebuild
              </h2>
              <p className="mt-2">
                The same workflow logic, rebuilt as a small AI-accelerated web app in an afternoon:
                a 10-question representative demo instead of the full 121, because full replication
                was never the point. The point is that when the situation calls for a fast,
                disposable prototype instead of a governed rollout, I can build that myself with AI,
                without waiting on an engineer.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-medium text-foreground">
                What&apos;s in the Demo
              </h2>
              <p className="mt-2">
                Three tabs, mirroring the shape of the real pipeline:
              </p>
              <ul className="mt-2 flex flex-col gap-1.5">
                <li>
                  <strong className="text-foreground">ESG Survey Form</strong> — a site submits
                  answers across five categories (Water Management, Energy Management, Waste &
                  Hazmat, Health & Safety, Certifications).
                </li>
                <li>
                  <strong className="text-foreground">SharePoint List</strong> — a flat,
                  append-only, read-only table of every submission, standing in for the real
                  SharePoint List.
                </li>
                <li>
                  <strong className="text-foreground">Dashboard</strong> — KPI cards, a
                  responses-by-site chart, a Good/Gap donut, a site-by-question signal matrix, and a
                  compliance-document tracker.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-medium text-foreground">The Takeaway</h2>
              <p className="mt-2">
                Knowing which tool fits which situation, and being able to execute either one. A
                no-code enterprise stack and an AI-built prototype solve different problems.
                Recognizing that, and having done both, is the skill on display here, not the tech
                stack itself.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-medium text-foreground">Stack</h2>
              <p className="mt-2">
                Next.js (App Router), Supabase (Postgres with row-level security enforcing
                append-only writes), Vercel, and Recharts for the dashboard visualizations.
              </p>
            </div>
          </section>

          <div className="mt-10 flex gap-4 text-sm font-medium">
            <a
              href="https://esg-survey-pipeline.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-white transition-opacity hover:opacity-90"
            >
              View Live Demo
            </a>
            {/* EDIT ME: add the GitHub repo link here once it's public */}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
