import en from "./data/en.json";
import ta from "./data/ta.json";
import si from "./data/si.json";

export const company = {
    name: "Ryzite",
    email: "info@ryzite.lk",
    location: "Sri Lanka",
    whatsapp: {
        display: "+94 72 650 8419",
        number: "94726508419",
    },
    social: {
        linkedin: "",
        instagram: "https://www.instagram.com/ryzitetm",
        youtube: "",
    },
} as const;

// Web3Forms access keys are public by design: they identify the form, they do not grant dashboard access.
export const enquiryForm = {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "c93382fc-790f-4cf0-bfa0-493c9fc7ed69",
    subject: "New project enquiry — RYZITE website",
    fromName: "RYZITE Website",
} as const;

export const locales = ["en", "ta", "si"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
    en: "English",
    ta: "தமிழ்",
    si: "සිංහල",
};

export const siteContent = { en, ta, si } as const;
export type SiteContent = (typeof siteContent)[Locale];

export const defaultLocale: Locale = "en";

export function isLocale(value: string | null): value is Locale {
    return locales.includes(value as Locale);
}
