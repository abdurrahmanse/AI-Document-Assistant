"use client";
import { GeneralErrorContent } from "@workspace/ui/components/errors";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <GeneralErrorContent error={error} reset={reset} />;
}
