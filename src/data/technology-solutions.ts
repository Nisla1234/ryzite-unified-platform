import { divisions, offeringSlug } from './offerings';

type TechnologySolutionDetail = {
  challenges: string[];
  provides: string;
  capabilities: string[];
  benefits: string[];
  related: string[];
};

const detailContent: Record<string, TechnologySolutionDetail> = {
  'Business Website Design & Development': {
    challenges: [
      'Your website no longer reflects your business or the way you want to present it.',
      'Visitors have difficulty finding useful information or the next step.',
      'Your current site is difficult to update as your needs change.',
    ],
    provides: 'A business website planned around your brand, the information visitors need, and the actions you want the site to support.',
    capabilities: ['Page structure and content hierarchy', 'Responsive interface design', 'Contact paths and requested website features'],
    benefits: ['A clearer place to explain your products and services', 'A more direct path from visitor interest to enquiry', 'A website structure that can be reviewed as your needs change'],
    related: ['Online Store Development', 'UI/UX Design for Websites & Apps', 'Website Care & Maintenance'],
  },
  'Online Store Development': {
    challenges: [
      'Customers need a clearer way to browse products and understand what is available.',
      'Product, order, and checkout steps are spread across disconnected tools.',
      'Your online store needs to reflect the way your business handles orders.',
    ],
    provides: 'An online store planned around your products, customer shopping journey, and the order processes your business needs.',
    capabilities: ['Product and category structure', 'Shopping cart and checkout requirements', 'Store operations and integration planning'],
    benefits: ['A more organized way to present products online', 'A shopping journey designed around customer needs', 'Store workflows considered alongside the customer experience'],
    related: ['Business Website Design & Development', 'Software & API Integrations', 'Business Workflow Automation'],
  },
  'Custom Software for Businesses': {
    challenges: [
      'Generic tools do not fully match the way your business works.',
      'Teams rely on repeated manual steps across everyday tasks.',
      'Important information is spread across separate tools or processes.',
    ],
    provides: 'Custom software shaped around your business workflows, user needs, and the requirements agreed for the project.',
    capabilities: ['Workflow and requirements planning', 'Interfaces for intended user roles', 'Integration and information needs'],
    benefits: ['Tools considered in the context of your existing work', 'A clearer view of project scope and user needs', 'A software solution planned around specific business requirements'],
    related: ['Business Workflow Automation', 'Software & API Integrations', 'UI/UX Design for Websites & Apps'],
  },
  'Mobile App Development': {
    challenges: [
      'Customers or staff need a more convenient way to use a digital service on mobile.',
      'Important mobile tasks take too many steps or are hard to find.',
      'Your mobile experience needs to work alongside existing business processes.',
    ],
    provides: 'A mobile application planned around its intended users, core tasks, and the requirements of your business.',
    capabilities: ['Mobile user journeys and screen planning', 'Interface design for intended tasks', 'Required data and system connections'],
    benefits: ['A mobile experience focused on the tasks people need to complete', 'A clear plan for the app’s core functionality', 'Business requirements considered during design and development'],
    related: ['UI/UX Design for Websites & Apps', 'Custom Software for Businesses', 'Software & API Integrations'],
  },
  'Customer Chatbots & Assistants': {
    challenges: [
      'Customers need help finding answers or navigating common questions.',
      'The path from a question to a useful next step is unclear.',
      'Your team needs to define when an automated conversation should hand off to a person.',
    ],
    provides: 'Customer chatbots and assistants planned around your service information, common questions, and the conversation paths you want to support.',
    capabilities: ['Conversation flow and response planning', 'Knowledge content and common question mapping', 'Human handoff and next-step planning'],
    benefits: ['A more structured way to guide common customer questions', 'Responses planned around the information you provide', 'Clearer decisions about when a person should take over'],
    related: ['Business Workflow Automation', 'Business Website Design & Development', 'Software & API Integrations'],
  },
  'Business Workflow Automation': {
    challenges: [
      'Repeated manual tasks take time away from other business work.',
      'Information must be copied between steps or systems.',
      'It is difficult to see where a process can be made more consistent.',
    ],
    provides: 'Workflow automation planned around the repetitive tasks, process steps, and connected tools identified for your business.',
    capabilities: ['Workflow and task mapping', 'Automation triggers and action planning', 'Connections to relevant business tools'],
    benefits: ['A clearer view of how routine work moves between steps', 'Automation opportunities scoped around real processes', 'Existing tools considered when planning a workflow'],
    related: ['Custom Software for Businesses', 'Software & API Integrations', 'Customer Chatbots & Assistants'],
  },
  'UI/UX Design for Websites & Apps': {
    challenges: [
      'People have difficulty understanding where to go or what to do next.',
      'Important information is hard to find within the current interface.',
      'A digital product needs a more consistent experience across its screens.',
    ],
    provides: 'User interface and experience design focused on the people using your website or app and the tasks they need to complete.',
    capabilities: ['Information structure and user journeys', 'Interface layouts and interaction patterns', 'Usability and accessibility review'],
    benefits: ['A more understandable structure for key information', 'Interface decisions connected to user tasks', 'A consistent design direction for future development'],
    related: ['Business Website Design & Development', 'Mobile App Development', 'Custom Software for Businesses'],
  },
  'Software & API Integrations': {
    challenges: [
      'Business tools do not share information in the way your processes require.',
      'Teams repeat manual data entry between systems.',
      'The connections between applications are difficult to understand or maintain.',
    ],
    provides: 'Software and API integration planning to connect relevant systems and support the data flows required by your business.',
    capabilities: ['System and integration requirements review', 'API and data-flow planning', 'Error and handoff considerations'],
    benefits: ['A clearer picture of how business systems need to connect', 'Integration scope based on required information flows', 'Connected processes considered alongside existing tools'],
    related: ['Business Workflow Automation', 'Custom Software for Businesses', 'Online Store Development'],
  },
  'Website Care & Maintenance': {
    challenges: [
      'Your website needs ongoing attention as content and business needs change.',
      'It is unclear which updates or technical checks should be prioritized.',
      'Small website issues can be difficult to identify and address consistently.',
    ],
    provides: 'Website care and maintenance scoped around the updates, reviews, and technical support your website requires.',
    capabilities: ['Website updates and content changes', 'Technical review and issue assessment', 'Maintenance priorities based on your site needs'],
    benefits: ['A clearer plan for website upkeep', 'Changes considered against the existing site and its purpose', 'A way to discuss technical issues and maintenance needs'],
    related: ['Business Website Design & Development', 'Online Store Development', 'Software & API Integrations'],
  },
};

const solutions = divisions.find(({ id }) => id === 'solutions')?.items ?? [];

export const technologySolutions = solutions.map(([title, description, icon]) => ({
  slug: offeringSlug(title),
  title,
  description,
  icon,
  ...detailContent[title],
  related: detailContent[title].related.map((relatedTitle) => ({
    title: relatedTitle,
    slug: offeringSlug(relatedTitle),
  })),
}));

export const technologySolutionBySlug = Object.fromEntries(
  technologySolutions.map((solution) => [solution.slug, solution]),
);
