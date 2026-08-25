"use client";

import { 
  Header, 
  Footer, 
  MarketingHero, 
  SocialProof, 
  FeaturesGrid, 
  InteractiveDemo 
} from "@workspace/marketing";
import { useHome, useCore } from "@workspace/data";

export default function WebHomepage() {
  const { data: homeData, isLoading: isHomeLoading } = useHome();
  const { data: coreData, isLoading: isCoreLoading } = useCore();

  if (isHomeLoading || isCoreLoading || !homeData || !coreData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Header siteName={coreData.site.name} navItems={coreData.navigation} />
      <MarketingHero hero={homeData.hero} />
      <SocialProof socialProof={homeData.socialProof} />
      <FeaturesGrid features={homeData.features} />
      <InteractiveDemo interactiveDemo={homeData.interactiveDemo} />
      <Footer siteName={coreData.site.name} footerLinks={coreData.footerLinks} />
    </div>
  );
}
