import type { SourceTag } from "./downloads";

// txt 原文随构建打包（?raw），整页展示 = pSEO/GEO 语料；zip 下载走 email gate
import classicTxt from "./templates/classic.txt?raw";
import sweTxt from "./templates/software-engineer.txt?raw";
import pmTxt from "./templates/product-manager.txt?raw";
import marketingTxt from "./templates/marketing.txt?raw";
import analystTxt from "./templates/data-analyst.txt?raw";

export type ResumeTemplate = {
  slug: string;
  role: string;
  title: string;
  description: string;
  quickAnswer: string;
  sourceTag: SourceTag;
  atsCheckerSlug: string | null; // 内链：同职位 ATS Checker
  highlights: string[];
  body: string;
};

export const templates: ResumeTemplate[] = [
  {
    slug: "ats-classic",
    role: "Any role",
    title: "ATS Classic Resume Template (Universal, Plain Text)",
    description:
      "A single-column, plain-text resume template that parses cleanly in every major ATS. Copy it, fill the brackets, export as .docx or text-based PDF.",
    quickAnswer:
      "The safest resume format for any ATS is a single-column layout with standard section titles (Work Experience, Education, Skills), contact details in the document body, no tables or text boxes, and month/year dates. This template implements exactly that — copy it below, replace the bracketed fields, and verify the export with our free ATS checker.",
    sourceTag: "tpl-classic",
    atsCheckerSlug: null,
    highlights: [
      "Standard section titles ATS parsers are trained on",
      "Bullet formula with weak vs. strong examples",
      "Copy-paste friendly: works in Word, Google Docs, any editor",
    ],
    body: classicTxt,
  },
  {
    slug: "software-engineer",
    role: "Software Engineer",
    title: "Software Engineer Resume Template (ATS-Safe, 2026)",
    description:
      "Plain-text software engineer resume template with a recruiter-searchable stack section, AI-tooling block, and scale-first bullet formulas.",
    quickAnswer:
      "A software engineer resume passes ATS screens when the technical skills section lists exact stack names from the job posting (recruiters search by tool), every bullet pairs the stack with scale and impact numbers, and the layout stays single-column. This template includes a 2026 AI-tooling block most competitors' templates are missing.",
    sourceTag: "tpl-swe",
    atsCheckerSlug: "software-engineer",
    highlights: [
      "Stack section grouped the way recruiters actually search",
      "AI Tooling block — a 2026 keyword area most templates lack",
      "SWE bullet formula: verb + build + stack + scale + impact",
    ],
    body: sweTxt,
  },
  {
    slug: "product-manager",
    role: "Product Manager",
    title: "Product Manager Resume Template (ATS-Safe, 2026)",
    description:
      "Outcome-first product manager resume template: every bullet slot demands a metric, with discovery, experimentation, and stakeholder language built in.",
    quickAnswer:
      "PM resumes live or die on outcomes: every bullet needs an adoption, revenue, retention, or efficiency metric, phrased in the vocabulary the posting uses (roadmap, discovery, OKRs, GTM). This template structures each experience slot around that rule and includes an honest-attribution note interviewers respect.",
    sourceTag: "tpl-pm",
    atsCheckerSlug: "product-manager",
    highlights: [
      "Outcome-first bullet slots (metric required by design)",
      "2026 AI/LLM feature-scoping skills block",
      "Attribution honesty rule — survives interview probing",
    ],
    body: pmTxt,
  },
  {
    slug: "marketing",
    role: "Marketing",
    title: "Marketing Resume Template (ATS-Safe, 2026)",
    description:
      "Channel-and-tool searchable marketing resume template covering growth, performance, content, and lifecycle roles, with ROAS/CAC bullet formulas.",
    quickAnswer:
      "Marketing recruiters search by channel and platform names — Google Ads, Meta Ads, HubSpot, Klaviyo — so a parseable resume names the exact channels you can run and attaches a spend or efficiency number to each. Generic \"digital marketing\" is nearly unsearchable. This template enforces that structure.",
    sourceTag: "tpl-marketing",
    atsCheckerSlug: "marketing-manager",
    highlights: [
      "Channels and tools listed the way recruiter searches work",
      "Every bullet slot carries ROAS/CAC/CVR or budget scale",
      "Platform-attributed vs. blended attribution note included",
    ],
    body: marketingTxt,
  },
  {
    slug: "data-analyst",
    role: "Data Analyst",
    title: "Data Analyst Resume Template (ATS-Safe, 2026)",
    description:
      "SQL-forward data analyst resume template where every bullet ties an analysis method to the business decision it drove.",
    quickAnswer:
      "Analyst resumes pass recruiter keyword searches when SQL and the exact BI stack appear in both the skills section and the experience bullets, and each bullet follows: data + method + tool + the decision it drove + a quantified outcome. Analysis without a decision reads as a hobby — this template is built around that rule.",
    sourceTag: "tpl-analyst",
    atsCheckerSlug: "data-analyst",
    highlights: [
      "SQL visible in Skills AND bullets (the #1 analyst search term)",
      "Method → decision → outcome bullet structure",
      "Portfolio/projects slot for career changers",
    ],
    body: analystTxt,
  },
];
