"use client";

import { sections } from "../../../config/marketing/docs";
import { DocsHero } from "../../../components/marketing/docs/docs-hero";
import { DocsCard } from "../../../components/marketing/docs/docs-card";

export default function DocsPage() {
  return (
    <div className="flex flex-col items-center pb-24 overflow-hidden min-h-screen relative">
      <div className="absolute top-0 w-full h-[400px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      
      <DocsHero />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 relative z-10 w-full">
        {sections.map((section, i) => (
          <DocsCard key={i} section={section} index={i} />
        ))}
      </div>
    </div>
  );
}
