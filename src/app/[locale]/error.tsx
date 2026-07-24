"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-display text-3xl text-foreground">
        Something went wrong
      </h1>
      <p className="max-w-md text-muted-foreground">
        We could not load this page. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full bg-[#E8B62D] px-8 py-3.5 text-sm font-semibold text-[#2C2117] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5C845]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
