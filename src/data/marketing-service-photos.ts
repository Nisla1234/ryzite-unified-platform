// Client-supplied photos for each marketing service (2026-11-19).
// Used on the /services/ cards and each service page hero. Files live in public/images/services/{slug}.webp.
export const marketingServicePhotos: Record<string, { width: number; height: number }> = {
  'google-seo-and-search-visibility': { width: 736, height: 736 },
  'google-ads-management': { width: 736, height: 736 },
  'facebook-and-instagram-ads': { width: 236, height: 118 },
  'social-media-management': { width: 736, height: 481 },
  'branding-and-logo-design': { width: 736, height: 736 },
  'content-reels-and-motion-design': { width: 736, height: 736 },
  'online-store-marketing': { width: 735, height: 490 },
  'marketing-automation-and-crm': { width: 735, height: 401 },
  'blog-writing-and-content-marketing': { width: 735, height: 438 },
  'website-tracking-and-conversion-improvement': { width: 736, height: 536 },
  'practical-ai-marketing-support': { width: 736, height: 736 },
};

export const marketingServicePhotoSrc = (slug: string) => `/images/services/${slug}.webp`;
