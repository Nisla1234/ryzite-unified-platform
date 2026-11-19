// Copy for the "From Idea to Solution" scroll animation (planned for the One Connected Plan section).
//
// Status:
// - [PROPOSAL] English captions approved as draft copy by the client (2026-11-18).
// - [PROPOSAL] Tamil and Sinhala captions are draft translations and need native-speaker review before launch.
// - Preview only: not on the homepage until the client approves the /preview/idea-to-solution page.

export type IdeaStoryCopy = {
  label: string;
  captions: [string, string, string, string];
};

export const ideaStoryTranslations: Record<'en' | 'ta' | 'si', IdeaStoryCopy> = {
  en: {
    label: 'From idea to solution',
    captions: [
      'It starts with your idea.',
      'We shape it into connected parts.',
      'Websites, marketing and technology.',
      'One digital presence for your business.',
    ],
  },
  ta: {
    label: 'யோசனையிலிருந்து தீர்வு வரை',
    captions: [
      'எல்லாம் உங்கள் யோசனையிலிருந்து தொடங்குகிறது.',
      'அதை ஒன்றோடொன்று இணைந்த பகுதிகளாக வடிவமைக்கிறோம்.',
      'இணையதளங்கள், மார்க்கெட்டிங் மற்றும் தொழில்நுட்பம்.',
      'உங்கள் வணிகத்திற்கான ஒரே டிஜிட்டல் இருப்பு.',
    ],
  },
  si: {
    label: 'අදහසේ සිට විසඳුම දක්වා',
    captions: [
      'සියල්ල ආරම්භ වන්නේ ඔබේ අදහසිනි.',
      'අපි එය එකිනෙක සම්බන්ධ වූ කොටස් ලෙස හැඩගස්වමු.',
      'වෙබ් අඩවි, අලෙවිකරණය සහ තාක්ෂණය.',
      'ඔබේ ව්‍යාපාරය සඳහා එක් ඩිජිටල් පැවැත්මක්.',
    ],
  },
};
