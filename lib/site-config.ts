import {
  CRASH_LAB_URL,
  EMAIL_PRIMARY,
  LINKEDIN_URL,
  ORCID_URL,
  RESEARCHGATE_URL,
  SCHOLAR_URL,
  TWITTER_URL,
} from "@/lib/identity";

export const SITE_URL = "https://drdattaaiims.github.io";
export const SITE_NAME = "Suvrankar Datta";
export const SITE_UPDATED = "7 Aug 2026";

export const navigationItems = [
  { key: "work", label: "Work", href: "/research.html" },
  { key: "clinical", label: "Clinical & Global Health", href: "/clinical-global-health.html" },
  { key: "publications", label: "Publications", href: "/publications.html" },
  { key: "talks", label: "Talks", href: "/talks.html" },
  { key: "awards", label: "Awards", href: "/awards.html" },
  { key: "journey", label: "Journey", href: "/journey.html" },
  { key: "cv", label: "CV", href: "/cv/" },
  { key: "contact", label: "Contact", href: "/#contact" },
] as const;

export const footerLinks = [
  { label: "Talks", href: "/talks.html", external: false },
  { label: "Awards", href: "/awards.html", external: false },
  { label: "Disclosures", href: "/disclosures.html", external: false },
  { label: "CRASH Lab ↗", href: CRASH_LAB_URL, external: true },
] as const;

export const identityProfiles = {
  email: EMAIL_PRIMARY,
  linkedin: LINKEDIN_URL,
  twitter: TWITTER_URL,
  orcid: ORCID_URL,
  researchGate: RESEARCHGATE_URL,
  scholar: SCHOLAR_URL,
  crashLab: CRASH_LAB_URL,
};
