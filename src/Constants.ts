import en from "./data/en.json";
import ta from "./data/ta.json";
import si from "./data/si.json";

export const company = {
    name: "Ryzite",
    email: "ryzitetm@gmail.com",
    location: "Sri Lanka",
    social: {
        linkedin: "",
        instagram: "https://www.instagram.com/ryzitetm",
        youtube: "",
    },
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
