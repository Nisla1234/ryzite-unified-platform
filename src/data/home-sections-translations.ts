// Copy for the homepage sections added after Offerings (divisions, branding, connected plan,
// packages, payments, process, trust, FAQs, closing invitation).
//
// Status:
// - [PROPOSAL] All headings, intros, trust points, and FAQ answers are draft copy for review.
// - [PROPOSAL] Package cards and process steps are NOT duplicated here; the homepage reads them from
//   resources-translations.ts so /packages, /how-we-work, and the homepage stay in sync.
// - [OPEN] Payment stages are a general overview only, not a confirmed payment policy. No amounts,
//   percentages, schedules, or deadlines may be added until the terms are approved.
// - [OPEN] Timeline and payment FAQ answers deliberately avoid commitments.
// - Tamil and Sinhala copy needs native-speaker review before launch.

type Copy = { title: string; body: string };

export type HomeSectionsCopy = {
  divisions: {
    eyebrow: string;
    title: string;
    intro: string;
    marketing: Copy & { kicker: string; cta: string };
    technology: Copy & { kicker: string; cta: string };
  };
  branding: { eyebrow: string; title: string; body: string; highlights: string[]; cta: string };
  connected: {
    eyebrow: string;
    title: string;
    body: string;
    marketing: string;
    technology: string;
    result: string;
    highlights: string[];
  };
  packages: { eyebrow: string; title: string; intro: string; suitableLabel: string; suitable: string[]; cta: string };
  payments: { eyebrow: string; title: string; intro: string; steps: Copy[] };
  process: { eyebrow: string; title: string; cta: string };
  trust: { eyebrow: string; title: string; intro: string; items: Copy[] };
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] };
  closing: { eyebrow: string; title: string; body: string; primary: string; secondary: string };
};

export const homeSectionsTranslations: Record<'en' | 'ta' | 'si', HomeSectionsCopy> = {
  en: {
    divisions: {
      eyebrow: 'TWO DIVISIONS',
      title: 'Two Divisions. One Partner for Growth.',
      intro: 'Marketing and technology support for your business, brought together by one team.',
      marketing: {
        kicker: 'Grow my business',
        title: 'Marketing Services',
        body: 'Helping businesses attract customers, improve visibility, and grow their brands.',
        cta: 'Explore Marketing Services',
      },
      technology: {
        kicker: 'Build my idea',
        title: 'Technology Solutions',
        body: 'Building websites, online stores, software, and digital tools for modern businesses.',
        cta: 'Explore Technology Solutions',
      },
    },
    branding: {
      eyebrow: 'BRANDING',
      title: 'Build a Brand That Stands Out.',
      body: 'Your brand is more than a logo. It is the identity, personality, and experience that customers remember.',
      highlights: ['Logo Design', 'Brand Colors', 'Typography', 'Visual Identity', 'Consistent Brand Experience'],
      cta: 'Explore Branding Services',
    },
    connected: {
      eyebrow: 'ONE CONNECTED PLAN',
      title: 'One Connected Plan. Better Business Growth.',
      body: 'RYZITE brings marketing and technology together to help businesses build a strong digital presence, attract customers, and grow efficiently.',
      marketing: 'Marketing Services',
      technology: 'Technology Solutions',
      result: 'Connected Digital Growth',
      highlights: [
        'Build your digital foundation.',
        'Reach the right customers.',
        'Connect marketing with technology.',
        'Improve business efficiency.',
        'Support long-term growth.',
      ],
    },
    packages: {
      eyebrow: 'PACKAGES',
      title: 'Find a Suitable Starting Point.',
      intro: 'Three proposed package options to help you explore features and scope. Pricing and inclusions are confirmed for each project.',
      suitableLabel: 'Suitable for',
      suitable: [
        'Individuals, startups, and small businesses',
        'Businesses needing more pages and content management',
        'Growing businesses needing advanced features and integrations',
      ],
      cta: 'Explore Packages',
    },
    payments: {
      eyebrow: 'PAYMENT OPTIONS',
      title: 'Flexible Payments. Clear Milestones.',
      intro: 'A general overview of how project payments may be structured.',
      steps: [
        { title: 'Initial Payment', body: 'An initial payment to begin the project, as set out in your proposal.' },
        { title: 'Milestone Payments', body: 'Payments linked to agreed project milestones, with 0% interest, where your proposal includes them.' },
        { title: 'Final Payment & Handover', body: 'A final payment on completion, followed by the agreed project handover.' },
      ],
    },
    process: {
      eyebrow: 'HOW WE WORK',
      title: 'A Clear Process From Start to Launch.',
      cta: 'See How We Work',
    },
    trust: {
      eyebrow: 'WHY WORK WITH US',
      title: 'Clear From Proposal to Handover.',
      intro: 'A straightforward way of working, so you always know what is agreed and what comes next.',
      items: [
        { title: 'Clear Proposals', body: 'Your project scope and next steps are set out in a proposal for you to review and approve.' },
        { title: 'Transparent Communication', body: 'Decisions, questions, and progress are kept easy to understand throughout the project.' },
        { title: 'Professional Project Delivery', body: 'Work follows an agreed process, with reviews for functionality, responsiveness, and accessibility.' },
        { title: 'Ongoing Maintenance', body: 'After launch, optional care and maintenance keeps your website updated and running smoothly.' },
      ],
    },
    faq: {
      eyebrow: 'FAQS',
      title: 'Frequently Asked Questions.',
      items: [
        { question: 'What services does RYZITE provide?', answer: 'RYZITE offers Marketing Services, such as search visibility, ads, social media, branding, and content, and Technology Solutions, including websites, online stores, custom software, mobile apps, chatbots, automation, and website care.' },
        { question: 'How do I start a project?', answer: 'Share your goals and requirements through our contact page. We will discuss your needs and explore a suitable approach together.' },
        { question: 'How long does a website project take?', answer: 'Timelines depend on the agreed scope, features, and content. A timeline is discussed and confirmed during project planning.' },
        { question: 'Can RYZITE help with both marketing and technology?', answer: 'Yes. RYZITE brings marketing services and technology solutions together, so both can be planned as one connected project.' },
        { question: 'How are project payments handled?', answer: 'Payment amounts, schedules, and milestones are discussed and confirmed in your individual project proposal.' },
        { question: 'Can I request a customized solution?', answer: 'Yes. Additional or custom requirements can be discussed and evaluated based on the project scope.' },
      ],
    },
    closing: {
      eyebrow: 'LET’S TALK',
      title: 'Let’s Build Something Meaningful.',
      body: 'Have a business idea or project in mind? Let’s explore how RYZITE can help bring it to life.',
      primary: 'Start a Project',
      secondary: 'Explore Our Services',
    },
  },
  ta: {
    divisions: {
      eyebrow: 'இரண்டு பிரிவுகள்',
      title: 'இரண்டு பிரிவுகள். வளர்ச்சிக்கு ஒரே கூட்டாளர்.',
      intro: 'உங்கள் வணிகத்திற்கான மார்க்கெட்டிங் மற்றும் தொழில்நுட்ப ஆதரவு, ஒரே குழுவால் ஒன்றிணைக்கப்படுகிறது.',
      marketing: {
        kicker: 'என் வணிகத்தை வளர்க்க',
        title: 'மார்க்கெட்டிங் சேவைகள்',
        body: 'வாடிக்கையாளர்களை ஈர்க்கவும், தெரிவுநிலையை மேம்படுத்தவும், பிராண்டுகளை வளர்க்கவும் வணிகங்களுக்கு உதவுகிறோம்.',
        cta: 'மார்க்கெட்டிங் சேவைகளைப் பார்க்க',
      },
      technology: {
        kicker: 'என் யோசனையை உருவாக்க',
        title: 'தொழில்நுட்பத் தீர்வுகள்',
        body: 'நவீன வணிகங்களுக்கான இணையதளங்கள், ஆன்லைன் கடைகள், மென்பொருள் மற்றும் டிஜிட்டல் கருவிகளை உருவாக்குகிறோம்.',
        cta: 'தொழில்நுட்பத் தீர்வுகளைப் பார்க்க',
      },
    },
    branding: {
      eyebrow: 'பிராண்டிங்',
      title: 'தனித்து நிற்கும் பிராண்டை உருவாக்குங்கள்.',
      body: 'உங்கள் பிராண்ட் ஒரு லோகோவை விட மேலானது. அது வாடிக்கையாளர்கள் நினைவில் கொள்ளும் அடையாளம், தனித்தன்மை மற்றும் அனுபவம்.',
      highlights: ['லோகோ வடிவமைப்பு', 'பிராண்ட் வண்ணங்கள்', 'எழுத்துருவியல்', 'காட்சி அடையாளம்', 'சீரான பிராண்ட் அனுபவம்'],
      cta: 'பிராண்டிங் சேவைகளைப் பார்க்க',
    },
    connected: {
      eyebrow: 'ஒன்றிணைந்த ஒரே திட்டம்',
      title: 'ஒன்றிணைந்த ஒரே திட்டம். சிறந்த வணிக வளர்ச்சி.',
      body: 'வலுவான டிஜிட்டல் இருப்பை உருவாக்கவும், வாடிக்கையாளர்களை ஈர்க்கவும், திறமையாக வளரவும் RYZITE மார்க்கெட்டிங்கையும் தொழில்நுட்பத்தையும் ஒன்றிணைக்கிறது.',
      marketing: 'மார்க்கெட்டிங் சேவைகள்',
      technology: 'தொழில்நுட்பத் தீர்வுகள்',
      result: 'ஒன்றிணைந்த டிஜிட்டல் வளர்ச்சி',
      highlights: [
        'உங்கள் டிஜிட்டல் அடித்தளத்தை உருவாக்குங்கள்.',
        'சரியான வாடிக்கையாளர்களைச் சென்றடையுங்கள்.',
        'மார்க்கெட்டிங்கை தொழில்நுட்பத்துடன் இணையுங்கள்.',
        'வணிகத் திறனை மேம்படுத்துங்கள்.',
        'நீண்டகால வளர்ச்சிக்கு ஆதரவளியுங்கள்.',
      ],
    },
    packages: {
      eyebrow: 'தொகுப்புகள்',
      title: 'பொருத்தமான தொடக்கப் புள்ளியைக் கண்டறியுங்கள்.',
      intro: 'அம்சங்களையும் பணிவரம்பையும் ஆராய உதவும் மூன்று முன்மொழியப்பட்ட தொகுப்பு விருப்பங்கள். விலை மற்றும் உள்ளடக்கங்கள் ஒவ்வொரு திட்டத்திற்கும் உறுதிப்படுத்தப்படும்.',
      suitableLabel: 'பொருத்தமானது',
      suitable: [
        'தனிநபர்கள், தொடக்க நிறுவனங்கள் மற்றும் சிறு வணிகங்கள்',
        'கூடுதல் பக்கங்களும் உள்ளடக்க மேலாண்மையும் தேவைப்படும் வணிகங்கள்',
        'மேம்பட்ட அம்சங்களும் ஒருங்கிணைப்புகளும் தேவைப்படும் வளரும் வணிகங்கள்',
      ],
      cta: 'தொகுப்புகளைப் பாருங்கள்',
    },
    payments: {
      eyebrow: 'கட்டண விருப்பங்கள்',
      title: 'நெகிழ்வான கட்டணங்கள். தெளிவான கட்டங்கள்.',
      intro: 'திட்டக் கட்டணங்கள் எவ்வாறு அமைக்கப்படலாம் என்பதற்கான பொதுவான கண்ணோட்டம்.',
      steps: [
        { title: 'ஆரம்பக் கட்டணம்', body: 'உங்கள் முன்மொழிவில் குறிப்பிட்டுள்ளபடி, திட்டத்தைத் தொடங்குவதற்கான ஆரம்பக் கட்டணம்.' },
        { title: 'கட்டவாரியான கட்டணங்கள்', body: 'உங்கள் முன்மொழிவில் சேர்க்கப்பட்டிருந்தால், ஒப்புக்கொண்ட திட்டக் கட்டங்களுடன் இணைந்த 0% வட்டியிலான கட்டணங்கள்.' },
        { title: 'இறுதிக் கட்டணம் & ஒப்படைப்பு', body: 'திட்டம் நிறைவடைந்ததும் இறுதிக் கட்டணம், அதைத் தொடர்ந்து ஒப்புக்கொண்ட திட்ட ஒப்படைப்பு.' },
      ],
    },
    process: {
      eyebrow: 'நாங்கள் பணியாற்றும் விதம்',
      title: 'தொடக்கம் முதல் வெளியீடு வரை தெளிவான செயல்முறை.',
      cta: 'நாங்கள் பணியாற்றும் விதத்தைப் பாருங்கள்',
    },
    trust: {
      eyebrow: 'எங்களுடன் ஏன் பணியாற்ற வேண்டும்',
      title: 'முன்மொழிவு முதல் ஒப்படைப்பு வரை தெளிவு.',
      intro: 'எது ஒப்புக்கொள்ளப்பட்டது, அடுத்து என்ன என்பதை நீங்கள் எப்போதும் அறிந்துகொள்ளும் எளிய பணிமுறை.',
      items: [
        { title: 'தெளிவான முன்மொழிவுகள்', body: 'உங்கள் திட்டப் பணிவரம்பும் அடுத்த படிகளும் நீங்கள் மதிப்பாய்வு செய்து ஒப்புதல் அளிக்க ஒரு முன்மொழிவில் குறிப்பிடப்படும்.' },
        { title: 'வெளிப்படையான தொடர்பு', body: 'முடிவுகள், கேள்விகள் மற்றும் முன்னேற்றம் திட்டம் முழுவதும் எளிதில் புரியும் வகையில் வைக்கப்படும்.' },
        { title: 'தொழில்முறை திட்ட வழங்கல்', body: 'செயல்பாடு, பதிலளிக்கும் தன்மை மற்றும் அணுகல்தன்மை மதிப்பாய்வுகளுடன், ஒப்புக்கொண்ட செயல்முறையின்படி பணி நடைபெறும்.' },
        { title: 'தொடர் பராமரிப்பு', body: 'வெளியீட்டுக்குப் பிறகு, விருப்பத்தேர்வான பராமரிப்புச் சேவை உங்கள் இணையதளத்தைப் புதுப்பித்து சீராக இயங்க வைக்கும்.' },
      ],
    },
    faq: {
      eyebrow: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்.',
      items: [
        { question: 'RYZITE என்ன சேவைகளை வழங்குகிறது?', answer: 'தேடல் தெரிவுநிலை, விளம்பரங்கள், சமூக ஊடகம், பிராண்டிங் மற்றும் உள்ளடக்கம் போன்ற மார்க்கெட்டிங் சேவைகளையும், இணையதளங்கள், ஆன்லைன் கடைகள், தனிப்பயன் மென்பொருள், மொபைல் செயலிகள், சாட்பாட்கள், தானியக்கம் மற்றும் இணையதளப் பராமரிப்பு உள்ளிட்ட தொழில்நுட்பத் தீர்வுகளையும் RYZITE வழங்குகிறது.' },
        { question: 'ஒரு திட்டத்தை எவ்வாறு தொடங்குவது?', answer: 'எங்கள் தொடர்புப் பக்கத்தின் மூலம் உங்கள் இலக்குகளையும் தேவைகளையும் பகிருங்கள். உங்கள் தேவைகளைப் பற்றி விவாதித்து பொருத்தமான அணுகுமுறையை ஒன்றாக ஆராய்வோம்.' },
        { question: 'ஒரு இணையதளத் திட்டத்திற்கு எவ்வளவு காலம் ஆகும்?', answer: 'காலவரிசை ஒப்புக்கொண்ட பணிவரம்பு, அம்சங்கள் மற்றும் உள்ளடக்கத்தைப் பொறுத்தது. திட்டமிடலின் போது காலவரிசை விவாதிக்கப்பட்டு உறுதிப்படுத்தப்படும்.' },
        { question: 'மார்க்கெட்டிங் மற்றும் தொழில்நுட்பம் இரண்டிலும் RYZITE உதவுமா?', answer: 'ஆம். RYZITE மார்க்கெட்டிங் சேவைகளையும் தொழில்நுட்பத் தீர்வுகளையும் ஒன்றிணைப்பதால், இரண்டையும் ஒரே இணைந்த திட்டமாகத் திட்டமிடலாம்.' },
        { question: 'திட்டக் கட்டணங்கள் எவ்வாறு கையாளப்படுகின்றன?', answer: 'கட்டணத் தொகைகள், அட்டவணைகள் மற்றும் கட்டங்கள் உங்கள் தனிப்பட்ட திட்ட முன்மொழிவில் விவாதிக்கப்பட்டு உறுதிப்படுத்தப்படும்.' },
        { question: 'தனிப்பயனாக்கப்பட்ட தீர்வைக் கோரலாமா?', answer: 'ஆம். கூடுதல் அல்லது தனிப்பயன் தேவைகளைத் திட்டப் பணிவரம்பின் அடிப்படையில் விவாதித்து மதிப்பிடலாம்.' },
      ],
    },
    closing: {
      eyebrow: 'பேசுவோம்',
      title: 'அர்த்தமுள்ள ஒன்றை உருவாக்குவோம்.',
      body: 'உங்களிடம் ஒரு வணிக யோசனை அல்லது திட்டம் உள்ளதா? அதை நனவாக்க RYZITE எவ்வாறு உதவும் என்பதை ஆராய்வோம்.',
      primary: 'திட்டத்தைத் தொடங்குங்கள்',
      secondary: 'எங்கள் சேவைகளைப் பாருங்கள்',
    },
  },
  si: {
    divisions: {
      eyebrow: 'අංශ දෙක',
      title: 'අංශ දෙකක්. වර්ධනය සඳහා එක් හවුල්කරුවෙක්.',
      intro: 'ඔබේ ව්‍යාපාරය සඳහා අලෙවිකරණ සහ තාක්ෂණික සහාය, එක් කණ්ඩායමක් විසින් එකට ගෙන එයි.',
      marketing: {
        kicker: 'මගේ ව්‍යාපාරය වර්ධනය කරන්න',
        title: 'අලෙවිකරණ සේවා',
        body: 'පාරිභෝගිකයන් ආකර්ෂණය කර ගැනීමට, දෘශ්‍යතාව වැඩි කිරීමට සහ සන්නාම වර්ධනය කිරීමට ව්‍යාපාරවලට උදව් කරමු.',
        cta: 'අලෙවිකරණ සේවා බලන්න',
      },
      technology: {
        kicker: 'මගේ අදහස ගොඩනඟන්න',
        title: 'තාක්ෂණික විසඳුම්',
        body: 'නවීන ව්‍යාපාර සඳහා වෙබ් අඩවි, මාර්ගගත වෙළඳසැල්, මෘදුකාංග සහ ඩිජිටල් මෙවලම් ගොඩනඟමු.',
        cta: 'තාක්ෂණ විසඳුම් බලන්න',
      },
    },
    branding: {
      eyebrow: 'සන්නාමකරණය',
      title: 'කැපී පෙනෙන සන්නාමයක් ගොඩනඟන්න.',
      body: 'ඔබේ සන්නාමය ලාංඡනයකට වඩා වැඩි ය. එය පාරිභෝගිකයන්ට මතක සිටින අනන්‍යතාව, පෞරුෂය සහ අත්දැකීමයි.',
      highlights: ['ලාංඡන නිර්මාණය', 'සන්නාම වර්ණ', 'අකුරු මෝස්තර', 'දෘශ්‍ය අනන්‍යතාව', 'ස්ථාවර සන්නාම අත්දැකීම'],
      cta: 'සන්නාමකරණ සේවා බලන්න',
    },
    connected: {
      eyebrow: 'එක් සම්බන්ධිත සැලැස්මක්',
      title: 'එක් සම්බන්ධිත සැලැස්මක්. වඩා හොඳ ව්‍යාපාර වර්ධනයක්.',
      body: 'ශක්තිමත් ඩිජිටල් පැවැත්මක් ගොඩනැඟීමට, පාරිභෝගිකයන් ආකර්ෂණය කර ගැනීමට සහ කාර්යක්ෂමව වර්ධනය වීමට RYZITE අලෙවිකරණය සහ තාක්ෂණය එකට ගෙන එයි.',
      marketing: 'අලෙවිකරණ සේවා',
      technology: 'තාක්ෂණික විසඳුම්',
      result: 'සම්බන්ධිත ඩිජිටල් වර්ධනය',
      highlights: [
        'ඔබේ ඩිජිටල් පදනම ගොඩනඟන්න.',
        'නිවැරදි පාරිභෝගිකයන් වෙත ළඟා වන්න.',
        'අලෙවිකරණය තාක්ෂණය සමඟ සම්බන්ධ කරන්න.',
        'ව්‍යාපාරික කාර්යක්ෂමතාව වැඩි කරන්න.',
        'දිගුකාලීන වර්ධනයට සහාය වන්න.',
      ],
    },
    packages: {
      eyebrow: 'පැකේජ',
      title: 'සුදුසු ආරම්භක ලක්ෂ්‍යයක් සොයා ගන්න.',
      intro: 'විශේෂාංග සහ කාර්ය පරාසය සොයා බැලීමට උපකාරී වන යෝජිත පැකේජ විකල්ප තුනක්. මිල සහ ඇතුළත් දෑ එක් එක් ව්‍යාපෘතිය සඳහා තහවුරු කෙරේ.',
      suitableLabel: 'සුදුසු වන්නේ',
      suitable: [
        'පුද්ගලයන්, ආරම්භක ව්‍යාපාර සහ කුඩා ව්‍යාපාර',
        'වැඩි පිටු සහ අන්තර්ගත කළමනාකරණය අවශ්‍ය ව්‍යාපාර',
        'උසස් විශේෂාංග සහ ඒකාබද්ධතා අවශ්‍ය වර්ධනය වන ව්‍යාපාර',
      ],
      cta: 'පැකේජ බලන්න',
    },
    payments: {
      eyebrow: 'ගෙවීම් විකල්ප',
      title: 'නම්‍යශීලී ගෙවීම්. පැහැදිලි අදියර.',
      intro: 'ව්‍යාපෘති ගෙවීම් සකස් කළ හැකි ආකාරය පිළිබඳ සාමාන්‍ය දළ විශ්ලේෂණයක්.',
      steps: [
        { title: 'මූලික ගෙවීම', body: 'ඔබේ යෝජනාවේ සඳහන් පරිදි, ව්‍යාපෘතිය ආරම්භ කිරීම සඳහා මූලික ගෙවීමක්.' },
        { title: 'අදියර ගෙවීම්', body: 'ඔබේ යෝජනාවට ඇතුළත් නම්, එකඟ වූ ව්‍යාපෘති අදියරවලට සම්බන්ධ 0% පොලී ගෙවීම්.' },
        { title: 'අවසන් ගෙවීම සහ භාරදීම', body: 'ව්‍යාපෘතිය අවසන් වූ පසු අවසන් ගෙවීමක්, ඉන්පසු එකඟ වූ ව්‍යාපෘති භාරදීම.' },
      ],
    },
    process: {
      eyebrow: 'අප වැඩ කරන ආකාරය',
      title: 'ආරම්භයේ සිට දියත් කිරීම දක්වා පැහැදිලි ක්‍රියාවලියක්.',
      cta: 'අප වැඩ කරන ආකාරය බලන්න',
    },
    trust: {
      eyebrow: 'අප සමඟ වැඩ කරන්නේ ඇයි',
      title: 'යෝජනාවේ සිට භාරදීම දක්වා පැහැදිලි ය.',
      intro: 'එකඟ වූ දේ සහ ඊළඟට එන දේ ඔබ සැමවිටම දැනගන්නා සරල වැඩ ක්‍රමයක්.',
      items: [
        { title: 'පැහැදිලි යෝජනා', body: 'ඔබේ ව්‍යාපෘති පරාසය සහ ඊළඟ පියවර ඔබට සමාලෝචනය කර අනුමත කිරීමට යෝජනාවක සඳහන් කෙරේ.' },
        { title: 'විනිවිද පෙනෙන සන්නිවේදනය', body: 'තීරණ, ප්‍රශ්න සහ ප්‍රගතිය ව්‍යාපෘතිය පුරා පහසුවෙන් තේරුම් ගත හැකි ලෙස තබා ගැනේ.' },
        { title: 'වෘත්තීය ව්‍යාපෘති ඉටු කිරීම', body: 'ක්‍රියාකාරීත්වය, ප්‍රතිචාරාත්මක බව සහ ප්‍රවේශ්‍යතාව සමාලෝචනය සමඟ එකඟ වූ ක්‍රියාවලියක් අනුව වැඩ සිදු කෙරේ.' },
        { title: 'අඛණ්ඩ නඩත්තුව', body: 'දියත් කිරීමෙන් පසු, විකල්ප රැකවරණ සහ නඩත්තු සේවාව ඔබේ වෙබ් අඩවිය යාවත්කාලීනව සහ සුමටව ක්‍රියාත්මක කරයි.' },
      ],
    },
    faq: {
      eyebrow: 'නිතර අසන ප්‍රශ්න',
      title: 'නිතර අසන ප්‍රශ්න.',
      items: [
        { question: 'RYZITE සපයන සේවා මොනවාද?', answer: 'සෙවුම් දෘශ්‍යතාව, දැන්වීම්, සමාජ මාධ්‍ය, සන්නාමකරණය සහ අන්තර්ගතය වැනි අලෙවිකරණ සේවා මෙන්ම වෙබ් අඩවි, මාර්ගගත වෙළඳසැල්, අභිරුචි මෘදුකාංග, ජංගම යෙදුම්, චැට්බොට්, ස්වයංක්‍රීයකරණය සහ වෙබ් අඩවි නඩත්තුව ඇතුළු තාක්ෂණික විසඳුම් ද RYZITE සපයයි.' },
        { question: 'ව්‍යාපෘතියක් ආරම්භ කරන්නේ කෙසේද?', answer: 'අපගේ සම්බන්ධතා පිටුව හරහා ඔබේ ඉලක්ක සහ අවශ්‍යතා බෙදා ගන්න. ඔබේ අවශ්‍යතා ගැන සාකච්ඡා කර සුදුසු ප්‍රවේශයක් එකට සොයා බලමු.' },
        { question: 'වෙබ් අඩවි ව්‍යාපෘතියකට කොපමණ කාලයක් ගතවේද?', answer: 'කාලසීමාව එකඟ වූ කාර්ය පරාසය, විශේෂාංග සහ අන්තර්ගතය මත රඳා පවතී. ව්‍යාපෘති සැලසුම් කිරීමේදී කාලසීමාව සාකච්ඡා කර තහවුරු කෙරේ.' },
        { question: 'අලෙවිකරණය සහ තාක්ෂණය යන දෙකටම RYZITE උදව් කළ හැකිද?', answer: 'ඔව්. RYZITE අලෙවිකරණ සේවා සහ තාක්ෂණික විසඳුම් එකට ගෙන එන බැවින්, දෙකම එක් සම්බන්ධිත ව්‍යාපෘතියක් ලෙස සැලසුම් කළ හැක.' },
        { question: 'ව්‍යාපෘති ගෙවීම් හසුරුවන්නේ කෙසේද?', answer: 'ගෙවීම් මුදල්, කාලසටහන් සහ අදියර ඔබේ පුද්ගලික ව්‍යාපෘති යෝජනාවේ සාකච්ඡා කර තහවුරු කෙරේ.' },
        { question: 'අභිරුචිකරණය කළ විසඳුමක් ඉල්ලිය හැකිද?', answer: 'ඔව්. අමතර හෝ අභිරුචි අවශ්‍යතා ව්‍යාපෘති පරාසය අනුව සාකච්ඡා කර ඇගයීමට ලක් කළ හැක.' },
      ],
    },
    closing: {
      eyebrow: 'කතා කරමු',
      title: 'අර්ථවත් දෙයක් ගොඩනඟමු.',
      body: 'ඔබට ව්‍යාපාරික අදහසක් හෝ ව්‍යාපෘතියක් තිබේද? එයට ජීවය දීමට RYZITE උදව් කළ හැකි ආකාරය සොයා බලමු.',
      primary: 'ව්‍යාපෘතියක් අරඹන්න',
      secondary: 'අපගේ සේවා බලන්න',
    },
  },
};
