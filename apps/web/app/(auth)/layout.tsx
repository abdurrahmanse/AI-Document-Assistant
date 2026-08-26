"use client";

import type { ReactNode } from "react";
import { Logo } from "@workspace/marketing";
import { useCore } from "@workspace/data";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const { data: coreData, isLoading } = useCore();

  if (isLoading || !coreData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <div className="absolute top-0 left-0 p-6 md:p-8 z-50">
        <Logo siteName={coreData.site.name} />
      </div>
      {children}
    </>
  );
}
