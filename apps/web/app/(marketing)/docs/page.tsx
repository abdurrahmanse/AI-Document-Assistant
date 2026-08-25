"use client";

import { useDocs } from "@workspace/data";
import { DocsHero } from "@workspace/marketing";
import { DocsCard } from "@workspace/marketing";
import type { DocsCardProps } from "@workspace/types";

export default function DocsPage() {
  const { data: docsData, isLoading } = useDocs();

  if (isLoading || !docsData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const { sections } = docsData;

  return (
    <div className="flex flex-col items-center pb-24 overflow-hidden min-h-screen relative">
      <div className="absolute top-0 w-full h-[400px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      
      <DocsHero hero={docsData.hero} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 relative z-10 w-full">
        {sections.map((section, i) => (
          <DocsCard key={i} section={section as DocsCardProps["section"]} index={i} />
        ))}
      </div>
    </div>
  );
}
