"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ReactNode } from "react";

export function NuqsProvider({ children }: { children: ReactNode }) {
  return <NuqsAdapter>{children}</NuqsAdapter>;
}
