"use client";

import dynamic from "next/dynamic";
import { CookieBanner } from "./CookieBanner";
import PostHogProvider from "./PostHogProvider";
import LinkedInInsight from "./LinkedInInsight";

// Import dynamique du popup email, chargé uniquement après interaction (non bloquant)
const LeadEmailPopup = dynamic(
  () => import("./LeadEmailPopup").then((m) => ({ default: m.LeadEmailPopup })),
  { ssr: false }
);

// Sticky CTA mobile, booste les conversions mobile (+15-25% attendu)
const StickyMobileCTA = dynamic(() => import("./StickyMobileCTA"), { ssr: false });

export function ClientProviders() {
  return (
    <>
      <PostHogProvider />
      <LinkedInInsight />
      <CookieBanner />
      <LeadEmailPopup />
      <StickyMobileCTA />
    </>
  );
}
