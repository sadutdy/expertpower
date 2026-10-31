"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // ChunkLoadError happens when client-side navigation loads a stale chunk
    // after the dev server rebuilds. A hard reload always fixes it.
    if (
      error?.name === "ChunkLoadError" ||
      error?.message?.includes("Loading chunk") ||
      error?.message?.includes("Failed to fetch dynamically imported module") ||
      error?.message?.includes("Importing a module script failed")
    ) {
      window.location.reload();
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white">
          Something went wrong
        </h2>
        <p className="text-gray-500">
          {error?.message?.includes("chunk") || error?.message?.includes("module")
            ? "Reloading page…"
            : "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="px-6 py-2 bg-[#DC2626] text-white rounded-lg hover:bg-[#B91C1C] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
