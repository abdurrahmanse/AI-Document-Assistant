"use client";

import { websiteData } from "@workspace/data";
import { TimelineHero } from "@workspace/marketing";
import { TimelineStep, type TimelineStepProps } from "@workspace/marketing";

export default function HowItWorksPage() {
  const { steps } = websiteData.howItWorks;

  return (
    <div className="flex flex-col items-center pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <TimelineHero />

      <div className="max-w-4xl mx-auto w-full px-4 relative z-10">
        {/* Vertical Line */}
        <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-24 py-12">
          {steps.map((step, i) => (
            <TimelineStep key={i} step={step as TimelineStepProps["step"]} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
