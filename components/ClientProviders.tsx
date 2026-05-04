"use client";

import dynamic from "next/dynamic";
import { CookieBanner } from "./CookieBanner";
import PostHogProvider from "./PostHogProvider";

// Import dynamique du popup email — chargé uniquement après interaction (non bloquant)
const LeadEmailPopup = dynamic(
  () => import("./LeadEmailPopup").then((m) => ({ default: m.LeadEmailPopup })),
  { ssr: false }
);

export function ClientProviders() {
  return (
    <>
      <PostHogProvider />
      <CookieBanner />
      <LeadEmailPopup />
    </>
  );
}
