import { marketingServices } from './marketing-service-content';

type LocalizedCapability = {
  title: string;
  description: string;
};

type LocalizedService = {
  title: string;
  description: string;
  focus: string;
  capabilities: LocalizedCapability[];
};

type MarketingCopy = {
  pageTitle: string;
  metaDescription: string;
  heroLabel: string;
  heroVisualCaption: string;
  heroTitle: string;
  heroBodyOne: string;
  heroBodyTwo: string;
  heroCta: string;
  introTitle: string;
  introEyebrow: string;
  introBody: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesBody: string;
  exploreService: string;
  whyTitle: string;
  whyEyebrow: string;
  whyItems: { title: string; body: string }[];
  processTitle: string;
  processEyebrow: string;
  processIntro: string;
  processSteps: { title: string; body: string }[];
  faqTitle: string;
  faqEyebrow: string;
  faqs: { question: string; answer: string }[];
  closingTitle: string;
  closingEyebrow: string;
  closingDescription: string;
  closingCta: string;
  detailLabel: string;
  backToServices: string;
  detailHeading: string;
  detailSupporting: string;
  challengesTitle: string;
  challengesEyebrow: string;
  challengesIntro: string;
  challengeTemplates: string[];
  providesEyebrow: string;
  providesTitle: string;
  proposedScope: string;
  scopeDisclaimer: string;
  capabilitiesTitle: string;
  benefitsTitle: string;
  benefitsEyebrow: string;
  benefitTemplates: string[];
  approachTitle: string;
  approachEyebrow: string;
  approachIntro: string;
  approachSteps: { title: string; body: string }[];
  relatedTitle: string;
  relatedEyebrow: string;
  detailFaqTitle: string;
  detailFaqs: { question: string; answer: string }[];
  contactCtaTitle: string;
  contactCtaEyebrow: string;
  contactCtaDescription: string;
  contactCta: string;
  services: Record<string, LocalizedService>;
};

const englishServices = Object.fromEntries(
  marketingServices.map((service) => [service.slug, {
    title: service.title,
    description: service.description,
    focus: service.focus,
    capabilities: service.capabilities,
  }]),
);

export const marketingServiceTranslations: Record<'en' | 'ta' | 'si', MarketingCopy> = {
  en: {
    pageTitle: 'Marketing Services | RYZITE Digital Solutions',
    metaDescription: 'Explore RYZITE marketing services including SEO, digital advertising, social media, branding, content marketing, analytics, and AI-assisted marketing.',
    heroLabel: 'MARKETING SERVICES',
    heroVisualCaption: 'STRATEGY / CREATIVITY / GROWTH',
    heroTitle: 'Reach the Right Audience. Build Your Brand. Grow Your Business.',
    heroBodyOne: 'A strong digital presence is only the beginning. To grow, businesses need to connect with the right customers, communicate their value, and build meaningful relationships.',
    heroBodyTwo: 'At RYZITE, we combine creativity, digital strategy, technology, and data-driven thinking to help businesses strengthen their brands, improve visibility, and discover new growth opportunities.',
    heroCta: 'Explore Our Services',
    introTitle: 'Marketing Solutions Built Around Your Business.',
    introEyebrow: '01 / WHAT WE DO',
    introBody: 'From search engine optimization and digital advertising to social media, branding, content creation, and marketing automation, our services are designed around business goals.',
    servicesEyebrow: '02 / OUR SERVICES',
    servicesTitle: 'Explore Our Marketing Services',
    servicesBody: 'Explore the approved services below. Each service page describes areas to discuss; the right scope depends on your requirements.',
    exploreService: 'Explore Service',
    whyTitle: 'Creative Thinking. Connected Strategy. Business-Focused Solutions.',
    whyEyebrow: '03 / WHY RYZITE',
    whyItems: [
      { title: 'Business-Focused Planning', body: 'Start with your business goals, audience, and practical requirements.' },
      { title: 'Creative Communication', body: 'Shape clear, thoughtful messages around your brand and the people you want to reach.' },
      { title: 'Technology and Marketing Together', body: 'Consider how digital channels, content, and tools can work together.' },
      { title: 'Performance Awareness', body: 'Discuss useful signals for reviewing activity and informing next steps.' },
      { title: 'Flexible Digital Approaches', body: 'Shape the work around your priorities rather than assuming every business needs the same plan.' },
    ],
    processTitle: 'From Strategy to Meaningful Digital Growth.',
    processEyebrow: '04 / OUR APPROACH',
    processIntro: 'A considered process helps connect business priorities with practical marketing activity.',
    processSteps: [
      { title: 'Discover', body: 'Understand your business, goals, audience, and current digital presence.' },
      { title: 'Research', body: 'Explore the market context, customer needs, and relevant opportunities.' },
      { title: 'Strategize', body: 'Set priorities and agree a suitable direction and scope.' },
      { title: 'Create', body: 'Develop the content, campaign materials, or digital work included in the agreed scope.' },
      { title: 'Launch', body: 'Prepare and release the agreed work through the selected channels.' },
      { title: 'Measure & Improve', body: 'Review available information and discuss appropriate next steps.' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqEyebrow: '05 / FAQ',
    faqs: [
      { question: 'Which marketing service is right for my business?', answer: 'The most suitable marketing service depends on your business goals, target audience, existing digital presence, and available budget. RYZITE can help you explore different marketing approaches based on your requirements.' },
      { question: 'Can I combine multiple marketing services?', answer: 'Yes. Different marketing activities can be planned together depending on your business objectives. For example, search optimization, social media marketing, content creation, and digital advertising can support a connected marketing strategy.' },
      { question: 'Do I need a website before starting digital marketing?', answer: 'Not every marketing activity requires a website. However, a professional website can provide a central destination for business information, campaigns, customer enquiries, and service details.' },
      { question: 'How much do marketing services cost?', answer: 'Pricing depends on the selected services, project scope, campaign requirements, creative work, and advertising budgets. Contact RYZITE to discuss your requirements and available options.' },
      { question: 'How long does digital marketing take to show results?', answer: 'Results depend on the marketing channel, competition, business goals, budget, and implementation approach. Some activities may generate engagement sooner, while others require sustained effort. Specific results cannot be guaranteed.' },
    ],
    closingTitle: 'Your Brand Deserves to Be Seen.',
    closingEyebrow: 'RYZITE / YOUR NEXT STEP',
    closingDescription: 'Let’s explore how the right combination of digital strategy, creativity, and technology can support your business goals.',
    closingCta: 'Start a Project',
    detailLabel: 'MARKETING SERVICE',
    backToServices: 'All Marketing Services',
    detailHeading: 'A considered approach to {focus}.',
    detailSupporting: 'We can explore an approach that fits your business priorities, audience, and existing digital activity.',
    challengesTitle: 'Challenges This Service Can Help Address.',
    challengesEyebrow: '01 / BUSINESS CHALLENGES',
    challengesIntro: 'Common considerations for businesses exploring {focus} include:',
    challengeTemplates: [
      'Your goals and priorities for {focus} may need clearer definition.',
      'It can be difficult to coordinate {focus} with other customer-facing activity.',
      'You may need a practical way to review {focus} and consider next steps over time.',
    ],
    providesEyebrow: 'PROPOSED SCOPE',
    providesTitle: 'What We Could Explore Together.',
    proposedScope: 'Potential areas to discuss',
    scopeDisclaimer: 'The items below are proposed areas for discussion, not confirmed package inclusions. The exact scope depends on your requirements and is agreed before work begins.',
    capabilitiesTitle: 'Potential Service Capabilities.',
    benefitsTitle: 'Practical Business Benefits.',
    benefitsEyebrow: '02 / BUSINESS BENEFITS',
    benefitTemplates: [
      'A clearer view of your {focus} priorities and possible next steps.',
      'Work considered in the context of your audience, goals, and existing activity.',
      'A practical basis for reviewing the agreed work and discussing what comes next.',
    ],
    approachTitle: 'A Collaborative Approach.',
    approachEyebrow: '03 / OUR APPROACH',
    approachIntro: 'The stages below are adapted to the service and confirmed project scope.',
    approachSteps: [
      { title: 'Discovery', body: 'Understand your goals, audience, current activity, and requirements for {focus}.' },
      { title: 'Research and Planning', body: 'Review the context and identify a proposed scope for {focus} that fits your brief.' },
      { title: 'Strategy or Design', body: 'Agree priorities, messaging, structure, and the work to be explored.' },
      { title: 'Implementation', body: 'Develop the agreed deliverables while keeping the confirmed scope in view.' },
      { title: 'Review and Optimization', body: 'Review the work and available information, then discuss revisions or next steps.' },
      { title: 'Delivery and Improvement', body: 'Share the agreed outputs and decide whether ongoing review is appropriate.' },
    ],
    relatedTitle: 'Related Marketing Services.',
    relatedEyebrow: '04 / EXPLORE MORE',
    detailFaqTitle: 'Questions About This Service?',
    detailFaqs: [
      { question: 'What could be included in {title}?', answer: 'The items on this page are proposed areas to discuss. What is suitable depends on your goals and requirements, and any project scope is agreed before work begins.' },
      { question: 'Can this service be combined with other marketing work?', answer: 'Related activities can be considered together where they support your business objectives. Share the services you are considering so the scope can be discussed.' },
      { question: 'How do I discuss {title} with RYZITE?', answer: 'Use the contact form linked on this page. The service will be selected for you, and you can add your goals and questions to the project description.' },
    ],
    contactCtaTitle: 'Let’s Build Your Digital Growth Strategy.',
    contactCtaEyebrow: 'RYZITE / YOUR NEXT STEP',
    contactCtaDescription: 'Tell us about your business goals and explore how RYZITE can help you identify suitable digital solutions.',
    contactCta: 'Start a Project',
    services: englishServices,
  },
  ta: {
    pageTitle: 'சந்தைப்படுத்தல் சேவைகள் | RYZITE டிஜிட்டல் தீர்வுகள்',
    metaDescription: 'SEO, டிஜிட்டல் விளம்பரம், சமூக ஊடகம், பிராண்டிங், உள்ளடக்க சந்தைப்படுத்தல், பகுப்பாய்வு மற்றும் AI உதவியுடன் கூடிய சந்தைப்படுத்தல் உள்ளிட்ட RYZITE சேவைகளைப் பாருங்கள்.',
    heroLabel: 'சந்தைப்படுத்தல் சேவைகள்',
    heroVisualCaption: 'உத்தி / படைப்பாற்றல் / வளர்ச்சி',
    heroTitle: 'சரியான பார்வையாளர்களை அடையுங்கள். உங்கள் பிராண்டை உருவாக்குங்கள். வணிகத்தை வளர்த்திடுங்கள்.',
    heroBodyOne: 'வலுவான டிஜிட்டல் இருப்பு ஒரு தொடக்கம் மட்டுமே. வளர்ச்சிக்காக வணிகங்கள் சரியான வாடிக்கையாளர்களுடன் இணைந்து, தங்கள் மதிப்பைத் தெரிவித்து, அர்த்தமுள்ள உறவுகளை உருவாக்க வேண்டும்.',
    heroBodyTwo: 'RYZITE-இல் படைப்பாற்றல், டிஜிட்டல் உத்தி, தொழில்நுட்பம் மற்றும் தரவு சார்ந்த சிந்தனையை ஒன்றிணைத்து பிராண்டை வலுப்படுத்தவும், தெரிவுநிலையை மேம்படுத்தவும், புதிய வளர்ச்சி வாய்ப்புகளை ஆராயவும் உதவுகிறோம்.',
    heroCta: 'சேவைகளைப் பாருங்கள்',
    introTitle: 'உங்கள் வணிகத்தை மையமாகக் கொண்ட சந்தைப்படுத்தல் தீர்வுகள்.',
    introEyebrow: '01 / நாங்கள் செய்வது',
    introBody: 'தேடுபொறி மேம்பாடு மற்றும் டிஜிட்டல் விளம்பரத்திலிருந்து சமூக ஊடகம், பிராண்டிங், உள்ளடக்க உருவாக்கம் மற்றும் சந்தைப்படுத்தல் தானியக்கம் வரை, வணிக இலக்குகளை மையமாகக் கொண்டு சேவைகள் வடிவமைக்கப்படுகின்றன.',
    servicesEyebrow: '02 / எங்கள் சேவைகள்',
    servicesTitle: 'எங்கள் சந்தைப்படுத்தல் சேவைகளை ஆராயுங்கள்',
    servicesBody: 'அங்கீகரிக்கப்பட்ட சேவைகளை கீழே பாருங்கள். ஒவ்வொரு சேவைப் பக்கமும் விவாதிக்கக்கூடிய பகுதிகளை விளக்குகிறது; பொருத்தமான பணிவரம்பு உங்கள் தேவைகளைப் பொறுத்தது.',
    exploreService: 'சேவையைப் பாருங்கள்',
    whyTitle: 'படைப்புச் சிந்தனை. இணைந்த உத்தி. வணிகத்தை மையமாகக் கொண்ட தீர்வுகள்.',
    whyEyebrow: '03 / ஏன் RYZITE',
    whyItems: [
      { title: 'வணிகத்தை மையமாகக் கொண்ட திட்டமிடல்', body: 'உங்கள் வணிக இலக்குகள், பார்வையாளர்கள் மற்றும் நடைமுறைத் தேவைகளிலிருந்து தொடங்குங்கள்.' },
      { title: 'படைப்பாற்றலான தொடர்பாடல்', body: 'உங்கள் பிராண்டையும் நீங்கள் சென்றடைய விரும்பும் மக்களையும் மையமாகக் கொண்டு தெளிவான செய்திகளை உருவாக்குங்கள்.' },
      { title: 'தொழில்நுட்பமும் சந்தைப்படுத்தலும் ஒன்றாக', body: 'டிஜிட்டல் சேனல்கள், உள்ளடக்கம் மற்றும் கருவிகள் எவ்வாறு இணைந்து செயல்படலாம் என்பதைக் கவனியுங்கள்.' },
      { title: 'செயல்திறன் பற்றிய விழிப்புணர்வு', body: 'செயல்பாடுகளை மதிப்பாய்வு செய்து அடுத்த படிகளைத் தீர்மானிக்க உதவும் தகவல்களைப் பற்றி பேசுங்கள்.' },
      { title: 'நெகிழ்வான டிஜிட்டல் அணுகுமுறைகள்', body: 'ஒவ்வொரு வணிகத்திற்கும் ஒரே திட்டம் தேவை எனக் கருதாமல், உங்கள் முன்னுரிமைகளுக்கு ஏற்ப பணியை அமைக்குங்கள்.' },
    ],
    processTitle: 'உத்தியிலிருந்து அர்த்தமுள்ள டிஜிட்டல் வளர்ச்சி வரை.',
    processEyebrow: '04 / எங்கள் அணுகுமுறை',
    processIntro: 'கவனமான செயல்முறை வணிக முன்னுரிமைகளையும் நடைமுறை சந்தைப்படுத்தல் செயல்பாடுகளையும் இணைக்க உதவுகிறது.',
    processSteps: [
      { title: 'கண்டறிதல்', body: 'உங்கள் வணிகம், இலக்குகள், பார்வையாளர்கள் மற்றும் தற்போதைய டிஜிட்டல் இருப்பைப் புரிந்துகொள்கிறோம்.' },
      { title: 'ஆராய்ச்சி', body: 'சந்தைச் சூழல், வாடிக்கையாளர் தேவைகள் மற்றும் தொடர்புடைய வாய்ப்புகளை ஆராய்கிறோம்.' },
      { title: 'உத்தி', body: 'முன்னுரிமைகளைத் தீர்மானித்து பொருத்தமான திசை மற்றும் பணிவரம்பை ஒப்புக்கொள்கிறோம்.' },
      { title: 'உருவாக்கம்', body: 'ஒப்புக்கொண்ட பணிவரம்பில் உள்ள உள்ளடக்கம், பிரச்சாரப் பொருட்கள் அல்லது டிஜிட்டல் பணியை உருவாக்குகிறோம்.' },
      { title: 'வெளியீடு', body: 'தேர்ந்தெடுக்கப்பட்ட சேனல்கள் வழியாக ஒப்புக்கொண்ட பணியைத் தயாரித்து வெளியிடுகிறோம்.' },
      { title: 'அளவீடு மற்றும் மேம்பாடு', body: 'கிடைக்கும் தகவல்களை மதிப்பாய்வு செய்து பொருத்தமான அடுத்த படிகளைப் பேசுகிறோம்.' },
    ],
    faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    faqEyebrow: '05 / கேள்விகள்',
    faqs: [
      { question: 'என் வணிகத்திற்கு எந்த சந்தைப்படுத்தல் சேவை பொருத்தமானது?', answer: 'பொருத்தமான சேவை உங்கள் வணிக இலக்குகள், இலக்கு பார்வையாளர்கள், தற்போதைய டிஜிட்டல் இருப்பு மற்றும் கிடைக்கும் பட்ஜெட்டைப் பொறுத்தது. உங்கள் தேவைகளின் அடிப்படையில் வெவ்வேறு அணுகுமுறைகளை ஆராய RYZITE உதவும்.' },
      { question: 'பல சந்தைப்படுத்தல் சேவைகளை இணைக்கலாமா?', answer: 'ஆம். வணிக நோக்கங்களைப் பொறுத்து வெவ்வேறு செயல்பாடுகளை ஒன்றாகத் திட்டமிடலாம். உதாரணமாக, தேடல் மேம்பாடு, சமூக ஊடக சந்தைப்படுத்தல், உள்ளடக்க உருவாக்கம் மற்றும் டிஜிட்டல் விளம்பரம் இணைந்த உத்திக்கு ஆதரவளிக்கலாம்.' },
      { question: 'டிஜிட்டல் சந்தைப்படுத்தலைத் தொடங்க இணையதளம் தேவையா?', answer: 'ஒவ்வொரு சந்தைப்படுத்தல் செயல்பாட்டிற்கும் இணையதளம் அவசியமில்லை. இருப்பினும், தொழில்முறை இணையதளம் வணிகத் தகவல், பிரச்சாரங்கள், வாடிக்கையாளர் விசாரணைகள் மற்றும் சேவை விவரங்களுக்கான மைய இடமாக அமையலாம்.' },
      { question: 'சந்தைப்படுத்தல் சேவைகளுக்கான செலவு எவ்வளவு?', answer: 'தேர்ந்தெடுக்கப்படும் சேவைகள், திட்ட வரம்பு, பிரச்சாரத் தேவைகள், படைப்புப் பணி மற்றும் விளம்பர பட்ஜெட்டைப் பொறுத்து விலை மாறும். உங்கள் தேவைகள் மற்றும் விருப்பங்களைப் பற்றி RYZITE-ஐத் தொடர்புகொள்ளுங்கள்.' },
      { question: 'டிஜிட்டல் சந்தைப்படுத்தல் முடிவுகளைப் பார்க்க எவ்வளவு காலம் ஆகும்?', answer: 'முடிவுகள் சேனல், போட்டி, வணிக இலக்குகள், பட்ஜெட் மற்றும் செயலாக்க அணுகுமுறையைப் பொறுத்தது. சில செயல்பாடுகள் விரைவில் ஈடுபாட்டை உருவாக்கலாம்; மற்றவற்றிற்கு தொடர்ந்து முயற்சி தேவை. குறிப்பிட்ட முடிவுகளுக்கு உத்தரவாதம் அளிக்க முடியாது.' },
    ],
    closingTitle: 'உங்கள் பிராண்ட் கவனிக்கப்பட வேண்டியது.',
    closingEyebrow: 'RYZITE / அடுத்த படி',
    closingDescription: 'டிஜிட்டல் உத்தி, படைப்பாற்றல் மற்றும் தொழில்நுட்பத்தின் சரியான இணைப்பு உங்கள் வணிக இலக்குகளுக்கு எவ்வாறு ஆதரவளிக்கும் என்பதை ஆராய்வோம்.',
    closingCta: 'திட்டத்தைத் தொடங்குங்கள்',
    detailLabel: 'சந்தைப்படுத்தல் சேவை',
    backToServices: 'அனைத்து சந்தைப்படுத்தல் சேவைகளும்',
    detailHeading: '{focus} குறித்து கவனமான அணுகுமுறை.',
    detailSupporting: 'உங்கள் வணிக முன்னுரிமைகள், பார்வையாளர்கள் மற்றும் தற்போதைய டிஜிட்டல் செயல்பாடுகளுக்குப் பொருந்தும் அணுகுமுறையை ஆராயலாம்.',
    challengesTitle: 'இந்தச் சேவை கவனிக்க உதவக்கூடிய சவால்கள்.',
    challengesEyebrow: '01 / வணிகச் சவால்கள்',
    challengesIntro: '{focus} குறித்து ஆராயும் வணிகங்கள் பொதுவாகக் கருதும் அம்சங்கள்:',
    challengeTemplates: [
      '{focus} தொடர்பான உங்கள் இலக்குகள் மற்றும் முன்னுரிமைகளுக்கு மேலும் தெளிவு தேவைப்படலாம்.',
      'மற்ற வாடிக்கையாளர் தொடர்புச் செயல்பாடுகளுடன் {focus}-ஐ ஒருங்கிணைப்பது சவாலாக இருக்கலாம்.',
      '{focus}-ஐ மதிப்பாய்வு செய்து காலப்போக்கில் அடுத்த படிகளைத் தீர்மானிக்க நடைமுறை வழி தேவைப்படலாம்.',
    ],
    providesEyebrow: 'முன்மொழியப்பட்ட பணிவரம்பு',
    providesTitle: 'ஒன்றாக ஆராயக்கூடியவை.',
    proposedScope: 'விவாதிக்கக்கூடிய சாத்தியமான பகுதிகள்',
    scopeDisclaimer: 'கீழே உள்ளவை விவாதத்திற்கான முன்மொழியப்பட்ட பகுதிகள்; உறுதிசெய்யப்பட்ட தொகுப்பு சேர்க்கைகள் அல்ல. சரியான பணிவரம்பு உங்கள் தேவைகளைப் பொறுத்து, பணி தொடங்கும் முன் ஒப்புக்கொள்ளப்படும்.',
    capabilitiesTitle: 'சாத்தியமான சேவைத் திறன்கள்.',
    benefitsTitle: 'நடைமுறை வணிக நன்மைகள்.',
    benefitsEyebrow: '02 / வணிக நன்மைகள்',
    benefitTemplates: [
      '{focus} முன்னுரிமைகள் மற்றும் சாத்தியமான அடுத்த படிகள் குறித்த தெளிவு.',
      'உங்கள் பார்வையாளர்கள், இலக்குகள் மற்றும் தற்போதைய செயல்பாடுகளின் சூழலில் பரிசீலிக்கப்படும் பணி.',
      'ஒப்புக்கொண்ட பணியை மதிப்பாய்வு செய்து அடுத்ததைப் பேசுவதற்கான நடைமுறை அடிப்படை.',
    ],
    approachTitle: 'கூட்டாகச் செயல்படும் அணுகுமுறை.',
    approachEyebrow: '03 / எங்கள் அணுகுமுறை',
    approachIntro: 'கீழே உள்ள கட்டங்கள் சேவைக்கும் ஒப்புக்கொள்ளப்பட்ட திட்ட வரம்பிற்கும் ஏற்ப மாற்றப்படும்.',
    approachSteps: [
      { title: 'கண்டறிதல்', body: '{focus} தொடர்பான உங்கள் இலக்குகள், பார்வையாளர்கள், தற்போதைய செயல்பாடுகள் மற்றும் தேவைகளைப் புரிந்துகொள்கிறோம்.' },
      { title: 'ஆராய்ச்சி மற்றும் திட்டமிடல்', body: 'சூழலை மதிப்பாய்வு செய்து உங்கள் விளக்கத்திற்குப் பொருந்தும் முன்மொழியப்பட்ட பணிவரம்பை அடையாளம் காண்கிறோம்.' },
      { title: 'உத்தி அல்லது வடிவமைப்பு', body: 'முன்னுரிமைகள், செய்தி, அமைப்பு மற்றும் ஆராய வேண்டிய பணியை ஒப்புக்கொள்கிறோம்.' },
      { title: 'செயலாக்கம்', body: 'உறுதிசெய்யப்பட்ட பணிவரம்பைக் கருத்தில் கொண்டு ஒப்புக்கொண்ட வெளியீடுகளை உருவாக்குகிறோம்.' },
      { title: 'மதிப்பாய்வு மற்றும் மேம்பாடு', body: 'பணியையும் கிடைக்கும் தகவல்களையும் மதிப்பாய்வு செய்து திருத்தங்கள் அல்லது அடுத்த படிகளைப் பேசுகிறோம்.' },
      { title: 'வழங்கல் மற்றும் மேம்பாடு', body: 'ஒப்புக்கொண்ட வெளியீடுகளைப் பகிர்ந்து தொடர்ந்து மதிப்பாய்வு பொருத்தமானதா எனத் தீர்மானிக்கிறோம்.' },
    ],
    relatedTitle: 'தொடர்புடைய சந்தைப்படுத்தல் சேவைகள்.',
    relatedEyebrow: '04 / மேலும் ஆராயுங்கள்',
    detailFaqTitle: 'இந்தச் சேவை குறித்து கேள்விகள் உள்ளனவா?',
    detailFaqs: [
      { question: '{title}-இல் என்னென்ன இருக்கலாம்?', answer: 'இந்தப் பக்கத்தில் உள்ளவை விவாதிக்கக்கூடிய முன்மொழியப்பட்ட பகுதிகள். பொருத்தமானவை உங்கள் இலக்குகள் மற்றும் தேவைகளைப் பொறுத்தது; எந்தத் திட்டப் பணிவரம்பும் பணி தொடங்கும் முன் ஒப்புக்கொள்ளப்படும்.' },
      { question: 'இந்தச் சேவையை மற்ற சந்தைப்படுத்தல் பணிகளுடன் இணைக்கலாமா?', answer: 'உங்கள் வணிக நோக்கங்களுக்கு ஆதரவாக இருந்தால் தொடர்புடைய செயல்பாடுகளை ஒன்றாகக் கருதலாம். நீங்கள் பரிசீலிக்கும் சேவைகளைப் பகிர்ந்து பணிவரம்பைப் பற்றி பேசுங்கள்.' },
      { question: '{title} பற்றி RYZITE-உடன் எப்படிப் பேசுவது?', answer: 'இந்தப் பக்கத்தில் உள்ள தொடர்புப் படிவத்தைப் பயன்படுத்துங்கள். சேவை முன்கூட்டியே தேர்ந்தெடுக்கப்படும்; திட்ட விளக்கத்தில் உங்கள் இலக்குகளையும் கேள்விகளையும் சேர்க்கலாம்.' },
    ],
    contactCtaTitle: 'உங்கள் டிஜிட்டல் வளர்ச்சி உத்தியை உருவாக்குவோம்.',
    contactCtaEyebrow: 'RYZITE / அடுத்த படி',
    contactCtaDescription: 'உங்கள் வணிக இலக்குகளைப் பகிர்ந்து, பொருத்தமான டிஜிட்டல் தீர்வுகளை அடையாளம் காண RYZITE எவ்வாறு உதவலாம் என்பதை ஆராயுங்கள்.',
    contactCta: 'திட்டத்தைத் தொடங்குங்கள்',
    services: {
      'google-seo-and-search-visibility': { title: 'கூகுள் SEO மற்றும் தேடல் தெரிவுநிலை', description: 'தேடலில் உங்கள் வணிகம் கண்டறியப்பட உதவுங்கள்.', focus: 'தேடல் தெரிவுநிலை', capabilities: [{ title: 'தேடல் இருப்பு மதிப்பாய்வு', description: 'தற்போதைய இணையதளத்தையும் தேடல் இருப்பையும் மதிப்பாய்வு செய்து விவாதிக்க வேண்டிய பகுதிகளை அடையாளம் காணுங்கள்.' }, { title: 'தேடல் தலைப்பு திட்டமிடல்', description: 'வணிகத்துடன் தொடர்புடைய தேடல் தலைப்புகளை ஆராயுங்கள்.' }, { title: 'பக்க உள்ளடக்க வழிகாட்டல்', description: 'பார்வையாளர்களுக்கும் தேடுபொறிகளுக்கும் பக்க அமைப்பு மற்றும் உள்ளடக்கத் தெளிவைக் கவனியுங்கள்.' }, { title: 'மதிப்பாய்வு மற்றும் மேம்பாடு', description: 'மதிப்பாய்வு செய்ய வேண்டிய தகவல்களையும் அடுத்த படிகளையும் ஒப்புக்கொள்ளுங்கள்.' }] },
      'google-ads-management': { title: 'கூகுள் விளம்பர மேலாண்மை', description: 'செயல்படத் தயாராக உள்ள வாடிக்கையாளர்களைச் சென்றடையுங்கள்.', focus: 'கூகுள் விளம்பரம்', capabilities: [{ title: 'பிரச்சார இலக்கு திட்டமிடல்', description: 'பார்வையாளர்கள், நோக்கம் மற்றும் பிரச்சாரம் ஆதரிக்க வேண்டிய செயல்பாட்டைத் தெளிவுபடுத்துங்கள்.' }, { title: 'முக்கியச் சொல் மற்றும் பார்வையாளர் ஆய்வு', description: 'விளம்பரத் தேவையுடன் தொடர்புடைய தேடல் சொற்களையும் பார்வையாளர் அம்சங்களையும் ஆராயுங்கள்.' }, { title: 'விளம்பரம் மற்றும் இறங்குபக்க இணைப்பு', description: 'பிரச்சாரச் செய்தி அதன் இலக்குப் பக்கத்துடன் எவ்வாறு இணைகிறது என்பதை மதிப்பாய்வு செய்யுங்கள்.' }, { title: 'பிரச்சார மதிப்பாய்வு', description: 'கிடைக்கும் பிரச்சாரத் தகவல்களையும் சாத்தியமான மாற்றங்களையும் விவாதியுங்கள்.' }] },
      'facebook-and-instagram-ads': { title: 'ஃபேஸ்புக் மற்றும் இன்ஸ்டாகிராம் விளம்பரங்கள்', description: 'உங்கள் பார்வையாளர்கள் இருக்கும் தளங்களில் அவர்களுடன் இணையுங்கள்.', focus: 'ஃபேஸ்புக் மற்றும் இன்ஸ்டாகிராம் விளம்பரம்', capabilities: [{ title: 'பிரச்சார நோக்கத் திட்டமிடல்', description: 'பிரச்சாரம் தெரிவிக்க வேண்டிய செய்தியையும் ஆதரிக்க வேண்டிய செயலையும் தெளிவுபடுத்துங்கள்.' }, { title: 'பார்வையாளர் கருத்துகள்', description: 'தேவைக்குப் பொருந்தும் பார்வையாளர் குழுக்கள் மற்றும் இலக்கு அம்சங்களை ஆராயுங்கள்.' }, { title: 'படைப்புத் திசை', description: 'பிரச்சாரச் செய்தியை உரையும் காட்சிகளும் எவ்வாறு தெரிவிக்கலாம் எனத் திட்டமிடுங்கள்.' }, { title: 'பிரச்சார மதிப்பாய்வு', description: 'கிடைக்கும் பிரச்சாரத் தகவல்களை மதிப்பாய்வு செய்து மேம்பாடுகளைப் பேசுங்கள்.' }] },
      'social-media-management': { title: 'சமூக ஊடக மேலாண்மை', description: 'நிலையான, செயல்பாட்டிலுள்ள பிராண்ட் இருப்பை உருவாக்குங்கள்.', focus: 'சமூக ஊடக இருப்பு', capabilities: [{ title: 'சேனல் மற்றும் சுயவிவர மதிப்பாய்வு', description: 'தேர்ந்தெடுக்கப்பட்ட சேனல்கள், சுயவிவரங்கள் மற்றும் தற்போதைய தொடர்பாடல் முறையை மதிப்பாய்வு செய்யுங்கள்.' }, { title: 'உள்ளடக்கத் தலைப்புகள்', description: 'பிராண்ட், பார்வையாளர்கள் மற்றும் வணிக முன்னுரிமைகளுக்குப் பொருந்தும் தலைப்புகளை ஆராயுங்கள்.' }, { title: 'வெளியீட்டுத் திட்டம்', description: 'நடைமுறை உள்ளடக்கத் திட்டத்தையும் அதற்குத் தேவையான மதிப்பாய்வையும் வரையறுங்கள்.' }, { title: 'சமூகத் தொடர்பு வழிகாட்டல்', description: 'பதிலளிக்கும் வழிகாட்டலையும் விசாரணைகளை அடுத்த சரியான படிக்கு வழிநடத்துவதையும் பேசுங்கள்.' }] },
      'branding-and-logo-design': { title: 'பிராண்டிங் மற்றும் லோகோ வடிவமைப்பு', description: 'நினைவில் நிற்கும் வணிக அடையாளத்தை உருவாக்குங்கள்.', focus: 'பிராண்ட் அடையாளம்', capabilities: [{ title: 'பிராண்ட் திசை', description: 'வணிகம், பார்வையாளர்கள் மற்றும் அடையாளம் தெரிவிக்க வேண்டிய பண்புகளை ஆராயுங்கள்.' }, { title: 'காட்சி அடையாளக் கருத்துகள்', description: 'ஒப்புக்கொண்ட விளக்கத்தின் அடிப்படையில் விவாதிக்கக்கூடிய காட்சி அணுகுமுறைகளை உருவாக்குங்கள்.' }, { title: 'லோகோ மற்றும் துணைச் சொத்துகள்', description: 'ஒப்புக்கொள்ளப்பட்ட திட்டத் தேவைகளுக்குப் பொருந்தும் அடையாளச் சொத்துகளைத் திட்டமிடுங்கள்.' }, { title: 'பயன்பாட்டு வழிகாட்டல்', description: 'தேர்ந்தெடுக்கப்பட்ட சேனல்களில் அடையாளத்தை ஒரேமாதிரியாகப் பயன்படுத்துவது பற்றி பேசுங்கள்.' }] },
      'content-reels-and-motion-design': { title: 'உள்ளடக்கம், ரீல்ஸ் மற்றும் மோஷன் வடிவமைப்பு', description: 'படைப்பாற்றலான உள்ளடக்கத்தின் மூலம் உங்கள் கதையைச் சொல்லுங்கள்.', focus: 'டிஜிட்டல் உள்ளடக்கம் மற்றும் இயக்க வடிவமைப்பு', capabilities: [{ title: 'உள்ளடக்கக் கருத்துகள்', description: 'செய்தி, பார்வையாளர்கள் மற்றும் சேனலுக்குப் பொருந்தும் வடிவங்களையும் கருத்துகளையும் ஆராயுங்கள்.' }, { title: 'குறுகிய காணொளித் திட்டமிடல்', description: 'விளக்கத்திற்கும் கிடைக்கும் சொத்துகளுக்கும் ஏற்ப குறுகிய காணொளி அல்லது ரீலைத் திட்டமிடுங்கள்.' }, { title: 'மோஷன் வடிவமைப்புத் திசை', description: 'உள்ளடக்கத்திற்கு இயக்கமும் காட்சி கூறுகளும் எவ்வாறு ஆதரவளிக்கலாம் எனக் கருதுங்கள்.' }, { title: 'உள்ளடக்க மதிப்பாய்வு', description: 'ஒப்புக்கொண்ட செய்தி, வடிவம் மற்றும் சேனலுடன் உள்ளடக்கத்தை மதிப்பாய்வு செய்யுங்கள்.' }] },
      'online-store-marketing': { title: 'ஆன்லைன் ஸ்டோர் சந்தைப்படுத்தல்', description: 'தயாரிப்பு ஆர்வத்தை வாங்கும் வாய்ப்பாக மாற்றுங்கள்.', focus: 'ஆன்லைன் ஸ்டோர் சந்தைப்படுத்தல்', capabilities: [{ title: 'ஸ்டோர் மற்றும் தயாரிப்பு மதிப்பாய்வு', description: 'ஸ்டோரில் தயாரிப்புகளும் முக்கியத் தகவல்களும் எவ்வாறு காட்டப்படுகின்றன என்பதை மதிப்பாய்வு செய்யுங்கள்.' }, { title: 'பிரச்சாரம் மற்றும் உள்ளடக்கத் திட்டமிடல்', description: 'தயாரிப்பு செய்திகளை தொடர்புடைய சந்தைப்படுத்தல் செயல்பாடுகளுடன் இணைப்பதை ஆராயுங்கள்.' }, { title: 'வாடிக்கையாளர் பயண மதிப்பாய்வு', description: 'தயாரிப்பு கண்டறிதலிலிருந்து ஸ்டோர் செயல்பாடுகள் வரை உள்ள படிகளைப் பரிசீலியுங்கள்.' }, { title: 'அளவீடு குறித்த கலந்துரையாடல்', description: 'கிடைக்கும் பட்சத்தில் மதிப்பாய்வு செய்ய வேண்டிய ஸ்டோர் மற்றும் பிரச்சாரத் தகவல்களை அடையாளம் காணுங்கள்.' }] },
      'marketing-automation-and-crm': { title: 'சந்தைப்படுத்தல் தானியக்கம் மற்றும் CRM', description: 'வாடிக்கையாளர் பயணங்களையும் விசாரணைகளையும் இணைக்குங்கள்.', focus: 'சந்தைப்படுத்தல் தானியக்கம் மற்றும் CRM', capabilities: [{ title: 'வாடிக்கையாளர் பயண வரைபடம்', description: 'தொடர்புடைய வாடிக்கையாளர் நிலைகளையும் ஒவ்வொரு கட்டத்திலும் பயன்படும் தகவல்களையும் வரையறுங்கள்.' }, { title: 'CRM தேவைகள் மதிப்பாய்வு', description: 'தொடர்பு விவரங்கள், குழுப் பணிச்சூழல் மற்றும் CRM அமைப்புத் தேவைகளைப் பேசுங்கள்.' }, { title: 'தானியக்க வாய்ப்புகள்', description: 'பணிவரம்பாகக் கருதக்கூடிய தொடர்ச்சியான தொடர்பு அல்லது ஒப்படைப்பு படிகளை அடையாளம் காணுங்கள்.' }, { title: 'பணிச்சூழல் மதிப்பாய்வு', description: 'முன்மொழியப்பட்ட பயணத்தை மதிப்பாய்வு செய்து பணிச்சூழலை எவ்வாறு சரிபார்ப்பது என ஒப்புக்கொள்ளுங்கள்.' }] },
      'blog-writing-and-content-marketing': { title: 'வலைப்பதிவு எழுத்து மற்றும் உள்ளடக்க சந்தைப்படுத்தல்', description: 'நம்பிக்கையை வளர்க்கும் பயனுள்ள கருத்துகளைப் பகிருங்கள்.', focus: 'வலைப்பதிவு எழுத்து மற்றும் உள்ளடக்க சந்தைப்படுத்தல்', capabilities: [{ title: 'தலைப்பு மற்றும் பார்வையாளர் திட்டமிடல்', description: 'பார்வையாளர்கள் மற்றும் வணிக முன்னுரிமைகளுடன் தொடர்புடைய பயனுள்ள தலைப்புகளை ஆராயுங்கள்.' }, { title: 'தலையங்கத் திட்டமிடல்', description: 'தேர்ந்தெடுக்கப்பட்ட உள்ளடக்கத்தை மதிப்பாய்வு செய்து தயாரிப்பதற்கான நடைமுறை வரிசையை உருவாக்குங்கள்.' }, { title: 'கட்டுரை உருவாக்கம்', description: 'ஒப்புக்கொண்ட விளக்கம், ஆதாரங்கள் மற்றும் மதிப்பாய்வு செயல்முறையின் அடிப்படையில் எழுதுங்கள்.' }, { title: 'உள்ளடக்க இணைப்பு', description: 'கட்டுரைகள் தொடர்புடைய சேவைகள், பக்கங்கள் மற்றும் அடுத்த படிகளுடன் எவ்வாறு இணைகின்றன எனக் கருதுங்கள்.' }] },
      'website-tracking-and-conversion-improvement': { title: 'இணையதள கண்காணிப்பு மற்றும் மாற்ற மேம்பாடு', description: 'பார்வையாளர்களைப் புரிந்து அவர்கள் அடுத்த படியை மேம்படுத்துங்கள்.', focus: 'இணையதள கண்காணிப்பு மற்றும் மாற்ற மேம்பாடு', capabilities: [{ title: 'அளவீட்டுத் தேவைகள்', description: 'திட்டத்திற்கு முக்கியமான இணையதளச் செயல்பாடுகளையும் வணிகக் கேள்விகளையும் தெளிவுபடுத்துங்கள்.' }, { title: 'கண்காணிப்புத் திட்டம்', description: 'செயலாக்கம் அல்லது மதிப்பாய்வுக்கான நிகழ்வுகள் மற்றும் அளவீட்டுத் தேவைகளை வரையறுங்கள்.' }, { title: 'வாடிக்கையாளர் பயண மதிப்பாய்வு', description: 'முக்கியப் பக்கங்களையும் பார்வையாளர்களுக்குக் கிடைக்கும் படிகளையும் மதிப்பாய்வு செய்யுங்கள்.' }, { title: 'மேம்பாட்டுப் பரிந்துரைகள்', description: 'கிடைக்கும் தகவல்களின் அடிப்படையில் சாத்தியமான மாற்றங்களையும் அடுத்த மதிப்பாய்வையும் விவாதியுங்கள்.' }] },
      'practical-ai-marketing-support': { title: 'நடைமுறை AI சந்தைப்படுத்தல் ஆதரவு', description: 'அன்றாட சந்தைப்படுத்தல் பணிகளை மேலும் திறமையாகச் செய்யுங்கள்.', focus: 'AI உதவியுடனான சந்தைப்படுத்தல் பணிச்சூழல்கள்', capabilities: [{ title: 'பணிச்சூழல் கண்டறிதல்', description: 'தொடர்ச்சியாகச் செய்யப்படும் சந்தைப்படுத்தல் பணிகளையும் உதவி பயனுள்ளதாக இருக்கக்கூடிய இடங்களையும் ஆராயுங்கள்.' }, { title: 'பயன்பாட்டு நோக்கத் திட்டமிடல்', description: 'நடைமுறை நோக்கம், அதன் உள்ளீடுகள் மற்றும் பயன்பாட்டிற்கு முன் தேவையான மதிப்பாய்வை வரையறுங்கள்.' }, { title: 'மனித மதிப்பாய்வு', description: 'துல்லியம், பிராண்ட் குரல், தனியுரிமை மற்றும் மனித ஒப்புதலைக் கவனத்தில் கொள்ளுங்கள்.' }, { title: 'பணிச்சூழல் மதிப்பீடு', description: 'முன்மொழியப்பட்ட பணிச்சூழல் அந்தச் செயலுக்கு பயனுள்ளதாகவும் பொருத்தமானதாகவும் உள்ளதா என மதிப்பாய்வு செய்யுங்கள்.' }] },
    },
  },
  si: {
    pageTitle: 'අලෙවිකරණ සේවා | RYZITE ඩිජිටල් විසඳුම්',
    metaDescription: 'SEO, ඩිජිටල් ප්‍රචාරණ, සමාජ මාධ්‍ය, සන්නාමකරණය, අන්තර්ගත අලෙවිකරණය, විශ්ලේෂණ සහ AI සහාය ඇති අලෙවිකරණය ඇතුළු RYZITE සේවා ගවේෂණය කරන්න.',
    heroLabel: 'අලෙවිකරණ සේවා',
    heroVisualCaption: 'උපායමාර්ගය / නිර්මාණශීලීත්වය / වර්ධනය',
    heroTitle: 'නිවැරදි ප්‍රේක්ෂකයන් වෙත ළඟා වන්න. ඔබේ සන්නාමය ගොඩනඟන්න. ව්‍යාපාරය වර්ධනය කරන්න.',
    heroBodyOne: 'ශක්තිමත් ඩිජිටල් පැවැත්මක් ආරම්භය පමණි. වර්ධනය වීමට ව්‍යාපාර නිවැරදි ගනුදෙනුකරුවන් සමඟ සම්බන්ධ වී, තම වටිනාකම සන්නිවේදනය කර, අර්ථවත් සබඳතා ගොඩනැගිය යුතුය.',
    heroBodyTwo: 'RYZITE හි නිර්මාණශීලීත්වය, ඩිජිටල් උපායමාර්ගය, තාක්ෂණය සහ දත්ත මත පදනම් වූ සිතුවිලි එක් කර සන්නාම ශක්තිමත් කිරීමට, දෘශ්‍යතාව වැඩිදියුණු කිරීමට සහ නව වර්ධන අවස්ථා සොයා බැලීමට සහාය වෙමු.',
    heroCta: 'අපගේ සේවා බලන්න',
    introTitle: 'ඔබේ ව්‍යාපාරය වටා සැකසූ අලෙවිකරණ විසඳුම්.',
    introEyebrow: '01 / අප කරන දේ',
    introBody: 'සෙවුම් යන්ත්‍ර ප්‍රශස්තකරණය සහ ඩිජිටල් ප්‍රචාරණයේ සිට සමාජ මාධ්‍ය, සන්නාමකරණය, අන්තර්ගත නිර්මාණය සහ අලෙවිකරණ ස්වයංක්‍රීයකරණය දක්වා අපගේ සේවා ව්‍යාපාර ඉලක්ක මත සැලසුම් කර ඇත.',
    servicesEyebrow: '02 / අපගේ සේවා',
    servicesTitle: 'අපගේ අලෙවිකරණ සේවා ගවේෂණය කරන්න',
    servicesBody: 'අනුමත සේවා පහතින් බලන්න. එක් එක් සේවා පිටුව සාකච්ඡා කළ හැකි ක්ෂේත්‍ර විස්තර කරයි; සුදුසු කාර්ය පරාසය ඔබේ අවශ්‍යතා මත රඳා පවතී.',
    exploreService: 'සේවාව බලන්න',
    whyTitle: 'නිර්මාණශීලී සිතුවිලි. සම්බන්ධිත උපායමාර්ගය. ව්‍යාපාර කේන්ද්‍ර කරගත් විසඳුම්.',
    whyEyebrow: '03 / RYZITE තෝරන්නේ ඇයි',
    whyItems: [
      { title: 'ව්‍යාපාර කේන්ද්‍ර කරගත් සැලසුම්කරණය', body: 'ඔබේ ව්‍යාපාර ඉලක්ක, ප්‍රේක්ෂකයන් සහ ප්‍රායෝගික අවශ්‍යතා සමඟ ආරම්භ කරන්න.' },
      { title: 'නිර්මාණශීලී සන්නිවේදනය', body: 'ඔබේ සන්නාමය සහ ඔබට ළඟා වීමට අවශ්‍ය පුද්ගලයන් මත පැහැදිලි පණිවිඩ සකසන්න.' },
      { title: 'තාක්ෂණය සහ අලෙවිකරණය එකට', body: 'ඩිජිටල් නාලිකා, අන්තර්ගතය සහ මෙවලම් එකට ක්‍රියා කළ හැකි ආකාරය සලකා බලන්න.' },
      { title: 'කාර්යසාධනය පිළිබඳ අවබෝධය', body: 'ක්‍රියාකාරකම් සමාලෝචනයට සහ ඊළඟ පියවර තීරණයට ප්‍රයෝජනවත් තොරතුරු සාකච්ඡා කරන්න.' },
      { title: 'නම්‍යශීලී ඩිජිටල් ප්‍රවේශයන්', body: 'සෑම ව්‍යාපාරයකටම එකම සැලැස්ම අවශ්‍ය යැයි නොසිතා ඔබේ ප්‍රමුඛතා වටා වැඩ සකසන්න.' },
    ],
    processTitle: 'උපායමාර්ගයේ සිට අර්ථවත් ඩිජිටල් වර්ධනය දක්වා.',
    processEyebrow: '04 / අපගේ ප්‍රවේශය',
    processIntro: 'සැලකිලිමත් ක්‍රියාවලියක් ව්‍යාපාර ප්‍රමුඛතා ප්‍රායෝගික අලෙවිකරණ ක්‍රියාකාරකම් සමඟ සම්බන්ධ කරයි.',
    processSteps: [
      { title: 'සොයා බලමු', body: 'ඔබේ ව්‍යාපාරය, ඉලක්ක, ප්‍රේක්ෂකයන් සහ වර්තමාන ඩිජිටල් පැවැත්ම තේරුම් ගනිමු.' },
      { title: 'පර්යේෂණය', body: 'වෙළඳපොළ පසුබිම, පාරිභෝගික අවශ්‍යතා සහ අදාළ අවස්ථා ගවේෂණය කරමු.' },
      { title: 'උපායමාර්ගය', body: 'ප්‍රමුඛතා තීරණය කර සුදුසු දිශාවක් සහ කාර්ය පරාසයක් එකඟ කරගනිමු.' },
      { title: 'නිර්මාණය', body: 'එකඟ වූ කාර්ය පරාසයට ඇතුළත් අන්තර්ගතය, ප්‍රචාරණ ද්‍රව්‍ය හෝ ඩිජිටල් කාර්යය සකසමු.' },
      { title: 'දියත් කිරීම', body: 'තෝරාගත් නාලිකා හරහා එකඟ වූ කාර්යය සූදානම් කර නිකුත් කරමු.' },
      { title: 'මැනීම සහ වැඩිදියුණු කිරීම', body: 'ලබාගත හැකි තොරතුරු සමාලෝචනය කර සුදුසු ඊළඟ පියවර සාකච්ඡා කරමු.' },
    ],
    faqTitle: 'නිතර අසන ප්‍රශ්න',
    faqEyebrow: '05 / ප්‍රශ්න',
    faqs: [
      { question: 'මගේ ව්‍යාපාරයට සුදුසු අලෙවිකරණ සේවාව කුමක්ද?', answer: 'සුදුසු සේවාව ඔබේ ව්‍යාපාර ඉලක්ක, ඉලක්කගත ප්‍රේක්ෂකයන්, දැනට ඇති ඩිජිටල් පැවැත්ම සහ ලබාගත හැකි අයවැය මත රඳා පවතී. ඔබේ අවශ්‍යතා අනුව විවිධ ප්‍රවේශ ගවේෂණය කිරීමට RYZITE සහාය විය හැකියි.' },
      { question: 'අලෙවිකරණ සේවා කිහිපයක් එකට ගත හැකිද?', answer: 'ඔව්. ව්‍යාපාර අරමුණු අනුව විවිධ ක්‍රියාකාරකම් එකට සැලසුම් කළ හැකියි. උදාහරණයක් ලෙස, සෙවුම් ප්‍රශස්තකරණය, සමාජ මාධ්‍ය අලෙවිකරණය, අන්තර්ගත නිර්මාණය සහ ඩිජිටල් ප්‍රචාරණය සම්බන්ධිත උපායමාර්ගයකට සහාය විය හැකියි.' },
      { question: 'ඩිජිටල් අලෙවිකරණය ආරම්භ කිරීමට පෙර වෙබ් අඩවියක් අවශ්‍යද?', answer: 'සෑම අලෙවිකරණ ක්‍රියාකාරකමකටම වෙබ් අඩවියක් අවශ්‍ය නොවේ. එහෙත් වෘත්තීය වෙබ් අඩවියක් ව්‍යාපාර තොරතුරු, ප්‍රචාරණ, පාරිභෝගික විමසීම් සහ සේවා විස්තර සඳහා මධ්‍යස්ථානයක් විය හැකියි.' },
      { question: 'අලෙවිකරණ සේවා සඳහා කොපමණ වැය වේද?', answer: 'මිල තෝරාගත් සේවා, ව්‍යාපෘති පරාසය, ප්‍රචාරණ අවශ්‍යතා, නිර්මාණ කාර්යය සහ ප්‍රචාරණ අයවැය මත රඳා පවතී. ඔබේ අවශ්‍යතා සහ විකල්ප ගැන RYZITE අමතන්න.' },
      { question: 'ඩිජිටල් අලෙවිකරණයේ ප්‍රතිඵල දැකීමට කොපමණ කාලයක් ගතවේද?', answer: 'ප්‍රතිඵල නාලිකාව, තරඟය, ව්‍යාපාර ඉලක්ක, අයවැය සහ ක්‍රියාත්මක කිරීමේ ප්‍රවේශය මත වෙනස් වේ. සමහර ක්‍රියාකාරකම් ඉක්මනින් සම්බන්ධතාවක් ඇති කළ හැකි අතර අනෙක්වාට අඛණ්ඩ උත්සාහයක් අවශ්‍ය වේ. නිශ්චිත ප්‍රතිඵල සහතික කළ නොහැක.' },
    ],
    closingTitle: 'ඔබේ සන්නාමය දෘශ්‍යමාන විය යුතුයි.',
    closingEyebrow: 'RYZITE / ඊළඟ පියවර',
    closingDescription: 'ඩිජිටල් උපායමාර්ගය, නිර්මාණශීලීත්වය සහ තාක්ෂණයේ නිවැරදි එකතුව ඔබේ ව්‍යාපාර ඉලක්කවලට සහාය විය හැකි ආකාරය සොයා බලමු.',
    closingCta: 'ව්‍යාපෘතියක් අරඹන්න',
    detailLabel: 'අලෙවිකරණ සේවාව',
    backToServices: 'සියලු අලෙවිකරණ සේවා',
    detailHeading: '{focus} සඳහා සැලකිලිමත් ප්‍රවේශයක්.',
    detailSupporting: 'ඔබේ ව්‍යාපාර ප්‍රමුඛතා, ප්‍රේක්ෂකයන් සහ දැනට ඇති ඩිජිටල් ක්‍රියාකාරකම්වලට ගැළපෙන ප්‍රවේශයක් සොයා බලමු.',
    challengesTitle: 'මෙම සේවාවෙන් අවධානය යොමු කළ හැකි අභියෝග.',
    challengesEyebrow: '01 / ව්‍යාපාරික අභියෝග',
    challengesIntro: '{focus} ගැන සලකා බලන ව්‍යාපාර සඳහා පොදු කරුණු:',
    challengeTemplates: [
      '{focus} සඳහා ඔබේ ඉලක්ක සහ ප්‍රමුඛතා වඩාත් පැහැදිලි කළ යුතු විය හැකියි.',
      'අනෙකුත් පාරිභෝගික සම්බන්ධතා ක්‍රියාකාරකම් සමඟ {focus} සම්බන්ධ කිරීම අපහසු විය හැකියි.',
      'කාලයත් සමඟ {focus} සමාලෝචනය කර ඊළඟ පියවර සලකා බැලීමට ප්‍රායෝගික ක්‍රමයක් අවශ්‍ය විය හැකියි.',
    ],
    providesEyebrow: 'යෝජිත කාර්ය පරාසය',
    providesTitle: 'එකට ගවේෂණය කළ හැකි දේ.',
    proposedScope: 'සාකච්ඡා කළ හැකි විභව ක්ෂේත්‍ර',
    scopeDisclaimer: 'පහත අයිතම සාකච්ඡා සඳහා යෝජිත ක්ෂේත්‍ර වන අතර තහවුරු කළ පැකේජ ඇතුළත් කිරීම් නොවේ. නිශ්චිත කාර්ය පරාසය ඔබේ අවශ්‍යතා මත රඳා පවතින අතර වැඩ ආරම්භ කිරීමට පෙර එකඟ වේ.',
    capabilitiesTitle: 'විභව සේවා හැකියාවන්.',
    benefitsTitle: 'ප්‍රායෝගික ව්‍යාපාරික ප්‍රතිලාභ.',
    benefitsEyebrow: '02 / ව්‍යාපාරික ප්‍රතිලාභ',
    benefitTemplates: [
      'ඔබේ {focus} ප්‍රමුඛතා සහ ඊළඟ පියවර පිළිබඳ වඩාත් පැහැදිලි අවබෝධයක්.',
      'ඔබේ ප්‍රේක්ෂකයන්, ඉලක්ක සහ දැනට ඇති ක්‍රියාකාරකම් සලකා බලන කාර්යයක්.',
      'එකඟ වූ කාර්යය සමාලෝචනය කර ඊළඟ දේ සාකච්ඡා කිරීමට ප්‍රායෝගික පදනමක්.',
    ],
    approachTitle: 'සහයෝගී ප්‍රවේශයක්.',
    approachEyebrow: '03 / අපගේ ප්‍රවේශය',
    approachIntro: 'පහත අදියර සේවාවට සහ එකඟ වූ ව්‍යාපෘති පරාසයට ගැළපෙන ලෙස සකස් වේ.',
    approachSteps: [
      { title: 'සොයා බැලීම', body: '{focus} සඳහා ඔබේ ඉලක්ක, ප්‍රේක්ෂකයන්, දැනට ඇති ක්‍රියාකාරකම් සහ අවශ්‍යතා තේරුම් ගනිමු.' },
      { title: 'පර්යේෂණය සහ සැලසුම්කරණය', body: 'පසුබිම සමාලෝචනය කර ඔබේ කෙටි විස්තරයට ගැළපෙන යෝජිත කාර්ය පරාසයක් හඳුනාගනිමු.' },
      { title: 'උපායමාර්ගය හෝ නිර්මාණය', body: 'ප්‍රමුඛතා, පණිවිඩය, සැකැස්ම සහ සලකා බැලිය යුතු කාර්යය එකඟ කරගනිමු.' },
      { title: 'ක්‍රියාත්මක කිරීම', body: 'තහවුරු කළ කාර්ය පරාසය සලකා එකඟ වූ ප්‍රතිදාන සංවර්ධනය කරමු.' },
      { title: 'සමාලෝචනය සහ වැඩිදියුණු කිරීම', body: 'කාර්යය සහ ලබාගත හැකි තොරතුරු සමාලෝචනය කර සංශෝධන හෝ ඊළඟ පියවර සාකච්ඡා කරමු.' },
      { title: 'භාරදීම සහ වැඩිදියුණු කිරීම', body: 'එකඟ වූ ප්‍රතිදාන බෙදාගෙන අඛණ්ඩ සමාලෝචනය සුදුසුදැයි තීරණය කරමු.' },
    ],
    relatedTitle: 'සම්බන්ධිත අලෙවිකරණ සේවා.',
    relatedEyebrow: '04 / තවත් ගවේෂණය කරන්න',
    detailFaqTitle: 'මෙම සේවාව ගැන ප්‍රශ්න තිබේද?',
    detailFaqs: [
      { question: '{title} තුළට ඇතුළත් විය හැක්කේ මොනවාද?', answer: 'මෙම පිටුවේ ඇති අයිතම සාකච්ඡා කළ හැකි යෝජිත ක්ෂේත්‍ර වේ. සුදුසු දේ ඔබේ ඉලක්ක සහ අවශ්‍යතා මත රඳා පවතින අතර ව්‍යාපෘති පරාසය වැඩ ආරම්භ කිරීමට පෙර එකඟ වේ.' },
      { question: 'මෙම සේවාව වෙනත් අලෙවිකරණ කාර්යයන් සමඟ ඒකාබද්ධ කළ හැකිද?', answer: 'ඔබේ ව්‍යාපාර අරමුණු සඳහා සහාය වන්නේ නම් සම්බන්ධිත ක්‍රියාකාරකම් එකට සලකා බැලිය හැකියි. ඔබ සලකා බලන සේවා බෙදාගෙන කාර්ය පරාසය ගැන කතා කරන්න.' },
      { question: '{title} ගැන RYZITE සමඟ කතා කරන්නේ කෙසේද?', answer: 'මෙම පිටුවේ සම්බන්ධතා පෝරමය භාවිත කරන්න. සේවාව ඔබ වෙනුවෙන් තෝරා ඇති අතර ව්‍යාපෘති විස්තරයට ඔබේ ඉලක්ක සහ ප්‍රශ්න එක් කළ හැකියි.' },
    ],
    contactCtaTitle: 'ඔබේ ඩිජිටල් වර්ධන උපායමාර්ගය ගොඩනඟමු.',
    contactCtaEyebrow: 'RYZITE / ඊළඟ පියවර',
    contactCtaDescription: 'ඔබේ ව්‍යාපාර ඉලක්ක අපට කියා සුදුසු ඩිජිටල් විසඳුම් හඳුනාගැනීමට RYZITE සහාය විය හැකි ආකාරය ගවේෂණය කරන්න.',
    contactCta: 'ව්‍යාපෘතියක් අරඹන්න',
    services: {
      'google-seo-and-search-visibility': { title: 'Google SEO සහ සෙවුම් දෘශ්‍යතාව', description: 'සෙවුම් තුළ ඔබේ ව්‍යාපාරය සොයාගැනීමට උපකාර කරන්න.', focus: 'සෙවුම් දෘශ්‍යතාව', capabilities: [{ title: 'සෙවුම් පැවැත්ම සමාලෝචනය', description: 'දැනට ඇති වෙබ් අඩවිය සහ සෙවුම් පැවැත්ම පරීක්ෂා කර සාකච්ඡා කළ හැකි ක්ෂේත්‍ර හඳුනාගන්න.' }, { title: 'සෙවුම් මාතෘකා සැලසුම් කිරීම', description: 'ව්‍යාපාරයට අදාළ සෙවුම් මාතෘකා ගවේෂණය කරන්න.' }, { title: 'පිටු අන්තර්ගත මඟපෙන්වීම', description: 'අමුත්තන්ට සහ සෙවුම් යන්ත්‍රවලට පිටු සැකැස්ම සහ අන්තර්ගත පැහැදිලි බව සලකා බලන්න.' }, { title: 'සමාලෝචනය සහ සංශෝධනය', description: 'සමාලෝචනයට ප්‍රයෝජනවත් තොරතුරු සහ ඊළඟ පියවර එකඟ කරගන්න.' }] },
      'google-ads-management': { title: 'Google දැන්වීම් කළමනාකරණය', description: 'ක්‍රියා කිරීමට සූදානම් පාරිභෝගිකයන් වෙත ළඟා වන්න.', focus: 'Google ප්‍රචාරණය', capabilities: [{ title: 'ප්‍රචාරණ අරමුණු සැලසුම් කිරීම', description: 'ප්‍රේක්ෂකයන්, අරමුණ සහ ප්‍රචාරණයෙන් සහාය විය යුතු ක්‍රියාව පැහැදිලි කරන්න.' }, { title: 'මූල පද සහ ප්‍රේක්ෂක පර්යේෂණය', description: 'කෙටි විස්තරයට අදාළ සෙවුම් වචන සහ ප්‍රේක්ෂක කරුණු ගවේෂණය කරන්න.' }, { title: 'දැන්වීම් සහ පිවිසුම් පිටු සම්බන්ධ කිරීම', description: 'ප්‍රචාරණ පණිවිඩය එහි ගමනාන්ත පිටුවට සම්බන්ධ වන ආකාරය සමාලෝචනය කරන්න.' }, { title: 'ප්‍රචාරණ සමාලෝචනය', description: 'ලබාගත හැකි ප්‍රචාරණ තොරතුරු සහ හැකි වෙනස්කම් සාකච්ඡා කරන්න.' }] },
      'facebook-and-instagram-ads': { title: 'Facebook සහ Instagram දැන්වීම්', description: 'ඔබේ ප්‍රේක්ෂකයන් සිටින තැන ඔවුන් සමඟ සම්බන්ධ වන්න.', focus: 'Facebook සහ Instagram ප්‍රචාරණය', capabilities: [{ title: 'ප්‍රචාරණ අරමුණු සැලසුම් කිරීම', description: 'ප්‍රචාරණයෙන් සන්නිවේදනය කළ යුතු පණිවිඩය සහ සහාය විය යුතු ක්‍රියාව පැහැදිලි කරන්න.' }, { title: 'ප්‍රේක්ෂක කරුණු', description: 'කෙටි විස්තරයට ගැළපෙන ප්‍රේක්ෂක කණ්ඩායම් සහ ඉලක්කගත කිරීම සලකා බලන්න.' }, { title: 'නිර්මාණාත්මක දිශාව', description: 'පණිවිඩය අන්තර්ගතය සහ දෘශ්‍ය අංග හරහා සන්නිවේදනය කළ හැකි ආකාරය සැලසුම් කරන්න.' }, { title: 'ප්‍රචාරණ සමාලෝචනය', description: 'ලබාගත හැකි තොරතුරු සමාලෝචනය කර හැකි සංශෝධන සාකච්ඡා කරන්න.' }] },
      'social-media-management': { title: 'සමාජ මාධ්‍ය කළමනාකරණය', description: 'ස්ථාවර සහ ක්‍රියාකාරී සන්නාම පැවැත්මක් ගොඩනඟන්න.', focus: 'සමාජ මාධ්‍ය පැවැත්ම', capabilities: [{ title: 'නාලිකා සහ පැතිකඩ සමාලෝචනය', description: 'තෝරාගත් නාලිකා, පැතිකඩ සහ වර්තමාන සන්නිවේදන ප්‍රවේශය සමාලෝචනය කරන්න.' }, { title: 'අන්තර්ගත තේමා', description: 'සන්නාමයට, ප්‍රේක්ෂකයන්ට සහ ව්‍යාපාර ප්‍රමුඛතාවලට ගැළපෙන තේමා ගවේෂණය කරන්න.' }, { title: 'ප්‍රකාශන සැලැස්ම', description: 'ප්‍රායෝගික අන්තර්ගත සැලැස්මක් සහ අවශ්‍ය සමාලෝචන අදියර සකසන්න.' }, { title: 'ප්‍රජා මාර්ගෝපදේශය', description: 'ප්‍රතිචාර මාර්ගෝපදේශ සහ විමසීම් සුදුසු ඊළඟ පියවරට යොමු කිරීම සාකච්ඡා කරන්න.' }] },
      'branding-and-logo-design': { title: 'සන්නාමකරණය සහ ලාංඡන නිර්මාණය', description: 'මතකයේ රැඳෙන ව්‍යාපාරික අනන්‍යතාවක් ලබා දෙන්න.', focus: 'සන්නාම අනන්‍යතාව', capabilities: [{ title: 'සන්නාම දිශාව', description: 'ව්‍යාපාරය, ප්‍රේක්ෂකයන් සහ අනන්‍යතාවයෙන් සන්නිවේදනය කළ යුතු ගුණාංග ගවේෂණය කරන්න.' }, { title: 'දෘශ්‍ය අනන්‍යතා සංකල්ප', description: 'එකඟ වූ කෙටි විස්තරය මත සාකච්ඡා කිරීමට දෘශ්‍ය දිශාවන් සකසන්න.' }, { title: 'ලාංඡනය සහ සහායක ද්‍රව්‍ය', description: 'එකඟ වූ ව්‍යාපෘති අවශ්‍යතා සඳහා අදාළ අනන්‍යතා ද්‍රව්‍ය සැලසුම් කරන්න.' }, { title: 'භාවිත මඟපෙන්වීම', description: 'තෝරාගත් නාලිකා හරහා අනන්‍යතාව අඛණ්ඩව භාවිත කිරීම සාකච්ඡා කරන්න.' }] },
      'content-reels-and-motion-design': { title: 'අන්තර්ගතය, Reels සහ චලන නිර්මාණය', description: 'නිර්මාණශීලී අන්තර්ගතයෙන් ඔබේ කතාව ඉදිරිපත් කරන්න.', focus: 'ඩිජිටල් අන්තර්ගතය සහ චලන නිර්මාණය', capabilities: [{ title: 'අන්තර්ගත සංකල්ප', description: 'පණිවිඩයට, ප්‍රේක්ෂකයන්ට සහ නාලිකාවට ගැළපෙන ආකෘති සහ සංකල්ප ගවේෂණය කරන්න.' }, { title: 'කෙටි වීඩියෝ සැලසුම් කිරීම', description: 'කෙටි විස්තරය සහ ලබාගත හැකි ද්‍රව්‍ය මත කෙටි වීඩියෝවක් හෝ Reel එකක් සැලසුම් කරන්න.' }, { title: 'චලන නිර්මාණ දිශාව', description: 'චලනය සහ දෘශ්‍ය අංග අන්තර්ගතයට සහාය විය හැකි ආකාරය සලකා බලන්න.' }, { title: 'අන්තර්ගත සමාලෝචනය', description: 'එකඟ වූ පණිවිඩය, ආකෘතිය සහ නාලිකාව අනුව අන්තර්ගතය සමාලෝචනය කරන්න.' }] },
      'online-store-marketing': { title: 'මාර්ගගත වෙළඳසැල් අලෙවිකරණය', description: 'නිෂ්පාදන සොයාගැනීම මිලදී ගැනීමේ අවස්ථාවකට සම්බන්ධ කරන්න.', focus: 'මාර්ගගත වෙළඳසැල් අලෙවිකරණය', capabilities: [{ title: 'වෙළඳසැල් සහ නිෂ්පාදන සමාලෝචනය', description: 'වෙළඳසැලේ නිෂ්පාදන සහ වැදගත් තොරතුරු ඉදිරිපත් කරන ආකාරය සමාලෝචනය කරන්න.' }, { title: 'ප්‍රචාරණ සහ අන්තර්ගත සැලසුම්', description: 'නිෂ්පාදන පණිවිඩ අදාළ අලෙවිකරණ ක්‍රියාකාරකම් සමඟ සම්බන්ධ කිරීම සොයා බලන්න.' }, { title: 'පාරිභෝගික ගමන සමාලෝචනය', description: 'නිෂ්පාදන සොයාගැනීමේ සිට වෙළඳසැලේ ක්‍රියා දක්වා පියවර සලකා බලන්න.' }, { title: 'මිනුම් පිළිබඳ සාකච්ඡාව', description: 'ලබාගත හැකි නම් සමාලෝචනයට සුදුසු වෙළඳසැල් සහ ප්‍රචාරණ තොරතුරු හඳුනාගන්න.' }] },
      'marketing-automation-and-crm': { title: 'අලෙවිකරණ ස්වයංක්‍රීයකරණය සහ CRM', description: 'විමසීම් සහ පාරිභෝගික ගමන් සම්බන්ධ කරන්න.', focus: 'අලෙවිකරණ ස්වයංක්‍රීයකරණය සහ CRM', capabilities: [{ title: 'පාරිභෝගික ගමන් සිතියම්කරණය', description: 'අදාළ පාරිභෝගික අදියර සහ එක් එක් අදියරේ භාවිත වන තොරතුරු සකසන්න.' }, { title: 'CRM අවශ්‍යතා සමාලෝචනය', description: 'සම්බන්ධතා දත්ත, කණ්ඩායම් ක්‍රියාවලි සහ CRM සැකසුම් අවශ්‍යතා සාකච්ඡා කරන්න.' }, { title: 'ස්වයංක්‍රීයකරණ අවස්ථා', description: 'කාර්ය පරාසයට ඇතුළත් කළ හැකි නැවත සිදුවන සන්නිවේදන හෝ පැවරීම් පියවර හඳුනාගන්න.' }, { title: 'ක්‍රියාවලි සමාලෝචනය', description: 'යෝජිත ගමන සමාලෝචනය කර ක්‍රියාවලිය පරීක්ෂා කරන ආකාරය එකඟ කරගන්න.' }] },
      'blog-writing-and-content-marketing': { title: 'බ්ලොග් ලිවීම සහ අන්තර්ගත අලෙවිකරණය', description: 'කාලයත් සමඟ විශ්වාසය ගොඩනඟන ප්‍රයෝජනවත් අදහස් බෙදාගන්න.', focus: 'බ්ලොග් ලිවීම සහ අන්තර්ගත අලෙවිකරණය', capabilities: [{ title: 'මාතෘකා සහ ප්‍රේක්ෂක සැලසුම්', description: 'ප්‍රේක්ෂකයන් සහ ව්‍යාපාර ප්‍රමුඛතා අනුව ප්‍රයෝජනවත් මාතෘකා ගවේෂණය කරන්න.' }, { title: 'සංස්කාරක සැලසුම්', description: 'තෝරාගත් අන්තර්ගතය සමාලෝචනය සහ සකස් කිරීම සඳහා ප්‍රායෝගික අනුපිළිවෙළක් සකසන්න.' }, { title: 'ලිපි සංවර්ධනය', description: 'එකඟ වූ කෙටි විස්තරය, මූලාශ්‍ර සහ සමාලෝචන ක්‍රියාවලිය මත ලිවීම සකසන්න.' }, { title: 'අන්තර්ගත සම්බන්ධතාව', description: 'ලිපි අදාළ සේවා, පිටු සහ ඊළඟ පියවර සමඟ සම්බන්ධ වන ආකාරය සලකා බලන්න.' }] },
      'website-tracking-and-conversion-improvement': { title: 'වෙබ් අඩවි නිරීක්ෂණය සහ පරිවර්තන වැඩිදියුණු කිරීම', description: 'අමුත්තන් තේරුම් ගෙන ඔවුන්ගේ ඊළඟ පියවර සලකා බලන්න.', focus: 'වෙබ් අඩවි නිරීක්ෂණය සහ පරිවර්තන වැඩිදියුණු කිරීම', capabilities: [{ title: 'මිනුම් අවශ්‍යතා', description: 'ව්‍යාපෘතියට වැදගත් වෙබ් අඩවි අන්තර්ක්‍රියා සහ ව්‍යාපාරික ප්‍රශ්න පැහැදිලි කරන්න.' }, { title: 'නිරීක්ෂණ සැලැස්ම', description: 'ක්‍රියාත්මක කිරීම හෝ සමාලෝචනය සඳහා සිදුවීම් සහ මිනුම් අවශ්‍යතා සකසන්න.' }, { title: 'පාරිභෝගික ගමන සමාලෝචනය', description: 'ප්‍රධාන පිටු සහ අමුත්තන්ට ඇති ඊළඟ පියවර සමාලෝචනය කරන්න.' }, { title: 'වැඩිදියුණු කිරීමේ නිර්දේශ', description: 'ලබාගත හැකි තොරතුරු මත හැකි වෙනස්කම් සහ වැඩිදුර සමාලෝචනය සාකච්ඡා කරන්න.' }] },
      'practical-ai-marketing-support': { title: 'ප්‍රායෝගික AI අලෙවිකරණ සහාය', description: 'දෛනික අලෙවිකරණ කටයුතු වඩාත් කාර්යක්ෂමව කරන්න.', focus: 'AI සහාය ඇති අලෙවිකරණ ක්‍රියාවලි', capabilities: [{ title: 'ක්‍රියාවලි සොයා බැලීම', description: 'නැවත සිදු කරන අලෙවිකරණ කාර්යයන් සහ සහාය ප්‍රයෝජනවත් විය හැකි ස්ථාන ගවේෂණය කරන්න.' }, { title: 'භාවිත අවස්ථා සැලසුම්', description: 'ප්‍රායෝගික භාවිතයක්, එහි ආදාන සහ භාවිතයට පෙර අවශ්‍ය සමාලෝචනය නිර්වචනය කරන්න.' }, { title: 'මානව සමාලෝචනය', description: 'නිවැරදිතාව, සන්නාම හඬ, පෞද්ගලිකත්වය සහ මානව අනුමැතිය සලකා බලන්න.' }, { title: 'ක්‍රියාවලි ඇගයීම', description: 'යෝජිත ක්‍රියාවලිය එම කාර්යයට ප්‍රයෝජනවත් සහ සුදුසුදැයි සමාලෝචනය කරන්න.' }] },
    },
  },
};

for (const [locale, translation] of Object.entries(marketingServiceTranslations)) {
  for (const service of marketingServices) {
    const localizedService = translation.services[service.slug];
    if (!localizedService) {
      throw new Error(`Marketing Service translation is missing for "${service.slug}" in locale "${locale}".`);
    }
    if (localizedService.capabilities.length !== service.capabilities.length) {
      throw new Error(`Marketing Service capability translations do not match "${service.slug}" in locale "${locale}".`);
    }
  }
}
