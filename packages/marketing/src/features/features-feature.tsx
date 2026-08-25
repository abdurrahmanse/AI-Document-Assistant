"use client";

import { useFeatures } from "@workspace/data";
import { FeaturesHero } from "../index";
import { FeatureDeepDive } from "../index";

export function FeaturesFeature() {
  const { data: featuresData, isLoading } = useFeatures();

  if (isLoading || !featuresData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const { deepDives } = featuresData;

  return (
    <div className="flex flex-col items-center pb-24 overflow-hidden relative">
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent -z-10" />
      
      <FeaturesHero hero={featuresData.hero} />

      <div className="w-full max-w-7xl mx-auto px-4 space-y-32 py-12">
        {deepDives.map((feature, i) => (
          <FeatureDeepDive key={i} feature={feature} />
        ))}
      </div>
    </div>
  );
}
