"use client";

import { FadeInView } from "@workspace/ui/components/ui/motion";
import { plans, faqs } from "../../../modules/pricing/config/pricing";
import { PricingCard } from "../../../modules/pricing/components/pricing-card";
import { FAQSection } from "../../../modules/pricing/components/faq-section";

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center pb-24 px-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="text-center space-y-4 max-w-3xl mx-auto py-16 md:py-24 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Simple, transparent pricing</h1>
        <p className="text-xl text-muted-foreground">Start for free, upgrade when you need to. No hidden fees.</p>
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
