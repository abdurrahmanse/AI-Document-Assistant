"use client";

import { Header, Footer } from "@workspace/marketing";
import { useCore, useLegal } from "@workspace/data";

export default function TermsPage() {
  const { data: coreData, isLoading: coreLoading } = useCore();
  const { data: legalData, isLoading: legalLoading } = useLegal();

  if (coreLoading || legalLoading || !coreData || !legalData) return null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header siteName={coreData.site.name} navItems={coreData.navigation} />
      <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{legalData.terms.title}</h1>
        <div className="prose prose-invert max-w-none">
          <p>{legalData.terms.effectiveDate}: {new Date().toLocaleDateString()}</p>
          <p className="mt-4">{legalData.terms.content}</p>
        </div>
      </main>
      <Footer siteName={coreData.site.name} footerLinks={coreData.footerLinks} />
    </div>
  );
}
