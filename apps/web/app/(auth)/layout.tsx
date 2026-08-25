"use client";

import type { ReactNode } from "react";
import { Header } from "@workspace/marketing";
import { useCore } from "@workspace/data";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const { data: coreData, isLoading } = useCore();

  if (isLoading || !coreData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <Header siteName={coreData.site.name} navItems={coreData.navigation} />
      {children}
    </>
  );
}
