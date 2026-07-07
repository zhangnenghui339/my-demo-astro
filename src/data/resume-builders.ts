import { affiliates } from "./affiliates";

export type ResumeBuilder = {
  slug: string;
  name: string;
  verdict: string;
  score: number; // ATS parse score — REPLACE with your real test results before publishing
  freeTier: string;
  price: string;
  bestFor: string;
  top?: boolean;
  pros: string[];
  cons: string[];
  verdictText: string;
  affiliateUrl: string;
  verified: boolean;          // true = 已有 Verified ATS 实测数据支撑
  lastVerified: string | null; // "YYYY-MM"，null 渲染 Preliminary 徽章
};

// NOTE: scores / pros / cons / verdicts below are editorial placeholders.
// You must run your own ATS tests and replace them — "honest, tested" is the whole premise.
export const resumeBuilders: ResumeBuilder[] = [
  {
    slug: "rezi",
    name: "Rezi",
    verdict: "Best overall",
    score: 96,
    freeTier: "Yes (limited)",
    price: "$29/mo",
    bestFor: "ATS-safe formatting",
    top: true,
    pros: [
      "Cleanest ATS parsing in our tests — no dropped sections",
      "Real-time keyword matching against the job description",
      "Simple, single-column layouts that rarely break",
    ],
    cons: [
      "Templates look plain next to design-first tools",
      "Not ideal if you want heavy visual customization",
    ],
    verdictText:
      "The safest default. If your only goal is getting through the ATS with minimal formatting risk, start here.",
    affiliateUrl: affiliates.rezi.url,
    verified: false,
    lastVerified: null,
  },
  {
    slug: "kickresume",
    name: "Kickresume",
    verdict: "Best design",
    score: 90,
    freeTier: "Yes",
    price: "$19/mo",
    bestFor: "Visual templates",
    pros: [
      "Best-looking templates of the group",
      "Good AI phrasing suggestions for bullet points",
      "Strong for creative and design-adjacent roles",
    ],
    cons: [
      "Some multi-column templates parse worse in strict ATS",
      "Free plan is fairly limited",
    ],
    verdictText: "Pick this if presentation matters and you'll stick to its ATS-safe templates.",
    affiliateUrl: affiliates.kickresume.url,
    verified: false,
    lastVerified: null,
  },
  {
    slug: "teal",
    name: "Teal",
    verdict: "Best for tracking",
    score: 88,
    freeTier: "Yes (generous)",
    price: "$9/wk",
    bestFor: "High-volume job search",
    pros: [
      "Built around tracking many applications at once",
      "Free tier is genuinely usable",
      "Job-description keyword matching baked in",
    ],
    cons: ["Resume builder is secondary to the tracker", "Weekly pricing adds up for long searches"],
    verdictText: "Best if you're applying broadly and want one place to manage the whole search.",
    affiliateUrl: affiliates.teal.url,
    verified: false,
    lastVerified: null,
  },
  {
    slug: "enhancv",
    name: "Enhancv",
    verdict: "Best for standing out",
    score: 85,
    freeTier: "Yes (limited)",
    price: "$25/mo",
    bestFor: "Content guidance",
    pros: [
      "Strong content prompts that improve weak bullets",
      "Good for career-changers who need framing help",
      "Distinctive but still-parseable layouts",
    ],
    cons: ["Pricier than the pack", "Some sections tempt you into ATS-risky formatting"],
    verdictText: "Reach for this when your content — not just your layout — needs the most help.",
    affiliateUrl: affiliates.enhancv.url,
    verified: false,
    lastVerified: null,
  },
  {
    slug: "jobscan",
    name: "Jobscan",
    verdict: "Best match-rate checker",
    score: 88,
    freeTier: "Limited scans",
    price: "$50/mo",
    bestFor: "Matching one resume to one job posting",
    pros: [
      "Match-rate scoring against a specific job description",
      "Keyword gap report is the fastest pre-submit audit",
      "Strong for checklist-style postings (accounting, healthcare)",
    ],
    cons: [
      "Expensive as a subscription — most people need it per-application, not monthly",
      "The scanner is the product; the resume editor is secondary",
    ],
    verdictText:
      "Use it as a verification layer on your top-choice applications, not as your builder. One month around a serious search cycle is the rational buy.",
    affiliateUrl: affiliates.jobscan?.url ?? "#",
    verified: false,
    lastVerified: null,
  },
  {
    slug: "resume-io",
    name: "Resume.io",
    verdict: "Fast mainstream option",
    score: 82,
    freeTier: "Trial-style",
    price: "$25/mo (short cycles)",
    bestFor: "A clean resume, fast",
    pros: [
      "Quick guided flow — a usable resume in under 30 minutes",
      "AI phrase suggestions by role reduce blank-page time",
      "Mostly safe, parseable layouts",
    ],
    cons: [
      "Short billing cycles and auto-renewals — read the renewal terms",
      "Icon-heavy templates undermine the otherwise safe defaults",
    ],
    verdictText:
      "Fine for speed. Pick a plain template, export, run the copy-paste test, and cancel the renewal you probably didn't mean to keep.",
    affiliateUrl: affiliates["resume-io"].url,
    verified: false,
    lastVerified: null,
  },
  {
    slug: "zety",
    name: "Zety",
    verdict: "Most guided flow",
    score: 80,
    freeTier: "Preview only",
    price: "$24/mo (intro offers vary)",
    bestFor: "Step-by-step hand-holding",
    pros: [
      "The most structured guided builder we tested",
      "Content and tone suggestions help true beginners",
      "Popular templates generally parse fine",
    ],
    cons: [
      "Free tier is effectively preview-only — download requires payment",
      "Contact-block placement in some templates needs manual checking",
    ],
    verdictText:
      "Good training wheels if you've never written a resume. Verify the contact block sits in the document body before you export.",
    affiliateUrl: affiliates.zety.url,
    verified: false,
    lastVerified: null,
  },
  {
    slug: "novoresume",
    name: "Novoresume",
    verdict: "Clean European-style CVs",
    score: 79,
    freeTier: "Yes — 1 resume",
    price: "$20/mo",
    bestFor: "European-format CVs",
    pros: [
      "Polished, restrained design language",
      "Solid free tier for a single CV",
      "Layout optimizer catches spacing issues",
    ],
    cons: [
      "Two-column defaults are a parsing risk for ATS-heavy pipelines",
      "US-style single-column options are fewer than they should be",
    ],
    verdictText:
      "A good CV tool — switch to single-column before applying into large-company ATS pipelines.",
    affiliateUrl: affiliates.novoresume.url,
    verified: false,
    lastVerified: null,
  },
  {
    slug: "resume-worded",
    name: "Resume Worded",
    verdict: "Best audit of an existing resume",
    score: 84,
    freeTier: "Limited score",
    price: "$50/mo",
    bestFor: "Feedback, not building",
    pros: [
      "Line-by-line AI scoring with concrete rewrite suggestions",
      "LinkedIn profile review included",
      "Cheapest path to improving a decent existing resume",
    ],
    cons: [
      "It's an audit tool, not a builder — you still need an editor",
      "Subscription pricing for what is often a one-time need",
    ],
    verdictText:
      "If your resume is 80% there, one audit cycle here beats rebuilding in a new tool. Pair with whatever editor you already use.",
    affiliateUrl: affiliates["resume-worded"].url,
    verified: false,
    lastVerified: null,
  },
  {
    slug: "careerflow",
    name: "Careerflow",
    verdict: "LinkedIn + tracking combo",
    score: 77,
    freeTier: "Yes",
    price: "$30/mo",
    bestFor: "LinkedIn optimization alongside applications",
    pros: [
      "LinkedIn profile optimization is the standout feature",
      "Application tracking and autofill in one place",
      "Useful free tier to evaluate the fit",
    ],
    cons: [
      "Resume module is review-oriented; export quality depends on your source file",
      "Feature breadth over depth — each piece has a stronger specialist rival",
    ],
    verdictText:
      "Pick it when LinkedIn is your weak point; pick specialists when the resume itself is.",
    affiliateUrl: affiliates.careerflow.url,
    verified: false,
    lastVerified: null,
  },
  {
    slug: "huntr",
    name: "Huntr",
    verdict: "Best kanban tracking",
    score: 78,
    freeTier: "Yes — capped",
    price: "$40/mo",
    bestFor: "High-volume application pipelines",
    pros: [
      "Kanban-style tracker is the best-organized in this list",
      "JD parsing and AI tailoring feed straight into tracked applications",
      "Autofill saves real time at 40+ applications",
    ],
    cons: [
      "Tracker-first: the resume module keeps layouts deliberately simple",
      "Price is high if you only need the builder half",
    ],
    verdictText:
      "Worth it when you're drowning in tabs at scale. If you're sending ten targeted applications, simpler tools cover you.",
    affiliateUrl: affiliates.huntr.url,
    verified: false,
    lastVerified: null,
  },
  {
    slug: "canva",
    name: "Canva Resume Builder",
    verdict: "Creative fields only",
    score: 70,
    freeTier: "Yes — broad",
    price: "$15/mo (Pro)",
    bestFor: "Design-judged roles",
    pros: [
      "Unmatched visual freedom and a huge free tier",
      "Magic Write drafts copy; brand-kit styling for portfolios",
      "The right call when the resume itself is a design sample",
    ],
    cons: [
      "Highest parse risk in this list — visual freedom is the enemy of parsing",
      "Export defaults can produce image-based PDFs that ATS software reads as blank",
    ],
    verdictText:
      "For designers and creatives with a parallel single-column ATS version. Export text-based PDF only, and run the copy-paste test every time.",
    affiliateUrl: affiliates.canva.url,
    verified: false,
    lastVerified: null,
  },
];
