"use client";

import { GeneralErrorContent } from '@workspace/ui/components/errors';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <GeneralErrorContent error={error} reset={reset} />
      </body>
    </html>
  );
}
