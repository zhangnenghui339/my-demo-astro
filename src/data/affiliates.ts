// Single source of truth for affiliate links.
// After joining each program, replace "#" with your tracking URL (e.g. https://rezi.ai/?via=YOUR_ID).
// rel="sponsored nofollow" is applied wherever these render.
export type Affiliate = { name: string; url: string };

export const affiliates: Record<string, Affiliate> = {
  rezi: { name: "Rezi", url: "#" }, // TODO: paste affiliate URL
  kickresume: { name: "Kickresume", url: "#" }, // TODO
  teal: { name: "Teal", url: "#" }, // TODO
  enhancv: { name: "Enhancv", url: "#" }, // TODO
};
