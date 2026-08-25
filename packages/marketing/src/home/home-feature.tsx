"use client";

import { 
  Header, 
  Footer, 
  MarketingHero, 
  SocialProof, 
  FeaturesGrid, 
  InteractiveDemo,
  TimelineStep,
  SecurityBentoCard,
  PricingCard,
  FAQSection
} from "../index";
import { FadeInView } from "@workspace/ui/components/ui/motion";
import { Button } from "@workspace/ui/components/ui/button";
import type { TimelineStepProps, SecurityBentoCardProps } from "@workspace/types";
import { useHome, useCore, useHowItWorks, useSecurity, usePricing } from "@workspace/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeFeature() {
  const { data: homeData, isLoading: isHomeLoading } = useHome();
  const { data: coreData, isLoading: isCoreLoading } = useCore();
  const { data: howItWorksData, isLoading: isHowItWorksLoading } = useHowItWorks();
  const { data: securityData, isLoading: isSecurityLoading } = useSecurity();
  const { data: pricingData, isLoading: isPricingLoading } = usePricing();

  if (
    isHomeLoading || isCoreLoading || isHowItWorksLoading || isSecurityLoading || isPricingLoading ||
    !homeData || !coreData || !howItWorksData || !securityData || !pricingData
  ) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Header siteName={coreData.site.name} navItems={coreData.navigation} />
      
      {/* 1. Hero */}
      <MarketingHero hero={homeData.hero} />
      
      {/* 2. Product value proposition */}
      <SocialProof socialProof={homeData.socialProof} />
      
      {/* 3. How RAG works */}
      <div className="py-24 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{homeData.howItWorksSection.title}</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            {homeData.howItWorksSection.description}
          </p>
        </div>
        <div className="max-w-4xl mx-auto w-full px-4 relative z-10">
          <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2 hidden md:block" />
          <div className="space-y-24 py-12">
            {howItWorksData.steps.map((step, i) => (
              <TimelineStep key={i} step={step as TimelineStepProps["step"]} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* 4. Feature grid */}
      <FeaturesGrid features={homeData.features} featuresSection={homeData.featuresSection} />
      
      {/* 5. Security/privacy */}
      <div className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{homeData.securitySection.title}</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            {homeData.securitySection.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 relative z-10 w-full">
          {securityData.features.map((feature, i) => (
            <SecurityBentoCard key={i} feature={feature as SecurityBentoCardProps["feature"]} index={i} />
          ))}
        </div>
      </div>

      {/* 6. Workflow demo */}
      <InteractiveDemo interactiveDemo={homeData.interactiveDemo} />
      
      {/* 7. Pricing */}
      <div className="py-24 bg-muted/30" id="pricing">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{homeData.pricingSection.title}</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            {homeData.pricingSection.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 relative z-10 w-full">
          {pricingData.plans.map((plan, i) => (
            <FadeInView key={plan.name} delay={i * 0.1} yOffset={30}>
              <PricingCard plan={plan} />
            </FadeInView>
          ))}
        </div>
      </div>

      {/* 8. FAQ */}
      <div className="py-24">
        <FAQSection faqs={pricingData.faqs} />
      </div>

      {/* 9. CTA */}
      <div className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{homeData.cta.title}</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            {homeData.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="gap-2 text-lg h-14 px-8" asChild>
              <Link href="/register">
                {homeData.cta.primaryButton} <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg h-14 px-8 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 border-primary-foreground/20" asChild>
              <Link href="/contact">
                {homeData.cta.secondaryButton}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 10. Footer */}
      <Footer siteName={coreData.site.name} footerLinks={coreData.footerLinks} />
    </div>
  );
}
