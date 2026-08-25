"use client";

import { websiteData } from "@workspace/data";
import { FeaturesHero } from "@workspace/marketing";
import { FeatureDeepDive } from "@workspace/marketing";

export default function FeaturesPage() {
  const { deepDives } = websiteData.features;

  return (
    <div className="flex flex-col items-center pb-24 overflow-hidden relative">
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent -z-10" />
      
      <FeaturesHero />

      <div className="w-full max-w-7xl mx-auto px-4 space-y-32 py-12">
        {deepDives.map((feature, i) => (
          <FeatureDeepDive key={i} feature={feature} />
        ))}
      </div>
    </div>
  );
}
