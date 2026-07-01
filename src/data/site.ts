export const brand = {
  name: "CareerRadar",
  tagline: "Build leverage before you need luck.",
};

// Nav only links to pages that already exist. Add Templates/Resources when their hubs are real.
export const nav = [
  { label: "Reviews", href: "/best/ai-resume-builder/" },
  { label: "Tools", href: "/tools/ats-checker/" },
];

export const trustLinks = [
  { label: "How We Test", href: "/how-we-test/" },
  { label: "About", href: "/about/" },
  { label: "Disclosure", href: "/disclosure/" },
];

// TODO: these role pages don't exist yet — trim this list down to only
// slugs that have a real /tools/ats-checker/[job]/ page before shipping,
// per the "only link real pages" rule.
export const footerRoles = [
  { slug: "product-manager", label: "Product Manager" },
  { slug: "software-engineer", label: "Software Engineer" },
  { slug: "data-analyst", label: "Data Analyst" },
  { slug: "nurse", label: "Nurse" },
  { slug: "accountant", label: "Accountant" },
];
