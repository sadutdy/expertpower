"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ChunkErrorHandler() {
  const router = useRouter();

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (
        event.error?.name === "ChunkLoadError" ||
        event.message?.includes("Loading chunk") ||
        event.message?.includes("Failed to fetch dynamically imported module")
      ) {
        event.preventDefault();
        window.location.reload();
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      if (
        reason?.name === "ChunkLoadError" ||
        reason?.message?.includes("Loading chunk") ||
        reason?.message?.includes("Failed to fetch dynamically imported module") ||
        reason?.message?.includes("Importing a module script failed")
      ) {
        event.preventDefault();
        window.location.reload();
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, [router]);

  return null;
}
