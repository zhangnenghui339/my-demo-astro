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
  {
    slug: "marketing-manager",
    title: "Marketing Manager",
    searchIntent: "marketing manager resume ATS, marketing resume checker",
    h1: "Free Marketing Manager ATS Resume Checker",
    intro:
      "Check whether your marketing resume names the exact channels and platforms recruiters search for, with spend, ROAS, and growth numbers an ATS can parse.",
    atsKeywords: [
      "Google Ads",
      "Meta Ads",
      "SEO",
      "GA4",
      "HubSpot",
      "CAC",
      "ROAS",
      "lifecycle marketing",
    ],
    commonPitfalls: [
      "Generic 'digital marketing' phrasing instead of the platform names recruiters actually search.",
      "Campaign work described without budget scale or efficiency metrics (ROAS, CAC, CVR).",
      "Attribution claims that don't distinguish platform-attributed from blended results.",
    ],
    resumeExample:
      "Marketing Manager owning a $60K/month mixed budget across Google Ads and Meta Ads. Improved blended CAC from $84 to $61 while scaling spend 40%, built an SEO content engine driving organic sessions up 3x YoY, and launched a Klaviyo lifecycle program lifting repeat purchase 18%.",
    jobDescriptionSample:
      "We are hiring a Marketing Manager to own paid acquisition across Google and Meta, manage agency and creative testing, report CAC and ROAS to leadership, and partner with content on SEO growth.",
  },
  {
    slug: "ux-designer",
    title: "UX Designer",
    searchIntent: "ux designer resume ATS, product designer resume checker",
    h1: "Free UX Designer ATS Resume Checker",
    intro:
      "Check whether your UX resume survives ATS parsing — the highest-risk resume category — while still showing research, design systems, and shipped outcomes.",
    atsKeywords: [
      "Figma",
      "user research",
      "usability testing",
      "design system",
      "prototyping",
      "interaction design",
      "accessibility",
      "stakeholder",
    ],
    commonPitfalls: [
      "Portfolio-style visual resumes (columns, icons, graphics) that parse into empty fields.",
      "Design activity listed without the product outcome it changed (conversion, task success, support volume).",
      "Portfolio link buried or embedded in a graphic instead of plain text in the document body.",
    ],
    resumeExample:
      "UX Designer with 4 years across B2B SaaS. Led research and redesign of onboarding in Figma with usability testing across 24 sessions, cutting time-to-first-value 35%; built the component library adopted by 3 product squads; portfolio: janedoe.design.",
    jobDescriptionSample:
      "We're looking for a UX Designer to run user research, design in Figma within our design system, partner with PM and engineering, and improve activation and task success metrics.",
  },
  {
    slug: "sales-representative",
    title: "Sales Representative",
    searchIntent: "sales resume ATS, sales representative resume checker",
    h1: "Free Sales Representative ATS Resume Checker",
    intro:
      "Check whether your sales resume leads with quota attainment and pipeline numbers in a format ATS software and sales leaders both parse instantly.",
    atsKeywords: [
      "quota",
      "pipeline",
      "prospecting",
      "CRM",
      "Salesforce",
      "closing",
      "ARR",
      "outbound",
    ],
    commonPitfalls: [
      "No quota attainment percentages — the first number every sales leader scans for.",
      "Activity metrics (calls, emails) without conversion outcomes attached.",
      "CRM and tooling (Salesforce, HubSpot, Outreach) missing from the skills section recruiters search.",
    ],
    resumeExample:
      "Sales Representative (B2B SaaS) at 127% average quota attainment over 8 quarters. Sourced 60% of own pipeline via outbound in Salesforce and Outreach, closed $1.1M ARR in FY25, and ranked top 3 of 22 reps two years running.",
    jobDescriptionSample:
      "We are hiring a Sales Representative to own a full sales cycle, prospect outbound, manage pipeline in Salesforce, and consistently attain quota in a B2B SaaS environment.",
  },
  {
    slug: "teacher",
    title: "Teacher",
    searchIntent: "teacher resume ATS, teaching resume checker",
    h1: "Free Teacher ATS Resume Checker",
    intro:
      "Check whether your teaching resume carries certifications, grade levels, and measurable student outcomes in plain text that district ATS portals parse correctly.",
    atsKeywords: [
      "lesson planning",
      "classroom management",
      "differentiated instruction",
      "IEP",
      "state certification",
      "curriculum development",
      "student outcomes",
      "assessment",
    ],
    commonPitfalls: [
      "Certifications and license states formatted in headers or tables that district portals skip.",
      "Teaching described as duties ('taught 5th grade') instead of outcomes (growth scores, intervention results).",
      "Grade levels and subjects not stated in exact terms district filters search for.",
    ],
    resumeExample:
      "Licensed K-6 teacher (State Certification, current) with 6 years in Title I schools. Raised reading proficiency 22 points via differentiated small-group instruction, led IEP compliance for a 28-student caseload, and mentored 2 first-year teachers.",
    jobDescriptionSample:
      "Our district seeks a certified elementary teacher experienced in differentiated instruction, IEP implementation, data-driven assessment, and family communication.",
  },
  {
    slug: "customer-success-manager",
    title: "Customer Success Manager",
    searchIntent: "customer success resume ATS, CSM resume checker",
    h1: "Free Customer Success Manager ATS Resume Checker",
    intro:
      "Check whether your CSM resume shows retention, expansion, and portfolio numbers — the three metrics every customer success screen searches for.",
    atsKeywords: [
      "retention",
      "NRR",
      "churn",
      "onboarding",
      "QBR",
      "expansion",
      "book of business",
      "Gainsight",
    ],
    commonPitfalls: [
      "Relationship language ('trusted advisor') without a retention or expansion number anywhere.",
      "Book-of-business size missing — portfolio ARR and account count are the scale markers screens look for.",
      "CS tooling (Gainsight, ChurnZero, Salesforce) absent from the searchable skills section.",
    ],
    resumeExample:
      "Customer Success Manager owning a $3.2M ARR book across 45 mid-market accounts. Held gross retention at 94% and drove NRR to 112% through QBR-led expansion plays in Gainsight; cut onboarding time-to-value from 45 to 28 days.",
    jobDescriptionSample:
      "We are hiring a CSM to own a mid-market book of business, run onboarding and QBRs, manage renewal risk, and drive net revenue retention through expansion.",
  },
];