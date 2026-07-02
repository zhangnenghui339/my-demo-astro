export type AtsJob = {
  slug: string;
  title: string;
  searchIntent: string;
  h1: string;
  intro: string;
  atsKeywords: string[];
  commonPitfalls: string[];
  resumeExample: string;
  jobDescriptionSample: string;
};

export const atsJobs: AtsJob[] = [
  {
    slug: "product-manager",
    title: "Product Manager",
    searchIntent: "product manager resume ATS, product manager ATS checker",
    h1: "Free Product Manager ATS Resume Checker",
    intro:
      "Check whether your product manager resume shows measurable product outcomes, stakeholder work, and launch impact in language an ATS can parse.",
    atsKeywords: [
      "roadmap",
      "stakeholder",
      "launch",
      "metrics",
      "experimentation",
      "user research",
      "prioritization",
      "go-to-market",
    ],
    commonPitfalls: [
      "Too many strategy claims without measurable business or product metrics.",
      "Missing verbs tied to shipping, prioritization, experiments, or stakeholder alignment.",
      "Product tools are listed, but the resume does not show product judgment or outcomes.",
    ],
    resumeExample:
      "Product Manager with 5 years of experience launching B2B SaaS features. Led roadmap prioritization with engineering and sales stakeholders, shipped onboarding experiments that improved activation by 18%, and used user research to define product requirements.",
    jobDescriptionSample:
      "We are looking for a Product Manager to own roadmap prioritization, partner with engineering and design, run user research, define launch plans, and measure product metrics across activation, retention, and revenue.",
  },
  {
    slug: "software-engineer",
    title: "Software Engineer",
    searchIntent: "software engineer resume ATS, software developer ATS checker",
    h1: "Free Software Engineer ATS Resume Checker",
    intro:
      "Check whether your software engineering resume makes languages, systems, architecture, testing, and production impact clear enough for ATS filters and recruiters.",
    atsKeywords: [
      "javascript",
      "python",
      "api",
      "distributed systems",
      "testing",
      "deployment",
      "performance",
      "cloud",
    ],
    commonPitfalls: [
      "Projects list technologies but not production scale, latency, reliability, or user impact.",
      "Skills are buried in paragraphs instead of a parseable technical skills section.",
      "No clear evidence of testing, code review, deployment, or cross-functional delivery.",
    ],
    resumeExample:
      "Software Engineer with 4 years of experience building APIs and cloud services. Improved API latency by 32%, added automated testing for payment workflows, and deployed Python and JavaScript services on AWS.",
    jobDescriptionSample:
      "We need a Software Engineer experienced with JavaScript, Python, APIs, cloud deployment, testing, performance optimization, and maintaining reliable production systems.",
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    searchIntent: "data analyst resume ATS, data analyst ATS checker",
    h1: "Free Data Analyst ATS Resume Checker",
    intro:
      "Check whether your data analyst resume clearly signals SQL, dashboards, business metrics, stakeholder reporting, and decision impact.",
    atsKeywords: [
      "sql",
      "dashboard",
      "tableau",
      "power bi",
      "excel",
      "forecasting",
      "reporting",
      "business metrics",
    ],
    commonPitfalls: [
      "Tools are listed without explaining the business decisions or metrics improved.",
      "SQL, dashboards, or reporting keywords are missing from the skills section.",
      "Analysis examples sound like tasks, not measurable insights or decisions.",
    ],
    resumeExample:
      "Data Analyst with 3 years of experience building SQL dashboards and executive reporting. Automated weekly revenue reporting, reduced manual analysis time by 40%, and created Tableau dashboards for retention and acquisition metrics.",
    jobDescriptionSample:
      "We are hiring a Data Analyst with strong SQL, Excel, Tableau or Power BI skills to build dashboards, analyze business metrics, forecast trends, and communicate insights to stakeholders.",
  },
  {
    slug: "nurse",
    title: "Nurse",
    searchIntent: "nurse resume ATS, nursing resume ATS checker",
    h1: "Free Nurse ATS Resume Checker",
    intro:
      "Check whether your nursing resume clearly shows licenses, clinical settings, patient care skills, charting experience, and role-specific certifications.",
    atsKeywords: [
      "patient care",
      "rn",
      "bls",
      "emr",
      "medication administration",
      "charting",
      "acute care",
      "patient assessment",
    ],
    commonPitfalls: [
      "License, certification, or state information is missing or hard for ATS software to parse.",
      "Clinical units and patient populations are described too vaguely.",
      "Nursing skills are scattered through paragraphs instead of listed in a clear skills section.",
    ],
    resumeExample:
      "Registered Nurse with 6 years of acute care experience in medical-surgical and telemetry units. Skilled in patient assessment, medication administration, EMR charting, care planning, and coordinating discharge education for high-volume patient loads.",
    jobDescriptionSample:
      "We are hiring a Registered Nurse with active RN license, BLS certification, acute care experience, EMR charting, medication administration, patient assessment, and strong communication with physicians and care teams.",
  },
  {
    slug: "accountant",
    title: "Accountant",
    searchIntent: "accountant resume ATS, accounting resume ATS checker",
    h1: "Free Accountant ATS Resume Checker",
    intro:
      "Check whether your accounting resume clearly signals month-end close, reconciliations, financial reporting, tax, audit support, and accounting software experience.",
    atsKeywords: [
      "reconciliation",
      "month-end close",
      "financial reporting",
      "gaap",
      "excel",
      "quickbooks",
      "accounts payable",
      "audit",
    ],
    commonPitfalls: [
      "Accounting responsibilities are listed without measurable volume, accuracy, or process improvement.",
      "Software and reporting tools are missing from a dedicated skills section.",
      "The resume does not distinguish AP, AR, general ledger, tax, audit, or close experience clearly.",
    ],
    resumeExample:
      "Accountant with 5 years of experience in month-end close, account reconciliations, AP/AR, and financial reporting. Prepared GAAP-compliant reports, improved reconciliation workflows, and used Excel, QuickBooks, and NetSuite to support audit-ready records.",
    jobDescriptionSample:
      "We need an Accountant with experience in month-end close, general ledger, reconciliations, financial reporting, GAAP, Excel, QuickBooks or NetSuite, accounts payable, accounts receivable, and audit support.",
  },
];

export const atsJobMap = new Map(atsJobs.map((job) => [job.slug, job]));
