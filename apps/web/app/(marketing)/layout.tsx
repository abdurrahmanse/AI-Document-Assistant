"use client";

import type { ReactNode } from "react";
import { Header } from "@workspace/marketing";
import { Footer } from "@workspace/marketing";
import { useCore } from "@workspace/data";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: coreData, isLoading } = useCore();

  if (isLoading || !coreData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header siteName={coreData.site.name} navItems={coreData.navigation} />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer siteName={coreData.site.name} footerLinks={coreData.footerLinks} />
    </div>
  );
}
