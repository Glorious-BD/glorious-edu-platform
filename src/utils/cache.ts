/**
 * Global Cache and ISR (Incremental Static Regeneration) Revalidation Rules.
 * These rules ensure fast content delivery while keeping pages up to date.
 */
export const CACHE_REVALIDATE_WINDOWS = {
  // Frequently updated marketing content
  NOTICES: 3600, // 1 Hour (Re-render dynamic notice listings)
  BLOG_POSTS: 7200, // 2 Hours (Verify new blogs or corrections)
  
  // Infrequently updated static parameters
  PROGRAMS: 86400, // 24 Hours (Revalidate courses and curriculum)
  FACULTY_RECORDS: 86400, // 24 Hours (Teacher rosters)
  BRANCHES: 604800, // 7 Days (Locations and amenities)
};

/**
 * Generates custom cache headers for API proxy routes.
 */
export function getStandardCacheHeaders(windowInSeconds: number) {
  return {
    "Cache-Control": `public, s-maxage=${windowInSeconds}, stale-while-revalidate=${Math.floor(windowInSeconds / 2)}`,
  };
}