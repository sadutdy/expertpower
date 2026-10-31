"use client";

import { useEffect } from "react";

// Tawk.to live chat widget — real Expert Power IDs
const TAWK_PROPERTY_ID = "6a8965f0df6d0434484b98b1";
const TAWK_WIDGET_ID = "1k0kbcdho";

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

export function LiveChat() {
  useEffect(() => {
    // Avoid duplicate injection
    if (document.querySelector('script[src*="embed.tawk.to"]')) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      try {
        document.head.removeChild(script);
      } catch {
        // script may already be removed
      }
    };
  }, []);

  return null;
}
