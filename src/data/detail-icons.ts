// Line icons for the icon tile beside "What We Could Explore Together" (service pages) and
// "What RYZITE Provides" (solution pages). Inner SVG markup on a 24x24 grid, drawn as strokes in
// currentColor; the tile supplies fill="none", stroke width and round caps. Keyed by page slug.

export const serviceIcons: Record<string, string> = {
  // magnifying glass over rising bars
  'google-seo-and-search-visibility': '<circle cx="10" cy="10" r="6.5" /><path d="m15 15 5.5 5.5" /><path d="M7.5 12.5V11 M10 12.5v-3 M12.5 12.5V8" />',
  // megaphone announcing to an audience
  'google-ads-management': '<path d="M3.5 10v4a1 1 0 0 0 1 1H7l7 4.5v-15L7 9H4.5a1 1 0 0 0-1 1z" /><path d="m7 15 1.5 5H11l-1.3-4.3" /><path d="M17.5 9.5a3.5 3.5 0 0 1 0 5 M19.8 7.2a6.8 6.8 0 0 1 0 9.6" />',
  // phone showing a liked post
  'facebook-and-instagram-ads': '<rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M10.5 5h3" /><path d="M12 16s-3.5-2.1-3.5-4.4a1.9 1.9 0 0 1 3.5-1 1.9 1.9 0 0 1 3.5 1C15.5 13.9 12 16 12 16z" />',
  // shared post reaching connected people
  'social-media-management': '<circle cx="6" cy="12" r="2.4" /><circle cx="17.5" cy="5.5" r="2.4" /><circle cx="17.5" cy="18.5" r="2.4" /><path d="m8.2 10.8 7.1-4 M8.2 13.2l7.1 4" />',
  // vector pen nib
  'branding-and-logo-design': '<path d="m12 3 6 7-3 7H9l-3-7z" /><path d="M12 3v6.5" /><circle cx="12" cy="11" r="1.5" /><path d="M9 20.5h6" />',
  // video frame with a play button
  'content-reels-and-motion-design': '<rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3 9h18 M7.5 5 9 9 M12.5 5 14 9" /><path d="M10.5 12v4.5l4-2.25z" />',
  // shopping bag with a growth arrow
  'online-store-marketing': '<path d="M5.5 8h13l-1 12.5h-11z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /><path d="M12 18v-6 M9.5 14.5 12 12l2.5 2.5" />',
  // customer kept in an automated cycle
  'marketing-automation-and-crm': '<circle cx="12" cy="10" r="2.5" /><path d="M8 16.5a4.5 4.5 0 0 1 8 0" /><path d="M19.5 12a7.5 7.5 0 0 1-12.8 5.3 M4.5 12a7.5 7.5 0 0 1 12.8-5.3" /><path d="M17.3 3.7v3h-3 M6.7 20.3v-3h3" />',
  // written article
  'blog-writing-and-content-marketing': '<path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><path d="M9 11h6 M9 14h6 M9 17h3.5" />',
  // conversion funnel
  'website-tracking-and-conversion-improvement': '<path d="M3.5 4.5h17l-6.5 7.5v6.5l-4 2V12z" /><path d="M7.5 8h9" />',
  // AI sparkles
  'practical-ai-marketing-support': '<path d="m11 3 1.8 5.2L18 10l-5.2 1.8L11 17l-1.8-5.2L4 10l5.2-1.8z" /><path d="m18.5 14.5.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />',
};

export const solutionIcons: Record<string, string> = {
  // browser window with a page layout
  'business-website-design-and-development': '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 8h18" /><path d="M5.5 6h.01 M7.5 6h.01" /><rect x="6" y="11" width="5" height="6" rx="1" /><path d="M14 11.5h4 M14 14h4 M14 16.5h2.5" />',
  // storefront with an awning
  'online-store-development': '<path d="M4 9.5 5.5 4h13L20 9.5" /><path d="M4 9.5a2.67 2.67 0 0 0 5.33 0 2.67 2.67 0 0 0 5.34 0 2.67 2.67 0 0 0 5.33 0" /><path d="M5 11.5V20h14v-8.5" /><path d="M10 20v-5h4v5" />',
  // window with code brackets
  'custom-software-for-businesses': '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 8h18" /><path d="M9.5 11.5 7 14l2.5 2.5 M14.5 11.5 17 14l-2.5 2.5 M12.8 10.8l-1.6 6.4" />',
  // phone with an app grid
  'mobile-app-development': '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><rect x="9" y="6.5" width="2.5" height="2.5" rx=".5" /><rect x="12.5" y="6.5" width="2.5" height="2.5" rx=".5" /><rect x="9" y="10" width="2.5" height="2.5" rx=".5" /><rect x="12.5" y="10" width="2.5" height="2.5" rx=".5" /><path d="M10.5 18.5h3" />',
  // chat bubble with an assistant's eyes
  'customer-chatbots-and-assistants': '<path d="M4 5h16a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1h-9L6.5 20v-3.5H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" /><path d="M9 10v1.5 M15 10v1.5" /><path d="M9.5 13.5a3.5 3.5 0 0 0 5 0" />',
  // linked workflow steps
  'business-workflow-automation': '<rect x="3" y="3.5" width="6" height="5" rx="1.2" /><rect x="15" y="3.5" width="6" height="5" rx="1.2" /><rect x="9" y="15.5" width="6" height="5" rx="1.2" /><path d="M9 6h6 M13 4.5 15 6l-2 1.5" /><path d="M18 8.5V12a1.5 1.5 0 0 1-1.5 1.5H12v2 M10.5 14l1.5 1.5 1.5-1.5" />',
  // wireframe with a pointer
  'ui-ux-design-for-websites-and-apps': '<rect x="3" y="3" width="14" height="12" rx="2" /><path d="M3 7h14" /><rect x="6" y="9.5" width="4.5" height="3" rx=".6" /><path d="m13.5 12.5 7 2.6-3 1.3-1.3 3z" />',
  // plug and socket meeting
  'software-and-api-integrations': '<path d="M2.5 12H6 M21.5 12H18" /><path d="M6 8h1.5a4 4 0 0 1 0 8H6z" /><path d="M18 8h-1.5a4 4 0 0 0 0 8H18z" /><path d="M9 3.5 10 6 M15 3.5 14 6 M9 20.5l1-2.5 M15 20.5 14 18" />',
  // shield with a check
  'website-care-and-maintenance': '<path d="m12 3 7 3v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V6z" /><path d="m8.8 12.2 2.2 2.2 4.4-4.6" />',
};

// Benefit card icons (24x24 strokes): clearer view, audience in context, review together.
export const benefitIcons = [
  '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" />',
  '<circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" />',
  '<rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1 M8.5 12.5l2.3 2.3 4.7-4.8" />',
];
