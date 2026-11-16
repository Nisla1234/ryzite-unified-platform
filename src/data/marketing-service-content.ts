import { divisions, offeringSlug } from './offerings';

type Capability = {
  title: string;
  description: string;
};

type ServiceDetailContent = {
  focus: string;
  capabilities: Capability[];
  related: string[];
};

const serviceDetailContent: Record<string, ServiceDetailContent> = {
  'google-seo-and-search-visibility': {
    focus: 'search visibility',
    capabilities: [
      { title: 'Search presence review', description: 'Review the current website and search presence to identify areas for discussion.' },
      { title: 'Search topic planning', description: 'Explore relevant search topics and how they relate to the business.' },
      { title: 'On-page content guidance', description: 'Consider page structure and content clarity for visitors and search engines.' },
      { title: 'Review and refinement', description: 'Agree on useful signals to review and possible next steps.' },
    ],
    related: ['blog-writing-and-content-marketing', 'website-tracking-and-conversion-improvement', 'google-ads-management'],
  },
  'google-ads-management': {
    focus: 'Google advertising',
    capabilities: [
      { title: 'Campaign goal planning', description: 'Clarify the audience, objective, and action a campaign is intended to support.' },
      { title: 'Keyword and audience research', description: 'Explore search terms and audience considerations relevant to the brief.' },
      { title: 'Ad and landing-page alignment', description: 'Review how campaign messages connect with their destination pages.' },
      { title: 'Campaign review', description: 'Discuss available campaign signals and potential adjustments.' },
    ],
    related: ['facebook-and-instagram-ads', 'website-tracking-and-conversion-improvement', 'google-seo-and-search-visibility'],
  },
  'facebook-and-instagram-ads': {
    focus: 'Facebook and Instagram advertising',
    capabilities: [
      { title: 'Campaign objective planning', description: 'Clarify what the campaign should communicate and the action it should support.' },
      { title: 'Audience considerations', description: 'Explore audience groups and targeting considerations for the brief.' },
      { title: 'Creative direction', description: 'Plan how copy and visual assets could communicate the campaign message.' },
      { title: 'Campaign review', description: 'Review available campaign signals and discuss possible refinements.' },
    ],
    related: ['google-ads-management', 'social-media-management', 'content-reels-and-motion-design'],
  },
  'social-media-management': {
    focus: 'social media presence',
    capabilities: [
      { title: 'Channel and profile review', description: 'Review the selected channels, profiles, and current communication approach.' },
      { title: 'Content themes', description: 'Explore recurring themes that fit the brand, audience, and business priorities.' },
      { title: 'Publishing plan', description: 'Outline a practical content plan and the review steps it may need.' },
      { title: 'Community guidance', description: 'Discuss response guidelines and how enquiries can be directed to the right next step.' },
    ],
    related: ['content-reels-and-motion-design', 'branding-and-logo-design', 'blog-writing-and-content-marketing'],
  },
  'branding-and-logo-design': {
    focus: 'brand identity',
    capabilities: [
      { title: 'Brand direction', description: 'Explore the business, audience, and qualities the identity should communicate.' },
      { title: 'Visual identity concepts', description: 'Develop visual directions for discussion against the agreed brief.' },
      { title: 'Logo and supporting assets', description: 'Plan identity assets relevant to the agreed project requirements.' },
      { title: 'Usage guidance', description: 'Discuss how the identity can be applied consistently across selected channels.' },
    ],
    related: ['social-media-management', 'content-reels-and-motion-design', 'blog-writing-and-content-marketing'],
  },
  'content-reels-and-motion-design': {
    focus: 'digital content and motion',
    capabilities: [
      { title: 'Content concepts', description: 'Explore formats and concepts suited to the message, audience, and channel.' },
      { title: 'Short-form video planning', description: 'Plan a short-form video or reel around the available brief and assets.' },
      { title: 'Motion design direction', description: 'Consider how motion and visual elements could support the content.' },
      { title: 'Content review', description: 'Review content against the agreed message, format, and intended channel.' },
    ],
    related: ['social-media-management', 'branding-and-logo-design', 'facebook-and-instagram-ads'],
  },
  'online-store-marketing': {
    focus: 'online store marketing',
    capabilities: [
      { title: 'Store and product review', description: 'Review how products and key information are presented in the store.' },
      { title: 'Campaign and content planning', description: 'Explore ways to connect product messages with relevant marketing activity.' },
      { title: 'Customer journey review', description: 'Consider the steps from product discovery to the store actions available.' },
      { title: 'Measurement discussion', description: 'Identify useful store and campaign signals to review, where available.' },
    ],
    related: ['google-ads-management', 'facebook-and-instagram-ads', 'website-tracking-and-conversion-improvement'],
  },
  'marketing-automation-and-crm': {
    focus: 'marketing automation and CRM',
    capabilities: [
      { title: 'Customer journey mapping', description: 'Outline relevant lead or customer stages and the information used at each stage.' },
      { title: 'CRM requirements review', description: 'Discuss contact data, team workflows, and requirements for a CRM setup.' },
      { title: 'Automation opportunities', description: 'Identify repeatable communication or handoff steps that may be suitable to scope.' },
      { title: 'Workflow review', description: 'Review the proposed journey and agree how the workflow should be checked.' },
    ],
    related: ['website-tracking-and-conversion-improvement', 'social-media-management', 'practical-ai-marketing-support'],
  },
  'blog-writing-and-content-marketing': {
    focus: 'blog writing and content marketing',
    capabilities: [
      { title: 'Topic and audience planning', description: 'Explore useful topics in relation to the audience and business priorities.' },
      { title: 'Editorial planning', description: 'Outline a practical sequence for reviewing and preparing selected content.' },
      { title: 'Article development', description: 'Develop written content from the agreed brief, sources, and review process.' },
      { title: 'Content alignment', description: 'Consider how articles connect with relevant services, pages, and next steps.' },
    ],
    related: ['google-seo-and-search-visibility', 'social-media-management', 'content-reels-and-motion-design'],
  },
  'website-tracking-and-conversion-improvement': {
    focus: 'website tracking and conversion improvement',
    capabilities: [
      { title: 'Measurement requirements', description: 'Clarify which website interactions and business questions matter to the project.' },
      { title: 'Tracking plan', description: 'Outline events and measurement needs for implementation or review.' },
      { title: 'Customer journey review', description: 'Review key pages and the steps available to visitors.' },
      { title: 'Improvement recommendations', description: 'Use the available information to discuss possible changes and further review.' },
    ],
    related: ['google-seo-and-search-visibility', 'google-ads-management', 'marketing-automation-and-crm'],
  },
  'practical-ai-marketing-support': {
    focus: 'AI-assisted marketing workflows',
    capabilities: [
      { title: 'Workflow discovery', description: 'Explore repeatable marketing tasks and where assistance may be useful.' },
      { title: 'Use-case planning', description: 'Define a practical use case, its inputs, and the review needed before use.' },
      { title: 'Human review considerations', description: 'Keep accuracy, brand voice, privacy, and human approval in view.' },
      { title: 'Workflow evaluation', description: 'Review whether the proposed workflow is useful and appropriate for the task.' },
    ],
    related: ['marketing-automation-and-crm', 'content-reels-and-motion-design', 'blog-writing-and-content-marketing'],
  },
};

const marketingDivision = divisions.find(({ id }) => id === 'services');

if (!marketingDivision) {
  throw new Error('The approved Marketing Services division is missing from offerings.ts.');
}

const serviceEntries = marketingDivision.items.map(([title, description, icon]) => {
  const slug = offeringSlug(title);
  const detail = serviceDetailContent[slug];

  if (!detail) {
    throw new Error(`Marketing service detail content is missing for "${slug}".`);
  }

  return { slug, title, description, icon, ...detail };
});

const serviceSlugs = new Set(serviceEntries.map(({ slug }) => slug));

for (const service of serviceEntries) {
  for (const relatedSlug of service.related) {
    if (!serviceSlugs.has(relatedSlug)) {
      throw new Error(`Related Marketing Service "${relatedSlug}" is not in offerings.ts.`);
    }
  }
}

export const marketingServices = serviceEntries;
