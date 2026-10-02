// All real content lives here. Edit this file to update the site — no need to touch components.

export const profile = {
  name: "Nithyasree Jagannathan",
  shortName: "Nithya",
  tagline: "I use AI to solve real business problems.",
  subheading: "MBA Candidate, UNC Kenan-Flagler Business School",
  blurb:
    "Strategy and operations background, now building with AI instead of just studying it. I ship real tools, not slide decks, to prove the business case for AI adoption.",
  pillars: ["Strategy & Operations", "AI-Accelerated Building", "Sustainability & ESG"],
  resumeHref: "/resume/Nithyasree_Jagannathan_Resume.pdf",
  linkedin: "https://linkedin.com/in/nithyasreej",
  email: "nithyasreej04@gmail.com",
};

// The horizontal "journey" strip in the hero. Keep each stop short: one place, one line.
export const journey = [
  { place: "Bengaluru", label: "Christ University", sub: "BBA", years: "2017–2020" },
  { place: "Mumbai", label: "Impelsys (client: Informa)", sub: "Project Manager", years: "2021–2024" },
  { place: "Remote / India", label: "SAP Silver Jewelry", sub: "Head of Strategy & Ops", years: "2024–2025" },
  { place: "Chapel Hill", label: "UNC Kenan-Flagler", sub: "MBA Candidate", years: "2025–2027" },
  { place: "Industry", label: "Solenis LLC", sub: "Sustainability Reporting Intern", years: "2026" },
];

export const marqueeTags = [
  "STRATEGY & OPS",
  "AI-ACCELERATED BUILDING",
  "ESG & SUSTAINABILITY",
  "DATA & ANALYTICS",
  "GO-TO-MARKET",
  "PROCESS DESIGN",
  "STORYTELLING",
  "BUSINESS ANALYTICS",
];

export const categories = [
  "Sustainability Problems Reimagined",
  "Workflow Automation",
  "Consulting Automation",
  "Other Projects",
] as const;

export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  category: Category;
  tags: string[];
  title: string;
  summary: string;
  metrics: string[];
  storyHref?: string; // case-study page within this site
  codeHref?: string; // EDIT ME: add GitHub link once public
  appHref?: string; // EDIT ME: add live demo link once deployed
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    slug: "esg-survey-pipeline",
    category: "Sustainability Problems Reimagined",
    tags: ["ESG", "NEXT.JS", "SUPABASE", "POWER BI (REAL TRACK)"],
    title: "ESG Survey Pipeline: Two Ways to Solve the Same Problem",
    summary:
      "My manager's ask was simply \"improve this survey\": I could have patched the existing email-and-spreadsheet process and called it done. Instead I proposed something nobody asked for: a centralized database feeding live Power BI dashboards, replacing a process that couldn't be benchmarked across sites in real time. I designed and manually built that no-code pipeline for a 70+ site global rollout: Microsoft Forms to Power Automate to SharePoint Lists, visualized in a six-page Power BI suite. Here, I rebuilt the same workflow logic as a lightweight AI-accelerated web app in an afternoon, a 10-question representative demo, to show I can tell the difference between a problem that needs governed no-code infrastructure and one that needs a fast disposable prototype, and build either one myself.",
    metrics: ["85%+ On-Time Submission vs ~60% Prior Cycle", "121 Questions Across 70+ Sites (Real Track)"],
    storyHref: "/projects/esg-survey-pipeline",
    codeHref: "https://github.com/NithyasreeJN/esg-survey-pipeline",
    appHref: "https://esg-survey-pipeline.vercel.app/",
  },
  {
    slug: "coming-soon-workflow",
    category: "Workflow Automation",
    comingSoon: true,
    tags: ["COMING SOON"],
    title: "Next Build",
    summary: "A recurring manual process, turned into something that runs itself. Check back soon.",
    metrics: [],
  },
  {
    slug: "coming-soon-consulting",
    category: "Consulting Automation",
    comingSoon: true,
    tags: ["COMING SOON"],
    title: "Next Build",
    summary: "Market research and go-to-market work, accelerated with AI. Check back soon.",
    metrics: [],
  },
  {
    slug: "coming-soon-other",
    category: "Other Projects",
    comingSoon: true,
    tags: ["COMING SOON"],
    title: "Next Build",
    summary: "Another business problem, solved with the right tool for the job. Check back soon.",
    metrics: [],
  },
];

export type ExperienceEntry = {
  company: string;
  companySub: string;
  location: string;
  roles: {
    title: string;
    dates: string;
    bullets: string[];
  }[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Solenis LLC",
    companySub: "Sustainability Reporting",
    location: "MBA Internship",
    roles: [
      {
        title: "MBA Intern, Sustainability Reporting",
        dates: "2026",
        bullets: [
          "Designed a no-code ESG data pipeline (Microsoft Forms to Power Automate to SharePoint Lists) for a 70+ site global rollout, replacing an email-and-spreadsheet process.",
          "Built a six-page Power BI dashboard suite feeding EcoVadis and CDP ratings submissions.",
          "Lifted on-time survey submission from roughly 60% the prior cycle to 85%+ across 121 questions in 3 survey parts.",
        ],
      },
    ],
  },
  {
    company: "SAP Silver Jewelry",
    companySub: "Strategy & Operations",
    location: "India",
    roles: [
      {
        title: "Head of Strategy & Operations",
        dates: "2024 – 2025",
        bullets: [
          "Owned go-to-market strategy, dynamic pricing, and demand forecasting for a $1M business.",
          "Built the pricing and forecasting logic from scratch, translating founder intuition into repeatable decision rules.",
        ],
      },
    ],
  },
  {
    company: "Impelsys",
    companySub: "Client: Informa",
    location: "Mumbai, India",
    roles: [
      {
        title: "Project Manager / Associate",
        dates: "2021 – 2024",
        bullets: [
          "Managed SaaS integrations and BI reporting across 600+ publishing brands for a global client.",
          "Served as the delivery point of contact between engineering and the client's non-technical stakeholders.",
        ],
      },
    ],
  },
];

export const education = [
  {
    school: "UNC Kenan-Flagler Business School",
    degree: "MBA, concentrations in Sustainable Enterprise, Operations Management, and Business Analytics",
    dates: "2025 – 2027",
  },
  {
    school: "Christ University, Bengaluru",
    degree: "BBA",
    dates: "2017 – 2020",
  },
];

export type Framework = {
  emoji: string;
  name: string;
  definition: string;
  practice: string; // EDIT ME: verify each example reflects your real work before publishing
};

export const frameworks: Framework[] = [
  {
    emoji: "🔺",
    name: "The Minto Pyramid",
    definition:
      "A top-down structure: lead with the answer, then back it with grouped supporting arguments.",
    practice:
      "Used to compress a dense ESG compliance dataset into a one-page executive summary for the Power BI dashboard suite, so non-technical stakeholders could see the headline before the detail.",
  },
  {
    emoji: "🧊",
    name: "ICE Scoring (Impact, Confidence, Ease)",
    definition:
      "A fast prioritization matrix: multiply Impact by Confidence by Ease to stack-rank options.",
    practice:
      "Applied to pricing and SKU decisions at SAP Silver Jewelry, deferring low-confidence catalog expansion in favor of high-impact, low-effort pricing fixes.",
  },
  {
    emoji: "🎯",
    name: "No-Code vs. Build Judgment",
    definition:
      "Before reaching for a custom build, size whether the problem needs governed, maintainable infrastructure or a fast disposable prototype.",
    practice:
      "The whole premise of the ESG Survey Pipeline project: a 70+ site governed rollout needed Power Automate and SharePoint; a 10-question demo needed an afternoon with AI instead.",
  },
];

export const whatIDo = [
  {
    number: "01",
    title: "Strategy & Operations",
    body: "Translating ambiguous business problems into roadmaps, pricing models, and demand forecasts, with MBA-level rigor behind the numbers.",
  },
  {
    number: "02",
    title: "AI-Accelerated Building",
    body: "Using AI tools to go from idea to working prototype in hours, not sprints, without waiting on an engineering team.",
  },
  {
    number: "03",
    title: "ESG & Sustainability Reporting",
    body: "Designing data pipelines and dashboards that make sustainability reporting faster and more reliable for non-technical teams.",
  },
];
