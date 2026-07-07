// Single source of truth for affiliate links.
// After joining each program, replace "#" with your tracking URL (e.g. https://rezi.ai/?via=YOUR_ID).
// rel="sponsored nofollow" is applied wherever these render.
export type Affiliate = { name: string; url: string };

export const affiliates: Record<string, Affiliate> = {
  rezi: { name: "Rezi", url: "http://rezi.ai/?via=zhang" }, // TODO: replace with affiliate URL
  kickresume: { name: "Kickresume", url: "https://www.kickresume.com/" }, // TODO
  teal: { name: "Teal", url: "https://get.tealhq.com/L0gQ7o" }, // TODO
  enhancv: { name: "Enhancv", url: "https://enhancv.com/" }, // TODO
  jobscan: { name: "Jobscan", url: "https://www.jobscan.co/" }, // TODO
  "resume-io": { name: "Resume.io", url: "https://resume.io/" }, // TODO
  zety: { name: "Zety", url: "https://zety.com/" }, // TODO
  novoresume: { name: "Novoresume", url: "https://novoresume.com/" }, // TODO
  "resume-worded": { name: "Resume Worded", url: "https://resumeworded.com/" }, // TODO
  careerflow: { name: "Careerflow", url: "https://www.careerflow.ai/" }, // TODO
  huntr: { name: "Huntr", url: "https://huntr.co/" }, // TODO
  canva: { name: "Canva Resume Builder", url: "https://www.canva.com/resumes/" }, // TODO
};
