"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

export default function PostHogProvider() {
  useEffect(() => {
    posthog.init("phc_ALRnDPcuJmXLj9cdid2fGJgLX8t5Buqeu6hfg5aGyuEU", {
      api_host: "https://eu.i.posthog.com",
      defaults: "2026-01-30",
    });
  }, []);
  return null;
}
