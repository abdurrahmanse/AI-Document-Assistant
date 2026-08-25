"use client";

import { FadeInView } from "@workspace/ui/components/ui/motion";
import { usePricing } from "@workspace/data";
import { PricingCard } from "../index";
import { FAQSection } from "../index";

export function PricingFeature() {
  const { data: pricingData, isLoading } = usePricing();

  if (isLoading || !pricingData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const { hero, plans, faqs } = pricingData;

  return (
    <div className="flex flex-col items-center pb-24 px-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-32 pb-16 md:pt-40 md:pb-24 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">{hero.title}</h1>
        <p className="text-xl text-muted-foreground">{hero.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10 w-full mb-24">
        {plans.map((plan, i) => (
          <FadeInView key={plan.name} delay={i * 0.1} yOffset={30}>
            <PricingCard plan={plan} />
          </FadeInView>
        ))}
      </div>

      <FAQSection faqs={faqs} />
    </div>
  );
}
