import { Header } from "../modules/core/components/layout/header";
import { Footer } from "../modules/core/components/layout/footer";
import { MarketingHero } from "../modules/home/components/hero";
import { SocialProof } from "../modules/home/components/social-proof";
import { FeaturesGrid } from "../modules/home/components/features-grid";
import { InteractiveDemo } from "../modules/home/components/interactive-demo";

export default function WebHomepage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Header />
      <MarketingHero />
      <SocialProof />
      <FeaturesGrid />
      <InteractiveDemo />
      <Footer />
    </div>
  );
}
