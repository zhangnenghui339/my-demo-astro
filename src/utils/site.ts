/**
 * Prefixes internal links with Astro's configured `base` so links keep working
 * whether the site is served from the domain root (production) or a
 * sub-path like GitHub Pages project sites (e.g. /my-demo-astro/).
 */
export function withBase(path: string): string {
  if (/^https?:\/\//i.test(path) || path.startsWith("#")) return path;

  const base = import.meta.env.BASE_URL;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const trimmedPath = path.startsWith("/") ? path : `/${path}`;

  return `${trimmedBase}${trimmedPath}` || "/";
}
