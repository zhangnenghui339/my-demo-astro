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
  },
];
