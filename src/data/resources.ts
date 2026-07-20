export type Guide = {
  slug: string;
  title: string;
  description: string;
  quickAnswer: string;
  lastVerified: string | null;
  sections: Array<{ h2: string; body: string[] }>;
  faq: Array<{ q: string; a: string }>;
  related: Array<{ label: string; href: string }>;
};

export type ResearchArticle = {
  slug: string;
  title: string;
  description: string;
  lastVerified: string;
  label: string;
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: "ats-resume-parsing-test",
    title: "We Tested 4 ATS Platforms With the Same Resume",
    description:
      "A field-by-field test of Lever, Oracle Taleo, Workday, and Greenhouse reveals what candidates can actually verify after uploading a resume.",
    lastVerified: "2026-07",
    label: "Original research",
  },
  {
    slug: "what-does-an-ats-score-mean",
    title: "What Does an ATS Score Actually Mean?",
    description:
      "Why an ATS score is a diagnostic heuristic—not a pass probability—and how to use one without optimizing for a fictional universal ATS.",
    lastVerified: "2026-07",
    label: "Evidence-based analysis",
  },
];

export const guides: Guide[] = [
  {
    slug: "how-to-pass-ats-in-2026",
    title: "How to Pass ATS Screening in 2026 (What Actually Happens to Your Resume)",
    description:
      "Most ATS software doesn't auto-reject resumes. Here's what actually happens after you click apply, the two failure modes that make you invisible, and how to fix both.",
    quickAnswer:
      "Applicant tracking systems rarely auto-reject anyone. What actually happens: the ATS parses your resume into a structured profile, and recruiters filter and keyword-search those profiles. You fail by being unparseable (broken formatting) or unsearchable (missing the exact terms recruiters query) — not by a robot's verdict. Fix parsing with a single-column, standard-headings layout; fix searchability by mirroring the job description's exact vocabulary for skills you genuinely have.",
    lastVerified: "2026-07",
    sections: [
      {
        h2: "What an ATS actually does with your resume",
        body: [
          "When you submit an application, the ATS extracts your resume into database fields: contact info, job titles, employers, dates, skills, education. Recruiters then work inside that database — filtering by title, searching keywords, sorting by criteria. A human decides; the software organizes.",
          "This means the popular fear is aimed at the wrong target. The risk isn't rejection by algorithm. The risk is a parsing error that scrambles your work history, or a keyword gap that keeps you out of every search a recruiter runs. Invisible, not rejected.",
        ],
      },
      {
        h2: "Failure mode 1: your resume doesn't parse",
        body: [
          "Parsers read top-to-bottom, left-to-right, from the document body. Tables, text boxes, multi-column layouts, and content placed in headers or footers are the classic breakers — contact details in a header are skipped by many parsers entirely.",
          "The 30-second diagnostic: copy your entire resume and paste it into a plain text editor. If the reading order breaks, sections interleave, or your phone number vanishes, an ATS sees the same chaos. This single test catches roughly 80% of parsing problems before you ever submit.",
        ],
      },
      {
        h2: "Failure mode 2: your resume doesn't match searches",
        body: [
          "Recruiters search their ATS like Google: exact-ish terms from the job description. If the posting says 'stakeholder management' and your resume says 'managing stakeholders', you may still match; if it says 'GA4' and you wrote 'Google Analytics', you may not. Exact strings win.",
          "Pull the 10–15 most repeated hard skills from your target posting and mirror the wording for everything you genuinely have. Spell out each acronym once, then keep the acronym — Search Engine Optimization (SEO) — so both forms are searchable. Keywords belong in your experience bullets, not just a skills list; context ranks.",
        ],
      },
      {
        h2: "The 10-minute fix priority",
        body: [
          "In order: run the copy-paste test; move contact info into the document body; kill tables and columns; rename sections to standard titles (Work Experience, Education, Skills); mirror the top ten keywords from one real posting. Then verify the export with a free ATS checker rather than trusting the editor's preview — a beautiful editor can still export a file that parses into soup.",
        ],
      },
    ],
    faq: [
      { q: "Do ATS systems automatically reject resumes below a score?", a: "Rare in practice. Auto-knockouts exist for hard requirements (work authorization, license questions) set in the application form itself — not for resume 'scores'. The realistic risk is never appearing in a recruiter's filtered search." },
      { q: "PDF or Word for ATS?", a: "Follow the posting's instruction first. Otherwise, a text-based PDF or .docx both parse fine in modern systems; scanned or image-based PDFs read as blank. Run the copy-paste test on the exported file to confirm it's text-based." },
      { q: "Do keyword-stuffed resumes work?", a: "They pass searches and fail humans. A recruiter opens the profile within seconds of a match; a wall of keywords with no evidence gets closed just as fast. Mirror terms you can defend in an interview, attached to quantified bullets." },
    ],
    related: [
      { label: "Free ATS Resume Checker", href: "/tools/ats-checker/" },
      { label: "ATS-Safe Resume Templates", href: "/templates/" },
      { label: "ATS-Friendly Resume Format Guide", href: "/resources/ats-friendly-resume-format/" },
    ],
  },
  {
    slug: "resume-keywords-guide",
    title: "Resume Keywords: How Recruiter Search Actually Works (2026 Guide)",
    description:
      "Recruiters search ATS databases like a search engine. Here's how to find the exact keywords for your target role, where to place them, and the honesty line you shouldn't cross.",
    quickAnswer:
      "Resume keywords work because recruiters literally type search queries into their ATS. The right keywords are not generic power words — they're the exact hard skills, tools, and credentials repeated in your target job description. Extract the 10–15 most repeated terms, mirror the posting's wording for skills you truly have, place them in both a skills section and inside quantified experience bullets, and spell out acronyms once alongside their short form.",
    lastVerified: "2026-07",
    sections: [
      {
        h2: "Where keywords come from (not a generic list)",
        body: [
          "Every 'top 100 resume keywords' list is noise. The only keyword source that matters is the job description in front of you, because that's the document the recruiter wrote and will search against. Requirements repeated two or three times, terms in both the summary and the requirements list, and any named tool or certification — those are the query terms.",
          "For pattern confirmation, scan three to five similar postings. Terms that appear across all of them are your role's core vocabulary; terms unique to one posting are that company's dialect and worth mirroring only in that application.",
        ],
      },
      {
        h2: "Placement: skills section AND bullets",
        body: [
          "Recruiter searches rank matches by density and context. A term appearing only in a skills list matches weakly; the same term inside an outcome bullet — 'cut reporting time 60% by automating pipelines in dbt' — matches strongly and survives the human read that follows.",
          "Titles matter as much as skills. If your internal title was 'Growth Ninja' and the market says 'Growth Marketing Manager', translate it; recruiters filter by title strings, and nobody searches for ninjas.",
        ],
      },
      {
        h2: "The honesty line",
        body: [
          "Include every term you can defend for ninety seconds in an interview; exclude everything else. A keyword you can't back up doesn't just waste a match — it converts a screening pass into an interview failure, which costs far more. The tool gets you found; the truth gets you hired.",
        ],
      },
    ],
    faq: [
      { q: "How many keywords should a resume have?", a: "Wrong unit of measure. Cover the 10–15 core terms of one target posting naturally across your skills section and bullets. Coverage of the right terms beats any raw count." },
      { q: "Should I tailor keywords for every single application?", a: "Per application family, yes — roles cluster into 2–3 vocabularies. Fifteen minutes of alignment per family outperforms a hundred identical submissions, because recruiter searches are posting-specific." },
      { q: "Do soft-skill keywords ('leadership', 'communication') matter?", a: "Recruiters rarely search them; they search hard skills and tools. Show soft skills through outcomes ('aligned 4 teams to ship X') instead of claiming them as nouns." },
    ],
    related: [
      { label: "How to Pass ATS in 2026", href: "/resources/how-to-pass-ats-in-2026/" },
      { label: "Free ATS Checker by Role", href: "/tools/ats-checker/" },
      { label: "Resume Examples by Job", href: "/examples/" },
    ],
  },
  {
    slug: "ats-friendly-resume-format",
    title: "ATS-Friendly Resume Format: The Exact Rules (With Reasons)",
    description:
      "The precise formatting rules that keep a resume parseable — file type, layout, fonts, headings, dates — and why each rule exists, so you know which ones you can bend.",
    quickAnswer:
      "An ATS-friendly resume format is: a single-column layout, standard section headings (Work Experience, Education, Skills), contact details in the document body, standard fonts at 10.5–12pt, month/year dates in one consistent format, no tables, text boxes, images, or icons carrying information, exported as .docx or a text-based PDF. Every rule exists because parsers read top-to-bottom from the body text — anything outside that flow risks being skipped or scrambled.",
    lastVerified: "2026-07",
    sections: [
      {
        h2: "Layout rules and why they exist",
        body: [
          "Single column, because parsers read linearly and multi-column layouts interleave your content into nonsense. Standard headings, because parsing models are trained on 'Work Experience', not 'My Journey'. Contact info in the body, because header/footer regions are skipped by a meaningful share of parsers — the most expensive silent failure in resume formatting.",
          "Four fields per role in a fixed order — title, company, location, dates — because consistency is what lets the parser map your history into the right database fields. One date format everywhere (03/2023 – 06/2026 or Mar 2023 – Jun 2026); mixed formats produce mis-sorted or missing employment dates.",
        ],
      },
      {
        h2: "What's decoration and what's data",
        body: [
          "The rule isn't 'no design' — it's 'no information carried by design'. A subtle color accent or a divider line is decoration and parses as nothing, harmlessly. A skills bar chart, a logo strip, or an icon-labeled contact row is data trapped in graphics, and it parses as nothing, catastrophically.",
          "Fonts: Arial, Calibri, Helvetica, Georgia at 10.5–12pt. Exotic fonts risk character substitution in extraction; tiny sizes signal cramming to the human who reads the profile after the match.",
        ],
      },
      {
        h2: "Export and verify",
        body: [
          "Follow the posting's file-type instruction; otherwise .docx or text-based PDF are both safe. The verification habit that matters: test the exported file, not the editor preview. Paste the export into a plain text editor — if reading order and content survive, you're parseable. Then run it through a free ATS checker for the field-level view.",
        ],
      },
    ],
    faq: [
      { q: "Are two-page resumes ATS-safe?", a: "Yes — length is a human preference, not a parsing constraint. Two pages is normal at 8+ years of experience. What matters is that page one carries your strongest material for the human who opens the profile." },
      { q: "Can I use a template from Canva or a design tool?", a: "For design-judged roles, keep a visual version for humans — and a parallel single-column version for online applications. Export text-based PDF only, and copy-paste test it; image-based exports read as blank pages." },
      { q: "Do emojis or special characters break parsing?", a: "Modern parsers usually survive them, but they add zero search value and can render as junk characters in older systems. In a document whose job is machine readability, they're risk without reward." },
    ],
    related: [
      { label: "ATS-Safe Templates (copy-paste ready)", href: "/templates/" },
      { label: "How to Pass ATS in 2026", href: "/resources/how-to-pass-ats-in-2026/" },
      { label: "Free ATS Checker", href: "/tools/ats-checker/" },
    ],
  },
  {
    slug: "free-vs-paid-resume-builders",
    title: "Free vs Paid Resume Builders: When Paying Actually Makes Sense",
    description:
      "Most job seekers should start free. Here's exactly what free tiers cover in 2026, the three situations where paying is rational, and the billing tricks to avoid.",
    quickAnswer:
      "Start free: in 2026, free tiers (Teal's is the most generous we've tested) plus a free ATS checker cover the entire core workflow — building, formatting, and verifying a parseable resume. Paying becomes rational in exactly three situations: you need per-posting keyword matching at volume (a serious multi-application search), you need premium exports or design for a design-judged role, or you're paying for one month of an audit tool to fix a specific weak resume. Watch the billing: weekly cycles and auto-renewing trials are where these tools make their money.",
    lastVerified: "2026-07",
    sections: [
      {
        h2: "What free actually covers now",
        body: [
          "The free baseline in 2026 is genuinely usable: building and editing a resume, at least one clean export, basic AI phrase suggestions, and — on the best free tiers — job tracking and limited per-posting tailoring. Combined with a free ATS check, that's the whole loop for a targeted search of ten to twenty applications.",
          "What free tiers deliberately withhold: unlimited tailored versions, premium templates, cover-letter generation at volume, and match-rate reports. Those are the pressure points — which tells you exactly when paying is and isn't rational.",
        ],
      },
      {
        h2: "The three rational reasons to pay",
        body: [
          "Volume: if you're running forty-plus applications across several role families, per-posting tailoring and tracking pay for themselves in hours saved. Design: if your resume is itself a work sample (design, brand, some marketing roles), premium templates plus a parallel ATS-safe version is a legitimate spend. Audit: if your resume is 80% there, one month of a line-by-line review tool beats rebuilding from scratch in a new builder.",
          "Notice what's not on the list: 'better AI writing'. Generated bullets are generic by default in every tool at every price; the differentiating work — your real numbers, your truth — is unpaid labor no subscription replaces.",
        ],
      },
      {
        h2: "Billing tricks to watch",
        body: [
          "Weekly billing that reads like monthly, 'trials' that auto-convert, and cancellation flows buried three menus deep are standard in this category. Before paying anything: screenshot the price and cycle, calendar the renewal date, and check the export still works after you cancel. Pay for a month when you need it; almost nobody needs a resume builder subscription in perpetuity.",
        ],
      },
    ],
    faq: [
      { q: "Is a paid resume builder worth it for one application?", a: "Almost never. For a single high-stakes application, a free build plus one free ATS check plus an hour of tailoring beats any subscription. Consider one paid match-rate scan only if the posting is checklist-heavy (accounting, healthcare)." },
      { q: "Which free tier is the most complete?", a: "In our testing, Teal's free tier covers the widest slice of a real search — tracker plus tailoring without payment pressure. See the full comparison for how the others differ." },
      { q: "Do paid tools get better ATS results than free ones?", a: "No. Parseability comes from layout and structure, which free tiers deliver fine. Paid tiers buy convenience and volume, not a better pass rate." },
    ],
    related: [
      { label: "Best AI Resume Builders (tested)", href: "/best/ai-resume-builder/" },
      { label: "Free ATS Resume Checker", href: "/tools/ats-checker/" },
      { label: "12 AI Resume Tools Compared (PDF)", href: "/best/ai-resume-builder/" },
    ],
  },
];
