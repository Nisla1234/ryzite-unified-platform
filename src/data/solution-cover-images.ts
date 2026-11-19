// Cover images for each technology solution, keyed by solution title.
// Used on the /solutions/ cards (Offerings.astro) and behind each solution page's "What RYZITE Provides" section.
export const solutionCoverImages: Record<string, { src: string; alt: string; width: number; height: number }> = {
  // [OPEN] The first three covers were supplied by the client; confirm usage rights before launch.
  'Business Website Design & Development': {
    src: '/images/solutions/website-development-cover.webp',
    alt: 'A person working at a desk in front of glowing screens of charts and a rising growth arrow.',
    width: 736,
    height: 736,
  },
  'Online Store Development': {
    src: '/images/solutions/online-store-development-cover.webp',
    alt: 'A laptop showing an online store with product cards, beside a shopping cart and shopping bags.',
    width: 735,
    height: 490,
  },
  'Custom Software for Businesses': {
    src: '/images/solutions/custom-software-cover.webp',
    alt: 'A team working at laptops around a table, with a glowing digital brain and business icons above them.',
    width: 736,
    height: 414,
  },
  'Mobile App Development': {
    src: '/images/solutions/mobile-app-development-cover.webp',
    alt: 'A smartphone showing an app with shopping, media, and map screens, surrounded by code, cloud, and security icons.',
    width: 736,
    height: 414,
  },
  'Customer Chatbots & Assistants': {
    src: '/images/solutions/customer-chatbots-cover.webp',
    alt: 'A glowing AI sphere at the centre of a network of connected screens and devices.',
    width: 735,
    height: 441,
  },
  // [OPEN] Client supplied the same image as Custom Software; a distinct automation image may be wanted.
  'Business Workflow Automation': {
    src: '/images/solutions/business-workflow-automation-cover.webp',
    alt: 'A team working at laptops around a table, with a glowing digital brain and business icons above them.',
    width: 736,
    height: 414,
  },
  'UI/UX Design for Websites & Apps': {
    src: '/images/solutions/ui-ux-design-cover.webp',
    alt: 'A laptop and smartphone showing a website design, with floating code and chart panels.',
    width: 736,
    height: 736,
  },
  'Software & API Integrations': {
    src: '/images/solutions/software-api-integrations-cover.webp',
    alt: 'A hand touching a central gear connected to cloud, email, network, and chart icons.',
    width: 735,
    height: 451,
  },
  'Website Care & Maintenance': {
    src: '/images/solutions/website-care-maintenance-cover.webp',
    alt: 'Two engineers with a tablet monitoring equipment, with live status panels linked to a cloud platform.',
    width: 735,
    height: 490,
  },
};
