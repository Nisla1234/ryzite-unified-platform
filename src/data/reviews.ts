// Review platform configuration for the Client Reviews subsection inside the Trust section.
//
// Data rules ([OPEN] — nothing here is verified yet):
// - A platform card appears on the live site ONLY when `url` is the official, confirmed RYZITE
//   profile URL on that platform. If no platform has a URL, the whole subsection is hidden.
// - `rating` and `reviewCount` are optional and must be copied from the live profile, with
//   `checkedOn` (YYYY-MM-DD) recording when they were read. They go stale, so re-check them
//   regularly or leave them null. Never estimate or round up.
// - `reviews` may only contain real reviews published on that platform, quoted exactly, with
//   the reviewer's name as shown publicly and a link to the original review.
// - No scraping and no unofficial APIs. A permitted official widget or API can replace these
//   manual values later.
export interface VerifiedReview {
  author: string;
  text: string;
  url: string;
}

export interface ReviewPlatform {
  id: 'google' | 'trustpilot' | 'clutch';
  name: string;
  url: string | null;
  rating: number | null;
  reviewCount: number | null;
  checkedOn: string | null;
  reviews: VerifiedReview[];
}

export const reviewPlatforms: ReviewPlatform[] = [
  { id: 'google', name: 'Google', url: null, rating: null, reviewCount: null, checkedOn: null, reviews: [] },
  { id: 'trustpilot', name: 'Trustpilot', url: null, rating: null, reviewCount: null, checkedOn: null, reviews: [] },
  { id: 'clutch', name: 'Clutch', url: null, rating: null, reviewCount: null, checkedOn: null, reviews: [] },
];

export const verifiedReviewPlatforms = reviewPlatforms.filter((platform) => platform.url !== null);
