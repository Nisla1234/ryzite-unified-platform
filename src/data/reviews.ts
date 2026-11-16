// Review platform configuration.
// [OPEN] Profile URLs are not yet configured. Add the official RYZITE profile
// URL for a platform to make its "View reviews" button appear; while a URL is
// null, the card renders without a link so we never ship a broken or
// placeholder destination. Ratings and review counts must never be hard-coded
// here — only display them once verified data and an approved source exist.
export interface ReviewPlatform {
  id: 'google' | 'trustpilot' | 'clutch';
  name: string;
  url: string | null;
}

export const reviewPlatforms: ReviewPlatform[] = [
  { id: 'google', name: 'Google', url: null },
  { id: 'trustpilot', name: 'Trustpilot', url: null },
  { id: 'clutch', name: 'Clutch', url: null },
];
