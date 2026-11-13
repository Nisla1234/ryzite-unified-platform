export const divisions = [
  {
    id: 'services', title: 'Marketing Services', label: 'Get seen. Build demand.', symbol: '↗',
    description: 'Reach the right people, tell your story, and turn attention into business growth.',
    items: [
      ['Google SEO & Search Visibility', 'Help your business get found in search.', '⌕'],
      ['Google Ads Management', 'Reach customers when they’re ready to act.', '↗'],
      ['Facebook & Instagram Ads', 'Connect with your audience where they scroll.', '◎'],
      ['Social Media Management', 'Build a consistent, active brand presence.', '♡'],
      ['Branding & Logo Design', 'Give your business a memorable identity.', '✦'],
      ['Content, Reels & Motion Design', 'Bring your story to life through creative content.', '▷'],
      ['Online Store Marketing', 'Turn product discovery into more sales.', '▧'],
      ['Marketing Automation & CRM', 'Keep your leads and customer journeys connected.', '⇄'],
      ['Blog Writing & Content Marketing', 'Share useful ideas that build trust over time.', '≡'],
      ['Website Tracking & Conversion Improvement', 'Understand visitors and improve their next step.', '⌁'],
      ['Practical AI Marketing Support', 'Make everyday marketing work smarter.', '✧'],
    ],
  },
  {
    id: 'solutions', title: 'Technology Solutions', label: 'Build better. Go further.', symbol: '</>',
    description: 'Create the digital tools, platforms, and experiences that move your business forward.',
    items: [
      ['Business Website Design & Development', 'A professional home for your business online.', '▣'],
      ['Online Store Development', 'Build a smooth shopping experience for your customers.', '▧'],
      ['Custom Software for Businesses', 'Tools built around the way your business works.', '▦'],
      ['Mobile App Development', 'Put your business in your customers’ hands.', '▯'],
      ['Customer Chatbots & Assistants', 'Help customers find answers and take action.', '☏'],
      ['Business Workflow Automation', 'Connect everyday tasks and free up your team.', '⇄'],
      ['UI/UX Design for Websites & Apps', 'Make every interaction clear and intuitive.', '◈'],
      ['Software & API Integrations', 'Get your systems working together.', '⌘'],
      ['Website Care & Maintenance', 'Keep your website updated and running smoothly.', '⚙'],
    ],
  },
];

export const offeringSlug = (title: string) => title
  .toLowerCase()
  .replace(/&/g, 'and')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');
