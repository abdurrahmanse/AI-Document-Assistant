"use client";

import { deepDives } from "../../../modules/features/config/features";
import { FeaturesHero } from "../../../modules/features/components/features-hero";
import { FeatureDeepDive } from "../../../modules/features/components/feature-deep-dive";

export default function FeaturesPage() {
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
